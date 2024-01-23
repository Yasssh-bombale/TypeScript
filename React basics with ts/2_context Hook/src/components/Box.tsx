import { useContext } from "react";
import { context } from "../App";

const Box = () => {
  const { theme, toggleTheme } = useContext(context);
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "rgb(40,40,40)" : "white",
        color: theme === "dark" ? "white" : "rgb(40,40,40)",
      }}
    >
      <h2>Box</h2>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Box;
