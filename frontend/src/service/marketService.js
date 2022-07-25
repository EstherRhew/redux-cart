import API from "./api";

export const marketService = {
  getItemList: () => {
    try {
      const res = API.get("/getItemList")
      return res.data
    } catch (err) {
      console.error(`getItemList error: ${err}`);
      throw err;
    }

  }
}

