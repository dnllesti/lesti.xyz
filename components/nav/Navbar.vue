<template>
<header>
    <div class="logo">
        <a href="/">
        <Brand />
        </a>
    </div>

  <NuxtLink class="contact hidedesktop" v-if="$nuxt.$route.path !== '/'" to="/"> <button>Vissza </button> </NuxtLink>
          <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
</header>
</template>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-color: $main_color;
        text-decoration: none !important;
        font-weight: 700;
    }

    button{
        font-size: 1rem;
        color: $main_contra;
        text-decoration:none;
    }
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 30px;
        position: fixed;
        width: 100%;
        background-color: $main_color;
        z-index: 2;
    }
    .nav_links{
        list-style: none;
    }
    .nav_links li{
        display: inline-block;
    }
    .nav_links li a{
        transition: all 0.3 ease 0s;
    }

    .nav_links li a:hover{
        color: rgba($main_contra, 0.7);
    }
    button{
        color: $cta_one_contra;
        box-sizing: border-box;
        background-color: $cta_one;
        padding: 0.5rem 0.8rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3 ease 0s;
    }

    .contact{
        margin-left: auto;
    }

    button:hover{
        background-color: rgba($cta_one ,0.9)
    };

    img{
    width: 100%;
    height: 100%;
    }
    .logo{
        margin: 0.3rem 0;
        height: auto;
        width: 8rem;
        margin-right: auto;
        cursor: pointer;
    };
        .drawer-toggle .bar {
        width: 90%;
        height: 3px;
        border-radius: 2rem;
        background-color: $main_contra;
    }
    .drawer-toggle {
        display: none;
        //display: flex;
        justify-self: end;
        flex-direction: column;
        justify-content: space-around;
        height: 1.3rem;
        width: 35px;
        padding-left: 16px;
        cursor: pointer;
    }

        @media (max-width: 1430px) {
        .app-links{
            display: none;
        }
    }
    @media (min-width: 961px) {
        .app-links {
            display: none;
        }
        .drawer-toggle {
            display: none;
        }
    }
</style>