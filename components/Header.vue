<template>
    <header>
        <div class="header-2">
            <nav class="bg-white py-2 md:py-4">
                <div class="container px-4 mx-auto md:flex md:items-center">

                    <div class="flex justify-between items-center">
                        <a href="#" class="font-bold text-xl text-indigo-600">ClientApp</a>
                        <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                        <i class="fas fa-bars"></i>
                        </button>
                    </div>

                    <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <NuxtLink to="/" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</NuxtLink>
                        <NuxtLink to="/about" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</NuxtLink>
                        <NuxtLink to="/product" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Products</NuxtLink>
                        <NuxtLink to="/eshop" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Eshop</NuxtLink>
                        <NuxtLink to="/contact" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</NuxtLink>
                        <NuxtLink to="/login" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</NuxtLink>
                        <NuxtLink to="/logout" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</NuxtLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>