import React, { useEffect, useState } from "react";
import { FormControl, Button, Form } from "react-bootstrap";
import { ReactComponent as DeleteIcon } from "./assets/DeleteIcon.svg";
import { ReactComponent as EditIcon } from "./assets/EditIcon.svg";
import { ReactComponent as SaveIcon } from "./assets/SaveIcon.svg";

function App() {
  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    setTodo("");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">Todo List</h1>
      <div className="d-flex w-50 mt-3">
        <FormControl
          className="w-75"
          placeholder="Todo Input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button className="ms-5" onClick={addTodo}>
          Add Todo
        </Button>
      </div>
      <div className="mt-5  w-75">
        {todoList.map((todoItem, index) => (
          <div key={index} className="d-flex justify-content-between">
            <div className="d-flex">
              <Form.Check type="checkbox" className="me-2" />
              <label>{todoItem}</label>
            </div>
            <div>
              <EditIcon width={25} height={25} style={{cursor: 'pointer'}} className="me-2"/>
              <SaveIcon width={25} height={25} style={{cursor: 'pointer'}} className="me-2"/>
              <DeleteIcon width={25} height={25} style={{cursor: 'pointer'}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
