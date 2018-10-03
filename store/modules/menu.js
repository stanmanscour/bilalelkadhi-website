export const state = () => ({
    status: true
})

export const getters = {
    logoIsHidden: state => {
        return state.status;
    }
}

export const mutations = {
    hideLogo(state) {
        state.status = false;
    },
    showLogo(state) {
        state.status = true
    }
}

export const actions = {
    hideLogo({
        commit
    }) {
        commit('menu/hideLogo');
    },
    showLogo({
        commit
    }) {
        commit("menu/showLogo");
    }
}