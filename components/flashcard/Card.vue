<template>
  <div class="flashcard-container" @click="flipCard">
    <div :class="['flashcard', { flipped: isFlipped, 'no-transition': noTransition }]">
      <div class="front">
        <div class="w-full h-full flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-md bg-gray-50">
          <div class="h-full p-5 w-full flex flex-col gap-5 items-center justify-center">
            <p class="text-md font-bold opacity-75">{{card?.text}}</p>
            <p class="text-sm opacity-75">{{card?.subtext}}</p>
          </div>
          <div class="absolute bottom-1 w-full flex items-center justify-center">
            <p class="font-thin text-xs opacity-50">Tap to reveal</p>
          </div>
        </div>
      </div>
      <div class="back">
        <div class="w-full h-full flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-md bg-gray-50 relative">
          <div class="h-full w-full flex flex-col gap-5 items-center justify-center">
            <p class="text-md font-bold opacity-75">{{card?.back}}</p>
            <p class="text-sm opacity-75">{{card?.subback}}</p>
          </div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUpdated } from 'vue';

const props = defineProps(['card', 'cardIndex']);
const emitter = defineEmits(["cardRevealed"]);

const isFlipped = ref(false);
const currentIndex = ref(props.cardIndex);
const noTransition = ref(false);

onUpdated(() => {
  if (currentIndex.value !== props.cardIndex) {
    isFlipped.value = false;
    noTransition.value = true; // Rimuove la transizione
    currentIndex.value = props.cardIndex;

    // Forza il re-rendering della carta senza transizione
    setTimeout(() => {
      noTransition.value = false; // Ripristina la transizione
    }, 50);
  }
});

const flipCard = () => {
  isFlipped.value = !isFlipped.value;
  emitter("cardRevealed", true);
};
</script>

<style scoped>
.flashcard-container {
  perspective: 1000px;
  width: 100%;
  height: 100%;
}

.flashcard {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flashcard.no-transition {
  transition: none;
}

.flashcard.flipped {
  transform: rotateY(180deg);
}

.flashcard .front,
.flashcard .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flashcard .back {
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
}
</style>
