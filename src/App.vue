<template>
  <div id="app">
    <head-comp></head-comp>
    <body-comp></body-comp>
  </div>
</template>
<script>
import HeadComp from './components/head-comp.vue'
import BodyComp from './components/body-comp.vue'


  export default {
    name: 'app',
    data() {
      return {
      }
    },
    methods: {

    },
    computed: {

    },
    components:{
      HeadComp,
      BodyComp
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>