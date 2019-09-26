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
                                :initValue="form.hyType"
                                :columns="['原发性','继发性','不详']"
                                @confirm="value=>{this.form.hyType=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>左侧血压（mmHg）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodLeft" placeholder="请输入左侧血压" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>右侧血压（mmHg）：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodRight" placeholder="请输入右侧血压" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">确诊医院：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.confirmHos" placeholder="请输入确诊医院" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">
                            <span class="required">*</span>确诊时间：
                        </van-col>
                        <van-col span="17">
                            <Datetime
                                :initValue="form.confirmDate"
                                placeholder="选择确诊时间"
                                @confirm="value=>{this.form.confirmDate=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">个人史：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.selfHis" placeholder="请输入个人史" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">家族史：</van-col>
                        <van-col span="17">
                            <PickerMulti
                                :initValue="form.familyHis"
                                :columns="[
																	{ text: '高血压',id:1},
																	{ text: '冠心病',id:2 },
																	{ text: '卒中',id:3 },
																	{ text: '糖尿病',id:4 },
																	{ text: '无',id:5 },
																	{ text: '不详',id:6 },
																	{ text: '拒答',id:7 },
															]"
                                placeholder="选择家族史"
                                @confirm="value=>{this.form.familyHis=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">过敏史：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.allergyHis"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.allergyHis=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row v-if="form.allergyHis=='有'">
                        <van-col span="7">
                            <span class="required">*</span>过敏药物：
                        </van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.allergyMed" placeholder="请输入过敏药物" />
                            </van-cell-group>
                        </van-col>
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
                        <van-col span="17">
                            <Picker
                                :initValue="form.brainDisease"
                                :columns="['无','缺血性卒中','脑出血','短暂性脑缺血发作（TIA）']"
                                placeholder="选择脑血管疾病"
                                @confirm="value=>{this.form.brainDisease=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">心脏疾病：</van-col>
                        <van-col span="17">
                            <Picker
                                :initValue="form.heartDisease"
                                :columns="['无','心肌梗死','心绞痛','充血性心力衰竭']"
                                placeholder="选择心脏疾病"
                                @confirm="value=>{this.form.heartDisease=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">肾脏疾病：</van-col>
                        <van-col span="17">
                            <Picker
                                :initValue="form.kidneyDisease"
                                :columns="['无','高血压肾病','肾功能衰竭']"
                                placeholder="选择肾脏疾病"
                                @confirm="value=>{this.form.kidneyDisease=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">血管疾病：</van-col>
                        <van-col span="17">
                            <Picker
                                :initValue="form.bloodDisease"
                                :columns="['无','夹层动脉瘤','症状性疾病']"
                                placeholder="选择血管疾病"
                                @confirm="value=>{this.form.bloodDisease=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">重度高血压性视网膜病变：</van-col>
                        <van-col span="17">
                            <Picker
                                :initValue="form.retinaDisease"
                                :columns="['无','有']"
                                placeholder="选择重度高血压性视网膜病变"
                                @confirm="value=>{this.form.retinaDisease=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">生活自理能力：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.selfCare"
                                :columns="['完全自理','部分自理','完全不能自理']"
                                @confirm="value=>{this.form.selfCare=value}"
                            />
                        </van-col>
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
                        <van-col span="7">吸烟情况：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.smoking"
                                :columns="['吸烟','戒烟','不吸']"
                                @confirm="value=>{this.form.smoking=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">饮酒情况：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.drinking"
                                :columns="['经常','偶尔','不饮']"
                                @confirm="value=>{this.form.drinking=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">体力活动：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.exercising"
                                :columns="['规律','偶尔','不锻炼']"
                                @confirm="value=>{this.form.exercising=value}"
                            />
                        </van-col>
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
                        <van-col span="7">身高（cm）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.height" placeholder="请输入身高" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">体重（kg）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.weight" placeholder="请输入体重" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">脉搏（次/分）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.pulse" placeholder="请输入脉搏" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">心率（次/分）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.heartRate" placeholder="请输入心率" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">左侧血压（mmHg）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.lastBloodLeft" placeholder="请输入左侧血压" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">右侧血压（mmHg）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.lastBloodRight" placeholder="请输入右侧血压" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">空腹血糖（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodSugarKf" placeholder="请输入空腹血糖" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">餐后血糖（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodSugarCh" placeholder="请输入餐后血糖" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">高密度脂蛋白胆固醇（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field
                                    v-model="form.cholesterolHight"
                                    placeholder="请输入高密度脂蛋白胆固醇"
                                />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">低密度脂蛋白胆固醇（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field
                                    v-model="form.cholesterolLow"
                                    placeholder="请输入低密度脂蛋白胆固醇"
                                />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">甘油三脂（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.gysz" placeholder="请输入甘油三脂" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">总胆固醇（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.cholesterolTotal" placeholder="请输入总胆固醇" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">视网膜病变：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.retinaFlag"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.retinaFlag=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">尿微量白蛋白（mg/dL）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.nwlbdb" placeholder="请输入尿微量白蛋白" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">神经病变：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.nerveFlag"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.nerveFlag=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">心电图检查结果：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.ecgResult" placeholder="请输入心电图检查结果" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">其他检查：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.otherResult" placeholder="请输入其他检查" />
                            </van-cell-group>
                        </van-col>
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
                        <van-col span="7">降压药：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.hypotensor"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.hypotensor=value}"
                            />
                        </van-col>
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
                        <van-col span="7">限盐饮食：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.salt"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.salt=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">体力活动：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.activity"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.activity=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">戒烟：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.quitSmoking"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.quitSmoking=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">限酒：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.limitWine"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.limitWine=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">是否终止管理：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.stopManage"
                                :columns="['是','否']"
                                @confirm="value=>{this.form.stopManage=value}"
                            />
                        </van-col>
                    </van-row>
                </div>
            </section>
            <div class="form-btn">
                <button class="submit-btn" @click="submitForm">提交</button>
                <button class="reset-btn" @click="resetForm">清空</button>
            </div>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    用药名称及用量
                    <div class="add" @click="openDialog">添加</div>
                </div>
                <div class="list">
                    <ul class="item" v-for="(item,index) in list" :key="index">
                        <li>药物名称:{{item.drugName}}</li>
                        <li>次/日:{{item.number}}</li>
                        <li>用量:{{item.usage}}</li>
                        <li>单位:{{item.company}}</li>
                        <li>操作：</li>
                    </ul>
                </div>
            </section>
        </div>
				<template v-if="showDialog">
					 <Dialog
            title="用药名称及用量"
            :show="showDialog"
            className="full"
            @handleConfirm="handleConfirm"
            @handleCancel="handleCancel"
        >
            <div slot="main" class="report-form">
                <section class="report-card">
                    <div class="con">
                        <van-row>
                            <van-col span="7">药物名称：</van-col>
                            <van-col span="17">
                                <Picker
                                    :initValue="form.drugName"
                                    :columns="['冠心病','高血压','高血脂','视网膜病变','周围神经病变','肾病','足部病变','脑卒中','冠心病(心肌梗死)']"
                                    placeholder="选择药物名称"
                                    @confirm="value=>{this.form.drugName=value}"
                                />
                            </van-col>
                        </van-row>
                        <van-row>
                            <van-col span="7">次/日：</van-col>
                            <van-col span="17">
                                <Picker
                                    :initValue="form.number"
                                    :columns="['每日一次','每日两次','每日三次','两日一次','每周一次','隔日一次']"
                                    placeholder="选择次/日"
                                    @confirm="value=>{this.form.number=value}"
                                />
                            </van-col>
                        </van-row>
                        <van-row>
                            <van-col span="7">用量：</van-col>
                            <van-col span="17">
                                <van-cell-group>
                                    <van-field v-model="form.usage" placeholder="请输入其他检查" />
                                </van-cell-group>
                            </van-col>
                        </van-row>
                        <van-row>
                            <van-col span="7">单位：</van-col>
                            <van-col span="17">
                                <van-cell-group>
                                    <van-field v-model="form.company" placeholder="请输入其他检查" />
                                </van-cell-group>
                            </van-col>
                        </van-row>
                    </div>
                </section>
            </div>
        </Dialog>

				</template>
        
    </div>
