<template>
  <div class="w-full h-full flex flex-row items-center justify-center">
    <div class="w-full h-full rounded-xl shadow-lg" v-for="(repeat, i) in config.flashcard.card.repeat">
      <div :class="{[repeat.class]: true, 'rounded-l-xl': i == 0, 
                    'rounded-r-xl': i == config.flashcard.card.repeat?.length-1 }" 
            class="w-full h-full flex justify-center items-center"
            @click="defineDifficulty(repeat.id)">
        <p class="text-gray-100 font-bold text-sm">{{repeat.label}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { config } from "../../api/config.json"

  const emitter = defineEmits(['difficultyDefined'])

  const defineDifficulty = (id: number) => {
    emitter('difficultyDefined', id)
  }
  
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