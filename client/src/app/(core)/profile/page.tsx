import ProfilePage from '@/components/profile';
import Image from 'next/image';
import React from 'react';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { name: 'Twitter', url: 'https://twitter.com/' },
];

const Profile = () => {
  return (
    <div className="w-full lg:grid h-full lg:grid-cols-2 -z-10">
      <div className="flex items-center justify-center py-12">
        <ProfilePage
          companyName="Your Company Name"
          size="Large"
          businessOwnerName="John Doe"
          industry="Technology"
          usp="Innovative solutions tailored for your needs."
          profits="$1,000,000"
          email="example@example.com"
          socialLinks={socialLinks}
        />
      </div>
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
