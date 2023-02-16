<template>
    <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3">
      <IntegrationBanner />
      <SliderClient /> 
    </div>
</template>

<script>
import IntegrationBanner from '../components/TheIntegrationBanner.vue'
import SliderClient from '../components/TheSliderClient.vue';

export default {
  name: 'IntegrationPage',
  components: { IntegrationBanner, SliderClient },
}
</script>