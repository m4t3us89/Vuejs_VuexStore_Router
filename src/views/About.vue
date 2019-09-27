<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ msg }}
    <br />
    {{ count }}
    <button v-on:click="setMsg">Alterar Estado</button>
    <br />
    <!--<template v-if="isLoadingRequest">Carregando...</template>-->
    <button v-on:click="testeAPI('Carregando 1...')">Test API 1</button>
    <button v-on:click="testeAPI('Carregando 2...')">Test API 2</button>
  </div>
</template>


<script>
import api from "../services/api";

export default {
  name: "about",

  data: function() {
    return {
      msg: "Olá"
    };
  },
  methods: {
    setMsg() {
      //this.$store.commit("increment", this.$store.state.count + 1);
      this.$store.dispatch("increment", this.$store.state.count + 1);
    },
    async testeAPI(msg) {
      this.$store.dispatch("isLoadingRequest", msg);
      try {
        const user = await api.post("/api/user/authenticate");
        console.log(user);
      } catch (err) {
        const { data: messages } = err.response;
        messages.forEach(m => {
          console.log(m);
        });
      }

      setTimeout(() => {
        this.$store.dispatch("isLoadingRequest");
      }, 500);
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    isLoadingRequest() {
      return this.$store.state.isLoadingRequest;
    }
  }
};
</script>


