<template>
  <div class="container">
    <Logo class="logo" />
    <div class="content">
      <h1 class="title">Lesti Dániel</h1>
        <div class="ce">
          <font-awesome-icon :icon="faInstagram" style="font-size: 30px" />
          <p>@lestidnl</p>
      </div>
        <div class="ce">
          <font-awesome-icon :icon="faGithub" style="font-size: 30px" />

          <p>@dnllesti</p>
        </div>
        <div class="ce">
          <font-awesome-icon :icon="faEnvelope" style="font-size: 30px" />

          <p>daniel@lesti.xyz</p>
        </div>
    </div>
  </div>
</template>

<script>
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
export default {
  computed: {
    faInstagram() {
      return faInstagram
    },
    faGithub() {
      return faGithub
    },
    faEnvelope() {
      return faEnvelope
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
}
.container {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: row-reverse;
  background-color: $main_color;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $main_contra;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $main_contra;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
p {
  margin-bottom: 1vh;
  margin-top: 1vh;
  font-size: 1.4rem;
  text-align: left;
  color: $main_contra;
  font-weight: bold;
  vertical-align: middle;
  display: inline;
}
.ce {
  display: flex;
  margin-left: 2rem;
  align-items: center;
  p {
    margin-left: 1rem;
    width: 40%;
  }
}

@media (max-width: 767px) {
  .app-links {
    display: none;
  }
}
@media (max-width: 768px) {
  .logo {
    margin-top: 0vh;
    margin-bottom: -25vh;
  }
  .title{
      font-size: 4rem;
      width: 100vw;
  }
  .ce{
      margin: 0 auto;
  justify-content: center;
      width: 100vw;
      text-align: center;
      p{
      }
  }
  .ce:nth-of-type(1){
      margin-top: 1rem;
  }
  .logo{
      display: block;
      width: 30vh;
  }
}
</style>
