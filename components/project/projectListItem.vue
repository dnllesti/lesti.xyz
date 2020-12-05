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
            color: $secondary_color;
            border: 3px solid $secondary_color;
            border-radius: 3rem;
            padding: 3vh;
            margin: 3vh auto;

            @media (max-width: 961px) {
                width: 80%;
            }
            @media (min-width: 961px) {
                width: 50%;
            }

    }

    a{
        text-decoration: none;
    }


</style>