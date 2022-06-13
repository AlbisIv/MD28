<template>
  <h1 class="title">Planets</h1>
  <div class="planet__container">
    <div
      v-for="planet in planets.planetArray"
      class="planet"
      :key="planet.name"
    >
      <span>Name: {{ planet.name }}</span>
      <span>Rotation period: {{ planet.rotation_period }}</span>
      <span>Orbital period: {{ planet.orbital_period }}</span>
      <span>Diameter: {{ planet.diameter }}</span>
      <span>Climate: {{ planet.climate }}</span>
      <span>Gravity: {{ planet.gravity }}</span>
      <span>Terrain: {{ planet.terrain }}</span>
      <span>Surface water: {{ planet.surface_water }}</span>
      <span>Population: {{ planet.population }}</span>
      <button @click="navigateToSinglePlanet(planet.url)" class="btn">
        Planet details
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePlanetsStore } from "@/stores/planets.ts";
import { useRouter, useRoute } from "vue-router";
const planets = usePlanetsStore();
const router = useRouter();
const route = useRoute();

function navigateToSinglePlanet(link) {
  router.push(`/planets/${link.split("/")[5]}`);
}

onMounted(() => {
  planets.getPlanets();
});
</script>

<style>
.btn {
  background-color: #102511;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}
.planet__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  gap: 10px;
}
.planet {
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
