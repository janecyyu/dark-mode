import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage(false);
  const toggleMode = (e) => {
    e.preventDefault();
    if (darkMode === true) {
      var body = document.body;
      body.classList.add("dark-mode");
    } else {
      document.body.className = document.body.className.replace(
        "dark-mode",
        ""
      );
    }
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleMode];
}
