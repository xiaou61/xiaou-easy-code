<template>
    <el-row :gutter="30">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" v-for="(cardObj,index) in cardArr" :key="index" style="margin-top:20px;height:100px;width:100%;overflow:auto;">
            <!-- <el-link class="link-style" :underline="false" target="_blank" :href="cardObj.url" > -->
                <!-- <el-card class="box-card" shadow="always" :body-style="{ padding:'5px' }" > -->
                <el-card shadow="never" :body-style="{ padding:'20px' }">
                    <el-row class="box-card-header">
                        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="padding:0px;">
                            <img style="width:30px;height:30px;text-align:left;" :src="$withBase(cardObj.icon)" :alt="cardObj.title"/>
                        </el-col>
                        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="padding:0px;">
                            <div style="text-align:right;">
                                <el-tooltip effect="dark" :content="cardObj.desc" placement="bottom">
                                    <el-button :type="type" plain @click.native="gotoSite(cardObj.url)">{{cardObj.title}}</el-button>    
                                </el-tooltip>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="box-card-body">
                        <div style="font-size:10px;color:#999999">{{cardObj.desc}}</div>
                    </el-row>
                </el-card>
            <!-- </el-link> -->
        </el-col>
    </el-row>
</template>


<script>
    export default {
        name: "NavCard",
        components: {},
        props:{
            arr:{
                type:String,
                default:''
            }
        },
        data() {
            return {
                cardArr:JSON.parse(this.arr),
                type:'success',
            }
        },
        methods: {
            gotoSite(url) {
                // console.log(url);
                // 在新标签页打开
                window.open(url, '_blank').location;
            },
        },
    }
</script>


<style>
.link-style{
    width:100%;
    height:100%;
    padding:0px;
}
.box-card {
  width: 100%;
  height:100%;
}
.box-card-header{
    width:100%;
    height:50%;
    margin-bottom:1px;
    padding:0px;
}
.box-card-body{
    width:100%;
    height:50%;
    margin-top:1px;
    padding:0px;
}
.el-card{
    border-radius: 10px;
    border:none;
    background-color: #F6F6F6;
    /* box-shadow: 0px 1px 5px 4px #0000001a; */
}
.el-card:hover{
    /* transform: scale(1.03); */
    boder-top:none;
    background-color: #FDF853;
}
</style>