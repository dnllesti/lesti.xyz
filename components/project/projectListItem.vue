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
            padding: 0.4rem 1rem;
            margin: 3vh auto;

            text-align: left;
            font-size: 0.9rem;

            @media (max-width: 961px) {
            width: 60vw;
            }
            @media (min-width: 961px) {
            width: 80%;
            }

    }

    a{
        text-decoration: none;
    }


</style>