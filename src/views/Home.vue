<template>
  <div class="home">
    {{$store.state.isLoading}}
    <b-card class="my-5 nx-5">
      <label>Movie Search</label>
      <b-form-input
        placeholder="Search movie"
        v-model="searchText"
      ></b-form-input>
    </b-card>
    <b-card>
      <tableComp :data-list ="searchMovies"/>
    </b-card>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import { mapState } from "vuex";
import tableComp from '../components/tableComp'
export default {
  name: "Home",
  data() {
    return {
      searchText: "",
    };
  },
  components: {
    tableComp
  },

  watch: {
    searchText: debounce(function(newVal) {
      this.$store.dispatch("searchMovie", newVal);
    }, 500),
  },
  computed: {
    ...mapState(['searchMovies'])
  }
};
</script>
