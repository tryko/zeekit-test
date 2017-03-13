<template>
    <div>
        this is filter comp
        <filter-by-year-comp :years="getYears"></filter-by-year-comp>
        <filter-ByType-comp :types="getTypes"></filter-ByType-comp>
    </div>
</template>
<script>
import FilterByYearComp from './filter-ByYear-comp.vue'
import FilterByTypeComp from './filter-ByType-comp.vue'

    export default {
        computed:{
            getYears(){
                let moviesYears = new Set();
                this.$store.getters.getMovieListOriginal.forEach(movie => moviesYears.add(movie.Year))
                moviesYears = [...moviesYears]
                return moviesYears.sort();
            },
            getTypes(){
                let movieTypes = new Set();
                this.$store.getters.getMovieListOriginal.forEach(movie => movieTypes.add(movie.Type))
                movieTypes = [...movieTypes]
                return movieTypes;
            }
            
        },
        components:{
            FilterByYearComp,
            FilterByTypeComp
        }
    }
</script>
<style>

</style>