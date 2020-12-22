<template>

<div class="triangle">
</div>

</template>

<style lang="scss" scoped>

 .triangle {
      pointer-events: none;
      width: 0;
      height: 0;
      border-bottom: 45vh solid $cta_one;
      border-right: 70vw solid transparent;
      @media (max-width: 960px) {
          display: none;
        border-right: 90vw solid transparent;
        border-bottom: 10vh solid $cta_one;
      }
    }

</style>