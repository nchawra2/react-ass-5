import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

import StudentContext from "../../context/StudentContext";

function AddorUpdateStudent() {
  let { state, setState } = useContext(StudentContext);

  let { id } = useParams();
  let navigate = useNavigate();

  let selectedStudent = null;
  if (id) {
    selectedStudent = state.find((st) => st.id === +id);
  }

  let [student, setStudent] = useState({
    id: selectedStudent ? selectedStudent.id : state.length + 1,
    name: selectedStudent ? selectedStudent.name : "",
    age: selectedStudent ? selectedStudent.age : "",
    course: selectedStudent ? selectedStudent.course : "",
    batch: selectedStudent ? selectedStudent.batch : "",
  });

  let handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  let { name, age, course, batch } = student;

  let udpateSt = () => {
    if (!name || !age || !course || !batch) {
      alert("FILL ALL DETAILS");
    } else {
      let updatedStudents = state.map((st) => {
        if (st.id === +id) {
          return {
            ...student,
          };
        } else {
          return st;
        }
      });

      setState(updatedStudents);
      navigate("/students");
    }
  };

  let addSt = () => {
    if (!name || !age || !course || !batch) {
      alert("FILL ALL DETAILS");
    } else {
      setState([...state, student]);
      navigate("/students");
    }
  };

  return (
    <div className="container">
      <p className="display-5 text-primary">Update Student</p>

      <div className="row mt-5">
        <div className="col-md-4">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={student.name}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className="col-md-4">
          <TextField
            id="outlined-basic"
            type="number"
            label="Age"
            variant="outlined"
            fullWidth
            name="age"
            value={student.age}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <TextField
            id="outlined-basic"
            label="Course"
            variant="outlined"
            fullWidth
            name="course"
            value={student.course}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <TextField
            id="outlined-basic"
            label="Batch"
            variant="outlined"
            fullWidth
            name="batch"
            value={student.batch}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-2">
          <Button
            variant="contained"
            color="warning"
            fullWidth
            onClick={() => navigate("/students")}
          >
            Cancel
          </Button>
        </div>
        <div className="col-md-2">
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={selectedStudent ? udpateSt : addSt}
          >
            {selectedStudent ? "update student" : "add student"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddorUpdateStudent;
