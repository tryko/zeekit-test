<template>
    <div class="card">
        <div class="card-header">
            <div> <img  src="../assets/Movie_32.png" alt=""> </div>
            
            <div class="year">{{item.Year}}</div>
        </div>
        <div class="image-container">
            <img class="movie-poster" :src="item.Poster" alt="">
        </div>
        <div class="title">{{item.Title}}</div>
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
    .card {
        width: 260px;
        box-shadow: -4px 8px 20px 7px rgba(0, 0, 0, 0.49);
        margin: 10px;
    }
    
    .card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
        color: 3333333;
        margin: 5px;
        padding: 5px;
    }
    .year {
        margin-top: 5px;
        vertical-align: text-top;
    }
    
    .image-container {
        display: flex;
        justify-content: center;
    }
    
    .movie-poster {
        width: 240px;
    }
    
    .grey {
        background-color: grey;
    }
    
    .title {
        display: flex;
        justify-content: center;
        margin: 5px;
    }
</style>