<template>
  <main-wrapper>
    <div class="main content">
      <h1>Tervek</h1>
      <h2>Ezsincs</h2>
      <p>
        Phasellus lorem lectus, imperdiet et mi at, tristique faucibus nisl.
        Nulla vel iaculis erat, sed efficitur tellus. Vestibulum auctor magna
        vel magna semper, sed pulvinar ligula viverra. In commodo ultrices
        tempor. Maecenas elementum nibh ipsum, ac ultrices nunc euismod vel.
        Nunc in venenatis ipsum. Cras dapibus dui eget luctus laoreet. Donec
        sollicitudin, velit at sodales aliquam, dolor purus faucibus ligula, a
        facilisis erat dui hendrerit sem. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. In condimentum
        libero ut varius ultricies. Duis vestibulum scelerisque condimentum.
      </p>
      <hr />
      <h2>Eskü nem Somogyiék</h2>
      <p>
        Phasellus lorem lectus, imperdiet et mi at, tristique faucibus nisl.
        Nulla vel iaculis erat, sed efficitur tellus. Vestibulum auctor magna
        vel magna semper, sed pulvinar ligula viverra. In commodo ultrices
        tempor. Maecenas elementum nibh ipsum, ac ultrices nunc euismod vel.
        Nunc in venenatis ipsum. Cras dapibus dui eget luctus laoreet. Donec
        sollicitudin, velit at sodales aliquam, dolor purus faucibus ligula, a
        facilisis erat dui hendrerit sem. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. In condimentum
        libero ut varius ultricies. Duis vestibulum scelerisque condimentum.
      </p>
      <hr />
      <h2>Legyen már valami más is</h2>
      <p>
        Phasellus lorem lectus, imperdiet et mi at, tristique faucibus nisl.
        Nulla vel iaculis erat, sed efficitur tellus. Vestibulum auctor magna
        vel magna semper, sed pulvinar ligula viverra. In commodo ultrices
        tempor. Maecenas elementum nibh ipsum, ac ultrices nunc euismod vel.
        Nunc in venenatis ipsum. Cras dapibus dui eget luctus laoreet. Donec
        sollicitudin, velit at sodales aliquam, dolor purus faucibus ligula, a
        facilisis erat dui hendrerit sem. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. In condimentum
        libero ut varius ultricies. Duis vestibulum scelerisque condimentum.
      </p>
    </div>
  </main-wrapper>
</template>

<style lang="scss" scoped>
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
</style>
