<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello</h1>
      <h2 class="subtitle">Köszi, hogy itt vagy ❤</h2>
      <!--<h2 class="subtitle">
        Főleg Test -
        <span v-if="$fetchState.pending">Fetching mountains...</span>
        <span v-else-if="$fetchState.error">An error occurred :(</span>
        <span v-else>Fecsy: {{ fetchelt.data }}</span>
      </h2>

      <button @click="$fetch">Refresh</button>-->
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $main_color;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $main_contra;
}

.subtitle {
  font-weight: 300;
  font-size: 2rem;
  color: $main_contra;
  word-spacing: 5px;
  padding: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      fetchelt: {},
    }
  },
  /*async fetch() {
    this.fetchelt = await fetch(
      //'https://lesti.xyz/api/test'
      'http://192.168.0.102:3000/api/test'
    ).then((res) => res.json())
  },*/
}
</script>