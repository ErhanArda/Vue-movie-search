<template>
  <div class="home">
    <b-card class="my-5 nx-5">
      <label>Movie Search</label>
      <b-form-input
        placeholder="Search movie"
        v-model="searchText"
      ></b-form-input>
    </b-card>
    <b-card>
        <table class="table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Type</td>
              <td>Year</td>
              <td>Poster</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in searchMovies" :key="index">
              <td>{{ item.Title }}</td>
              <td> {{ item.Type}} </td>
              <td> {{ item.Year }} </td>
              <td>
                <img :src="item.Poster" width="200px">
              </td>
            </tr>
          </tbody>
        </table>
    </b-card>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      searchText: "",
    };
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
