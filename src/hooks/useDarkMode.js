import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode() {
  const [value, setValue] = useLocalStorage(false);
  const toggleMode = (e) => {
    e.preventDefault();
    if (value === true) {
      var body = document.body;
      body.classList.add("dark-mode");
    } else {
      document.body.className = document.body.className.replace(
        "dark-mode",
        ""
      );
    }
    setValue(!value);
  };
  return [value, toggleMode];
}
