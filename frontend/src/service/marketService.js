import API from "./api";
import data from '../assets/data/productList.json'

export const marketService = {
  getItemList: async () => {
    try {
      const res = await API.get("/getItemList")
      return res.data
    } catch (err) {
      console.error(`getItemList error: ${err}`);
      return {list: data.productList}
    }

  }
}

