<template>
  <main-wrapper>
    <div class="main content">
      <h1>Kapcsolat</h1>
      <hr />
      <h2>Állásajánlat, Tanács</h2>
      <p>
        Amennyiben megtetszettem bármennyire is ököknek, egyszerűen látják bennem a potenciált, vagy éppen jól jönne egy gyorsan tanuló szorgalmas srác a csapatukba kérem keressenek meg a <a href="mailto:daniel@lesti.xyz">daniel@lesti.xyz</a>-címen. Minden kritikát, tanácsot vagy ajánlatot szivesen fogadok.
      </p>
    </div>
  </main-wrapper>
</template>

<style lang="scss" scoped>
.thx{
    margin-top: 2vh;
}
ul{
    margin: 2vh auto;
}
hr {
  margin: 3vh 0 3vh 0;
}
h2 {
  margin: 3vh 0 1vh 0;
  color: #666;
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
a{
    color: $cta_two;
    text-decoration: none;
}
</style>
