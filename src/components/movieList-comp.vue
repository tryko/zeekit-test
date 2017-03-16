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
        data() {
            return {}
        },
        computed: {
            showItems() {
                console.log('bla1', this.$store.getters.getMovieList);
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