function Modal(props) {
  function cancelHandler() {
    props.cancelHandler();
  }
  return (
    <div className="modal">
      <p> Are you sure? </p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      {/*
        here we should use right attributes because it is built in tag 
       */}
      <button className="btn" onClick={props.confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
