'use client';

import { useState, useCallback } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TaskList from '@/components/TaskList';

export default function TasksPage() {
  const [date, setDate] = useState(new Date());
  
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
              <Input placeholder="Pietro Schirano" />
            </div>
            <div className="text-sm text-gray-500">Add and update tasks here</div>
            <div>
              <label className="block mb-1">Deadline</label>
              <Input placeholder="Pietro Schirano" />
            </div>
            <div>
              <label className="block mb-1">Category</label>
              <Input placeholder="@skirano" />
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