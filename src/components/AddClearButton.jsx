import { useContext, useEffect } from "react";
import { MyContext } from "../App";

function AddClearButton({ clearTasks }) {
  const { items } = useContext(MyContext);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Delete") {
        clearTasks();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = () => {
    clearTasks();
  };

  return (
    items.length > 0 && (
      <button
        className="px-2 py-1 ml-3 text-gray-900 bg-red-500 border-2 border-red-600 rounded-xl hover:bg-red-600 hover:border-red-400 active:bg-red-400 transition ease duration-450"
        onClick={handleClick}
      >
        Clear
      </button>
    )
  );
}

export default AddClearButton;
