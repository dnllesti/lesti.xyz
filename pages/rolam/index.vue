<template>
  <div class="container">
  <div>
    <div class="title">
      <ProjectLeft title="Rólam" />
    </div>
    <div class="items">
        <project-list-item title="Általános dolgok" url="/rolam/altalanos" />
        <project-list-item title="Szakmai" url="/rolam/szakmai" />
        <project-list-item title="Szabadidő" url="/rolam/szabadido" />
    </div>
  </div>
    <BottomLeftTriangle class="triangle" />
  </div>
</template>

<style lang="scss" scoped>

.container{
    .triangle{
      position: absolute;
      bottom: 0;
      left: 0;
  }
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 960px) {
    margin-right: 18vw;
    justify-content: flex-end;
  }
  &>div{
  @media (min-width: 960px) {
    width: 20vw;
  }
    text-align: center;
  }

}

</style>
