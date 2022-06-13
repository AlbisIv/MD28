<template class="main">
  <h1 class="title">People</h1>
  <div class="input__container">
    <input type="text" v-model="inputValue" />
    <button @click="characters.getCharacterByName(inputValue)">Search</button>
  </div>
  <div class="characters">
    <div
      class="character__card"
      v-for="character in characters.$state.characterArray"
      :key="character.name"
    >
      <span> Name: {{ character.name }} </span>
      <span> Birth year: {{ character.birth_year }} </span>
      <span> Gender: {{ character.gender }} </span>
      <span> Hair Color: {{ character.hair_color }} </span>
      <span> Height: {{ character.height }} </span>
      <span> Weight: {{ character.mass }} </span>
    </div>
  </div>
  <div class="input__container">
    <button @click="characters.getNextPage()">Load more</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { useCharacterStore } from "@/stores/characters";
let inputValue = "";
const characters = useCharacterStore();
// character.getCharacters()
onMounted(() => {
  console.log("notiek");
  characters.getCharacters();
});
</script>

<style>
.input__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.title {
  text-align: center;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.characters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 0 auto;
  max-width: 1280px;
  padding: 2rem;
  gap: 10px;
}
.character__card {
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
} */
</style>
