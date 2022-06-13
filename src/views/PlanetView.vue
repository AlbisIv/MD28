<template>
  <h1 class="title">Planet</h1>
  <div class="planet__container">
    <span>Name: {{ planet.singlePlanet.name }}</span>
    <span
      >Rotation period: {{ planet.singlePlanet.rotation_period }} hours</span
    >
    <span>Orbital period: {{ planet.singlePlanet.orbital_period }} days</span>
    <span>Diameter: {{ planet.singlePlanet.diameter }} km</span>
    <span>Climate: {{ planet.singlePlanet.climate }}</span>
    <span>Gravity: {{ planet.singlePlanet.gravity }}</span>
    <span>Terrain: {{ planet.singlePlanet.terrain }}</span>
    <span>Surface water: {{ planet.singlePlanet.surface_water }} %</span>
    <span>Population: {{ planet.singlePlanet.population }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePlanetsStore } from "@/stores/planets";
const planet = usePlanetsStore();
const route = useRoute();
const id = route.params.id;

onMounted(() => {
  planet.getPlanetById(id);
});
</script>

<style>
.title {
  text-align: center;
}
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
