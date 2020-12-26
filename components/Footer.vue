<template>
<footer>
    <p>
      A weboldal Fejlesztés alatt áll. Bármilyen esetleges probléma / észrevétel / tanács kapcsán kérem forduljanak a fejlesztőhöz. <br /> A következő időszakban Matomo Analytics tesztelés fog folyni, így az oldal folyamatos trackelés alatt lesz.
    </p>
    <p>
      &copy; {{ new Date().getFullYear() }} Lesti Dániel
    </p>
    <div>
     <a href="mailto: daniel@lesti.xyz"> <font-awesome-icon :icon="faEnvelope" /></a>  <a href="https://www.instagram.com/dnllesti/"> <font-awesome-icon :icon="faInstagram" /></a><a href="https://github.com/dnllesti"> <font-awesome-icon :icon="faGithub" /></a>
    </div>
</footer>
</template>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    footer{
        color: white;
        background-color: $secondary_color;
        width: 100%;
        text-align: center;
        padding: 3rem;
    }
    div{
        margin-top: 1rem;
    }
    a{
        color: $cta_two;
        margin: 0 0.6rem;
    }
</style>

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