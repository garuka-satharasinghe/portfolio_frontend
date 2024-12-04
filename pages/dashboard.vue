<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <form @submit.prevent="createProject">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Create New Project
            </h2>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Project Name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="newProject.name"
                    id="name"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="description"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Project Description</label
                >
                <div class="mt-2">
                  <textarea
                    name="description"
                    v-model="newProject.description"
                    id="description"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about project.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>

    <form
      class="relative isolate px-6 pt-14 lg:px-8"
      @submit.prevent="updateProject"
    >
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Update Project
          </h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="id"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Project Name</label
              >
              <div class="mt-2">
                <select
                  v-model="update.id"
                  id="id"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option
                    v-for="project in projects"
                    :key="project._id"
                    :value="project._id"
                  >
                    {{ project.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Updated Project Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="update.name"
                  id="name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Updated Project Description</label
              >
              <div class="mt-2">
                <textarea
                  name="description"
                  v-model="update.description"
                  id="description"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update Project
        </button>
      </div>
    </form>

    <form
      class="relative isolate px-6 pt-14 lg:px-8"
      @submit.prevent="deleteProject"
    >
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Delete Project
          </h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="id"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Project Name</label
              >
              <div class="mt-2">
                <select
                  v-model="deleteProjectId"
                  id="id"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option
                    v-for="project in projects"
                    :key="project._id"
                    :value="project._id"
                  >
                    {{ project.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete Project
        </button>
      </div>
    </form>
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

// onMounted(() => {
//   // Check if logged in, otherwise redirect to login
//   const token = localStorage.getItem("authToken");
//   if (!token) {
//     router.push("/$login");
//   } else {
//     fetchProjects();
//   }
// });

onMounted(() => {
  fetchProjects();
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

<style></style>
