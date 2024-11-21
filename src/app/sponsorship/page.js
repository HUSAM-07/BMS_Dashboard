'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const sponsorshipLevels = ["Platinum", "Gold", "Silver", "Bronze"];

export default function SponsorshipPage() {
  const [sponsors, setSponsors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingSponsor, setEditingSponsor] = useState(null);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    } else {
      fetchSponsors();
    }
  }, [user, router]);

  const fetchSponsors = async () => {
    const querySnapshot = await getDocs(collection(db, "sponsors"));
    setSponsors(querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sponsorData = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      level: formData.get('level'),
      benefits: formData.get('benefits'),
    };

    try {
      if (editingSponsor) {
        await updateDoc(doc(db, "sponsors", editingSponsor.id), sponsorData);
        toast("Sponsor updated successfully");
      } else {
        await addDoc(collection(db, "sponsors"), sponsorData);
        toast("Sponsor added successfully");
      }
      setIsOpen(false);
      setEditingSponsor(null);
      fetchSponsors();
    } catch (error) {
      toast({ 
        title: "Error", 
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "sponsors", id));
      toast("Sponsor deleted successfully");
      fetchSponsors();
    } catch (error) {
      toast({ 
        title: "Error", 
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Sponsorship Database</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingSponsor(null)}>Add Sponsor</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingSponsor ? 'Edit' : 'Add'} Sponsor</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Sponsor Name"
                defaultValue={editingSponsor?.name}
              />
              <Input
                name="contact"
                placeholder="Contact Email"
                defaultValue={editingSponsor?.contact}
              />
              <Select name="level" defaultValue={editingSponsor?.level}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
                  {sponsorshipLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                name="benefits"
                placeholder="Benefits"
                defaultValue={editingSponsor?.benefits}
              />
              <Button type="submit">Save</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Benefits</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sponsors.map((sponsor) => (
            <TableRow key={sponsor.id}>
              <TableCell>{sponsor.name}</TableCell>
              <TableCell>{sponsor.contact}</TableCell>
              <TableCell>{sponsor.level}</TableCell>
              <TableCell>{sponsor.benefits}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  onClick={() => {
                    setEditingSponsor(sponsor);
                    setIsOpen(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(sponsor.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}