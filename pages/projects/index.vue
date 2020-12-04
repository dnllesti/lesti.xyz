<template>
  <div class="container">
    <div class="left">
      <Logo class="logo" />
      <h1 class="title">Projektek</h1>
    </div>
    <div class="content">
      <NuxtLink to="/projects/sharelock">
        <div class="projekt">
          <h2>ShareLock</h2>
        </div>
      </NuxtLink>

      <NuxtLink to="/projects/lesti">
        <div class="projekt">
          <h2>lesti.xyz</h2>
        </div>
      </NuxtLink>
      <!--
      <NuxtLink to="/projects/seq">
        <div class="projekt">
          <h2>Project SEQ</h2>
        </div>
      </NuxtLink>
      -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 767px) {
      *{
    text-decoration: none !important;
    }
  .title {
    font-size: 4rem;
    width: 100vw;
  }
  .ce {
    margin: 0 auto;
    justify-content: center;
    width: 100vw;
    text-align: center;
    p {
    }
  }
  .ce:nth-of-type(1) {
    margin-top: 1rem;
  }

  .logo {
    margin-top: 10vh;
    margin-bottom: 5vh;
  }
  .projekt {
    padding: 1.5rem 2rem;
    border-radius: 2rem;
    border: 3px solid $secondary_color;
    width: 80vw;
    margin: 2rem auto;
    color: $secondary_color;

    
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    h1 {
      width: 100%;
    }
  }
  .content {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    background-color: $main_color;
  }
  .container {
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
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
}
@media (min-width: 768px) {
        *{
    text-decoration: none !important;
    }
  .projekt {
    border-radius: 2rem;
    width: 30rem;
    margin: 3rem auto;
    padding: 1.5rem 2rem;
    border: 3px solid $secondary_color;
    color: $secondary_color;
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10vw;;
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
    background-color: $main_color;
  }
  .container {
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
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
    .title {
      font-size: 4rem;
      width: 100vw;
    }
    .ce {
      margin: 0 auto;
      justify-content: center;
      width: 100vw;
      text-align: center;
      p {
      }
    }
    .ce:nth-of-type(1) {
      margin-top: 1rem;
    }
    .logo {
      display: block;
      width: 30vh;
    }
  }
}
</style>
