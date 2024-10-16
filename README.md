# h5player for tampermonkey

> English  |  **[中文文档](./README-zh.md)**

Web Player Enhancement Script  

- Official Website: [h5player.anzz.top](https://h5player.anzz.top)  
- GitHub: [github.com/xxxily/h5player](https://github.com/xxxily/h5player)  
- GreasyFork: [greasyfork.org/scripts/381682](https://greasyfork.org/scripts/381682)
- One-Click Installation: [h5player.anzz.top/h5player.user.js](https://update.greasyfork.org/scripts/381682/HTML5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC.user.js)

<br />

## Introduction

This script enhances video playback and is compatible with all H5 video websites, such as: Bilibili, TikTok, Tencent Video, Youku, iQIYI, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, Netease Open Class, Baidu Netdisk, AliYun Disk, TED, Instagram, Twitter, and so on.  

The script allows keyboard shortcuts for full course control, supporting functions like speed control for playback, video screenshot, picture-in-picture, webpage full screen, adjusting brightness, saturation, contrast, enhanced customization configurations availability, providing you a pleasing online video playing experience.  

Moreover, it also offers the ability to fast forward short pre/post rolls, speed up learning from online tutorials/educational videos, and privately store offline audio and video files.  

<a href="https://h5player.anzz.top/assets/img/h5player_ui.jpg" target="_blank">
  <img src="https://h5player.anzz.top/assets/img/h5player_ui.jpg" alt="h5player-ui" />
</a>

## Application Scenarios

- Endless speed control: control the rhythm freely, no matter how fast or slow.
- Speed learning: Stay one step ahead with high-speed tutorial and lecture viewing.
- Enjoy drama: Turn tedious viewing into joyful experience.
- Quick short films: Say goodbye to boring waiting.
- Video screenshot: Archive notes, clip and share conveniently.
- Offline video: View locally, send privately, and create an offline library.
- Real-time live streaming: Say no to latency, always stay concurrent.

## Technical Features

- Broad compatibility: All webpages with video tags are supported, even those embedded in iframes and shadowdoms.
- Cross-domain control: Shortcuts seamlessly connect even on cross-domain restricted pages.
- Multi-instance support (compatible with platforms like Twitter and Instagram).
- Progress tracking.
- Speed control memory.
- Video zooming.
- Picture-in-picture capability.
- Cross-Tab control of picture-in-picture.
- Video screenshot feature.
- Audio instance control.
- Offline storage of video/audio files.
- Live video stream extraction.
- Customizable feature additions through configurations.  

## Discussion Groups

<br />

| Add me and I'll Invite You to the Group<br/>(Specify: from h5player) | Telegram Group<br/>(<a href="https://t.me/h5player" target="_blank">Join Directly</a>) |
| :----: | :----: |
| <img src="https://h5player.anzz.top/assets/img/WeChat2.png?t=2022.11.21" width=280 /> |  <img src="https://h5player.anzz.top/assets/img/tg.jpg?t=2022.11.21" width=280 /> |

<br />

## Custom Functionality

The script already supports most commonly used features. If you need more, you can achieve this through custom configurations.
For details, refer to: [Custom Configurations](https://h5player.anzz.top/home/customConfiguration.html)  
<br />
If you don't know how to program or don't want the hassle, but have a demand for more complex features, you may consider paying the author for 'Paid Customization';  
[Contact the author through the above WeChat or TG](#Discussion Groups)  

## Installation

> Before installing the script, the [Tampermonkey plug-in](https://www.tampermonkey.net) should be installed first.
> [Tampermonkey](https://www.baidu.com/s?wd=%E6%B2%B9%E7%8C%B4%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85) is a well-received browser extension for loading user scripts, which supports: Chrome, Edge, Firefox, Safari, Opera, and [numerous domestic brand browsers](https://www.baidu.com/s?wd=%E5%9B%BD%E5%86%85%E6%B5%8F%E8%A7%88%E5%99%A8).

**After installing the Tampermonkey plug-in**, click the link below for one-click installation:

- **[h5player.user.js (Click me for direct installation)](https://update.greasyfork.org/scripts/381682/HTML5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC.user.js)**

For more detailed installation help, see here: [Detailed Installation Tutorial](https://h5player.anzz.top/home/install.html)  

## User Guide

- [Feature Manual](https://h5player.anzz.top/home/feature.html)
- [Frequently Asked Questions Q&A](https://h5player.anzz.top/home/q&a.html)
  
## Shortcut Key List

| Shortcut Key | Description |
| --- | --- |
| → | Fast forward 5 seconds |
| ← | Rewind 5 seconds |
| Ctrl+→ | Fast forward 30 seconds |
| Ctrl+← | Rewind 30 seconds |
| ↑ | Volume increase 5% |
| ↓ | Volume decrease 5% |
| Ctrl+↑ | Volume increase 20% |
| Ctrl+↓ | Volume decrease 20% |
| C | Speed up playback +0.1 |
| X | Slow down playback -0.1 |
| Z | Normal speed playback |
| shift+C | Enlarge video screen +0.05 |
| shift+X | Shrink video screen -0.05 |
| shift+Z | Restore video screen |
| shift+P | Enter or exit picture in picture function |
| shift+S | Screenshot, capture current frame and save |
| shift+D | Download audio/video files (experimental feature) |
| shift+R | Enable or disable automatic resume playback progress feature |
| shift+→ | Move screen to the right 10px |
| shift+← | Move screen to the left 10px |
| shift+↑ | Move screen upwards 10px |
| shift+↓ | Move screen downwards 10px |
| Enter | Enter/Exit Full Screen |
| shift+Enter | Enter/Exit Web Full Screen |
| N | Next video/chapter (only supported on some websites) |
| D | Previous frame (for fine-tuning when taking screenshots to find the best quality frame) |
| F | Next frame (for fine-tuning when taking screenshots to find the best quality frame) |
| E | Increase brightness % |
| W | Decrease brightness % |
| T | Increase contrast% |
| R | Decrease contrast % |
| U | Increase saturation % |
| Y | Decrease saturation % |
| O | Increase hue by 1 degree |
| I | Decrease hue by 1 degree |
| K | Increase blur by 1 px |
| J | Decrease blur by 1 px |
| Q | Image reset |
| S | Rotate screen by 90 degrees |
| M | Flip screen horizontally |
| shift+M | Flip screen vertically |
| ctrl+\ | Whether the shortcut key is available on the whole webpage, default is true |
| ~~Ctrl+space~~ | ~~Disable/Enable this playback plugin~~ |

## Supported Website List

> This plugin supports all websites that use HTML5 technology for video playback

Below is a list of some common websites for easy click testing:

| Video Websites | URL |
| --- | --- |
| Bilibili | [https://bilibili.com](https://bilibili.com) |
| Tencent Video | [https://v.qq.com](https://v.qq.com) |
| Douyin | [https://douyin.com](https://douyin.com) |
| iQIYI | [https://iqiyi.com](https://www.iqiyi.com) |
| Youku | [https://youku.com](https://www.youku.com) |
| YouTube | [https://youtube.com](https://www.youtube.com) |
| TED | [https://www.ted.com](https://www.ted.com) |
| Instagram | [https://www.instagram.com](https://www.instagram.com) |
| Twitter | [https://twitter.com](https://twitter.com) |
| Telegram web | [https://web.telegram.org](https://web.telegram.org) |
| Pornhub | [https://www.pornhub.com](https://www.pornhub.com) |
| Douyu | [https://www.douyu.com](https://www.douyu.com) |
| Huya | [https://www.huya.com](https://www.huya.com) |
| Weibo TV | [https://weibo.com/tv](https://weibo.com/tv) |
| Kueran Video | [https://krcom.cn](https://krcom.cn) |
| Sohu Video | [https://tv.sohu.com](https://tv.sohu.com) |
| NetEase Open Class | [https://open.163.com/ted](https://open.163.com/ted) |
| QQ Music - MV | [https://y.qq.com/portal/mv_lib.html](https://y.qq.com/portal/mv_lib.html) |
| Phoenix Video | [https://v.ifeng.com/](https://v.ifeng.com) |
| Fun TV | [https://www.fun.tv](https://www.fun.tv) |
| PPTV Polymeric Power | [https://www.pptv.com](https://www.pptv.com) |
| Qilu Net | [https://v.iqilu.com](https://v.iqilu.com) |
| Sunshine Satellite TV | [https://www.isuntv.com](https://www.isuntv.com) |
| CCTV Network | [https://www.cntv.cn](https://www.cntv.cn) |
| Mango TV | [https://www.mgtv.com](https://www.mgtv.com) |
| Watermelon Video | [https://www.ixigua.com](https://www.ixigua.com) |
| Xin Chuan Broadband | [https://v.zhibo.tv](https://v.zhibo.tv) |
| China Sports | [https://video.zhibo.tv](https://video.zhibo.tv) |
| AcFun | [https://www.acfun.cn](https://www.acfun.cn) |
| Kwai | [https://www.kuaishou.com](https://www.kuaishou.com) |
| MioMio Danmu Website | [https://www.miomio.tv](https://www.miomio.tv) |
| 56 net | [https://www.56.com](https://www.56.com) |
| VK | [https://vk.com](https://vk.com) |
| Vine | [https://vine.co](https://vine.co) |
| Magisto | [https://www.magisto.com](https://www.magisto.com) |
| CBS | [https://www.cbs.com](https://www.cbs.com) |
| FC2 Video | [https://video.fc2.com](https://video.fc2.com) |

| Audio Websites | URL |
| --- | --- |
| Ximalaya | [https://www.ximalaya.com/](https://www.ximalaya.com/) |
| Lazy to Listen | [https://www.lrts.me/](https://www.lrts.me/) |
| Dragonfly FM | [https://www.qtfm.cn/](https://www.qtfm.cn/) |
| Kugou Audiobook | [https://www.kugou.com/ts/](https://www.kugou.com/ts/) |
| Baidu Wangpan Audio Files | [https://pan.baidu.com/](https://pan.baidu.com/) |
| AliYun Disk Audio Files | [https://aliyundrive.com/](https://aliyundrive.com/) |
| Other Network Disk Audio Files | ...... |

If the website you frequent is not well supported, feel free to raise [issues](https://github.com/xxxily/h5player/issues)  

## Other Notes

- 1. This script is developed and maintained in my spare time. Feedback is welcome, but any negative reviews are not accepted.
- 2. If you find that the script is completely unusable, it's generally not a problem with the script itself. You are advised to try reinstalling the plugin.

## Update Log

- [H5player ChangeLog](https://github.com/xxxily/h5player/blob/master/changeLog.md)

## Support the Author

If my efforts have brought convenience to you, please do not hesitate to give your appreciation.  

[How much in donations does an open-source work with a million installations receive in a year?](https://h5player.anzz.top/home/aboutDonate)  

PayPal: [paypal.me/BlazeLiu](https://paypal.me/BlazeLiu)  

<p>
  <a href="https://h5player.anzz.top" target="_blank">
  <img src="https://h5player.anzz.top/assets/img/donate.png" width=480 alt="如果我的努力给你带来了便利，请不要吝啬你的赞赏" />
  </a>
</p>

<br />

<p align="center">
  <a href="https://trackgit.com" target="_blank">
  <img src="https://us-central1-trackgit-analytics.cloudfunctions.net/token/ping/l92cniondymy2ux36t8l" alt="trackgit-views" />
  </a>
</p>
