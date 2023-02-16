<template>
    <section class="slider grid grid-cols-12 justify-items-center items-center">
      <div class="col-span-12">
        <div>
          <div class="slide grid grid-cols-2 place-items-center">
            <div>
                <h1 class="text-5xl font-bold leading-tight">Partner Ecosystem & Integrations</h1>
                <p class="mt-5 text-lg text-neutral-700">Kami bermitra dengan banyak ekspedisi terkemuka untuk membantu mengembangkan bisnis Anda lebih cepat, dan lebih kuat dari sebelumnya.</p>
                <ul class="mt-5">
                  <li class="flex gap-2 items-center">
                    <div class="inline-block bg-primary-200 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <span>Beragam pilihan expedisi & Layanan</span>
                  </li>

                  <li class="flex gap-2 items-center mt-5">
                    <div class="inline-block bg-primary-200 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <span>Support Cash On Delivery</span>
                  </li>

                  <li class="flex gap-2 items-center mt-5">
                    <div class="inline-block bg-primary-200 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <span>Dashboard Monitoring</span>
                  </li>
                </ul>
                <div class="flex gap-3 mt-10">
                  <div>
                    <BaseButtonRegister />
                  </div>
                  <div class="flex gap-2 items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <line x1="3" y1="6" x2="3" y2="19"></line>
                      <line x1="12" y1="6" x2="12" y2="19"></line>
                      <line x1="21" y1="6" x2="21" y2="19"></line>
                    </svg>
                    <span>Dokumentasi</span>
                  </div>
                </div>
            </div>
            <div>
              <img src="../assets/images/banner-integration.svg" alt="Banner Integration">
            </div>
          </div>
        </div> 
      </div>
    </section>
</template>

<script>
import BaseButtonRegister from './BaseButtonRegister.vue';

export default {
    name: "SliderBanner",
    components: { BaseButtonRegister },
}
</script>

<style lang="scss" scoped>
.slider {
  height: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}