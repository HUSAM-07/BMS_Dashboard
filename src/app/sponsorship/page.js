import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sponsors } from '@/lib/content';

export default function SponsorshipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Sponsorship Database</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Benefits</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sponsors.map((sponsor, index) => (
            <TableRow key={index}>
              <TableCell>{sponsor.name}</TableCell>
              <TableCell>{sponsor.contact}</TableCell>
              <TableCell>{sponsor.level}</TableCell>
              <TableCell>{sponsor.benefits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}