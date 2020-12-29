import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2utDsmx8xCIb65MM_hNjFCsCeknaC4vV_8Rfp8G9Kqk",
  },
});
