<template>
    <div class="main report top">
        <Header title="高血压随访" />
        <div class="report-form">
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    患病情况
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>高血压类型：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.radio"
                                :columns="[
																		{ text: '原发性',id:1},
																		{ text: '继发性',id:2 },
																		{ text: '不详',id:3 }
																]"
                                @confirm="value=>{this.form.radio=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>左侧血压（mmHg）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bpType" placeholder="请输入左侧血压" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>右侧血压（mmHg）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bpType" placeholder="请输入右侧血压" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">确诊医院：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bpType" placeholder="请输入确诊医院" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>确诊时间：
                        </van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.time"
                                placeholder="选择确诊时间"
                                @confirm="value=>{this.form.time=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">个人史：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bpType" placeholder="请输入个人史" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">家族史：</van-col>
                        <van-col span="17">
                            <!-- <Picker
                                :initValue="form.bpType"
                                :columns="[
																		{ text: '杭州',id:1},
																		{ text: '宁波',id:2 },
																		{ text: '温州',id:3 }
																]"
                                placeholder="选择家族史"
                                @confirm="value=>{this.form.bpType=value}"
                            /> -->
														<PickerMulti 
														  :initValue="form.bpType"
															:columns="[
																	{ text: '杭州',id:1},
																	{ text: '宁波',id:2 },
																	{ text: '温州',id:3 },
																	{ text: '杭州',id:4},
																	{ text: '宁波',id:5 },
																	{ text: '温州',id:6 },
																	{ text: '杭州',id:7},
																	{ text: '宁波',id:8 },
																	{ text: '温州',id:9 }
															]"
															placeholder="选择家族史"
															@confirm="value=>{this.form.bpType=value}"
														/>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">过敏史：</van-col>
                        <van-radio-group v-model="form.bpType">
                            <van-radio name="1">无</van-radio>
                            <van-radio name="2">有</van-radio>
                        </van-radio-group>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    高血压并发症情况
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">脑血管疾病：</van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    生活习惯
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">脑血管疾病：</van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    最近一次检查结果
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">脑血管疾病：</van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    近期药物治疗情况
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">脑血管疾病：</van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    近期行为治疗情况
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">脑血管疾病：</van-col>
                    </van-row>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/header"; //header
import Datetime from "../../../components/datetime"; //时间组件
import Picker from "../../../components/picker"; //选择器组件
import Radio from "../../../components/radio"; //单选组件
import PickerMulti from "../../../components/pickerMulti"; //多选，选择器组件
export default {
    components: {
        Header,
        Datetime,
        Picker,
				Radio,
				PickerMulti
    },
    data() {
        return {
            form: {
                radio: "1",
                bpType1: "",
                bpType: "1",
                time: "2010-02-02"
            },
            showPicker: false,
            showPickerTime: false,
            columns: ["1", "2", "3"]
        };
    },
    mounted() {},
    methods: {}
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
</style>
