<template>
    <div class="main">
        <h1>
            Elérhetőségeim
        </h1>
        <div>
        <h2>
            <font-awesome-icon :icon="faEnvelope"  /> Email
        </h2>
                <a href="mailto:daniel@lesti.xyz"> daniel@lesti.xyz</a>
        </div>

        <hr>
        <div>
        <h2>
            <font-awesome-icon :icon="faInstagram"  /> Instagram
        </h2>
                <a href="mailto:daniel@lesti.xyz"> @dnllesti</a>
        </div>

                <hr>
                <div>
        <h2>
            <font-awesome-icon :icon="faGithub"  /> Github
        </h2>
                <a href="mailto:daniel@lesti.xyz"> @dnllesti</a>
                </div>


    </div>
</template>

<style lang="scss" scoped>
    hr{
        margin: 3vh 0 3vh 0;
    }
    h2{
        margin: 3vh 0 1vh 0;
        color: #444;
    }
    .main{
        padding: 0 0 5vh 0;
    }
    a{
        text-decoration: none;
        color: $cta_two;
    }
    .main{
        div{
            display: inline-block;
        }
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