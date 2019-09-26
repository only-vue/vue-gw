<template>
    <div class="main report top">
        <Header title="肺结核随访" />
        <div class="report-form">
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    一般信息
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>随访日期：
                        </van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.followupDate"
                                placeholder="选择随访日期"
                                @confirm="value=>{this.form.followupDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>随访方式：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.followupType"
                                :columns="['门诊','家庭']"
                                @confirm="value=>{this.form.followupType=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>患者类型：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.sufType"
                                :columns="['初治','复治']"
                                @confirm="value=>{this.form.sufType=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">痰菌情况：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.tjState"
                                :columns="['阳性','阴性','未查痰']"
                                @confirm="value=>{this.form.tjState=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">耐药情况：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.drugState"
                                :columns="['耐药','非耐药','未检测']"
                                @confirm="value=>{this.form.drugState=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>症状及体征：
                        </van-col>
                        <van-col span="17">
                            <Picker
                                :initValue="form.symptom"
                                :columns="['无症状','咳嗽咳痰','低热盗汗','咯血或血痰','胸痛消瘦','头痛失眠','视物模糊','皮肤瘙痒、皮疹','耳鸣、听力下降','其他']"
                                placeholder="选择症状及体征"
                                @confirm="value=>{this.form.symptom=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row v-if="form.symptom=='其他'">
                        <van-col span="7">
                            <span class="required">*</span>其他：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.symptomOther" placeholder="请输入其他症状及体征" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    用药
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">化疗方案：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.mdt" placeholder="请输入化疗方案" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>用法：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.usefor"
                                :columns="['每日','间歇']"
                                @confirm="value=>{this.form.usefor=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">药品剂量型：</van-col>
                        <van-col span="17">
                            <Picker
                                :initValue="form.drugType"
                                :columns="['固定剂量复合制剂','散装药','板式组合药','注射剂']"
                                placeholder="选择药品剂量型"
                                @confirm="value=>{this.form.drugType=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">督导人员选择：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.supervisory"
                                :columns="['医生','家属','自服药','其他']"
                                @confirm="value=>{this.form.supervisory=value}"
                            />
                        </van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    环境评估
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">单独的居室：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.bedroom"
                                :columns="['有','无']"
                                @confirm="value=>{this.form.bedroom=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">通风情况：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.usefor"
                                :columns="['良好','一般','差']"
                                @confirm="value=>{this.form.usefor=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">日吸烟量（支）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.smoking" placeholder="请输入日吸烟量" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">目标吸烟量（支）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.aimSmoking" placeholder="请输入目标吸烟量" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">饮酒量（两）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.drinking" placeholder="请输入饮酒量" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">目标饮酒量（两）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.aimDrinking" placeholder="请输入目标饮酒量" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    健康教育及培训
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">取药地点：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.recipeAddress" placeholder="请输入取药地点" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">取药时间：</van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.recipeDate"
                                placeholder="选择取药时间"
                                @confirm="value=>{this.form.recipeDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">服药记录卡的填写：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.card"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.card=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">服药方法及药品存放：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.deposit"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.deposit=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>肺结核治疗疗程：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.course"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.course=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">不规律服药危害：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.harm"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.harm=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">服药后不良反应及处理：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.handle"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.handle=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">治疗期间复诊查痰：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.visit"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.visit=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">外出期间如何坚持服药：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.outside"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.outside=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">生活习惯及注意事项：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.habits"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.habits=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">密切接触者检查：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.inspect"
                                :columns="['掌握','未掌握']"
                                @confirm="value=>{this.form.inspect=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">下次随访日期：</van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.nextFollowDate"
                                placeholder="选择下次随访日期"
                                @confirm="value=>{this.form.nextFollowDate=value}"
                            />
                        </van-col>
                    </van-row>
                </div>
            </section>
            <div class="form-btn">
                <button class="submit-btn" @click="submitForm">提交</button>
                <button class="reset-btn" @click="resetForm">清空</button>
            </div>
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
                followupDate: "", //随访日期
                followupType: "门诊", //随访方式
                sufType: "初治", //患者类型
                tjState: "阳性", //痰菌情况
                drugState: "耐药", //耐药情况
                symptom: "咳嗽咳痰", //症状及体征
                symptomOther: "", // 其他症状及体征
                mdt: "", // 化疗方案
                usefor: "每日", // 用法
                drugType: "固定剂量复合制剂", // 药品剂量型
                supervisory: "医生", // 督导员选择
                bedroom: "有", // 单独的居室
                aeration: "良好", //通风情况
                smoking: "", // 日吸烟量
                aimSmoking: "", // 目标吸烟量
                drinking: "", // 饮酒量
                aimDrinking: "", // 目标饮酒量
                recipeAddress: "", // 取药地点
                recipeDate: "", // 取药时间
                card: "掌握", // 服药记录卡的填写
                deposit: "掌握", // 服药方法及药品存放
                course: "掌握", // 肺结核治疗疗程
                harm: "掌握", // 不规律服药危害
                handle: "掌握", // 服药后不良反应及处理
                visit: "掌握", // 治疗期间复诊查痰
                outside: "掌握", // 外出期间如何坚持服药
                habits: "掌握", // 生活习惯及注意事项
                inspect: "掌握", // 密切接触者检查
                nextFollowDate: "" // 下次随访时间
            }
        };
    },
    mounted() {},
    methods: {
        // 提交表单
        submitForm() {},
        // 清空表单
        resetForm() {
            this.form = {
                followupDate: "", //随访日期
                followupType: "门诊", //随访方式
                sufType: "初治", //患者类型
                tjState: "阳性", //痰菌情况
                drugState: "耐药", //耐药情况
                symptom: "咳嗽咳痰", //症状及体征
                symptomOther: "", // 其他症状及体征
                mdt: "", // 化疗方案
                usefor: "每日", // 用法
                drugType: "固定剂量复合制剂", // 药品剂量型
                supervisory: "医生", // 督导员选择
                bedroom: "有", // 单独的居室
                aeration: "良好", //通风情况
                smoking: "", // 日吸烟量
                aimSmoking: "", // 目标吸烟量
                drinking: "", // 饮酒量
                aimDrinking: "", // 目标饮酒量
                recipeAddress: "", // 取药地点
                recipeDate: "", // 取药时间
                card: "掌握", // 服药记录卡的填写
                deposit: "掌握", // 服药方法及药品存放
                course: "掌握", // 肺结核治疗疗程
                harm: "掌握", // 不规律服药危害
                handle: "掌握", // 服药后不良反应及处理
                visit: "掌握", // 治疗期间复诊查痰
                outside: "掌握", // 外出期间如何坚持服药
                habits: "掌握", // 生活习惯及注意事项
                inspect: "掌握", // 密切接触者检查
                nextFollowDate: "" // 下次随访时间
            };
        }
    }
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
</style>
