<template>
    <div class="showroom-wrapper flex flex-wrap gap-5 justify-center pt-[4rem] px-5">
        <Card v-for="movie in movies" :key="movie.id" :movieData="movie"/>
    </div>
  </template>

  <script>
  import Card from './Card.vue'

  export default {
    name: 'Showroom-Component',
    components: {
        Card
    },
    data() {
      return {
        searchInput: this.$route.query.search
      }
    },
    computed: {
      movies() {
        return this.$store.getters.movies;
      }
    },
    mounted() {
      this.$store.dispatch('getMovies', this.searchInput);
    }
  }
  </script>
  