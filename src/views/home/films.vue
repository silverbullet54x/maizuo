<template>
    <div class="page-home-films">
        <Banner :list="bannerList" pagination loop/>
        <h1>电影列表</h1>
    </div>
</template>
<script>
import Banner from "@/components/Banner";
import { mapState,mapActions } from "vuex";
export default {
    name:'films',
    components:{
        Banner
    },

    computed:{
        ...mapState("film",["bannerList"])
    },

    methods: {
        ...mapActions('film',["getBannerList"])
    },
    created (){
        this.getBannerList();
    }
};
</script>
