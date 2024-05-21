const ModalComponent = () => {
  return (
    <>
      <dialog open={isModalOpen} className="modal-is-open modal-is-opening">
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
      </dialog>
    </>
  );
};

export default ModalComponent;
