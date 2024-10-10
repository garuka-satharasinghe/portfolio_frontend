<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <div>
      <h2>Create New Project</h2>
      <form @submit.prevent="createProject">
        <input v-model="newProject.name" placeholder="Project Name" required />
        <textarea
          v-model="newProject.description"
          placeholder="Project Description"
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>

    <div>
      <h2>Update Project</h2>
      <form @submit.prevent="updateProject">
        <select v-model="update.id">
          <option
            v-for="project in projects"
            :key="project._id"
            :value="project._id"
          >
            {{ project.name }}
          </option>
        </select>
        <input v-model="update.name" placeholder="New Project Name" required />
        <textarea
          v-model="update.description"
          placeholder="New Project Description"
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>

    <div>
      <h2>Delete Project</h2>
      <form @submit.prevent="deleteProject">
        <select v-model="deleteProjectId">
          <option
            v-for="project in projects"
            :key="project._id"
            :value="project._id"
          >
            {{ project.name }}
          </option>
        </select>
        <button type="submit">Delete</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Create state variables
const projects = ref([]);
const newProject = ref({ name: "", description: "" });
const update = ref({ id: "", name: "", description: "" });
const deleteProjectId = ref("");

const router = useRouter();

// Fetch projects (assumes API route available)
const fetchProjects = async () => {
  const response = await fetch("http://localhost:5000/projects");
  const data = await response.json();
  projects.value = data;
};

onMounted(() => {
  // Check if logged in, otherwise redirect to login
  const token = localStorage.getItem("authToken");
  if (!token) {
    router.push("/login");
  } else {
    fetchProjects();
  }
});

// Create project function
const createProject = async () => {
  const response = await fetch("http://localhost:5000/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProject.value),
  });
  const data = await response.json();
  projects.value.push(data);
};

// Update project function
const updateProject = async () => {
  const response = await fetch(
    `http://localhost:5000/projects/${update.value.id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update.value),
    }
  );
  const data = await response.json();
  const index = projects.value.findIndex((p) => p._id === data._id);
  projects.value[index] = data;
};

// Delete project function
const deleteProject = async () => {
  await fetch(`http://localhost:5000/projects/${deleteProjectId.value}`, {
    method: "DELETE",
  });
  projects.value = projects.value.filter(
    (p) => p._id !== deleteProjectId.value
  );
};
</script>

<style>
.dashboard-container {
  /* Add basic styles */
}
</style>
