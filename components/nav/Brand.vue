<template>

<div class="container">
    <img class="Logo" src="~/assets/rect.png" alt="" />
    <h2>Lesti.xyz</h2>
</div>

</template>

<style lang="scss" scoped>
.Logo {
  margin: 0 0.4rem 0 0;
  height: 100%;
  width: auto;
  transform: rotate(90deg);
  filter: $main_filter;
}

*{
}

.container{
    height: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    *{
        display: inline;
    }
    h2{
        font-size: 1.2rem !important;
        padding-bottom: 0.1rem;
        color: $secondary_color
    }
}

</style>
