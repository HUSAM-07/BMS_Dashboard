import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { feedbackThemes } from '@/lib/content';

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Feedback from Advisors</h1>
      <div className="space-y-4">
        {feedbackThemes.map((theme, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{theme.theme}</CardTitle>
              <CardDescription>Mentioned by {theme.count} advisors</CardDescription>
              <p className="mt-2">Action Item: {theme.action}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}