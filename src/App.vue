<template>
  <v-app id="app">
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>

import Home from './components/Home'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
html, body{
  margin: 0px;
  padding: 0px;
}

</style>
