<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
      >
        Dashboard Login
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6"
        @submit.prevent="handleLogin"
        action="#"
        method="POST"
      >
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input
              v-model="username"
              name="username"
              type="text"
              placeholder="Username"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              :class="{ 'animate-shake': loginError }"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              name="password"
              type="password"
              placeholder="Password"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "nuxt/app";
import Swal from "sweetalert2";
import { ref } from "vue";

const router = useRouter();
const username = ref("");
const password = ref("");
const loginError = ref(false);

const handleLogin = async () => {
  try {
    if (!username.value || !password.value) {
      await Swal.fire({
        title: "Error!",
        text: "Please fill in all fields",
        icon: "error",
        customClass: {
          popup: "animated shake",
        },
      });
      return;
    }

    if (username.value === "garuka" && password.value === "123654789") {
      await Swal.fire({
        title: "Success!",
        text: "Welcome back!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff",
        customClass: {
          popup: "animated zoomIn",
        },
      });
      router.push("/dashboard");
    } else {
      loginError.value = true;
      setTimeout(() => {
        loginError.value = false;
      }, 500);

      await Swal.fire({
        title: "Error!",
        text: "Invalid credentials",
        icon: "error",
        confirmButtonText: "Try Again",
        background: "#fff",
        customClass: {
          popup: "animated shake",
        },
      });
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};
</script>

<style scoped>
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
}

.animate-shake {
  animation: shake 0.5s;
}

.animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}

@keyframes shake {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  animation-name: shake;
}
</style>
