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
                            <van-radio-group v-model="form.bpType">
                                <van-radio name="1">原发性</van-radio>
                                <van-radio name="2">继发性</van-radio>
                                <van-radio name="3">不详</van-radio>
                            </van-radio-group>
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
                            <van-field
                                readonly
                                clickable
                                :value="form.time"
                                placeholder="选择确诊时间"
                                @click="showPickerTime = true"
                            />
                            <van-popup v-model="showPickerTime" position="bottom">
                                <van-datetime-picker
                                    v-model="form.time"
                                    type="date"
                                    @cancel="showPickerTime = false"
                                    @confirm="onConfirmTime"
                                />
                            </van-popup>
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
                            <van-field
                                readonly
                                clickable
                                :value="form.bpType"
                                placeholder="选择家族史"
                                @click="showPicker = true"
                            />
                            <van-popup v-model="showPicker" position="bottom">
                                <van-picker
                                    show-toolbar
                                    :columns="columns"
                                    @cancel="showPicker = false"
                                    @confirm="onConfirm"
                                />
                            </van-popup>
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
import Header from "../../../components/header"; //首页
export default {
    components: {
        Header
    },
    data() {
        return {
            form: {
                bpType: "1",
                time: ''
            },
            showPicker: false,
            showPickerTime: false,
            columns: ["1", "2", "3"]
        };
    },
    mounted() {},
    methods: {
        onConfirm(value) {
            this.form.bpType = value;
            this.showPicker = false;
        },
        onConfirmTime(value) {
            this.form.time = this.FmtDate(value, "date");
            this.showPickerTime = false;
        }
    }
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
@import "../../../assets/css/app/index.less";
</style>
