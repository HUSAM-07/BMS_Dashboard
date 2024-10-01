import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { tools } from '@/lib/content';
import Image from 'next/image';

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Internal Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <Image src="/webflow.svg" alt={tool.name} width={100} height={100} className="mb-4 mx-auto" />
            </CardContent>
            <CardHeader>
              <CardTitle className="flex items-center">
                <tool.icon className="w-6 h-6 mr-2" />
                {tool.name}
              </CardTitle>
              <CardDescription>{tool.description}</CardDescription>
              <p className="text-sm text-gray-500 mt-2">Usage: {tool.usage}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}