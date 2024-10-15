"use client"

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

interface InventoryItem {
  id: string;
  qrCode: string;
  quantity: number;
  description: string;
}

export default function InventoryPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    const mockInventory: InventoryItem[] = [
      { id: '1', qrCode: 'QR001', quantity: 5, description: 'Item 1' },
      { id: '2', qrCode: 'QR002', quantity: 10, description: 'Item 2' },
      { id: '3', qrCode: 'QR003', quantity: 3, description: 'Item 3' },
    ];
    setInventory(mockInventory);
  }, []);

  const filteredInventory = inventory.filter(item =>
    item.qrCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <Input
        type="text"
        placeholder="Search inventory..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>QR Code</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.qrCode}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}