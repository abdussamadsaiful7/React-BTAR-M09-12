import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        {
            id: 1,
            name: "John Smith",
            math: 80,
            physics: 75,
            chemistry: 90
        },
        {
            id: 2,
            name: "Jane Doe",
            math: 75,
            physics: 82,
            chemistry: 88
        },
        {
            id: 3,
            name: "Bob Johnson",
            math: 78,
            physics: 80,
            chemistry: 91
        },
        {
            id: 4,
            name: "Alice Brown",
            math: 85,
            physics: 90,
            chemistry: 92
        },
        {
            id: 5,
            name: "David Lee",
            math: 82,
            physics: 86,
            chemistry: 89
        },
        {
            id: 6,
            name: "Samantha Jones",
            math: 95,
            physics: 91,
            chemistry: 87
        },
        {
            id: 7,
            name: "Michael Chen",
            math: 89,
            physics: 88,
            chemistry: 94
        },
        {
            id: 8,
            name: "Emily Wang",
            math: 93,
            physics: 87,
            chemistry: 91
        },
        {
            id: 9,
            name: "Ryan Lee",
            math: 86,
            physics: 81,
            chemistry: 92
        },
        {
            id: 10,
            name: "Olivia Kim",
            math: 79,
            physics: 90,
            chemistry: 84
        },
        {
            id: 11,
            name: "Matthew Park",
            math: 81,
            physics: 83,
            chemistry: 85
        },
        {
            id: 12,
            name: "Ava Patel",
            math: 88,
            physics: 89,
            chemistry: 83
        }
    ];


    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line stroke="#82ca9d" dataKey="math"></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            
        </div>
    );
};

export default Dashboard;