</template>

<script>
import Header from "../../../components/header"; //header
import Datetime from "../../../components/datetime"; //时间组件
import Picker from "../../../components/picker"; //选择器组件
import Radio from "../../../components/radio"; //单选组件
import PickerMulti from "../../../components/pickerMulti"; //多选，选择器组件
import Dialog from "../../../components/dialog"; //弹出框组件
export default {
    components: {
        Header,
        Datetime,
        Picker,
        Radio,
        PickerMulti,
        Dialog
    },
    data() {
        return {
            form: {
                hyType: "原发性", // 高血压类型
                bloodLeft: "", // 左侧血压
                bloodRight: "", // 右侧血压
                confirmHos: "", // 确诊医院
                confirmDate: "", //确诊时间
                selfHis: "", // 个人史
                familyHis: [5], // 家族史
                allergyHis: "无", // 过敏史
                allergyMed: "", // 过敏药物
                brainDisease: "无", // 脑血管疾病
                heartDisease: "无", // 心脏疾病
                kidneyDisease: "无", // 肾脏疾病
                bloodDisease: "无", // 肾脏疾病
                retinaDisease: "无", // 重度高血压性视网膜病变
                selfCare: "完全自理", // 生活自理能力
                smoking: "不吸", // 吸烟情况
                drinking: "不饮", // 饮酒情况
                exercising: "规律", // 锻炼情况
                height: "", // 身高
                weight: "", // 体重
                pulse: "", // 脉搏
                heartRate: "", //心率
                lastBloodLeft: "", // 左侧收缩血压
                lastBloodRight: "", // 右侧收缩血压
                bloodSugarKf: "", // 空腹血糖
                bloodSugarCh: "", // 餐后血糖
                cholesterolHight: "", // 高密度脂蛋白胆固醇
                cholesterolLow: "", // 低密度脂蛋白胆固醇
                gysz: "", // 甘油三脂
                cholesterolTotal: "", // 总胆固醇
                retinaFlag: "无", // 视网膜病变
                nwlbdb: "", // 尿微量白蛋白
                nerveFlag: "无", // 神经病变
                ecgResult: "", // 心电图检查结果
                otherResult: "", // 其他检查
                hypotensor: "使用", // 降压药
                salt: "有", // 限盐饮食
                activity: "有", // 体力活动
                quitSmoking: "有", // 戒烟
                limitWine: "有", // 限酒
								stopManage: "否", // 是否终止管理
								drugName:'', //药物名称
								number:'', //次/日
								usage:'', //用量
								company:'' //单位
            },
            showDialog: false,
            list: [
                {
                    drugName: "阿米西林",
                    number: 3,
                    usage: "200ml",
                    company: "九龙药业"
                }
            ]
        };
    },
    mounted() {},
    methods: {
        //弹出弹框框
        openDialog() {
						this.form.drugName='';
						this.form.number='';
						this.form.usage='';
						this.form.company='';
            this.showDialog = true;
        },
        //确认添加数据
        handleConfirm() {
					  this.list.push({
							drugName:this.form.drugName,
							number:this.form.number,
							usage:this.form.usage,
							company:this.form.company
						})
            this.showDialog = false;
        },
        //关闭弹出框
        handleCancel() {
            this.showDialog = false;
        },
        // 提交表单
        submitForm() {},
        // 清空表单
        resetForm() {
            this.form = {
                hyType: "原发性", // 高血压类型
                bloodLeft: "", // 左侧血压
                bloodRight: "", // 右侧血压
                confirmHos: "", // 确诊医院
                confirmDate: "", //确诊时间
                selfHis: "", // 个人史
                familyHis: [5], // 家族史
                allergyHis: "无", // 过敏史
                allergyMed: "", // 过敏药物
                brainDisease: "无", // 脑血管疾病
                heartDisease: "无", // 心脏疾病
                kidneyDisease: "无", // 肾脏疾病
                bloodDisease: "无", // 肾脏疾病
                retinaDisease: "无", // 重度高血压性视网膜病变
                selfCare: "完全自理", // 生活自理能力
                smoking: "不吸", // 吸烟情况
                drinking: "不饮", // 饮酒情况
                exercising: "规律", // 锻炼情况
                height: "", // 身高
                weight: "", // 体重
                pulse: "", // 脉搏
                heartRate: "", //心率
                lastBloodLeft: "", // 左侧收缩血压
                lastBloodRight: "", // 右侧收缩血压
                bloodSugarKf: "", // 空腹血糖
                bloodSugarCh: "", // 餐后血糖
                cholesterolHight: "", // 高密度脂蛋白胆固醇
                cholesterolLow: "", // 低密度脂蛋白胆固醇
                gysz: "", // 甘油三脂
                cholesterolTotal: "", // 总胆固醇
                retinaFlag: "无", // 视网膜病变
                nwlbdb: "", // 尿微量白蛋白
                nerveFlag: "无", // 神经病变
                ecgResult: "", // 心电图检查结果
                otherResult: "", // 其他检查
                hypotensor: "使用", // 降压药
                salt: "有", // 限盐饮食
                activity: "有", // 体力活动
                quitSmoking: "有", // 戒烟
                limitWine: "有", // 限酒
                stopManage: "否" // 是否终止管理
            };
        }
    }
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
</style>
