import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { TextRevealCard } from '@/components/ui/text-reveal-card';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4 min-h-screen">
      <div className="font-bold text-5xl md:text-8xl">ThriveStart</div>
      <TextRevealCard
        text="You know the business"
        revealText="We know the chemistry "
      />
      <div className="w-full md:max-w-lg">
        <p className="text-center text-lg">
          Where data meets opportunity, connecting micro-businesses with
          investors seamlessly while empowering growth, driving prosperity, and
          eradicating poverty through smart suggestions and transparent
          investment pathways.
        </p>
      </div>
      <div className="space-x-6 flex pt-6">
        <Link href="/login">
          <Button variant="outline">Login as Investor</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Login as Startup</Button>
        </Link>
      </div>
      <div>
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Home;
