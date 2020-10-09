<template>

  <div style="height: 500px; width: 95%; margin: auto ; margin-top: 20px">

    <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 100%; z-index: 0"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
    >
      <l-tile-layer
          :url="url"
          :attribution="attribution"
      />


      <l-marker
          v-for="(bike, index) in bikes"
          :lat-lng="geoLoc(bike.location.coordinates[0], bike.location.coordinates[1])"
          :key="index"
      >


        <l-icon
            :icon-size="dynamicSize"
            :icon-anchor="dynamicAnchor"
            icon-url="https://img.icons8.com/ios-filled/50/000000/electric-bike.png"
            style="width: auto"
        />
        <l-popup>
          <div>
            <div style="height: 6vh; display: flex; align-items: center; justify-content: space-around"  class="pa-4 grey lighten-4 text-no-wrap rounded-pill">

              <h3 class="ml-4" v-if="1 === bike.service_status">Disponible</h3>
              <h3 v-if="2 === bike.service_status">Réservé</h3>
              <h3 v-if="3 === bike.service_status">Utilisé</h3>
              <p>
              <v-img width="50%" class="ml-2" :src="1 === bike.service_status ? iconFree : 2 === bike.service_status ? iconBooked : iconUse " alt="img"/>
              </p>
            </div>
            <div style="height: 6vh; display: flex; align-items: center; justify-content: space-around" class="mt-1 mb-4 pa-4 grey lighten-4 text-no-wrap rounded-pill"  >
              <h3>
                Batterie:
              </h3>
              <div class="ml-2" style="display: flex; align-items: center ">
              <h3>{{bike.battery_level}}%</h3>
                <v-img width="4%" src="https://img.icons8.com/color/28/000000/high-battery--v1.png"/>
              </div>
            </div>
            <v-divider class="pa-3"></v-divider>
            <div style="display: flex; justify-content: center; height: 20px">
              <v-btn x-small>réserve moi</v-btn>
            </div>
            <p>
              numéro de série : {{bike.serial_number}}
            </p>
          </div>
        </l-popup>
      </l-marker>

    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";
import axios from "axios"

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon

  },
  data: () => {
    return {
      iconFree : 'https://img.icons8.com/color/48/000000/checked--v1.png',
      iconBooked : 'https://img.icons8.com/color/48/000000/cancel-2--v1.png',
      iconUse : 'https://img.icons8.com/color/48/000000/cancel--v1.png',
      reqData : [],
      bikes: [],
      zoom: 11,
      center: latLng(48.75534, 2.3488),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(48.7555, 2.3488),
      currentZoom: 11.5,
      showParagraph: true,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 2.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 2.15];
    },

  },
  methods: {
    geoLoc(lat, lng){
      return latLng(lat, lng)
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },

  },
  mounted() {
    axios
        .get('https://jsonbox.io/box_378cb7f9a98c0db8c195')
        .then(response => {
          this.bikes = response.data
          console.log("bleble: ", this.bikes)
        })
  },
};
</script>
