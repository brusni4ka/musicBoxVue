<template>
  <header className="main-nav">
    <h1>Home</h1>
    <navbar/>
    <toolbar :genres="genres"/>
  </header>
</template>


<script>
  import Navbar from '../navbar/Navbar.vue'
  import Toolbar from '../toolbar/Toolbar.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'home',
    components: {
      'toolbar': Toolbar,
      'navbar': Navbar
    },
    computed: {
      ...mapState({
        genres: state => state.genres.list,
      })
    },
    created(){
      debugger;
      this.$store.dispatch('fetchGenres')
    }
  }
</script>
