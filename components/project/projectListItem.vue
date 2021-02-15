<template>
    <NuxtLink :to="url">
        <div class="projekt">
          <h2>{{title}}</h2>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        title: String,
        url: String
    }
}
</script>

<style lang="scss" scoped>
    .projekt {
            text-decoration: none;
            color: $cta_one_contra;
            background-color: $cta_one;
            
            padding: 0.7rem 0rem;
            margin: 2vh auto;

            text-align: center;
            font-size: 0.75rem;

            @media (max-width: 961px) {
            width: 70vw;
            }
            @media (min-width: 961px) {
            width: 90%;
            }
            
    }

    a{
        text-decoration: none;
    }
    .nuxt-link-active{

                .projekt {
                background-color: #fff;
                color: #000;
-webkit-box-shadow:inset 0px 0px 0px 3px #000;
    -moz-box-shadow:inset 0px 0px 0px 3px #000;
    box-shadow:inset 0px 0px 0px 3px #000;
            }
    }


</style>