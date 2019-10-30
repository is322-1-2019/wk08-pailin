<template>
  <div>
    <!-- <ex01-page v-show="true"></ex01-page>
    <ex02-page v-show="true"></ex02-page>
    <ex03-page v-show="true"></ex03-page> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Ex01Page from './components/ex01/Ex01Page.vue'
// import Ex02Page from './components/ex02/Ex02Page.vue'
// import Ex03Page from './components/ex03/Ex03Page.vue'

export default {
  name: 'app',
  components: {
    // Ex01Page,
    // Ex02Page,
    // Ex03Page
  }
}
</script>

<style>

</style>
