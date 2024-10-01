'use client';

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { assets } from '@/lib/content';

export default function AssetsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Creative Assets</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset, index) => (
            <TableRow key={index}>
              <TableCell>{asset.title}</TableCell>
              <TableCell>{asset.description}</TableCell>
              <TableCell>{asset.usage}</TableCell>
              <TableCell>
                {asset.fileLink && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mr-2"
                    onClick={() => window.open(asset.fileLink, '_blank')}
                  >
                    {asset.fileLinkIcon && <asset.fileLinkIcon className="mr-2 h-4 w-4" />}
                    View File
                  </Button>
                )}
                {asset.webLink && (
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(asset.webLink, '_blank')}
                  >
                    {asset.webLinkIcon && <asset.webLinkIcon className="mr-2 h-4 w-4" />}
                    Open Link
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}