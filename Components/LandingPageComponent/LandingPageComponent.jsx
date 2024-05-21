import React from "react";
import studentslist from "../../src/assets/studentsdetails.json";
import "./LandingPageComponent.css";
import { ModalComponent } from "../index";

const LandingPageComponent = () => {
  const [studentlist, setStudentList] = React.useState(studentslist);
  const [isModalOpen, setModalIsOpen] = React.useState(false);

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
    const htmlTag = document.querySelector("html");
    setModalIsOpen(false);
    event.preventDefault();
    if (htmlTag) {
      htmlTag.classList.add("modal-is-closing");
      setTimeout(() => {
        setModalIsOpen(false);
        htmlTag.classList.remove("modal-is-open", "modal-is-closing");
      }, 500);
    }
  }

  return (
    <>
      <ModalComponent modalstatus={isModalOpen} modaloff={closeModal} />

      {/* <dialog open={isModalOpen} className="modal-is-open modal-is-opening">
        <article>
          <h2>Add New Student</h2>
          <p>Name</p>
          <ul>
            <li>Membership: Individual</li>
            <li>Price: $10</li>
          </ul>
          <footer>
            <button className="secondary" onClick={closeModal}>
              Cancel
            </button>
            <button>Confirm</button>
          </footer>
        </article>
      </dialog> */}
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
              <tr>
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
      <button onClick={openModal}>Add New Student</button>
    </>
  );
};

export default LandingPageComponent;
