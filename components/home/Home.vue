<template>
  <div class="h-full w-full flex flex-col md:flex-row">
    <div class="w-full block md:hidden" style="height: 10%;">
      <BarMobileNavbar :deck="selectedDeck"></BarMobileNavbar>
    </div>
    <div class="w-1/6 h-full hidden md:block">
      <BarSidebar deck="selectedDeck"></BarSidebar>
    </div>
    <div v-if="!selectedDeck" class="w-full md:w-5/6" style="height: 90%;">
      <DeckList :decks="_decks" @deck-selected="(deck: any) => selectedDeck = deck"></DeckList>
    </div>
    <div v-else class="w-full md:w-5/6" style="height: 90%;">
      <Flashcard :deck="selectedDeck"></Flashcard>
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