<template>
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div class="text-center px-4 max-w-5xl mx-auto">
        <!-- Name -->
        <div class="mb-8">
          <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-gray-700 leading-tight max-sm:leading-9">
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
  let startTime = Date.now()
  
  // Gradual progress based on time
  const progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime
    const timeBasedProgress = Math.min(85, (elapsed / 60000) * 85) // 85% over 60 seconds
    
    // Smooth increment
    if (progress.value < timeBasedProgress) {
      progress.value = Math.min(timeBasedProgress, progress.value + 1)
    }
  }, 100)

  // Wait for page to fully load
  const handleLoad = () => {
    clearInterval(progressInterval)
    
    // Smoothly complete to 100%
    const completeInterval = setInterval(() => {
      if (progress.value < 100) {
        progress.value = Math.min(100, progress.value + 2)
      } else {
        clearInterval(completeInterval)
        // Hide loading screen after reaching 100%
        setTimeout(() => {
          isLoading.value = false
        }, 500)
      }
    }, 30)
  }

  if (document.readyState === 'complete') {
    handleLoad()
  } else {
    window.addEventListener('load', handleLoad)
  }
})
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
