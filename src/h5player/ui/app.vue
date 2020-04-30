<template>
  <div class="h5player-ui-wrap">
    <el-drawer
      title="设置"
      :size="String('600px')"
      :modal-append-to-body="Boolean(false)"
      :visible.sync="appStatus.openSettingPanel"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            播放设置
            <!--<i class="header-icon el-icon-info" />-->
          </template>
          <el-form
            ref="form"
            label-width="120px"
          >
            <el-form-item label="自动播放：">
              <el-switch
                v-model="autoPlay"
                name="'自动播放'"
              />
            </el-form-item>

            <el-form-item label="播放速度：">
              <el-input placeholder="请输入内容" />
            </el-form-item>
          </el-form>
        </el-collapse-item>
        <el-collapse-item title="快捷键">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="其他配置项">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="关于">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </el-drawer>
  </div>
</template>
<script>
import appStatus from './data'
export default {
  name: 'App',
  components: {},
  data () {
    return {
      appStatus,
      drawer: appStatus.openSettingPanel,
      direction: 'rtl',
      autoPlay: true
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
  /*h5-player-ui {*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  top: 0;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  z-index: 99999999;*/
  /*  pointer-events: none;*/
  /*}*/

  .h5player-ui-wrap {
    /*background-color:#00a1d6;*/
    /*color:#fffbe5;*/
  }

  .el-drawer__body {
    padding: 20px;
  }
</style>
