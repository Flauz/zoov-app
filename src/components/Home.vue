<template>
    <v-card
        color="grey lighten-5"
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

      <v-container class="pt-6" style="height: 90%">
        <div class="pb-5">
          <v-img width="40%" style="margin: auto" src="https://www.zoov.eu/static/images/logos/zoov-logo-blue.svg" alt="" />
        </div>
        <Map/>
      </v-container>

      <v-navigation-drawer app
          style="z-index: 100;"
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
      <v-bottom-navigation app
        :value="value"
        color="primary"
        grow
      >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>scanner</span>

        <v-icon>mdi-barcode-scan</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
    value: 1
  }),
  
  watch: {
    group () {
      this.drawer = false
    },
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': 
          return 200
        case 'sm': 
          return 200
        case 'md': 
          return 400
        case 'lg': 
          return 600
        case 'xl': 
          return 800
        default: return null
        }
      
      },
  }
}
</script>
