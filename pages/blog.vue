<template>
    <div>

    </div>
</template>

<script>
    export default {
        async asyncData({params, $$http}) {
            const data = await context.$http.$get('');
            try {
                return {
                    posts: data
                }
            } catch (error) {
                console.log(error)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>