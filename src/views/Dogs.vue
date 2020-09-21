<template>
  <section id="dogs">
    <h2>Our Dogs</h2>
    <Dog v-for="dog in dogs" :key="dog.chipNumber" :dog="dog" />
  </section>
</template>

<script>
import Dog from '@/components/Dog'
export default {
  name: 'Dogs',
  components: {
    Dog
  },
  computed: {
    dogs() {
      return this.$store.state.dogs;
    }
  }
}
</script>

<style lang="scss">
  #dogs {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    h2 {
      grid-column: auto/span 5;
    }
  }

</style>
