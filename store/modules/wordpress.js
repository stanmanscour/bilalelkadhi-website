import axios from 'axios';

export const state = () => ({
    photos: [],
    videos: [],
    loading: true
})

export const getters = {
    getPhotos: state => {
        return state.photos;
    }
}

export const mutations = {
    fetchPhotos(state, photos) {
        state.photos = photos;
    },
    fetchVideos(state, videos) {
        state.videos = videos;
    }
}

export const actions = {
    fetch({
        commit
    }, type) {
        axios.get("https://public-api.wordpress.com/rest/v1.1/sites/bilalelkadhiadmin.wordpress.com/posts").then((res) => {


            if (type === 'photography') {
                let photos = res.data.posts.filter(element => {
                    return typeof element.categories["photography"] === 'object';
                })

                commit('fetchPhotos', photos);
            } else if (type === 'videos') {
                let videos = res.data.posts.filter(element => {
                    return typeof element.categories["videos"] === 'object';
                })

                commit('fetchVideos', videos);
            }
        })
    }
}