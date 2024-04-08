'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { toast } from 'sonner';

export function UpdateForm() {
  const handleSubmit = () => {
    console.log('Submitted');
    toast.info('Profile updated successfully!');
  };
  return (
    <Card className="w-full">
      <CardContent className="grid gap-4">
        <div className="grid gap-2 pt-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="name" required />
        </div>
        <div className="grid gap-2 pt-2">
          <Label htmlFor="name">Business Owner Name</Label>
          <Input id="name" type="name" required />
        </div>
        <div className="grid gap-2 pt-2">
          <Label htmlFor="name">Industry</Label>
          <Input id="name" type="name" required />
        </div>
        <div className="grid gap-2 pt-2">
          <Label htmlFor="name">Unique Selling Proposition (USP)</Label>
          <Input id="name" type="name" required />
        </div>
        <div className="grid gap-2 pt-2">
          <Label htmlFor="name">Twitter</Label>
          <Input id="name" type="name" required />
        </div>
        <div className="grid gap-2 pt-2">
          <Label htmlFor="name">LinkedIn</Label>
          <Input id="name" type="name" required />
        </div>
      </CardContent>
    </Card>
  );
}

export default UpdateForm;
