<template>
  <div class="w-full h-full flex flex-col justify-center items-center  gap-5">
    <div v-for="(deck, i) in decks" class="w-3/4 h-10 bg-white flex justify-start p-3 items-center rounded-xl shadow-md" @click="deckSelected(deck)">
        {{ deck.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['decks'])
  const emitter = defineEmits(['deckSelected'])

  const deckSelected = (deck: any) => {
    emitter('deckSelected', deck)
  }
</script>

<style>

</style>