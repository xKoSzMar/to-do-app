import { useContext, useState } from "react";
import { MyContext } from "../App";
import DropdownMenu from "./DropdownMenu";
import ListItem from "./ListItem";

function ListLayout() {
  const { items } = useContext(MyContext);
  const [clicked, setClicked] = useState(null);

  return (
    <div className="bg-gray-800 mt-2 border-t-2 border-gray-900 w-full">
      <ul>
        {items.map((item, index) => (
          <li className="flex items-center mt-2 group" key={item.id}>
            <ListItem item={item.task} index={index} />
            <DropdownMenu
              index={index}
              clicked={clicked}
              setClicked={setClicked}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListLayout;
