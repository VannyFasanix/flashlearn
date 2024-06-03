<template>
  <div class="h-full max-h-full w-full flex flex-col justify-between items-center overflow-hidden relative">

    <div class="w-2/3 h-1/6 flex flex-col justify-center items-start gap-1">
      <FlashcardProgressBar :deck="deck" :completed-cards="completedCards" :completion-percentage="completionPercentage"></FlashcardProgressBar>
    </div>

    <div v-if="cardIndex < deck.cards.length" class="h-5/6 w-full flex flex-row relative">

      <!-- Mock card -->
      <div v-if="deck.cards[cardIndex-1]" class="absolute left-1/4 transform -translate-x-full h-full w-full flex items-center justify-center opacity-50">
        <div class="w-2/3 h-1/3">
          <FlashcardCard></FlashcardCard>
        </div>
      </div>

      <!-- Main card -->
      <div class="h-full w-full flex items-center justify-center">
        <div class="w-2/3 h-1/2">
          <FlashcardCard :card="deck.cards[cardIndex]" :cardIndex="cardIndex" @card-revealed="setShowWhenRepeat"></FlashcardCard>
        </div>
      </div>

      <!-- Mock card -->
      <div v-if="deck.cards[cardIndex+1]" class="absolute right-1/4 transform translate-x-full h-full w-full flex items-center justify-center opacity-50">
        <div class="w-2/3 h-1/3">
          <FlashcardCard></FlashcardCard>
        </div>
      </div>

    </div>

    <div v-else class="h-5/6 w-full flex justify-center items-center"><p>Complimenti!</p></div> 

    <div class="h-1/6 w-full flex justify-center items-center">
      <div class="h-14 w-2/3" :class="{ 'absolute bottom-0': showWhenRepeat }">
        <FlashcardWhenRepeat v-if="showWhenRepeat" @difficulty-defined="setDifficultyAndProceed" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps(['deck'])

const showWhenRepeat = ref(false);
const completedCards = ref(0);
const cardIndex = ref(0)

const setShowWhenRepeat: any = () => {

  if(showWhenRepeat.value)
    return

  showWhenRepeat.value = true;
  if(completedCards.value < props.deck.cards.length)
    completedCards.value++;

  if(completedCards.value == props.deck.cards.length) 
    setTimeout(() => navigateTo('/'), 2000) 
};

const setDifficultyAndProceed = (difficulty: number) => {

  //DEFINE DIFFICULTY ALGORITHM

  showWhenRepeat.value = false
  cardIndex.value++
}

const completionPercentage: ComputedRef<number> = computed(() => {
  return (completedCards.value / props.deck.cards.length) * 100;
});
</script>

<style scoped>
.h-14 {
  position: relative;
}
</style>
