<template>
  <div id="app">
    <router-link :to="{ path: '/item-detail', query: { isSelect: true } }">サブページ(2)</router-link>
    <div>ECサイトのトップページです</div>
  </div>
</template>

<script>
export default {
  /*data(){
    return{
      params: true
      }
    }*/
}
</script>