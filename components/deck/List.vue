<template>
  <div class="w-full h-full flex flex-col justify-center items-start p-5 gap-2">
    <p class="text-blue-800 font-bold">{{title}} <UTooltip text="Aggiungi" class="relative top-1"><Icon name="material-symbols:add" size="20px" class="svg-icon"></Icon></UTooltip></p>
    
    <div class="w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center md:justify-start gap-5 ">
      <div v-for="(deck, i) in decks" class="w-5/6 md:w-1/3 h-10 md:h-auto bg-white flex justify-start p-3 md:p-0 items-center rounded-xl shadow-md cursor-pointer hover:scale-105 transition duration-300" @click="deckSelected(deck)">
          <Deck :deck="deck"></Deck>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['decks', 'title'])
  const emitter = defineEmits(['deckSelected'])

  const deckSelected = (deck: any) => {
    emitter('deckSelected', deck)
  }

</script>

<style>

</style>