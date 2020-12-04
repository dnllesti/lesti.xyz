<template>
  <img class="Logo" src="~/assets/rect.png" alt="" />
</template>

<style>
.Logo {
  animation: 5s color infinite alternate;
  margin: 0 auto;
  width: 20vh;
}

@keyframes color {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
