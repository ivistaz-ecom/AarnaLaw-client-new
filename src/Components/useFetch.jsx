import { useState } from "react";

const useFetch = (url) => {
  const [loading] = useState(false);
  const [error] = useState("");

  const handleGoogle = async (response) => {
    console.log(response)
  };
  return { loading, error, handleGoogle };
};

export default useFetch;