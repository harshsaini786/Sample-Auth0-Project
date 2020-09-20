import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions";

export default () => {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="todoList">
      {todoList.map((item) => (
        <div key={item.id} className="todoItems">
          <span>{item.todo}</span>
          {/* <i title="Edit" className="material-icons">
            edit
          </i> */}
          <i
            onClick={() => dispatch(removeTodo(item.id))}
            title="Delete"
            className="material-icons"
          >
            delete
          </i>
        </div>
      ))}
    </div>
  );
};
