<template>
    <div class="main report top">
        <Header title="糖尿病随访" />
        <div class="report-form">
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    一般信息
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">定点医疗单位：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.units" placeholder="请输入定点医疗单位" />
                            </van-cell-group>
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
                        <van-col span="7">现病史：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.nowfHis" placeholder="请输入现病史" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">糖尿病家族史：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.familyfHis" placeholder="请输入糖尿病家族史" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">过敏史：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.allergyfHis" placeholder="请输入过敏史" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">确诊单位：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.confirmHos" placeholder="请输入确诊单位" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">
                            <span class="required">*</span>确诊方式：
                        </van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.confirmType"
                                :columns="['门诊','临床','其他']"
                                @confirm="value=>{this.form.confirmType=value}"
                            />
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
                        <van-col span="7">高血压：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.hyperten"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.hyperten=value}"
                            />
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
                        <van-col span="7">糖尿病足：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.diabeticFoot"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.diabeticFoot=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">糖尿病肾病：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.kidneyDisease"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.kidneyDisease=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">糖尿病神经病变：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.nerveFlag"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.nerveFlag=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">高血脂：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.hyperlipidemia"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.hyperlipidemia=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">冠心病：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.coronaryDisease"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.coronaryDisease=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">脑卒中：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.apoplexy"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.apoplexy=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">既往空腹血糖（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodSugarKfJw" placeholder="请输入既往空腹血糖" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">既往餐后2小时血糖（mmol/L）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodSugarChJw" placeholder="请输入既往餐后2小时血糖" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">既往糖化血红蛋白（%）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodSugarDbJw" placeholder="请输入既往糖化血红蛋白" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">吸烟：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.smoking"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.smoking=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row v-if="form.smoking=='有'">
                        <van-col span="7"><span class="required">*</span>平均每日（支）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.smokingDay" placeholder="请输入平均每日吸烟" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">饮酒：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.drinking"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.drinking=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row v-if="form.drinking=='有'">
                        <van-col span="7"><span class="required">*</span>平均每日（两）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.drinkingDay" placeholder="请输入平均每日饮酒" />
                            </van-cell-group>
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
                        <van-col span="7">体质指数（kg/㎡）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bmi" placeholder="请输入体质指数" />
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
                        <van-col span="7">糖化血红蛋白（%）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.bloodSugarDb" placeholder="请输入糖化血红蛋白" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">血压左侧（mmHg）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.lastBloodLeft" placeholder="请输入血压左侧" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">血压右侧（mmHg）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.lastBloodRight" placeholder="请输入血压右侧" />
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
                        <van-col span="7">总胆固醇：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.cholesterolTotal"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.cholesterolTotal=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">高密度脂蛋白胆固醇：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.cholesterolHight"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.cholesterolHight=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">低密度脂蛋白胆固醇：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.cholesterolLow"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.cholesterolLow=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">糖尿病足：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.diabeticFootLast"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.diabeticFootLast=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">尿微量白蛋白：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.nwlbdb"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.nwlbdb=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">视网膜病变：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.retinaFlagLast"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.retinaFlagLast=value}"
                            />
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col span="7">神经病变：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.nerveFlagLast"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.nerveFlagLast=value}"
                            />
                        </van-col>
                    </van-row>
                </div>
            </section>
            <section class="report-card">
                <div class="title">
                    <img src="../../../assets/images/icon/i.png" />
                    近期治疗情况
                </div>
                <div class="con">
                    <van-row>
                        <van-col span="7">饮食控制：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.diet"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.diet=value}"
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
										<van-row v-if="form.activity=='有'">
                        <van-col span="7"><span class="required">*</span>每周（次）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.motionWeek" placeholder="请输入每周运动次数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row v-if="form.activity=='有'">
                        <van-col span="7"><span class="required">*</span>每次（分钟）：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.motionMinute" placeholder="请输入每次运动分钟数" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">口服降糖药：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.diabetes"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.diabetes=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row>
                        <van-col span="7">胰岛素：</van-col>
                        <van-col span="17">
                            <Radio
                                :initValue="form.insulin"
                                :columns="['无','有']"
                                @confirm="value=>{this.form.insulin=value}"
                            />
                        </van-col>
                    </van-row>
										<van-row v-if="form.insulin=='有'">
                        <van-col span="7"><span class="required">*</span>胰岛素种类：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.insulinType" placeholder="请输入胰岛素种类" />
                            </van-cell-group>
                        </van-col>
                    </van-row>
										<van-row v-if="form.insulin=='有'">
                        <van-col span="7"><span class="required">*</span>胰岛素用法及用量：</van-col>
                        <van-col span="17">
                            <van-cell-group>
                                <van-field v-model="form.insulinUse" placeholder="请输入胰岛素用法及用量" />
                            </van-cell-group>
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
                class="full"
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
								units: "", // 医疗定点单位
								selfHis: "", // 个人史
								nowHis: '', // 现病史
								familyHis: "", // 家族史
								allergyHis: "", // 过敏史
								confirmHos: "", // 确诊单位
								confirmType: "门诊", // 确诊方式
								confirmDate: "", //确诊时间
								hyperten: "无", // 高血压
								retinaFlag: "无", // 视网膜病变
								diabeticFoot: "无", // 糖尿病足
								kidneyDisease: "无", // 糖尿病肾病
								nerveFlag: "无", // 糖尿病神经病变
								hyperlipidemia: "无", // 高血脂
								coronaryDisease: "无", // 冠心病
								apoplexy: "无", // 脑卒中
								bloodSugarKfJw: "", // 既往空腹血糖
								bloodSugarChJw: "", // 既往餐后2小时血糖
								bloodSugarDbJw: "", // 既往糖化血红蛋白
								smoking: "无", // 吸烟情况
								smokingDay: "", // 吸烟日均
								drinking: "无", // 饮酒情况
								drinkingDay: "", // 饮酒日均
								height: "", // 身高
								weight: "", // 体重
								bmi: '', // 体质指数
								bloodSugarKf: "", // 空腹血糖
								bloodSugarCh: "", // 餐后血糖
								bloodSugarDb: "", // 糖化血红蛋白
								lastBloodLeft: "", // 左侧收缩血压
								lastBloodRight: "", // 右侧收缩血压
								gysz: "", // 甘油三脂
								cholesterolTotal: "无", // 总胆固醇
								cholesterolHight: "无", // 高密度脂蛋白胆固醇
								cholesterolLow: "无", // 低密度脂蛋白胆固醇
								diabeticFootLast: "无", // 糖尿病足
								nwlbdb: "无", // 尿微量白蛋白
								retinaFlagLast: "无", // 视网膜病变
								nerveFlagLast: "无", // 神经病变
                diet: "无", // 饮食控制
								activity: "无", // 体力活动
								motionWeek: '',  // 每周运动
								motionMinute: '',  // 每次运动
								diabetes: "无", // 口服降糖药
								insulin: "无", // 胰岛素
								insulinType: "", // 胰岛素种类
								insulinUse: "", // 胰岛素用量
								quitSmoking: "无", // 戒烟
                limitWine: "无", // 限酒
                stopManage: "否", // 是否终止管理
                drugName: "", //药物名称
                number: "", //次/日
                usage: "", //用量
                company: "" //单位
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
            this.form.drugName = "";
            this.form.number = "";
            this.form.usage = "";
            this.form.company = "";
            this.showDialog = true;
        },
        //确认添加数据
        handleConfirm() {
            this.list.push({
                drugName: this.form.drugName,
                number: this.form.number,
                usage: this.form.usage,
                company: this.form.company
            });
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
                units: "", // 医疗定点单位
								selfHis: "", // 个人史
								nowHis: '', // 现病史
								familyHis: "", // 家族史
								allergyHis: "", // 过敏史
								confirmHos: "", // 确诊单位
								confirmType: "门诊", // 确诊方式
								confirmDate: "", //确诊时间
								hyperten: "无", // 高血压
								retinaFlag: "无", // 视网膜病变
								diabeticFoot: "无", // 糖尿病足
								kidneyDisease: "无", // 糖尿病肾病
								nerveFlag: "无", // 糖尿病神经病变
								hyperlipidemia: "无", // 高血脂
								coronaryDisease: "无", // 冠心病
								apoplexy: "无", // 脑卒中
								bloodSugarKfJw: "", // 既往空腹血糖
								bloodSugarChJw: "", // 既往餐后2小时血糖
								bloodSugarDbJw: "", // 既往糖化血红蛋白
								smoking: "无", // 吸烟情况
								smokingDay: "", // 吸烟日均
								drinking: "无", // 饮酒情况
								drinkingDay: "", // 饮酒日均
								height: "", // 身高
								weight: "", // 体重
								bmi: '', // 体质指数
								bloodSugarKf: "", // 空腹血糖
								bloodSugarCh: "", // 餐后血糖
								bloodSugarDb: "", // 糖化血红蛋白
								lastBloodLeft: "", // 左侧收缩血压
								lastBloodRight: "", // 右侧收缩血压
								gysz: "", // 甘油三脂
								cholesterolTotal: "无", // 总胆固醇
								cholesterolHight: "无", // 高密度脂蛋白胆固醇
								cholesterolLow: "无", // 低密度脂蛋白胆固醇
								diabeticFootLast: "无", // 糖尿病足
								nwlbdb: "无", // 尿微量白蛋白
								retinaFlagLast: "无", // 视网膜病变
								nerveFlagLast: "无", // 神经病变
                diet: "无", // 饮食控制
								activity: "无", // 体力活动
								motionWeek: '',  // 每周运动
								motionMinute: '',  // 每次运动
								diabetes: "无", // 口服降糖药
								insulin: "无", // 胰岛素
								insulinType: "", // 胰岛素种类
								insulinUse: "", // 胰岛素用量
								quitSmoking: "无", // 戒烟
                limitWine: "无", // 限酒
                stopManage: "否", // 是否终止管理
            };
        }
    }
};
</script>

<style scoped lang='less'>
@import "../../../assets/css/app/followMan/index.less";
</style>
