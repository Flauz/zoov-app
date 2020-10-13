<template>
    <v-btn></v-btn>
</template>

<script>
import axios from "axios"

export default {
    name: 'ButtonBook',

    data: () => {
        return {
            service_status : ''
        }
    },

    methods: {
        toBookBike: (bike) => {
            const changeStatus = () => {
                if(1 === bike.service_status){
                    return {"service_status": 2}
                } if (2 === bike.service_status) {
                    return {"service_status": 3}
                } else {
                    return {"service_status": 1}
                }
            }
            axios.put('https://jsonbox.io/box_378cb7f9a98c0db8c195', changeStatus)
            
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