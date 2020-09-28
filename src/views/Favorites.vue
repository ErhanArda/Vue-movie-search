<template>
  <div>
    <b-card class="my-5 mx-5">
          <tableComp :data-list="$store.getters.getFavorites"/>
    </b-card>
  </div>
</template>
<script>
import tableComp from "../components/tableComp";
export default {
  components: {
    tableComp,
  },

};
</script>
<style scoped>
  
</style>