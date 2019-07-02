import Axios from "axios";

const state = {
    bannerList : [],
};
const getters = {};

const mutations = {
    setBannerList(state,payload){
        state.bannerList = payload.list;
    }
}

const actions = {
    getBannerList({ commit }){
        Axios
        .get("https://m.maizuo.com/gateway?type=2&cityId=110100&k=9076154",{
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156179337110479720203493"}',
                'X-Host' : 'mall.cfg.common-banner'
            }
        })
        .then( response => {
            let res = response.data;
            if(res.status === 0){
                commit({
                    type:'setBannerList',
                    list: res.data
                })
            }else{
                alert(res.msg);
            }
        })
    
    }
}
export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}