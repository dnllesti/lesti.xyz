<template>
  <main-wrapper :hidemobile="true">
    <div class="main content">
      <h1>Helóka!</h1>
      <p>Éppen készül ez a csoda, így például ez az oldal pont nem fog létezni, kis türelmet kérek.</p>

    </div>
  </main-wrapper>
</template>

<style lang="scss" scoped>
hr {
  margin: 3vh 0 3vh 0;
}
h1 {
  margin: 0 0 1vh 0;
}
.main {
    padding: 5vw 5vw;
    @media (max-width: 959px) {
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
