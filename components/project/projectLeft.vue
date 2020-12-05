<template>
    <div>
        <Logo class="logo" />
        <h1 class="title">{{title}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    }
}
</script>

<style lang="scss" scoped>

            .logo{
                margin: 10vh 0 0 0;
            }

            .title {
            font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            sans-serif;
            margin: 1rem 0 2rem 0;
            font-weight: 300;
            color: $main_contra;

            @media (max-width: 961px) {
                font-size: 4rem;

            }
            @media (min-width: 961px) {
                font-size: 6rem;

            }


        }
</style>

