<template>
    <v-btn></v-btn>
</template>

<script>
import axios from "axios"

export default {
    name: 'btnBook',

    data: () => {
        return {
            service_status : ''
        }
    },

    methods: {
        toBookBike: (e) => {
            this.changeStatus(e),
            axios.put('https://jsonbox.io/box_378cb7f9a98c0db8c195')
            {
                e
            }
        },

        changeStatus: (e) => {
            if(1 === e){
                return e = 2
            } if (2 === e) {
                return e = 3
            } else {
                return e = 1
            }
            () => {
                return null
            }
        } 
    }
}

</script>