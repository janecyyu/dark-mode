import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoreValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    // Save state
    setStoreValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
