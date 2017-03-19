<template>
    <div>
        <div class="dropdown">
            <span>Select Type</span>
            <div class="dropdown-content">
                <div class="checkbox" >
                    <input type="checkbox" id="all" value="all" @change="filterToggle($event)">
                    <label for="all">all</label>
                </div>
                <div class="checkbox" v-for="type in types">
                    <input type="checkbox" :id="type" :value="type" @change="filterToggle($event)">
                    <label :for="type">{{ type }}</label>
                </div>
            </div>
        </div>
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
        data() {
            return {
                checkedItems: []
            }
        },
        methods: {
            filterToggle(event) {
                console.log('filter')
                this.$store.commit({type:'changeFilters', item:{checked:event.target.checked, value:event.target.value, propType:"Type"}});
                this.$store.commit({type:'filterItems'})
            }
        },
        // watch:{
        //     checkedItems(){
        //         console.log(this.checkedItems);
        //         this.$emit('addTofilterArr',this.checkedItems);
        //     }
        // },
        components: {}
    }
</script>
<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 12px 16px;
        z-index: 1;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    .checkbox {
        margin-bottom: 15px;
        cursor: pointer;
    }
</style>