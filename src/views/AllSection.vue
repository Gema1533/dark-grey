<template> 

    <slide-section/>
    <head-section/>
    <count-down/>
    <garis/>
    <place/>
    <galery/>
    <our-story/>
    <message/>
    <card-message/>
    <last-section/>


</template>

<script>


import CountDown from '../components/CountDown.vue'
import Garis from '../components/Garis.vue'
import Galery from '../components/Galery.vue'
import HeadSection from '../components/HeadSection.vue'
import LastSection from '../components/LastSection.vue'
import OurStory from '../components/OurStory.vue'
import SlideSection from '../components/SlideSection.vue'
import Message from '../components/Message.vue'
import CardMessage from '../components/CardMessage.vue'

export default {
  components: { 
  SlideSection, 
  HeadSection, 
  CountDown,
  Garis, 
  Galery, 
  OurStory,
  LastSection,
  Message,
  CardMessage,
   

    },

}

</script>


<style>

</style>