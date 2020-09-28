<template>
  <table class="table">
    <thead>
      <tr>
        <td>Title</td>
        <td>Type</td>
        <td>Year</td>
        <td>Poster</td>
        <td>Favorite</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataList" :key="index">
        <td>{{ item.Title }}</td>
        <td>{{ item.Type }}</td>
        <td>{{ item.Year }}</td>
        <td>
          <img :src="item.Poster" width="200px" />
        </td>
        <td>
          <a @click.prevent="setFavorite(item)">
            <b-icon :icon="isFavorite(item.imdbID) ? 'star-fill': 'star'" scale="2" variant="warning"></b-icon>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "tableComp",
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setFavorite(movieItem) {
      if(this.isFavorite(movieItem.imdbID)){
        window.alert("Favorilerden çıkarıldı")
        this.$store.commit("REMOVE_FAVORITE",movieItem)
      }
      else{
                window.alert("Favorilere eklendi")
        this.$store.commit("SET_FAVORITE", movieItem);
      }
    },
    isFavorite(imdbID) {
      return this.$store.state.favorites.filter((item) => item.imdbID === imdbID)[0];
    },
  },
};
</script>

<style scoped></style>
