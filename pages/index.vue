<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello</h1>
      <h2 class="subtitle">Köszi, hogy itt vagy ❤</h2>
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
  }
}
</script>