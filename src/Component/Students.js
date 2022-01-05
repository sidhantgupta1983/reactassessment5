import React from 'react';
import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ContextAPI } from "./ContextAPI";
import { Link, NavLink } from "react-router-dom";


const Students = () => {
    
    const [rows] = useContext(ContextAPI);

    return (
        <div>
            <div className='row1'>
                <h1>Students Details</h1>
                <NavLink to='/addupdate' className='addStudent' >Add New Student</NavLink>
            </div>
            <div className='tableAlign'>
              <TableContainer component={Paper} >
                <Table sx={{ minWidth: 550 }} aria-label="simple table" >
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Name</b></TableCell>
                      <TableCell align="right"><b>Age</b></TableCell>
                      <TableCell align="right"><b>Course</b></TableCell>
                      <TableCell align="right"><b>Batch</b></TableCell>
                      <TableCell align="right"><b>Change</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.course}</TableCell>
                        <TableCell align="right">{row.batch}</TableCell>
                        <TableCell align="right">
                          <Link to={`/addupdate/${row.id}`}>Edit</Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </div>
          </div> 
      );
    };

export default Students
