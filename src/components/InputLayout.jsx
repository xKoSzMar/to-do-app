import { useState, useContext } from "react";
import { MyContext } from "../App";
import AddClearButton from "./AddClearButton";
import { v4 } from "uuid";

function InputLayout() {
  const { setItems } = useContext(MyContext);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      addTask();
    } else if (e.key === "Escape") {
      setInputValue("");
    }
  };

  const addTask = () => {
    setItems((i) => [...i, { id: v4(), task: inputValue, isChecked: false }]);
    setInputValue("");
  };

  const clearTasks = () => {
    setItems([]);
  };

  return (
    <div className="flex bg-gray-800">
      <input
        className="mb-px w-52 bg-gray-800 text-blue-400 hover:mb-0 hover:border-b hover:border-blue-400 focus:outline-none focus:border-b focus:border-blue-400 transition ease duration-450"
        type="text"
        placeholder="Add your task"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        required
      />
      {inputValue.length > 0 && (
        <button
          className="px-3 py-1 ml-3 text-gray-900 bg-green-400 border-2 border-green-600 rounded-xl hover:bg-green-600 hover:border-green-400 active:bg-green-400 transition ease duration-450"
          onClick={addTask}
        >
          Add
        </button>
      )}
      <AddClearButton clearTasks={clearTasks} />
    </div>
  );
}

export default InputLayout;
