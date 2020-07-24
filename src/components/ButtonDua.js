import React from "react";
import { ThemeContext } from "../context/ThemeContext";

const ButtonDua = () => {
  return (
    <div>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          return (
            <button
              style={{
                height: 50,
                width: 80,
                ...theme,
              }}
              onClick={toggleTheme}
            >
              Switch Theme
            </button>
          );
        }}
      </ThemeContext.Consumer>
    </div>
  );
};

export default ButtonDua;
