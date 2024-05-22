import React from "react";
import studentslist from "../../src/assets/studentsdetails.json";
import "./LandingPageComponent.css";
import { ModalComponent, NavComponent } from "../index";
import { useNavigate } from "react-router-dom";


const LandingPageComponent = () => {
  const navigate = useNavigate();
  //studentlist is an object and getting it as dummy data.
  const [studentlist, setStudentList] = React.useState(studentslist);
  const [isModalOpen, setModalIsOpen] = React.useState(false);
  //newStudent is the state to add a new student to the existing data.
  const [newStudent, setNewStudent] = React.useState({
    name: "",
    subject: "",
    marks: "",
  });
  //studentAvailCheck is to check for the availability of the student.
  const [studentAvailCheck, setStudentAvailCheck] = React.useState();

  //student mark limit should not exeed 100 to chekc that im setting a flag.
  const [studentMarkLimit, setStudentMarkLimit] = React.useState();

  const userauth = localStorage.getItem("user");

  
  // this is a small authentication metord to limit the user to not access the 
  //landing page using the URL wihout loggin in.
  // so im setting a local storage on successful login and clearing the local storage on logut. 
  React.useEffect(() => {
    if (userauth === null) {
      navigate("/");
    }
  }, [navigate]);

  //functions provided by PICO css for opening and closing of the modal
  function openModal(event) {
    event.preventDefault();
    const htmlTag = document.querySelector("html");
    const modalAnimationDuration = 500;
    setModalIsOpen(true);
    if (htmlTag) {
      htmlTag.classList.add("modal-is-open", "modal-is-opening");
      setTimeout(() => {
        htmlTag.classList.remove("modal-is-opening");
      }, modalAnimationDuration);
    }
  }

  //functions provided by PICO css for opening and closing of the modal

  function closeModal(event) {
    // event.preventDefault();
    const htmlTag = document.querySelector("html");
    setModalIsOpen(false);
    if (htmlTag) {
      htmlTag.classList.add("modal-is-closing");
      setTimeout(() => {
        setModalIsOpen(false);
        htmlTag.classList.remove("modal-is-open", "modal-is-closing");
      }, 500);
    }
  }

  function handleChange(event) {
    setStudentAvailCheck("");
    setStudentMarkLimit("");
    setNewStudent((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addNewStudent() {
    const studentCheckIfPresent = studentlist.find(
      (element) => element.name === newStudent.name
    );

    const markslimit = newStudent.marks > 100 ? true : false;

    if (studentCheckIfPresent) {
      setStudentAvailCheck(true);
    } else if (markslimit) {
      setStudentMarkLimit(true);
    } else {
      setStudentList([...studentlist, newStudent]);
      setNewStudent({
        name: "",
        subject: "",
        marks: "",
      });
      closeModal();
    }
  }

  const removeStudent = (name) => {
    setStudentList((prev) => prev.filter((item) => item.name !== name));
  };

  // will display the page only if the userauth is present else it will redirect to the login page.
  return (
    <>
      {userauth && (
        <div>
          <NavComponent />
          <ModalComponent
            modalstatus={isModalOpen}
            modaloff={closeModal}
            handleChange={handleChange}
            addstudent={addNewStudent}
            studentreset={newStudent}
            checkFlag={studentAvailCheck}
            marklimit={studentMarkLimit}
          />

          <div className="table_outer_div">
            <table>
              <thead data-theme="light">
                <tr>
                  <th scope="col" className="header">
                    Name
                  </th>
                  <th scope="col" className="header">
                    Subject
                  </th>
                  <th scope="col" className="header">
                    Mark
                  </th>
                  <th scope="col" className="header">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentlist.map((item) => {
                  return (
                    <tr key={item.name}>
                      <th scope="row">{item.name}</th>

                      <td>{item.subject}</td>

                      <td>{item.marks}</td>

                      <td>
                        <button onClick={() => removeStudent(item.name)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button onClick={openModal}>Add New Student</button>
        </div>
      )}
    </>
  );
};

export default LandingPageComponent;
