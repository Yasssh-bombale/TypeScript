import { ReactNode, createContext, useState } from "react";
import Box from "./components/Box";

type themeType = "light" | "dark";

interface contextType {
  theme: themeType;
  toggleTheme: () => void;
}

export const context = createContext<contextType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <context.Provider value={{ theme, toggleTheme }}>
      {children}
    </context.Provider>
  );
};
function App() {
  return (
    <>
      <ThemeProvider>
        <h1>hey there</h1>
        <Box />
      </ThemeProvider>
    </>
  );
}

export default App;
