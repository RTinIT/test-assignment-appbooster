import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(false);

  const switchTheme = () => {
    setTheme((v) => !v);
  };

  return { theme, switchTheme };
};

export default useTheme;
