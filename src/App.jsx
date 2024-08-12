import { useState, createContext, useEffect } from "react";
import InputLayout from "./components/InputLayout";
import ListLayout from "./components/ListLayout";

export const MyContext = createContext();

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <MyContext.Provider value={{ items, setItems }}>
        <InputLayout />
        {items.length > 0 && <ListLayout />}
      </MyContext.Provider>
    </>
  );
}

export default App;
