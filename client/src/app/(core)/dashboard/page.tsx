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
import TranslateButton from '@/components/translation/translationbutton';
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col h-full justify-between space-y-4 px-8 py-8">
      <TranslateButton />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 md:text-2xl font-medium">
        <Card>
          <CardHeader>Tesla</CardHeader>
          <CardContent>1000 Employees</CardContent>
        </Card>
        <Card>
          <CardHeader>Owner</CardHeader>
          <CardContent>Elon Musk</CardContent>
        </Card>
        <Card>
          <CardHeader>Industry and USP</CardHeader>
          <CardContent>Technology - Automotive with AI solutions</CardContent>
        </Card>
        <Card>
          <CardHeader>Profits</CardHeader>
          <CardContent>$1,000,000</CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="place-content-center h-full">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                    { id: 3, value: 25, label: 'series D' },
                  ],
                },
              ]}
              colors={['#FFFFFF', '#000000', '#FFFFFF', '#000000']}
              height={200}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="place-content-center h-full">
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['bar A', 'bar B', 'bar C'],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: [2, 5, 3],
                },
              ]}
              colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
              className="stroke-white"
              height={300}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="place-content-center h-full">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Invoice</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell className="font-medium">Paid</TableCell>
                  <TableCell className="font-medium">Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <Card>
          <CardHeader>Company Description</CardHeader>
          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            obcaecati natus sit harum distinctio quae alias et, aliquam, labore,
            odit ad quod animi vitae sapiente voluptatum corrupti. Deserunt,
            facilis illo dolorum accusantium quo deleniti provident eligendi
            atque sequi impedit, perferendis aut sint. Officia, vitae doloribus
            nesciunt nam vel earum ipsa.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Investor Requirements</CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officiis voluptatum exercitationem at sint maiores eligendi
            voluptatibus impedit est assumenda. Tenetur ad atque similique
            aliquam.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
