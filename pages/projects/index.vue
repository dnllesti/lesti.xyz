<template>
  <div class="container">
    <div class="left centered-flex">
      <ProjectLeft title="Projektek" />
    </div>
    <div class="right centered-flex">
      <div>
        <project-list-item title="Sharelock" url="/projects/sharelock" />
        <project-list-item title="lesti.xyz" url="/projects/lesti" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/leftright.scss';
</style>
