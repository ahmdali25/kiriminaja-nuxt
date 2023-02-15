<template>
  <div class="container xl:w-10/12 2xl:w-9/12 mx-auto">
    <SliderBanner />
    <SliderExpedition />
    <Service />
  </div>
</template>

<script>
import SliderBanner from '../components/TheSliderBanner.vue';
import SliderExpedition from '../components/TheSliderExpedition.vue';
import Service from '../components/TheService.vue';

export default {
  name: 'HomePage',
  components: { 
    SliderBanner,
    SliderExpedition,
    Service,
  },
}
</script>