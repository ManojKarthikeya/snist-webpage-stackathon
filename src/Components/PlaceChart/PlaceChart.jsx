import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "2016",
		Placed: 69,
	},
	{
		name: "2017",
		Placed: 73,
	},
	{
		name: "2018",
		Placed: 74,
	},
	{
		name: "2019",
		Placed: 70,
	},
	{
		name: "2020",
		Placed: 81,
	},
	{
		name: "2021",
		Placed: 83,
	},
	{
		name: "2022",
		Placed: 87,
	},
];

export default function PlaceChart() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				width={500}
				height={250}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="Placed"
					stroke="rgb(250, 98, 71)"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
