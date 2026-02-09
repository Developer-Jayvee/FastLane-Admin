'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ChartDataTypes = {
  name : string;
  value : number;
}
type CustomChartProps = {
  initialData? : ChartDataTypes[];
}

export default function CustomChart({ initialData } : CustomChartProps) {
  return (
    <ResponsiveContainer >
      <LineChart data={initialData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}