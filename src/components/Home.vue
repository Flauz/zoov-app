<template>
    <v-card
        color="blue-grey lighten-5"
        style="align-items: center;"
        class="mx-auto overflow-hidden"
        height="100%"
        width="100%"
    >
      <v-system-bar app color="indigo darken-2"></v-system-bar>
      <v-app-bar app
          color="indigo accent-2"
          dark
          height="60%"
          prominent
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-container class="pt-10" style="height: 100%">
        <div class="pb-8">
          <v-img  style="margin: auto" src="https://www.zoov.eu/static/images/logos/zoov-logo-blue.svg" alt="" width="50%"/>
        </div>
        <Map/>
      </v-container>

      <v-navigation-drawer app
          style="z-index: 100; height: 24vh"
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
              active-class="indigo--text text--accent-4"
          >
            <v-list-item>
              <v-icon style="margin-right: 2vh;">mdi-home</v-icon>
              <v-list-item-title>Accueil</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-icon style="margin-right: 2vh;">mdi-cash</v-icon>
              <v-list-item-title>Paiement</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-icon style="margin-right: 2vh;">mdi-account</v-icon>
              <v-list-item-title>Mon compte</v-list-item-title>
            </v-list-item>
            
            <v-list-item >
              <v-icon style="margin-right: 2vh;">mdi-help-circle-outline</v-icon>
              <v-list-item-title>Aide</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
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
