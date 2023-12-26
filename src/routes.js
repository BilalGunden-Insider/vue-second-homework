import movieData from './components/MovieData.vue'
import showroom from './components/Showroom.vue'

export default [
    {
        path: '/',
        component: showroom
    },
    {
        path: '/movies/:id',
        component: movieData
    }
]