<template>
    <div class="movie-section-wrapper mt-5">
        <div v-if="!isLoading">
            <div
              class="movie-banner bg-cover bg-center bg-no-repeat w-full h-[30rem]"
              :style="posterStyle"
            >
            </div>
            <div class="movie-data-wrapper mt-5 font-['kingsman'] w-full flex justify-start">
              <div class="average-rating">
                <div class="rating-circle flex items-center justify-center">
                  <svg class="transform -rotate-90 w-25 h-25">
                    <circle cx="140" cy="70" r="50" stroke="currentColor" stroke-width="15" fill="transparent"
                        class="text-gray-700" />

                    <circle cx="140" cy="70" r="50" stroke="currentColor" stroke-width="15" fill="transparent"
                        :stroke-dasharray="this.circumference"
                        :stroke-dashoffset="this.circumference - (movieData.vote_average / 10 * this.circumference)"
                        class="text-blue-500 " />
                  </svg>
                </div>
                <div class="rating-ratio-text font-bold"> Rating: {{ movieData.vote_average }}</div>
              </div>
              <div class="movie-info-text flex flex-col gap-3 pt-5">
                <div class="movie-name  text-4xl"> {{ movieData.original_title }} </div>
                <div class="movie-tag-line  text-xl"> "{{ movieData.tagline }}" </div>
                <div class="movie-description"> {{ movieData.overview }}</div>
              </div>
              <div class="adult-content-cover w-[30rem] ml-10 h-[12rem] bg-contain bg-center bg-no-repeat" :style="adultContentStyle"></div>
            </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'Movie-Data',
    data() {
        return {
            id: this.$route.params.id,
            circumference: 2 * Math.PI * 50,
            isLoading: true
        }
    },
    computed: {
        movieData() {
            return this.$store.getters.movieData;
        },
        posterStyle() {
          return {
            'background-image': `url(https://image.tmdb.org/t/p/original/${this.movieData.backdrop_path})`,
          }
        },
        adultContentStyle() {
          return {
            'background-image': `url(${ this.movieData.adult ? 'https://cdn1.iconfinder.com/data/icons/media-and-entertainment/200/vector_485_05-512.png' : 'https://thumbs.dreamstime.com/z/no-adult-content-concept-icon-social-media-safety-idea-thin-line-illustration-child-protection-accessing-adult-websites-219752109.jpg?w=768'})`,
        }
      }
    },
    async beforeMount() {
        await this.$store.dispatch('getMovieFromId', this.id);

        this.isLoading = false;

        console.log(this.movieData);
    },
  }
  </script>

<style scoped>
  @font-face {
    font-family: "kingsman";
    src: local("kingsman"),
      url('../fonts/kingsman.ttf') format("truetype");
  }
</style>