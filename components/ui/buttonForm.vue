<template>
    <div class="form__group">
        <button 
            :type="buttonType"
        >
            {{buttonText}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "ButtonForm",
        props: {
            buttonType:{
                type: String
            },
            buttonText: {
                type: String
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>