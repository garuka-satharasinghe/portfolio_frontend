<template>
  <div v-if="user" class="dashboard-container bg-gray-100 p-8">
    <h1 class="text-3xl text-gray-700 font-bold mb-6">Dashboard</h1>
    <div class="mb-4">Welcome, {{ user.username }}! <button @click="logout" class="text-red-600 hover:underline ml-2">Logout</button></div>
    <!-- ...existing dashboard/project code... -->
    <div class="projects-section mb-8">
      <h2 class="text-2xl text-gray-700 font-semibold mb-4">Your Projects</h2>
      <div v-if="pending"><p>Loading...</p></div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="project-card bg-white rounded-lg relative flex items-center justify-center cursor-pointer hover:bg-gray-200"
          @click="openModal"
        >
          <span class="text-gray-500 text-lg font-semibold"
            >+ Add New Project</span
          >
        </div>
        <div
          v-for="project in projects"
          :key="project._id"
          class="project-card bg-white rounded-lg relative"
        >
          <div class="absolute top-2 right-2">
            <button
              @click="toggleDropdown(project._id)"
              class="rounded-full bg-gray-200 p-2 text-gray-600 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              ⋮
            </button>
            <div
              v-if="dropdownOpen === project._id"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-10"
            >
              <button
                @click="openUpdateModal(project)"
                class="block w-full text-left px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-t-md"
              >
                Update
              </button>
              <button
                @click="deleteProject(project._id)"
                class="block w-full text-left px-4 py-2 text-sm font-semibold text-red-700 hover:text-white hover:bg-red-700 rounded-b-md"
              >
                Delete
              </button>
            </div>
          </div>
          <img
            :src="
              'data:' + project.img.contentType + ';base64,' + project.img.data
            "
            alt="Project Image"
            class="w-full h-60 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-700 mb-2">
              {{ project.name }}
            </h3>
            <p class="text-gray-700 text-s mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            <a
              :href="project.link"
              target="_blank"
              class="text-indigo-600 hover:underline"
              >View Project</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Section -->
    <div class="blogs-section mb-8">
      <h2 class="text-2xl text-gray-700 font-semibold mb-4">Your Blogs</h2>
      <div v-if="blogsPending"><p>Loading...</p></div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="blog-card bg-white rounded-lg relative flex items-center justify-center cursor-pointer hover:bg-gray-200"
          @click="openBlogModal"
        >
          <span class="text-gray-500 text-lg font-semibold"
            >+ Add New Blog</span
          >
        </div>
        <div
          v-for="blog in blogs"
          :key="blog._id"
          class="blog-card bg-white rounded-lg relative"
        >
          <div class="absolute top-2 right-2">
            <button
              @click="toggleBlogDropdown(blog._id)"
              class="rounded-full bg-gray-200 p-2 text-gray-600 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              ⋮
            </button>
            <div
              v-if="blogDropdownOpen === blog._id"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-10"
            >
              <button
                @click="openUpdateBlogModal(blog)"
                class="block w-full text-left px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-t-md"
              >
                Update
              </button>
              <button
                @click="deleteBlog(blog._id)"
                class="block w-full text-left px-4 py-2 text-sm font-semibold text-red-700 hover:text-white hover:bg-red-700 rounded-b-md"
              >
                Delete
              </button>
            </div>
          </div>
          <img
            v-if="blog.img && blog.img.data"
            :src="
              'data:' + blog.img.contentType + ';base64,' + blog.img.data
            "
            alt="Blog Image"
            class="w-full h-60 object-cover rounded-t-lg"
          />
          <div v-else class="w-full h-60 bg-gray-200 rounded-t-lg flex items-center justify-center">
            <span class="text-gray-400">No Image</span>
          </div>
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-700 mb-2">
              {{ blog.title }}
            </h3>
            <p class="text-gray-700 text-s mb-4 line-clamp-2">
              {{ blog.content }}
            </p>
            <a
              :href="blog.link"
              target="_blank"
              class="text-indigo-600 hover:underline"
              >View Blog</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- ...existing modals and update modal code... -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-50">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Create New Project</h2>
          <button @click="closeModal" class="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <form @submit.prevent="createProject">
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Project Name</label>
              <input type="text" v-model="newProject.name" id="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700">Project Description</label>
              <textarea v-model="newProject.description" id="description" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label for="link" class="block text-sm font-medium text-gray-700">Project Link</label>
              <input type="text" v-model="newProject.link" id="link" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="img" class="block text-sm font-medium text-gray-700">Project Image</label>
              <input type="file" @change="handleFileUpload" id="img" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button type="button" @click="closeModal" class="mr-3 rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Create Project</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="isUpdateModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-50">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Update Project</h2>
          <button @click="closeUpdateModal" class="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <form @submit.prevent="updateProject">
          <div class="space-y-4">
            <div>
              <label for="update-name" class="block text-sm font-medium text-gray-700">Project Name</label>
              <input type="text" v-model="update.name" id="update-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="update-description" class="block text-sm font-medium text-gray-700">Project Description</label>
              <textarea v-model="update.description" id="update-description" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label for="update-link" class="block text-sm font-medium text-gray-700">Project Link</label>
              <input type="text" v-model="update.link" id="update-link" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="update-img" class="block text-sm font-medium text-gray-700">Project Image</label>
              <input type="file" @change="handleFileUpload" id="update-img" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button type="button" @click="closeUpdateModal" class="mr-3 rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Update Project</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Blog Create Modal -->
    <div v-if="isBlogModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-50">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Create New Blog</h2>
          <button @click="closeBlogModal" class="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <form @submit.prevent="createBlog">
          <div class="space-y-4">
            <div>
              <label for="blog-title" class="block text-sm font-medium text-gray-700">Blog Title</label>
              <input type="text" v-model="newBlog.title" id="blog-title" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="blog-content" class="block text-sm font-medium text-gray-700">Blog Content</label>
              <textarea v-model="newBlog.content" id="blog-content" required rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label for="blog-link" class="block text-sm font-medium text-gray-700">Blog Link</label>
              <input type="text" v-model="newBlog.link" id="blog-link" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="blog-img" class="block text-sm font-medium text-gray-700">Blog Image (optional)</label>
              <input type="file" @change="handleBlogFileUpload" id="blog-img" accept="image/*" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button type="button" @click="closeBlogModal" class="mr-3 rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Create Blog</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Blog Update Modal -->
    <div v-if="isBlogUpdateModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-50">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Update Blog</h2>
          <button @click="closeBlogUpdateModal" class="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <form @submit.prevent="updateBlog">
          <div class="space-y-4">
            <div>
              <label for="update-blog-title" class="block text-sm font-medium text-gray-700">Blog Title</label>
              <input type="text" v-model="blogUpdate.title" id="update-blog-title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="update-blog-content" class="block text-sm font-medium text-gray-700">Blog Content</label>
              <textarea v-model="blogUpdate.content" id="update-blog-content" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label for="update-blog-link" class="block text-sm font-medium text-gray-700">Blog Link</label>
              <input type="text" v-model="blogUpdate.link" id="update-blog-link" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label for="update-blog-img" class="block text-sm font-medium text-gray-700">Blog Image (optional)</label>
              <input type="file" @change="handleBlogFileUpload" id="update-blog-img" accept="image/*" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button type="button" @click="closeBlogUpdateModal" class="mr-3 rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Update Blog</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Auth state
