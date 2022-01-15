import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0Gal-kEkXNJ3aBk7ooSkKwoAvZkO3jygyam7n47Oy6kBaPFluhPqFhoJONSAQJtBgAitBNcLnRLrhE4b7fCFMoqwAc21XnddYCnq1l9-CDddutEmJSsSAXrC_o8EYXYx",
  },
});
