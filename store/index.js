export const state = () => ({
  banners: [],
  expeditions: []
})

export const getters = {
  getBannerSlides(state) {
    return state.banners;
  },
  getExpeditionSlides(state) {
    return state.expeditions;
  }
}

export const mutations = {
    updateBanners(state, payload) {
        state.banners = payload;
    },
    updateExpeditions(state, payload) {
        state.expeditions = payload;
    }
}

export const actions = {
    async getBanners ({commit}) {
        try {
            const data = await this.$axios.$get('https://mocki.io/v1/cf139172-bb72-41cd-a51f-1ca1f9044d1d');
            commit("updateBanners", data);
        } catch (error) {
            console.log(error)
        }
    },
    async getExpeditions ({commit}) {
        try {
            const data = await this.$axios.$get('https://mocki.io/v1/6eadd07b-4233-45d3-a4a0-2f2904462410');
            commit("updateExpeditions", data);
        } catch (error) {
            console.log(error)
        }
    }
}