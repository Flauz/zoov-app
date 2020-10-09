<template>
  <v-container class="justify-center">
    <v-card
        class="mx-auto overflow-hidden"
        height="100%"
        width="100%"
    >
      <v-system-bar color="deep-purple darken-3"></v-system-bar>

      <v-app-bar
          color="deep-purple accent-4"
          dark
          prominent
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <div style="margin-top: 10px;">
        <v-img style="margin: auto" src="https://www.zoov.eu/static/images/logos/zoov-logo-blue.svg" alt="" width="50%"/>
      </div>
      <div>
        <Map/>
      </div>

      <v-navigation-drawer
          style="z-index: 100"
          v-model="drawer"
          absolute
          bottom
          temporary
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import Map from './Map'


export default {
  name: "Home",

  components: {
    Map,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },

}
</script>
