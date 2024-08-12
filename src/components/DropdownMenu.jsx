import { useContext, useEffect } from "react";
import { MyContext } from "../App";
import listImage from "../assets/UimEllipsisV.svg";

function DropdownMenu({ index, clicked, setClicked }) {
  const { items, setItems } = useContext(MyContext);

  useEffect(() => {
    function handleClick(e) {
      if (e.target.tagName !== "IMG" || e.key === "Escape") {
        setClicked(null);
      } else {
        setClicked(Number(e.target.id));
      }
    }

    document.addEventListener("click", handleClick);

    return function cleanup() {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setClicked(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const deleteItem = () => {
    setItems(items.filter((_, i) => i !== index));
  };

  const deleteItems = () => {
    setItems(items.filter((value) => !value.isChecked));
  };

  return (
    <div className="flex flex-col items-center content-center relative">
      <div className="group-hover:opacity-100 opacity-0 bg-gray-600 hover:bg-gray-400 active:bg-gray-600 rounded-full transition ease duration-450 cursor-pointer">
        <img id={index} src={listImage} width={"13em"} />
      </div>
      {clicked === index && (
        <div className="absolute text-xs top-4 w-[150px] bg-gray-400 rounded-md p-1 z-10">
          <button
            className="hover:bg-red-400 active:bg-red-600 rounded-md p-1 w-full transition ease duration-450"
            onClick={deleteItem}
          >
            Delete task
          </button>
          <button
            className="hover:bg-red-400 active:bg-red-600 rounded-md p-1 w-full transition ease duration-450"
            onClick={deleteItems}
          >
            Delete selected tasks
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
