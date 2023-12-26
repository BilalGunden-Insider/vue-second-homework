<template>
  <div class="header-wrapper flex items-center justify-between px-8">
    <router-link to="/" class="logo font-70s text-6xl">LogoLogo</router-link>
    <form class="search-bar w-[27rem]">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" v-model="searchInput" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-10 focus:ring-gray-500 focus-visible:ring-gray-500" placeholder="Search Mockups, Logos..." required>
        <button type="submit" @click.prevent="getMoviesAccordingToSearch" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    getMoviesAccordingToSearch() {
      this.$store.dispatch('getMovies', this.searchInput);

      this.$router.push({ path: '/', query: { search: this.searchInput }});
    }
  },
}
</script>

<style>
@font-face {
  font-family: "70s";
  src: local("70s"),
    url('../fonts/70S.ttf') format("truetype");
}

/* Alternatif font class adı */
.font-70s {
  font-family: "70s", sans-serif;
}
</style>
