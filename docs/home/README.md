# h5player for tampermonkey

网页播放器增强脚本  

- 官网地址：[https://h5player.anzz.top](https://h5player.anzz.top)  
- 项目地址：[https://github.com/xxxily/h5player](https://github.com/xxxily/h5player)  
- 脚本安装地址：[https://greasyfork.org/scripts/381682](https://greasyfork.org/scripts/381682)

<br />

## 简介

视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学、视频文件下载等能力

## 特性

- 兼容广泛，所有存在video标签的网页均支持 即使嵌在 iframe、shadowdom下均可兼容
- 支持跨域控制，跨域受限页面下快捷键一样可以无缝衔接
- 支持多实例（如：twitter，instagram下亦可兼容）
- 支持播放进度记录
- 支持播放速度记录
- 支持视频画面缩放
- 支持画中画功能
- 支持跨Tab控制画中画
- 支持视频画面截图功能
- 支持对音频实例的控制
- 支持视频/音频文件下载
- 支持直播视频流提取
- 支持配置式添加自定义功能

## 交流群

<br />

| 加我拉你入群<br/>（注明来自：[h5player]） | Telegram群组<br/>（<a href="https://t.me/h5player" target="_blank">直接入群</a>） |
| :----: | :----: |
| <img src="https://h5player.anzz.top/assets/img/WeChat2.png?t=2022.11.21" width=280 /> |  <img src="https://h5player.anzz.top/assets/img/tg.jpg?t=2022.11.21" width=280 /> |

<br />
  
## 快捷键列表

|  快捷键   | 说明    |
| --- | --- |
| ctrl+\ | 快捷键是否全网页可用，默认true |
| Ctrl+space | 禁用/启用 该播放插件 |
| → | 快进5秒 |
| ← | 后退5秒 |
| Ctrl+→ | 快进30秒 |
| Ctrl+← | 后退30秒 |
| ↑ | 音量升高 5% |
| ↓ | 音量降低 5% |
| Ctrl+↑ | 音量升高 20% |
| Ctrl+↓ | 音量降低 20% |
| C | 加速播放 +0.1 |
| X | 减速播放 -0.1 |
| Z | 正常速度播放 |
| shift+C | 放大视频画面 +0.05 |
| shift+X | 缩小视频画面 -0.05 |
| shift+Z | 恢复视频画面 |
| shift+P | 进入或退画中画功能 |
| shift+S | 截图，截取当前画面并保存 |
| shift+D | 下载音视频文件（实验性功能） |
| shift+R | 启用或禁止自动恢复播放进度功能 |
| shift+→ | 画面向右移动10px |
| shift+← | 画面向左移动10px |
| shift+↑ | 画面向上移动10px |
| shift+↓ | 画面向下移动10px |
| Enter | 进入/退出全屏 |
| shift+Enter | 进入/退出网页全屏 |
| N | 下一个/集视频（仅部分网站支持） |
| D | 上一帧 (截图时进行微调以找到质量最佳的一帧) |
| F | 下一帧 (截图时进行微调以找到质量最佳的一帧) |
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
| M | 画面水平镜像翻转 |
| shift+M | 画面垂直镜像翻转 |

## 支持网站列表

> 本插件支持支持所有使用HTML5技术进行视频播放的网站

下面列出一些常见网站列表方便点击测试：

|  视频网站   | URL    |
| --- | --- |
| B站 | [https://bilibili.com](https://bilibili.com) |
| 腾讯视频 | [https://v.qq.com](https://v.qq.com) |
| 抖音 | [https://douyin.com](https://douyin.com) |
| 爱奇艺 | [https://iqiyi.com](https://www.iqiyi.com) |
| 优酷 | [https://youku.com](https://www.youku.com) |
| YouTube | [https://youtube.com](https://www.youtube.com) |
| TED | [https://www.ted.com](https://www.ted.com) |
| Instagram | [https://www.instagram.com](https://www.instagram.com) |
| Twitter | [https://twitter.com](https://twitter.com) |
| Telegram web | [https://web.telegram.org](https://web.telegram.org) |
| Pornhub | [https://www.pornhub.com](https://www.pornhub.com) |
| 斗鱼 | [https://www.douyu.com](https://www.douyu.com) |
| 虎牙 | [https://www.huya.com](https://www.huya.com) |
| 微博TV | [https://weibo.com/tv](https://weibo.com/tv) |
| 酷燃视频 | [https://krcom.cn](https://krcom.cn) |
| 搜狐视频 | [https://tv.sohu.com](https://tv.sohu.com) |
| 网易公开课 | [https://open.163.com/ted](https://open.163.com/ted) |
| QQ音乐 - MV | [https://y.qq.com/portal/mv_lib.html](https://y.qq.com/portal/mv_lib.html) |
| 凤凰视频 | [https://v.ifeng.com/](https://v.ifeng.com) |
| 风行网 | [https://www.fun.tv](https://www.fun.tv) |
| PPTV聚力 | [https://www.pptv.com](https://www.pptv.com) |
| 齐鲁网 | [https://v.iqilu.com](https://v.iqilu.com) |
| 阳光卫视 | [https://www.isuntv.com](https://www.isuntv.com) |
| 央视网 | [https://www.cntv.cn](https://www.cntv.cn) |
| 芒果TV | [https://www.mgtv.com](https://www.mgtv.com) |
| 西瓜视频 | [https://www.ixigua.com](https://www.ixigua.com) |
| 新传宽频 | [https://v.zhibo.tv](https://v.zhibo.tv) |
| 中国体育 | [https://video.zhibo.tv](https://video.zhibo.tv) |
| AcFun | [https://www.acfun.cn](https://www.acfun.cn) |
| 快手 | [https://www.kuaishou.com](https://www.kuaishou.com) |
| MioMio弹幕网 | [https://www.miomio.tv](https://www.miomio.tv) |
| 56网 | [https://www.56.com](https://www.56.com) |
| VK | [https://vk.com](https://vk.com) |
| Vine | [https://vine.co](https://vine.co) |
| Magisto | [https://www.magisto.com](https://www.magisto.com) |
| CBS | [https://www.cbs.com](https://www.cbs.com) |
| FC2 Video | [https://video.fc2.com](https://video.fc2.com) |

|  音频网站   | URL    |
| --- | --- |
| 喜马拉雅 | [https://www.ximalaya.com/](https://www.ximalaya.com/) |
| 懒人听书 | [https://www.lrts.me/](https://www.lrts.me/) |
| 蜻蜓FM | [https://www.qtfm.cn/](https://www.qtfm.cn/) |
| 酷狗听书 | [https://www.kugou.com/ts/](https://www.kugou.com/ts/) |
| 百度网盘音频文件 | [https://pan.baidu.com/](https://pan.baidu.com/) |
| 阿里云盘音频文件 | [https://aliyundrive.com/](https://aliyundrive.com/) |
| 其他网盘音频文件 | ...... |

如果你常去的网站支持不好欢迎提[issues](https://github.com/xxxily/h5player/issues)

## 其他说明

1、该脚本是利用业余时间进行开发维护的，有问题欢迎反馈，但不接受任何差评
2、如果发现脚本完全不可用，一般都不是脚本本身的问题，建议先删除后再次安装即可

## 更新日志

- [https://github.com/xxxily/h5player/blob/master/changeLog.md](https://github.com/xxxily/h5player/blob/master/changeLog.md)

## 支持作者

<br />
<details>
  <summary>如果我的努力给你带来了便利，请不要吝啬你的赞赏</summary>
<p>
  <a href="https://h5player.anzz.top" target="_blank">
  <img src="https://h5player.anzz.top/assets/img/donate.png" width=480 alt="如果我的努力给你带来了便利，请不要吝啬你的赞赏" />
  </a>
</p>
</details>
<br />

<Vssue :title="$title" />
