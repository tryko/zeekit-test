<template>
    <div>
        <div class="grid">
            <div v-for="item in showItems">
                <movie-comp :item="item"></movie-comp>
            </div>
        </div>
    </div>
</template>
<script>
    import MovieComp from './movie-comp.vue';
    export default {
        computed: {
            showItems() {
                console.log('bla',this.$store.state.filteredMovies);
                return this.$store.getters.getMovieList
            }
        },
        components: {
            MovieComp
        },
    }
</script>
<style>
    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>