<template>
  <main-wrapper>
      <Logo />
    <div class="main content">
      <h1>{{error.statusCode}}</h1>
      <p v-if="error.statusCode === 404">
        A keresett oldal nem található
      </p>
      <p v-else>Hiba lépett fel.</p>

    </div>
  </main-wrapper>
</template>

<style lang="scss" scoped>

.main {
  min-width: 60vw;
  text-align: center;
    padding: 0vw 5vw;
    margin-top: 3vh;
    font-size: 2rem;
}
.content {
  p {
    font-size: 1.4rem;
  }
}
</style>

<script>
export default {
  props: ['error'],
}
</script>
