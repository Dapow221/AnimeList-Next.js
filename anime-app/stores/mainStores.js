import { create } from "zustand";
import axios from "axios";

const baseUrl = `https://api.jikan.moe/v4`;

export const useMainStore = create((set) => ({
  dataAnime: [],

  getDataAnime: async () => {
    try {
      const { data: response } = await axios.get(`${baseUrl}/top/anime`);
      console.log(response);
      set({ dataAnime: response });
    } catch (error) {
      console.log(error);
    }
  },
}));
