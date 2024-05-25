<template>
  <div class="w-full h-full flex flex-row justify-center items-center">
    <img class="hidden md:block size-32 rounded-l-xl" :src="getImage(deck.image)">

    <div class="w-full h-full p-2 flex flex-col justify-start items-center">

      <div class="w-full h-full flex flex-row justify-start items-center">
        <div class="w-1/6 h-full flex flex-row justify-start items-center">
          <div class="circle"></div>
        </div>

        <div class="w-full h-full flex flex-col justify-center items-center">
            <div class="w-full h-4/6 flex flex-row justify-between items-end">
                <p class="text-sm font-bold w-4/6">{{deck?.title}}</p>
                <p class="text-xs font-light w-auto">{{deck?.cards?.length}} cards</p>
            </div>
            <div class="w-full h-1/2 flex flex-row justify-between items-start">
                <p class="text-xs font-normal w-auto">{{deck?.subtitle}}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps(['deck'])

    const getImage = (img: string) => {
        return new URL(`../../assets/${img}`, import.meta.url).href
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