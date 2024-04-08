"use client"
import React, { useState } from 'react';

interface Education {
    degree: string;
    major?: string;
    institution: string;
}

interface CompanyInvestment {
    name: string;
    amount: number;
    ownership: number;
}

interface Person {
    name: string;
    id: string;
    netWorth: number;
    education: Education[];
    companiesInvested: CompanyInvestment[];
    specializationIndustry: string[];
    sectors: string[];
}

const InputForm: React.FC = () => {
    const [person, setPerson] = useState<Person>({
        name: '',
        id: '',
        netWorth: 0,
        education: [],
        companiesInvested: [],
        specializationIndustry: [],
        sectors: []
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
        const newEducation: any = [...person.education];
        newEducation[index][field] = e.target.value;
        setPerson(prevState => ({
            ...prevState,
            education: newEducation
        }));
    };

    const addEducation = () => {
        setPerson(prevState => ({
            ...prevState,
            education: [...prevState.education, { degree: '', institution: '' }]
        }));
    };

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
        const newCompaniesInvested: any = [...person.companiesInvested];
        newCompaniesInvested[index][field] = e.target.value;
        setPerson(prevState => ({
            ...prevState,
            companiesInvested: newCompaniesInvested
        }));
    };

    const addCompany = () => {
        setPerson(prevState => ({
            ...prevState,
            companiesInvested: [...prevState.companiesInvested, { name: '', amount: 0, ownership: 0 }]
        }));
    };

    const handleSpecializationIndustryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const specializationIndustry = e.target.value.split(',');
        setPerson(prevState => ({
            ...prevState,
            specializationIndustry
        }));
    };

    const handleSectorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sectors = e.target.value.split(',');
        setPerson(prevState => ({
            ...prevState,
            sectors
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const personData = {
            name: person.name,
            id: person.id,
            netWorth: person.netWorth,
            education: person.education,
            companiesInvested: person.companiesInvested,
            specializationIndustry: person.specializationIndustry,
            sectors: person.sectors
        };
        const email = localStorage.getItem('email');
        const url = `http://localhost:3000/api/user/${email}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(personData)
        });
        if (!response.ok) {
            console.error('Failed to update user');
            return;
        }
        const data = await response.json();
        console.log('User updated:', data);
        // Handle form submission here
        window.location.href = '/investor';
        console.log(person);
    };

    return (
        <div className=''>
            <div className=''>
                <div className='py-10 min-h-screen'>
                    <p className='text-center text-2xl font-semibold'>Provide the investors details</p>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter name"
                                    value={person.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="id">
                                    ID
                                </label>
                                <input
                                    type="text"
                                    id="id"
                                    name="id"
                                    className="shadow appearance-none border rounded bg-transparent w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter ID"
                                    value={person.id}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="netWorth">
                                    Net Worth
                                </label>
                                <input
                                    type="text"
                                    id="netWorth"
                                    name="netWorth"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter net worth"
                                    value={person.netWorth}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Education */}
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Education</label>
                                {person.education.map((edu, index) => (
                                    <div key={index} className='space-y-2'>
                                        <input
                                            type="text"
                                            name={`degree-${index}`}
                                            placeholder="Degree"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
                                            value={edu.degree}
                                            onChange={(e) => handleEducationChange(e, index, 'degree')}
                                        />
                                        <input
                                            type="text"
                                            name={`major-${index}`}
                                            placeholder="Major"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                            value={edu.major || ''}
                                            onChange={(e) => handleEducationChange(e, index, 'major')}
                                        />
                                        <input
                                            type="text"
                                            name={`institution-${index}`}
                                            placeholder="Institution"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
                                            value={edu.institution}
                                            onChange={(e) => handleEducationChange(e, index, 'institution')}
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="mt-2 bg-gray-800 hover:bg-gray-900 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={addEducation}
                                >
                                    Add Education
                                </button>
                            </div>
                            {/* Companies Invested */}
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Companies Invested</label>
                                {person.companiesInvested.map((company, index) => (
                                    <div key={index} className='space-y-2'>
                                        <input
                                            type="text"
                                            name={`company-name-${index}`}
                                            placeholder="Company Name"
                                            className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                            value={company.name}
                                            onChange={(e) => handleCompanyChange(e, index, 'name')}
                                        />
                                        <input
                                            type="text"
                                            name={`company-amount-${index}`}
                                            placeholder="Amount"
                                            className="shadow appearance-none border rounded w-full bg-transparent py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                            value={company.amount}
                                            onChange={(e) => handleCompanyChange(e, index, 'amount')}
                                        />
                                        <input
                                            type="text"
                                            name={`company-ownership-${index}`}
                                            placeholder="Ownership"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
                                            value={company.ownership}
                                            onChange={(e) => handleCompanyChange(e, index, 'ownership')}
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="mt-2 bg-gray-800 hover:bg-gray-900 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={addCompany}
                                >
                                    Add Company
                                </button>
                            </div>
                            {/* Specialization Industry */}
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="specializationIndustry">
                                    Specialization Industry
                                </label>
                                <input
                                    type="text"
                                    id="specializationIndustry"
                                    name="specializationIndustry"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
                                    placeholder="Enter specialization industry"
                                    value={person.specializationIndustry.join(',')}
                                    onChange={handleSpecializationIndustryChange}
                                />
                            </div>
                            {/* Sectors */}
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="sectors">
                                    Sectors
                                </label>
                                <input
                                    type="text"
                                    id="sectors"
                                    name="sectors"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
                                    placeholder="Enter sectors"
                                    value={person.sectors.join(',')}
                                    onChange={handleSectorsChange}
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputForm;
