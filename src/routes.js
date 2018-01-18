export default [
    { path: '/', component: require('./pages/js/about.vue') },
    { path: '/videos/:subject/:page', component: require('./pages/js/videos.vue') }
]
