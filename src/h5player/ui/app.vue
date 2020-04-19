<template>
  <div class="ui-wrap">
    <el-radio-group v-model="direction">
      <el-radio label="ltr">
        从左往右开
      </el-radio>
      <el-radio label="rtl">
        从右往左开
      </el-radio>
      <el-radio label="ttb">
        从上往下开
      </el-radio>
      <el-radio label="btt">
        从下往上开
      </el-radio>
    </el-radio-group>

    <el-button
      type="primary"
      style="margin-left: 16px;"
      @click="drawer = true"
    >
      点我打开
    </el-button>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>

    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      message: 'Hello Vue!1212',
      drawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    handleClose (done) {
      done()
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    }
  }
}

</script>

<style lang="scss">
  .ui-wrap{
    /*background-color:#00a1d6;*/
    /*color:#fffbe5;*/
  }
</style>
