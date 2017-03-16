<template>
    <div class="green-square">
        <img :src="item.Poster" alt="">
        {{item.Title}} {{item.Year}}
    </div>
</template>
<script>
    export default {
        props: {
            item: {
                require: true,
                type: Object
            }
        }
    }
</script>
<style>
    .green-square {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
</style>