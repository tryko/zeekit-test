<template>
    <div>
        <input type="text" v-model="movieTitle">
        <button @click="searchMovieTitle"> search</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                movieTitle: ''
            }
        },
        methods: {
            searchMovieTitle() {
                this.$store.dispatch('searchMovieTitle', this.movieTitle)
            }
        },
        computed: {

        }
    }
</script>
<style>

</style>