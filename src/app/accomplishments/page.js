import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const accomplishments = [
  { date: "2023-06", title: "First Place in Regional Competition", description: "Outperformed 20 other teams in design and racing categories" },
  { date: "2023-09", title: "Sponsorship Revenue Increased by 30%", description: "Successfully secured new major sponsors" },
  { date: "2024-01", title: "Team Efficiency Improved by 25%", description: "Implemented new project management tools and workflows" },
];

export default function AccomplishmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Accomplishments</h1>
      <div className="space-y-4">
        {accomplishments.map((accomplishment, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{accomplishment.title}</CardTitle>
              <CardDescription>{accomplishment.date}</CardDescription>
              <p className="mt-2">{accomplishment.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
