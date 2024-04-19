<script setup lang="ts">
import {useAuthUser} from "~/composables/useAuthUser";

const route = useRoute()
const authUser = useAuthUser()

definePageMeta({
  layout: "public",
})

async function login() {
  try {
    await authUser.signIn()

    let redirectRoute = '/'

    if (route.query.redirectTo) {
      redirectRoute = atob(route.query.redirectTo.toString())
    }

    navigateTo(redirectRoute)
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  if (authUser.isAuthenticated) {
    navigateTo('/posts')
  }
})
</script>

<template>
  <button @click="login">Login</button>
</template>

<style scoped>

</style>