<template>
    <ssr-carousel class="my-10" :slides-per-page='6' :autoplay-delay="4" loop>
        <div v-for="slide in slides" :key="slide.id">
            <div class="slide"><img :src="slide.image" :alt="`Kurir ${slide.title}`"/></div>
        </div>
    </ssr-carousel>
</template>

<script>

export default {
  name: 'SliderExpedition',
  data: () => ({
    slides: [
      {
        id: 1,
        title: "JNE Express",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/jne.png"
      },
      {
        id: 2,
        title: "JNT Express",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/jnt.png"
      },
      {
        id: 3,
        title: "Sicepat Ekspress",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/sicepat.png"
      },
      {
        id: 4,
        title: "SAP",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/sap.png"
      },
      {
        id: 5,
        title: "NCS",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/ncs.png"
      },
      {
        id: 6,
        title: "Sentral Cargo",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/sentral.png"
      },
      {
        id: 7,
        title: "AnterAja",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/anteraja.png"
      },
      {
        id: 8,
        title: "NinjaXpress",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/ninja.png"
      },
      {
        id: 9,
        title: "ID Express",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/idx.png"
      },
      {
        id: 10,
        title: "GOSEND",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/gosend.png"
      },
      {
        id: 11,
        title: "Grab Express",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/grab_express.png"
      },
      {
        id: 12,
        title: "Borzo",
        image: "https://kiriminaja-static-file.imgix.net/home-v3/logistics/borzo.png"
      },
    ]
  }),
}
</script>