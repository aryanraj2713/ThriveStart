"use client"
import Company from '@/components/company';
import Investor from '@/components/user';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { name: 'Twitter', url: 'https://twitter.com/' },
];

const Profile = () => {
  const [isInvestor, setIsInvestor] = useState(false);

  useEffect(() => {
    const isInvestor = sessionStorage.getItem('is_investor');
    setIsInvestor(isInvestor === 'true');
  }, []);

  return (
    <div className="w-full lg:grid h-full lg:grid-cols-2 -z-10">
      {
        isInvestor ? (
          <Investor />
        ) : (
          <Company />
        )
      }
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://avatars.githubusercontent.com/u/91051053?v=4"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Profile;
