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

const Dashboard = () => {
  return (
    <div className="p-6 flex flex-col h-full justify-between">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 md:text-2xl font-medium">
        <div className="outline text-center rounded-2xl px-4 py-3 place-content-center">
          <div>Company Name</div>
          <div>Size</div>
        </div>
        <div className="outline text-center rounded-2xl px-4 py-3 place-content-center">
          <div>Business Owner Name</div>
          <div>X</div>
        </div>
        <div className="outline text-center rounded-2xl px-4 py-3 place-content-center">
          <div>Industry and USP</div>
          <div>Y</div>
        </div>
        <div className="outline text-center rounded-2xl px-4 py-3 place-content-center">
          <div>Profits</div>
          <div>Z</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="outline outline-1 text-center h-full place-content-center rounded-2xl p-4">
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
        </div>
        <div className="outline outline-1 h-full place-content-center rounded-2xl p-4">
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
        </div>
        <div className="outline outline-1 text-center h-full place-content-center rounded-2xl p-4">
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
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div className="outline outline-1 rounded-2xl p-8 flex flex-col items-center justify-center">
          <div className="text-xl font-semibold py-4">Company Description</div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            obcaecati natus sit harum distinctio quae alias et, aliquam, labore,
            odit ad quod animi vitae sapiente voluptatum corrupti. Deserunt,
            facilis illo dolorum accusantium quo deleniti provident eligendi
            atque sequi impedit, perferendis aut sint. Officia, vitae doloribus
            nesciunt nam vel earum ipsa.
          </div>
        </div>
        <div className="outline outline-1 rounded-2xl p-8 flex flex-col items-center justify-center">
          <div className="text-xl font-semibold py-4">
            Investor Requirements
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officiis voluptatum exercitationem at sint maiores eligendi
            voluptatibus impedit est assumenda. Tenetur ad atque similique
            aliquam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
