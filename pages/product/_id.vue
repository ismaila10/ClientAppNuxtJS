<template>
  <div class="container">
    <div>
      <Title title="Détails" />
      <div class="post__item">
        <p>{{product.title}}</p>
        <p>{{product.price}}</p>
        <p>{{product.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/ui/title";
import Product from "../../apollo/queries/product.gql"
export default {
  components: {
      Title
    },
  data: function() {
      return {
        product: {}
      }
    },
  apollo: {
      product: {
        query: Product,
        variables() {
          return {
            id: this.$route.params.id,
          }
        },
        update(data) {
          console.log(data.product);
          return data.product;
        }
      }
    }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS*/

</style>