<template>
  <div class="flashcard-container" @click="flipCard">
    <div :class="['flashcard', { flipped: isFlipped }]">
      <div class="front">
        <div class="w-full h-full flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-md bg-gray-50">
          <div class="h-4/6 w-full flex items-center justify-center">
            <p class="text-base font-bold">img</p>
          </div>
          <div class="h-2/6 w-full flex items-center justify-center">
            <p class="font-thin">descr</p>
          </div>
        </div>
      </div>
      <div class="back">
        <div class="w-full h-full flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-md bg-gray-50 relative">
          <div class="h-4/6 w-full flex items-center justify-center">
            <p class="text-base font-bold">Back img</p>
          </div>
          <div class="h-2/6 w-full flex items-center justify-center">
            <p class="font-thin">Back descr</p>
          </div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isFlipped = ref(false);

const flipCard = () => {
  isFlipped.value = !isFlipped.value;
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
  bottom: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
}
</style>
