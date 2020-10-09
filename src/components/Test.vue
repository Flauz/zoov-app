<template>
  <div>
    <h2>YALA</h2>


    <ul>
      <li v-for="bike in bikes" :key="bike._id">{{bike._id}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Test',

  data:() => {
    return{
    bikes: []
  }},
  mounted() {
      axios
          .get('https://jsonbox.io/box_f4a9e1fab93fa67b5f56')
          .then(response => this.bikes = response.data)
          .then(response => console.log('YALA :', response.data))


  },

}
</script>