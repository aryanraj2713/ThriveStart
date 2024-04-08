'use client';
import React, { useEffect, useState } from 'react';
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
import { useTranslation } from "react-i18next";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TranslateButton from '@/components/translation/translationbutton';

const Dashboard = () => {
    const { t } = useTranslation();
    const [invested_companies, setInvestedCompanies] = useState<any>([]);
    const [uninvested_companies, setUninvestedCompanies] = useState<any>([]);
    const get_invested_companies = async () => {
        const url = 'http://localhost:3000/api/company/invested';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to get companies');
        }).then((data) => {
            console.log('Companies:', data);
            setInvestedCompanies(data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    };

    const get_uninvested_companies = async () => {
        const url = 'http://localhost:3000/api/company/uninvested';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to get companies');
        }).then((data) => {
            console.log('Companies:', data);
            setUninvestedCompanies(data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    };
    const handle_invest = async (email: string) => {
        const url = `http://localhost:3000/api/company/invest/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to invest in company');
        }).then((data) => {
            console.log('Invested:', data);
            get_invested_companies();
            get_uninvested_companies();
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        get_invested_companies();
        get_uninvested_companies();
    }, []);
    return (
        <div className="flex flex-col space-y-10 justify-between px-8 py-8">
            <TranslateButton />
            <div className="grid grid-cols-3 gap-3 md:grid-cols-3 md:gap-8 md:text-2xl font-medium">
                <Card>
                    <CardHeader>Name</CardHeader>
                    <CardContent>Aryan Raj</CardContent>
                </Card>
                <Card>
                    <CardHeader>Net Worth</CardHeader>
                    <CardContent>7000 crores</CardContent>
                </Card>
                <Card>
                    <CardHeader>Education</CardHeader>
                    <CardContent>SRM Institute of Science and Technology</CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                    <CardContent className="text-center h-96">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-center text-2xl">
                                        Sector of Expertise
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className='flex flex-col'>
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell className="font-medium">INV001</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card><Card>
                    <CardContent className="text-center h-96">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-center text-2xl">
                                        List of Companies Invested
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className='flex flex-col'>
                                    {invested_companies.map((company: any, index: number) => (
                                        <TableCell key={index} className="font-medium">{company.name}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card><Card>
                    <CardContent className="text-center h-96">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-center text-2xl">
                                        List of Companies you can Invest
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className='flex flex-col'>
                                    {uninvested_companies.map((company: any, index: number) => (
                                        <TableCell key={index} className="font-medium">{company.name}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-center h-60">
                <Card>
                    <CardHeader className="text-center text-2xl"
                    >Investor Rating</CardHeader>
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                        officiis voluptatum exercitationem at sint maiores eligendi
                        voluptatibus impedit est assumenda. Tenetur ad atque similique
                        aliquam.
                    </CardContent>
                    <div>
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
                                        {/* <UpdateForm /> */}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </Card>
            </div>
        </div >
    );
};

export default Dashboard;
