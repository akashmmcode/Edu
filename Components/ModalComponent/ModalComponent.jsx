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
          <ul>
            <li>Membership: Individual</li>
            <li>Price: $10</li>
          </ul>
          <footer>
            <button className="secondary" onClick={props.modaloff}>
              Cancel
            </button>
            <button>Confirm</button>
          </footer>
        </article>
      </dialog>
    </>
  );
};

export default ModalComponent;
