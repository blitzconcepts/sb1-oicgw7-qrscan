import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">QR Inventory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Scan QR Code</CardTitle>
            <CardDescription>Add or update inventory items by scanning QR codes</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/scan">
              <Button className="w-full">Scan QR Code</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>View Inventory</CardTitle>
            <CardDescription>See all items in your inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/inventory">
              <Button className="w-full">View Inventory</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}