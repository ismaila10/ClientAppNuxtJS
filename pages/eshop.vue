<template>
  <div class="container">
    <div>
      <Title title="Eshop" />
      <div class="post__grid" v-for="product in productsArray" :key="product.id">
        <div class="post__item">
            <p>{{product.title}}</p>
            <nuxt-link :to="`product/${product.id}`">Voir Plus</nuxt-link>
            <button @click.prevent="voir(product.id)">Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/ui/title";
import Products from "../apollo/queries/products.gql"
export default {
    components: {
      Title
    },
    data: function() {
      return {
        productsArray: [],
        loading: 0
      }
    },
    methods: {
      voir: function(id){
        this.$router.push(`product/${id}`);
      }
    },
    apollo: {
      $loadingKey: "loading",
      productsArray: {
        query: Products,
        update(data) {
          console.log(data.products);
          return data.products;
        }
      }
    }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS*/

</style>
