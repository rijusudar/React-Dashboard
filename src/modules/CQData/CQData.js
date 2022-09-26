import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

import { SkelitonLoader } from '../../components/skeliton-loader/skeliton-loader';

export const CQData = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [totalRows, setTotalRows] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);


  // createTheme creates a new theme named solarized that overrides the build in dark theme
  createTheme(
    'solarized',
    {
      text: {
        primary: '#ccc',
        secondary: '#fff',
      },
      background: {
        default: '#212529',
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#40424c',
      },
      button: {
        default: '#2aa198',
        hover: 'rgba(0,0,0,.08)',
        focus: 'rgba(255,255,255,.12)',
        disabled: 'rgba(255, 255, 255, .34)',
      },
      sortFocus: {
        default: '#2aa198',
      },
    },
    'dark',
  );
  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
    {
      name: 'Author',
      selector: row => row.author,
      sortable: true,
    },
    {
      name: 'Details',
      selector: row => row.details,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      author: 'Test',
      details: 'sample'
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      author: 'Test',
      details: 'sample'
    },
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      author: 'Test',
      details: 'sample'
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      author: 'Test',
      details: 'sample'
    },
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      author: 'Test',
      details: 'sample'
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      author: 'Test',
      details: 'sample'
    },
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      author: 'Test',
      details: 'sample'
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      author: 'Test',
      details: 'sample'
    },
  ];

  const fetchCQDataHandler = React.useCallback(async (page, perPage) => {
    // setLoading(true);
    // setError(null)
    // try {
    //   const response = await fetch('http://localhost:3005', {
    //     method: "POST",
    //     headers: new Headers({ 'content-type': 'application/json' }),
    //     body: JSON.stringify({
    //       "file": "customer_complaints_plan_WK2232.2_R_D_ALL_2022.csv",
    //       "page": page,
    //       "limit": perPage
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Something went wrong!');
    //   }
    //   const getData = await response.json();
    //   setTotalRows(getData.total);
    //   setItems(getData.data);
    //   setLoading(false);
    // } catch (error) {
    //   setError(error.message);
    // }
    // setLoading(false);
  }, []);


  // React.useEffect(() => {
  //   fetchCQDataHandler(1, perPage);
  // }, [perPage]);



  // const handlePageChange = page => {
  //   console.log("page", page);
  //   fetchCQDataHandler(page, perPage);
  // }

  // const handlePerRowsChange = async (newPerPage, page) => {
  //   console.log("newPerPage", newPerPage)
  //   setPerPage(newPerPage);
  // }

  return (
    <div>
      <h6>CQ Data</h6>
      <DataTable
        columns={columns}
        data={data}
        pagination
        theme="solarized"
        // paginationServer
        progressPending={loading}
        progressComponent={<SkelitonLoader />}
      // paginationTotalRows={totalRows}
      // onChangeRowsPerPage={handlePerRowsChange}
      // onChangePage={handlePageChange}
      />
    </div>
  )
}
