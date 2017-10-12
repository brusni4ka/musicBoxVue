<template>
<div class="toolbar">
  <div class="container">
    <div class="toolbar-list">
<!--
      <a v-for="value in genres"  v-link=`/songs/${value}` class="toolbar-item">{{value}}</a>
-->
        <a v-for="value in genres" class="toolbar-item">
          {{ value }}
          <router-link :to="{ name: `/songs/${value}`, params: { id: value.id }}"></router-link>
        </a>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'toolbar',
    props: ['genres'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
