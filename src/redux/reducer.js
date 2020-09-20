import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, REMOVE_All_TODO } from "./actions";
import { todoList } from "./state";
import { v1 as uuid } from "uuid";

export default (state = todoList, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: uuid(), todo: action.payload }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id != action.payload);
    case UPDATE_TODO:
      return state;
    case REMOVE_All_TODO:
      return [];
    default:
      return state;
  }
};