import { useRouter } from "nuxt/app";
const user = ref(null);
const router = useRouter();

// Dashboard/project state (existing)
const newProject = ref({ name: "", description: "", link: "", img: null });
const update = ref({ id: "", name: "", description: "", link: "", img: null });
const deleteProjectId = ref("");
const message = ref("");
const isModalOpen = ref(false);
const isUpdateModalOpen = ref(false);
const dropdownOpen = ref(null);

// Blog state
const blogs = ref([]);
const blogsPending = ref(false);
const newBlog = ref({ title: "", content: "", link: "", img: null });
const blogUpdate = ref({ id: "", title: "", content: "", link: "", img: null });
const isBlogModalOpen = ref(false);
const isBlogUpdateModalOpen = ref(false);
const blogDropdownOpen = ref(null);

const {
  data: projects,
  pending,
  error: fetchError,
} = useFetch(
  "https://portfolio-backend-pi-plum.vercel.app/projects"
);

// Fetch projects (assumes API route available)
const fetchProjects = async () => {
  const response = await fetch("https://portfolio-backend-pi-plum.vercel.app/projects");
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

  const response = await fetch("https://portfolio-backend-pi-plum.vercel.app/projects", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  projects.value = [...projects.value, data]; // Ensure reactivity

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
  if (update.value.name) {
    formData.append("name", update.value.name);
  }
  if (update.value.description) {
    formData.append("description", update.value.description);
  }
  if (update.value.link) {
    formData.append("link", update.value.link);
  }
  if (update.value.img) {
    formData.append("img", update.value.img);
  }

  const response = await fetch(
    `https://portfolio-backend-pi-plum.vercel.app/projects/${update.value.id}`,
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
  await fetch(`https://portfolio-backend-pi-plum.vercel.app/projects/${projectId}`, {
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
  update.value = { ...project, id: project._id };
  isUpdateModalOpen.value = true;
};

// Close update modal function
const closeUpdateModal = () => {
  isUpdateModalOpen.value = false;
};

// Toggle dropdown function
const toggleDropdown = (projectId) => {
  dropdownOpen.value = dropdownOpen.value === projectId ? null : projectId;
};

// ==================== BLOG FUNCTIONS ====================

// Fetch blogs
const fetchBlogs = async () => {
  try {
    blogsPending.value = true;
    const response = await fetch("https://portfolio-backend-pi-plum.vercel.app/blogs");
    const data = await response.json();
    blogs.value = data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  } finally {
    blogsPending.value = false;
  }
};

// Handle blog file upload
const handleBlogFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newBlog.value.img = file;
    blogUpdate.value.img = file;
  }
};

// Create blog function
const createBlog = async () => {
  const formData = new FormData();
  formData.append("title", newBlog.value.title);
  formData.append("content", newBlog.value.content);
  formData.append("link", newBlog.value.link);
  if (newBlog.value.img) {
    formData.append("img", newBlog.value.img);
  }

  try {
    const response = await fetch("https://portfolio-backend-pi-plum.vercel.app/blogs", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    blogs.value = [...blogs.value, data];

    // Clear fields
    newBlog.value = { title: "", content: "", link: "", img: null };
    document.getElementById("blog-img").value = "";

    // Close the modal
    closeBlogModal();
  } catch (error) {
    console.error("Error creating blog:", error);
  }
};

// Update blog function
const updateBlog = async () => {
  const formData = new FormData();
  if (blogUpdate.value.title) {
    formData.append("title", blogUpdate.value.title);
  }
  if (blogUpdate.value.content) {
    formData.append("content", blogUpdate.value.content);
  }
  if (blogUpdate.value.link) {
    formData.append("link", blogUpdate.value.link);
  }
  if (blogUpdate.value.img) {
    formData.append("img", blogUpdate.value.img);
  }

  try {
    const response = await fetch(
      `https://portfolio-backend-pi-plum.vercel.app/blogs/${blogUpdate.value.id}`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const data = await response.json();
    const index = blogs.value.findIndex((b) => b._id === data._id);
    blogs.value[index] = data;

    // Close the update modal
    closeBlogUpdateModal();
  } catch (error) {
    console.error("Error updating blog:", error);
  }
};

// Delete blog function
const deleteBlog = async (blogId) => {
  try {
    await fetch(`https://portfolio-backend-pi-plum.vercel.app/blogs/${blogId}`, {
      method: "DELETE",
    });
    blogs.value = blogs.value.filter((b) => b._id !== blogId);
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
};

// Open blog modal function
const openBlogModal = () => {
  isBlogModalOpen.value = true;
};

// Close blog modal function
const closeBlogModal = () => {
  isBlogModalOpen.value = false;
};

// Open blog update modal function
const openUpdateBlogModal = (blog) => {
  blogUpdate.value = { ...blog, id: blog._id };
  isBlogUpdateModalOpen.value = true;
};

// Close blog update modal function
const closeBlogUpdateModal = () => {
  isBlogUpdateModalOpen.value = false;
};

// Toggle blog dropdown function
const toggleBlogDropdown = (blogId) => {
  blogDropdownOpen.value = blogDropdownOpen.value === blogId ? null : blogId;
};


// Logout function
async function logout() {
  try {
    await fetch("https://portfolio-backend-pi-plum.vercel.app/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    user.value = null;
    projects.value = [];
    router.push("/login");
  } catch (err) {
    router.push("/login");
  }
}

// Check if already logged in on mount
onMounted(async () => {
  try {
    const res = await fetch("https://portfolio-backend-pi-plum.vercel.app/auth/me", {
      credentials: "include"
    });
    if (res.ok) {
      user.value = await res.json();
      fetchProjects();
      fetchBlogs();
    } else {
      router.push("/login");
    }
  } catch (err) {
    router.push("/login");
  }
});
</script>

<style>
.dashboard-container {
  background-color: #f3f4f6;
  padding: 2rem;
}

.blog-card {
  min-height: 400px;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
