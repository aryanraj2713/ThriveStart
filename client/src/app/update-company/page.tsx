"use client"

import React, { useState } from 'react';

const UpdateCompanyForm: React.FC = () => {
    const [company, setCompany] = useState({
        companyName: '',
        ownersName: '',
        industry: '',
        businessDescription: '',
        companyCity: '',
        companyState: '',
        yearlyRevenue: 0,
        monthlyRevenue: new Array<number>(12).fill(0),
        monthlySales: new Array<number>(12).fill(0),
        grossMargin: 0,
        netMargin: 0,
        ebidta: 0,
        cashBurn: 0,
        SKUs: [''],
        hasUSP: false,
        isBootstrapped: false,
        debt: 0,
        govtAID: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCompany(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMonthlyRevenueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newMonthlyRevenue: any = [...company.monthlyRevenue];
        newMonthlyRevenue[index] = parseFloat(e.target.value);
        setCompany(prevState => ({
            ...prevState,
            monthlyRevenue: newMonthlyRevenue
        }));
    };

    const handleMonthlySalesChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newMonthlySales = [...company.monthlySales];
        newMonthlySales[index] = parseInt(e.target.value);
        setCompany(prevState => ({
            ...prevState,
            monthlySales: newMonthlySales
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // // Handle form submission here
        // console.log(company);
        // window.location.href = '/dashboard';
        const email = localStorage.getItem('email');
        const data = {
            companyName: company.companyName,
            ownersName: company.ownersName,
            industry: company.industry,
            businessDescription: company.businessDescription,
            companyCity: company.companyCity,
            companyState: company.companyState,
            yearlyRevenue: company.yearlyRevenue,
            monthlyRevenue: company.monthlyRevenue,
            monthlySales: company.monthlySales,
            grossMargin: company.grossMargin,
            netMargin: company.netMargin,
            ebidta: company.ebidta,
            cashBurn: company.cashBurn,
            SKUs: company.SKUs,
            hasUSP: company.hasUSP,
            isBootstrapped: company.isBootstrapped,
            debt: company.debt,
            govtAID: company.govtAID
        }
        const url = `http://localhost:3000/api/company/update/${email}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Failed to update company details');
            }
            const responseData = await response.json();
            console.log('Company updated:', responseData);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error updating company:', error);
        }

    };

    return (
        <div className="">
            <div className="">
                <div className="py-10 min-h-screen">
                    <p className="text-center text-2xl font-semibold">Update Company Details</p>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="companyName">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className="shadow  bg-transparent  appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter company name"
                                    value={company.companyName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="ownersName">
                                    Owner's Name
                                </label>
                                <input
                                    type="text"
                                    id="ownersName"
                                    name="ownersName"
                                    className="shadow appearance-none  bg-transparent border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter owner's name"
                                    value={company.ownersName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="industry">
                                    Industry
                                </label>
                                <input
                                    type="text"
                                    id="industry"
                                    name="industry"
                                    className="shadow appearance-none border rounded bg-transparent  w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter industry"
                                    value={company.industry}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="businessDescription">
                                    Business Description
                                </label>
                                <textarea
                                    id="businessDescription"
                                    name="businessDescription"
                                    className="shadow appearance-none border  bg-transparent  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter business description"
                                    value={company.businessDescription}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="companyCity">
                                    Company City
                                </label>
                                <input
                                    type="text"
                                    id="companyCity"
                                    name="companyCity"
                                    className="shadow appearance-none border  bg-transparent  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter company city"
                                    value={company.companyCity}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="companyState">
                                    Company State
                                </label>
                                <input
                                    type="text"
                                    id="companyState"
                                    name="companyState"
                                    className="shadow appearance-none border   bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter company state"
                                    value={company.companyState}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="yearlyRevenue">
                                    Yearly Revenue
                                </label>
                                <input
                                    type="text"
                                    id="yearlyRevenue"
                                    name="yearlyRevenue"
                                    className="shadow appearance-none border  bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter yearly revenue"
                                    value={company.yearlyRevenue}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Monthly Revenue */}
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Monthly Revenue</label>
                                {company.monthlyRevenue.map((revenue, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        placeholder={`Month ${index + 1}`}
                                        className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                        value={revenue}
                                        onChange={(e) => handleMonthlyRevenueChange(e, index)}
                                    />
                                ))}
                            </div>

                            {/* Monthly Sales */}
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Monthly Sales</label>
                                {company.monthlySales.map((sales, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        placeholder={`Month ${index + 1}`}
                                        className="shadow appearance-none border  bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus
                                        outline-none focus:shadow-outline"
                                        value={sales}
                                        onChange={(e) => handleMonthlySalesChange(e, index)}
                                    />
                                ))}
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="grossMargin">
                                    Gross Margin
                                </label>
                                <input
                                    type="text"
                                    id="grossMargin"
                                    name="grossMargin"
                                    step="0.01"
                                    className="shadow appearance-none border bg-transparent  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter gross margin"
                                    value={company.grossMargin}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="netMargin">
                                    Net Margin
                                </label>
                                <input
                                    type="text"
                                    id="netMargin"
                                    name="netMargin"
                                    step="0.01"
                                    className="shadow appearance-none border  bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter net margin"
                                    value={company.netMargin}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="ebidta">
                                    EBITDA
                                </label>
                                <input
                                    type="text"
                                    id="ebidta"
                                    name="ebidta"
                                    className="shadow appearance-none border r bg-transparent ounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter EBITDA"
                                    value={company.ebidta}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="cashBurn">
                                    Cash Burn
                                </label>
                                <input
                                    type="text"
                                    id="cashBurn"
                                    name="cashBurn"
                                    className="shadow appearance-none border  bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter cash burn"
                                    value={company.cashBurn}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="SKUs">
                                    SKUs
                                </label>
                                {company.SKUs.map((sku, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        placeholder={`SKU ${index + 1}`}
                                        className="shadow appearance-none border  bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                        value={sku}
                                        onChange={(e) => {
                                            const newSKUs = [...company.SKUs];
                                            newSKUs[index] = e.target.value;
                                            setCompany(prevState => ({
                                                ...prevState,
                                                SKUs: newSKUs
                                            }));
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="hasUSP">
                                    Has Unique Selling Proposition (USP)
                                </label>
                                <input
                                    type="checkbox"
                                    id="hasUSP"
                                    name="hasUSP"
                                    className="mr-2 leading-tight"
                                    checked={company.hasUSP}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="isBootstrapped">
                                    Is Bootstrapped
                                </label>
                                <input
                                    type="checkbox"
                                    id="isBootstrapped"
                                    name="isBootstrapped"
                                    className="mr-2 leading-tight"
                                    checked={company.isBootstrapped}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="debt">
                                    Debt
                                </label>
                                <input
                                    type="text"
                                    id="debt"
                                    name="debt"
                                    className="shadow appearance-none border  bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter debt"
                                    value={company.debt}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="govtAID">
                                    Received Government Aid
                                </label>
                                <input
                                    type="checkbox"
                                    id="govtAID"
                                    name="govtAID"
                                    className="mr-2 leading-tight"
                                    checked={company.govtAID}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Update Company
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCompanyForm;
