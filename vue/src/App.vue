<template>
  <Navbar></Navbar>
  <suspense>
    <RouterView />
  </suspense>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<style scoped lang="scss">

</style>
