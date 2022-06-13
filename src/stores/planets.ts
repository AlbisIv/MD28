import axios from "axios";
import { defineStore } from "pinia";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
};

export const usePlanetsStore = defineStore("planetsStore", {
  state: () => ({
    planetArray: [] as Planet[],
    singlePlanet: {} as Planet,
    nextPage: "" as string,
  }),
  getters: {},
  actions: {
    async getPlanets() {
      const response = await axios.get("https://swapi.dev/api/planets/");
      this.planetArray = response.data.results;
      this.nextPage = response.data.next;
    },
    async getPlanetById(id: string) {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
      this.singlePlanet = response.data;
    },
  },
});
