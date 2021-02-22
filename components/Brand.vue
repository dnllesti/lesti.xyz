<template>

<div class="container">
    <img class="Logo" src="~/assets/rect.png" alt="" />
    <h2>Lesti.xyz {{VERCEL_URL}}</h2>
    <p>
       
    </p>
</div>

</template>

<style lang="scss" scoped>
.Logo {
  margin: 0 0.4rem 0 0;
  height: 100%;
  width: auto;
  //transform: rotate(90deg);
  filter: $main_filter;
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
        color: $main_contra;
    }
}

</style>

<script>
export default {
    computed: {
    VERCEL_URL() {
      return process.env.VERCEL_URL;
    },
  },
}
</script>