import axios from "axios";
import { defineStore } from "pinia";

type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};

export const useFilmStore = defineStore("filmStore", {
  state: () => ({
    filmArray: [] as Film[],
    nextPage: "" as string,
  }),
  getters: {},
  actions: {
    async getFilms() {
      const response = await axios.get("https://swapi.dev/api/films/");
      this.filmArray = response.data.results;
      this.nextPage = response.data.next;
      this.sortFilmsByIdAsc();
    },
    sortFilmsByIdAsc() {
      this.filmArray.sort((a, b) => a.episode_id - b.episode_id);
    },
    sortFilmsByIdDesc() {
      this.filmArray.sort((a, b) => b.episode_id - a.episode_id);
    },
    sortFilmsByDateAsc() {
      this.filmArray.sort(
        (a, b) =>
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime()
      );
    },
    sortFilmsByDateDesc() {
      this.filmArray.sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      );
    },
  },
});
