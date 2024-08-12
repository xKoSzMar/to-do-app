import { useState, useContext } from "react";
import { MyContext } from "../App";

function ListItem({ item, index }) {
  const { items, setItems } = useContext(MyContext);
  const [isChecked, setIsChecked] = useState(items[index].isChecked);

  const handleCheck = () => {
    const updatedItems = items;
    setIsChecked(!items[index].isChecked);
    updatedItems[index].isChecked = !items[index].isChecked;
    setItems(updatedItems);
  };

  return (
    <>
      <input type="checkbox" onChange={handleCheck} />
      {isChecked ? (
        <label className="text-blue-400 flex-1 ml-1 opacity-50 line-through">
          {item}
        </label>
      ) : (
        <label className="text-blue-400 flex-1 ml-1">{item}</label>
      )}
    </>
  );
}

export default ListItem;
