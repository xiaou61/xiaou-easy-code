<template>
    <el-tabs tab-position="left" style="height: 600px">
        <!-- 标签页 -->
        <el-tab-pane v-for="(i,index) in quickNav" :label="i.category" :key="index">
            <!-- 使用珊格操作 -->
            <el-scrollbar height="600px">
                <el-row :gutter="10" v-for="(j,index) in Math.ceil(i.items.length/2)" :key="index"
                    style="margin-bottom:10px;">

                    <!-- 
                    0-（0、1）-（i*2,i*2+1）
                    1-（2、3）-（i*2,i*2+1）
                    2-（4、5）-（i*2,i*2+1）
                 -->

                    <el-col :span="12" v-if="i.items[index*2]!=null">
                        <el-card shadow="hover" style="border-radius: 10px"
                            @click.native="gotoSite(i.items[index*2].src)">

                            {{i.items[index*2].isPerfect?i.items[index*2].title+"⚡️":i.items[index*2].title}}
                        </el-card>
                    </el-col>
                    <el-col :span="12" v-if="i.items[index*2+1]!=null">
                        <el-card shadow="hover" style="border-radius: 10px"
                            @click.native="gotoSite(i.items[index*2+1].src)">
                            {{i.items[index*2+1].isPerfect?i.items[index*2+1].title+"⚡️":i.items[index*2+1].title}}
                        </el-card>
                    </el-col>
                </el-row>

            </el-scrollbar>

        </el-tab-pane>

    </el-tabs>
</template>
<script>
// 引入Element支持的图标
// import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
export default {
    data() {
        return {
            quickNav: [
                {
                    "category": "搜索引擎",
                    "items": [
                        {
                            "title": "百度",
                            "src": "https://www.baidu.com/",
                            "isPerfect": false
                        },
                        {
                            "title": "必应",
                            "src": "https://cn.bing.com/",
                            "isPerfect": true
                        },

                    ]
                },
                {
                    "category": "开源社区",
                    "items": [
                        {
                            "title": "Dromara",
                            "src": "https://gitee.com/dromara",
                            "isPerfect": true
                        },
                        {
                            "title": "OSRC-开源运行时社区",
                            "src": "https://www.osrc.com/",
                            "isPerfect": true
                        },
                        {
                            "title": "Doocs开源社区",
                            "src": "https://doocs.gitee.io/#/README_CN",
                            "isPerfect": true
                        },
                    ]
                },
                {
                    "category": "优质博客",
                    "items": [
                        {
                            "title": "Road2Coding",
                            "src": "https://r2coding.com/#/",
                            "isPerfect": true
                        },
                        {
                            "title": "大都督的技术博客",
                            "src": "https://www.yuque.com/renyong-jmovm/dadudu",
                            "isPerfect": true
                        },
                        {
                            "title": "Gitstar Ranking",
                            "src": "https://gitstar-ranking.com/",
                            "isPerfect": true
                        },
                        {
                            "title": "JeeWeiXin",
                            "src": "https://jeeweixin.com/",
                            "isPerfect": true
                        },
                        {
                            "title": "徐靖峰的博客",
                            "src": "https://www.cnkirito.moe/",
                            "isPerfect": true
                        },
                        {
                            "title": "芋道源码",
                            "src": "https://www.iocoder.cn/",
                            "isPerfect": true
                        },
                        {
                            "title": "虫洞栈",
                            "src": "https://bugstack.cn/",
                            "isPerfect": false
                        },
                        {
                            "title": "全栈知识体系",
                            "src": "https://www.pdai.tech/",
                            "isPerfect": true
                        },
                        {
                            "title": "程序猿DD",
                            "src": "https://blog.didispace.com/",
                            "isPerfect": true
                        },
                        {
                            "title": "LABULADONG",
                            "src": "https://labuladong.gitee.io/algo/",
                            "isPerfect": true
                        },
                    ]
                },
                {
                    "category": "其他导航",
                    "items": [
                        {
                            "title": "MyOctoCat",
                            "src": "https://myoctocat.com/",
                            "isPerfect": true
                        },
                        {
                            "title": "LeetCode",
                            "src": "https://leetcode.cn/",
                            "isPerfect": true
                        },
                        {
                            "title": "Jar包下载",
                            "src": "https://search.maven.org/",
                            "isPerfect": true
                        },
                        {
                            "title": "ghelper",
                            "src": "http://ghelper.net/",
                            "isPerfect": true
                        },
                        {
                            "title": "Maven仓库",
                            "src": "https://mvnrepository.com/",
                            "isPerfect": true
                        },
                    ]
                },

            ]

        }
    },
    methods: {
        gotoSite(url) {
            // console.log(url);
            // 在新标签页打开
            window.open(url, '_blank').location;
        }
    },

}

</script>


<style scoped>
.el-card /deep/ .el-card__body {
    /* 卡片样式 */
    padding: 10px;
    background-color: rgba(191, 119, 32, 0.241);
    font-family: 'Wawati SC'
}
</style>

