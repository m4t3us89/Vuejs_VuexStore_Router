<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <template v-if="isCredential">
      <button v-on:click="logout">Olá, {{ JSON.parse(isCredential).username }} Logout</button>
    </template>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("credentials");
      this.$store.dispatch("isCredential", null);
      this.$router.push("/login");
    }
  },
  computed: {
    isCredential() {
      return this.$store.state.isCredential;
    }
  }
};
</script>