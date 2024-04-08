import React from 'react';

const UserDataDisplay = ({ data }: any) => {
    return (
        <div className='flex justify-center items-center font-xl font-semibold top-[40%]' >
            <div>
                <h2>User Data</h2>
                <p>Email: {data?.email}</p>
                <p>Name: {data?.name}</p>
                <p>Investor: {data?.is_investor ? 'Yes' : 'No'}</p>
                {data?.companiesInvested.length > 0 && (
                    <div>
                        <h3>Companies Invested</h3>
                        <ul>
                            {data?.companiesInvested.map((company: any, index: any) => (
                                <li key={index}>
                                    Name: {company.name}, Amount: {company.amount}, Ownership: {company.ownership}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {data?.education.length > 0 && (
                    <div>
                        <h3>Education</h3>
                        <ul>
                            {data?.education.map((edu: any, index: any) => (
                                <li key={index}>
                                    Degree: {edu.degree}, Institution: {edu.institution}, Major: {edu.major}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <p>ID: {data?.id}</p>
                <p>Net Worth: {data?.netWorth}</p>
                <p>Sectors: {data?.sectors.join(', ')}</p>
                <p>Specialization Industry: {data?.specializationIndustry.join(', ')}</p>
            </div>
        </div>
    );
};

export default UserDataDisplay;
