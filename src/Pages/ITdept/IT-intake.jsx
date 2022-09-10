import React from "react";
import { useTable } from "react-table";

export default function ITIntake() {
	const data = React.useMemo(
		() => [
			{
				col1: "B.Tech",
				col2: "Information-Technology",
				col3: "UG",
				col4: "B.Tech(IT)",
				col5: "240",
			},
			{
				col1: "M.Tech",
				col2: "COMPUTER NETWORKS AND INFORMATION TECHNOLOGY",
				col3: "PG",
				col4: "M.Tech(CNIS)",
				col5: "024",
			},
		],
		[]
	);
	const columns = React.useMemo(
		() => [
			{
				Header: "Name of the course",
				accessor: "col1",
			},
			{
				Header: "Specialization",
				accessor: "col2",
			},
			{
				Header: "UG/PG",
				accessor: "col3",
			},
			{
				Header: "Degree Awarded",
				accessor: "col4",
			},
			{
				Header: "Intake",
				accessor: "col5",
			},
		],
		[]
	);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<table {...getTableProps()} style={{ border: "solid 1px blue" }}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th
								{...column.getHeaderProps()}
								style={{
									borderBottom: "solid 3px red",
									background: "aliceblue",
									color: "black",
									fontWeight: "bold",
								}}
							>
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td
										{...cell.getCellProps()}
										style={{
											padding: "10px",
											border: "solid 1px gray",
											background: "papayawhip",
										}}
									>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
