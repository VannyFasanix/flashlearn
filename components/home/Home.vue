<template>
  <div class="h-full w-full">
    <div v-if="selectedDeck" class="h-full w-full">
      <div class="w-full" style="height: 10%;">
        <BarMobileNavbar :deck="selectedDeck"></BarMobileNavbar>
      </div>
      <div class="w-full" style="height: 90%;">
        <Flashcard :deck="selectedDeck"></Flashcard>
      </div>
    </div>

    <div v-else class="h-full w-full flex flex-col justify-center">
      <div class="w-full" style="height: 10%;">
        <BarMobileNavbar></BarMobileNavbar>
      </div>
      <div class="w-full" style="height: 90%;">
        <DeckList :decks="_decks" @deck-selected="(deck: any) => selectedDeck = deck"></DeckList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { decks } from "../../api/mock.json"

  const _decks = ref([...decks])
  const selectedDeck: any = ref(null)

</script>

<style>

</style>