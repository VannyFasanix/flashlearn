<template>
  <div class="w-full h-full flex flex-col justify-center items-center  gap-5 ">
    <div v-for="(deck, i) in decks" class="w-3/4 h-10 bg-white flex justify-start p-3 items-center rounded-xl shadow-md" @click="deckSelected(deck)">

        <div class="w-full h-full p-2 flex flex-col justify-start items-center">

          <div class="w-full h-3/4 flex flex-row justify-start items-center">
            <div class="w-1/6 h-full flex flex-row justify-start items-center">
              <div class="circle"></div>
            </div>

            <p class="text-sm font-bold w-4/6">{{deck?.title}}</p>
            <p class="text-xs font-light w-auto">{{deck?.cards?.length}} cards</p>
          </div>
        </div>

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
  .circle {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
  }
</style>