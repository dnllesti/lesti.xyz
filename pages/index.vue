<template>
  <div class="container">
    <div class="menu">
      <main-image />
      <h1 class="title">Lesti Dániel</h1>
      <h2 class="subtitle">
        <a href="mailto:daniel@lesti.xyz">daniel@lesti.xyz</a>
      </h2>
      <div class="items">
        <project-list-item title="Bemutatkozás" url="/bemutatkozas" />
        <project-list-item title="Eddigi munkáim" url="/munkaim" />
        <!-- <project-list-item title="Képességeim" url="/skills" /> -->
        <project-list-item title="Terveim" url="/tervek" />
        <project-list-item title="Elérhetőség" url="/kapcsolat" />
      </div>
    </div>
    <div class="content">
      <nuxt-child />
    </div>  
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  @media (min-width: 960px) {
    justify-content: flex-start;
  }
  @media (max-width: 959px) {
    flex-direction: column;
  }
  align-items: center;
  text-align: center;
  background-color: $main_color;
  .triangle {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .menu {
    min-width: 20vw;
    margin: 5vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 90vh;
  }

  .content {
    text-align: justify;
        padding: 0 10vw;
    p {
      font-size: 1.3rem;
      text-align: justify;
      margin-top: 3vh;
      padding: 2vw 5vw;
    }
  }
}

.title {
  margin-top: 1rem;
  margin-bottom: 0;
  display: block;
  font-weight: 400;
  font-size: 3.5rem;
  color: $main_contra;
}

.subtitle {
  font-weight: 400;
  font-size: 1.4rem;
  color: $main_contra;
  margin-bottom: 4rem;
  a {
    text-decoration: none;
    color: $cta_two;
  }
}

.links {
  padding-top: 15px;
}

@media (max-width: 960px) {
  .app-links,
  .contact {
    display: none;
  }
}
@media (min-width: 961px) {
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      fetchelt: {},
    }
  },
}
</script>
