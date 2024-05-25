<template>
  <div class="w-full h-full flex flex-col items-center justify-between p-5 bg-white border-r shadow-md">
    <!-- TITLE -->
    <p class="text-xl font-bold text-blue-800">Flashlearn</p>

    <!-- IMG -->
    <div class="w-2/3 flex justify-center items-center bg-gray-100 rounded-full border-4 border-blue-100">
      <img class="rounded-full" src="/assets/mock-pic.png">
    </div>

    <p class="flex flex-row text-lg text-blue-800 font-medium gap-1">Welcome back <b>{{playerName}}</b>!</p>

    <!-- SETTINGS -->
    <div class="settings w-1/2 h-2/4 flex flex-col justify-start items-center gap-4">
      <div class="menu-item w-full flex flex-row justify-center items-center gap-1">
        <span class="flex flex-row gap-1"><Icon name="material-symbols:account-circle" size="25px" class="svg-icon flip"></Icon>Profile</span>
      </div>

      <div class="menu-item w-full flex flex-row justify-center items-center gap-1">
        <span class="flex flex-row gap-1"><Icon name="material-symbols-light:settings-rounded" size="25px" class="svg-icon flip"></Icon>Settings</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const playerName = 'Mario'
</script>

<style>
  .settings .menu-item {
    @apply text-lg;
    @apply text-blue-800;
    @apply font-semibold;

    &:hover {
      @apply font-bold;
      @apply text-blue-500;
      @apply cursor-pointer;
    }
  }
</style>