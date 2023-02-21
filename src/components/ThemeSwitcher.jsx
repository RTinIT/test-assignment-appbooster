import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = ({ theme, switchTheme }) => {
  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
      }}
    >
      {!theme ? (
        <FaMoon
          size={18}
          style={{ padding: 8, cursor: "pointer" }}
          color="#262626"
          onClick={() => {
            switchTheme((v) => !v);
          }}
        />
      ) : (
        <FaSun
          size={18}
          style={{ padding: 8, cursor: "pointer" }}
          color="yellow"
          onClick={() => {
            switchTheme((v) => !v);
          }}
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
