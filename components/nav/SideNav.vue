<template>
  <div class="sidenav-container">
    <div
      v-if="toggleSidebar"
      class="backdrop"
      @click="$store.dispatch('nav/toggleSidebar')"
    ></div>

    <transition name="slide-side">
      <div v-if="toggleSidebar" class="sidenav">
      <div class="brand">
      <img  src="~/assets/rect.png" alt="" />
      <h2>Lesti.xyz</h2>
      </div>
        <AppLinks class="app-links" />
  <NuxtLink class="contact"  to="/kapcsolat"> <button>Kapcsolat</button> </NuxtLink>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    toggleSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    },
  },
}
</script>


<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}
.brand{
  margin: 3vh auto 6vh auto;
  text-align: center;
  color: $main_contra;
  height: 5%;
  img{
    height: 100%;
    filter: $main_filter;
  }
  h2{
    padding-top: 0.2rem;
    font-size: 1.2rem;
  }
}
.sidenav {
  height: 100%;
  width: 70%;
  background-color: $main_color;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0 0;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9000;
  position: fixed;
  top: 0;
  right: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.2s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}
    button{
        font-weight: 500;
        font-size: 1.2rem;
        color: $main_contra;
        text-decoration:none;
        color: $cta_one_contra;
        padding: 9px 25px;
        background-color: $cta_one;
        border: none;
        width: 80%;
        margin: 2vh 10%;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3 ease 0s;
    }
</style>