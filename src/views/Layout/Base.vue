<template>
  <div id="app">
    <main class="container mx-auto">
      <div class="flex justify-center space-x-4">
        <router-link text :to="{ name: 'Home' }" exact>Home</router-link>
        <router-link text :to="{ name: 'About' }" exact>About</router-link>
      </div>

      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Base',
};
</script>
