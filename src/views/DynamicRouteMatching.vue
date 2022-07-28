<template>
  <div>{{ userId }}</div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.query.userId //$routeオブジェクトを利用してqueryの中の値を取り出しています
    }
  }
  //props: ['userId'] //値の受け取りそのままプロパティとして扱うことができます
}
</script>
