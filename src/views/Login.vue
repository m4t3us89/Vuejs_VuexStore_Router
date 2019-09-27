<template>
  <div class="login">
    Login
    <button v-on:click="login">Logar</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          username: "ammreis",
          token: "123"
        })
      );
      this.$store.dispatch("isCredential", localStorage.getItem("credentials"));
      this.$router.push("/");
    }
  }
};
</script>