<template>
  <main-wrapper :hidemobile="true">
    <div class="main content">
      <h2>Redirect incoming!</h2>

    </div>
  </main-wrapper>
</template>

<style lang="scss" scoped>
hr {
  margin: 3vh 0 3vh 0;
}
h2 {
  color:rgb(235, 235, 235);
}
.main {
    padding: 5vw 5vw;
    @media (max-width: 1430px) {
    margin: 10vh 2vw;
    p{
    font-size: 0.8rem;
    }
  }
}
.content {
  text-align: justify;
  p {
    font-size: 1.05rem;
    text-align: justify;
    margin-top: 0vh;
  }
}
</style>

<script>
export default {
  mounted: function () {
     console.log(window.innerWidth)
     if (window.innerWidth > 1430){
     this.$router.push('/bemutatkozas')
     }
  }
}
</script>
