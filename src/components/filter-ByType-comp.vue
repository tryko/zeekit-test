<template>
    <div>
        Select Type:
        <select name="" id="" @change="filterByTypes" >
            <option value="all"> all </option> 
            <option :value="type" v-for="type in types">{{type}}</option>
        </select>
    </div>
</template>
<script>
    export default {
        props: {
            types: {
                require: true,
                type: Array
            }
        },
        methods: {
            filterByTypes(event) {
                console.log(event.target.value);
                this.$store.commit({
                    type: 'filterByTypes',
                    genre: event.target.value
                });
            }
        },
        components: {}
    }
</script>
<style>

</style>