<template>
    <div class="w-full h-full flex flex-col justify-center items-start gap-1">
        <div class="h-8 w-full bg-white shadow-md rounded-xl">
            <div class="h-full bg-blue-800 rounded-l-xl" :class="{'rounded-r-xl': completionPercentage == 100}"  :style="{ width: `${completionPercentage}%` }">
            </div>
        </div>
        <p class="text-xs">{{completedCards + "/" + deck.cards.length}}</p>
    </div>
</template>

<script lang="ts" setup>
    defineProps(['deck', 'completedCards', 'completionPercentage'])
</script>

<style>

</style>