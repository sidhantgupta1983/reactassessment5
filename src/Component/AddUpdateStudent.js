import React from "react";
import TextField  from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContextAPI } from "./ContextAPI";

const AddUpdateStudent = () => {
  let navigate = useNavigate();
  const [rows, setRows] = useContext(ContextAPI);
  const { id } = useParams();
  const [details, setDetails] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  useEffect(() => {
    rows.forEach((item) => {
      if (item.id === id) {
        setDetails({
          name: item.name,
          age: item.age,
          course: item.course,
          batch: item.batch,
        });
      }
    });
  }, [id,rows]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.name ==='') {
      alert("Name is mandatory to add or update a student ");
    }
    else{
      if (id === undefined) {
        let newDetails = { ...details, id: new Date().getTime().toString() };
        setRows([...rows, newDetails]);
      } else {
        setRows((prevState) =>
          prevState.map((student) =>
            student.id === id
              ? {
                  id: id,
                  name: details.name,
                  age: details.age,
                  course: details.course,
                  batch: details.batch,
                }
              : student
          )
        );
      }
    } 
      navigate("/students");
  };

  return (
    <div >
      <form noValidate autoComplete="on" onSubmit={handleSubmit} className="editDetails">
        <TextField
          label='Name'
          variant='outlined'
          color='secondary'
          margin="dense"
          id='name'
          type='text'
          name='name'
          value={details.name}
          onChange={handleChange}
        />

        <TextField
          label='Age'
          variant='outlined'
          margin="dense"
          color='secondary'
          id='age'
          type='number'
          name='age'
          value={details.age}
          onChange={handleChange}
        /> 
      
        <TextField
          label='Course'
          variant='outlined'
          color='secondary'
          margin="dense"
          id='course'
          type='text'
          name='course'
          value={details.course}
          onChange={handleChange}
        />

        <TextField
          label='Batch'
          variant='outlined'
          margin="dense"
          color='secondary'
          id='batch'
          type='text'
          name='batch'
          value={details.batch}
          onChange={handleChange}
        />
        <Link to="/students">
          <button className="backBtn">Go Back</button>
        </Link>
        <button type="submit" className="updateBtn">Update</button>
      </form>
    </div>
  );
};

export default AddUpdateStudent;