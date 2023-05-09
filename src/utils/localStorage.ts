interface ThemeData {
  theme: "blue" | "green";
}

const getDataFromLocalStorage = (key: string): ThemeData | null => {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      const parsedData = JSON.parse(data) as ThemeData;
      return parsedData;
    } catch (error) {
      console.error("Error parsing data from local storage:", error);
    }
  }
  return null;
};

const saveDataToLocalStorage = (data: ThemeData, key: string) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
};

export { getDataFromLocalStorage, saveDataToLocalStorage };
