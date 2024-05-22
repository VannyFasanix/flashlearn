<template>
  <div class="h-full max-h-full w-full flex flex-col justify-between items-center overflow-hidden relative">

    <div class="w-full h-1/6 flex justify-center items-center gap-3">
      <div class="h-8 w-2/3 bg-blue-800 rounded-xl shadow-md">
      </div>
      <p class="text-xs">0/{{deck.length}}</p>
    </div>

    <div class="h-5/6 w-full flex flex-row relative">
      <div class="h-full w-full flex items-center justify-center">
        <div class="w-2/3 h-1/2">
          <FlashcardCard @card-revealed="setShowWhenRepeat"></FlashcardCard>
        </div>
      </div>

      <!-- Mock cards -->
      <div class="absolute left-1/4 transform -translate-x-full h-full w-full flex items-center justify-center opacity-50">
        <div class="w-2/3 h-1/3">
          <FlashcardCard></FlashcardCard>
        </div>
      </div>

      <div class="absolute right-1/4 transform translate-x-full h-full w-full flex items-center justify-center opacity-50">
        <div class="w-2/3 h-1/3">
          <FlashcardCard></FlashcardCard>
        </div>
      </div>
    </div>

    <div v-if="showWhenRepeat" class="h-14 w-2/3">
      <FlashcardWhenRepeat/>
    </div>
  </div>
</template>

<script lang="ts" setup>

  import { deck } from "../../api/mock.json"

  const showWhenRepeat = ref(false)

  const setShowWhenRepeat = () => {
    showWhenRepeat.value = true
  }
</script>

<style scoped>
</style>
