<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">404</h1>
      <h2 class="subtitle">Eskü dolgozok az ügyön!</h2>
      <!--<h2 class="subtitle">
        Főleg Test -
        <span v-if="$fetchState.pending">Fetching mountains...</span>
        <span v-else-if="$fetchState.error">An error occurred :(</span>
        <span v-else>Fecsy: {{ fetchelt.data }}</span>
      </h2>

      <button @click="$fetch">Refresh</button>-->
    </div>
    <BottomLeftTriangle class="triangle" />
  </div>
</template>


<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  @media (min-width: 960px) {
    margin-right: 18vw;
    justify-content: flex-end;
  }
  align-items: center;
  text-align: center;
  background-color: $main_color;
  .triangle{
      position: absolute;
      bottom: 0;
      left: 0;
  }
}

.title {
  margin-top: 1rem;
  display: block;
  font-weight: 400;
  font-size: 6rem;
  color: $main_contra;
}

.subtitle {
  font-weight: 400;
  font-size: 1.8rem;
  color: $main_contra;
  padding: 15px;
}

.links {
  padding-top: 15px;
}

        @media (max-width: 960px) {
        .app-links, .contact{
            display: none;
        }
    }
    @media (min-width: 961px) {
        .app-links {
            display: block;
        }
        .drawer-toggle {
            display: none;
        }
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