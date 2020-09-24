<template>
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
        <tr v-for="(item, index) in dataList" :key="index">
            <td>{{ item.Title }}</td>
            <td>{{ item.Type }}</td>
            <td>{{ item.Year }}</td>
            <td>
            <img :src="item.Poster" width="200px" />
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: "tableComp",
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
