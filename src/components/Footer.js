'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Developed by Mohammed Husamuddin,<br className="sm:hidden" /> Ex-Head of Business and Marketing
        </p>
        <Button 
          variant="outline" 
          size="sm"
          className="w-full sm:w-auto"
          onClick={() => window.open('https://www.linkedin.com/in/mohammedhusamuddin/', '_blank')}
        >
          View Profile
        </Button>
      </div>
    </footer>
  );
}