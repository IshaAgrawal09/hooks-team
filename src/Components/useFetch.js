import { useState } from "react";

const useFetch = (url, method, payload) => {
  //   debugger;
  const [data, setData] = useState(url);
  const [methods, setMethods] = useState(method);

  function extractDataFromApi() {
    const requestMethod = {
      method: methods,
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    };
    debugger;
    return fetch(data, requestMethod).then((response) => response.json());
  }

  return [extractDataFromApi];
};

export default useFetch;
