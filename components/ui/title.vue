<template>
    <div class="title">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: {
            title: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>