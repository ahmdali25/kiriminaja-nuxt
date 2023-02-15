<template>
    <section v-if="!isLoading" class="my-10">
      <ssr-carousel :slides-per-page='6' :autoplay-delay="4" loop>
        <div v-for="slide in getExpeditionSlides" :key="slide.id">
          <div class="slide"><img :src="slide.image" :alt="`Kurir ${slide.title}`"/></div>
        </div>
      </ssr-carousel>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SliderExpedition',
  data: () => ({
    isLoading: true,
  }),
  computed: {
    ...mapGetters(['getExpeditionSlides']),
  },
  async mounted() {
    await this.getExpeditions();
    this.isLoading = false;
  },
  methods: {
    ...mapActions([
      'getExpeditions',
    ]),
  },
}
</script>