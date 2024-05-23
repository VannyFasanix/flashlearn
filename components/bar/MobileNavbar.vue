<template>
  <div class="w-full h-full flex flex-row items-center justify-between">
    <div class="w-1/2 h-full flex flex-row gap-3 items-center justify-start ml-5">
      <Icon name="material-symbols-light:menu" size="25px" class="text-blue-800 flip"></Icon>
      <p class="text-blue-800 font-bold text-xs">{{deck?.title || "Flashlearn"}}</p>
    </div>

    <!-- FLASHCARD RIGHT NAVBAR -->
    <div v-if="deck" class="w1/2 h-full flex flex-row gap-3 items-center justify-end mr-5">
      <Icon name="material-symbols-light:prompt-suggestion-rounded" size="25px" class="text-blue-800 flip"></Icon>

      <Icon name="material-symbols-light:settings-rounded" size="25px" class="text-blue-800"></Icon>
    </div> 

    <!-- HOME RIGHT NAVBAR -->
    <div v-else class="w1/2 h-full flex flex-row gap-3 items-center justify-end mr-5">
      <Icon name="material-symbols-light:settings-rounded" size="25px" class="text-blue-800"></Icon>
    </div> 


  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['deck'])
</script>

<style>
  .flip {
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }
</style>