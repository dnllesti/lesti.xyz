<template>
  <div class="container">
    <div class="left centered-flex">
      <ProjectLeft title="" />
    </div>
    <div class="right centered-flex">
      <div class="content">
        <h1 class="title">Lesti Dániel</h1>
        <div>
          <font-awesome-icon :icon="faInstagram" style="font-size: 30px" />
          <p>@dnllesti</p>
        </div>
        <div>
          <font-awesome-icon :icon="faGithub" style="font-size: 30px" />
          <p>@dnllesti</p>
        </div>
        <div>
          <font-awesome-icon :icon="faEnvelope" style="font-size: 30px" />
          <p>daniel@lesti.xyz</p>
        </div>
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
@import '~/assets/scss/leftright.scss';

.content {
  text-align: left;
  margin: 0 auto 0 auto;
  width: 70% !important;
  color: $main_contra;
  @media (max-width: 961px) {
    width: 100% !important;
    margin: 0 auto 10vh auto;
  }
  @media (min-width: 961px) {
  }

  & > div {
    display: flex;
    @media (max-width: 961px) {
      width: 70% !important;
      margin: 0 auto;
    }
    & > * {
      display: inline;
      margin: 1vh 2vh 1vh 0;
      font-weight: 600;
      font-size: 1.4rem;
      &:nth-child(1) {
        margin-left: 2vw;
      }
    }
  }

  .title {
    display: block;
    font-weight: 700;
    color: $main_contra;
    letter-spacing: 1px;

    @media (max-width: 961px) {
      font-size: 4rem;
      text-align: center;
      margin-bottom: 2vh;
    }
    @media (min-width: 961px) {
      font-size: 6rem;
    }
  }
}
</style>
