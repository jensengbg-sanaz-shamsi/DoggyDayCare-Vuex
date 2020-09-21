<template>
  <main id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="dogs">Dogs</router-link>
    </nav>
    <router-view /> <!-- to show datas in dogs page-->
    
  </main>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  body {
    background: #eee;
    font-family: sans-serif;

      #app {
        max-width: 1000px;
        margin: 1rem auto;
  }
}

</style>