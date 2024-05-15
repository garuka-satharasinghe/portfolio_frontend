<template>
  <div>
    <h1>{{ name }}</h1>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const name='Garuka Satharasinghe';
const {data:projects,pending,error}=useFetch('http://localhost:5000/projects')
</script>

<style>
</style>
