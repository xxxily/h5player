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
* 支持跨Tab控制画中画
* 支持视频画面截图功能
* 支持配置式添加自定义功能

## 简介

HTML5视频播放增强脚本，支持所有H5视频播放网站，全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，提供良好的在线播剧体验    

PS：本脚基于：[HTML5播放器增强插件](https://greasyfork.org/users/49622)   但已远超原脚本提供的功能。   

由于之前作者已长期不维护，故接坑自己开干，在原作者的基础上进行了大幅度的代码改造，并采用了全新的项目架构进行开发，维护更加方便，逻辑更加清晰，功能更加强大，兼容更多网站  
  
## 快捷键列表
|  快捷键   | 说明    |
| --- | --- |
| ctrl+\ | 快捷键是否全网页可用，默认true |
| Ctrl+space | 禁用/启用 该播放插件 |
| → | 快进5秒 |
| ← | 后退5秒 |
| Ctrl+→ | 快进30秒 |
| Ctrl+← | 后退30秒 |
| ↑ | 音量升高 10% |
| ↓ | 音量降低 10% |
| Ctrl+↑ | 音量升高 20% |
| Ctrl+↓ | 音量降低 20% |
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
| N | 下一个/集视频（仅部分网站支持） |
| D | 上一帧 (截图时进行微调以找到质量最佳的一帧) |
| F | 下一帧 (不支持netflix，因为快捷键冲突)|
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

## 其他说明
1、该脚本是利用业余时间进行开发维护的，有问题欢迎反馈，但不接受任何差评    
2、如果发现脚本完全不可用，一般都不是脚本本身的问题，建议先删除后再次安装即可

## 更新日志
* [https://github.com/xxxily/h5player/blob/master/changeLog.md](https://github.com/xxxily/h5player/blob/master/changeLog.md)

## 给我赞赏
* [https://github.com/xxxily/h5player/blob/master/donate.png](https://github.com/xxxily/h5player/blob/master/donate.png)
