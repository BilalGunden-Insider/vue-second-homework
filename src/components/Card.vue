<template>
    <router-link :to="movieLink" class="movie-card-wrapper w-[17rem] h-[28rem] cursor-pointer" @mouseover="showRating = true" @mouseleave="showRating = false">
      <div class="card-image">
        <img :src="imagePath" alt="">
      </div>
      <div class="card-info-box">
        <div class="movie-name text-ellipsis whitespace-nowrap overflow-hidden">
          <h2 class="text-lg font-bold">{{ movieData.title }}</h2>
        </div>
        <div class="movie-rating" :class="{ 'visible': showRating }">
          <ul class="flex justify-center">
            <li v-for="heart in 5" :key="heart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                :fill="heart > ((movieData.vote_average / 2) - 1) ? 'currentColor' : 'none'"
                stroke="currentColor"
                stroke-width="1.5"
                class="mr-1 h-5 w-5 text-danger">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'MovieCard',
    props: ['movieData'],
    data() {
      return {
        showRating: false,
        imagePath: `https://image.tmdb.org/t/p/w500/${this.movieData.poster_path}`
      }
    },
    computed: {
      movieLink() {
        return `/movies/${this.movieData.id}`;
      }
    }
  }
  </script>
  
  <style scoped>
  .movie-card-wrapper:hover .movie-rating {
    animation: fadeIn 2s;
  }
  
  .movie-rating.visible {
    opacity: 1;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  </style>
  