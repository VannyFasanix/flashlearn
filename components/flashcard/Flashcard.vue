<template>
  <div class="h-full max-h-full w-full flex flex-col justify-between items-center overflow-hidden relative">
    <div class="h-5/6 w-full flex flex-row relative">
      <div class="h-full w-full flex items-center justify-center">
        <div class="w-2/3 h-1/2">
          <FlashcardCard></FlashcardCard>
        </div>
      </div>

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

    <div class="h-16 w-2/3 mb-10">
      <FlashcardWhenRepeat/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
</style>
