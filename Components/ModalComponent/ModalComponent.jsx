import "./ModalComponent.css";

const ModalComponent = (props) => {
  return (
    <>
      <dialog
        open={props.modalstatus}
        className="modal-is-open modal-is-opening"
      >
        <article>
          <h2>Add New Student</h2>
          <input
            type="text"
            name="name"
            placeholder="Add Name"
            aria-label="Text"
            value={props.studentreset.name}
            onChange={props.handleChange}
            aria-invalid={props.checkFlag}
          />
          {props.checkFlag && <p>Name already exists</p>}
          <input
            type="text"
            name="subject"
            placeholder="Add Subject"
            aria-label="Text"
            value={props.studentreset.subject}
            onChange={props.handleChange}
          />
          <input
            type="number"
            name="marks"
            placeholder="Add Marks"
            aria-label="Number"
            value={props.studentreset.marks}
            onChange={props.handleChange}
            min="0"
            max="10"
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
