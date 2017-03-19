<template>
    <div>
        <filters-comp></filters-comp>
        <movie-list-comp></movie-list-comp>
    </div>
</template>
<script>
import MovieListComp from './movieList-comp.vue'
import FiltersComp from './filters-comp.vue'

    export default {
        components:{
            MovieListComp,
            FiltersComp
        }
    }
</script>
<style>

</style>