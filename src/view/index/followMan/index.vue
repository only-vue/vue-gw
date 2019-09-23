<template>
    <div class="main follow-warp top">
        <Header title="随访管理">
            <div slot="main" class="right-warp">
                <div class="op-check" @click="onCheck">
                    <div :class="['icon',isCheck&&'checked']"></div>待随访
                </div>
                <div class="op-search" @click="onSearch">
                    <img src="../../../assets/images/icon/search.png" />
                </div>
            </div>
        </Header>
        <div class="follow-list">
            <router-link
                to="/followMan/reportG"
                class="item"
                v-for="(item,index) in list"
                :key="index"
            >
                <div class="user">
                    <li class="icon">
                        <img :src="item.icon" />
                    </li>
                    <li class="content">
                        {{item.name}}
                        <span class="sex">{{item.sex}}</span>
                        <span class="age">{{item.age}}岁</span>
                    </li>
                </div>
                <div class="other">
                    <p>身份证号：{{item.idCard}}</p>
                    <p>档案编号：{{item.filesId}}</p>
                    <p>地址：{{item.address}}</p>
                </div>
                <div class="identity">
                    <li class="l">老</li>
                    <li class="g">高</li>
                    <li class="t">糖</li>
                </div>
            </router-link>
        </div>

        <Dialog title="搜索条件" :show="isSearch" @handleConfirm="handleConfirm" @handleCancel="handleCancel">
            <div slot="main">
                <input placeholder="请输入搜索内容" />
            </div>
        </Dialog>
    </div>
</template>

<script>
import Header from "../../../components/header"; //首页
import Dialog from "../../../components/dialog"; //首页
export default {
    components: {
        Header,
        Dialog
    },
    data() {
        return {
            isCheck: false,
            isSearch: false,
            list: [
                {
                    icon: require("../../../assets/images/user/admin.jpg"),
                    name: "雷付民",
                    sex: "男",
                    age: "38",
                    idCard: "132124195407082125",
                    filesId: "20190522072622",
                    address: "邱县古城乡巴旦村辖组"
                },
                {
                    icon: require("../../../assets/images/user/admin2.jpg"),
                    name: "聂少梅",
                    sex: "女",
                    age: "27",
                    idCard: "132124195407082125",
                    filesId: "20190522072622",
                    address: "邱县古城乡巴旦村辖组"
                },
                {
                    icon: require("../../../assets/images/user/admin3.jpg"),
                    name: "刘秀兰",
                    sex: "女",
                    age: "32",
                    idCard: "132124195407082125",
                    filesId: "20190522072622",
                    address: "邱县古城乡巴旦村辖组"
                }
            ]
        };
    },
    mounted() {},
    methods: {
        //是否选中待随访
        onCheck() {
            this.isCheck = !this.isCheck;
        },
        //弹出搜索弹框
        onSearch() {
            this.isSearch = true;
        },
        //点击搜索确认
        handleConfirm() {
            this.isSearch = false;
				},
				//点击搜索取消
				handleCancel(){
					 this.isSearch = false;
				}
    }
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
</style>
