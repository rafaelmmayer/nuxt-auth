<script setup lang="ts">
import {useAuthUser} from "~/composables/useAuthUser";

await useAuthUser().authenticate()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
