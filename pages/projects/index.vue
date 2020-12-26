<template>
  <div class="container">
  <div>
    <div class="title">
      <ProjectLeft title="Projektek" />
    </div>
    <div class="items">
        <project-list-item title="ShareLock" url="/projects/sharelock" />
        <project-list-item title="Teamy" url="/projects/teamy" />
        <project-list-item title="lesti.xyz" url="/projects/lesti" />
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
