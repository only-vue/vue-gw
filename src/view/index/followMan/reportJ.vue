<template>
    <div class="main report top">
        <Header title="精神病随访" />
        <div class="report-form">
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    一般信息
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">出生日期：</van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.birthDate"
                                placeholder="选择出生日期"
                                @confirm="value=>{this.form.birthDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>纳入管理日期：
                        </van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.manageDate"
                                placeholder="选择纳入管理日期"
                                @confirm="value=>{this.form.manageDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>监护人姓名：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.guardianName" placeholder="请输入监护人姓名" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>与患者关系：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.patientRelation" placeholder="请输入与患者关系" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>监护人地址：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.guardianAddress" placeholder="请输入监护人地址" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>监护人电话：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.guardianPhone" placeholder="请输入监护人电话" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">辖区村(居)委会联系人、电话：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field
                                    v-model="form.committeeContact"
                                    placeholder="请输入辖区村(居)委会联系人、电话"
                                />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">户别：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.householdCategory"
                                :columns="['城镇','农村']"
                                @confirm="value=>{this.form.householdCategory=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">就业情况：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.employmentsStatus"
                                :columns="['在岗工人','在岗管理者','农民','下岗或无业','在校学生','退休','专业技术人员','其他','不详']"
                                @confirm="value=>{this.form.employmentsStatus=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">知情同意：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.informedConsent"
                                :columns="['同意参加管理','不同意参加管理']"
                                @confirm="value=>{this.form.informedConsent=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">签字：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.signature" placeholder="请输入签字" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>签字时间：
                        </van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.signatureDate"
                                placeholder="选择签字时间"
                                @confirm="value=>{this.form.signatureDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>初次发病时间：
                        </van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.attackDate"
                                placeholder="选择初次发病时间"
                                @confirm="value=>{this.form.attackDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">既往主要症状：</van-col>
                        <van-col span="17">
                            <PickerMulti
                                :initValue="form.symptomPast"
                                :columns="[
																	{ text: '幻觉',id:'幻觉'},
																	{ text: '交流困难',id:'交流困难' },
																	{ text: '猜疑',id:'猜疑' },
																	{ text: '喜怒无常',id:'喜怒无常' },
																	{ text: '行为怪异',id:'行为怪异' },
																	{ text: '兴奋话多',id:'兴奋话多' },
																	{ text: '伤人毁物',id:'伤人毁物' },
																	{ text: '悲观厌世',id:'悲观厌世'},
																	{ text: '无故外走',id:'无故外走' },
																	{ text: '自语自笑',id:'自语自笑' },
																	{ text: '孤僻懒散',id:'孤僻懒散' },
																	{ text: '其他',id:'其他' },
															]"
                                placeholder="选择既往主要症状"
                                @confirm="value=>{this.form.symptomPast=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row v-if="form.symptomPast.indexOf('其他')!=-1">
                        <van-col span="7">
                            <span class="required">*</span>其他：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.symptomPastOther" placeholder="请输入其他症状" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>既往关锁情况：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.shutcasePast"
                                :columns="['无关锁','关锁','关锁已解除']"
                                @confirm="value=>{this.form.shutcasePast=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>既往治疗情况-门诊：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.treatmentOutpatient"
                                :columns="['未治','间断门诊治疗','连续门诊治疗']"
                                @confirm="value=>{this.form.treatmentOutpatient=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>首次抗精神病药治疗时间：
                        </van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.treatmentDate"
                                placeholder="选择首次抗精神病药治疗时间"
                                @confirm="value=>{this.form.treatmentDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">既往治疗情况-住院（次）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field
                                    v-model="form.treatmentHospital"
                                    placeholder="请输入既往治疗情况-住院"
                                />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">目前诊断：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.diagnosisCurrent" placeholder="请输入目前诊断" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">确诊医院：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.diagnosisHospital" placeholder="请输入确诊医院" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">确诊日期：</van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.diagnosisDate"
                                placeholder="选择确诊日期"
                                @confirm="value=>{this.form.diagnosisDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">最近一次治疗效果：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.treatmentEffect"
                                :columns="['痊愈','好转','无变化','加重']"
                                @confirm="value=>{this.form.treatmentEffect=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>危险行为：
                        </van-col>
                        <van-col span="17">
                            <PickerMulti
                                :initValue="form.dangerousBehavior"
                                :columns="[
																	{ text: '轻度滋事',id:'轻度滋事'},
																	{ text: '肇事',id:'肇事' },
																	{ text: '肇祸',id:'肇祸' },
																	{ text: '其他危害行为',id:'其他危害行为' },
																	{ text: '自伤',id:'自伤' },
																	{ text: '自杀未遂',id:'自杀未遂' },
																	{ text: '无',id:'无' },
															]"
                                placeholder="选择危险行为"
                                @confirm="value=>{this.form.dangerousBehavior=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row v-if="form.dangerousBehavior.indexOf('轻度滋事')!=-1">
                        <van-col span="7">
                            <span class="required">*</span>轻度滋事（次）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.mildDisturbances" placeholder="请输入轻度滋事次数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row v-if="form.dangerousBehavior.indexOf('肇事')!=-1">
                        <van-col span="7">
                            <span class="required">*</span>肇事（次）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.causeTrouble" placeholder="请输入肇事次数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row v-if="form.dangerousBehavior.indexOf('肇祸')!=-1">
                        <van-col span="7">
                            <span class="required">*</span>肇祸（次）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.causeAccident" placeholder="请输入肇祸次数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row v-if="form.dangerousBehavior.indexOf('其他危害行为')!=-1">
                        <van-col span="7">
                            <span class="required">*</span>其他危害行为（次）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.behaviorOther" placeholder="请输入其他危害行为次数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row v-if="form.dangerousBehavior.indexOf('自伤')!=-1">
                        <van-col span="7">
                            <span class="required">*</span>自伤（次）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.autolesion" placeholder="请输入自伤次数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row v-if="form.dangerousBehavior.indexOf('自杀未遂')!=-1">
                        <van-col span="7">
                            <span class="required">*</span>自杀未遂（次）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.attemptedSuicide" placeholder="请输入自杀未遂次数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">经济状况：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.economicPosition"
                                :columns="['贫困，在当地贫困线标准以下','非贫困','不详']"
                                @confirm="value=>{this.form.economicPosition=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">专科医生的建议(如果有请记录)：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field
                                    v-model="form.doctorAdvice"
                                    placeholder="请输入专科医生的建议(如果有请记录)"
                                />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">填表日期：</van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.filingDate"
                                placeholder="选择填表日期"
                                @confirm="value=>{this.form.filingDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">医生签字：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.doctorSignature" placeholder="请输入医生签字" />
                            </van-cell-group>
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
                birthDate: "", //出生日期
                manageDate: "", //纳入管理日期
                guardianName: "", //监护人姓名
                patientRelation: "", //与患者关系
                guardianAddress: "", //监护人地址
                guardianPhone: "", //监护人电话
                committeeContact: "", //辖区村(居)委会联系人、电话
                householdCategory: "", //户别
                employmentsStatus: "", //就业情况
                informedConsent: "", //知情同意
                signature: "", //签字
                signatureDate: "", //签字时间
                attackDate: "", //初次发病时间
                symptomPast: [], // 既往主要症状
                symptomPastOther: "", // 既往主要症状-其他
                shutcasePast: "", // 既往关锁情况
                treatmentOutpatient: "", // 既往治疗情况-门诊
                treatmentDate: "", // 首次抗精神病药治疗时间
                treatmentHospital: "", // 既往治疗情况-住院
                diagnosisCurrent: "", // 目前诊断情况-诊断
                diagnosisHospital: "", // 目前诊断情况-确诊医院
                diagnosisDate: "", // 目前诊断情况-确诊日期
                treatmentEffect: "", // 最近一次治疗效果
                dangerousBehavior: [], // 危险行为
                mildDisturbances: "1", // 危险行为-轻度滋事
                causeTrouble: "1", // 危险行为-肇事
                causeAccident: "1", // 危险行为-肇祸
                behaviorOther: "1", // 危险行为-其他危害行为
                autolesion: "1", // 危险行为-自伤
                attemptedSuicide: "1", // 危险行为-自杀未遂
                economicPosition: "", // 经济状况
                doctorAdvice: "", // 专科医生的意见
                filingDate: "", // 填表日期
                doctorSignature: "" // 医生签字
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
                birthDate: "", //出生日期
                manageDate: "", //纳入管理日期
                guardianName: "", //监护人姓名
                patientRelation: "", //与患者关系
                guardianAddress: "", //监护人地址
                guardianPhone: "", //监护人电话
                committeeContact: "", //辖区村(居)委会联系人、电话
                householdCategory: "", //户别
                employmentsStatus: "", //就业情况
                informedConsent: "", //知情同意
                signature: "", //签字
                signatureDate: "", //签字时间
                attackDate: "", //初次发病时间
                symptomPast: [], // 既往主要症状
                symptomPastOther: "", // 既往主要症状-其他
                shutcasePast: "", // 既往关锁情况
                treatmentOutpatient: "", // 既往治疗情况-门诊
                treatmentDate: "", // 首次抗精神病药治疗时间
                treatmentHospital: "", // 既往治疗情况-住院
                diagnosisCurrent: "", // 目前诊断情况-诊断
                diagnosisHospital: "", // 目前诊断情况-确诊医院
                diagnosisDate: "", // 目前诊断情况-确诊日期
                treatmentEffect: "", // 最近一次治疗效果
                dangerousBehavior: [], // 危险行为
                mildDisturbances: "1", // 危险行为-轻度滋事
                causeTrouble: "1", // 危险行为-肇事
                causeAccident: "1", // 危险行为-肇祸
                behaviorOther: "1", // 危险行为-其他危害行为
                autolesion: "1", // 危险行为-自伤
                attemptedSuicide: "1", // 危险行为-自杀未遂
                economicPosition: "", // 经济状况
                doctorAdvice: "", // 专科医生的意见
                filingDate: "", // 填表日期
                doctorSignature: "" // 医生签字
            };
        }
    }
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
</style>
