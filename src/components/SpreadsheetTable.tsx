import React from 'react';
import {
  useTable,
  Column,
  CellProps,
  HeaderGroup,
  Row,
} from 'react-table';
import '../index.css';

type RowData = {
  job: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  due: string;
  value: string;
};

const REAL_DATA: RowData[] = [
  {
    job: 'Launch credit media campaign for pro...',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel....',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    due: '20-11-2024',
    value: '6,020,000₹',
  },
  {
    job: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhanp...',
    assigned: 'Tejus Pandey',
    priority: 'High',
    due: '30-10-2024',
    value: '3,500,000₹',
  },
  {
    job: 'Finalize user testing feedback for app...',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohns...',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    due: '10-12-2024',
    value: '4,750,000₹',
  },
  {
    job: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen...',
    assigned: 'Tom Wright',
    priority: 'Low',
    due: '15-01-2025',
    value: '5,900,000₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabro...',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000₹',
  },
];

const EMPTY_ROWS: RowData[] = Array.from({ length: 10 }, () => ({
  job: '',
  submitted: '',
  status: '',
  submitter: '',
  url: '',
  assigned: '',
  priority: '',
  due: '',
  value: '',
}));

const data: RowData[] = [...REAL_DATA, ...EMPTY_ROWS];

const columns: Column<RowData>[] = [
  {
    Header: '#',
    accessor: (_row, i) => i + 1,
    id: 'rowNum',
  },
  { Header: 'Job Request', accessor: 'job' },
  { Header: () => <>📅 Submitted</>, accessor: 'submitted' },
  {
    Header: () => <>✔️ Status</>,
    accessor: 'status',
    Cell: ({ value }: CellProps<RowData>) => {
      const map: Record<string, string> = {
        'In-process': 'bg-yellow-100 text-yellow-800',
        'Need to start': 'bg-gray-100 text-gray-800',
        Complete: 'bg-green-100 text-green-800',
        Blocked: 'bg-red-100 text-red-800',
      };
      return value ? (
        <span className={`px-2 py-0.5 rounded text-xs ${map[value]}`}>{value}</span>
      ) : null;
    },
  },
  { Header: () => <>👤 Submitter</>, accessor: 'submitter' },
  { Header: () => <>🌐 URL</>, accessor: 'url' },
  { Header: 'Assigned', accessor: 'assigned' },
  {
    Header: 'Priority',
    accessor: 'priority',
    Cell: ({ value }: CellProps<RowData>) => {
      const map: Record<string, string> = {
        High: 'text-red-600 font-bold',
        Medium: 'text-yellow-600',
        Low: 'text-blue-600',
      };
      return value ? <span className={map[value]}>{value}</span> : null;
    },
  },
  { Header: 'Due Date', accessor: 'due' },
  { Header: 'Est. Value', accessor: 'value' },
];

export default function SpreadsheetTable() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<RowData>({ columns, data });

  return (
    <div className="overflow-auto h-[600px] px-4 pt-2">
      <table {...getTableProps()} className="min-w-full table-fixed border-collapse">
        {/* 1. Overview Header */}
        <thead className="sticky top-0 z-20">
          <tr>
            <th className="border border-gray-200 bg-white w-12 p-0" />
            <th
              colSpan={4}
              className="border border-gray-200 px-3 py-2 text-left text-sm"
              style={{ backgroundColor: '#d5d5d5' }}
            >
              <span className="inline-block mr-1 text-gray-700">🔗</span>
              <span className="font-medium">GQ Financial Overview</span>
            </th>
            <th className="border border-gray-200 bg-white p-0" />
            <th
              className="border border-gray-200 px-3 py-2 text-left text-sm"
              style={{ backgroundColor: '#bfd5c4' }}
            >
              ABC📥
            </th>
            <th
              colSpan={2}
              className="border border-gray-200 px-3 py-2 text-left text-sm"
              style={{ backgroundColor: '#cbb9f2' }}
            >
              <span className="inline-block mr-1">📥</span>Answer a question ▾
            </th>
            <th
              className="border border-gray-200 px-3 py-2 text-left text-sm"
              style={{ backgroundColor: '#f9c7b2' }}
            >
              <span className="inline-block mr-1">📥</span>Extract ▾
            </th>
          </tr>
        </thead>

        {/* 2. Column Headers */}
        <thead className="sticky top-[40px] z-10">
          {headerGroups.map((hg: HeaderGroup<RowData>) => (
            <tr key={hg.id} {...hg.getHeaderGroupProps()}>
              {hg.headers.map(col => {
                let bg = '#ececec';
                if (col.id === 'assigned') bg = '#d0e2d3';
                if (col.id === 'priority') bg = '#dbcefa';
                if (col.id === 'due') bg = '#dbcefa';
                if (col.id === 'value') bg = '#fcded1';
                return (
                  <th
                    key={col.id}
                    {...col.getHeaderProps()}
                    className="border border-gray-200 px-3 py-2 text-left text-xs font-semibold text-gray-800"
                    style={{ backgroundColor: bg }}
                  >
                    {col.render('Header')}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        {/* 3. Data Rows */}
        <tbody {...getTableBodyProps()}>
          {rows.map((row: Row<RowData>, idx) => {
            prepareRow(row);
            const defaultBg = '#ffffff';
            return (
              <tr key={row.id} {...row.getRowProps()} className="h-8">
                {row.cells.map(cell => (
                  <td
                    key={cell.column.id}
                    {...cell.getCellProps()}
                    className="border border-gray-200 px-3 py-2 text-sm whitespace-nowrap"
                    style={{ backgroundColor: defaultBg }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
