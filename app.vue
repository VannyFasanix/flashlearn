<script lang="ts" setup> 
  import { deck } from "./api/mock.json"
</script>

<template>
  <div style="height: 100vh; width: 100%; max-width: 100%; overflow-x: hidden"> 
    <div style="height: 7%; width: 100%;">
      <BarMobileNavbar :deck="deck"></BarMobileNavbar>
    </div>
    <div style="height: 93%; width: 100%">
      <Flashcard :deck="deck"></Flashcard>
    </div>
  </div>
</template>
