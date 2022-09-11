import React from 'react'
import { useTable } from 'react-table'

export default function CseTableCouse() {
    const data = React.useMemo(
        () => [
          {
            col1: '01',
            col2: 'B.Tech',
            col3: 'Computer Science Engineering',
            col4: 'UG',
            col5: 'B.Tech (CSE)',
            col6: '300',
          },
          {
            col1: '02',
            col2: 'M.Tech',
            col3: 'Computer Science Engineering',
            col4: 'PG',
            col5: 'M.Tech (CSE)',
            col6: '024',
          },
          {
            col1: '03',
            col2: 'M.Tech',
            col3: 'Computer Science',
            col4: 'PG',
            col5: 'M.Tech (CSE)',
            col6: '024',
          },
          
        ],
        []
      )
      const columns = React.useMemo(
        () => [
          {
            Header: 'S.No',
            accessor: 'col1',
          },
          {
            Header: 'Name of the course',
            accessor: 'col2',
          },
          {
            Header: 'Specialization',
            accessor: 'col4',
          },
          {
            Header: 'UG/PG',
            accessor: 'col5',
          },
          {
            Header: 'Degree Awarded',
            accessor: 'col6',
          },
          {
            Header: 'Intake',
            accessor: 'col3',
          },
        ],
        []
      )
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue',maxWidth: '70%'}} className='CseTableCouse'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px aliceblue',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}
