<template>
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div class="text-center px-4 max-w-5xl mx-auto">
        <!-- Name -->
        <div class="mb-8">
          <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-gray-700 leading-tight">
            <div>Garuka</div>
            <div>Satharasinghe</div>
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div class="w-full max-w-md mx-auto">
          <div class="h-1.5 bg-gradient-to-r from-transparent via-gray-200 via-50% via-gray-200 to-transparent rounded-full overflow-hidden relative">
            <div 
              class="h-full rounded-full transition-all duration-300 ease-out relative"
              :style="{ width: progress + '%' }"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600 via-50% via-purple-600 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  // Simulate loading progress
  const interval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 15
    }
  }, 200)

  // Wait for page to fully load
  if (document.readyState === 'complete') {
    completeLoading(interval)
  } else {
    window.addEventListener('load', () => {
      completeLoading(interval)
    })
  }
})

const completeLoading = (interval) => {
  clearInterval(interval)
  progress.value = 100
  
  // Hide loading screen after a short delay
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
