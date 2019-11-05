# h5player for tampermonkey
网页播放器增强脚本  
项目地址：[https://github.com/xxxily/h5player](https://github.com/xxxily/h5player)  
脚本安装地址：[https://greasyfork.org/scripts/381682](https://greasyfork.org/scripts/381682)

## 特性
* 兼容广泛，所有存在video标签的网页均支持 即使嵌在 iframe、shadowdom下均可兼容
* 支持跨域控制，跨域受限页面下快捷键一样可以无缝衔接
* 支持多实例（如：twitter，instagram下亦可兼容）
* 支持播放进度记录
* 支持播放速度记录
* 支持视频画面缩放
* 支持画中画功能
* 支持视频画面截图功能
* 支持配置式添加自定义功能

## 简介

HTML5视频播放增强脚本，支持所有H5视频播放网站，全程快捷键控制，支持：倍数播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，提供良好的在线播剧体验    

PS：本脚基于：[HTML5播放器增强插件](https://greasyfork.org/users/49622)   但已远超原脚本提供的功能。   

由于之前作者已长期不维护，故接坑自己开干，在原作者的基础上进行了大幅度的代码改造，并采用了全新的项目架构进行开发，维护更加方便，逻辑更加清晰，功能更加强大，兼容更多网站


## 支持网站列表

##### 本插件支持支持所有使用HTML5技术进行视频播放的网站

下面列出一些常见网站列表方便点击测试：
* [https://netflix.com](https://netflix.com)
* [https://www.ted.com](https://www.ted.com)
* [https://www.youtube.com](https://www.youtube.com)
* [https://www.instagram.com](https://www.instagram.com)
* [https://twitter.com](https://twitter.com)
* [https://www.pornhub.com](https://www.pornhub.com)
* [https://www.bilibili.com](https://www.bilibili.com)
* [https://www.douyu.com](https://www.douyu.com)
* [https://www.huya.com](https://www.huya.com)
* [https://www.iqiyi.com](https://www.iqiyi.com)
* [https://www.youku.com](https://www.youku.com)
* [https://weibo.com/tv](https://weibo.com/tv)
* [https://krcom.cn](https://krcom.cn)
* [https://tv.sohu.com](https://tv.sohu.com)
* [https://v.qq.com](https://v.qq.com)
* [网易公开课](https://open.163.com/ted)
* [QQ音乐 - MV](https://y.qq.com/portal/mv_lib.html)

如果你常去的网站支持不好欢迎提[issues](https://github.com/xxxily/h5player/issues)  

  
## 快捷键列表
|  快捷键   | 说明    |
| --- | --- |
| ctrl+\ | 快捷键是否全网页可用，默认true |
| Ctrl+space | 禁用/启用 该播放插件 |
| → | 快进3秒 |
| ← | 后退3秒 |
| ↑ | 音量升高 1% |
| ↓ | 音量降低 1% |
| C | 加速播放 +0.1 |
| X | 减速播放 -0.1 |
| Z | 正常速度播放 |
| shift+C | 放大视频画面 +0.1 |
| shift+X | 缩小视频画面 -0.1 |
| shift+Z | 恢复视频画面 |
| shift+P | 进入或退画中画功能 |
| shift+S | 截图，截取当前画面并保存 |
| shift+R | 启用或禁止自动恢复播放进度功能 |
| shift+→ | 画面向右移动10px |
| shift+← | 画面向左移动10px |
| shift+↑ | 画面向上移动10px |
| shift+↓ | 画面向下移动10px |
| Enter | 进入全屏 |
| shift+Enter | 进入网页全屏 |
| E | 亮度增加% |
| W | 亮度减少% |
| T | 对比度增加% |
| R | 对比度减少% |
| U | 饱和度增加% |
| Y | 饱和度减少% |
| O | 色相增加 1 度 |
| I | 色相减少 1 度 |
| K | 模糊增加 1 px |
| J | 模糊减少 1 px |
| Q | 图像复位 |
| S | 画面旋转 90 度 |

## 更新说明：

### 1.1.2
* 接坑，梳理代码
* 优化调整部分代码

### 1.2.0
* 增加缩放视频画面大小功能
* 增加对netflix网站的支持
* 全面调整代码结构
* 修正部分兼容性问题和相关BUG
* 脚本代码工程化，代码遵循js standard 规范
* 完善文档说明

### 1.3.0
* 增加恢复播放进度功能
* 增加记录播放速度功能
* 增加禁用插件快捷功能（Ctrl+space）
* 快捷键变成全局可用，增强兼容
* 修复其它相关BUG


### 2.0.0
* 解锁shadowdom下的video组件
* 支持多实例环境
* 大幅度优化性能，使用更快的侦听方式
* 代码重构和提炼
* 修复其它相关BUG

### 2.1.0
* 实现任务配置中心（TCC）
* 通过任务配置中心增加某些网站的全屏，网页全屏播放快捷键
* 修正多实例下不能同步播放速度的问题
* 优化提示样式
* 修复其它相关BUG

### 2.2.0
* 重构任务配置中心代码逻辑
* 修正B站下暂停播放的兼容逻辑
* 增加对B站直播的兼容
* 修复其它相关BUG

### 2.3.0
* 增加默认的全屏逻辑
* 增加默认网页全屏逻辑
* 修复其它相关BUG

### 2.3.2
* 兼容网易公开课网页
* 修复亮度、对比度、饱和度非线性调节BUG
* 优化快进快退等其它细节

### 2.3.3
* 兼容腾讯视频快捷键操作
* 增加画中画功能
* 增加快捷键自定义功能

### 2.4.1
* 兼容腾讯视频倍速播放
* 增加画中画功能
* 增加快捷键自定义功能

### 2.5.0
* 增加画面移动功能
* 任务配置中心增加自定义初始化方法
* 屏蔽部分网站水印
* 屏蔽iqiyi暂停广告
* 兼容百度云盘全屏快捷键
* 修复若干BUG

### 2.5.1
* 修复快捷键过度占用BUG

### 2.6.0
* 增加还原播放速度功能
* 增加Esc退出网页全屏
* 代码逻辑模块化

### 2.6.1
* 移除统计功能
* 兼容跨域iframe下播放

### 3.0.0
* 支持视频画面截图
* 支持快捷键跨域控制
* 增加更多实用模块，便于后续开发

### 3.0.1
* 修复截图时文件连结过长截图下载失败BUG
* 增加ico图标

### 3.0.2
* 修复任务配置中心失效问题
* 优化操作提示样式降低干扰
* 优化截图保存文件大小
* 增加部分网站兼容

### 3.0.3
* 解决tips引起的样式混乱BUG
* 优化获取video包裹节点的方法
* 增加MouseObserver模块

### 3.0.4
* 增强提示样式在不同网站下的兼容
* 优化获取video包裹节点的方法

### 3.0.5
* 增加mac快捷键兼容
* 优化部分代码逻辑

### 3.1.0
* 增加自动恢复播放进度的控制选项
* 修复部分网站tips无法正常显示BUG

### 3.1.1
* 增加部分网站兼容
* 优化提示父节点获取逻辑
