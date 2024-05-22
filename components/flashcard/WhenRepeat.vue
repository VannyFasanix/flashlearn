<template>
  <div class="w-full h-full flex flex-row items-center justify-center border border-gray-200 rounded-lg shadow-md bg-gray-50">
    <div class="w-full h-full" v-for="(repeat, i) in config.flashcard.card.repeat">
      <div :class="{[repeat.class]: true, 'rounded-l': i == 0, 'rounded-r': i == config.flashcard.card.repeat?.length-1 }" class="w-full h-full flex justify-center items-center">
        <p class="text-gray-100 font-bold">{{repeat.label}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { config } from "../../api/config.json"
</script>

<style>
  .easy-repeat {
    @apply bg-blue-300;
  }

  .normal-repeat {
    @apply bg-blue-600;
  }

  .hard-repeat {
    @apply bg-blue-900;
  }
</style>