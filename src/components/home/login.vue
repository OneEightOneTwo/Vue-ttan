<template>
<div>
 
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm" style=" margin-top: .5rem;"> 
  <el-select size=" small" style="width:1rem" v-model="label6" placeholder="+86">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.value"
      :value="item.label">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: .13rem">{{ item.value }}</span>
    </el-option>
  </el-select>
  
  <el-input
   placeholder="请输入手机号码"
  size=" small" style="width:2.5rem;margin-left:.1rem"
  v-model="ruleForm.name"
  clearable>
</el-input>
 <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="footer">登录</el-button>
  </el-form-item>
  </el-form>


  
</div>
   
</template>
<script>
export default {
     data() {
      return {
        cities: [{
          value: '+86',
          label: '中国'
        }, {
          value: '+852',
          label: '中国香港'
        }, {
          value: '+853',
          label: '中国澳门'
        }, {
          value: '+355',
          label: '阿尔巴尼亚'
        }, {
          value: '+886',
          label: '中国台湾'
        }, {
          value: '+93',
          label: '阿富汗'
        }, {
          value: '+54',
          label: '阿根廷'
        }, {
          value: '+20',
          label: '埃及'
        }, {
          value: '+353',
          label: '爱尔兰'
        }, {
          value: '+43',
          label: '奥地利'
        }, {
          value: '+61',
          
          label: '澳大利亚'
        }, {
          value: '+55',
          label: '巴西'
        }, {
          value: '+1441',
          label: '百慕大'
        }],
        label6: '',
         ruleForm: {
         phonenum: '',
         },
         rules:{
             phonenum:[
                  { required: true, message: '请输入手机号码', trigger: 'blur' },
                  { min: 11, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
             ]
         }
      }
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功!');
            this.$router.push({path:'tantan'})
          } else {
         
            return false;
          }
        });
      },
  //       created() {
  //   // axios.get('https://www.nanshig.com/mobile/index.php?act=good&op=goods_list&keyword=&page=10&curpage=1')
  //   this.$axios
  //     .get("https://www.nanshig.com/mobile/index.php", {
  //       params: {
  //         act: "goods",
  //         op: "goods_list",
  //         keyword: "",
  //         page: 10,
  //         curpage: 1
  //       }
  //     })
  //     .then(res => {
  //       console.log(res);
  //       let data = res.data;
  //       this.goodslist = data.datas.goods_list;

  //       console.log(data.datas.goods_list);
  //     });
  // }
     
    }
}
</script>
<style scoped>
.footer{
   width: 100%;
  height: .45rem;

  text-align: center;
  color: white;
     background-color: rgb(214, 57, 38);
  font-size: .18rem;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

