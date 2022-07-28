<template>
  <div id="app">
    <router-link :to="`/`"> トップページ</router-link>
    <router-link :to="`/router-practice`">サブページ(1)</router-link>
    <router-link :to="`/item-detail/${params}`">サブページ(2)</router-link>
    <!--button @click="userListPage">ユーザー一覧ページ</button-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  /*methods: {
    topPage() {
      this.$router.push({ name: 'home' });
    },
    subPage() {
      this.$router.push({ name: 'RouterPractice' });
    },
    subPage2() {
      this.$router.push({ name: 'ItemDetail' });
    },
  }*/
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
