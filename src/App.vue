<template>
  <div id="app">
    <Header />
    <template v-if="isLoadingRequest">
      <Loading :msg="$store.state.msg" />
    </template>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script>
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Loading,
    Header,
    Footer
  },
  computed: {
    isLoadingRequest() {
      return this.$store.state.isLoadingRequest;
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
