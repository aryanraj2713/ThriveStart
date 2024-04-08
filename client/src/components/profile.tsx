import type React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import UpdateForm from './update';

interface ProfileProps {
  companyName: string;
  size: string;
  businessOwnerName: string;
  industry: string;
  usp: string;
  profits: string;
  email: string;
  socialLinks: {
    name: string;
    url: string;
  }[];
}

const ProfilePage: React.FC<ProfileProps> = ({
  companyName,
  size,
  businessOwnerName,
  industry,
  usp,
  profits,
  email,
  socialLinks,
}) => {
  return (
    <div className="p-6 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{companyName}</h1>
      <div className="mb-6">
        <p className="mb-2">
          <span className="font-semibold">Size:</span> {size}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Business Owner Name:</span>{' '}
          {businessOwnerName}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Industry:</span> {industry}
        </p>
        <p className="mb-2">
          <span className="font-semibold">
            Unique Selling Proposition (USP):
          </span>{' '}
          {usp}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Profits:</span> {profits}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Email:</span> {email}
        </p>
      </div>
      <div>
        <p className="font-semibold mb-2">Social Links:</p>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index} className="mb-2">
              <a
                href={link.url}
                className="text-blue-400 hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <AlertDialog>
        <AlertDialogTrigger className="bg-gray-900 hover:bg-gray-800 mt-6 px-4 py-2 rounded-lg">
          Update Profile
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Are you sure you want to update your profile?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <UpdateForm />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProfilePage;
