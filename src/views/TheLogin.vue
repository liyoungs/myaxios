<template>
  <el-form status-icon :model="myData" :rules="myRules" ref="myForm" label-width="100px" class="myForm">
    <el-form-item label="密码" prop="pass">
      <el-input v-model="myData.pass" autocomplete="off" type="password"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass" label="确认密码">
      <el-input v-model="myData.checkPass" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="age" label="年龄">
      <el-input autocomplete="off" v-model.number="myData.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('myForm')">提交</el-button>
      <el-button @click="resetForm('myForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "TheLogin",
        data() {
            let checkAge = (rule, value, callback) => {
                console.info(rule);
                if (!value) {
                    return callback(new Error("年龄不能为空"))
                }
                // setTimeout(()=>{},1000); 展示验证过程，视觉效果好
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        return callback(new Error("请输入整数"))
                    } else {
                        if (value < 18) {
                            return callback(new Error("必须年满18周岁"))
                        } else {
                            callback()
                        }
                    }
                }, 1000);
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error("请输入密码"));
                } else {
                    // 另一个已输入，修改本身，在验证
                    if (this.myData.checkPass !== '') {
                        this.$refs.myForm.validateField("checkPass");
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error("请再次输入密码"));
                } else if (value !== this.myData.pass) {
                    return callback(new Error("两次输入的密码不一致"));
                } else {
                    callback()
                }
            };
            return {
                myData: {
                    pass: "",
                    checkPass: '',
                    age: ""
                },
                myRules: {
                    pass: [{trigger: 'blur', validator: validatePass}],
                    checkPass: [{trigger: 'blur', validator: validatePass2}],
                    age: [{trigger: 'blur', validator: checkAge}]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$ajax.application.login({sss: 2334}).then(res => {
                            console.log("res");
                            console.log(res);
                            console.log("res")
                        }).catch(error => {
                            console.log(error)
                        })
                        // alert("submit")
                    } else {
                        console.warn("error");
                        return false
                    }

                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
  .myForm {
    width: 460px;
    margin: 0 auto;
  }
</style>
