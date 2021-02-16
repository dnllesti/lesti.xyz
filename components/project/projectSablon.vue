<template>
  <div>
    <div class="container">
      <div class="left">
          <project-left :title="title" :subtitle="subtitle? '' : 'Projekt'" />
      </div>

      <div :class="about ? 'about' : '' " class="content">
        <h2 class="subtitle" >{{subtitle ? subtitle : "Na mi is ez?"}}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import projectLeft from './projectLeft.vue'
export default {
  components: { projectLeft },
  props: {
    title: String,
    url: String,
    description: String,
    about: Boolean,
    subtitle: String
},
  head() {
      return {
    title: this.title + ' - lesti.xyz',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          this.description,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          this.description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: this.description,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: this.url,
      },
      {
        name: 'lang',
        content: 'hu',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://lesti.xyz/lesti_OG.png',
      },
    ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/leftright.scss';

p{
  font-weight: 400;
}

button {
  color: $cta_two_contra;
  padding: 9px 25px;
  background-color: $cta_two;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3 ease 0s;
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;
  margin: 2vh auto;
  display: block;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $main_color;
}

a {
  color: $cta_two;
  text-decoration: none;
}

.title {
  display: block;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 400;
  font-size: 42px;
  color: $main_contra;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
@media (max-width: 1430px) {
  .container {
    flex-wrap: wrap;
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    padding-top: 5vh;
    justify-content: center;
    align-items: center;
    * {
      display: block;
    }
    h1 {
      width: 100%;
    }
  }
  .title {
    font-size: 4rem;
    margin-top: 3vh;
    width: 100vw;
  }
  p {
    font-size: 1.3rem;
    text-align: justify;
    margin-top: 3vh;
    padding: 2vw 5vw;
  }
  .content{
    .subtitle{
      margin: 0vh 0 0 0;
    }
    margin-bottom: 5vh;
  }
  img:nth-last-of-type(1) {
    margin: 3vh 0 5vh 0;
  }
}

@media (min-width: 961px) {
  * {
    text-decoration: none !important;
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    min-width: 500px;
    height: 100vh;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    * {
      display: block;
    }
    h1 {
      width: 100%;
    }
  }
  .content {
    margin: 0 auto;
    height: 100%;
    width: 700px;
    background-color: $main_color;
  }

  .container {
    min-height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: $main_color;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 6rem;
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

  p {
    margin: 3vh 5vw;
    font-size: 1.4rem;
    text-align: justify;
    color: $main_contra;
    vertical-align: middle;
  }
  .about{
    width: 70rem;
    p{
      font-size: 1.2rem;
    }
  }
}
</style>
