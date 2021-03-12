<template>
    <div class="form__group">
        <label>{{textLabel}}</label>
        <input 
            :type="inputType" 
            :v-model="inputModel" 
            :name="inputModel" />
    </div>
</template>

<script>
    export default {
        name: "FormGroup",
        props: {
            inputType: {
                type: String,
                require: true
            },
            textLabel: {
                type: String,
                require: true
            },
            inputModel: {
                type: String,
                require: true
            },
        }
    }
</script>

<style lang="scss" scoped>
    
</style>