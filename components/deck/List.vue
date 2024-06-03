<template>
  <div class="w-full h-full flex flex-col justify-center items-start p-5 gap-2">
    <p class="text-blue-800 font-bold cursor-pointer hover:text-blue-500 transition duration-300" @click="isDeckConfig = true">{{title}}<Icon name="material-symbols:add" size="22px" class="svg-icon"></Icon></p>
    
    <div class="w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center md:justify-start gap-5 ">
      <div v-for="(deck, i) in decks" class="deck w-full h-fit md:w-deck md:h-auto bg-white flex justify-start p-3 md:p-0 items-center rounded-xl shadow-md cursor-pointer hover:scale-105 transition duration-300" @click="deckSelected(deck)">
          <Deck :deck="deck"></Deck>
      </div>
    </div>


    <UModal v-model="isDeckConfig">
      <div class="p-4">
        <DeckCreationModal></DeckCreationModal>
      </div>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['decks', 'title'])
  const emitter = defineEmits(['deckSelected'])

  let isDeckConfig = ref(false)

  const deckSelected = (deck: any) => {
    emitter('deckSelected', deck)
  }

</script>

<style>
  @media only screen and (min-width: 600px) {
    .deck {
      width: 30%
    }
  }
</style>