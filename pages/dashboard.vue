<template>
  <div class="dashboard-container bg-gray-100 p-8">
    <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

    <div class="projects-section mb-8">
      <h2 class="text-2xl font-semibold mb-4">Your Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project._id"
          class="project-card bg-white rounded-lg relative"
        >
          <button
            @click="deleteProject(project._id)"
            class="absolute top-2 right-2 rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >
            Delete
          </button>
          <img
            :src="
              'data:' + project.img.contentType + ';base64,' + project.img.data
            "
            alt="Project Image"
            class="w-full h-60 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
              class="text-indigo-600 hover:underline"
              >View Project</a
            >
            <button
              @click="openUpdateModal(project)"
              class="ml-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Button to open the modal -->
    <button
      @click="openModal"
      class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
    >
      Create New Project
    </button>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-50">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Create New Project</h2>
          <button @click="closeModal" class="text-gray-600 hover:text-gray-900">
            &times;
          </button>
        </div>
        <form @submit.prevent="createProject">
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Project Name</label
              >
              <input
                type="text"
                v-model="newProject.name"
                id="name"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
                >Project Description</label
              >
              <textarea
                v-model="newProject.description"
                id="description"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label for="link" class="block text-sm font-medium text-gray-700"
                >Project Link</label
              >
              <input
                type="text"
                v-model="newProject.link"
                id="link"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="img" class="block text-sm font-medium text-gray-700"
                >Project Image</label
              >
              <input
                type="file"
                @change="handleFileUpload"
                id="img"
                class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button
              type="button"
              @click="closeModal"
              class="mr-3 rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Update Modal -->
    <div
      v-if="isUpdateModalOpen"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-50">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Update Project</h2>
          <button
            @click="closeUpdateModal"
            class="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <form @submit.prevent="updateProject">
          <div class="space-y-4">
            <div>
              <label
                for="update-name"
                class="block text-sm font-medium text-gray-700"
                >Project Name</label
              >
              <input
                type="text"
                v-model="update.name"
                id="update-name"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="update-description"
                class="block text-sm font-medium text-gray-700"
                >Project Description</label
              >
              <textarea
                v-model="update.description"
                id="update-description"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label
                for="update-link"
                class="block text-sm font-medium text-gray-700"
                >Project Link</label
              >
              <input
                type="text"
                v-model="update.link"
                id="update-link"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="update-img"
                class="block text-sm font-medium text-gray-700"
                >Project Image</label
              >
              <input
                type="file"
                @change="handleFileUpload"
                id="update-img"
                class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button
              type="button"
              @click="closeUpdateModal"
              class="mr-3 rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>

    <form
      class="relative isolate px-6 pt-14 lg:px-8 bg-white shadow-md rounded-lg mt-8"
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
            </div>
            <div class="col-span-full">
              <label
                for="link"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Updated Project Link</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="update.link"
                  id="link"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="img"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Updated Project Image</label
              >
              <div class="mt-2">
                <input
                  type="file"
                  @change="handleFileUpload"
                  id="img"
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                />
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
          Update Project
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
const newProject = ref({ name: "", description: "", link: "", img: null });
const update = ref({ id: "", name: "", description: "", link: "", img: null });
const deleteProjectId = ref("");
const message = ref("");
const isModalOpen = ref(false);
const isUpdateModalOpen = ref(false);

const router = useRouter();

// Fetch projects (assumes API route available)
const fetchProjects = async () => {
  const response = await fetch("http://localhost:5000/projects");
  const data = await response.json();
  projects.value = data;
};

// Handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newProject.value.img = file;
    update.value.img = file;
  }
};

// Create project function
const createProject = async () => {
  const formData = new FormData();
  formData.append("name", newProject.value.name);
  formData.append("description", newProject.value.description);
  formData.append("link", newProject.value.link);
  if (newProject.value.img) {
    formData.append("img", newProject.value.img);
  }

  const response = await fetch("http://localhost:5000/projects", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  projects.value.push(data);

  // Display success message and clear fields
  message.value = "Project created successfully!";
  newProject.value = { name: "", description: "", link: "", img: null };

  // Clear file input
  document.getElementById("img").value = "";

  // Close the modal
  closeModal();
};

// Update project function
const updateProject = async () => {
  const formData = new FormData();
  formData.append("name", update.value.name);
  formData.append("description", update.value.description);
  formData.append("link", update.value.link);
  if (update.value.img) {
    formData.append("img", update.value.img);
  }

  const response = await fetch(
    `http://localhost:5000/projects/${update.value.id}`,
    {
      method: "PATCH",
      body: formData,
    }
  );
  const data = await response.json();
  const index = projects.value.findIndex((p) => p._id === data._id);
  projects.value[index] = data;

  // Close the update modal
  closeUpdateModal();
};

// Delete project function
const deleteProject = async (projectId) => {
  await fetch(`http://localhost:5000/projects/${projectId}`, {
    method: "DELETE",
  });
  projects.value = projects.value.filter((p) => p._id !== projectId);
};

// Open modal function
const openModal = () => {
  isModalOpen.value = true;
};

// Close modal function
const closeModal = () => {
  isModalOpen.value = false;
};

// Open update modal function
const openUpdateModal = (project) => {
  update.value = { ...project };
  isUpdateModalOpen.value = true;
};

// Close update modal function
const closeUpdateModal = () => {
  isUpdateModalOpen.value = false;
};

onMounted(() => {
  fetchProjects();
});
</script>

<style>
.dashboard-container {
  background-color: #f3f4f6;
  padding: 2rem;
}
</style>
