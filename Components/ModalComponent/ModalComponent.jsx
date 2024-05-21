const ModalComponent = (props) => {
  console.log(props);

  return (
    <>
      <dialog
        open={props.modalstatus}
        className="modal-is-open modal-is-opening"
      >
        <article>
          <h2>Add New Student</h2>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Add Name"
            aria-label="Text"
            value={props.studentreset.name}
            onChange={props.handleChange}
          />
          <p>Subject</p>
          <input
            type="text"
            name="subject"
            placeholder="Add Subject"
            aria-label="Text"
            value={props.studentreset.subject}
            onChange={props.handleChange}
          />
          <p>Marks</p>
          <input
            type="number"
            name="marks"
            placeholder="Add Marks"
            aria-label="Number"
            value={props.studentreset.marks}
            onChange={props.handleChange}
          />
          <footer>
            <button className="secondary" onClick={props.modaloff}>
              Cancel
            </button>
            <button onClick={props.addstudent}>Confirm</button>
          </footer>
        </article>
      </dialog>
    </>
  );
};

export default ModalComponent;
