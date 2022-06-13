import axios from "axios";
import { defineStore } from "pinia";
import { onMounted } from "vue";

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

export const useCharacterStore = defineStore("characterStore", {
  state: () => ({
    characterArray: [] as Character[],
    nextPage: "" as string,
  }),
  getters: {},
  actions: {
    async getCharacters() {
      const response = await axios.get("https://swapi.dev/api/people/");
      this.characterArray = response.data.results;
      this.nextPage = response.data.next;
    },
    async getCharacterByName(name: string) {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${name}`
      );
      this.characterArray = response.data.results;
      this.nextPage = response.data.next;
    },
    async getNextPage() {
      const response = await axios.get(this.nextPage);
      this.characterArray = [...this.characterArray, ...response.data.results];
      this.nextPage = response.data.next;
      console.log(this.characterArray);
    },
  },
});
// function getCharacters() {
//   return fetch("https://swapi.dev/api/people/")
//     .then((res) => res.json())
//     .then((data) => data.results);
// }

// lifecycle hooks
// onMounted(() => {});
