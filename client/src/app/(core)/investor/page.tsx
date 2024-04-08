'use client';
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
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

const Dashboard = () => {
    return (
        <div className="flex flex-col space-y-10 justify-between px-8 py-8">
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
                                        List of Companies you can Invest
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
                </Card>
            </div>
        </div >
    );
};

export default Dashboard;
