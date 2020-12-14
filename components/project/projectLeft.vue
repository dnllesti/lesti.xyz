<template>
    <div>
        <Logo class="logo" />
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle" v-if="subtitle != undefined">{{subtitle}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style lang="scss" scoped>

            .logo{
                margin: 10vh 0 0 0;
            }
            .subtitle {
            font-weight: 300;
            font-size: 42px;
            color: $main_contra;
            word-spacing: 5px;
            padding-bottom: 15px;
            margin-bottom: 3rem;
            }
            .title {
            font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            sans-serif;
            margin: 1rem 0 0 0;
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

