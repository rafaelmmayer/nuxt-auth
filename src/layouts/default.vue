<script setup lang="ts">

</script>

<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Index</NuxtLink></li>
      <li><NuxtLink to="/auth/signin">Login</NuxtLink></li>
      <li><NuxtLink to="/posts">Posts</NuxtLink></li>
      <li><NuxtLink to="/class-schedule">Presença</NuxtLink></li>
    </ul>
  </nav>
  <slot/>
</template>

<style scoped>

</style>