import React from 'react';

const CompanyDataDisplay = ({ data }: any) => {
    return (
        <div className='flex justify-center items-center font-xl font-semibold space-x-10' >
            <div>
                <h2>Company Data</h2>
                <p>Email: {data?.email}</p>
                <p>Name: {data?.name}</p>
                <p>Investor: {data?.is_investor ? 'Yes' : 'No'}</p>
                <p>Invested: {data?.invested ? 'Yes' : 'No'}</p>
                <p>Business Description: {data?.businessDescription}</p>
                <p>Cash Burn: {data?.cashBurn}</p>
                <p>Company City: {data?.companyCity}</p>
                <p>Company Name: {data?.companyName}</p>
                <p>Company State: {data?.companyState}</p>
                <p>Debt: {data?.debt}</p>
                <p>EBIDTA: {data?.ebidta}</p>
                <p>Government Aid: {data?.govtAID}</p>
                <p>Gross Margin: {data?.grossMargin}</p>
                <p>Has USP: {data?.hasUSP}</p>
                <p>Industry: {data?.industry}</p>
                <p>Is Bootstrapped: {data?.isBootstrapped}</p>
                <p>Owners Name: {data?.ownersName}</p>
                <p>Yearly Revenue: {data?.yearlyRevenue}</p>

            </div>
            <div>
                <h3>Monthly Revenue</h3>
                <ul>
                    {data?.monthlyRevenue.map((revenue: any, index: any) => (
                        <div key={index} className='flex'>
                            {revenue}
                        </div>
                    ))}
                </ul>
                <h3>Monthly Sales</h3>
                <ul>
                    {data?.monthlySales.map((sale: any, index: any) => (
                        <li key={index} className='flex'>
                            {sale}
                        </li>
                    ))}
                </ul>
                <p>Net Margin: {data?.netMargin}</p>
            </div>
        </div>
    );
};

export default CompanyDataDisplay;
