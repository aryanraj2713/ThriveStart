"use client"
import CompanyDataDisplay from '@/components/company';
import UserDataDisplay from '@/components/user';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { name: 'Twitter', url: 'https://twitter.com/' },
];

const Profile = () => {
  const [isInvestor, setIsInvestor] = useState(false);
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const isInvestor = localStorage.getItem('is_investor');
    setIsInvestor(isInvestor === 'true');
    const email = localStorage.getItem('email')
    const searchBy = isInvestor === 'true' ? 'user' : 'company'
    console.log(email)
    const url = `http://localhost:3000/api/${searchBy}/${email}`
    console.log(url)
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        if (isInvestor === 'true') {
          setUser(data.data);
        }
        else {
          setUser(data);
        }
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []); // Removed [user] dependency to prevent infinite loop

  return (
    <div className="w-full lg:grid h-full lg:grid-cols-2 -z-10">
      {
        isInvestor ? (
          <UserDataDisplay data={user} />
        ) : (
          <CompanyDataDisplay data={user} />
        )
      }
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://raw.githubusercontent.com/mkswagger/ThriveStart/main/client/public/icon_startup.jpg?token=GHSAT0AAAAAACL4GCNBVJRF4UMS2J5DRKNCZQUK3FQ"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Profile;
