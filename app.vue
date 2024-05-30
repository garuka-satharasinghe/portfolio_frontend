<template>
  <h1>{{ name }}</h1>
  
    <div v-if="pending">Loading Projects...</div>
    <div>
    <h2>Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>

  <div>
    <h1>Create New Project</h1>
    <form @submit.prevent="createProject">
      <!-- prevent refresh after submit -->
      <div>
        <label for="name">Project Name : </label>
        <input type="text" v-model="newProject.name" id="name" required />
      </div>
      <div>
        <label for="description">Project Description : </label>
        <textarea
          name="description"
          v-model="newProject.description"
          id="description"
        ></textarea>
      </div>
      <button type="submit">Create Project</button>
    </form>
  </div>

  <div>
    <h1>Delete Project</h1>
    <form @submit.prevent="deleteProject">
      <!-- prevent refresh after submit -->
      <div>
        <label for="id">Project ID : </label>
        <input type="text" v-model="deleteProjectId" id="id" required />
      </div>
      <button type="submit">Delete Project</button>
    </form>
  </div>

  <div v-if="pending1">Loading Blogs...</div>
  <div>
    <h2>Blogs</h2>
    <ul>
      <li v-for="blog in blogs" :key="blog.name">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.content }}</p>
      </li>
    </ul>
  </div>

  
</template>

<script setup>
import { ref } from "vue";

const name='Garuka Satharasinghe';
const {data:projects,pending,error}=useFetch('http://localhost:5000/projects')
const {data:blogs,pending1,error1}=useFetch('http://localhost:5000/blogs')

const newProject = ref({ name: "", description: "" });


const createProject = async () => {
  console.log(newProject.value);
  try {
    //ensure that newProject.value is a valid object
    const projectData = {
      name: newProject.value.name.trim(),
      description: newProject.value.description.trim(),
    };

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error("Failed to create project");
    }

    // Log the raw response text
    const responseText = await response.text();
    console.log("Raw Response:", responseText);

    // Try parsing the JSON response
    const data = JSON.parse(responseText);

    // push data to frontend
    projects.value.push(data);
  } catch (error) {
    console.error(error);
  }
};

const deleteProjectId = ref("");

const deleteProject = async () => {
  console.log(deleteProjectId.value);
  try {
    const response = await fetch(
      `http://localhost:5000/projects/${deleteProjectId.value}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete project");
    }

    // Log the raw response text
    const responseText = await response.text();
    console.log("Raw Response:", responseText);

    // Try parsing the JSON response
    const data = JSON.parse(responseText);

    // remove the project from the projects array
    const index = projects.value.findIndex(
      (project) => project._id === data._id
    );
    projects.value.splice(index, 1);

    // clear the deleteId object
    deleteProjectId.value = "";
  } catch (error) {
    console.error(error);
  }
};

</script>

<style>
</style>
