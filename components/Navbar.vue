<template>
<header>
    <div class="logo">
        <a href="/">
    <!--<img  src="~/assets/lesti.svg" alt="">-->
        </a>
    </div>

    <AppLinks class="app-links" />
  <NuxtLink class="contact" to="/contact"> <button>Kapcsolat</button> </NuxtLink>
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
    }

    button{
        font-weight: 500;
        font-size: 1.2rem;
        color: $main_contra;
        text-decoration:none;
    }
    header{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px 30px;
        position: absolute;
        width: 100%;
    }
    .nav_links{
        list-style: none;
        margin-right: 20px;
    }
    .nav_links li{
        display: inline-block;
        padding: 0px 20px;
    }
    .nav_links li a{
        transition: all 0.3 ease 0s;
    }

    .nav_links li a:hover{
        color: rgba($main_contra, 0.7);
    }
    button{
        color: $cta_one_contra;
        padding: 12px 25px;
        background-color: $cta_one;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3 ease 0s;
        float: right;
    }

    button:hover{
        background-color: rgba($cta_one ,0.9)
    };

    img{
    width: 100%;
    height: 100%;
    }
    .logo{
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
        display: flex;
        justify-self: end;
        flex-direction: column;
        justify-content: space-around;
        height: 1.3rem;
        width: 35px;
        padding-left: 16px;
        cursor: pointer;
    }

        @media (max-width: 767px) {
        .app-links, .contact{
            display: none;
        }
    }
    @media (min-width: 768px) {
        .app-links {
            display: block;
        }
        .drawer-toggle {
            display: none;
        }
    }
</style>