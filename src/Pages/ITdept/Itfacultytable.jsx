import React from "react";
import { useTable } from "react-table";

export default function ITFacultytable() {
	const data = React.useMemo(
		() => [
			{
				col1: "01",
				col2: "Dr.Sriman Narayana Iyengar",
				col3: "professor,Dean(Library & IS)",
				col4: "8594-170914-131547/ 1-3539455963",
			},
			{
				col1: "02",
				col2: "Dr.Sunil Bhutada",
				col3: "Professor&HOD",
				col4: "051507-141345",
			},
			{
				col1: "03",
				col2: "Dr.MD.Jaffar Sadiq",
				col3: "Associative Professor",
				col4: "23150407-162202/1-483330863",
			},
			{
				col1: "04",
				col2: "Dr.M.Sreenivas",
				col3: "Associative Professor",
				col4: "22150406-102749/1-483330863",
			},
			{
				col1: "05",
				col2: "Dr.Rohita Yamaganti",
				col3: "Assistant professor & Assoc.Dean of Women Sports",
				col4: "62150406-145000/1-485268443",
			},
			{
				col1: "06",
				col2: "Mr.K.Premnadh",
				col3: "Assistant Professor",
				col4: "93150407-141210/1-2330814320",
			},
			{
				col1: "07",
				col2: "Mr.A.Ravi kumar",
				col3: "Assistant Professor",
				col4: "89150403-100240/1-2916932708",
			},
			{
				col1: "08",
				col2: "Mr.B.Sanjeev",
				col3: "Assistant professor",
				col4: "31150407-151545",
			},
		],
		[]
	);
	const columns = React.useMemo(
		() => [
			{
				Header: "S.NO",
				accessor: "col1",
			},
			{
				Header: "Names",
				accessor: "col2",
			},
			{
				Header: "Designation",
				accessor: "col3",
			},
			{
				Header: "JNTUH ID/AICTE ID",
				accessor: "col4",
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
