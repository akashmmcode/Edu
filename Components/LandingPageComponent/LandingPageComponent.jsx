import React from "react";
import studentslist from "../../src/assets/studentsdetails.json";
import "./LandingPageComponent.css";
import { ModalComponent, HeaderComponent, NavComponent } from "../index";

const LandingPageComponent = () => {
  const [studentlist, setStudentList] = React.useState(studentslist);
  const [isModalOpen, setModalIsOpen] = React.useState(false);
  const [newStudent, setNewStudent] = React.useState({
    name: "",
    subject: "",
    marks: "",
  });

  console.log(newStudent);

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
    setNewStudent((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addNewStudent() {
    setStudentList([...studentlist, newStudent]);
    setNewStudent({
      name: "",
      subject: "",
      marks: "",
    });
    closeModal();
  }

  return (
    <>
      <NavComponent />
      {/* <HeaderComponent/> */}

      <ModalComponent
        modalstatus={isModalOpen}
        modaloff={closeModal}
        handleChange={handleChange}
        addstudent={addNewStudent}
        studentreset={newStudent}

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
                    <button>Action</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={openModal}>Add New Student</button>
    </>
  );
};

export default LandingPageComponent;
