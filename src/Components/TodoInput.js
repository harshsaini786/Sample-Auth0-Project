import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearAllTodo } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  const handleClearAll = () => {
    dispatch(clearAllTodo());
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    let instances = M.Modal.init(elems);
    //console.log(instances);
  }, []);

  return (
    <>
      <form className="todoInput" onSubmit={handleAddTodo}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          required
        />
        <button type="submit" className="waves-effect waves-light btn-small">
          Add
        </button>
        <button
          type="button"
          data-target="modal1"
          className="modal-trigger waves-effect waves-light btn-small"
        >
          Clear All
        </button>
      </form>

      {/* Modal JSX */}
      <div id="modal1" className="modal">
        <div className="modalContentCustom">
          <h5>Are you sure, you want to clear all todos?</h5>
        </div>
        <div className="modal-footer">
          <button
            onClick={handleClearAll}
            className="modal-close waves-effect waves-green btn-small"
          >
            Yes
          </button>
          <button className="modal-close waves-effect waves-green btn-small">
            No
          </button>
        </div>
      </div>
    </>
  );
};
