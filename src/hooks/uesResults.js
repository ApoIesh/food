import { useEffect, useState } from "react";
import ylep from "../api/ylep";

export default () => {
  const [results, steResults] = useState([]);
  const [errorMassage, setErrorMassage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await ylep.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      steResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMassage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi(" ");
  }, []);

  return [searchApi, results, errorMassage];
};
