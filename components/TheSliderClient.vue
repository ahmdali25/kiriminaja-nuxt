<template>
    <section class="my-10">
      <h2 class="flex justify-center font-display text-2xl xl:text-4xl font-bold mt-3 mb-5">Telah dipercayai oleh</h2>
      <p class="flex justify-center text-lg text-neutral-700 mb-5">KiriminAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan UMKM di seluruh Indonesia</p>
      <ssr-carousel :slides-per-page='6' :autoplay-delay="4" loop>
        <div v-for="slide in slides" :key="slide.id">
          <div class="slide">
            <!-- <img :src="slide.image" :alt="`Kurir ${slide.title}`"/> -->
            <img :src="require(`../assets/images/${slide.image}.png`)" :alt="`Kurir ${slide.title}`"/>
          </div>
        </div>
      </ssr-carousel>
    </section>
</template>

<script>

export default {
  name: 'SliderClient',
  data: () => ({
    isLoading: true,
    slides: [
      {
        id: 1,
        title: "Arcelle",
        image: "arcelle",
      },
      {
        id: 2,
        title: "Jawara Satoe",
        image: "jawara-satoe",
      },
      {
        id: 3,
        title: "Dion Farma",
        image: "dion-farma",
      },
      {
        id: 4,
        title: "Natasha",
        image: "natasha",
      },
      {
        id: 5,
        title: "Clandys",
        image: "clandys",
      },
      {
        id: 6,
        title: "Diskop UKM DIY",
        image: "diskop-ukm-diy",
      },
      {
        id: 7,
        title: "Sibakul Jogja",
        image: "sibakul",
      },
      {
        id: 8,
        title: "Nimco",
        image: "nimco",
      },
      {
        id: 9,
        title: "Misseana",
        image: "misseana",
      },
      {
        id: 10,
        title: "Yukbid",
        image: "yukbid",
      },
      {
        id: 11,
        title: "Sibelio",
        image: "sibelio",
      },
      {
        id: 12,
        title: "Fabil",
        image: "fabil",
      },
      {
        id: 13,
        title: "Efes",
        image: "efes",
      },
      {
        id: 14,
        title: "Inolabs",
        image: "inolabs",
      },
      {
        id: 15,
        title: "Finna",
        image: "finna",
      },
      {
        id: 16,
        title: "Tries",
        image: "tries",
      },
      {
        id: 17,
        title: "Paeko",
        image: "paeko",
      },
      {
        id: 18,
        title: "Hayyana",
        image: "hayyana",
      },
    ]
  }),
}
</script>