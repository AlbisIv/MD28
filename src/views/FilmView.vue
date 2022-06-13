<template class="main">
  <h1 class="title">Films</h1>
  <div class="select__container">
    <select class="" @change="inputHandler()" v-model="input.sortBy">
      <option value="id" selected disabled>Sort by</option>
      <option value="id">Sort by ID</option>
      <option value="date">Sort By release date</option>
    </select>
    <select class="" @change="inputHandler()" v-model="input.sortOrder">
      <option value="asc" selected disabled>Sort order</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  </div>
  <div class="card__container">
    <div v-for="film in films.filmArray" class="card" :key="film.episode_id">
      <span>Title: {{ film.title }}</span>
      <span>ID: {{ film.episode_id }}</span>
      <span>Director: {{ film.director }}</span>
      <span>Producers: {{ film.title }}</span>
      <span>Released: {{ film.release_date }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFilmStore } from "@/stores/films";
const films = useFilmStore();
let input = {
  sortBy: "id",
  sortOrder: "asc",
};
function inputHandler() {
  console.log(input);
  if (input.sortOrder === "asc" && input.sortBy === "id") {
    films.sortFilmsByIdAsc();
  } else if (input.sortOrder === "desc" && input.sortBy === "id") {
    films.sortFilmsByIdDesc();
  } else if (input.sortOrder === "asc" && input.sortBy === "date") {
    films.sortFilmsByDateAsc();
  } else if (input.sortOrder === "desc" && input.sortBy === "date") {
    films.sortFilmsByDateDesc();
  }
}
onMounted(() => {
  films.getFilms();
  films.sortFilmsByIdAsc();
});
// return { films, input, inputHandler };
</script>

<style scoped>
.select__container {
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  gap: 10px;
}

.card {
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
