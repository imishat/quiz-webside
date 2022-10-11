import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Reachat = () => {
    const data = [
        {
          "name": "React",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": " JavaScript",
          "uv": 3000,
          "pv": 1398, 
          "amt": 2210
        },
        {
          "name": "CSS",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Git",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        
      ]
      const chtaData=useLoaderData();
      const value=chtaData.data

      console.log(value)
    return (
        <div>


            
            H!
            <h1>Reachat </h1>
            <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey='name' />
  <YAxis />
  <CartesianGrid stromakeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </div>
    );
};

export default Reachat;
