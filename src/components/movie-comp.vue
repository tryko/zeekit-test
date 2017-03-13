<template>
    <div class="green-square">
        <img :src="itemPoster" alt="">
        {{itemTitle}} {{itemYear}}
    </div>
</template>
<script>
    export default {
        props: {
            item: {
                require: true,
                type: Object
            }
        },
        data() {
            return {
                itemPoster: this.item.Poster,
                itemTitle: this.item.Title,
                itemYear: this.item.Year
            }
        },
        components: {}
    }
</script>
<style>
    .green-square {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
</style>