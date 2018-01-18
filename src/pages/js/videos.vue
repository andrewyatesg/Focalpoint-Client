<style src="../styles/videos.css"></style>
<template src="../templates/videos.html"></template>
<script>
    import VLink from '../../components/VLink.vue'
    import MainLayout from '../../layouts/Main.vue'

    export default {
        data() {
            return {
                display: 'Videos',
                headerType: 'header-one',
                footerType: 'footer-one',
                videos: [],
                subject: '',
                page: 1
            }
        },
        components: {
            MainLayout,
            VLink
        },
        created() {
            let vm = this;

            vm.updateVideos(vm.$route.params.subject, vm.$route.params.page);
        },
        beforeRouteUpdate (to, from, next) {
            let vm = this;
            vm.updateVideos(to.params.subject, to.params.page);
            next();
        },
        computed: {
            previousPage() {
                return this.page - 1;
            },
            nextPage() {
                return this.page + 1;
            }
        },
        methods: {
            updateVideos(subject, page) {
                let vm = this;

                vm.subject = subject;
                vm.page = Number(page);

                let num = _const.videos.num;
                let offset = (page - 1) * num;

                _api.videos({ subject: subject }, 'PUBLIC', offset, num, function (err, res)
                {
                    if (err)
                    {
                        vm.videos = [];
                    }
                    else if (res.data)
                    {
                        vm.videos = res.data;
                    }
                });
            }
        }
    }
</script>
