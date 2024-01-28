import axios from "axios";

export const Service = {
  async getData(url: string) {
    try {
      const response = await axios.get(url);       
      return response.data;
    } catch (err) {
      return err;
    }
  },
};