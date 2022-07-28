<template>
  <div id="app">
    <!--div>Flag: {{ params }}</div-->
    <div>Flag: {{ $route.query.isSelect }}</div>
    <!--p v-if="params">表示ON</p>
    <p v-else>表示OFF</p-->
  </div>
</template>

<script>
export default {
  /*data() {
   return {
      params: this.$route.query.params 
    }
  },*/
  //props: ['params']
}
</script>