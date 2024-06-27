<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        {{ name }}
      </h1>
    </div>
  </header>

  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>

    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
  </div>

  <div v-if="pending">Loading Projects...</div>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">
          Deploy faster
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Projects
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="project in projects"
            :key="project.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              {{ project.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ project.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div class="relative isolate px-6 pt-14 lg:px-8">
          <form @submit.prevent="createProject">
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Create New Project
                </h2>
                <div
                  class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
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
              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
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
              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
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
    </div>
  </div>

  <div v-if="pending1">Loading Blogs...</div>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="blog in blogs"
          :key="blog.name"
          class="flex max-w-xl flex-col items-start justify-between"
        >
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <span class="absolute inset-0" />
              {{ blog.title }}
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ blog.content }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>

  <!--
  <div v-if="pending">Loading Projects...</div>
  <div>
    <h2>Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <p>{{ project._id }}</p>
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </div>
  

  <br />
  <div>
    <h1>Create New Project</h1>
    <form @submit.prevent="createProject">
      
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

  <br />
  <div>
    <h2>Update Project</h2>
    <form @submit.prevent="updateProject">
      <div>
        <label for="id">Project ID : </label>

        <select v-model="update.id" id="id" required>
          <option
            v-for="project in projects"
            :key="project._id"
            :value="project._id"
          >
            {{ project.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="name">Project Name : </label>
        <input type="text" v-model="update.name" id="name" required />
      </div>
      <div>
        <label for="description">Project Description : </label>
        <textarea
          name="description"
          v-model="update.description"
          id="description"
        ></textarea>
      </div>
      <button type="submit">Update Project</button>
    </form>
  </div>

  <br />
  <div>
    <h1>Delete Project</h1>
    <form @submit.prevent="deleteProject">
      
      <div>
        <label for="id">Project ID : </label>

        <select v-model="deleteProjectId" id="id" required>
          <option
            v-for="project in projects"
            :key="project._id"
            :value="project._id"
          >
            {{ project.name }}
          </option>
        </select>
      </div>
      <button type="submit">Delete Project</button>
    </form>
  </div>
  <br />


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
  -->
</template>

<script setup>
import { ref } from "vue";

const name = "Garuka Satharasinghe";
const {
  data: projects,
  pending,
  error,
} = useFetch("http://localhost:5000/projects");
const {
  data: blogs,
  pending1,
  error1,
} = useFetch("http://localhost:5000/blogs");

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

const update = ref({ id: "", name: "", description: "" });

const updateProject = async () => {
  console.log(update.value);
  try {
    //ensure that update.value is a valid object
    const projectData = {
      name: update.value.name.trim(),
      description: update.value.description.trim(),
    };

    const response = await fetch(
      `http://localhost:5000/projects/${update.value.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update project");
    }

    // Log the raw response text
    const responseText = await response.text();
    console.log("Raw Response:", responseText);

    // Try parsing the JSON response
    const data = JSON.parse(responseText);

    // find the project in the projects array and update it
    const index = projects.value.findIndex(
      (project) => project._id === data._id
    );
    projects.value[index] = data;

    // clear the update object
    update.value = { id: "", name: "", description: "" };
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

<style></style>
