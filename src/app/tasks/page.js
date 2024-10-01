'use client';

import { useState, useCallback } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TaskList from '@/components/TaskList';

const categories = [
  { value: "sponsorships", label: "Sponsorships" },
  { value: "car-design", label: "Car Design" },
  { value: "marketing", label: "Marketing" },
  { value: "administrative", label: "Administrative" },
  { value: "logistics", label: "Logistics" },
];

export default function TasksPage() {
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");
  
  const handleDateSelect = useCallback((newDate) => {
    setDate(newDate);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 inline-block px-3 py-1 rounded-full mb-4">
        BITS Motorsports
      </div>
      <h1 className="text-4xl font-bold mb-8">All Tasks & Project Timeline</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex mb-4">
            <Button variant="outline" className="mr-2">Tasks</Button>
            <Button variant="ghost">View Tasks</Button>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Task Name</label>
              <Input placeholder="Enter task name" />
            </div>
            <div className="text-sm text-gray-500">Add and update tasks here</div>
            <div>
              <label className="block mb-1">Deadline</label>
              <Input type="date" />
            </div>
            <div>
              <label className="block mb-1">Category</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Publish Task</Button>
          </form>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Timeline</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="rounded-md border"
            />
          </div>
        </div>
      </div>
      
      <TaskList />
    </div>
  );
}