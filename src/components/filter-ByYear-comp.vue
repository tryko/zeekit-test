<template>
    <div>
        Select Year:
        <select name="" id="" @change="filterByYear"> 
            <option value="all"></option>
            <option :value="year" v-for="year in years">{{year}}</option>
        </select>
    </div>
</template>
<script>
    export default {
        props: {
            years: {
                require: true,
                type: Array
            }
        },
        methods: {
            filterByYear(event) {
                console.log(event.target.value);
                this.$store.commit({
                    type: 'filterBy',
                    genre: event.target.value
                });
            }
        },
    }
</script>
<style>

</style>