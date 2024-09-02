// src/components/SecurityIssues.jsx
import React from 'react';
import isEmpty from './isEmpty';

function SecurityIssues({ issues }) {
    console.log("SecurityIssues", issues)
    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Security Issues</h2>
            <div className="space-y-4">
                {issues.map((issue, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-md shadow">
                        <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${issue.extra.metadata
                                .impact === 'HIGH' ? 'text-red-600' : 'text-yellow-600'}`}>
                                Impact: {issue.extra.metadata
                                    .impact}
                            </span>
                            <span className="font-bold text-blue-700">{issue.path}</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                            <span className="font-semibold">Message:</span> {issue.extra.message}
                        </p>
                        <p className="text-gray-700 mt-1">
                            <span className="font-semibold">Location:</span> Line {issue.start.line}, Column {issue.start.col}
                        </p>
                        <p className="text-gray-500 text-xs mt-2">Check ID: {issue.check_id}</p>
                        <p className="text-gray-500 text-xs mt-2">
                            <span className="font-semibold">Confidence:</span> {issue.extra.metadata.confidence}
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            <span className="font-semibold">References:</span>
                            <ul className="list-disc pl-5">
                                {issue.extra.metadata.references.map((reference, refIndex) => (
                                    <li key={refIndex} className="text-blue-600 underline">
                                        <a href={reference} target="_blank" rel="noopener noreferrer">
                                            {reference}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecurityIssues;
