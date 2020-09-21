<template>
  <section id="home">
    <h1>Welcome to doggy daycare!</h1>
    <p>We are currently taking care of {{ dogsCount }}</p> <!-- number of the dogs is dynamic-->
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dogCount() {
      return this.$store.getters.dogCount;
    }
  }
}
</script>

<style>

</style>
