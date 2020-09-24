<template>
  <div id="app">
    <Navbar/>
    <Loading v-if="$store.state.isLoading" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Loading from './components/Loading'
export default {
  components: {
    Navbar,
    Loading
  }
}
</script>
