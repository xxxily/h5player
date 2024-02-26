// ==UserScript==
// @name         HTML5视频播放器增强脚本
// @name:en      HTML5 video player enhanced script
// @name:zh      HTML5视频播放器增强脚本
// @name:zh-TW   HTML5視頻播放器增強腳本
// @name:ja      HTML5ビデオプレーヤーの拡張スクリプト
// @name:ko      HTML5 비디오 플레이어 고급 스크립트
// @name:ru      HTML5 видео плеер улучшенный скрипт
// @name:de      HTML5 Video Player erweitertes Skript
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      4.2.0
// @description  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学、视频文件下载等能力
// @description:en  Video enhancement script, supports all H5 video websites, such as: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu network disk, Alibaba cloud disk, ted, instagram, twitter, etc. Full shortcut key control, support: double-speed playback/accelerated playback, video screenshots, picture-in-picture, full-screen web pages, adjusting brightness, saturation, contrast
// @description:zh  视频增强脚本，支持所有H5视频网站，例如：B站、抖音、腾讯视频、优酷、爱奇艺、西瓜视频、油管（YouTube）、微博视频、知乎视频、搜狐视频、网易公开课、百度网盘、阿里云盘、ted、instagram、twitter等。全程快捷键控制，支持：倍速播放/加速播放、视频画面截图、画中画、网页全屏、调节亮度、饱和度、对比度、自定义配置功能增强等功能，为你提供愉悦的在线视频播放体验。还有视频广告快进、在线教程/教育视频倍速快学、视频文件下载等能力
// @description:zh-TW  視頻增強腳本，支持所有H5視頻網站，例如：B站、抖音、騰訊視頻、優酷、愛奇藝、西瓜視頻、油管（YouTube）、微博視頻、知乎視頻、搜狐視頻、網易公開課、百度網盤、阿里雲盤、ted、instagram、twitter等。全程快捷鍵控制，支持：倍速播放/加速播放、視頻畫面截圖、畫中畫、網頁全屏、調節亮度、飽和度、對比度、自定義配置功能增強等功能，為你提供愉悅的在線視頻播放體驗。還有視頻廣告快進、在線教程/教育視頻倍速快學、視頻文件下載等能力
// @description:ja  ビデオ拡張スクリプトは、Bilibili、Douyin、Tencent Video、Youku、iQiyi、Xigua Video、YouTube、Weibo Video、Zhihu Video、Sohu Video、NetEase Open Course、Baidu ネットワーク ディスク、Alibaba クラウド ディスクなど、すべての H5 ビデオ Web サイトをサポートします。テッド、インスタグラム、ツイッターなど 完全なショートカット キー コントロール、サポート: 倍速再生/加速再生、ビデオ スクリーンショット、ピクチャー イン ピクチャー、フルスクリーン Web ページ、明るさ、彩度、コントラストの調整、カスタム構成の強化、その他の機能により、快適なオンラインを提供します。ビデオ再生体験。 ビデオ広告、オンライン チュートリアル/教育ビデオなどを早送りする機能もあります。
// @description:ko  비디오 향상 스크립트는 Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu 네트워크 디스크, Alibaba 클라우드 디스크와 같은 모든 H5 비디오 웹사이트를 지원합니다. 테드, 인스타그램, 트위터 등 전체 바로 1가기 키 제어, 지원: 배속 재생/가속 재생, 비디오 스크린샷, PIP(Picture-in-Picture), 전체 화면 웹 페이지, 밝기, 채도, 대비, 사용자 정의 구성 향상 및 기타 기능 조정, 쾌적한 온라인 환경 제공 비디오 재생 경험. 비디오 광고, 온라인 자습서/교육 비디오 등을 빨리 감기하는 기능도 있습니다.
// @description:ru  Сценарий улучшения видео поддерживает все видео-сайты H5, такие как: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, сетевой диск Baidu, облачный диск Alibaba, Тед, инстаграм, твиттер и т.д. Полное управление клавишами быстрого доступа, поддержка: воспроизведение с удвоенной скоростью/ускоренное воспроизведение, скриншоты видео, картинка в картинке, полноэкранные веб-страницы
// @description:de  Videoverbesserungsskript, unterstützt alle H5-Videowebsites, wie z. ted, instagram, twitter usw. Vollständige Tastenkombinationssteuerung, Unterstützung: Wiedergabe mit doppelter Geschwindigkeit/beschleunigte Wiedergabe, Video-Screenshots, Bild-in-Bild, Vollbild-Webseiten, Anpassung von Helligkeit, Sättigung, Kontrast, benutzerdefinierte Konfigurationsverbesserungen und andere Funktionen
// @author       ankvps
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUAAAAZo+IiqNkXlMx+xs+Kw947ueyq5fAomMlTude76OnJ5uo6o8BrvuB0u9SIzNdFo8sjpcIom7IurODa698PjcBW0uxAoMocp90xjsR+v9zS2c3j6+UznbP5//uYtK3/7dNHn9DL9PbM9vYDqe0Cq+sDqO0Ipu0Cqu8Eqe8CqeYGpvAMpuMArun/////+//7//////0Dp+v/+P8ArPUHqOr/+/P/+/cBrPDs////+PsCquj//voBqfP4/f/3//4Brvj1//cJqOX8/P4Bqvfw//8ArfsBrub//Pv+/vICp/cBrPMAr//5/vcDpf8KpekGqd0Bqv/y//oNp90BqfsFq+ALpOABp/L8//v//+jy//L0//8LptgCrez/9vYBsO4BoOL///YGpfYPoPYBm+YBofEAnuoBleEBruEAsuoHpfrl//8CrdsBousHquMNot0EjdoNnNn0+/8BnPUMpO7/++0Qo+cBm9wYoOA+tNAFltAAovf5/u/A7/8CrvL//+4Amu2c1OMCldcBn8gBnvwAlehxvcoBotoFqtICntL/9P3T9fAAtP8BlvFmvszd//sBs/QJpPIUnu0CseQAtPm+6fCj1uZLq9PR+/z+9u0BpuGx8/3s+vvS8vu89Pem5fcFjPRz0eoaoNgElMLa+Psfsu+y5OgEkcwQnv8Bl/zi+frG7/lHxu+J1OgAtuH//Nx1ytg6sNgDh8O68P7G+/uy6PKV2vA+t+kDsdf++OUjmd8AuOwtuOJkxdotodX6+P3p//eB3fde1+1ixe2k8Pem2fAVl+cZruRavdxwu9oGq8dMu+tc0uAiltXQ6vdMxtxAu9xSt9UboM6+/P4AvPn/7/Vxv+cQn76W5/p/ye2P5ecPlN4XrNen1dUnq8z/7/4Gi+gpqtw9n9Auqeuz0OdfteRHt8UDhbSj3+iLxuM7nuEiutFarLnt7/oTpfO+19mJucYelsEHnq0amPXp+udfoOd54OHN7N0Eus+u9+/N2PGexO8omu4fxL8ZpaEAzOwL7fbjAAAAJHRSTlMAzsj+hQSzWf6dcCf8fVE4n/36vRP149vMupcJBOnihEkHl8Lv/rxjAAAdpElEQVR42ryWW2jTUBiAq9bpNqfzfr8np0nXiRwSKJRAqCGDtjYpSdeXjo4uXTtZb3RMWaHU1aHiRMV5YWq9TlGmIAw3mIo3vItXRJz6oCiIIKgvgj54UvG2qe3ysO+hTR7Of76c85///LrBTFs0T6dbXFpSotcXFxVNHa0ya5QmZuUGTy0qKtbrS0pKF6vBp+nyMXfBknFl5TPHj2k51hJHRKNRqTqHaRhU55CiCBQDhRozfmZ52bilC+blFZg4o+vqgJJOOl0OWTBAiAGAWYyasKhjMQAFrt3hTKaVgatdMybmmX5S+flYuoJiGVnmPB7S42EoBIFrgkBD7YwHwXA852G5ivrY+fJJun8zds6ETG1dpFEURa8kea0EYU6ZEQRAYMQwwACCMOcg7BYJRUNBG611tZkJc8b+8/Nnx8IdPsldFXK7RTQmYkEYjVYjXaEJGg01WhARFEx0uyNVbqmmoz42e9I/dn++yLucdJ/PoS4dAo9YVUwmwaAJAWWjVQW32yk7RbEOXx/tdMni/Il/y/450zf2pzg/qKRkjkXwvJnGMIgCNRlwTaCBBgMEGG3meRbByVQl8Msd/Znpc+YO2f6FcbY5Lp5qoJxNJkGgaQzHGY5iGJvf7yerqiqHTVUViYbaGIbi7DiOQVoQTE1OquGUGG9m4wsHJ0LZIchAmsZxsgLQKIUg+njyB5hGyB+o0QBaClBB4jgNSQYeKhu0/9NZgsYIkgQAx1ASDwJoAhsEiosDQJIEAe389D/yoHRKRiCxEYQUMlNKf0uA2Rv7o4IZGzHM4Wj/xtm/0kAfkzvc9AguAUm7t9pi+p8FaHLAxZ3CR1IAP8W5ApN/FKTiTIfT34ADbMQAeIPf2ZEp1unU23HcmFofTVLEsE7WzydtBgRF0jW1Y8blTsCMYF11X6XTgxcy/5+HU6sA7nFW9kl1sRnqSSjpClhFH9VkKCR3JFEF3VVR9NTY2OiVoCYFQxPlc1vru0rUHdjMbAg5ZBNNFCCASuX3iiIIOCq2VREjpkWAoE2yI7TBs1ndg7Ig5XWznIDlF6Dtrl84EOhP0wKgD+BYt8gFy1ARKm+jRDfFCiBf5qL9Jm02G2f7fscwqM9BT9qSAAgsEmDbisfqps1MeJAAT4O8+QcBZs21m2qDI0mmalNzczPUtAeAZlnRyyVmTtON++C0eUUkAPOtGpoKWnDUInV2dkZC7k6jkYaoaU0BOHwBSPOU6LU5x5fqSsa4ZEmi+PzSkMBJl9qrhusVJRyuDwSSsos3E0hCAzwlSbILVQJ9i4Pzein+v6ce3dMoRcOKElwdXXPtbHd3d29376s1A8GgUh8mzIAgQK4sqD9EwQJeztGiRwLtOQH872UPRYQ4MrCTitJmPntj7ZVsz+5NOY7szp65cX9rfVvAbEaGqH8BOISAKcgA5ynvd4HiVpYyRlDbSA6Z3RKhDUQqRdneN9fWtmzovfhw98M9Zy5eur5L5fXlgxev9GzZvef6g9agUlOT9ISMqxyPGh5U2wsoaWrLa6TY1mJdUdzAoBfIkUPLFbRsD0WaZAff2Xr+ZM+W7M77N+Obk55wOsCvW5dIJJKdL94833HhxJne1tWWdjnqxbayNc9MTAECHIzgFEO3FiEBwJgtVmyoALDJqe2N3jXNSrD3Yja79n48EQgfOJ5QVsfSfFJZHQwkk+mgUnv6ZLbnya24mKozfZ58p66dFcgCBDCrxcwY4kW6qVHImI1WMEQAgIb+ijq/L3T45ZcT2bs3b24MJ9LpT1977z1+2226dfDx9d6ubWklEYDrvbf29+x/89HSHh//oMLF0FiBAiSMTtWNRgIpJGAbmgONGwiXKxC9fST75sPAgQNt6z/fPblj35G9K5Y9nLxz+fKVe/ftP3nuXWbgQCIRv3/0xNO+zetkX2hNIb0daQNIwAOrkUA1Zv/GiZ19NXHFcQDv8tIHX9qn/gGEJATvzBDIZCaTjTAkg1kkgiGJhAQhIAFKQcAlLLI0rAJFWhYREMsWIWxio1QsLijFrZXaVi1udSvWU1tta9dLkdba5YR+z0lOZuaemU9+d+7cmYEVYEPAMxG+efzgQPnd0+7J6W6rvfCr/f2VBAZsRo8XGfn6Bsj2em0Ak+65fWaquv14+fT2060fBIVH6qajxb4A2KEBnGD/tS8sAkID/wHAStEGPBgk7t+17ohKuPReCwEABhCb0WhBjq55C1XNWkgEwKCNg1+WJ5aUvnj58PuvVwenirg+AOLZgRDg9xTg77NKyHlDxmX54IPmkurVe/NijE24mUaB2UHzkaPpY7SZjygkKEpk4tlMY8dUWu/WW/P32i5Zs3gsXwAb/wQIgyFgYwr3qVmHZ4gV8bTTDx7PPSz/9eCVh11SCm9qwumdFEbUmGb5La9clmooIDXLNVIplW0BYNd2uza8e0Xl6KF22UqxgQuff4TC/wCkbAwM5cg4EPDqWhaHE6Jjw+vYk8OL2OL69Dfjz0+/8t3o3fbIlcUdForSKBQoqqBwldzkbMJ3vXIZMAIVKo1hJAoEMTscQPDJpS0RubtHdq4oSlkzELpeVrsph/MfUztbF8IRsgJffe55+Azvx2OzlH5LgHR21EDZN9q4X767tyY3P+lQFwbMZhQeBwGYBNGoJCZj3qZtIEagAihAHWakQkU7aAAqb3ZG9l5p+/bulemynJ6q87s3Cf8V4KdksXnw1U/g8889HxgQwPkDAAPHRz5bdDDtVMNHV4fXlI2fBojJyAhwBMGwmL8CUBRDaZQkcZsNt5Cg78yWQntZV+shV936Dcoccb6/jwDRAmDlHwBdvXJ95MCFx/euu17rPDsK5ixej7EAV6lUVAyq+CsAmlQkSdkYpml2DtAzxcm5rzfsyukNT/7wgHpH0L8DVi4AWP8EgEmOToksG5x42H6+7GwfguCzOAYWgtmYZwEAg6UBAP4ACG6ZI2aK38x6ubKtNE50IDQ82FcA668VqE1ftyPri8PbreqM8VFkVkADx9Gx/ttuGgj+DqC8AkCPtvWPtbXQZAVJz7i0xfOgo9yQYmgO4fwPAPzekfNa8trW+w9+tb7kBqSAkh7dn1ME3zSebMXkCuTZClgoR8fVixcvWn9+RGOzFTVnS4O779BDVnVKebT4fwBgxCm6zkd5p1LrixuQOQ0hHessSoyPirAOv9RCxzwDwDDgODFclLU1wtDduTeTbKL6hrKCbz1uLROtt7OWWQEe98ntojrjbeKMvbe9H0zM4uhnndVh0bEydRVveFMehmjwRQD6BJB58lZ0VWRY8rs9Wd0zhNFL7YuvKr3W1/FgoCSLtSwAiwXbw6uR//qwi4+7iqvaHwLgzFa0Xs1V56xTyuBTCC/jiJnSkAo5AwGYSgDHBIK2DZcfrM1nRae+2WOf/qzAI0A7ErRXOvpWfK/dujxAfb1SxPIziMXHrUd2/rylZOo7Fd/ocbx/JTG1LCC2VhYWz3alu21ShQUHeQe2YSSjl1QgxN6iOGVq6ur4lNc2VCWdkMLLsvftEu26yh+37JCFLAugVIoggCsOTig/OtZpTZikVPxso+NIaURzOttPyOHVsTnWYzazQhCzAAAkY5LwwZ4pa35+9Op0g3atsirh2h4MR7Hb1qju91o3ha1a3jAUwcBpgROc+8VHX2YkXGrE4J9liHO5VVxDHY+t023kqZPuULREoMHyTi0A9BBQOWUIC+cGpnPCQoPU4kNugCtQ+Qelrx/f1VHKWd5JGKILYUGA0N/V8ENxu30S0xASC5l5wlUVro3g5QQGsoLVhdtstASXUk8DEiO1KbpQVlxIsDrxeiuwMGawL7e6enDkeNAyARv9/eJgJ9jHHdu39NaOFggIumIOfVRcq42UcXXp0clxEYkNDJ1JSSn3h0sAx3huZImWF7pyg9AgyxiqAXiBkzSd7c0ab/wiicPhBvkOYNdxhbGigLSkjtELudV7MaNAYuZXgH0XXCmyWiG8Qx+oT7pOGPUSFazAEgCRdnTnbE3hBijjwsS5w59KAcYYLdhYb4Ku5VhGGnzR7zuAZ4Dzc1xAQkLLo6JEVxvGxCAoggDp4C123Ab/ulUbBoqH2zCvQqEyY3m7lwBo44phmZglUrIiVt1a0QcQlYbRYI2byhOPVB6ywztb3wFcsTAuNlZX+k7je1lZX+5E+AoEowkplnluOFlZ1xNZ5Rq+g2o8JILQ4HeAEwIUeqzhpaL8HbWrwtQZX7sxFR8lcLkZ3V5eOLXz48SgIA7XDw4tXwHwJio06UjlNW3aTAw6MaFR0YSEBHsm123JuFJaOvU+imi8JJ+fuTgMcamCj+gp0DJe7nLlJiXtbwGUAEFpXE5gl9elhbqP2eHjO9y5v4/nQOwG3vq6+gs3jpZHBbVhcr3JhihgJoC0oePEiZN3WgFOolKyYmKCGjl+A1OQcDOCqDDguD147szM/XtgoT2iEFAocK8Jb37U8GG+zJUq7qkL4PoMiEi+4O7PKPnmNIUrSI1JDmMyOSlUSkupAq/HY6KNRtrpaVm3TWoyOuV6ubOpqUkFZwSCphjYdKG9APYSsb+k9I2+IXH466mreuqUfr4DVn/eeKS69/pOBpYadzILcWbjfAw104cP650FNq8XdXpGdl/GCrxGW4ym4Ntv4WFRGMbJLEYjQUjwcW/7w75zaerA1GAtV7mMCrjOuvdHJX6gNwoy4X6epGKOr5DSBE1LSMRiUeDMyIEbGGXBMdgDkKWXTExMVJBL0ddosm39WSVfuU/aowJTZVrhMgBRq8+4x2WcSafHSejRzMXQExaLAKcolQLJJBQSx2HQohsz05kSgqAlC+cBwoeRZEoWm8v1GqPxs+bw/JZtCVvXQkBssj/X5wo0z7ivGnL7GY9NotLIl6KXyzUxKn4FKacZp8Pk2bV7m9nkNOn1epMAhnE6YT8sBfZYk3HfGkNASxcEJMu0omUA4l2TDacKM45hDAAILngSSorGUBSGISoBlp0Nsj2t1+5jBUavzSbILliM0ylYioXPr6BOXy1M2tdl3ZqjDF8WIMI12XUqy/6JmWhsJMzE06GJhTgIosZBjfx0DK6g4dJS4MJSHDU1DvSjdwqTjjU0J0JAjy6a6zMgyjXTtVstHp+fHxqCn81P8vZChmA2w1Xjm+fH1e+c3Xzz5uant/+xMH9z6O35zbFR9iVAjm+A3zg196cmriiO/8Av/aF/RkhCK/sgJCFhkyUkCyRkEUIohJiXBlEDkgZCFJBABIQUBEFUFAQMICJUREGtgijSQrH4FqUWbdXasWOl73b6mJ6NBnVQB3oGZpbZsHzYe+6953y/N48VyiQhvIGEwqn5ionJ+YrtgZjcvhAVFcMV85fUl4crKirgp9fEfMUkfJkSSoaWDwBJCACFGbcQsraWRPTk89A/C7iAHpAikWP140wvQuqx5wGfCVxhCDSK+j2dNSWtjebC5Q6BiknCVNcQoaRsMjEvEGgg4lCjWG7UHX78AIkzimH+iXmLgtA4xMTh5FxrK5OE65achGyTH+Di9EiGp4+pboVGYSCIZyG3KOVOp77oyJaRB3iR0wlbs0C4OHBek7sxJ3ft4LgVAJY8DVl+gL2XWu4XlrS7jzgRlA7MbU0gZDKRUmlLh72AWQeKKJGGZm6//J0uS0MB4DtzIedYqVWVzyxEywDQplxumVLlTsl0AgyVUvrnIV0IR5xclO7et2kXRtK0wyGVv7gTuMCgn8Xbczd0MkvxB0tfitksPwBsRhll9zssBDxoIXgvwuuFWnnLJw8QnljMe21gIKYgvYcKL9fuzlZ/kBXv34yWPAvWzTT2ZZbVb0Fw7AUAL0AhFkMSSot0xwBADOkoh1uB+wtBix1Y85lD1v6ekRAA8G/HSwdomCm9UFBWPg4AoEf4A9ZgsrlZA624hqY1SprJgWQmB2SUSE9rNCSOaeA+aIYafxQ5Ndj0nUOur6aDigFgyQUJC4x7MB+svVCSlVykUYdYKqLS3E1ChGwdO3Gi9/wg6FLGU6Mix1li34FdGA2VD0hkTULs2rleuD/UgwiNZ+WkKF3mQL+qZJmmx60gf/FDllqSQSdpCOZml3fW9ufWfD+KSlE5KSUEArxn8qAHjAnPj6UkYTxSK4Ja/RgA+EUqDBcig3MF1sxM18FvBhHICoRUyuS87ZVhnVCUsgJF6dIBONbyfd95wlytuCCOKUhwbM+VR9sMXEVMXsGjYZvw1CiFevGXAMjBHwdYqh2S+L2+mQsIwkNxpwA57C/LD2Rzl9We+9UBNqf8fM+72+71UqcEci9IX7Zhn2l9Q11MkmqHx3cO14moOPGLN4Aj10YGTArwjsLrTvvm9kBfQAi8lvbcT/OOzXpSl6cPwOmjiDAWx3rHVlHVxt/vTpeKBUJsMMhcbTrZIAHHkOs606OjSHEAQMgAnD8YawrXqtjBMer4gX4Mt9BitPb7spqjtZfMy5NoDFy/TMllF4wzzekYTlNpSgvVbk9KMp3Meg/k24ji6Ea3Xm6UBwBgQ3KcqFq33sDhrNi4IUGdubsZV8qk+Gzijra+/TmRIcsFYA6eBBe7dl+7Yn8/+Rihodxu28PMhKTIrKyN0eAbR7lKQaAQwm74iX8IAOCjrxNTQt9bmb8xsb47qeabFlypQZ6cyP7w/vExl+F/ARhMZs+tQZ85+zyRphe4mx+WKwzRYWGMeMDSZvYBgED2MsBnkbGhYRx+cOimvOqMkWnIXXy2POFg+/6r2RIu1y9Aw4MXPLjnANzXA3A40KGb8s1Ttm8PJiU/xdEmJzlWXlwZmqCKMJkiJAklswyABlqzwBA0d4Zx2eAjx9dVrrue+nUHcQP55euyQynH233c1fAf+f/wyyYkMPDfkITA5/+FGEXQ0z8rE9p2yxBjE3LOs7ahIX8FnxUCVtn93wnZM5EqMAuwh/a6neFr6vNXzSSrN/RqnELkZolh4NytmY/VeZWJsaB95W/KU0fFc8HzTQmNYYGOr5Dwo1+3EnKee1VadcG7tefLD93rR4gmrOOxqy4yJTpEkrojzz5mQdP9Mp0fgMBgFgwOZF2P2vBzfuKB4tx7rWk6YrwtwbcdfI6qmsiTscx5sujkaEU8N5g5mReh5kbzJVoFf0XsYoAFuf694p2em81zf0gGuhBnEdJa5VJUV6vVO/mP5q4hPFr8CgBODT/Kqk5KUFertQPzRBEx/UXo3qAO5EnjlSBX3c7C7jU7DKcbDuTAiTyJKiEmcm90WLxCsjL6LQDsk6s2qMunf//3uvXHP/Emi348qIodHqPKHHh3P0mAUPkqAKxUjw6WFGqjCu3zRTr3njM1WTPjiBdHsMHeersVDuYVR0WuSo4OSdUmJGUU5Kxkh8SHcPhvBmCHnL7ziVZ9NH3eXO2aa8FhUBsvXb364aaR/g6EYLTiVwFgrZz95p0vvtjUOaQ8orNNZWt9/fCenDfEmGj65tWtJ2Pju1ebisMVKtXqDPtEb3YqN5jPeZtcz44xXF1RvW0SvZlabd+8H29Kxxwfde0aPC5ChAJM/ioAgot5CNYz3dXV2Jymc9f21pS5rkjRs6O/OJ00JOn+i99v9XyaEROlkGS7fFfbO8bKFfGRG8O4bwYIZnXH/1H5Q53rL95UzWrP5sOIRShQ4vBKEVQsTFsMALUx4yXgOh1RO5VbZj/agXrTRmvTlRalzgKe3tDEHfNa2C0L3pm4YNNPZCZJNiaywwMAiywbAKj/4XTKpqgo+y7qqGe1/c4FqE4FQqZEjkOxxQAE7i/XGciWM9Yy+9we3ChHoSygUFomNHpBydt3q+92++2h4zYSIycz1cWJq9iK2MiAZbPYtKpc0R2+Ll9t+ump5WhN9dqgUhyRSuMETmcaqQ/I9fVQkDwDkNHwcvTQrCBdI2tjPJtbEMHoKO/uXUrkdYikZ5kGV2ghEAjmETgA1FVWhsQsACyy7dhcOHwbH7py9fWsf59iY9brewcePsERSkMTaBotRElNUZOFse3iGN8Uj6ObnErSJkKabnv2Zg9s7rAc0aWnG2/cAAmLpuWo2GixFJ1yKgkcqosmAT68LWlN/cbYiBB+wLZbbFxCmoa9zw3maLcN9Olv+06a2h7P2hCe1xinkYlRCoxL9M9/v2IkMgSTi420wGgk6O921ySZfcM88JYtuAU6egGINRb0LHxIDlYjbSHAd5IjyKVKbXc3tyE2YFy+zboN3lBSdVH04J1t1YXmM602oUBIUShPatN70QurSkUOFKpWHBGRMAyDE2ZVlOedXVRj37lzt8eP14owXOkkUBgbCkPvelFgZVpMDBmuVHSvMcQGB6zbt5nXfIU6xXel48mvn58uK6+6PNThN69RWnkD3XegFKR0p9vC2Gmirks5Jdoy3+4W0eTM1sy2e18euNx+zYYT3rswYKMy+VmvFzRditKTKDK8latKDQ19f8G8fot9z43OMaw3//2g57d/tnp+bqvpHO7qoXDQgp3IFsgBsNHdBNXze/+ZNW2ZHxZ8NtvR+tieGmHOySizerbOTQzaUK9XoAMxT+SAuUDKaItQDAAGiWE9P2/Bvn/zAQZWxH/N21uIElEYwHGIIgqCeo8eYpw82nXIMmxKwrS0Wg3NFy3LHE2cCtxy03KtVVRM1lt02+2+mV0Wo9tmFG3FGlZ0ZdOI6ELRFvRSD0EFfTNGVGZNWdanIANyHOGAB/z9e3ru3JkYSF/fEel7YHJmdm0ovDy7fv+OSNu07cOeT2lri+w/0nvK0ZK2ZqKJs5H23rRLrrFLHLgdpFzYfe3pzoNjJ2w9vWrt+fnjZi1ubl4Fm2X81bAXW7ZMlGABA0ms6FedcGC8JfNky0OFwt5cacft0tFQEPl9pkBP/uXmp4d1p65cefFkNeV0UpSFuJ+93f7ufUDdacjlyDvGBp5xkZGw7Gr5cK8V/tdbOHn69Lmzm5snwU7Y/iiIiGSnKAGEQwCGBAhHVcSCE6mNr68V3oYSmUDThUvHL+1+RNHBaMZCmFZSKdoXjTo9nsBDavnh4vFD3efS/jljQoY9TbKN4m0SnlilV2qShZajJ9vHwzaZOXfy1AlgDU7mXMZ4o61TZC4jFhwQS1XGgyPd/dUJvVcqW+SlN4Qvn2htPXHk2eMej9Li8xECyhe1LL+1uW/nltZNpdxKT6zT0bBEGothOVGMj9OjkERiPuC0uh5d3f9m8Vhm2p7f2OteJDcndPDvPsN4VHpQNACZZGQFZGKHNISSUv88eUxhEiPTBveD3p3rtkQOFbtLfb3ZbLbUXbwEqOpY32O3dSku13aFRtnlqZQoJ/JiQtABEkXitV2jN4XvrrnYXSyeLN1wu7cZvXCuEShEjSQDmUiATIwlk1ahXIhEQNwJAsFhXcynl1otM55lj5xo37ePlVz7Nq3P3hxG+6w0ZBAEHNuZ4xaBiTGcMZc4IHEjj+CLhTQF+0RvoSgaefkMDMNh2TLl2uju/2PMhtgzGgYvsKAKUUsJ2uVqynd05PMd+dUrXCYJj8ZVYv4Xb/7yDAxfCq5V8Kkg0gj4Ep+WhTfwPmM24HxKAwfOh/gEISDnaOb5/f6M3+NxZvx+LahOPsbJ88EtVOF8XEEjQgAqiYYEM+Z4Y/zVq0TiVSP8onDwjAjhwOy+Axr9ABqBdJIGtVT6U9KJE4iUhEDyqnXJpM2WtKmDDkdXF6uLf64h4fHVNdyATq1nSOeAQQEZF9QKA9tKkWRai2WfRqFIJjH0m6h1os4w0Td0AMt64QY4sV6e0Gz/dmpgvUGpdQgLm1UOjrAZQ/G4EOEiGMhQCCQUxuMI+23Y3KUKDGRpNzVDx5F28xQwNmZ0OpuNuahCBLjRbl/HYBa3rzSPLuP2ug2L2xewuP0XeT/6drCaef/wfxs4gC0fziYeynonHsovEg+IXJSx+kYuEl1Mu7L/15kPXc/Mp6GJyXz+n9CJSb3kKoJfv9SLD6lXZeyG6hS7ARjH9wz533I/JnhsOZPSxv968CjznglD8Pj95FP7V5JPOPLCfE4+5ZB8/pvo1QbR6yI2euWY/QpUYpgas1/mSsCsZqjIfquEz1aqHD4r9aQUNqGqxvBZT8JqeqVWS8qlQsoK4TP39FveAAwHry39hicCIqmpSL+5xu8r/kz8ni7H7yNHVOz++ub/wyvz/49yHLNaugaoEAAAAABJRU5ErkJggg==
// @match        *://*/*
// @exclude      *://yiyan.baidu.com/*
// @exclude      *://*.bing.com/search*
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @run-at       document-start
// @antifeature  ads
// @license      GPL
// ==/UserScript==
(function (w) { if (w) { w.name = 'h5player'; } })();

/* 保存重要的原始函数，防止被外部脚本污染 */
const originalMethods = {
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  },
  setInterval: window.setInterval,
  setTimeout: window.setTimeout,

  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  customElementsMethods: {
    define: window.customElements.define,
    get: window.customElements.get
  }
};

/**
 * 元素监听器
 * @param selector -必选
 * @param fn -必选，元素存在时的回调
 * @param shadowRoot -可选 指定监听某个shadowRoot下面的DOM元素
 * 参考：https://javascript.ruanyifeng.com/dom/mutationobserver.html
 */
function ready (selector, fn, shadowRoot) {
  const win = window;
  const docRoot = shadowRoot || win.document.documentElement;
  if (!docRoot) return false
  const MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
  const listeners = docRoot._MutationListeners || [];

  function $ready (selector, fn) {
    // 储存选择器和回调函数
    listeners.push({
      selector: selector,
      fn: fn
    });

    /* 增加监听对象 */
    if (!docRoot._MutationListeners || !docRoot._MutationObserver) {
      docRoot._MutationListeners = listeners;
      docRoot._MutationObserver = new MutationObserver(() => {
        for (let i = 0; i < docRoot._MutationListeners.length; i++) {
          const item = docRoot._MutationListeners[i];
          check(item.selector, item.fn);
        }
      });

      docRoot._MutationObserver.observe(docRoot, {
        childList: true,
        subtree: true
      });
    }

    // 检查节点是否已经在DOM中
    check(selector, fn);
  }

  function check (selector, fn) {
    const elements = docRoot.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element._MutationReadyList_ = element._MutationReadyList_ || [];
      if (!element._MutationReadyList_.includes(fn)) {
        element._MutationReadyList_.push(fn);
        fn.call(element, element);
      }
    }
  }

  const selectorArr = Array.isArray(selector) ? selector : [selector];
  selectorArr.forEach(selector => $ready(selector, fn));
}

/**
 * 某些网页用了attachShadow closed mode，需要open才能获取video标签，例如百度云盘
 * 解决参考：
 * https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn#closed
 * https://stackoverflow.com/questions/54954383/override-element-prototype-attachshadow-using-chrome-extension
 */
function hackAttachShadow () {
  if (window._hasHackAttachShadow_) return
  try {
    window._shadowDomList_ = [];
    window.Element.prototype._attachShadow = window.Element.prototype.attachShadow;
    window.Element.prototype.attachShadow = function () {
      const arg = arguments;
      if (arg[0] && arg[0].mode) {
        // 强制使用 open mode
        arg[0].mode = 'open';
      }
      const shadowRoot = this._attachShadow.apply(this, arg);
      // 存一份shadowDomList
      window._shadowDomList_.push(shadowRoot);

      /* 让shadowRoot里面的元素有机会访问shadowHost */
      shadowRoot._shadowHost = this;

      // 在document下面添加 addShadowRoot 自定义事件
      const shadowEvent = new window.CustomEvent('addShadowRoot', {
        shadowRoot,
        detail: {
          shadowRoot,
          message: 'addShadowRoot',
          time: new Date()
        },
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(shadowEvent);

      return shadowRoot
    };
    window._hasHackAttachShadow_ = true;
  } catch (e) {
    console.error('hackAttachShadow error by h5player plug-in', e);
  }
}

/*!
 * @name         original.js
 * @description  存储部分重要的原生函数，防止被外部污染，此逻辑应尽可能前置，否则存储的将是污染后的函数
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/10/16 10:32
 * @github       https://github.com/xxxily
 */

const original = {
  // 防止defineProperty和defineProperties被AOP脚本重写
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  },

  // 防止此类玩法：https://juejin.cn/post/6865910564817010702
  Proxy,

  Map,
  map: {
    clear: Map.prototype.clear,
    set: Map.prototype.set,
    has: Map.prototype.has,
    get: Map.prototype.get,
    delete: Map.prototype.delete
  },

  console: {
    log: console.log,
    info: console.info,
    error: console.error,
    warn: console.warn,
    table: console.table
  },

  ShadowRoot,
  HTMLMediaElement,
  CustomEvent,
  // appendChild: Node.prototype.appendChild,

  JSON: {
    parse: JSON.parse,
    stringify: JSON.stringify
  },

  alert,
  confirm,
  prompt
};

/**
 * 媒体标签检测，可以检测出viode、audio、以及其它标签名经过改造后的媒体Element
 * @param {Function} handler -必选 检出后要执行的回调函数
 * @returns mediaElementList
 */
const mediaCore = (function () {
  let hasMediaCoreInit = false;
  let hasProxyHTMLMediaElement = false;
  let originDescriptors = {};
  const originMethods = {};
  const mediaElementList = [];
  const mediaElementHandler = [];
  const mediaMap = new original.Map();

  const firstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase());
  function isHTMLMediaElement (el) {
    return el instanceof original.HTMLMediaElement
  }

  /**
   * 根据HTMLMediaElement的实例对象创建增强控制的相关API函数，从而实现锁定播放倍速，锁定暂停和播放等增强功能
   * @param {*} mediaElement - 必选，HTMLMediaElement的具体实例，例如网页上的video标签或new Audio()等
   * @returns mediaPlusApi
   */
  function createMediaPlusApi (mediaElement) {
    if (!isHTMLMediaElement(mediaElement)) { return false }

    let mediaPlusApi = original.map.get.call(mediaMap, mediaElement);
    if (mediaPlusApi) {
      return mediaPlusApi
    }

    /* 创建MediaPlusApi对象 */
    mediaPlusApi = {};
    const mediaPlusBaseApi = {
      /**
       * 创建锁，阻止外部逻辑操作mediaElement相关的属性或函数
       * 这里的锁逻辑只是数据状态标注和切换，具体的锁功能需在
       * proxyPrototypeMethod和hijackPrototypeProperty里实现
       */
      lock (keyName, duration) {
        const infoKey = `__${keyName}_info__`;
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};
        mediaPlusApi[infoKey].lock = true;

        /* 解锁时间信息 */
        duration = Number(duration);
        if (!Number.isNaN(duration) && duration > 0) {
          mediaPlusApi[infoKey].unLockTime = Date.now() + duration;
        }

        // original.console.log(`[mediaPlusApi][lock][${keyName}] ${duration}`)
      },
      unLock (keyName) {
        const infoKey = `__${keyName}_info__`;
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};
        mediaPlusApi[infoKey].lock = false;
        mediaPlusApi[infoKey].unLockTime = Date.now() - 100;

        // original.console.log(`[mediaPlusApi][unLock][${keyName}]`)
      },
      isLock (keyName) {
        const info = mediaPlusApi[`__${keyName}_info__`] || {};

        if (info.unLockTime) {
          /* 延时锁根据当前时间计算是否还处于锁状态 */
          return Date.now() < info.unLockTime
        } else {
          return info.lock || false
        }
      },

      /* 注意：调用此处的get和set和apply不受锁的限制 */
      get (keyName) {
        if (originDescriptors[keyName] && originDescriptors[keyName].get && !originMethods[keyName]) {
          return originDescriptors[keyName].get.apply(mediaElement)
        }
      },
      set (keyName, val) {
        if (originDescriptors[keyName] && originDescriptors[keyName].set && !originMethods[keyName] && typeof val !== 'undefined') {
          // original.console.log(`[mediaPlusApi][${keyName}] 执行原生set操作`)
          return originDescriptors[keyName].set.apply(mediaElement, [val])
        }
      },
      apply (keyName) {
        if (originMethods[keyName] instanceof Function) {
          const args = Array.from(arguments);
          args.shift();
          // original.console.log(`[mediaPlusApi][${keyName}] 执行原生apply操作`)
          return originMethods[keyName].apply(mediaElement, args)
        }
      }
    };

    mediaPlusApi = { ...mediaPlusApi, ...mediaPlusBaseApi };

    /**
     * 扩展api列表。实现'playbackRate', 'volume', 'currentTime', 'play', 'pause'的纯api调用效果，具体可用API如下：
     * mediaPlusApi.lockPlaybackRate()
     * mediaPlusApi.unLockPlaybackRate()
     * mediaPlusApi.isLockPlaybackRate()
     * mediaPlusApi.getPlaybackRate()
     * mediaPlusApi.setPlaybackRate(val)
     *
     * mediaPlusApi.lockVolume()
     * mediaPlusApi.unLockVolume()
     * mediaPlusApi.isLockVolume()
     * mediaPlusApi.getVolume()
     * mediaPlusApi.setVolume(val)
     *
     * mediaPlusApi.lockCurrentTime()
     * mediaPlusApi.unLockCurrentTime()
     * mediaPlusApi.isLockCurrentTime()
     * mediaPlusApi.getCurrentTime()
     * mediaPlusApi.setCurrentTime(val)
     *
     * mediaPlusApi.lockPlay()
     * mediaPlusApi.unLockPlay()
     * mediaPlusApi.isLockPlay()
     * mediaPlusApi.applyPlay()
     *
     * mediaPlusApi.lockPause()
     * mediaPlusApi.unLockPause()
     * mediaPlusApi.isLockPause()
     * mediaPlusApi.applyPause()
     */
    const extApiKeys = ['playbackRate', 'volume', 'currentTime', 'play', 'pause'];
    const baseApiKeys = Object.keys(mediaPlusBaseApi);
    extApiKeys.forEach(key => {
      baseApiKeys.forEach(baseKey => {
        /* 当key对应的是函数时，不应该有get、set的api，而应该有apply的api */
        if (originMethods[key] instanceof Function) {
          if (baseKey === 'get' || baseKey === 'set') {
            return true
          }
        } else if (baseKey === 'apply') {
          return true
        }

        mediaPlusApi[`${baseKey}${firstUpperCase(key)}`] = function () {
          return mediaPlusBaseApi[baseKey].apply(null, [key, ...arguments])
        };
      });
    });

    original.map.set.call(mediaMap, mediaElement, mediaPlusApi);

    return mediaPlusApi
  }

  /* 检测到media对象的处理逻辑，依赖Proxy对media函数的代理 */
  function mediaDetectHandler (ctx) {
    if (isHTMLMediaElement(ctx) && !mediaElementList.includes(ctx)) {
      // console.log(`[mediaDetectHandler]`, ctx)
      mediaElementList.push(ctx);
      createMediaPlusApi(ctx);

      try {
        mediaElementHandler.forEach(handler => {
          (handler instanceof Function) && handler(ctx);
        });
      } catch (e) {}
    }
  }

  /* 代理方法play和pause方法，确保能正确暂停和播放 */
  function proxyPrototypeMethod (element, methodName) {
    const originFunc = element && element.prototype[methodName];
    if (!originFunc) return

    element.prototype[methodName] = new original.Proxy(originFunc, {
      apply (target, ctx, args) {
        mediaDetectHandler(ctx);
        // original.console.log(`[mediaElementMethodProxy] 执行代理后的${methodName}函数`)

        /* 对播放暂停逻辑进行增强处理，例如允许通过mediaPlusApi进行锁定 */
        if (['play', 'pause'].includes(methodName)) {
          const mediaPlusApi = createMediaPlusApi(ctx);
          if (mediaPlusApi && mediaPlusApi.isLock(methodName)) {
            // original.console.log(`[mediaElementMethodProxy] ${methodName}已被锁定，无法执行相关操作`)
            return
          }
        }

        const result = target.apply(ctx, args);

        // TODO 对函数执行结果进行观察判断

        return result
      }
    });

    // 不建议对HTMLMediaElement的原型链进行扩展，这样容易让网页检测到mediaCore增强逻辑的存在
    // if (originMethods[methodName]) {
    //   element.prototype[`__${methodName}__`] = originMethods[methodName]
    // }
  }

  /**
   * 劫持 playbackRate、volume、currentTime 属性，并增加锁定的逻辑，从而实现更强的抗干扰能力
   */
  function hijackPrototypeProperty (element, property) {
    if (!element || !element.prototype || !originDescriptors[property]) {
      return false
    }

    original.Object.defineProperty.call(Object, element.prototype, property, {
      configurable: true,
      enumerable: true,
      get: function () {
        const val = originDescriptors[property].get.apply(this, arguments);
        // original.console.log(`[mediaElementPropertyHijack][${property}][get]`, val)

        const mediaPlusApi = createMediaPlusApi(this);
        if (mediaPlusApi && mediaPlusApi.isLock(property)) {
          if (property === 'playbackRate') {
            return +!+[]
          }
        }

        return val
      },
      set: function (value) {
        // original.console.log(`[mediaElementPropertyHijack][${property}][set]`, value)

        if (property === 'src') {
          mediaDetectHandler(this);
        }

        /* 对调速、调音和进度控制逻辑进行增强处理，例如允许通过mediaPlusApi这些功能进行锁定 */
        if (['playbackRate', 'volume', 'currentTime'].includes(property)) {
          const mediaPlusApi = createMediaPlusApi(this);
          if (mediaPlusApi && mediaPlusApi.isLock(property)) {
            // original.console.log(`[mediaElementPropertyHijack] ${property}已被锁定，无法执行相关操作`)
            return
          }
        }

        return originDescriptors[property].set.apply(this, arguments)
      }
    });
  }

  function mediaPlus (mediaElement) {
    return createMediaPlusApi(mediaElement)
  }

  function mediaProxy () {
    if (!hasProxyHTMLMediaElement) {
      const proxyMethods = ['play', 'pause', 'load', 'addEventListener'];
      proxyMethods.forEach(methodName => { proxyPrototypeMethod(HTMLMediaElement, methodName); });

      const hijackProperty = ['playbackRate', 'volume', 'currentTime', 'src'];
      hijackProperty.forEach(property => { hijackPrototypeProperty(HTMLMediaElement, property); });

      hasProxyHTMLMediaElement = true;
    }

    return hasProxyHTMLMediaElement
  }

  /**
   * 媒体标签检测，可以检测出viode、audio、以及其它标签名经过改造后的媒体Element
   * @param {Function} handler -必选 检出后要执行的回调函数
   * @returns mediaElementList
   */
  function mediaChecker (handler) {
    if (!(handler instanceof Function) || mediaElementHandler.includes(handler)) {
      return mediaElementList
    } else {
      mediaElementHandler.push(handler);
    }

    if (!hasProxyHTMLMediaElement) {
      mediaProxy();
    }

    return mediaElementList
  }

  /**
   * 初始化mediaCore相关功能
   */
  function init (mediaCheckerHandler) {
    if (hasMediaCoreInit) { return false }

    originDescriptors = Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype);

    Object.keys(HTMLMediaElement.prototype).forEach(key => {
      try {
        if (HTMLMediaElement.prototype[key] instanceof Function) {
          originMethods[key] = HTMLMediaElement.prototype[key];
        }
      } catch (e) {}
    });

    mediaCheckerHandler = mediaCheckerHandler instanceof Function ? mediaCheckerHandler : function () {};
    mediaChecker(mediaCheckerHandler);

    hasMediaCoreInit = true;
    return true
  }

  return {
    init,
    mediaPlus,
    mediaChecker,
    originDescriptors,
    originMethods,
    mediaElementList
  }
})();

/*!
 * @name         utils.js
 * @description  数据类型相关的方法
 * @version      0.0.1
 * @author       Blaze
 * @date         22/03/2019 22:46
 * @github       https://github.com/xxxily
 */

/**
 * 准确地获取对象的具体类型 参见：https://www.talkingcoder.com/article/6333557442705696719
 * @param obj { all } -必选 要判断的对象
 * @returns {*} 返回判断的具体类型
 */
function getType (obj) {
  if (obj == null) {
    return String(obj)
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? (obj.constructor && obj.constructor.name && obj.constructor.name.toLowerCase()) ||
    /function\s(.+?)\(/.exec(obj.constructor)[1].toLowerCase()
    : typeof obj
}

const isType = (obj, typeName) => getType(obj) === typeName;
const isObj$1 = obj => isType(obj, 'object');

/*!
 * @name         object.js
 * @description  对象操作的相关方法
 * @version      0.0.1
 * @author       Blaze
 * @date         21/03/2019 23:10
 * @github       https://github.com/xxxily
 */

/**
 * 对一个对象进行深度拷贝
 * @source -必选（Object|Array）需拷贝的对象或数组
 */
function clone (source) {
  var result = {};

  if (typeof source !== 'object') {
    return source
  }
  if (Object.prototype.toString.call(source) === '[object Array]') {
    result = [];
  }
  if (Object.prototype.toString.call(source) === '[object Null]') {
    result = null;
  }
  for (var key in source) {
    result[key] = (typeof source[key] === 'object') ? clone(source[key]) : source[key];
  }
  return result
}

/* 遍历对象，但不包含其原型链上的属性 */
function forIn (obj, fn) {
  fn = fn || function () {};
  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}

/**
 * 深度合并两个可枚举的对象
 * @param objA {object} -必选 对象A
 * @param objB {object} -必选 对象B
 * @param concatArr {boolean} -可选 合并数组，默认遇到数组的时候，直接以另外一个数组替换当前数组，将此设置true则，遇到数组的时候一律合并，而不是直接替换
 * @returns {*|void}
 */
function mergeObj (objA, objB, concatArr) {
  function isObj (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }
  function isArr (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
  if (!isObj(objA) || !isObj(objB)) return objA
  function deepMerge (objA, objB) {
    forIn(objB, function (key) {
      const subItemA = objA[key];
      const subItemB = objB[key];
      if (typeof subItemA === 'undefined') {
        objA[key] = subItemB;
      } else {
        if (isObj(subItemA) && isObj(subItemB)) {
          /* 进行深层合并 */
          objA[key] = deepMerge(subItemA, subItemB);
        } else {
          if (concatArr && isArr(subItemA) && isArr(subItemB)) {
            objA[key] = subItemA.concat(subItemB);
          } else {
            objA[key] = subItemB;
          }
        }
      }
    });
    return objA
  }
  return deepMerge(objA, objB)
}

/**
 * 根据文本路径获取对象里面的值，如需支持数组请使用lodash的get方法
 * @param obj {Object} -必选 要操作的对象
 * @param path {String} -必选 路径信息
 * @returns {*}
 */
function getValByPath$1 (obj, path) {
  path = path || '';
  const pathArr = path.split('.');
  let result = obj;

  /* 递归提取结果值 */
  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break
    result = result[pathArr[i]];
  }

  return result
}

/**
 * 根据文本路径设置对象里面的值，如需支持数组请使用lodash的set方法
 * @param obj {Object} -必选 要操作的对象
 * @param path {String} -必选 路径信息
 * @param val {Any} -必选 如果不传该参，最终结果会被设置为undefined
 * @returns {Boolean} 返回true表示设置成功，否则设置失败
 */
function setValByPath (obj, path, val) {
  if (!obj || !path || typeof path !== 'string') {
    return false
  }

  let result = obj;
  const pathArr = path.split('.');

  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break

    if (i === pathArr.length - 1) {
      result[pathArr[i]] = val;
      return Number.isNaN(val) ? Number.isNaN(result[pathArr[i]]) : result[pathArr[i]] === val
    }

    result = result[pathArr[i]];
  }

  return false
}

const quickSort = function (arr) {
  if (arr.length <= 1) { return arr }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
};

function hideDom (selector, delay) {
  setTimeout(function () {
    const dom = document.querySelector(selector);
    if (dom) {
      dom.style.opacity = 0;
    }
  }, delay || 1000 * 5);
}

/**
 * 向上查找操作
 * @param dom {Element} -必选 初始dom元素
 * @param fn {function} -必选 每一级ParentNode的回调操作
 * 如果函数返回true则表示停止向上查找动作
 */
function eachParentNode (dom, fn) {
  let parent = dom.parentNode;
  while (parent) {
    const isEnd = fn(parent, dom);
    parent = parent.parentNode;
    if (isEnd) {
      break
    }
  }
}

/**
 * 动态加载css内容
 * @param cssText {String} -必选 样式的文本内容
 * @param id {String} -可选 指定样式文本的id号，如果已存在对应id号则不会再次插入
 * @param insetTo {Dom} -可选 指定插入到哪
 * @returns {HTMLStyleElement}
 */
function loadCSSText (cssText, id, insetTo) {
  if (id && document.getElementById(id)) {
    return false
  }

  const style = document.createElement('style');
  const head = insetTo || document.head || document.getElementsByTagName('head')[0];
  style.appendChild(document.createTextNode(cssText));
  head.appendChild(style);

  if (id) {
    style.setAttribute('id', id);
  }

  return style
}

/**
 * 判断当前元素是否为可编辑元素
 * @param target
 * @returns Boolean
 */
function isEditableTarget (target) {
  const isEditable = target.getAttribute && target.getAttribute('contenteditable') === 'true';
  const isInputDom = /INPUT|TEXTAREA|SELECT|LABEL/.test(target.nodeName);
  return isEditable || isInputDom
}

/**
 * 判断某个元素是否处于shadowDom里面
 * 参考：https://www.coder.work/article/299700
 * @param node
 * @returns {boolean}
 */
function isInShadow (node, returnShadowRoot) {
  for (; node; node = node.parentNode) {
    if (node.toString() === '[object ShadowRoot]') {
      if (returnShadowRoot) {
        return node
      } else {
        return true
      }
    }
  }
  return false
}

/**
 * 判断某个元素是否处于可视区域，适用于被动调用情况，需要高性能，请使用IntersectionObserver
 * 参考：https://github.com/febobo/web-interview/issues/84
 * @param element
 * @returns {boolean}
 */
function isInViewPort (element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
    top,
    right,
    bottom,
    left
  } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  )
}

/**
 * 基于IntersectionObserver的可视区域判断
 * @param { Function } callback
 * @param { Element } element
 * @returns { IntersectionObserver }
 */
function observeVisibility (callback, element) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        /* 元素在可视区域内 */
        callback(entry, observer);
      } else {
        /* 元素不在可视区域内 */
        callback(null, observer);
      }
    });
  });

  if (element) {
    observer.observe(element);
  }

  /* 返回观察对象，以便外部可以取消观察：observer.disconnect()，或者增加新的观察对象：observer.observe(element) */
  return observer
}

// 使用示例：
// const temp1 = document.querySelector('#temp1')
// var observer = observeVisibility(function (entry, observer) {
//   if (entry) {
//     console.log('[entry]', entry)
//   } else {
//     console.log('[entry]', 'null')
//   }
// }, temp1)

/**
 * 判断是否为不可见的元素，主要用以判断是否已经脱离文档流或被设置为display:none的元素
 * @param {*} element
 * @returns
 */
function isOutOfDocument (element) {
  if (!element || element.offsetParent === null) {
    return true
  }

  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = element.getBoundingClientRect();

  return (
    top === 0 &&
    right === 0 &&
    bottom === 0 &&
    left === 0 &&
    width === 0 &&
    height === 0
  )
}

/**
 * 有些网站开启了CSP，会导致无法使用innerHTML，所以需要使用trustedTypes
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
 * @param { String } htmlString -必选 HTML字符串
 * @returns
 */
function createTrustedHTML (htmlString) {
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    /* 创建default策略前先检查是否已经存在 */
    let policy = window.trustedTypes.defaultPolicy || null;
    if (!policy) {
      policy = window.trustedTypes.createPolicy('default', {
        createHTML: (string) => string
      });
    }

    const trustedHTML = policy.createHTML(htmlString);

    return trustedHTML
  } else {
    return htmlString
  }
}

/**
 * 解析HTML字符串，返回DOM节点数组
 * @param { String } -必选 htmlString HTML字符串
 * @param { HTMLElement } -可选 targetElement 目标元素，如果传入，则会将解析后的节点添加到该元素中
 * @returns { Array } DOM节点数组
 */
function parseHTML (htmlString, targetElement) {
  if (typeof htmlString !== 'string') {
    throw new Error('[parseHTML] Input must be a string')
  }

  const trustedHTML = createTrustedHTML(htmlString);

  const parser = new DOMParser();
  const doc = parser.parseFromString(trustedHTML, 'text/html');
  const nodes = doc.body.childNodes;
  const result = [];

  if (targetElement && targetElement.appendChild) {
    nodes.forEach(node => {
      const targetNode = node.cloneNode(true);
      try {
        /* 有些网站出于业务需要会对appendChild进行重写，可能会导致appendChild报错，所以这里需要try catch */
        targetElement.appendChild(targetNode);
      } catch (e) {
        console.error('[parseHTML] appendChild error', e, targetElement, targetNode);
      }
      result.push(targetNode);
    });
  }

  return result.length ? result : nodes
}

/**
 * 将行内样式转换成对象的形式
 * @param {string} inlineStyle -必选，例如： position: relative; opacity: 1; visibility: hidden; transform: scale(0.1) rotate(180deg);
 * @returns {Object}
 */

function inlineStyleToObj (inlineStyle) {
  if (typeof inlineStyle !== 'string') {
    return {}
  }

  const result = {};
  const styArr = inlineStyle.split(';');
  styArr.forEach(item => {
    const tmpArr = item.split(':');
    if (tmpArr.length === 2) {
      result[tmpArr[0].trim()] = tmpArr[1].trim();
    }
  });

  return result
}

function objToInlineStyle (obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }

  const styleArr = [];
  Object.keys(obj).forEach(key => {
    styleArr.push(`${key}: ${obj[key]}`);
  });

  return styleArr.join('; ')
}

/* ua信息伪装 */
function fakeUA (ua) {
  // Object.defineProperty(navigator, 'userAgent', {
  //   value: ua,
  //   writable: false,
  //   configurable: false,
  //   enumerable: true
  // })

  const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'userAgent');
  Object.defineProperty(Navigator.prototype, 'userAgent', { ...desc, get: function () { return ua } });
}

/* ua信息来源：https://developers.whatismybrowser.com */
const userAgentMap = {
  android: {
    chrome: 'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36',
    firefox: 'Mozilla/5.0 (Android 7.0; Mobile; rv:57.0) Gecko/57.0 Firefox/57.0'
  },
  iPhone: {
    safari: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/111.0.0.0 Mobile/15E148 Safari/604.1',
    chrome: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.121 Mobile/15E148 Safari/605.1'
  },
  iPad: {
    safari: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
    chrome: 'Mozilla/5.0 (iPad; CPU OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.155 Mobile/15E148 Safari/605.1'
  },
  mac: {
    safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15',
    chrome: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Firefox) Chrome/74.0.3729.157 Safari/537.36'
  }
};

/**
 * 判断是否处于Iframe中
 * @returns {boolean}
 */
function isInIframe () {
  return window !== window.top
}

/**
 * 判断是否处于跨域限制的Iframe中
 * @returns {boolean}
 */
function isInCrossOriginFrame () {
  let result = true;
  try {
    if (window.top.localStorage || window.top.location.href) {
      result = false;
    }
  } catch (e) {
    result = true;
  }
  return result
}

/**
 * 简单的节流函数
 * @param fn
 * @param interval
 * @returns {Function}
 */
function throttle (fn, interval = 80) {
  let timeout = null;
  return function () {
    if (timeout) return false
    timeout = setTimeout(() => {
      timeout = null;
    }, interval);
    fn.apply(this, arguments);
  }
}

/*!
 * @name         url.js
 * @description  用于对url进行解析的相关方法
 * @version      0.0.1
 * @author       Blaze
 * @date         27/03/2019 15:52
 * @github       https://github.com/xxxily
 */

/**
 * 参考示例：
 * https://segmentfault.com/a/1190000006215495
 * 注意：该方法必须依赖浏览器的DOM对象
 */

function parseURL (url) {
  var a = document.createElement('a');
  a.href = url || window.location.href;
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    origin: a.origin,
    search: a.search,
    query: a.search,
    file: (a.pathname.match(/\/([^/?#]+)$/i) || ['', ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^/]+(.+)/) || ['', ''])[1],
    params: (function () {
      var ret = {};
      var seg = [];
      var paramArr = a.search.replace(/^\?/, '').split('&');

      for (var i = 0; i < paramArr.length; i++) {
        var item = paramArr[i];
        if (item !== '' && item.indexOf('=')) {
          seg.push(item);
        }
      }

      for (var j = 0; j < seg.length; j++) {
        var param = seg[j];
        var idx = param.indexOf('=');
        var key = param.substring(0, idx);
        var val = param.substring(idx + 1);
        if (!key) {
          ret[val] = null;
        } else {
          ret[key] = val;
        }
      }
      return ret
    })()
  }
}

/**
 * 将params对象转换成字符串模式
 * @param params {Object} - 必选 params对象
 * @returns {string}
 */
function stringifyParams (params) {
  var strArr = [];

  if (!Object.prototype.toString.call(params) === '[object Object]') {
    return ''
  }

  for (var key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      var val = params[key];
      var valType = Object.prototype.toString.call(val);

      if (val === '' || valType === '[object Undefined]') continue

      if (val === null) {
        strArr.push(key);
      } else if (valType === '[object Array]') {
        strArr.push(key + '=' + val.join(','));
      } else {
        val = (JSON.stringify(val) || '' + val).replace(/(^"|"$)/g, '');
        strArr.push(key + '=' + val);
      }
    }
  }
  return strArr.join('&')
}

/**
 * 将通过parseURL解析出来url对象重新还原成url地址
 * 主要用于查询参数被动态修改后，再重组url链接
 * @param obj {Object} -必选 parseURL解析出来url对象
 */
function stringifyToUrl (urlObj) {
  var query = stringifyParams(urlObj.params) || '';
  if (query) { query = '?' + query; }
  var hash = urlObj.hash ? '#' + urlObj.hash : '';
  return urlObj.origin + urlObj.path + query + hash
}

/* 当前用到的快捷键 */
const hasUseKey = {
  keyCodeList: [13, 16, 17, 18, 27, 32, 37, 38, 39, 40, 49, 50, 51, 52, 67, 68, 69, 70, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 97, 98, 99, 100, 220],
  keyList: ['enter', 'shift', 'control', 'alt', 'escape', ' ', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown', '1', '2', '3', '4', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '\\', '|'],
  keyMap: {
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    esc: 27,
    space: 32,
    '←': 37,
    '↑': 38,
    '→': 39,
    '↓': 40,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    i: 73,
    j: 74,
    k: 75,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    pad1: 97,
    pad2: 98,
    pad3: 99,
    pad4: 100,
    '\\': 220
  }
};

/**
 * 判断当前按键是否注册为需要用的按键
 * 用于减少对其它键位的干扰
 */
function isRegisterKey (event) {
  const keyCode = event.keyCode;
  const key = event.key.toLowerCase();
  return hasUseKey.keyCodeList.includes(keyCode) ||
    hasUseKey.keyList.includes(key)
}

/**
 * 由于tampermonkey对window对象进行了封装，我们实际访问到的window并非页面真实的window
 * 这就导致了如果我们需要将某些对象挂载到页面的window进行调试的时候就无法挂载了
 * 所以必须使用特殊手段才能访问到页面真实的window对象，于是就有了下面这个函数
 * @returns {Promise<void>}
 */
async function getPageWindow () {
  return new Promise(function (resolve, reject) {
    if (window._pageWindow) {
      return resolve(window._pageWindow)
    }

    /* 尝试通过同步的方式获取pageWindow */
    try {
      const pageWin = getPageWindowSync();
      if (pageWin && pageWin.document && pageWin.XMLHttpRequest) {
        window._pageWindow = pageWin;
        resolve(pageWin);
        return pageWin
      }
    } catch (e) {}

    /* 下面异步获取pagewindow的方法在最新的chrome浏览器里已失效 */

    const listenEventList = ['load', 'mousemove', 'scroll', 'get-page-window-event'];

    function getWin (event) {
      window._pageWindow = this;
      // debug.log('getPageWindow succeed', event)
      listenEventList.forEach(eventType => {
        window.removeEventListener(eventType, getWin, true);
      });
      resolve(window._pageWindow);
    }

    listenEventList.forEach(eventType => {
      window.addEventListener(eventType, getWin, true);
    });

    /* 自行派发事件以便用最短的时间获得pageWindow对象 */
    window.dispatchEvent(new window.Event('get-page-window-event'));
  })
}
getPageWindow();

/**
 * 通过同步的方式获取pageWindow
 * 注意同步获取的方式需要将脚本写入head，部分网站由于安全策略会导致写入失败，而无法正常获取
 * @returns {*}
 */
function getPageWindowSync (rawFunction) {
  if (window.unsafeWindow) return window.unsafeWindow
  if (document._win_) return document._win_

  try {
    rawFunction = rawFunction || window.__rawFunction__ || Function.prototype.constructor;
    // return rawFunction('return window')()
    // Function('return (function(){}.constructor("return this")());')
    return rawFunction('return (function(){}.constructor("var getPageWindowSync=1; return this")());')()
  } catch (e) {
    console.error('getPageWindowSync error', e);

    const head = document.head || document.querySelector('head');
    const script = document.createElement('script');
    script.appendChild(document.createTextNode('document._win_ = window'));
    head.appendChild(script);

    return document._win_
  }
}

function openInTab (url, opts, referer) {
  if (referer) {
    const urlObj = parseURL(url);
    if (!urlObj.params.referer) {
      urlObj.params.referer = encodeURIComponent(window.location.href);
      url = stringifyToUrl(urlObj);
    }
  }

  if (window.GM_openInTab) {
    window.GM_openInTab(url, opts || {
      active: true,
      insert: true,
      setParent: true
    });
  } else {
    // 创建新的a标签并模拟点击
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.display = 'inline-block';
    a.style.width = '1px';
    a.style.height = '1px';
    a.style.opcity = 0;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); }, 300);
  }
}

/* 确保数字为正数 */
function numUp (num) {
  if (typeof num === 'number' && num < 0) {
    num = Math.abs(num);
  }
  return num
}

/* 确保数字为负数 */
function numDown (num) {
  if (typeof num === 'number' && num > 0) {
    num = -num;
  }
  return num
}

function isMediaElement (element) {
  return element && (element instanceof HTMLMediaElement || element.HTMLMediaElement || element.HTMLVideoElement || element.HTMLAudioElement)
}

function isVideoElement (element) {
  return element && (element instanceof HTMLVideoElement || element.HTMLVideoElement)
}

function isAudioElement (element) {
  return element && (element instanceof HTMLAudioElement || element.HTMLAudioElement)
}

/*!
 * configManager parse localStorage error * @name         configManager.ts
 * @description  配置统一管理脚本
 * @version      0.0.1
 * @author       xxxily
 * @date         2023/03/06 14:29
 * @github       https://github.com/xxxily
 */


/**
 * 判断localStorage是否可用
 * localStorage并不能保证100%可用，所以使用前必须进行判断，否则会导致部分网站下脚本出现异常
 * https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-from-window-access-deni
 * https://cloud.tencent.com/developer/article/1803097 (当localStorage不能用时，window.localStorage为null，而不是文中的undefined)
 */
function isLocalStorageUsable () {
  return window.localStorage && window.localStorage.getItem instanceof Function && window.localStorage.setItem instanceof Function
}

/**
 * 判断GlobalStorage是否可用，目前使用的GlobalStorage是基于tampermonkey提供的相关api
 * https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_setValue
 */
function isGlobalStorageUsable () {
  return window.GM_setValue && window.GM_getValue && window.GM_deleteValue && window.GM_listValues instanceof Function
}

/**
 * 存储干净的localStorage相关方法
 * 防止localStorage对象下的方法被改写而导致读取和写入规则不一样的问题
 */
const rawLocalStorage = (function getRawLocalStorage () {
  const localStorageApis = ['getItem', 'setItem', 'removeItem', 'clear', 'key'];

  const rawLocalStorage = {};

  localStorageApis.forEach((apiKey) => {
    if (isLocalStorageUsable()) {
      rawLocalStorage[`_${apiKey}_`] = localStorage[apiKey];
      rawLocalStorage[apiKey] = function () {
        return rawLocalStorage[`_${apiKey}_`].apply(localStorage, arguments)
      };
    } else {
      rawLocalStorage[apiKey] = function () {
        console.error('localStorage unavailable');
      };
    }
  });

  return rawLocalStorage
})();

class ConfigManager {
  constructor (opts) {
    this.opts = opts;
  }

  isLocalStorageUsable = isLocalStorageUsable
  isGlobalStorageUsable = isGlobalStorageUsable

  /**
   * 将confPath转换称最终存储到localStorage或globalStorage里的键名
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {keyName}
   */
  getConfKeyName (confPath = '') {
    return this.opts.prefix + confPath.replace(/\./g, '_')
  }

  /**
   * 将存储到localStorage或globalStorage里的键名转换成实际调用时候的confPath
   * @param {String} keyName -必选 存储到localStorage或globalStorage里的键名，例如：'_h5player_enhance_blockSetPlaybackRate'
   * @returns {confPath}
   */
  getConfPath (keyName = '') {
    return keyName.replace(this.opts.prefix, '').replace(/_/g, '.')
  }

  getConfPathList (config) {
    const confPathList = [];

    /* 递归获取所有配置项的路径 */
    function getConfPathList (config, path = '') {
      Object.keys(config).forEach((key) => {
        const pathKey = path ? `${path}.${key}` : key;
        if (Object.prototype.toString.call(config[key]) === '[object Object]') {
          getConfPathList(config[key], pathKey);
        } else {
          confPathList.push(pathKey);
        }
      });
    }
    getConfPathList(config);

    return confPathList
  }

  /**
   * 根据给定的配置路径，获取相关配置信息
   * 获取顺序：LocalStorage > GlobalStorage > defConfig > null
   * @param {String} confPath -必选，配置路径信息：例如：'enhance.blockSetPlaybackRate'
   * @returns {*} 如果返回null，则表示没获取到相关配置信息
   */
  get (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    /* 默认优先使用本地的localStorage配置 */
    const localConf = this.getLocalStorage(confPath);
    if (localConf !== null && localConf !== undefined) {
      return localConf
    }

    /* 如果localStorage没相关配置，则尝试使用GlobalStorage的配置 */
    const globalConf = this.getGlobalStorage(confPath);
    if (globalConf !== null && globalConf !== undefined) {
      return globalConf
    }

    /* 如果localStorage和GlobalStorage配置都没找到，则尝试在默认配置表里拿相关配置信息 */
    return this.getMemoryStorage(confPath)
  }

  /**
   * 将配置结果写入到localStorage或GlobalStorage
   * 写入顺序：LocalStorage > GlobalStorage
   * 无论是否写入成功都会将结果更新到defConfig里对应的配置项上
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  set (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val);

    let sucStatus = false;

    sucStatus = this.setLocalStorage(confPath, val);

    if (!sucStatus) {
      sucStatus = this.setGlobalStorage(confPath, val);
    }

    return sucStatus
  }

  /* 获取并列出当前所有已设定的配置项 */
  list () {
    const result = {
      localConf: this.listLocalStorage(),
      globalConf: this.listGlobalStorage(),
      defConfig: this.opts.config
    };
    return result
  }

  /* 清除已经写入到本地存储里的配置项 */
  clear () {
    this.clearLocalStorage();
    this.clearGlobalStorage();
  }

  getMemoryStorage (confPath) {
    if (typeof confPath !== 'string') { return null }

    const config = this.getConfObj();
    const val = getValByPath$1(config, confPath);
    if (typeof val !== 'undefined' && val !== null) {
      return val
    } else {
      return null
    }
  }

  /**
   * 根据给定的配置路径，获取LocalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getLocalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = this.getConfKeyName(confPath);

    if (isLocalStorageUsable()) {
      let localConf = rawLocalStorage.getItem(key);
      if (localConf !== null && localConf !== undefined) {
        try {
          localConf = JSON.parse(localConf);
        } catch (e) {
          console.error('configManager parse localStorage error:', key, localConf);
        }

        return localConf
      } else {
        return this.getMemoryStorage(confPath)
      }
    }

    return null
  }

  /**
   * 根据给定的配置路径，获取GlobalStorage下定义的配置信息
   * @param {String} confPath -必选，配置路径信息
   * @returns
   */
  getGlobalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = this.getConfKeyName(confPath);

    if (isGlobalStorageUsable()) {
      const globalConf = window.GM_getValue(key);
      if (globalConf !== null && globalConf !== undefined) {
        return globalConf
      } else {
        return this.getMemoryStorage(confPath)
      }
    } else {
      /* 非油猴环境，回退到localStorage存储 */
      return this.getLocalStorage(confPath)
    }
  }

  setMemoryStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    } else {
      setValByPath(this.opts.config, confPath, val);
      return true
    }
  }

  /**
   * 将配置结果写入到localStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setLocalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val);

    const key = this.getConfKeyName(confPath);

    if (isLocalStorageUsable()) {
      try {
        if (Object.prototype.toString.call(val) === '[object Object]' || Array.isArray(val)) {
          val = JSON.stringify(val);
        }

        rawLocalStorage.setItem(key, val);

        return true
      } catch (e) {
        console.error('configManager set localStorage error:', key, val, e);
        return false
      }
    } else {
      return false
    }
  }

  /**
   * 将配置结果写入到globalStorage里
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setGlobalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val);

    const key = this.getConfKeyName(confPath);

    if (isGlobalStorageUsable()) {
      try {
        window.GM_setValue(key, val);
        return true
      } catch (e) {
        console.error('configManager set globalStorage error:', key, val, e);
        return false
      }
    } else {
      /* 非油猴环境，回退到localStorage存储 */
      return this.setLocalStorage(confPath, val)
    }
  }

  listLocalStorage () {
    if (isLocalStorageUsable()) {
      const result = {};
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          const confPath = this.getConfPath(key);
          result[confPath] = this.getLocalStorage(confPath);
        }
      });
      return result
    } else {
      return {}
    }
  }

  listGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const result = {};
      const globalStorage = window.GM_listValues();
      globalStorage.forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          const confPath = this.getConfPath(key);
          result[confPath] = this.getGlobalStorage(confPath);
        }
      });
      return result
    } else {
      return {}
    }
  }

  getConfObj () {
    const confList = this.list();

    /* 同步全局配置到this.opts.config */
    Object.keys(confList.globalConf).forEach((confPath) => {
      setValByPath(this.opts.config, confPath, confList.globalConf[confPath]);
    });

    /* 同步本地配置到this.opts.config */
    Object.keys(confList.localConf).forEach((confPath) => {
      setValByPath(this.opts.config, confPath, confList.localConf[confPath]);
    });

    return this.opts.config
  }

  setLocalStorageByObj (config) {
    const oldConfig = this.getConfObj();
    const confPathList = this.getConfPathList(config);
    confPathList.forEach((confPath) => {
      const oldVal = getValByPath$1(oldConfig, confPath);
      const val = getValByPath$1(config, confPath);

      /* 跳过一样的值或在旧配置中不存在的值 */
      if (oldVal === val || oldVal === undefined) {
        return
      }

      this.setLocalStorage(confPath, val);
    });
  }

  setGlobalStorageByObj (config) {
    const oldConfig = this.getConfObj();
    const confPathList = this.getConfPathList(config);
    confPathList.forEach((confPath) => {
      const oldVal = getValByPath$1(oldConfig, confPath);
      const val = getValByPath$1(config, confPath);

      /* 跳过一样的值或在旧配置中不存在的值 */

      if (oldVal === val || oldVal === undefined) {
        return
      }

      // console.log('setGlobalStorageByObj', confPath, val)

      this.setGlobalStorage(confPath, val);
    });
  }

  clearLocalStorage () {
    if (isLocalStorageUsable()) {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          rawLocalStorage.removeItem(key);
        }
      });
    }
  }

  clearGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const globalStorage = window.GM_listValues();
      globalStorage.forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          window.GM_deleteValue(key);
        }
      });
    }
  }

  mergeDefConf (conf) {
    return mergeObj(this.opts.config, conf)
  }
}

/* 使用示例： */
// const myConfig = new ConfigManager({
//   prefix: '_myConfig_',
//   config: {
//     hotkeys: [
//       {
//         desc: '测试',
//         key: 'v',
//         command: 'toggleVisible',
//         /* 如需禁用快捷键，将disabled设为true */
//         disabled: false,
//       },
//     ],
//     enable: true,
//     debug: false,
//   },
// })
// myConfig.set('enable', false)
// /* 对于数组，暂不支持直接修改数组元素，需要先获取数组，再修改数组元素，再重新写入 */
// const hotkeys = myConfig.get('hotkeys')
// hotkeys[0].disabled = true
// myConfig.set('hotkeys', hotkeys)

const configManager = new ConfigManager({
  prefix: '_h5player_',
  config: {
    enable: true,
    media: {
      autoPlay: false,
      playbackRate: 1,
      volume: 1,

      /* 最后一次设定的播放速度，默认1.5 */
      lastPlaybackRate: 1.5,

      /* 是否允许存储播放进度 */
      allowRestorePlayProgress: {

      },
      /* 视频播放进度映射表 */
      progress: {}
    },
    enableHotkeys: true,
    hotkeys: [
      {
        desc: '网页全屏',
        key: 'shift+enter',
        command: 'setWebFullScreen',
        /* 如需禁用快捷键，将disabled设为true */
        disabled: false
      },
      {
        desc: '全屏',
        key: 'enter',
        command: 'setFullScreen'
      },
      {
        desc: '切换画中画模式',
        key: 'shift+p',
        command: 'togglePictureInPicture'
      },
      {
        desc: '视频截图',
        key: 'shift+s',
        command: 'capture'
      },
      {
        desc: '启用或禁止自动恢复播放进度功能',
        key: 'shift+r',
        command: 'switchRestorePlayProgressStatus'
      },
      {
        desc: '垂直镜像翻转',
        key: 'shift+m',
        command: 'setMirror',
        args: [true]
      },
      {
        desc: '水平镜像翻转',
        key: 'm',
        command: 'setMirror'
      },
      {
        desc: '下载音视频文件（实验性功能）',
        key: 'shift+d',
        command: 'mediaDownload'
      },
      {
        desc: '缩小视频画面 -0.05',
        key: 'shift+x',
        command: 'setScaleDown'
      },
      {
        desc: '放大视频画面 +0.05',
        key: 'shift+c',
        command: 'setScaleUp'
      },
      {
        desc: '恢复视频画面',
        key: 'shift+z',
        command: 'resetTransform'
      },
      {
        desc: '画面向右移动10px',
        key: 'shift+arrowright',
        command: 'setTranslateRight'
      },
      {
        desc: '画面向左移动10px',
        key: 'shift+arrowleft',
        command: 'setTranslateLeft'
      },
      {
        desc: '画面向上移动10px',
        key: 'shift+arrowup',
        command: 'setTranslateUp'
      },
      {
        desc: '画面向下移动10px',
        key: 'shift+arrowdown',
        command: 'setTranslateDown'
      },
      {
        desc: '前进5秒',
        key: 'arrowright',
        command: 'setCurrentTimeUp'
      },
      {
        desc: '后退5秒',
        key: 'arrowleft',
        command: 'setCurrentTimeDown'
      },
      {
        desc: '前进30秒',
        key: 'ctrl+arrowright',
        command: 'setCurrentTimeUp',
        args: [30]
      },
      {
        desc: '后退30秒',
        key: 'ctrl+arrowleft',
        command: 'setCurrentTimeDown',
        args: [-30]
      },
      {
        desc: '音量升高 5%',
        key: 'arrowup',
        command: 'setVolumeUp',
        args: [0.05]
      },
      {
        desc: '音量降低 5%',
        key: 'arrowdown',
        command: 'setVolumeDown',
        args: [-0.05]
      },
      {
        desc: '音量升高 20%',
        key: 'ctrl+arrowup',
        command: 'setVolumeUp',
        args: [0.2]
      },
      {
        desc: '音量降低 20%',
        key: 'ctrl+arrowdown',
        command: 'setVolumeDown',
        args: [-0.2]
      },
      {
        desc: '切换暂停/播放',
        key: 'space',
        command: 'switchPlayStatus'
      },
      {
        desc: '减速播放 -0.1',
        key: 'x',
        command: 'setPlaybackRateDown'
      },
      {
        desc: '加速播放 +0.1',
        key: 'c',
        command: 'setPlaybackRateUp'
      },
      {
        desc: '正常速度播放',
        key: 'z',
        command: 'resetPlaybackRate'
      },
      {
        desc: '设置1x的播放速度',
        key: 'Digit1',
        command: 'setPlaybackRatePlus',
        args: 1
      },
      {
        desc: '设置1x的播放速度',
        key: 'Numpad1',
        command: 'setPlaybackRatePlus',
        args: 1
      },
      {
        desc: '设置2x的播放速度',
        key: 'Digit2',
        command: 'setPlaybackRatePlus',
        args: 2
      },
      {
        desc: '设置2x的播放速度',
        key: 'Numpad2',
        command: 'setPlaybackRatePlus',
        args: 2
      },
      {
        desc: '设置3x的播放速度',
        key: 'Digit3',
        command: 'setPlaybackRatePlus',
        args: 3
      },
      {
        desc: '设置3x的播放速度',
        key: 'Numpad3',
        command: 'setPlaybackRatePlus',
        args: 3
      },
      {
        desc: '设置4x的播放速度',
        key: 'Digit4',
        command: 'setPlaybackRatePlus',
        args: 4
      },
      {
        desc: '设置4x的播放速度',
        key: 'Numpad4',
        command: 'setPlaybackRatePlus',
        args: 4
      },
      {
        desc: '下一帧',
        key: 'F',
        command: 'freezeFrame',
        args: 1
      },
      {
        desc: '上一帧',
        key: 'D',
        command: 'freezeFrame',
        args: -1
      },
      {
        desc: '增加亮度',
        key: 'E',
        command: 'setBrightnessUp'
      },
      {
        desc: '减少亮度',
        key: 'W',
        command: 'setBrightnessDown'
      },
      {
        desc: '增加对比度',
        key: 'T',
        command: 'setContrastUp'
      },
      {
        desc: '减少对比度',
        key: 'R',
        command: 'setContrastDown'
      },
      {
        desc: '增加饱和度',
        key: 'U',
        command: 'setSaturationUp'
      },
      {
        desc: '减少饱和度',
        key: 'Y',
        command: 'setSaturationDown'
      },
      {
        desc: '增加色相',
        key: 'O',
        command: 'setHueUp'
      },
      {
        desc: '减少色相',
        key: 'I',
        command: 'setHueDown'
      },
      {
        desc: '模糊增加 1 px',
        key: 'K',
        command: 'setBlurUp'
      },
      {
        desc: '模糊减少 1 px',
        key: 'J',
        command: 'setBlurDown'
      },
      {
        desc: '图像复位',
        key: 'Q',
        command: 'resetFilterAndTransform'
      },
      {
        desc: '画面旋转 90 度',
        key: 'S',
        command: 'setRotate'
      },
      {
        desc: '播放下一集',
        key: 'N',
        command: 'setNextVideo'
      },
      {
        desc: '插入debugger断点',
        key: 'ctrl+shift+alt+d',
        command: 'debuggerNow'
      },
      {
        desc: '执行JS脚本',
        key: 'ctrl+j ctrl+s',
        command: () => {
          alert('自定义JS脚本');
        },
        when: ''
      }
    ],
    ui: {
      enable: true,
      alwaysShow: false
    },
    enhance: {
    /* 不禁用默认的调速逻辑，则在多个视频切换时，速度很容易被重置，所以该选项默认开启 */
      blockSetPlaybackRate: true,

      blockSetCurrentTime: false,
      blockSetVolume: false,
      allowExperimentFeatures: false,
      allowExternalCustomConfiguration: false,
      /* 是否开启音量增益功能 */
      allowAcousticGain: false,
      /* 是否开启跨域控制 */
      allowCrossOriginControl: true,
      unfoldMenu: false
    },
    language: 'auto',
    debug: false
  }
});

async function initUiConfigManager () {
  const isUiConfigPage = location.href.indexOf('h5player.anzz.top/tools/json-editor') > -1;
  const isUiConfigMode = location.href.indexOf('saveHandlerName=saveH5PlayerConfig') > -1;
  if (!isUiConfigPage || !isUiConfigMode) return

  function init (pageWindow) {
    const config = JSON.parse(JSON.stringify(configManager.getConfObj()));
    delete config.recommendList;
    if (Array.isArray(config.hotkeys)) {
      /* 给hotkeys的各自项添加disabled选项，以便在界面侧可以快速禁用或启用某个项 */
      config.hotkeys.forEach(item => {
        if (item.disabled === undefined) {
          item.disabled = false;
        }
      });
    }

    pageWindow.jsonEditor.set(config);

    // pageWindow.jsonEditor.collapseAll()
    pageWindow.jsonEditor.expandAll();

    pageWindow.saveH5PlayerConfig = function (editor) {
      try {
        const defConfig = configManager.getConfObj();
        const newConfig = editor.get();
        newConfig.recommendList = defConfig.recommendList || [];
        configManager.setGlobalStorageByObj(newConfig);
        alert('配置已更新');
      } catch (e) {
        alert(`配置格式异常，保存失败：${e}`);
      }
    };
  }

  let checkCount = 0;
  function checkJSONEditor (pageWindow) {
    if (!pageWindow.JSONEditor) {
      if (checkCount < 30) {
        setTimeout(() => {
          checkCount++;
          checkJSONEditor(pageWindow);
        }, 200);
      }

      return
    }

    init(pageWindow);
  }

  const pageWindow = await getPageWindow();

  if (!pageWindow) {
    return
  }

  checkJSONEditor(pageWindow);
}
initUiConfigManager();

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 **/

let TCC$1 = class TCC {
  constructor (taskConf, doTaskFunc) {
    this.conf = taskConf || {
      /**
       * 配置示例
       * 父级键名对应的是一级域名，
       * 子级键名对应的相关功能名称，键值对应的该功能要触发的点击选择器或者要调用的相关函数
       * 所有子级的键值都支持使用选择器触发或函数调用
       * 配置了子级的则使用子级配置逻辑进行操作，否则使用默认逻辑
       * 注意：include，exclude这两个子级键名除外，这两个是用来进行url范围匹配的
       * */
      'demo.demo': {
        fullScreen: '.fullscreen-btn',
        exitFullScreen: '.exit-fullscreen-btn',
        webFullScreen: function () {},
        exitWebFullScreen: '.exit-fullscreen-btn',
        autoPlay: '.player-start-btn',
        pause: '.player-pause',
        play: '.player-play',
        switchPlayStatus: '.player-play',
        playbackRate: function () {},
        currentTime: function () {},
        addCurrentTime: '.add-currenttime',
        subtractCurrentTime: '.subtract-currenttime',
        // 自定义快捷键的执行方式，如果是组合键，必须是 ctrl-->shift-->alt 这样的顺序，没有可以忽略，键名必须全小写
        shortcuts: {
          /* 注册要执行自定义回调操作的快捷键 */
          register: [
            'ctrl+shift+alt+c',
            'ctrl+shift+c',
            'ctrl+alt+c',
            'ctrl+c',
            'c'
          ],
          /* 自定义快捷键的回调操作 */
          callback: function (h5Player, taskConf, data) {
            const { event, player } = data;
            console.log(event, player);
          }
        },
        /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
        include: /^.*/,
        /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
        exclude: /\t/
      }
    };

    // 通过doTaskFunc回调定义配置该如何执行任务
    this.doTaskFunc = doTaskFunc instanceof Function ? doTaskFunc : function () {};
  }

  setTaskConf (taskConf) { this.conf = taskConf; }

  /**
   * 获取域名 , 目前实现方式不好，需改造，对地区性域名（如com.cn）、三级及以上域名支持不好
   * */
  getDomain () {
    const host = window.location.host;
    let domain = host;
    const tmpArr = host.split('.');
    if (tmpArr.length > 2) {
      tmpArr.shift();
      domain = tmpArr.join('.');
    }
    return domain
  }

  /**
   * 格式化配置任务
   * @param isAll { boolean } -可选 默认只格式当前域名或host下的配置任务，传入true则将所有域名下的任务配置都进行格式化
   */
  formatTCC (isAll) {
    const t = this;
    const keys = Object.keys(t.conf);
    const domain = t.getDomain();
    const host = window.location.host;

    function formatter (item) {
      const defObj = {
        include: /^.*/,
        exclude: /\t/
      };
      item.include = item.include || defObj.include;
      item.exclude = item.exclude || defObj.exclude;
      return item
    }

    const result = {};
    keys.forEach(function (key) {
      let item = t[key];
      if (isObj$1(item)) {
        if (isAll) {
          item = formatter(item);
          result[key] = item;
        } else {
          if (key === host || key === domain) {
            item = formatter(item);
            result[key] = item;
          }
        }
      }
    });
    return result
  }

  /* 判断所提供的配置任务是否适用于当前URL */
  isMatch (taskConf) {
    const url = window.location.href;
    let isMatch = false;
    if (!taskConf.include && !taskConf.exclude) {
      isMatch = true;
    } else {
      if (taskConf.include && taskConf.include.test(url)) {
        isMatch = true;
      }
      if (taskConf.exclude && taskConf.exclude.test(url)) {
        isMatch = false;
      }
    }
    return isMatch
  }

  /**
   * 获取任务配置，只能获取到当前域名下的任务配置信息
   * @param taskName {string} -可选 指定具体任务，默认返回所有类型的任务配置
   */
  getTaskConfig () {
    const t = this;
    if (!t._hasFormatTCC_) {
      t.formatTCC();
      t._hasFormatTCC_ = true;
    }
    const domain = t.getDomain();
    const taskConf = t.conf[window.location.host] || t.conf[domain];

    if (taskConf && t.isMatch(taskConf)) {
      return taskConf
    }

    return {}
  }

  /**
   * 执行当前页面下的相应任务
   * @param taskName {object|string} -必选，可直接传入任务配置对象，也可用是任务名称的字符串信息，自己去查找是否有任务需要执行
   * @param data {object} -可选，传给回调函数的数据
   */
  doTask (taskName, data) {
    const t = this;
    let isDo = false;
    if (!taskName) return isDo
    const taskConf = isObj$1(taskName) ? taskName : t.getTaskConfig();

    if (!isObj$1(taskConf) || !taskConf[taskName]) return isDo

    const task = taskConf[taskName];

    if (task) {
      isDo = t.doTaskFunc(taskName, taskConf, data);
    }

    return isDo
  }
};

class Debug {
  constructor (config = {}) {
    this.config = {
      msg: '[Debug Msg]',
      /* 显示调用栈信息 */
      trace: false,
      /* 是否把调用栈信息和要打印的信息放在一组折叠起来，直接输出的话再大量较多信息的时候会显得非常凌乱，所以默认true */
      traceGroup: true,
      printTime: false,

      /* 统一设置字体颜色，背景颜色，其它样式等 */
      color: '#000000',
      backgroundColor: 'transparent',
      style: '',

      ...config,

      /* 为不同的调试方法设置不同的字体颜色，背景颜色，其它样式等 */
      colorMap: {
        info: '#2274A5',
        log: '#95B46A',
        warn: '#F5A623',
        error: '#D33F49',
        ...config.colorMap || {}
      },
      backgroundColorMap: {
        info: '',
        log: '',
        warn: '',
        error: '',
        ...config.backgroundColorMap || {}
      },
      styleMap: {
        info: '',
        log: '',
        warn: '',
        error: '',
        ...config.styleMap || {}
      }
    };

    const debugMethodList = ['log', 'error', 'info', 'warn'];
    debugMethodList.forEach((name) => {
      this[name] = this.createDebugMethod(name);
    });
  }

  create (msg) {
    return new Debug(msg)
  }

  createDebugMethod (name) {
    name = name || 'info';

    const { msg, color, colorMap, backgroundColor, backgroundColorMap, style, styleMap, printTime, trace, traceGroup } = this.config;
    const textColor = colorMap[name] || color;
    const bgColor = backgroundColorMap[name] || backgroundColor;
    const customStyle = styleMap[name] || style;

    return function () {
      if (!window._debugMode_) {
        return false
      }

      const arg = Array.from(arguments);
      const arg0 = arg[0];
      arg.unshift(`color: ${textColor}; background-color: ${bgColor}; ${customStyle}`);

      let timeStr = '';

      if (printTime) {
        const curTime = new Date();
        const H = curTime.getHours();
        const M = curTime.getMinutes();
        const S = curTime.getSeconds();
        timeStr = `[${H}:${M}:${S}] `;
      }

      arg.unshift(`%c ${timeStr}${msg} `);

      if (trace) {
        if (traceGroup) {
          const arg1Str = typeof arg0 === 'string' ? arg0 : Object.prototype.toString.call(arg0);
          console.groupCollapsed(`%c ${timeStr}${msg} ${arg1Str}`, `color: ${textColor}; background-color: ${bgColor}; ${customStyle}`);
          window.console[name].apply(console, arg);
          console.trace();
          console.groupEnd();
        } else {
          window.console[name].apply(console, arg);
          console.trace();
        }
      } else {
        window.console[name].apply(window.console, arg);
      }
    }
  }

  isDebugMode () {
    return Boolean(window._debugMode_)
  }
}

// function demo () {
//   window._debugMode_ = true
//   window.debug = new Debug({
//     msg: '[Debug Message]',
//     colorMap: {
//       info: '#FFFFFF',
//       log: '#FFFFFF'
//     },
//     backgroundColorMap: {
//       info: '#2274A5',
//       log: '#95B46A'
//     },
//     style: 'font-size: 22px; font-weight: bold; padding: 2px 4px; border-radius: 2px;',
//     trace: true,
//     traceGroup: true,
//     printTime: true
//   })

//   window.debug.log('debug mode is on', window.debug)
//   window.debug.info('debug mode is on', window.debug)
//   window.debug.warn('debug mode is on', window.debug)
//   window.debug.error('debug mode is on', window.debug)
// }
// demo()

var Debug$1 = new Debug();

var debug = Debug$1.create({
  msg: '[H5player Msg]',
  trace: false,
  traceGroup: true,
  printTime: false
});

const $q = function (str) { return document.querySelector(str) };

/**
 * 任务配置中心 Task Control Center
 * 用于配置所有无法进行通用处理的任务，如不同网站的全屏方式不一样，必须调用网站本身的全屏逻辑，才能确保字幕、弹幕等正常工作
 * */

const taskConf = {
  /**
   * 配置示例
   * 父级键名对应的是一级域名，
   * 子级键名对应的相关功能名称，键值对应的该功能要触发的点击选择器或者要调用的相关函数
   * 所有子级的键值都支持使用选择器触发或函数调用
   * 配置了子级的则使用子级配置逻辑进行操作，否则使用默认逻辑
   * 注意：include，exclude这两个子级键名除外，这两个是用来进行url范围匹配的
   * */
  'demo.demo': {
    // disable: true, // 在该域名下禁止插件的所有功能
    init: function (h5Player, taskConf) {},
    fullScreen: '.fullscreen-btn',
    exitFullScreen: '.exit-fullscreen-btn',
    webFullScreen: function () {},
    exitWebFullScreen: '.exit-fullscreen-btn',
    autoPlay: '.player-start-btn',
    // pause: ['.player-pause', '.player-pause02'], //多种情况对应不同的选择器时，可使用数组，插件会对选择器进行遍历，知道找到可用的为止
    pause: '.player-pause',
    play: '.player-play',
    afterPlay: function (h5Player, taskConf) {},
    afterPause: function (h5Player, taskConf) {},
    switchPlayStatus: '.player-play',
    playbackRate: function () {},
    // playbackRate: true, // 当给某个功能设置true时，表示使用网站自身的能力控制视频，而忽略插件的能力
    currentTime: function () {},
    addCurrentTime: '.add-currenttime',
    subtractCurrentTime: '.subtract-currenttime',
    // 自定义快捷键的执行方式，如果是组合键，必须是 ctrl-->shift-->alt 这样的顺序，没有可以忽略，键名必须全小写
    shortcuts: {
      /* 注册要执行自定义回调操作的快捷键 */
      register: [
        'ctrl+shift+alt+c',
        'ctrl+shift+c',
        'ctrl+alt+c',
        'ctrl+c',
        'c'
      ],
      /* 自定义快捷键的回调操作 */
      callback: function (h5Player, taskConf, data) {
        const { event, player } = data;
        console.log(event, player);
      }
    },

    /* 阻止网站自身的调速行为，增强突破调速限制的能力 */
    blockSetPlaybackRate: true,
    /* 阻止网站自身的播放进度控制逻辑，增强突破进度调控限制的能力 */
    blockSetCurrentTime: true,
    /* 阻止网站自身的音量控制逻辑，排除网站自身的调音干扰 */
    blockSetVolume: true,

    /* 当前域名下需包含的路径信息，默认整个域名下所有路径可用 必须是正则 */
    include: /^.*/,
    /* 当前域名下需排除的路径信息，默认不排除任何路径 必须是正则 */
    exclude: /\t/
  },
  'youtube.com': {
    init: function (h5Player, taskConf) {
      if (h5Player.hasBindSkipAdEvents) { return }
      const startTime = new Date().getTime();
      let skipCount = 0;

      const skipHandler = (element) => {
        const endTime = new Date().getTime();
        const time = endTime - startTime;
        /* 过早触发会导致广告无法跳过 */
        if (time < 3000) {
          return false
        }

        /* 页面处于不可见状态时候也不触发 */
        if (document.hidden) {
          return false
        }

        element.click();
        skipCount++;

        debug.log('youtube.com ad skip count', skipCount);
      };

      ready('.ytp-ad-skip-button', function (element) {
        skipHandler(element);
      });

      ready('.ytp-ad-skip-button-modern', function (element) {
        skipHandler(element);
      });

      setInterval(function () {
        const adSkipBtn = document.querySelector('.ytp-ad-skip-button');
        const adSkipBtnModern = document.querySelector('.ytp-ad-skip-button-modern');
        adSkipBtn && skipHandler(adSkipBtn);
        adSkipBtnModern && skipHandler(adSkipBtnModern);
      }, 1000);

      h5Player.hasBindSkipAdEvents = true;
    },
    webFullScreen: 'button.ytp-size-button',
    fullScreen: 'button.ytp-fullscreen-button',
    next: '.ytp-next-button',
    afterPlay: function (h5Player, taskConf) {
      /* 解决字幕显示停滞问题 */
      setTimeout(() => { h5Player.setCurrentTimeUp(0.01, true); }, 0);

      /* 解决快捷键暂停、播放后一直有loading图标滞留的问题 */
      const player = h5Player.player();
      const playerwWrap = player.closest('.html5-video-player');

      if (!playerwWrap) {
        return
      }

      playerwWrap.classList.add('ytp-autohide', 'playing-mode');
      clearTimeout(playerwWrap.autohideTimer);
      playerwWrap.autohideTimer = setTimeout(() => {
        playerwWrap.classList.add('ytp-autohide', 'playing-mode');
      }, 1000);

      if (!playerwWrap.hasBindCustomEvents) {
        const mousemoveHander = (event) => {
          playerwWrap.classList.remove('ytp-autohide', 'ytp-hide-info-bar');

          clearTimeout(playerwWrap.mousemoveTimer);
          playerwWrap.mousemoveTimer = setTimeout(() => {
            if (!player.paused) {
              playerwWrap.classList.add('ytp-autohide', 'ytp-hide-info-bar');
            }
          }, 1000 * 2);
        };

        const clickHander = (event) => {
          h5Player.switchPlayStatus();
          mousemoveHander();
        };

        player.addEventListener('mousemove', mousemoveHander);
        player.addEventListener('click', clickHander);

        playerwWrap.hasBindCustomEvents = true;
      }

      const spinner = playerwWrap.querySelector('.ytp-spinner');

      if (spinner) {
        const hiddenSpinner = () => { spinner && (spinner.style.visibility = 'hidden'); };
        const visibleSpinner = () => { spinner && (spinner.style.visibility = 'visible'); };

        /* 点击播放时立即隐藏spinner */
        hiddenSpinner();

        clearTimeout(playerwWrap.spinnerTimer);
        playerwWrap.spinnerTimer = setTimeout(() => {
          /* 1秒后将spinner设置为none，并且恢复Spinner的可见状态，以便其它逻辑仍能正确控制spinner的显隐状态 */
          spinner.style.display = 'none';
          visibleSpinner();
        }, 1000);
      }
    },
    afterPause: function (h5Player, taskConf) {
      const player = h5Player.player();
      const playerwWrap = player.closest('.html5-video-player');

      if (!playerwWrap) return

      playerwWrap.classList.remove('ytp-autohide', 'playing-mode');
      playerwWrap.classList.add('paused-mode');
      clearTimeout(playerwWrap.autohideTimer);
    },
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        if (event.keyCode === 27) {
          /* 取消播放下一个推荐的视频 */
          if (document.querySelector('.ytp-upnext').style.display !== 'none') {
            document.querySelector('.ytp-upnext-cancel-button').click();
          }
        }
      }
    }
  },
  'netflix.com': {
    // 停止在netflix下使用插件的所有功能
    // disable: true,
    fullScreen: 'button.button-nfplayerFullscreen',
    addCurrentTime: 'button.button-nfplayerFastForward',
    subtractCurrentTime: 'button.button-nfplayerBackTen',
    /**
     * 使用netflix自身的调速，因为目前插件没法解决调速导致的服务中断问题
     * https://github.com/xxxily/h5player/issues/234
     * https://github.com/xxxily/h5player/issues/317
     * https://github.com/xxxily/h5player/issues/381
     * https://github.com/xxxily/h5player/issues/179
     * https://github.com/xxxily/h5player/issues/147
     */
    playbackRate: true,
    shortcuts: {
      /**
       * TODO
       * netflix 一些用户习惯使用F键进行全屏，所以此处屏蔽掉f键的下一帧功能
       * 后续开放自定义配置能力后，让用户自行决定是否屏蔽
       */
      register: [
        'f'
      ],
      callback: function (h5Player, taskConf, data) {
        return true
      }
    }
  },
  'bilibili.com': {
    fullScreen: function () {
      const fullScreen = $q('.bpx-player-ctrl-full') || $q('.squirtle-video-fullscreen') || $q('.bilibili-player-video-btn-fullscreen');
      if (fullScreen) {
        fullScreen.click();
        return true
      }
    },
    webFullScreen: function () {
      const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');
      const webFullscreenEnter = $q('.bpx-player-ctrl-web-enter') || $q('.squirtle-pagefullscreen-inactive');
      const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active');
      if (oldWebFullscreen || (webFullscreenEnter && webFullscreenLeave)) {
        const webFullscreen = oldWebFullscreen || (getComputedStyle(webFullscreenLeave).display === 'none' ? webFullscreenEnter : webFullscreenLeave);
        webFullscreen.click();

        /* 取消弹幕框聚焦，干扰了快捷键的操作 */
        setTimeout(function () {
          const danmaku = $q('.bpx-player-dm-input') || $q('.bilibili-player-video-danmaku-input');
          danmaku && danmaku.blur();
        }, 1000 * 0.1);

        return true
      }
    },
    autoPlay: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    switchPlayStatus: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    next: ['.bpx-player-ctrl-next', '.squirtle-video-next', '.bilibili-player-video-btn-next', '.bpx-player-ctrl-btn[aria-label="下一个"]'],
    init: function (h5Player, taskConf) {},
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        if (event.keyCode === 27) {
          /* 退出网页全屏 */
          const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');
          if (oldWebFullscreen && oldWebFullscreen.classList.contains('closed')) {
            oldWebFullscreen.click();
          } else {
            const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active');
            if (getComputedStyle(webFullscreenLeave).display !== 'none') {
              webFullscreenLeave.click();
            }
          }
        }
      }
    }
  },
  't.bilibili.com': {
    fullScreen: 'button[name="fullscreen-button"]'
  },
  'live.bilibili.com': {
    init: function () {
      if (!JSON._stringifySource_) {
        JSON._stringifySource_ = JSON.stringify;

        JSON.stringify = function (arg1) {
          try {
            return JSON._stringifySource_.apply(this, arguments)
          } catch (e) {
            console.error('JSON.stringify 解释出错：', e, arg1);
          }
        };
      }
    },
    fullScreen: '.bilibili-live-player-video-controller-fullscreen-btn button',
    webFullScreen: '.bilibili-live-player-video-controller-web-fullscreen-btn button',
    switchPlayStatus: '.bilibili-live-player-video-controller-start-btn button'
  },
  'acfun.cn': {
    fullScreen: '[data-bind-key="screenTip"]',
    webFullScreen: '[data-bind-key="webTip"]',
    switchPlayStatus: function (h5player) {
      /* 无法抢得控制权，只好延迟判断要不要干预 */
      const player = h5player.player();
      const status = player.paused;
      setTimeout(function () {
        if (status === player.paused) {
          if (player.paused) {
            player.play();
          } else {
            player.pause();
          }
        }
      }, 200);
    }
  },
  'ixigua.com': {
    fullScreen: ['xg-fullscreen.xgplayer-fullscreen', '.xgplayer-control-item__entry[aria-label="全屏"]', '.xgplayer-control-item__entry[aria-label="退出全屏"]'],
    webFullScreen: ['xg-cssfullscreen.xgplayer-cssfullscreen', '.xgplayer-control-item__entry[aria-label="剧场模式"]', '.xgplayer-control-item__entry[aria-label="退出剧场模式"]']
  },
  'tv.sohu.com': {
    fullScreen: 'button[data-title="网页全屏"]',
    webFullScreen: 'button[data-title="全屏"]'
  },
  'iqiyi.com': {
    fullScreen: '.iqp-btn-fullscreen',
    webFullScreen: '.iqp-btn-webscreen',
    next: '.iqp-btn-next',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.iqp-logo-box');
      // 移除暂停广告
      window.GM_addStyle(`
          div[templatetype="common_pause"]{ display:none }
          .iqp-logo-box{ display:none !important }
      `);
    }
  },
  'youku.com': {
    fullScreen: '.control-fullscreen-icon',
    next: '.control-next-video',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.youku-layer-logo');
    }
  },
  'ted.com': {
    fullScreen: 'button.Fullscreen'
  },
  'qq.com': {
    pause: '.container_inner .txp-shadow-mod',
    play: '.container_inner .txp-shadow-mod',
    shortcuts: {
      register: ['c', 'x', 'z', '1', '2', '3', '4'],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        const key = event.key.toLowerCase();
        const keyName = 'customShortcuts_' + key;

        if (!h5Player[keyName]) {
          /* 第一次按下快捷键使用默认逻辑进行调速 */
          h5Player[keyName] = {
            time: Date.now(),
            playbackRate: h5Player.playbackRate
          };
          return false
        } else {
          /* 第一次操作后的200ms内的操作都是由默认逻辑进行调速 */
          if (Date.now() - h5Player[keyName].time < 200) {
            return false
          }

          /* 判断是否需进行降级处理，利用sessionStorage进行调速 */
          if (h5Player[keyName] === h5Player.playbackRate || h5Player[keyName] === true) {
            if (window.sessionStorage.playbackRate && /(c|x|z|1|2|3|4)/.test(key)) {
              const curSpeed = Number(window.sessionStorage.playbackRate);
              const perSpeed = curSpeed - 0.1 >= 0 ? curSpeed - 0.1 : 0.1;
              const nextSpeed = curSpeed + 0.1 <= 4 ? curSpeed + 0.1 : 4;
              let targetSpeed = curSpeed;
              switch (key) {
                case 'z' :
                  targetSpeed = 1;
                  break
                case 'c' :
                  targetSpeed = nextSpeed;
                  break
                case 'x' :
                  targetSpeed = perSpeed;
                  break
                default :
                  targetSpeed = Number(key);
                  break
              }

              window.sessionStorage.playbackRate = targetSpeed;
              h5Player.setCurrentTimeUp(0.01, true);
              h5Player.setPlaybackRate(targetSpeed, true);
              return true
            }

            /* 标识默认调速方案失效，需启用sessionStorage调速方案 */
            h5Player[keyName] = true;
          } else {
            /* 标识默认调速方案生效 */
            h5Player[keyName] = false;
          }
        }
      }
    },
    fullScreen: 'txpdiv[data-report="window-fullscreen"]',
    webFullScreen: 'txpdiv[data-report="browser-fullscreen"]',
    next: 'txpdiv[data-report="play-next"]',
    init: function (h5Player, taskConf) {
      // 隐藏水印
      hideDom('.txp-watermark');
      hideDom('.txp-watermark-action');
    },
    include: /(v.qq|sports.qq)/
  },
  'pan.baidu.com': {
    fullScreen: function (h5Player, taskConf) {
      h5Player.player().parentNode.querySelector('.vjs-fullscreen-control').click();
    }
  },
  // 'pornhub.com': {
  //   fullScreen: 'div[class*="icon-fullscreen"]',
  //   webFullScreen: 'div[class*="icon-size-large"]'
  // },
  'facebook.com': {
    fullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button');
      if (actionBtn && actionBtn.length > 3) {
        /* 模拟点击倒数第二个按钮 */
        actionBtn[actionBtn.length - 2].click();
        return true
      }
    },
    webFullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button');
      if (actionBtn && actionBtn.length > 3) {
        /* 模拟点击倒数第二个按钮 */
        actionBtn[actionBtn.length - 2].click();
        return true
      }
    },
    shortcuts: {
      /* 在视频模式下按esc键，自动返回上一层界面 */
      register: [
        'escape'
      ],
      /* 自定义快捷键的回调操作 */
      callback: function (h5Player, taskConf, data) {
        eachParentNode(h5Player.player(), function (parentNode) {
          if (parentNode.getAttribute('data-fullscreen-container') === 'true') {
            const goBackBtn = parentNode.parentNode.querySelector('div>a>i>u');
            if (goBackBtn) {
              goBackBtn.parentNode.parentNode.click();
            }
            return true
          }
        });
      }
    }
  },
  'douyu.com': {
    fullScreen: function (h5Player, taskConf) {
      const player = h5Player.player();
      const container = player._fullScreen_.getContainer();
      if (player._isFullScreen_) {
        container.querySelector('div[title="退出窗口全屏"]').click();
      } else {
        container.querySelector('div[title="窗口全屏"]').click();
      }
      player._isFullScreen_ = !player._isFullScreen_;
      return true
    },
    webFullScreen: function (h5Player, taskConf) {
      const player = h5Player.player();
      const container = player._fullScreen_.getContainer();
      if (player._isWebFullScreen_) {
        container.querySelector('div[title="退出网页全屏"]').click();
      } else {
        container.querySelector('div[title="网页全屏"]').click();
      }
      player._isWebFullScreen_ = !player._isWebFullScreen_;
      return true
    }
  },
  'open.163.com': {
    init: function (h5Player, taskConf) {
      const player = h5Player.player();
      /**
       * 不设置CORS标识，这样才能跨域截图
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
       */
      player.setAttribute('crossOrigin', 'anonymous');
    }
  },
  'agefans.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'chaoxing.com': {
    fullScreen: '.vjs-fullscreen-control'
  },
  'yixi.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');

      const player = h5Player.player();
      const wrapEl = player.closest('div[data-e2e="feed-item"]');

      const setVideoTitle = () => {
        if (wrapEl && wrapEl.querySelector('.video-info-detail')) {
          const videoInfo = wrapEl.querySelector('.video-info-detail');
          const accountNameEL = videoInfo.querySelector('.account-name');
          /* 移除accountName前面的@符号 */
          const accountName = accountNameEL.innerText.replace(/^@*/, '');

          const titleEl = videoInfo.querySelector('.title');
          const titleText = titleEl.innerText.trim();
          const title = `${titleText} - ${accountName}`.replace(/[\\/:*?"<>|]/g, '-');

          wrapEl.setAttribute('data-title', title);
          player.setAttribute('data-title', title);
          document.title = title;
          wrapEl.removeEventListener('mouseover', setVideoTitle);
        }
      };

      wrapEl && wrapEl.addEventListener('mouseover', setVideoTitle);
      setTimeout(setVideoTitle, 1200);
    }
  },
  'live.douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'zhihu.com': {
    fullScreen: ['button[aria-label="全屏"]', 'button[aria-label="退出全屏"]'],
    play: function (h5Player, taskConf, data) {
      const player = h5Player.player();
      if (player && player.parentNode && player.parentNode.parentNode) {
        const maskWrap = player.parentNode.parentNode.querySelector('div~div:nth-child(3)');
        if (maskWrap) {
          const mask = maskWrap.querySelector('div');
          if (mask && mask.innerText === '') {
            mask.click();
          }
        }
      }
    },
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'weibo.com': {
    fullScreen: ['button.wbpv-fullscreen-control'],
    // webFullScreen: ['div[title="关闭弹层"]', 'div.wbpv-open-layer-button']
    webFullScreen: ['div.wbpv-open-layer-button']
  },
  'twitter.com': {
    init: function (h5Player, taskConf) {
      const player = h5Player.player();
      const wrapEl = player.closest('article[data-testid="tweet"]');

      const setVideoTitle = () => {
        if (wrapEl && !wrapEl.getAttribute('data-title') && wrapEl.querySelector('div[data-testid="tweetText"]')) {
          const titleEl = wrapEl.querySelector('div[data-testid="tweetText"]');
          const titleText = titleEl.innerText.trim();
          const title = `${titleText}`.replace(/[\\/:*?"<>|]/g, '-');

          wrapEl.setAttribute('data-title', title);
          player.setAttribute('data-title', title);
          wrapEl.removeEventListener('mouseover', setVideoTitle);
        }
      };

      wrapEl && wrapEl.addEventListener('mouseover', setVideoTitle);
      setTimeout(setVideoTitle, 600);
    }
  }
};

function h5PlayerTccInit (h5Player) {
  return new TCC$1(taskConf, function (taskName, taskConf, data) {
    try {
      const task = taskConf[taskName];
      const wrapDom = h5Player.getPlayerWrapDom();

      if (!task) { return }

      if (taskName === 'shortcuts') {
        if (isObj$1(task) && task.callback instanceof Function) {
          return task.callback(h5Player, taskConf, data)
        }
      } else if (task instanceof Function) {
        try {
          return task(h5Player, taskConf, data)
        } catch (e) {
          debug.error('任务配置中心的自定义函数执行失败：', taskName, taskConf, data, e);
          return false
        }
      } else if (typeof task === 'boolean') {
        return task
      } else {
        const selectorList = Array.isArray(task) ? task : [task];
        for (let i = 0; i < selectorList.length; i++) {
          const selector = selectorList[i];

          /* 触发选择器上的点击事件 */
          if (wrapDom && wrapDom.querySelector(selector)) {
          // 在video的父元素里查找，是为了尽可能兼容多实例下的逻辑
            wrapDom.querySelector(selector).click();
            return true
          } else if (document.querySelector(selector)) {
            document.querySelector(selector).click();
            return true
          }
        }
      }
    } catch (e) {
      debug.error('任务配置中心的自定义任务执行失败：', taskName, taskConf, data, e);
      return false
    }
  })
}

function mergeTaskConf (config) {
  return mergeObj(taskConf, config)
}

/* ua伪装配置 */
const fakeConfig = {
  // 'tv.cctv.com': userAgentMap.iPhone.chrome,
  // 'v.qq.com': userAgentMap.iPad.chrome,
  'open.163.com': userAgentMap.iPhone.chrome,
  'm.open.163.com': userAgentMap.iPhone.chrome,
  /* 百度盘的非会员会使用自身的专用播放器，导致没法使用h5player，所以需要通过伪装ua来解决该问题 */
  'pan.baidu.com': userAgentMap.iPhone.safari
};

function setFakeUA (ua) {
  const host = window.location.host;
  ua = ua || fakeConfig[host];

  /**
   * 动态判断是否需要进行ua伪装
   * 下面方案暂时不可用
   * 由于部分网站跳转至移动端后域名不一致，形成跨域问题
   * 导致无法同步伪装配置而不断死循环跳转
   * eg. open.163.com
   * */
  // let customUA = window.localStorage.getItem('_h5_player_user_agent_')
  // debug.log(customUA, window.location.href, window.navigator.userAgent, document.referrer)
  // if (customUA) {
  //   fakeUA(customUA)
  //   alert(customUA)
  // } else {
  //   alert('ua false')
  // }

  ua && fakeUA(ua);
}

/**
 * 元素全屏API，同时兼容网页全屏
 */

hackAttachShadow();
class FullScreen {
  constructor (dom, pageMode) {
    this.dom = dom;
    this.shadowRoot = null;
    this.fullStatus = false;
    // 默认全屏模式，如果传入pageMode则表示进行的是页面全屏操作
    this.pageMode = pageMode || false;
    const fullPageStyle = `
      ._webfullscreen_box_size_ {
				width: 100% !important;
				height: 100% !important;
			}
      ._webfullscreen_ {
        display: block !important;
				position: fixed !important;
				width: 100% !important;
				height: 100% !important;
				top: 0 !important;
				left: 0 !important;
				background: #000 !important;
				z-index: 999999 !important;
			}
			._webfullscreen_zindex_ {
				z-index: 999999 !important;
			}
		`;
    /* 将样式插入到全局页面中 */
    if (!window._hasInitFullPageStyle_ && window.GM_addStyle) {
      window.GM_addStyle(fullPageStyle);
      window._hasInitFullPageStyle_ = true;
    }

    /* 将样式插入到shadowRoot中 */
    const shadowRoot = isInShadow(dom, true);
    if (shadowRoot) {
      this.shadowRoot = shadowRoot;
      loadCSSText(fullPageStyle, 'fullPageStyle', shadowRoot);
    }

    const t = this;
    window.addEventListener('keyup', (event) => {
      const key = event.key.toLowerCase();
      if (key === 'escape') {
        if (t.isFull()) {
          t.exit();
        } else if (t.isFullScreen()) {
          t.exitFullScreen();
        }
      }
    }, true);

    this.getContainer();
  }

  eachParentNode (dom, fn) {
    let parent = dom.parentNode;
    while (parent && parent.classList) {
      const isEnd = fn(parent, dom);
      parent = parent.parentNode;
      if (isEnd) {
        break
      }
    }
  }

  getContainer () {
    const t = this;
    if (t._container_) return t._container_

    const d = t.dom;
    const domBox = d.getBoundingClientRect();
    let container = d;
    t.eachParentNode(d, function (parentNode) {
      const noParentNode = !parentNode || !parentNode.getBoundingClientRect;
      if (noParentNode || parentNode.getAttribute('data-fullscreen-container')) {
        container = parentNode;
        return true
      }

      const parentBox = parentNode.getBoundingClientRect();
      const isInsideTheBox = parentBox.width <= domBox.width && parentBox.height <= domBox.height;
      if (isInsideTheBox) {
        container = parentNode;
      } else {
        return true
      }
    });

    container.setAttribute('data-fullscreen-container', 'true');
    t._container_ = container;
    return container
  }

  isFull () {
    return this.dom.classList.contains('_webfullscreen_') || this.fullStatus
  }

  isFullScreen () {
    const d = document;
    return !!(d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen ||
      d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement)
  }

  enterFullScreen () {
    const c = this.getContainer();
    const enterFn = c.requestFullscreen || c.webkitRequestFullScreen || c.mozRequestFullScreen || c.msRequestFullScreen;
    enterFn && enterFn.call(c);
  }

  enter () {
    const t = this;
    if (t.isFull()) return
    const container = t.getContainer();
    let needSetIndex = false;
    if (t.dom === container) {
      needSetIndex = true;
    }

    function addFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.add('_webfullscreen_');
        if (container === parentNode || needSetIndex) {
          needSetIndex = true;
          parentNode.classList.add('_webfullscreen_zindex_');
        }
      });
    }
    addFullscreenStyleToParentNode(t.dom);

    /* 判断dom自身是否需要加上webfullscreen样式 */
    if (t.dom.parentNode) {
      const domBox = t.dom.getBoundingClientRect();
      const domParentBox = t.dom.parentNode.getBoundingClientRect();
      if (domParentBox.width - domBox.width >= 5) {
        t.dom.classList.add('_webfullscreen_');
      }

      if (t.shadowRoot && t.shadowRoot._shadowHost) {
        const shadowHost = t.shadowRoot._shadowHost;
        const shadowHostBox = shadowHost.getBoundingClientRect();
        if (shadowHostBox.width <= domBox.width) {
          shadowHost.classList.add('_webfullscreen_');
          addFullscreenStyleToParentNode(shadowHost);
        }
      }
    }

    const fullScreenMode = !t.pageMode;
    if (fullScreenMode) {
      t.enterFullScreen();
    }

    this.fullStatus = true;
  }

  exitFullScreen () {
    const d = document;
    const exitFn = d.exitFullscreen || d.webkitExitFullscreen || d.mozCancelFullScreen || d.msExitFullscreen;
    exitFn && exitFn.call(d);
  }

  exit () {
    const t = this;

    function removeFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.remove('_webfullscreen_');
        parentNode.classList.remove('_webfullscreen_zindex_');
      });
    }
    removeFullscreenStyleToParentNode(t.dom);

    t.dom.classList.remove('_webfullscreen_');

    if (t.shadowRoot && t.shadowRoot._shadowHost) {
      const shadowHost = t.shadowRoot._shadowHost;
      shadowHost.classList.remove('_webfullscreen_');
      removeFullscreenStyleToParentNode(shadowHost);
    }

    const fullScreenMode = !t.pageMode;
    if (fullScreenMode || t.isFullScreen()) {
      t.exitFullScreen();
    }
    this.fullStatus = false;
  }

  toggle () {
    this.isFull() ? this.exit() : this.enter();
  }
}

/*!
 * @name      videoCapturer.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 12:03
 * @github    https://github.com/xxxily
 */

async function setClipboard (blob) {
  if (navigator.clipboard) {
    navigator.clipboard.write([
      // eslint-disable-next-line no-undef
      new ClipboardItem({
        [blob.type]: blob
      })
    ]).then(() => {
      console.info('[setClipboard] clipboard suc', blob.type);
    }).catch((e) => {
      console.error('[setClipboard] clipboard err', blob.type, e);
    });
  } else {
    console.error('当前网站不支持将数据写入到剪贴板里，见：\n https://developer.mozilla.org/en-US/docs/Web/API/Clipboard');
  }
}

var videoCapturer = {
  /**
   * 进行截图操作
   * @param video {dom} -必选 video dom 标签
   * @returns {boolean}
   */
  capture (video, download, title) {
    if (!video) return false
    const t = this;
    const currentTime = `${Math.floor(video.currentTime / 60)}'${(video.currentTime % 60).toFixed(3)}''`;
    const captureTitle = title || `${document.title}_${currentTime}`;

    /* 截图核心逻辑 */
    video.setAttribute('crossorigin', 'anonymous');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (download) {
      t.download(canvas, captureTitle, video);
    } else {
      t.previe(canvas, captureTitle);
    }

    return canvas
  },
  /**
   * 预览截取到的画面内容
   * @param canvas
   */
  previe (canvas, title) {
    canvas.style = 'max-width:100%';
    const previewPage = window.open('', '_blank');
    previewPage.document.title = `capture previe - ${title || 'Untitled'}`;
    previewPage.document.body.style.textAlign = 'center';
    previewPage.document.body.style.background = '#000';
    previewPage.document.body.appendChild(canvas);
  },
  /**
   * canvas 下载截取到的内容
   * @param canvas
   */
  download (canvas, title, video) {
    title = title || 'videoCapturer_' + Date.now();

    try {
      /**
       * 尝试复制到剪贴板
       * 注意部分浏览器不支持将'image/jpeg'类型的数据写入到剪贴板，image/jpg可以，但会导致toBlob的结果为png的数据，
       * 所以这里新起了'image/png'来尝试复制到剪贴板，而不能将setClipboard(blob)放到下面的try里
       * 另外由于下面的自动下载截图会导致页面失焦，也会造成复制到剪贴板失败，所以这里先复制到剪贴板，再进行下载
       */
      canvas.toBlob(function (blob) {
        setClipboard(blob);
      }, 'image/png', 0.99);
    } catch (e) {
      console.error('无法将截图复制到剪贴板。', e);
    }

    try {
      canvas.toBlob(function (blob) {
        const el = document.createElement('a');
        el.download = `${title}.jpg`;
        el.href = URL.createObjectURL(blob);
        el.click();
      }, 'image/jpeg', 0.99);
    } catch (e) {
      videoCapturer.previe(canvas, title);
      console.error('视频源受CORS标识限制，无法直接下载截图，见：\n https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS');
      console.error(video, e);
    }
  }
};

/**
 * 鼠标事件观测对象
 * 用于实现鼠标事件的穿透响应，有别于pointer-events:none
 * pointer-events:none是设置当前层允许穿透
 * 而MouseObserver是：即使不知道target上面存在多少层遮挡，一样可以响应鼠标事件
 */

class MouseObserver {
  constructor (observeOpt) {
    // eslint-disable-next-line no-undef
    this.observer = new IntersectionObserver((infoList) => {
      infoList.forEach((info) => {
        info.target.IntersectionObserverEntry = info;
      });
    }, observeOpt || {});

    this.observeList = [];
  }

  _observe (target) {
    let hasObserve = false;
    for (let i = 0; i < this.observeList.length; i++) {
      const el = this.observeList[i];
      if (target === el) {
        hasObserve = true;
        break
      }
    }

    if (!hasObserve) {
      this.observer.observe(target);
      this.observeList.push(target);
    }
  }

  _unobserve (target) {
    this.observer.unobserve(target);
    const newObserveList = [];
    this.observeList.forEach((el) => {
      if (el !== target) {
        newObserveList.push(el);
      }
    });
    this.observeList = newObserveList;
  }

  /**
   * 增加事件绑定
   * @param target {element} -必选 要绑定事件的dom对象
   * @param type {string} -必选 要绑定的事件，只支持鼠标事件
   * @param listener {function} -必选 符合触发条件时的响应函数
   */
  on (target, type, listener, options) {
    const t = this;
    t._observe(target);

    if (!target.MouseObserverEvent) {
      target.MouseObserverEvent = {};
    }
    target.MouseObserverEvent[type] = true;

    if (!t._mouseObserver_) {
      t._mouseObserver_ = {};
    }

    if (!t._mouseObserver_[type]) {
      t._mouseObserver_[type] = [];

      window.addEventListener(type, (event) => {
        t.observeList.forEach((target) => {
          const isVisibility = target.IntersectionObserverEntry && target.IntersectionObserverEntry.intersectionRatio > 0;
          const isReg = target.MouseObserverEvent[event.type] === true;
          if (isVisibility && isReg) {
            /* 判断是否符合触发侦听器事件条件 */
            const bound = target.getBoundingClientRect();
            const offsetX = event.x - bound.x;
            const offsetY = event.y - bound.y;
            const isNeedTap = offsetX <= bound.width && offsetX >= 0 && offsetY <= bound.height && offsetY >= 0;

            if (isNeedTap) {
              /* 执行监听回调 */
              const listenerList = t._mouseObserver_[type];
              listenerList.forEach((listener) => {
                if (listener instanceof Function) {
                  listener.call(t, event, {
                    x: offsetX,
                    y: offsetY
                  }, target);
                }
              });
            }
          }
        });
      }, options);
    }

    /* 将监听回调加入到事件队列 */
    if (listener instanceof Function) {
      t._mouseObserver_[type].push(listener);
    }
  }

  /**
   * 解除事件绑定
   * @param target {element} -必选 要解除事件的dom对象
   * @param type {string} -必选 要解除的事件，只支持鼠标事件
   * @param listener {function} -必选 绑定事件时的响应函数
   * @returns {boolean}
   */
  off (target, type, listener) {
    const t = this;
    if (!target || !type || !listener || !t._mouseObserver_ || !t._mouseObserver_[type] || !target.MouseObserverEvent || !target.MouseObserverEvent[type]) return false

    const newListenerList = [];
    const listenerList = t._mouseObserver_[type];
    let isMatch = false;
    listenerList.forEach((listenerItem) => {
      if (listenerItem === listener) {
        isMatch = true;
      } else {
        newListenerList.push(listenerItem);
      }
    });

    if (isMatch) {
      t._mouseObserver_[type] = newListenerList;

      /* 侦听器已被完全移除 */
      if (newListenerList.length === 0) {
        delete target.MouseObserverEvent[type];
      }

      /* 当MouseObserverEvent为空对象时移除观测对象 */
      if (JSON.stringify(target.MouseObserverEvent[type]) === '{}') {
        t._unobserve(target);
      }
    }
  }
}

/**
 * 简单的i18n库
 */

class I18n {
  constructor (config) {
    this._languages = {};
    this._locale = this.getClientLang();
    this._defaultLanguage = '';
    this.init(config);
  }

  init (config) {
    if (!config) return false

    const t = this;
    t._locale = config.locale || t._locale;
    /* 指定当前要是使用的语言环境，默认无需指定，会自动读取 */
    t._languages = config.languages || t._languages;
    t._defaultLanguage = config.defaultLanguage || t._defaultLanguage;
  }

  use () {}

  t (path) {
    const t = this;
    let result = t.getValByPath(t._languages[t._locale] || {}, path);

    /* 版本回退 */
    if (!result && t._locale !== t._defaultLanguage) {
      result = t.getValByPath(t._languages[t._defaultLanguage] || {}, path);
    }

    return result || ''
  }

  /* 当前语言值 */
  language () {
    return this._locale
  }

  languages () {
    return this._languages
  }

  changeLanguage (locale) {
    if (this._languages[locale]) {
      this._locale = locale;
      return locale
    } else {
      return false
    }
  }

  /**
   * 根据文本路径获取对象里面的值
   * @param obj {Object} -必选 要操作的对象
   * @param path {String} -必选 路径信息
   * @returns {*}
   */
  getValByPath (obj, path) {
    path = path || '';
    const pathArr = path.split('.');
    let result = obj;

    /* 递归提取结果值 */
    for (let i = 0; i < pathArr.length; i++) {
      if (!result) break
      result = result[pathArr[i]];
    }

    return result
  }

  /* 获取客户端当前的语言环境 */
  getClientLang () {
    return navigator.languages ? navigator.languages[0] : navigator.language
  }
}

var zhCN = {
  website: '🏠脚本官网',
  about: '关于',
  issues: '问题反馈',
  setting: '设置',
  hotkeys: '快捷键',
  hotkeysDocs: '快捷键文档',
  enable: '启用',
  disable: '禁用',
  toggleStates: '启用/禁用',
  disableHotkeysTemporarily: '临时禁用快捷键',
  toggleHotkeysTemporarily: '临时启用/禁用快捷键',
  enableHotkeys: '启用快捷键',
  disableHotkeys: '禁用快捷键',
  donate: '👍请作者喝杯咖啡',
  aboutDonate: '作者收了多少打赏？',
  aboutAuthor: '关于作者',
  recommend: '❤️ 免费ChatGPT-4 ❤️',
  enableScript: '启用脚本',
  disableScript: '禁用脚本',
  disableCurrentInstanceGUI: '关闭当前图形用户界面',
  disableGUITemporarily: '临时禁用图形用户界面',
  enableGUI: '启用图形用户界面',
  disableGUI: '禁用图形用户界面',
  graphicalInterface: '图形界面',
  alwaysShowGraphicalInterface: '始终显示图形界面',
  openCrossOriginFramePage: '单独打开跨域的页面',
  disableInitAutoPlay: '禁止在此网站自动播放视频',
  enableInitAutoPlay: '允许在此网站自动播放视频',
  restoreConfiguration: '还原全局的默认配置',
  blockSetPlaybackRate: '禁用默认速度调节逻辑',
  blockSetCurrentTime: '禁用默认播放进度控制逻辑',
  blockSetVolume: '禁用默认音量控制逻辑',
  unblockSetPlaybackRate: '允许默认速度调节逻辑',
  unblockSetCurrentTime: '允许默认播放进度控制逻辑',
  unblockSetVolume: '允许默认音量控制逻辑',
  allowAcousticGain: '开启音量增益能力',
  notAllowAcousticGain: '禁用音量增益能力',
  allowCrossOriginControl: '开启跨域控制能力',
  notAllowCrossOriginControl: '禁用跨域控制能力',
  allowExperimentFeatures: '开启实验性功能',
  notAllowExperimentFeatures: '禁用实验性功能',
  experimentFeaturesWarning: '实验性功能容易造成一些不确定的问题，请谨慎开启',
  useMediaDownloadTips: '使用下载功能，需开启实验性功能，\n实验性功能容易造成一些不确定的问题，确定要开启吗？',
  allowExternalCustomConfiguration: '开启外部自定义能力',
  notAllowExternalCustomConfiguration: '关闭外部自定义能力',
  changeLog: '更新日志',
  currentVersion: '当前版本',
  checkVersion: '检查是否有新版本？',
  configFail: '配置失败',
  globalSetting: '全局设置',
  openCustomConfigurationEditor: '打开自定义配置编辑器',
  localSetting: '仅用于此网站',
  openDebugMode: '开启调试模式',
  closeDebugMode: '关闭调试模式',
  unfoldMenu: '展开菜单',
  foldMenu: '折叠菜单',
  addGroupChat: '💬添加群聊',
  speed: '倍速',
  capture: '截图',
  download: '下载',
  mediaDownload: {
    downloading: '文件正在下载中，确定重复执行此操作？',
    hasDownload: '文件已经下载，确定重复执行此操作？',
    confirmTitle: '请输入文件名',
    notSupport: '当前媒体文件无法下载，下载功能待优化完善',
    notEndOfStream: '媒体数据还没完全就绪，确定要执行下载操作？',
    cancelAutoDownload: '是否取消自动下载？',
    autoDownload: '媒体数据完全就绪后，是否自动下载？',
    notFoundMediaSource: '未找到对应的媒体流数据，数据可能被清理或者媒体元素已经被移除，建议刷新页面后重试'
  },
  menu: '菜单',
  more: '更多',
  moreActions: '更多操作',
  videoFilter: '画面滤镜',
  resetFilterAndTransform: '图像复位',
  brightnessUp: '增加亮度',
  brightnessDown: '减少亮度',
  contrastUp: '增加对比度',
  contrastDown: '减少对比度',
  saturationUp: '增加饱和度',
  saturationDown: '减少饱和度',
  hueUp: '增加色相',
  hueDown: '减少色相',
  blurUp: '增加模糊度',
  blurDown: '减少模糊度',
  rotateAndMirror: '旋转镜像',
  rotate90: '画面旋转 90 度',
  horizontalMirror: '画面水平镜像翻转',
  verticalMirror: '画面垂直镜像翻转',
  videoTransform: '画面位移',
  translateRight: '画面向右移动',
  translateLeft: '画面向左移动',
  translateUp: '画面向上移动',
  translateDown: '画面向下移动',
  languageSettings: '语言设置',
  default: '默认',
  autoChoose: '自动选择',
  comingSoon: '更多功能正在完善中，敬请期待',
  ffmpegScript: '音视频合并/转换脚本',
  autoGotoBufferedTime: '自动跟随跳转到缓冲区时间',
  disableAutoGotoBufferedTime: '禁用自动跟随跳转到缓冲区时间',
  tipsMsg: {
    playspeed: '播放速度：',
    forward: '前进：',
    backward: '后退：',
    seconds: '秒',
    volume: '音量：',
    nextframe: '定位：下一帧',
    previousframe: '定位：上一帧',
    stopframe: '定格帧画面：',
    play: '播放',
    pause: '暂停',
    arpl: '允许自动恢复播放进度',
    drpl: '禁止自动恢复播放进度',
    brightness: '图像亮度：',
    contrast: '图像对比度：',
    saturation: '图像饱和度：',
    hue: '图像色相：',
    blur: '图像模糊度：',
    imgattrreset: '图像属性：复位',
    imgrotate: '画面旋转：',
    onplugin: '启用h5Player插件',
    offplugin: '禁用h5Player插件',
    globalmode: '全局模式：',
    playbackrestored: '为你恢复上次播放进度',
    playbackrestoreoff: '恢复播放进度功能已禁用，按 SHIFT+R 可开启该功能',
    horizontal: '水平位移：',
    vertical: '垂直位移：',
    horizontalMirror: '水平镜像',
    verticalMirror: '垂直镜像',
    videozoom: '视频缩放率：'
  }
};

var enUS = {
  website: '🏠Script Homepage',
  about: 'About',
  issues: 'Issues',
  setting: 'Setting',
  hotkeys: 'Hotkeys',
  hotkeysDocs: 'Hotkeys Docs',
  enable: 'Enable',
  disable: 'Disable',
  toggleStates: 'Enable/Disable',
  disableHotkeysTemporarily: 'Disable hotkeys temporarily',
  toggleHotkeysTemporarily: 'Toggle hotkeys temporarily',
  enableHotkeys: 'Enable hotkeys',
  disableHotkeys: 'Disable hotkeys',
  donate: '👍Donate',
  aboutDonate: 'How much the author has received?',
  aboutAuthor: 'About the author',
  enableScript: 'Enable script',
  disableScript: 'Disable script',
  disableCurrentInstanceGUI: 'Close the current graphical user interface',
  disableGUITemporarily: 'Temporarily disable the graphical interface',
  enableGUI: 'Enable Graphical User Interface',
  disableGUI: 'Disable Graphical User Interface',
  graphicalInterface: 'Graphical Interface',
  alwaysShowGraphicalInterface: 'Always show graphical interface',
  openCrossOriginFramePage: 'Open cross-domain pages alone',
  disableInitAutoPlay: 'Prohibit autoplay of videos on this site',
  enableInitAutoPlay: 'Allow autoplay videos on this site',
  restoreConfiguration: 'Restore the global default configuration',
  blockSetPlaybackRate: 'Disable default speed regulation logic',
  blockSetCurrentTime: 'Disable default playback progress control logic',
  blockSetVolume: 'Disable default volume control logic',
  unblockSetPlaybackRate: 'Allow default speed adjustment logic',
  unblockSetCurrentTime: 'Allow default playback progress control logic',
  unblockSetVolume: 'Allow default volume control logic',
  allowAcousticGain: 'Turn on volume boost',
  notAllowAcousticGain: 'Disable volume boost ability',
  allowCrossOriginControl: 'Enable cross-domain control capability',
  notAllowCrossOriginControl: 'Disable cross-domain control capabilities',
  allowExperimentFeatures: 'Turn on experimental features',
  notAllowExperimentFeatures: 'Disable experimental features',
  experimentFeaturesWarning: 'Experimental features are likely to cause some uncertain problems, please turn on with caution',
  useMediaDownloadTips: 'To use the download capability, you need to enable experimental features.\nExperimental features can easily cause some uncertain problems. Are you sure you want to enable it?',
  allowExternalCustomConfiguration: 'Enable external customization capabilities',
  notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',
  changeLog: 'Change log',
  currentVersion: 'Current version',
  checkVersion: 'Check for new version ?',
  configFail: 'Configuration failed',
  globalSetting: 'Global Settings',
  openCustomConfigurationEditor: 'Open custom configuration editor',
  localSetting: 'For this site only',
  openDebugMode: 'Enable debug mode',
  closeDebugMode: 'Turn off debug mode',
  unfoldMenu: 'Expand menu',
  foldMenu: 'Collapse menu',
  addGroupChat: '💬Add chat group',
  speed: 'Speed',
  capture: 'Capture',
  download: 'Download',
  mediaDownload: {
    downloading: 'The file is being downloaded. Are you sure you want to execute this operation again?',
    hasDownload: 'The file has been downloaded. Are you sure you want to execute this operation again?',
    confirmTitle: 'Please enter the file name',
    notSupport: 'The current media file cannot be downloaded. The download function needs to be optimized and improved',
    notEndOfStream: 'The media data is not fully ready, are you sure you want to download it?',
    cancelAutoDownload: 'Cancel automatic download?',
    autoDownload: 'The media data is not fully ready, do you want to automatically download it when it is ready?',
    notFoundMediaSource: 'The corresponding media stream data was not found, the data may have been cleared or the media element has been removed, it is recommended to refresh the page and try again'
  },
  menu: 'Menu',
  more: 'More',
  moreActions: 'More actions',
  videoFilter: 'Video filter',
  resetFilterAndTransform: 'Reset filter and transform',
  brightnessUp: 'Increase brightness',
  brightnessDown: 'Decrease brightness',
  contrastUp: 'Increase contrast',
  contrastDown: 'Decrease contrast',
  saturationUp: 'Increase saturation',
  saturationDown: 'Decrease saturation',
  hueUp: 'Increase hue',
  hueDown: 'Decrease hue',
  blurUp: 'Increase blur',
  blurDown: 'Decrease blur',
  rotateAndMirror: 'Rotate and mirror',
  rotate90: 'Rotate 90 degrees',
  horizontalMirror: 'Horizontal mirror flip',
  verticalMirror: 'Vertical mirror flip',
  videoTransform: 'Video displacement',
  translateRight: 'Move the screen to the right',
  translateLeft: 'Move the screen to the left',
  translateUp: 'Move the screen up',
  translateDown: 'Move the screen down',
  languageSettings: 'Language settings',
  default: 'Default',
  autoChoose: 'Auto choose',
  comingSoon: 'More features are being improved, stay tuned',
  ffmpegScript: 'Audio and video merge/convert script',
  autoGotoBufferedTime: 'Automatically jump to the buffered time',
  disableAutoGotoBufferedTime: 'Disable automatic jump to the buffered time',
  tipsMsg: {
    playspeed: 'Speed: ',
    forward: 'Forward: ',
    backward: 'Backward: ',
    seconds: 'sec',
    volume: 'Volume: ',
    nextframe: 'Next frame',
    previousframe: 'Previous frame',
    stopframe: 'Stopframe: ',
    play: 'Play',
    pause: 'Pause',
    arpl: 'Allow auto resume playback progress',
    drpl: 'Disable auto resume playback progress',
    brightness: 'Brightness: ',
    contrast: 'Contrast: ',
    saturation: 'Saturation: ',
    hue: 'HUE: ',
    blur: 'Blur: ',
    imgattrreset: 'Attributes: reset',
    imgrotate: 'Picture rotation: ',
    onplugin: 'ON h5Player plugin',
    offplugin: 'OFF h5Player plugin',
    globalmode: 'Global mode: ',
    playbackrestored: 'Restored the last playback progress for you',
    playbackrestoreoff: 'The function of restoring the playback progress is disabled. Press SHIFT+R to turn on the function',
    horizontal: 'Horizontal displacement: ',
    vertical: 'Vertical displacement: ',
    horizontalMirror: 'Horizontal mirror',
    verticalMirror: 'vertical mirror',
    videozoom: 'Video zoom: '
  },
  demo: 'demo-test'
};

var ru = {
  website: '🏠официальный сайт скрипта',
  about: 'около',
  issues: 'обратная связь',
  setting: 'установка',
  hotkeys: 'горячие клавиши',
  hotkeysDocs: 'документы горячих клавиш',
  enable: 'включить',
  disable: 'отключить',
  toggleStates: 'включить/отключить',
  disableHotkeysTemporarily: 'временно отключить горячие клавиши',
  toggleHotkeysTemporarily: 'временно включить/отключить горячие клавиши',
  enableHotkeys: 'включить горячие клавиши',
  disableHotkeys: 'отключить горячие клавиши',
  donate: '👍пожертвовать',
  aboutDonate: 'Сколько автор получил?',
  aboutAuthor: 'о авторе',
  enableScript: 'включить скрипт',
  disableScript: 'отключить скрипт',
  disableCurrentInstanceGUI: 'отключить текущий графический интерфейс пользователя',
  disableGUITemporarily: 'Временно отключить графический интерфейс пользователя',
  enableGUI: 'Включить графический интерфейс пользователя',
  disableGUI: 'Отключить графический интерфейс пользователя',
  graphicalInterface: 'Графический интерфейс',
  alwaysShowGraphicalInterface: 'Всегда показывать графический интерфейс',
  openCrossOriginFramePage: 'Открывать только междоменные страницы',
  disableInitAutoPlay: 'Запретить автовоспроизведение видео на этом сайте',
  enableInitAutoPlay: 'Разрешить автоматическое воспроизведение видео на этом сайте',
  restoreConfiguration: 'Восстановить глобальную конфигурацию по умолчанию',
  blockSetPlaybackRate: 'Отключить логику регулирования скорости по умолчанию',
  blockSetCurrentTime: 'Отключить логику управления ходом воспроизведения по умолчанию',
  blockSetVolume: 'Отключить логику управления громкостью по умолчанию',
  unblockSetPlaybackRate: 'Разрешить логику регулировки скорости по умолчанию',
  unblockSetCurrentTime: 'Разрешить логику управления ходом воспроизведения по умолчанию',
  unblockSetVolume: 'Разрешить логику управления громкостью по умолчанию',
  allowAcousticGain: 'Включите усиление громкости',
  notAllowAcousticGain: 'Отключить возможность увеличения громкости',
  allowCrossOriginControl: 'Включить возможность междоменного контроля',
  notAllowCrossOriginControl: 'Отключить возможности междоменного контроля',
  allowExperimentFeatures: 'Включить экспериментальные функции',
  notAllowExperimentFeatures: 'Отключить экспериментальные функции',
  experimentFeaturesWarning: 'Экспериментальные функции могут вызвать определенные проблемы, включайте их с осторожностью.',
  useMediaDownloadTips: 'Чтобы использовать функцию загрузки, вам необходимо включить экспериментальную функцию.\nЭкспериментальные функции могут легко вызвать некоторые неопределенные проблемы. Вы уверены, что хотите включить ее?',
  allowExternalCustomConfiguration: 'Включить возможности внешней настройки',
  notAllowExternalCustomConfiguration: 'Отключить возможности внешней настройки',
  changeLog: 'Журнал изменений',
  currentVersion: 'Текущая версия',
  checkVersion: 'Проверить наличие новой версии ?',
  configFail: 'Ошибка конфигурации',
  globalSetting: 'Глобальные настройки',
  openCustomConfigurationEditor: 'Открыть редактор пользовательской конфигурации',
  localSetting: 'только для этого сайта',
  openDebugMode: 'Включить режим отладки',
  closeDebugMode: 'отключить режим отладки',
  unfoldMenu: 'развернуть меню',
  foldMenu: 'свернуть меню',
  addGroupChat: '💬Добавить группу чата',
  speed: 'Скорость',
  capture: 'Захват',
  download: 'Скачать',
  mediaDownload: {
    downloading: 'Идет скачивание файла. Вы уверены, что хотите повторить эту операцию?',
    hasDownload: 'Файл скачан. Вы уверены, что хотите повторить эту операцию?',
    confirmTitle: 'Пожалуйста, введите имя файла',
    notSupport: 'Текущий медиафайл невозможно загрузить, а функцию загрузки необходимо оптимизировать и улучшить.',
    notEndOfStream: 'Медиаданные еще не полностью готовы. Вы уверены, что хотите их скачать?',
    cancelAutoDownload: 'Отменить автоматическую загрузку?',
    autoDownload: 'Будут ли медиаданные загружаться автоматически после их полной готовности?',
    notFoundMediaSource: 'Соответствующие данные медиапотока не найдены. Возможно, данные были очищены или медиа-элементы удалены. Рекомендуется обновить страницу и повторить попытку.'
  },
  menu: 'Меню',
  more: 'Больше',
  moreActions: 'Дополнительные действия',
  videoFilter: 'Видеофильтр',
  resetFilterAndTransform: 'Сбросить фильтр и трансформацию',
  brightnessUp: 'Увеличить яркость',
  brightnessDown: 'Уменьшить яркость',
  contrastUp: 'Увеличить контраст',
  contrastDown: 'Уменьшить контраст',
  saturationUp: 'Увеличить насыщенность',
  saturationDown: 'Уменьшить насыщенность',
  hueUp: 'Увеличить оттенок',
  hueDown: 'Уменьшить оттенок',
  blurUp: 'Увеличить размытие',
  blurDown: 'Уменьшить размытие',
  rotateAndMirror: 'Повернуть и отразить',
  rotate90: 'Повернуть изображение на 90 градусов',
  horizontalMirror: 'Горизонтальное отражение изображения',
  verticalMirror: 'Вертикальное отражение изображения',
  videoTransform: 'Видео трансформация',
  translateRight: 'Сдвинуть экран вправо',
  translateLeft: 'Сдвинуть экран влево',
  translateUp: 'Сдвинуть экран вверх',
  translateDown: 'Сдвинуть экран вниз',
  languageSettings: 'Настройки языка',
  default: 'По умолчанию',
  autoChoose: 'Автоматический выбор',
  comingSoon: 'Больше функций находится в процессе улучшения, следите за обновлениями',
  ffmpegScript: 'Скрипт слияния/преобразования аудио и видео',
  autoGotoBufferedTime: 'Автоматически перейти к времени буфера',
  disableAutoGotoBufferedTime: 'Отключить автоматический переход к времени буфера',
  tipsMsg: {
    playspeed: 'Скорость: ',
    forward: 'Вперёд: ',
    backward: 'Назад: ',
    seconds: ' сек',
    volume: 'Громкость: ',
    nextframe: 'Следующий кадр',
    previousframe: 'Предыдущий кадр',
    stopframe: 'Стоп-кадр: ',
    play: 'Запуск',
    pause: 'Пауза',
    arpl: 'Разрешить автоматическое возобновление прогресса воспроизведения',
    drpl: 'Запретить автоматическое возобновление прогресса воспроизведения',
    brightness: 'Яркость: ',
    contrast: 'Контраст: ',
    saturation: 'Насыщенность: ',
    hue: 'Оттенок: ',
    blur: 'Размытие: ',
    imgattrreset: 'Атрибуты: сброс',
    imgrotate: 'Поворот изображения: ',
    onplugin: 'ВКЛ: плагин воспроизведения',
    offplugin: 'ВЫКЛ: плагин воспроизведения',
    globalmode: 'Глобальный режим:',
    playbackrestored: 'Восстановлен последний прогресс воспроизведения',
    playbackrestoreoff: 'Функция восстановления прогресса воспроизведения отключена. Нажмите SHIFT + R, чтобы включить функцию',
    horizontal: 'Горизонтальное смещение: ',
    vertical: 'Вертикальное смещение: ',
    horizontalMirror: 'Горизонтальное зеркало',
    verticalMirror: 'вертикальное зеркало',
    videozoom: 'Увеличить видео: '
  }
};

var zhTW = {
  website: '🏠腳本官網',
  about: '關於',
  issues: '反饋',
  setting: '設置',
  hotkeys: '快捷鍵',
  hotkeysDocs: '快捷鍵文檔',
  enable: '啟用',
  disable: '禁用',
  toggleStates: '啟用/禁用',
  disableHotkeysTemporarily: '臨時禁用快捷鍵',
  toggleHotkeysTemporarily: '臨時啟用/禁用快捷鍵',
  enableHotkeys: '啟用快捷鍵',
  disableHotkeys: '禁用快捷鍵',
  donate: '👍讚賞',
  aboutDonate: '作者收了多少打賞？',
  aboutAuthor: '關於作者',
  enableScript: '啟用腳本',
  disableScript: '禁用腳本',
  disableCurrentInstanceGUI: '關閉當前圖形用戶界面',
  disableGUITemporarily: '臨時禁用圖形用戶界面',
  enableGUI: '啟用圖形用戶界面',
  disableGUI: '禁用圖形用戶界面',
  graphicalInterface: '圖形界面',
  alwaysShowGraphicalInterface: '始終顯示圖形界面',
  openCrossOriginFramePage: '單獨打開跨域的頁面',
  disableInitAutoPlay: '禁止在此網站自動播放視頻',
  enableInitAutoPlay: '允許在此網站自動播放視頻',
  restoreConfiguration: '還原全局的默認配置',
  blockSetPlaybackRate: '禁用默認速度調節邏輯',
  blockSetCurrentTime: '禁用默認播放進度控制邏輯',
  blockSetVolume: '禁用默認音量控制邏輯',
  unblockSetPlaybackRate: '允許默認速度調節邏輯',
  unblockSetCurrentTime: '允許默認播放進度控制邏輯',
  unblockSetVolume: '允許默認音量控制邏輯',
  allowAcousticGain: '開啟音量增益能力',
  notAllowAcousticGain: '禁用音量增益能力',
  allowCrossOriginControl: '開啟跨域控制能力',
  notAllowCrossOriginControl: '禁用跨域控制能力',
  allowExperimentFeatures: '開啟實驗性功能',
  notAllowExperimentFeatures: '禁用實驗性功能',
  experimentFeaturesWarning: '實驗性功能容易造成一些不確定的問題，請謹慎開啟',
  useMediaDownloadTips: '使用下載功能，需開啟實驗功能，\n實驗功能容易造成一些不確定的問題，確定要開啟嗎？',
  allowExternalCustomConfiguration: '開啟外部自定義能力',
  notAllowExternalCustomConfiguration: '關閉外部自定義能力',
  changeLog: '更新日誌',
  currentVersion: '當前版本',
  checkVersion: '檢查是否有新版本？',
  configFail: '配置失敗',
  globalSetting: '全局設置',
  openCustomConfigurationEditor: '打開自定義配置編輯器',
  localSetting: '僅用於此網站',
  openDebugMode: '開啟調試模式',
  closeDebugMode: '關閉調試模式',
  unfoldMenu: '展開菜單',
  foldMenu: '折疊菜單',
  addGroupChat: '💬新增群聊',
  speed: '倍速',
  capture: '截圖',
  download: '下載',
  mediaDownload: {
    downloading: '文件正在下載中，確定重複執行此操作？',
    hasDownload: '文件已經下載，確定重複執行此操作？',
    confirmTitle: '請輸入文件名',
    notSupport: '目前媒體檔案無法下載，下載功能要優化完善',
    notEndOfStream: '媒體資料還沒完全就緒，確定要執行下載操作？',
    cancelAutoDownload: '是否取消自動下載？',
    autoDownload: '媒體資料完全就緒後，是否自動下載？',
    notFoundMediaSource: '未找到對應的媒體流數據，數據可能被清理或媒體元素已經被移除，建議刷新頁面後重試'
  },
  menu: '菜單',
  more: '更多',
  moreActions: '更多操作',
  videoFilter: '視頻濾鏡',
  resetFilterAndTransform: '圖像復位',
  brightnessUp: '增加亮度',
  brightnessDown: '減少亮度',
  contrastUp: '增加對比度',
  contrastDown: '減少對比度',
  saturationUp: '增加飽和度',
  saturationDown: '減少飽和度',
  hueUp: '增加色相',
  hueDown: '減少色相',
  blurUp: '增加模糊度',
  blurDown: '減少模糊度',
  rotateAndMirror: '旋轉和鏡像',
  rotate90: '畫面旋轉 90 度',
  horizontalMirror: '畫面水平鏡像翻轉',
  verticalMirror: '畫面垂直鏡像翻轉',
  videoTransform: '畫面位移',
  translateRight: '畫面向右移動',
  translateLeft: '畫面向左移動',
  translateUp: '畫面向上移動',
  translateDown: '畫面向下移動',
  languageSettings: '語言設置',
  default: '默認',
  autoChoose: '自動選擇',
  comingSoon: '更多功能正在完善中，敬請期待',
  ffmpegScript: '音視頻合併/轉換腳本',
  autoGotoBufferedTime: '自動跟隨跳轉到緩衝區時間',
  disableAutoGotoBufferedTime: '禁用自動跟隨跳轉到緩衝區時間',
  tipsMsg: {
    playspeed: '播放速度：',
    forward: '向前：',
    backward: '向後：',
    seconds: '秒',
    volume: '音量：',
    nextframe: '定位：下一幀',
    previousframe: '定位：上一幀',
    stopframe: '定格幀畫面：',
    play: '播放',
    pause: '暫停',
    arpl: '允許自動恢復播放進度',
    drpl: '禁止自動恢復播放進度',
    brightness: '圖像亮度：',
    contrast: '圖像對比度：',
    saturation: '圖像飽和度：',
    hue: '圖像色相：',
    blur: '圖像模糊度：',
    imgattrreset: '圖像屬性：復位',
    imgrotate: '畫面旋轉：',
    onplugin: '啟用h5Player插件',
    offplugin: '禁用h5Player插件',
    globalmode: '全局模式：',
    playbackrestored: '為你恢復上次播放進度',
    playbackrestoreoff: '恢復播放進度功能已禁用，按 SHIFT+R 可開啟該功能',
    horizontal: '水平位移：',
    vertical: '垂直位移：',
    horizontalMirror: '水平鏡像',
    verticalMirror: '垂直鏡像',
    videozoom: '視頻縮放率：'
  }
};

const messages = {
  'zh-CN': zhCN,
  zh: zhCN,
  'zh-HK': zhTW,
  'zh-TW': zhTW,
  'en-US': enUS,
  en: enUS,
  ru
};

const i18n = new I18n({
  defaultLanguage: 'en',
  /* 指定当前要是使用的语言环境，默认无需指定，会自动读取 */
  // locale: 'zh-TW',
  languages: messages
});

const lang = configManager.get('language');
lang && i18n.changeLanguage(lang);

/* 用于获取全局唯一的id */
let __globalId__ = 0;
function getId () {
  if (window.GM_getValue && window.GM_setValue) {
    let gID = window.GM_getValue('_global_id_');
    if (!gID) gID = 0;
    gID = Number(gID) + 1;
    window.GM_setValue('_global_id_', gID);
    return gID
  } else {
    /* 如果不处于油猴插件下，则该id为页面自己独享的id */
    __globalId__ = Number(__globalId__) + 1;
    return __globalId__
  }
}

let curTabId = null;

/**
 * 获取当前TAB标签的Id号，可用于iframe确定自己是否处于同一TAB标签下
 * @returns {Promise<any>}
 */
function getTabId () {
  return new Promise((resolve, reject) => {
    if (window.GM_getTab instanceof Function) {
      window.GM_getTab(function (obj) {
        if (!obj.tabId) {
          obj.tabId = getId();
          window.GM_saveTab(obj);
        }
        /* 每次获取都更新当前Tab的id号 */
        curTabId = obj.tabId;
        resolve(obj.tabId);
      });
    } else {
      /* 非油猴插件下，无法确定iframe是否处于同一个tab下 */
      resolve(Date.now());
    }
  })
}

/* 一开始就初始化好curTabId，这样后续就不需要异步获取Tabid，部分场景下需要用到 */
getTabId();

/*!
 * @name      monkeyMsg.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 14:22
 */
// import debug from './debug'

/**
 * 将对象数据里面可存储到GM_setValue里面的值提取出来
 * @param obj {objcet} -必选 打算要存储的对象数据
 * @param deep {number} -可选 如果对象层级非常深，则须限定递归的层级，默认最高不能超过3级
 * @returns {{}}
 */
function extractDatafromOb (obj, deep) {
  deep = deep || 1;
  if (deep > 3) return {}

  const result = {};
  if (typeof obj === 'object') {
    for (const key in obj) {
      const val = obj[key];
      const valType = typeof val;
      if (valType === 'number' || valType === 'string' || valType === 'boolean') {
        Object.defineProperty(result, key, {
          value: val,
          writable: true,
          configurable: true,
          enumerable: true
        });
      } else if (valType === 'object' && Object.prototype.propertyIsEnumerable.call(obj, key)) {
        /* 进行递归提取 */
        result[key] = extractDatafromOb(val, deep + 1);
      } else if (valType === 'array') {
        result[key] = val;
      } else ;
    }
  }
  return result
}

const monkeyMsg = {
  /**
   * 发送消息，除了正常发送信息外，还会补充各类必要的信息
   * @param name {string} -必选 要发送给那个字段，接收时要一致才能监听的正确
   * @param data {Any} -必选 要发送的数据
   * @param throttleInterval -可选，因为会出现莫名奇妙的重复发送情况，为了消除重复发送带来的副作用，所以引入节流限制逻辑，即限制某个时间间隔内只能发送一次，多余的次数自动抛弃掉，默认80ms
   * @returns {Promise<void>}
   */
  send (name, data, throttleInterval = 80) {
    if (!window.GM_getValue || !window.GM_setValue) {
      return false
    }

    /* 阻止频繁发送修改事件 */
    const oldMsg = window.GM_getValue(name);
    if (oldMsg && oldMsg.updateTime) {
      const interval = Math.abs(Date.now() - oldMsg.updateTime);
      if (interval < throttleInterval) {
        return false
      }
    }

    const msg = {
      /* 发送过来的数据 */
      data,
      /* 补充标签ID，用于判断是否同处一个tab标签下 */
      tabId: curTabId || 'undefined',
      /* 补充消息的页面来源的标题信息 */
      title: document.title,
      /* 补充消息的页面来源信息 */
      referrer: extractDatafromOb(window.location),
      /* 最近一次更新该数据的时间 */
      updateTime: Date.now()
    };
    if (typeof data === 'object') {
      msg.data = extractDatafromOb(data);
    }
    window.GM_setValue(name, msg);

    // debug.info(`[monkeyMsg-send][${name}]`, msg)
  },
  set: (name, data) => monkeyMsg.send(name, data),
  get: (name) => window.GM_getValue && window.GM_getValue(name),
  on: (name, fn) => window.GM_addValueChangeListener && window.GM_addValueChangeListener(name, function (name, oldVal, newVal, remote) {
    // debug.info(`[monkeyMsg-on][${name}]`, oldVal, newVal, remote)

    /* 补充消息来源是否出自同一个Tab的判断字段 */
    newVal.originTab = newVal.tabId === curTabId;

    fn instanceof Function && fn.apply(null, arguments);
  }),
  off: (listenerId) => window.GM_removeValueChangeListener && window.GM_removeValueChangeListener(listenerId),

  /**
   * 进行monkeyMsg的消息广播，该广播每两秒钟发送一次，其它任意页面可通接收到的广播信息来更新一些变量信息
   * 主要用以解决通过setInterval或setTimeout因页面可视状态和性能策略导致的不运行或执行频率异常而不能正确更新变量状态的问题
   * 见： https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API
   * 广播也不能100%保证不受性能策略的影响，但只要有一个网页处于前台运行，则就能正常工作
   * @param handler {Function} -必选 接收到广播信息时的回调函数
   * @returns
   */
  broadcast (handler) {
    const broadcastName = '__monkeyMsgBroadcast__';
    monkeyMsg._monkeyMsgBroadcastHandler_ = monkeyMsg._monkeyMsgBroadcastHandler_ || [];
    handler instanceof Function && monkeyMsg._monkeyMsgBroadcastHandler_.push(handler);

    if (monkeyMsg._hasMonkeyMsgBroadcast_) {
      return broadcastName
    }

    monkeyMsg.on(broadcastName, function () {
      monkeyMsg._monkeyMsgBroadcastHandler_.forEach(handler => {
        handler.apply(null, arguments);
      });
    });

    setInterval(function () {
      /* 通过限定时间间隔来防止多个页面批量发起广播信息 */
      const data = monkeyMsg.get(broadcastName);
      if (data && Date.now() - data.updateTime < 1000 * 2) {
        return false
      }

      monkeyMsg.send(broadcastName, {});
    }, 1000 * 2);

    return broadcastName
  }
};

/*!
 * @name         crossTabCtl.js
 * @description  跨Tab控制脚本逻辑
 * @version      0.0.1
 * @author       Blaze
 * @date         2019/11/21 上午11:56
 * @github       https://github.com/xxxily
 */


const crossTabCtl = {
  /* 在进行跨Tab控制时，排除转发的快捷键，以减少对重要快捷键的干扰 */
  excludeShortcuts (event) {
    if (!event || typeof event.keyCode === 'undefined') {
      return false
    }

    const excludeKeyCode = ['c', 'v', 'f', 'd'];

    if (event.ctrlKey || event.metaKey) {
      const key = event.key.toLowerCase();
      if (excludeKeyCode.includes(key)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },
  /* 意外退出的时候leavepictureinpicture事件并不会被调用，所以只能通过轮询来更新画中画信息 */
  updatePictureInPictureInfo () {
    setInterval(function () {
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        });
      }
    }, 1000 * 1.5);

    /**
     * 通过setInterval来更新globalPictureInPictureInfo会受页面可见性和性能策略影响而得不到更新
     * 见： https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API
     * 所以通过增加monkeyMsg广播机制来校准globalPictureInPictureInfo状态
     */
    monkeyMsg.broadcast(function () {
      // console.log('[monkeyMsg][broadcast]', ...arguments)
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        });
      }
    });
  },
  /* 判断当前是否开启了画中画功能 */
  hasOpenPictureInPicture () {
    const data = monkeyMsg.get('globalPictureInPictureInfo');

    /* 画中画的全局信息更新时间差在3s内，才认为当前开启了画中画模式，否则有可能意外退出，而没修改usePictureInPicture的值，造成误判 */
    if (data && data.data) {
      if (data.data.usePictureInPicture) {
        return Math.abs(Date.now() - data.updateTime) < 1000 * 3
      } else {
        /**
         * 检测到画中画已经被关闭，但还没关闭太久的话，允许有个短暂的时间段内让用户跨TAB控制视频
         * 例如：暂停视频播放
         */
        return Math.abs(Date.now() - data.updateTime) < 1000 * 15
      }
    }

    return false
  },
  /**
   * 判断是否需要发送跨Tab控制按键信息
   */
  isNeedSendCrossTabCtlEvent () {
    const t = crossTabCtl;

    /* 画中画开启后，判断不在同一个Tab才发送事件 */
    const data = monkeyMsg.get('globalPictureInPictureInfo');
    if (t.hasOpenPictureInPicture() && data.tabId !== curTabId) {
      return true
    } else {
      return false
    }
  },
  crossTabKeydownEvent (event) {
    const t = crossTabCtl;
    /* 处于可编辑元素中不执行任何快捷键 */
    const target = event.composedPath ? event.composedPath()[0] || event.target : event.target;
    if (isEditableTarget(target)) return
    if (t.isNeedSendCrossTabCtlEvent() && isRegisterKey(event) && !t.excludeShortcuts(event)) {
      // 阻止事件冒泡和默认事件
      event.stopPropagation();
      event.preventDefault();

      /* 广播按键消息，进行跨Tab控制 */
      // keydownEvent里已经包含了globalKeydownEvent事件
      // monkeyMsg.send('globalKeydownEvent', event)

      return true
    }
  },
  bindCrossTabEvent () {
    const t = crossTabCtl;
    if (t._hasBindEvent_) return
    document.removeEventListener('keydown', t.crossTabKeydownEvent);
    document.addEventListener('keydown', t.crossTabKeydownEvent, true);
    t._hasBindEvent_ = true;
  },
  init () {
    const t = crossTabCtl;
    t.updatePictureInPictureInfo();
    t.bindCrossTabEvent();
  }
};

/*!
 * @name         index.js
 * @description  hookJs JS AOP切面编程辅助库
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/10/22 17:40
 * @github       https://github.com/xxxily
 */

const win = typeof window === 'undefined' ? global : window;
const toStr = Function.prototype.call.bind(Object.prototype.toString);
/* 特殊场景，如果把Boolean也hook了，很容易导致调用溢出，所以是需要使用原生Boolean */
const toBoolean = Boolean.originMethod ? Boolean.originMethod : Boolean;
const util = {
  toStr,
  isObj: obj => toStr(obj) === '[object Object]',
  /* 判断是否为引用类型，用于更宽泛的场景 */
  isRef: obj => typeof obj === 'object',
  isReg: obj => toStr(obj) === '[object RegExp]',
  isFn: obj => obj instanceof Function,
  isAsyncFn: fn => toStr(fn) === '[object AsyncFunction]',
  isPromise: obj => toStr(obj) === '[object Promise]',
  firstUpperCase: str => str.replace(/^\S/, s => s.toUpperCase()),
  toArr: arg => Array.from(Array.isArray(arg) ? arg : [arg]),

  debug: {
    log () {
      let log = win.console.log;
      /* 如果log也被hook了，则使用未被hook前的log函数 */
      if (log.originMethod) { log = log.originMethod; }
      if (win._debugMode_) {
        log.apply(win.console, arguments);
      }
    }
  },
  /* 获取包含自身、继承、可枚举、不可枚举的键名 */
  getAllKeys (obj) {
    const tmpArr = [];
    for (const key in obj) { tmpArr.push(key); }
    const allKeys = Array.from(new Set(tmpArr.concat(Reflect.ownKeys(obj))));
    return allKeys
  }
};

class HookJs {
  constructor (useProxy) {
    this.useProxy = useProxy || false;
    this.hookPropertiesKeyName = '_hookProperties' + Date.now();
  }

  hookJsPro () {
    return new HookJs(true)
  }

  _addHook (hookMethod, fn, type, classHook) {
    const hookKeyName = type + 'Hooks';
    const hookMethodProperties = hookMethod[this.hookPropertiesKeyName];
    if (!hookMethodProperties[hookKeyName]) {
      hookMethodProperties[hookKeyName] = [];
    }

    /* 注册（储存）要被调用的hook函数，同时防止重复注册 */
    let hasSameHook = false;
    for (let i = 0; i < hookMethodProperties[hookKeyName].length; i++) {
      if (fn === hookMethodProperties[hookKeyName][i]) {
        hasSameHook = true;
        break
      }
    }

    if (!hasSameHook) {
      fn.classHook = classHook || false;
      hookMethodProperties[hookKeyName].push(fn);
    }
  }

  _runHooks (parentObj, methodName, originMethod, hookMethod, target, ctx, args, classHook, hookPropertiesKeyName) {
    const hookMethodProperties = hookMethod[hookPropertiesKeyName];
    const beforeHooks = hookMethodProperties.beforeHooks || [];
    const afterHooks = hookMethodProperties.afterHooks || [];
    const errorHooks = hookMethodProperties.errorHooks || [];
    const hangUpHooks = hookMethodProperties.hangUpHooks || [];
    const replaceHooks = hookMethodProperties.replaceHooks || [];
    const execInfo = {
      result: null,
      error: null,
      args: args,
      type: ''
    };

    function runHooks (hooks, type) {
      let hookResult = null;
      execInfo.type = type || '';
      if (Array.isArray(hooks)) {
        hooks.forEach(fn => {
          if (util.isFn(fn) && classHook === fn.classHook) {
            hookResult = fn(args, parentObj, methodName, originMethod, execInfo, ctx);
          }
        });
      }
      return hookResult
    }

    const runTarget = (function () {
      if (classHook) {
        return function () {
          // eslint-disable-next-line new-cap
          return new target(...args)
        }
      } else {
        return function () {
          return target.apply(ctx, args)
        }
      }
    })();

    const beforeHooksResult = runHooks(beforeHooks, 'before');
    /* 支持终止后续调用的指令 */
    if (beforeHooksResult && beforeHooksResult === 'STOP-INVOKE') {
      return beforeHooksResult
    }

    if (hangUpHooks.length || replaceHooks.length) {
      /**
       * 当存在hangUpHooks或replaceHooks的时候是不会触发原来函数的
       * 本质上来说hangUpHooks和replaceHooks是一样的，只是外部的定义描述不一致和分类不一致而已
       */
      runHooks(hangUpHooks, 'hangUp');
      runHooks(replaceHooks, 'replace');
    } else {
      if (errorHooks.length) {
        try {
          execInfo.result = runTarget();
        } catch (err) {
          execInfo.error = err;
          const errorHooksResult = runHooks(errorHooks, 'error');
          /* 支持执行错误后不抛出异常的指令 */
          if (errorHooksResult && errorHooksResult === 'SKIP-ERROR') ; else {
            throw err
          }
        }
      } else {
        execInfo.result = runTarget();
      }
    }

    /**
     * 执行afterHooks，如果返回的是Promise，理论上应该进行进一步的细分处理
     * 但添加细分处理逻辑后发现性能下降得比较厉害，且容易出现各种异常，所以决定不在hook里处理Promise情况
     * 下面是原Promise处理逻辑，添加后会导致以下网站卡死或无法访问：
     * wenku.baidu.com
     * https://pubs.rsc.org/en/content/articlelanding/2021/sc/d1sc01881g#!divAbstract
     * https://www.elsevier.com/connect/coronavirus-information-center
     */
    // if (execInfo.result && execInfo.result.then && util.isPromise(execInfo.result)) {
    //   execInfo.result.then(function (data) {
    //     execInfo.result = data
    //     runHooks(afterHooks, 'after')
    //     return Promise.resolve.apply(ctx, arguments)
    //   }).catch(function (err) {
    //     execInfo.error = err
    //     runHooks(errorHooks, 'error')
    //     return Promise.reject.apply(ctx, arguments)
    //   })
    // }

    runHooks(afterHooks, 'after');

    return execInfo.result
  }

  _proxyMethodcGenerator (parentObj, methodName, originMethod, classHook, context, proxyHandler) {
    const t = this;
    const useProxy = t.useProxy;
    let hookMethod = null;

    /* 存在缓存则使用缓存的hookMethod */
    if (t.isHook(originMethod)) {
      hookMethod = originMethod;
    } else if (originMethod[t.hookPropertiesKeyName] && t.isHook(originMethod[t.hookPropertiesKeyName].hookMethod)) {
      hookMethod = originMethod[t.hookPropertiesKeyName].hookMethod;
    }

    if (hookMethod) {
      if (!hookMethod[t.hookPropertiesKeyName].isHook) {
        /* 重新标注被hook状态 */
        hookMethod[t.hookPropertiesKeyName].isHook = true;
        util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);
      }
      return hookMethod
    }

    /* 使用Proxy模式进行hook可以获得更多特性，但性能也会稍差一些 */
    if (useProxy && Proxy) {
      /* 注意：使用Proxy代理，hookMethod和originMethod将共用同一对象 */
      const handler = { ...proxyHandler };

      /* 下面的写法确定了proxyHandler是无法覆盖construct和apply操作的 */
      if (classHook) {
        handler.construct = function (target, args, newTarget) {
          context = context || this;
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, context, args, true, t.hookPropertiesKeyName)
        };
      } else {
        handler.apply = function (target, ctx, args) {
          ctx = context || ctx;
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, ctx, args, false, t.hookPropertiesKeyName)
        };
      }

      hookMethod = new Proxy(originMethod, handler);
    } else {
      hookMethod = function () {
        /**
         * 注意此处不能通过 context = context || this
         * 然后通过把context当ctx传递过去
         * 这将导致ctx引用错误
         */
        const ctx = context || this;
        return t._runHooks(parentObj, methodName, originMethod, hookMethod, originMethod, ctx, arguments, classHook, t.hookPropertiesKeyName)
      };

      /* 确保子对象和原型链跟originMethod保持一致 */
      const keys = Reflect.ownKeys(originMethod);
      keys.forEach(keyName => {
        try {
          Object.defineProperty(hookMethod, keyName, {
            get: function () {
              return originMethod[keyName]
            },
            set: function (val) {
              originMethod[keyName] = val;
            }
          });
        } catch (err) {
          // 设置defineProperty的时候出现异常，可能导致hookMethod部分功能缺失，也可能不受影响
          util.debug.log(`[proxyMethodcGenerator] hookMethod defineProperty abnormal.  hookMethod:${methodName}, definePropertyName:${keyName}`, err);
        }
      });
      hookMethod.prototype = originMethod.prototype;
    }

    const hookMethodProperties = hookMethod[t.hookPropertiesKeyName] = {};

    hookMethodProperties.originMethod = originMethod;
    hookMethodProperties.hookMethod = hookMethod;
    hookMethodProperties.isHook = true;
    hookMethodProperties.classHook = classHook;

    util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);

    return hookMethod
  }

  _getObjKeysByRule (obj, rule) {
    let excludeRule = null;
    let result = rule;

    if (util.isObj(rule) && rule.include) {
      excludeRule = rule.exclude;
      rule = rule.include;
      result = rule;
    }

    /**
     * for in、Object.keys与Reflect.ownKeys的区别见：
     * https://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E9%81%8D%E5%8E%86
     */
    if (rule === '*') {
      result = Object.keys(obj);
    } else if (rule === '**') {
      result = Reflect.ownKeys(obj);
    } else if (rule === '***') {
      result = util.getAllKeys(obj);
    } else if (util.isReg(rule)) {
      result = util.getAllKeys(obj).filter(keyName => rule.test(keyName));
    }

    /* 如果存在排除规则，则需要进行排除 */
    if (excludeRule) {
      result = Array.isArray(result) ? result : [result];
      if (util.isReg(excludeRule)) {
        result = result.filter(keyName => !excludeRule.test(keyName));
      } else if (Array.isArray(excludeRule)) {
        result = result.filter(keyName => !excludeRule.includes(keyName));
      } else {
        result = result.filter(keyName => excludeRule !== keyName);
      }
    }

    return util.toArr(result)
  }

  /**
   * 判断某个函数是否已经被hook
   * @param fn {Function} -必选 要判断的函数
   * @returns {boolean}
   */
  isHook (fn) {
    if (!fn || !fn[this.hookPropertiesKeyName]) {
      return false
    }
    const hookMethodProperties = fn[this.hookPropertiesKeyName];
    return util.isFn(hookMethodProperties.originMethod) && fn !== hookMethodProperties.originMethod
  }

  /**
   * 判断对象下的某个值是否具备hook的条件
   * 注意：具备hook条件和能否直接修改值是两回事，
   * 在进行hook的时候还要检查descriptor.writable是否为false
   * 如果为false则要修改成true才能hook成功
   * @param parentObj
   * @param keyName
   * @returns {boolean}
   */
  isAllowHook (parentObj, keyName) {
    /* 有些对象会设置getter，让读取值的时候就抛错，所以需要try catch 判断能否正常读取属性 */
    try { if (!parentObj[keyName]) return false } catch (e) { return false }
    const descriptor = Object.getOwnPropertyDescriptor(parentObj, keyName);
    return !(descriptor && descriptor.configurable === false)
  }

  /**
   * hook 核心函数
   * @param parentObj {Object} -必选 被hook函数依赖的父对象
   * @param hookMethods {Object|Array|RegExp|string} -必选 被hook函数的函数名或函数名的匹配规则
   * @param fn {Function} -必选 hook之后的回调方法
   * @param type {String} -可选 默认before，指定运行hook函数回调的时机，可选字符串：before、after、replace、error、hangUp
   * @param classHook {Boolean} -可选 默认false，指定是否为针对new（class）操作的hook
   * @param context {Object} -可选 指定运行被hook函数时的上下文对象
   * @param proxyHandler {Object} -可选 仅当用Proxy进行hook时有效，默认使用的是Proxy的apply handler进行hook，如果你有特殊需求也可以配置自己的handler以实现更复杂的功能
   * 附注：不使用Proxy进行hook，可以获得更高性能，但也意味着通用性更差些，对于要hook HTMLElement.prototype、EventTarget.prototype这些对象里面的非实例的函数往往会失败而导致被hook函数执行出错
   * @returns {boolean}
   */
  hook (parentObj, hookMethods, fn, type, classHook, context, proxyHandler) {
    /* 支持对象形式的传参 */
    const opts = arguments[0];
    if (util.isObj(opts) && opts.parentObj && opts.hookMethods) {
      parentObj = opts.parentObj;
      hookMethods = opts.hookMethods;
      fn = opts.fn;
      type = opts.type;
      classHook = opts.classHook;
      context = opts.context;
      proxyHandler = opts.proxyHandler;
    }

    classHook = toBoolean(classHook);
    type = type || 'before';

    if ((!util.isRef(parentObj) && !util.isFn(parentObj)) || !util.isFn(fn) || !hookMethods) {
      return false
    }

    const t = this;

    hookMethods = t._getObjKeysByRule(parentObj, hookMethods);
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName)) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] does not support modification`);
        return false
      }

      const descriptor = Object.getOwnPropertyDescriptor(parentObj, methodName);
      if (descriptor && descriptor.writable === false) {
        Object.defineProperty(parentObj, methodName, { writable: true });
      }

      const originMethod = parentObj[methodName];
      let hookMethod = null;

      /* 非函数无法进行hook操作 */
      if (!util.isFn(originMethod)) {
        return false
      }

      hookMethod = t._proxyMethodcGenerator(parentObj, methodName, originMethod, classHook, context, proxyHandler);

      const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];
      if (hookMethodProperties.classHook !== classHook) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] Cannot support functions hook and classes hook at the same time `);
        return false
      }

      /* 使用hookMethod接管需要被hook的方法 */
      if (parentObj[methodName] !== hookMethod) {
        parentObj[methodName] = hookMethod;
      }

      t._addHook(hookMethod, fn, type, classHook);
    });
  }

  /* 专门针对new操作的hook，本质上是hook函数的别名，可以少传classHook这个参数，并且明确语义 */
  hookClass (parentObj, hookMethods, fn, type, context, proxyHandler) {
    return this.hook(parentObj, hookMethods, fn, type, true, context, proxyHandler)
  }

  /**
   * 取消对某个函数的hook
   * @param parentObj {Object} -必选 要取消被hook函数依赖的父对象
   * @param hookMethods {Object|Array|RegExp|string} -必选 要取消被hook函数的函数名或函数名的匹配规则
   * @param type {String} -可选 默认before，指定要取消的hook类型，可选字符串：before、after、replace、error、hangUp，如果不指定该选项则取消所有类型下的所有回调
   * @param fn {Function} -必选 取消指定的hook回调函数，如果不指定该选项则取消对应type类型下的所有回调
   * @returns {boolean}
   */
  unHook (parentObj, hookMethods, type, fn) {
    if (!util.isRef(parentObj) || !hookMethods) {
      return false
    }

    const t = this;
    hookMethods = t._getObjKeysByRule(parentObj, hookMethods);
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName)) {
        return false
      }

      const hookMethod = parentObj[methodName];

      if (!t.isHook(hookMethod)) {
        return false
      }

      const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];
      const originMethod = hookMethodProperties.originMethod;

      if (type) {
        const hookKeyName = type + 'Hooks';
        const hooks = hookMethodProperties[hookKeyName] || [];

        if (fn) {
          /* 删除指定类型下的指定hook函数 */
          for (let i = 0; i < hooks.length; i++) {
            if (fn === hooks[i]) {
              hookMethodProperties[hookKeyName].splice(i, 1);
              util.debug.log(`[unHook ${hookKeyName} func] ${util.toStr(parentObj)} ${methodName}`, fn);
              break
            }
          }
        } else {
          /* 删除指定类型下的所有hook函数 */
          if (Array.isArray(hookMethodProperties[hookKeyName])) {
            hookMethodProperties[hookKeyName] = [];
            util.debug.log(`[unHook all ${hookKeyName}] ${util.toStr(parentObj)} ${methodName}`);
          }
        }
      } else {
        /* 彻底还原被hook的函数 */
        if (util.isFn(originMethod)) {
          parentObj[methodName] = originMethod;
          delete parentObj[methodName][t.hookPropertiesKeyName];

          // Object.keys(hookMethod).forEach(keyName => {
          //   if (/Hooks$/.test(keyName) && Array.isArray(hookMethod[keyName])) {
          //     hookMethod[keyName] = []
          //   }
          // })
          //
          // hookMethod.isHook = false
          // parentObj[methodName] = originMethod
          // delete parentObj[methodName].originMethod
          // delete parentObj[methodName].hookMethod
          // delete parentObj[methodName].isHook
          // delete parentObj[methodName].isClassHook

          util.debug.log(`[unHook method] ${util.toStr(parentObj)} ${methodName}`);
        }
      }
    });
  }

  _hook (args, type) {
    const t = this;
    return function (obj, hookMethods, fn, classHook, context, proxyHandler) {
      const opts = args[0];
      if (util.isObj(opts) && opts.parentObj && opts.hookMethods) {
        opts.type = type;
      }
      return t.hook.apply(t, args)
    }
  }

  /* 源函数运行前的hook */
  before (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'before', classHook, context, proxyHandler)
  }

  /* 源函数运行后的hook */
  after (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'after', classHook, context, proxyHandler)
  }

  /* 替换掉要hook的函数，不再运行源函数，换成运行其他逻辑 */
  replace (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'replace', classHook, context, proxyHandler)
  }

  /* 源函数运行出错时的hook */
  error (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'error', classHook, context, proxyHandler)
  }

  /* 底层实现逻辑与replace一样，都是替换掉要hook的函数，不再运行源函数，只不过是为了明确语义，将源函数挂起不再执行，原则上也不再执行其他逻辑，如果要执行其他逻辑请使用replace hook */
  hangUp (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'hangUp', classHook, context, proxyHandler)
  }
}

const hookJs = new HookJs(true);

/**
 * 禁止对playbackRate进行锁定
 * 部分播放器会阻止修改playbackRate
 * 通过hackDefineProperty来反阻止playbackRate的修改
 * 参考： https://greasyfork.org/zh-CN/scripts/372673
 */

function hackDefineProperCore (target, key, option) {
  if (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {
    option.configurable = true;
  }

  if (target instanceof HTMLVideoElement) {
    const unLockProperties = ['playbackRate', 'currentTime', 'volume', 'muted'];
    if (unLockProperties.includes(key)) {
      try {
        debug.log(`禁止对${key}进行锁定`);
        option.configurable = true;
        key = key + '_hack';
      } catch (e) {
        debug.error(`禁止锁定${key}失败！`, e);
      }
    }
  }

  return [target, key, option]
}

function hackDefineProperOnError (args, parentObj, methodName, originMethod, execInfo, ctx) {
  debug.error(`${methodName} error:`, execInfo.error);

  /* 忽略执行异常 */
  return 'SKIP-ERROR'
}

function hackDefineProperty () {
  hookJs.before(Object, 'defineProperty', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const option = args[2];
    const ele = args[0];
    const key = args[1];
    const afterArgs = hackDefineProperCore(ele, key, option);
    afterArgs.forEach((arg, i) => {
      args[i] = arg;
    });
  });

  hookJs.before(Object, 'defineProperties', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const properties = args[1];
    const ele = args[0];
    if (ele && ele instanceof Element) {
      Object.keys(properties).forEach(key => {
        const option = properties[key];
        const afterArgs = hackDefineProperCore(ele, key, option);
        args[0] = afterArgs[0];
        delete properties[key];
        properties[afterArgs[1]] = afterArgs[2];
      });
    }
  });

  hookJs.error(Object, 'defineProperty', hackDefineProperOnError);
  hookJs.error(Object, 'defineProperties', hackDefineProperOnError);
}

/*!
 * @name      menuCommand.js
 * @version   0.0.1
 * @author    Blaze
 * @date      2019/9/21 14:22
 */

const monkeyMenu = {
  menuIds: {},
  on (title, fn, accessKey) {
    if (title instanceof Function) {
      title = title();
    }

    if (window.GM_registerMenuCommand) {
      const menuId = window.GM_registerMenuCommand(title, fn, accessKey);

      this.menuIds[menuId] = {
        title,
        fn,
        accessKey
      };

      return menuId
    }
  },

  off (id) {
    if (window.GM_unregisterMenuCommand) {
      delete this.menuIds[id];

      /**
       * 批量移除已注册的按钮时，在某些性能较差的机子上会留下数字title的菜单残留
       * 应该属于插件自身导致的BUG，暂时无法解决
       * 所以此处暂时不进行菜单移除，tampermonkey会自动对同名菜单进行合并
       */
      // return window.GM_unregisterMenuCommand(id)
    }
  },

  clear () {
    Object.keys(this.menuIds).forEach(id => {
      this.off(id);
    });
  },

  /**
   * 通过菜单配置进行批量注册，注册前会清空之前注册过的所有菜单
   * @param {array|function} menuOpts 菜单配置，如果是函数则会调用该函数获取菜单配置，并且当菜单被点击后会重新创建菜单，实现菜单的动态更新
   */
  build (menuOpts) {
    this.clear();

    if (Array.isArray(menuOpts)) {
      menuOpts.forEach(menu => {
        if (menu.disable === true) { return }
        this.on(menu.title, menu.fn, menu.accessKey);
      });
    } else if (menuOpts instanceof Function) {
      const menuList = menuOpts();
      if (Array.isArray(menuList)) {
        this._menuBuilder_ = menuOpts;

        menuList.forEach(menu => {
          if (menu.disable === true) { return }

          const menuFn = () => {
            try {
              menu.fn.apply(menu, arguments);
            } catch (e) {
              console.error('[monkeyMenu]', menu.title, e);
            }

            // 每次菜单点击后，重新注册菜单，这样可以确保菜单的状态是最新的
            setTimeout(() => {
              // console.log('[monkeyMenu rebuild]', menu.title)
              this.build(this._menuBuilder_);
            }, 100);
          };

          this.on(menu.title, menuFn, menu.accessKey);
        });
      } else {
        console.error('monkeyMenu build error, no menuList return', menuOpts);
      }
    }
  }
};

const version = '4.2.0';

function refreshPage (msg) {
  msg = msg || '配置已更改，马上刷新页面让配置生效？';
  const status = confirm(msg);
  if (status) {
    window.location.reload();
  }
}

/**
 * 全局可调用的功能，会提供给monkeyMenu调用和UI界面的相关位置进行调用
 * 为了便于调用编排所以使用对象的方式进行管理
 */
const globalFunctional = {
  openInTab,
  getHomePageLink: {
    title: i18n.t('website'),
    desc: i18n.t('website'),
    fn: () => {
      const homePageLinks = [
        'https://h5player.anzz.top',
        'https://github.com/xxxily/h5player',
        'https://greasyfork.org/scripts/381682',
        'https://u.anzz.top/h5player'
      ];

      /* 从homePageLinks中随机选取一个链接返回 */
      return homePageLinks[Math.floor(Math.random() * homePageLinks.length)]
    }
  },

  /* 打开官网 */
  openWebsite: {
    title: i18n.t('website'),
    desc: i18n.t('website'),
    fn: () => {
      openInTab('https://u.anzz.top/h5player');
    }
  },
  openAuthorHomePage: {
    title: i18n.t('aboutAuthor'),
    desc: i18n.t('aboutAuthor'),
    fn: () => {
      // openInTab('https://github.com/xxxily')
      openInTab('https://u.anzz.top/xxxily');
    }
  },
  openHotkeysPage: {
    title: i18n.t('hotkeysDocs'),
    desc: i18n.t('hotkeysDocs'),
    fn: () => {
      openInTab('https://h5player.anzz.top/home/Introduction.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%88%97%E8%A1%A8');
    }
  },
  openProjectGithub: {
    title: 'GitHub',
    desc: 'GitHub',
    fn: () => {
      openInTab('https://github.com/xxxily/h5player');
    }
  },
  openIssuesPage: {
    title: i18n.t('issues'),
    desc: i18n.t('hotkeys'),
    fn: () => {
      openInTab('https://github.com/xxxily/h5player/issues');
    }
  },
  openDonatePage: {
    title: i18n.t('donate'),
    desc: i18n.t('donate'),
    fn: () => {
      openInTab('https://u.anzz.top/h5playerdonate');
    }
  },
  openAboutDonatePage: {
    title: i18n.t('aboutDonate'),
    desc: i18n.t('aboutDonate'),
    fn: () => {
      openInTab('https://u.anzz.top/aboutonate');
    }
  },
  openAddGroupChatPage: {
    title: i18n.t('addGroupChat'),
    desc: i18n.t('addGroupChat'),
    fn: () => {
      openInTab('https://u.anzz.top/h5playerddhatroup');
    }
  },
  openChangeLogPage: {
    title: i18n.t('changeLog'),
    desc: i18n.t('changeLog'),
    fn: () => {
      openInTab('https://h5player.anzz.top/home/changeLog.html');
    }
  },
  openCheckVersionPage: {
    title: i18n.t('checkVersion'),
    desc: i18n.t('checkVersion'),
    fn: () => {
      const confirm = window.confirm(`${i18n.t('currentVersion')}「${version}」\n${i18n.t('checkVersion')}`);
      if (confirm) {
        openInTab('https://greasyfork.org/zh-CN/scripts/381682/versions');
      }
    }
  },
  openRecommendPage: {
    title: i18n.t('recommend'),
    desc: i18n.t('recommend'),
    fn: () => {
      function randomZeroOrOne () {
        return Math.floor(Math.random() * 2)
      }

      if (randomZeroOrOne()) {
        openInTab('https://hello-ai.anzz.top/home/');
      } else {
        openInTab('https://github.com/xxxily/hello-ai');
      }
    }
  },
  openCustomConfigurationEditor: {
    title: i18n.t('openCustomConfigurationEditor'),
    desc: i18n.t('openCustomConfigurationEditor'),
    fn: () => {
      // openInTab('https://h5player.anzz.top/tools/json-editor/index.html?mode=tree&saveHandlerName=saveH5PlayerConfig&expandAll=true&json={}')
      openInTab('https://u.anzz.top/h5pjsoneditor');
    }
  },
  /* 切换tampermonkey菜单的展开或折叠状态 */
  toggleExpandedOrCollapsedStateOfMonkeyMenu: {
    title: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} 「${i18n.t('globalSetting')}」`,
    desc: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.unfoldMenu', !configManager.get('enhance.unfoldMenu'));
        window.location.reload();
      }
    }
  },
  /* 切换脚本的启用或禁用状态 */
  toggleScriptEnableState: {
    title: `${configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript')} 「${i18n.t('localSetting')}」`,
    desc: `${configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript'));
      if (confirm) {
        configManager.setLocalStorage('enable', !configManager.get('enable'));
        window.location.reload();
      }
    }
  },
  /* 切换默认播放进度的控制逻辑 */
  toggleSetCurrentTimeFunctional: {
    /* 标题使用函数是为了下次调用的时候读取到最新的状态信息 */
    title: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'));
      if (confirm) {
        configManager.setLocalStorage('enhance.blockSetCurrentTime', !configManager.get('enhance.blockSetCurrentTime'));
        window.location.reload();
      }
    }
  },
  toggleSetVolumeFunctional: {
    title: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume'));
      if (confirm) {
        configManager.setLocalStorage('enhance.blockSetVolume', !configManager.get('enhance.blockSetVolume'));
        window.location.reload();
      }
    }
  },
  toggleSetPlaybackRateFunctional: {
    title: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'));
      if (confirm) {
        /* 倍速参数，只能全局设置 */
        configManager.setGlobalStorage('enhance.blockSetPlaybackRate', !configManager.get('enhance.blockSetPlaybackRate'));
        window.location.reload();
      }
    }
  },
  toggleAcousticGainFunctional: {
    title: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowAcousticGain', !configManager.getGlobalStorage('enhance.allowAcousticGain'));
        window.location.reload();
      }
    }
  },
  toggleCrossOriginControlFunctional: {
    title: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowCrossOriginControl', !configManager.getGlobalStorage('enhance.allowCrossOriginControl'));
        window.location.reload();
      }
    }
  },
  toggleExperimentFeatures: {
    title: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('experimentFeaturesWarning'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'));
        window.location.reload();
      }
    }
  },
  toggleExternalCustomConfiguration: {
    title: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowExternalCustomConfiguration', !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration'));
        window.location.reload();
      }
    }
  },
  toggleDebugMode: {
    title: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode'));
      if (confirm) {
        configManager.setGlobalStorage('debug', !configManager.getGlobalStorage('debug'));
        window.location.reload();
      }
    }
  },

  /* 还原全局的默认配置 */
  restoreGlobalConfiguration: {
    title: i18n.t('restoreConfiguration'),
    desc: i18n.t('restoreConfiguration'),
    fn: () => {
      configManager.clear();
      refreshPage();
    }
  },
  openCrossOriginFramePage: {
    title: i18n.t('openCrossOriginFramePage'),
    desc: i18n.t('openCrossOriginFramePage'),
    fn: () => {
      openInTab(location.href);
    }
  },

  /* 切换脚本UI界面的显示或隐藏状态，注意：只有明确为fasle才隐藏GUI，其它情况都要显示GUI，例如null、undefined等都正常显示GUI */
  toggleGUIStatus: {
    title: () => `${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('globalSetting')}」`);
      if (confirm) {
        configManager.setGlobalStorage('ui.enable', !configManager.getGlobalStorage('ui.enable'));
        window.location.reload();
      }
    }
  },

  /* 切换当前网站下的脚本UI界面的显示或隐藏状态 */
  toggleGUIStatusUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} 「${i18n.t('localSetting')}」`);
      if (confirm) {
        configManager.setLocalStorage('ui.enable', !configManager.getLocalStorage('ui.enable'));
        window.location.reload();
      }
    }
  },
  alwaysShowGraphicalInterface: {
    title: `${i18n.t('toggleStates')}${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」`,
    desc: `${i18n.t('toggleStates')}${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const alwaysShow = configManager.getGlobalStorage('ui.alwaysShow');
      const confirm = window.confirm(alwaysShow === true ? `${i18n.t('disable')}${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」` : `${i18n.t('alwaysShowGraphicalInterface')} 「${i18n.t('globalSetting')}」`);
      if (confirm) {
        configManager.setGlobalStorage('ui.alwaysShow', !alwaysShow);
        window.location.reload();
      }
    }
  },

  toggleHotkeysStatus: {
    title: () => `${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('globalSetting')}」`,
    desc: () => `${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('globalSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('globalSetting')}」`);
      if (confirm) {
        configManager.setGlobalStorage('enableHotkeys', !configManager.getGlobalStorage('enableHotkeys'));
        window.location.reload();
      }
    }
  },

  toggleHotkeysStatusUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('localSetting')}」`,
    desc: () => `${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('localSetting')}」`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} 「${i18n.t('localSetting')}」`);
      if (confirm) {
        configManager.setLocalStorage('enableHotkeys', !configManager.getLocalStorage('enableHotkeys'));
        window.location.reload();
      }
    }
  },

  setLanguage: {
    title: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
    desc: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
    fn: (lang) => {
      const confirm = window.confirm(`${i18n.t('languageSettings')}[${lang}] ?`);
      if (confirm) {
        if (lang === 'auto' || i18n.languages()[lang]) {
          configManager.setGlobalStorage('language', lang);
          window.location.reload();
        } else {
          alert('Language not found');
        }
      }
    }
  },

  cleanRemoteHelperInfo: {
    title: i18n.t('cleanRemoteHelperInfo'),
    desc: i18n.t('cleanRemoteHelperInfo'),
    fn: () => {
      configManager.setGlobalStorage('recommendList', false);
      configManager.setGlobalStorage('contactRemoteHelperSuccessTime', false);
      configManager.setGlobalStorage('lastContactRemoteHelperTime', false);
      window.location.reload();
    }
  }
};

/*!
 * @name         menuManager.js
 * @description  菜单管理器
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/08/11 10:05
 * @github       https://github.com/xxxily
 */

let monkeyMenuList = [
  { ...globalFunctional.openWebsite },
  // { ...globalFunctional.openHotkeysPage },
  {
    ...globalFunctional.openIssuesPage,
    disable: !configManager.get('enhance.unfoldMenu')
  },
  { ...globalFunctional.openDonatePage },
  {
    ...globalFunctional.toggleScriptEnableState,
    disable: configManager.get('enable') !== false
  },
  {
    ...globalFunctional.toggleGUIStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('ui.enable') !== false
  },
  {
    ...globalFunctional.toggleGUIStatus,
    disable: configManager.getGlobalStorage('ui.enable') === false ? false : !configManager.get('enhance.unfoldMenu')
  },
  {
    ...globalFunctional.toggleHotkeysStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('enableHotkeys') !== false
  },
  {
    ...globalFunctional.toggleHotkeysStatus,
    disable: configManager.get('enableHotkeys') !== false
  },
  { ...globalFunctional.openCustomConfigurationEditor },
  /* 展开或收起菜单 */
  { ...globalFunctional.toggleExpandedOrCollapsedStateOfMonkeyMenu },
  {
    ...globalFunctional.restoreGlobalConfiguration,
    disable: !configManager.get('enhance.unfoldMenu')
  }
];

/* 菜单构造函数（必须是函数才能在点击后动态更新菜单状态） */
function menuBuilder () {
  return monkeyMenuList
}

/* 注册动态菜单 */
function menuRegister () {
  monkeyMenu.build(menuBuilder);
}

/**
 * 增加菜单项
 * @param {Object|Array} menuOpts 菜单的配置项目，多个配置项目用数组表示
 */
function addMenu (menuOpts, before) {
  menuOpts = Array.isArray(menuOpts) ? menuOpts : [menuOpts];
  menuOpts = menuOpts.filter(item => item.title && !item.disabled);

  if (before) {
    /* 将菜单追加到其它菜单的前面 */
    monkeyMenuList = menuOpts.concat(monkeyMenuList);
  } else {
    monkeyMenuList = monkeyMenuList.concat(menuOpts);
  }

  /* 重新注册菜单 */
  menuRegister();
}

/**
 * 注册跟h5player相关的菜单，只有检测到存在媒体标签了才会注册
 */
function registerH5playerMenus (h5player) {
  const t = h5player;
  const player = t.player();
  const foldMenu = !configManager.get('enhance.unfoldMenu');

  if (player && !t._hasRegisterH5playerMenus_) {
    const menus = [
      {
        ...globalFunctional.openCrossOriginFramePage,
        disable: foldMenu || !isInCrossOriginFrame()
      },
      {
        ...globalFunctional.toggleSetCurrentTimeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleSetVolumeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleSetPlaybackRateFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleAcousticGainFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleCrossOriginControlFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleExperimentFeatures,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleExternalCustomConfiguration,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleDebugMode,
        disable: foldMenu
      }
    ];

    let titlePrefix = '';
    if (isInIframe()) {
      titlePrefix = `[${location.hostname}]`;

      /* 补充title前缀 */
      menus.forEach(menu => {
        const titleFn = menu.title;
        if (titleFn instanceof Function && menu.type === 'local') {
          menu.title = () => titlePrefix + titleFn();
        }
      });
    }

    addMenu(menus);

    t._hasRegisterH5playerMenus_ = true;
  }
}

/**
   * 代理视频播放器的事件注册和取消注册的函数，以对注册事件进行调试或阻断
   * @param {*} player
   * @returns
   */
function proxyHTMLMediaElementEvent () {
  if (HTMLMediaElement.prototype._rawAddEventListener_) {
    return false
  }

  HTMLMediaElement.prototype._rawAddEventListener_ = HTMLMediaElement.prototype.addEventListener;
  HTMLMediaElement.prototype._rawRemoveEventListener_ = HTMLMediaElement.prototype.removeEventListener;

  HTMLMediaElement.prototype.addEventListener = new Proxy(HTMLMediaElement.prototype.addEventListener, {
    apply (target, ctx, args) {
      const eventName = args[0];
      const listener = args[1];
      if (listener instanceof Function && eventName === 'ratechange') {
        /* 对注册了ratechange事件进行检测，如果存在异常行为，则尝试挂起事件 */

        args[1] = new Proxy(listener, {
          apply (target, ctx, args) {
            if (ctx) {
              /* 阻止调速检测，并进行反阻止 */
              if (ctx.playbackRate && eventName === 'ratechange') {
                if (ctx._hasBlockRatechangeEvent_) {
                  return true
                }

                const oldRate = ctx.playbackRate;
                const startTime = Date.now();

                const result = target.apply(ctx, args);

                /**
                 * 通过判断执行ratechange前后的速率是否被改变，
                 * 以及是否出现了超长的执行时间（可能出现了alert弹窗）来检测是否可能存在阻止调速的行为
                 * 其他检测手段待补充
                 */
                const blockRatechangeBehave1 = oldRate !== ctx.playbackRate || Date.now() - startTime > 1000;
                const blockRatechangeBehave2 = ctx._setPlaybackRate_ && ctx._setPlaybackRate_.value !== ctx.playbackRate;
                if (blockRatechangeBehave1 || blockRatechangeBehave2) {
                  debug.info(`[execVideoEvent][${eventName}]检测到可能存在阻止调速的行为，已禁止${eventName}事件的执行`, listener);
                  ctx._hasBlockRatechangeEvent_ = true;
                  return true
                } else {
                  return result
                }
              }
            }

            try {
              return target.apply(ctx, args)
            } catch (e) {
              debug.error(`[proxyPlayerEvent][${eventName}]`, listener, e);
            }
          }
        });
      }

      return target.apply(ctx, args)
    }
  });
}

const mediaSource = (function () {
  let hasMediaSourceInit = false;
  const originMethods = {};
  const originURLMethods = {};
  const mediaSourceMap = new original.Map();
  const objectURLMap = new original.Map();

  function connectMediaSourceWithMediaElement (mediaEl) {
    const curSrc = mediaEl.currentSrc || mediaEl.src;

    if (!curSrc) { return false }

    mediaSourceMap.forEach(mediaSourceInfo => {
      if (mediaSourceInfo.mediaSource.__objURL__ && curSrc === mediaSourceInfo.mediaSource.__objURL__) {
        mediaSourceInfo.mediaElement = mediaEl;
      }
    });
  }

  /* 如果mediaSourceMap中关联的mediaEl检测到不存在了，则清理mediaSourceMap中的数据，减少内存占用 */
  function cleanMediaSourceData () {
    function removeMediaSourceData (mediaSourceInfo) {
      console.log('[cleanMediaSourceData][removeMediaSourceData]', mediaSourceInfo.mediaUrl || mediaSourceInfo.mediaSource.__objURL__);
      original.map.delete.call(mediaSourceMap, mediaSourceInfo.mediaSource);
      original.map.delete.call(objectURLMap, mediaSourceInfo.mediaSource);
    }

    mediaSourceMap.forEach((mediaSourceInfo) => {
      if (!mediaSourceInfo.mediaElement || !(mediaSourceInfo.mediaElement instanceof HTMLMediaElement)) {
        removeMediaSourceData(mediaSourceInfo);
      } else {
        if (isOutOfDocument(mediaSourceInfo.mediaElement)) {
          removeMediaSourceData(mediaSourceInfo);
        }
      }
    });
  }

  function proxyMediaSourceMethod () {
    if (!originMethods.addSourceBuffer || !originMethods.endOfStream) {
      return false
    }

    // TODO 该代理在上层调用生效可能存在延迟，原因待研究
    originURLMethods.createObjectURL = originURLMethods.createObjectURL || URL.prototype.constructor.createObjectURL;
    URL.prototype.constructor.createObjectURL = new original.Proxy(originURLMethods.createObjectURL, {
      apply (target, ctx, args) {
        const object = args[0];
        const objectURL = target.apply(ctx, args);

        if (object instanceof MediaSource && !original.map.has.call(objectURLMap, object)) {
          object.__objURL__ = objectURL;
          original.map.set.call(objectURLMap, object, objectURL);
        }

        return objectURL
      }
    });

    MediaSource.prototype.addSourceBuffer = new original.Proxy(originMethods.addSourceBuffer, {
      apply (target, ctx, args) {
        if (!original.map.has.call(mediaSourceMap, ctx)) {
          original.map.set.call(mediaSourceMap, ctx, {
            mediaSource: ctx,
            createTime: Date.now(),
            sourceBuffer: [],
            endOfStream: false
          });
        }

        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);
        const mimeCodecs = args[0] || '';
        const sourceBuffer = target.apply(ctx, args);

        const sourceBufferItem = {
          mimeCodecs,
          originAppendBuffer: sourceBuffer.appendBuffer,
          bufferData: [],
          mediaInfo: {}
        };

        try {
          // mimeCodecs字符串示例：'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          const mediaInfo = sourceBufferItem.mediaInfo;
          const tmpArr = sourceBufferItem.mimeCodecs.split(';');

          mediaInfo.type = tmpArr[0].split('/')[0];
          mediaInfo.format = tmpArr[0].split('/')[1];
          mediaInfo.codecs = tmpArr[1].trim().replace('codecs=', '').replace(/["']/g, '');
        } catch (e) {
          original.console.error('[addSourceBuffer][mediaInfo] 媒体信息解析出错', sourceBufferItem, e);
        }

        mediaSourceInfo.sourceBuffer.push(sourceBufferItem);

        /* 代理sourceBuffer.appendBuffer函数，并将buffer存一份到mediaSourceInfo里 */
        sourceBuffer.appendBuffer = new original.Proxy(sourceBufferItem.originAppendBuffer, {
          apply (bufTarget, bufCtx, bufArgs) {
            const buffer = bufArgs[0];

            if (!mediaSourceInfo.endOfStream) {
              sourceBufferItem.bufferData.push(buffer);
            }

            /* 确保mediaUrl的存在和对应 */
            if (original.map.get.call(objectURLMap, ctx)) {
              mediaSourceInfo.mediaUrl = original.map.get.call(objectURLMap, ctx);
            }

            /* 如果appendBuffer依然活跃，但对应的mediaSource却被清理了，则尝试重新将数据关联回去 */
            if (!original.map.get.call(mediaSourceMap, ctx)) {
              original.map.set.call(mediaSourceMap, ctx, mediaSourceInfo);
            }

            return bufTarget.apply(bufCtx, bufArgs)
          }
        });

        return sourceBuffer
      }
    });

    MediaSource.prototype.endOfStream = new original.Proxy(originMethods.endOfStream, {
      apply (target, ctx, args) {
        /* 标识当前媒体流已加载完成 */
        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);
        if (mediaSourceInfo) {
          mediaSourceInfo.endOfStream = true;

          if (mediaSourceInfo.mediaElement && mediaSourceInfo.autoDownload && !mediaSourceInfo.hasDownload) {
            downloadMediaSource(mediaSourceInfo.mediaElement);
          }
        }

        return target.apply(ctx, args)
      }
    });
  }

  /**
   * 下载媒体资源，下载代码参考：https://juejin.cn/post/6873267073674379277
   */
  function downloadMediaSource (mediaEl, title) {
    // const srcList = mediaEl.srcList || []
    const curSrc = mediaEl.currentSrc || mediaEl.src;

    if (!curSrc) {
      original.alert(i18n.t('mediaDownload.notSupport'));
      return false
    }

    let hasFindMediaSource = false;
    mediaSourceMap.forEach(mediaSourceInfo => {
      const mediaSource = mediaSourceInfo.mediaSource;
      if (!mediaSource.__objURL__) {
        console.error('no objURL', mediaSource, mediaSourceInfo);
        return false
      }

      /* 排除非当前媒体元素的媒体流 */
      // if (srcList.length > 0 && !srcList.includes(mediaSource.__objURL__)) {
      //   return false
      // }
      if (curSrc !== mediaSource.__objURL__) {
        return false
      }

      hasFindMediaSource = true;
      mediaSourceInfo.mediaElement = mediaEl;

      // original.console.log('[downloadMediaSource][mediaSourceInfo]', mediaSourceInfo)

      if (mediaSourceInfo.hasDownload) {
        const confirm = original.confirm(i18n.t('mediaDownload.hasDownload'));
        if (!confirm) {
          return false
        }
      }

      if (!mediaSourceInfo.hasDownload && !mediaSourceInfo.endOfStream) {
        // original.console.log('[downloadMediaSource] 媒体数据还没完全就绪', mediaSourceInfo)

        const confirm = original.confirm(i18n.t('mediaDownload.notEndOfStream'));
        if (!confirm) {
          if (mediaSourceInfo.autoDownload) {
            const cancelAutoDownload = original.confirm(i18n.t('mediaDownload.cancelAutoDownload'));
            if (cancelAutoDownload) {
              mediaSourceInfo.autoDownload = false;
            }
          } else {
            const autoDownload = original.confirm(i18n.t('mediaDownload.autoDownload'));
            if (autoDownload) {
              mediaSourceInfo.autoDownload = true;
            }
          }

          return false
        }
      }

      let mediaSourceTitle = null;
      mediaSourceInfo.sourceBuffer.forEach(sourceBufferItem => {
        if (!sourceBufferItem.mimeCodecs || sourceBufferItem.mimeCodecs.toString().indexOf(';') === -1) {
          const msg = '[downloadMediaSource][mimeCodecs][error] mimeCodecs不存在或信息异常，无法下载';
          original.console.error(msg, sourceBufferItem);
          original.alert(msg);
          return false
        }

        try {
          let mediaTitle = `${mediaSourceTitle || sourceBufferItem.mediaInfo.title || title || mediaEl.getAttribute('data-title') || document.title || Date.now()}`;

          if (!mediaSourceTitle && !sourceBufferItem.mediaInfo.title) {
            mediaTitle = original.prompt(i18n.t('mediaDownload.confirmTitle'), mediaTitle);

            if (!mediaTitle) { return false }

            sourceBufferItem.mediaInfo.title = mediaTitle;
          }

          mediaSourceTitle = mediaTitle;

          /* 自动补充媒体类型和文件后缀 */
          mediaTitle = `${mediaTitle}_${sourceBufferItem.mediaInfo.type}.${sourceBufferItem.mediaInfo.format}`;

          const a = document.createElement('a');
          a.href = URL.createObjectURL(new Blob(sourceBufferItem.bufferData));
          a.download = mediaTitle;
          a.click();
          URL.revokeObjectURL(a.href);

          mediaSourceInfo.hasDownload = true;
        } catch (e) {
          mediaSourceInfo.hasDownload = false;
          const msg = '[downloadMediaSource][error]';
          original.console.error(msg, e);
          original.alert(msg);
        }
      });
    });

    if (!hasFindMediaSource) {
      original.alert(i18n.t('mediaDownload.notFoundMediaSource'));
    }
  }

  function hasInit () {
    return hasMediaSourceInit
  }

  function init () {
    if (hasMediaSourceInit) {
      return false
    }

    if (!window.MediaSource) {
      return false
    }

    Object.keys(MediaSource.prototype).forEach(key => {
      try {
        if (MediaSource.prototype[key] instanceof Function) {
          originMethods[key] = MediaSource.prototype[key];
        }
      } catch (e) {}
    });

    proxyMediaSourceMethod();

    hasMediaSourceInit = true;
  }

  return {
    init,
    hasInit,
    originMethods,
    originURLMethods,
    mediaSourceMap,
    objectURLMap,
    downloadMediaSource,
    cleanMediaSourceData,
    connectMediaSourceWithMediaElement
  }
})();

/*!
 * @name         hotkeysRunner.js
 * @description  热键运行器，实现类似vscode的热键配置方式
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/11/23 18:22
 * @github       https://github.com/xxxily
 */

const Map$1 = window.Map;
const WeakMap$1 = window.WeakMap;
function isObj (obj) { return Object.prototype.toString.call(obj) === '[object Object]' }

function getValByPath (obj, path) {
  path = path || '';
  const pathArr = path.split('.');
  let result = obj;

  /* 递归提取结果值 */
  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break
    result = result[pathArr[i]];
  }

  return result
}

function toArrArgs (args) {
  return Array.isArray(args) ? args : (typeof args === 'undefined' ? [] : [args])
}

function isModifierKey (key) {
  return [
    'ctrl', 'controlleft', 'controlright',
    'shift', 'shiftleft', 'shiftright',
    'alt', 'altleft', 'altright',
    'meta', 'metaleft', 'metaright',
    'capsLock'].includes(key.toLowerCase())
}

const keyAlias = {
  ControlLeft: 'ctrl',
  ControlRight: 'ctrl',
  ShiftLeft: 'shift',
  ShiftRight: 'shift',
  AltLeft: 'alt',
  AltRight: 'alt',
  MetaLeft: 'meta',
  MetaRight: 'meta'
};

const combinationKeysMonitor = (function () {
  const combinationKeysState = new Map$1();

  const hasInit = new WeakMap$1();

  function init (win = window) {
    if (!win || win !== win.self || !win.addEventListener || hasInit.get(win)) {
      return false
    }

    const timers = {};

    function activeCombinationKeysState (event) {
      isModifierKey(event.code) && combinationKeysState.set(event.code, true);
    }

    function inactivateCombinationKeysState (event) {
      if (!(event instanceof KeyboardEvent)) {
        combinationKeysState.forEach((val, key) => {
          combinationKeysState.set(key, false);
        });
        return true
      }

      /**
       * combinationKeysState状态必须保留一段时间，否则当外部定义的是keyup事件时候，由于这个先注册也先执行，
       * 马上更改combinationKeysState状态，会导致后面定义的事件拿到的是未激活组合键的状态
       */
      if (isModifierKey(event.code)) {
        clearTimeout(timers[event.code]);
        timers[event.code] = setTimeout(() => { combinationKeysState.set(event.code, false); }, 50);
      }
    }

    win.addEventListener('keydown', activeCombinationKeysState, true);
    win.addEventListener('keypress', activeCombinationKeysState, true);
    win.addEventListener('keyup', inactivateCombinationKeysState, true);
    win.addEventListener('blur', inactivateCombinationKeysState, true);

    hasInit.set(win, true);
  }

  function getCombinationKeys () {
    const result = new Map$1();
    combinationKeysState.forEach((val, key) => {
      if (val === true) {
        result.set(key, val);
      }
    });
    return result
  }

  return {
    combinationKeysState,
    getCombinationKeys,
    init
  }
})();

class HotkeysRunner {
  constructor (hotkeys, win = window) {
    this.window = win;
    this.windowList = [win];
    /* Mac和window使用的修饰符是不一样的 */
    this.MOD = typeof navigator === 'object' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Ctrl';
    // 'Control', 'Shift', 'Alt', 'Meta'

    this.prevPress = null;
    this._prevTimer_ = null;

    this.setHotkeys(hotkeys);
    combinationKeysMonitor.init(win);
  }

  /* 设置其它window对象的组合键监控逻辑 */
  setCombinationKeysMonitor (win) {
    this.window = win;

    if (!this.windowList.includes(win)) {
      this.windowList.push(win);
    }

    combinationKeysMonitor.init(win);
  }

  /* 数据预处理 */
  hotkeysPreprocess (hotkeys) {
    if (!Array.isArray(hotkeys)) {
      return false
    }

    hotkeys.forEach((config) => {
      if (!isObj(config) || !config.key || typeof config.key !== 'string') {
        return false
      }

      const keyName = config.key.trim().toLowerCase();
      const mod = this.MOD.toLowerCase();

      /* 增加格式化后的hotkeys数组 */
      config.keyBindings = keyName.split(' ').map(press => {
        const keys = press.split(/\b\+/);
        const mods = [];
        let key = '';

        keys.forEach((k) => {
          k = k === '$mod' ? mod : k;

          if (isModifierKey(k)) {
            mods.push(k);
          } else {
            key = k;
          }
        });

        return [mods, key]
      });
    });

    return hotkeys
  }

  setHotkeys (hotkeys) {
    this.hotkeys = this.hotkeysPreprocess(hotkeys) || [];
  }

  /**
   * 判断当前提供的键盘事件和预期的热键配置是否匹配
   * @param {KeyboardEvent} event
   * @param {Array} press 例如：[['alt', 'shift'], 's']
   * @param {Object} prevCombinationKeys
   * @returns
   */
  isMatch (event, press) {
    if (!event || !Array.isArray(press)) { return false }

    const combinationKeys = event.combinationKeys || combinationKeysMonitor.getCombinationKeys();
    const mods = press[0];
    const key = press[1];

    /* 修饰符个数不匹配 */
    if (mods.length !== combinationKeys.size) {
      return false
    }

    /* 当前按下的键位和预期的键位不匹配 */
    if (key && event.key.toLowerCase() !== key && event.code.toLowerCase() !== key) {
      return false
    }

    /* 当前按下的修饰符和预期的修饰符不匹配 */
    let result = true;
    const modsKey = new Map$1();
    combinationKeys.forEach((val, key) => {
      /* 补充各种可能情况的标识 */
      modsKey.set(key, val);
      modsKey.set(key.toLowerCase(), val);
      keyAlias[key] && modsKey.set(keyAlias[key], val);
    });

    mods.forEach((key) => {
      if (!modsKey.has(key)) {
        result = false;
      }
    });

    return result
  }

  isMatchPrevPress (press) { return this.isMatch(this.prevPress, press) }

  run (opts = {}) {
    // 这里只对单个window有效
    // const KeyboardEvent = this.window.KeyboardEvent
    // if (!(opts.event instanceof KeyboardEvent)) { return false }

    const KeyboardEventList = this.windowList.map(win => win.KeyboardEvent);
    if (!KeyboardEventList.includes(opts.event.constructor)) {
      return false
    }

    const event = opts.event;
    const target = opts.target || null;
    const conditionHandler = opts.conditionHandler || opts.whenHandler;

    let matchResult = null;

    this.hotkeys.forEach(hotkeyConf => {
      if (hotkeyConf.disabled || !hotkeyConf.keyBindings) {
        return false
      }

      let press = hotkeyConf.keyBindings[0];

      /* 当存在prevPress，则不再响应与prevPress不匹配的其它快捷键 */
      if (this.prevPress && (hotkeyConf.keyBindings.length <= 1 || !this.isMatchPrevPress(press))) {
        return false
      }

      /* 如果存在上一轮的操作快捷键记录，且之前的快捷键与第一个keyBindings定义的快捷键匹配，则去匹配第二个keyBindings */
      if (this.prevPress && hotkeyConf.keyBindings.length > 1 && this.isMatchPrevPress(press)) {
        press = hotkeyConf.keyBindings[1];
      }

      const isMatch = this.isMatch(event, press);
      if (!isMatch) { return false }

      matchResult = hotkeyConf;

      /* 是否阻止事件冒泡和阻止默认事件 */
      const stopPropagation = opts.stopPropagation || hotkeyConf.stopPropagation;
      const preventDefault = opts.preventDefault || hotkeyConf.preventDefault;
      stopPropagation && event.stopPropagation();
      preventDefault && event.preventDefault();

      /* 记录上一次操作的快捷键，且一段时间后清空该操作的记录 */
      if (press === hotkeyConf.keyBindings[0] && hotkeyConf.keyBindings.length > 1) {
        /* 将prevPress变成一个具有event相关字段的对象 */
        this.prevPress = {
          combinationKeys: combinationKeysMonitor.getCombinationKeys(),
          code: event.code,
          key: event.key,
          keyCode: event.keyCode,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          metaKey: event.metaKey
        };

        clearTimeout(this._prevTimer_);
        this._prevTimer_ = setTimeout(() => { this.prevPress = null; }, 1000);

        return true
      }

      /* 如果当前匹配到了第二个快捷键，则当forEach循环结束后，马上注销prevPress，给其它快捷键让行 */
      if (hotkeyConf.keyBindings.length > 1 && press !== hotkeyConf.keyBindings[0]) {
        setTimeout(() => { this.prevPress = null; }, 0);
      }

      /* 执行hotkeyConf.command对应的函数或命令 */
      const args = toArrArgs(hotkeyConf.args);
      let commandFunc = hotkeyConf.command;
      if (target && typeof hotkeyConf.command === 'string') {
        commandFunc = getValByPath(target, hotkeyConf.command);
      }

      if (!(commandFunc instanceof Function) && target) {
        throw new Error(`[hotkeysRunner] 未找到command: ${hotkeyConf.command} 对应的函数`)
      }

      if (hotkeyConf.when && conditionHandler instanceof Function) {
        const isMatchCondition = conditionHandler.apply(target, toArrArgs(hotkeyConf.when));
        if (isMatchCondition === true) {
          commandFunc.apply(target, args);
        }
      } else {
        commandFunc.apply(target, args);
      }
    });

    return matchResult
  }

  binding (opts = {}) {
    if (!isObj(opts) || !Array.isArray(opts.hotkeys)) {
      throw new Error('[hotkeysRunner] 提供给binding的参数不正确')
    }

    opts.el = opts.el || this.window;
    opts.type = opts.type || 'keydown';
    opts.debug && (this.debug = true);

    this.setHotkeys(opts.hotkeys);

    if (typeof opts.el === 'string') {
      opts.el = document.querySelector(opts.el);
    }

    opts.el.addEventListener(opts.type, (event) => {
      opts.event = event;
      this.run(opts);
    }, true);
  }
}

/* eslint-disable camelcase */

/**
 * @license Copyright 2017 - Chris West - MIT Licensed
 * Prototype to easily set the volume (actual and perceived), loudness,
 * decibels, and gain value.
 * https://cwestblog.com/2017/08/22/web-audio-api-controlling-audio-video-loudness/
 */
function MediaElementAmplifier (mediaElem) {
  this._context = new (window.AudioContext || window.webkitAudioContext)();
  this._source = this._context.createMediaElementSource(this._element = mediaElem);
  this._source.connect(this._gain = this._context.createGain());
  this._gain.connect(this._context.destination);
}
[
  'getContext',
  'getSource',
  'getGain',
  'getElement',
  [
    'getVolume',
    function (opt_getPerceived) {
      return (opt_getPerceived ? this.getLoudness() : 1) * this._element.volume
    }
  ],
  [
    'setVolume',
    function (value, opt_setPerceived) {
      var volume = value / (opt_setPerceived ? this.getLoudness() : 1);
      if (volume > 1) {
        this.setLoudness(this.getLoudness() * volume);
        volume = 1;
      }
      this._element.volume = volume;
    }
  ],
  ['getGainValue', function () { return this._gain.gain.value }],
  ['setGainValue', function (value) { this._gain.gain.value = value; }],
  ['getDecibels', function () { return 20 * Math.log10(this.getGainValue()) }],
  ['setDecibels', function (value) { this.setGainValue(Math.pow(10, value / 20)); }],
  ['getLoudness', function () { return Math.pow(2, this.getDecibels() / 10) }],
  ['setLoudness', function (value) { this.setDecibels(10 * Math.log2(value)); }]
].forEach(function (name, fn) {
  if (typeof name === 'string') {
    fn = function () { return this[name.replace('get', '').toLowerCase()] };
  } else {
    fn = name[1];
    name = name[0];
  }
  MediaElementAmplifier.prototype[name] = fn;
});

const downloadState = new Map();

function download (url, title) {
  const downloadEl = document.createElement('a');
  downloadEl.href = url;
  downloadEl.target = '_blank';
  downloadEl.download = title;
  downloadEl.click();
}

function mediaDownload (mediaEl, title, downloadType) {
  /**
   * 当媒体包含source标签时，媒体标签的真实地址将会是currentSrc
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc
   */
  const mediaUrl = mediaEl.src || mediaEl.currentSrc;
  const mediaState = downloadState.get(mediaUrl) || {};

  if (mediaEl && mediaUrl && !mediaUrl.startsWith('blob:')) {
    const mediaInfo = {
      type: mediaEl instanceof HTMLVideoElement ? 'video' : 'audio',
      format: mediaEl instanceof HTMLVideoElement ? 'mp4' : 'mp3'
    };
    let mediaTitle = `${title || mediaEl.getAttribute('data-title') || document.title || Date.now()}_${mediaInfo.type}.${mediaInfo.format}`;

    /* 小于5分钟的媒体文件，尝试通过fetch下载 */
    if (downloadType === 'blob' || mediaEl.duration < 60 * 5) {
      if (mediaState.downloading) {
        /* 距上次点下载小于1s的情况直接不响应任何操作 */
        if (Date.now() - mediaState.downloading < 1000 * 1) {
          return false
        } else {
          const confirm = original.confirm(i18n.t('mediaDownload.downloading'));
          if (!confirm) {
            return false
          }
        }
      }

      if (mediaState.hasDownload) {
        const confirm = original.confirm(i18n.t('mediaDownload.hasDownload'));
        if (!confirm) {
          return false
        }
      }

      mediaTitle = original.prompt(i18n.t('mediaDownload.confirmTitle'), mediaTitle);
      if (!mediaTitle) { return false }

      if (!mediaTitle.endsWith(mediaInfo.format)) {
        mediaTitle = mediaTitle + '.' + mediaInfo.format;
      }

      let fetchUrl = mediaUrl;
      if (mediaUrl.startsWith('http://') && location.href.startsWith('https://')) {
        /* 在https里fetch http资源会导致 block:mixed-content 错误，所以尝试将地址统一成https开头 */
        fetchUrl = mediaUrl.replace('http://', 'https://');
      }

      mediaState.downloading = Date.now();
      downloadState.set(mediaUrl, mediaState);
      fetch(fetchUrl).then(res => {
        res.blob().then(blob => {
          const blobUrl = window.URL.createObjectURL(blob);
          download(blobUrl, mediaTitle);

          mediaState.hasDownload = true;
          delete mediaState.downloading;
          downloadState.set(mediaUrl, mediaState);
          window.URL.revokeObjectURL(blobUrl);
        });
      }).catch(err => {
        original.console.error('fetch下载操作失败:', err);

        /* 下载兜底 */
        download(mediaUrl, mediaTitle);

        delete mediaState.downloading;
        mediaState.hasDownload = true;
        downloadState.set(mediaUrl, mediaState);
      });
    } else {
      download(mediaUrl, mediaTitle);
    }
  } else if (mediaSource.hasInit()) {
    /* 下载通过MediaSource管理的媒体文件 */
    mediaSource.downloadMediaSource(mediaEl, title);
  } else {
    original.alert(i18n.t('mediaDownload.notSupport'));
  }
}

const device = {
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  },
  isTablet: () => {
    return /iPad/i.test(navigator.userAgent)
  },
  isDesktop: () => {
    return !device.isMobile() && !device.isTablet()
  },
  isChrome: () => {
    return /Chrome/i.test(navigator.userAgent)
  },
  isFirefox: () => {
    return /Firefox/i.test(navigator.userAgent)
  },
  isSafari: () => {
    return /Safari/i.test(navigator.userAgent)
  },
  isEdge: () => {
    return /Edge/i.test(navigator.userAgent)
  }
};

/**
 * 提供一些跟h5player共享的全局方法，减少重复代码，和共享一些需要提前执行才能获取得到得对象
 */


const h5playerUIProvider = {
  version,
  originalMethods,
  parseHTML,
  observeVisibility,
  isOutOfDocument,
  i18n,
  debug,
  configManager,
  globalFunctional,
  device
};

/**
 * 通过proxy创建个window的沙盒传递给h5playerUiWraper
 * 目的是可以提供一些干净的全局对象给到h5playerUI
 * 另外是避免h5playerUI中的代码污染到实际的window对象
 */

const windowSandbox = new Proxy({}, {
  get: function (target, key) {
    if (key === 'h5playerUIProvider') {
      return h5playerUIProvider
    }

    if (key === 'HTMLElement') {
      return originalMethods.HTMLElement
    }

    return window[key]
  }
});

/**
 * 跟官网进行互动，以实现以下功能
 * 1、新版本检测 (待实现)
 * 2、脚本安装使用情况统计
 * 3、获取最新的推荐信息
 */


const remoteHelperUrl = 'https://h5player.anzz.top/h5p-helper/index.html';

const remoteHelper = {
  init () {
    this.remoteHandler();

    /* 减少重复加载和防止循环嵌套 */
    if (isInIframe()) { return false }

    if (!configManager.isGlobalStorageUsable()) { return false }

    const contactRemoteHelperSuccessTime = configManager.getGlobalStorage('contactRemoteHelperSuccessTime');
    let lastContactRemoteHelperTime = configManager.getGlobalStorage('lastContactRemoteHelperTime');
    if (!lastContactRemoteHelperTime) {
      configManager.setGlobalStorage('lastContactRemoteHelperTime', Date.now());
      lastContactRemoteHelperTime = Date.now();
    }

    /**
     * 减少跟远程助手的握手次数
     * 12小时内有成功握手过的话，就不再重复握手
     * 最少间隔1分钟才进行下一次握手
     */
    const syncInterval = configManager.getGlobalStorage('remoteHelperSyncInterval') || 1000 * 60 * 60 * 12;
    if (contactRemoteHelperSuccessTime && Date.now() - contactRemoteHelperSuccessTime < syncInterval) { return false }
    if (Date.now() - lastContactRemoteHelperTime < 1000 * 60) { return false }

    this.establishRemoteConnection();
  },

  establishRemoteConnection () {
    const lastSucTime = configManager.getGlobalStorage('contactRemoteHelperSuccessTime') || '0';
    const timeStr = new Date().toISOString().split('T')[0].replace(/-/g, '') + new Date().getHours();
    const iframe = document.createElement('iframe');
    iframe.src = `${remoteHelperUrl}?t=${timeStr}&v=${version}&lst=${lastSucTime}`;
    iframe.style.cssText = 'width:0; height:0; border:none; visibility:hidden; opacity:0;';
    const insertIframe = () => {
      document.body.appendChild(iframe);
      configManager.setGlobalStorage('lastContactRemoteHelperTime', Date.now());
    };

    if (!document.body || !document.body.appendChild) {
      window.addEventListener('DOMContentLoaded', insertIframe, { once: true });
    } else {
      insertIframe();
    }

    /* 不管握手成功与否，10秒后移除iframe，主动终止跟远程助手的连接 */
    setTimeout(() => { document.body.removeChild(iframe); }, 10000);
  },

  async remoteHandler () {
    if (!location.href.startsWith(remoteHelperUrl) || !configManager.isGlobalStorageUsable()) { return false }

    function syncRemoteData (pageWindow) {
      if (pageWindow.recommendList) {
        configManager.setGlobalStorage('recommendList', pageWindow.recommendList);
      }

      /* 待增加版本对比判断逻辑 */
      if (pageWindow.remoteVersion) {
        configManager.setGlobalStorage('remoteVersion', pageWindow.remoteVersion);
      }

      if (pageWindow.remoteHelperSyncInterval) {
        configManager.setGlobalStorage('remoteHelperSyncInterval', pageWindow.remoteHelperSyncInterval);
      }

      configManager.setGlobalStorage('contactRemoteHelperSuccessTime', Date.now());
    }

    let checkCount = 0;
    function checkRemoteHelperStatus (pageWindow) {
      if (!Array.isArray(pageWindow.recommendList)) {
        if (checkCount < 30) {
          setTimeout(() => {
            checkCount++;
            checkRemoteHelperStatus(pageWindow);
          }, 200);
        }

        return
      }

      syncRemoteData(pageWindow);
    }

    const pageWindow = await getPageWindow();
    pageWindow && checkRemoteHelperStatus(pageWindow);
  }
};

const h5playerUI = function (window) {var h5playerUI = (function () {

  const sheet = new CSSStyleSheet();sheet.replaceSync(":root,\n:host,\n.sl-theme-light {\n  color-scheme: light;\n\n  --sl-color-gray-50: hsl(0 0% 97.5%);\n  --sl-color-gray-100: hsl(240 4.8% 95.9%);\n  --sl-color-gray-200: hsl(240 5.9% 90%);\n  --sl-color-gray-300: hsl(240 4.9% 83.9%);\n  --sl-color-gray-400: hsl(240 5% 64.9%);\n  --sl-color-gray-500: hsl(240 3.8% 46.1%);\n  --sl-color-gray-600: hsl(240 5.2% 33.9%);\n  --sl-color-gray-700: hsl(240 5.3% 26.1%);\n  --sl-color-gray-800: hsl(240 3.7% 15.9%);\n  --sl-color-gray-900: hsl(240 5.9% 10%);\n  --sl-color-gray-950: hsl(240 7.3% 8%);\n\n  --sl-color-red-50: hsl(0 85.7% 97.3%);\n  --sl-color-red-100: hsl(0 93.3% 94.1%);\n  --sl-color-red-200: hsl(0 96.3% 89.4%);\n  --sl-color-red-300: hsl(0 93.5% 81.8%);\n  --sl-color-red-400: hsl(0 90.6% 70.8%);\n  --sl-color-red-500: hsl(0 84.2% 60.2%);\n  --sl-color-red-600: hsl(0 72.2% 50.6%);\n  --sl-color-red-700: hsl(0 73.7% 41.8%);\n  --sl-color-red-800: hsl(0 70% 35.3%);\n  --sl-color-red-900: hsl(0 62.8% 30.6%);\n  --sl-color-red-950: hsl(0 60% 19.6%);\n\n  --sl-color-orange-50: hsl(33.3 100% 96.5%);\n  --sl-color-orange-100: hsl(34.3 100% 91.8%);\n  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);\n  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);\n  --sl-color-orange-400: hsl(27 96% 61%);\n  --sl-color-orange-500: hsl(24.6 95% 53.1%);\n  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);\n  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);\n  --sl-color-orange-800: hsl(15 79.1% 33.7%);\n  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);\n  --sl-color-orange-950: hsl(15.2 69.1% 19%);\n\n  --sl-color-amber-50: hsl(48 100% 96.1%);\n  --sl-color-amber-100: hsl(48 96.5% 88.8%);\n  --sl-color-amber-200: hsl(48 96.6% 76.7%);\n  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);\n  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);\n  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);\n  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);\n  --sl-color-amber-700: hsl(26 90.5% 37.1%);\n  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);\n  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);\n  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);\n\n  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);\n  --sl-color-yellow-100: hsl(54.9 96.7% 88%);\n  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);\n  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);\n  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);\n  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);\n  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);\n  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);\n  --sl-color-yellow-800: hsl(31.8 81% 28.8%);\n  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);\n  --sl-color-yellow-950: hsl(33.1 69% 13.9%);\n\n  --sl-color-lime-50: hsl(78.3 92% 95.1%);\n  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);\n  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);\n  --sl-color-lime-300: hsl(82 84.5% 67.1%);\n  --sl-color-lime-400: hsl(82.7 78% 55.5%);\n  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);\n  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);\n  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);\n  --sl-color-lime-800: hsl(86.3 69% 22.7%);\n  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);\n  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);\n\n  --sl-color-green-50: hsl(138.5 76.5% 96.7%);\n  --sl-color-green-100: hsl(140.6 84.2% 92.5%);\n  --sl-color-green-200: hsl(141 78.9% 85.1%);\n  --sl-color-green-300: hsl(141.7 76.6% 73.1%);\n  --sl-color-green-400: hsl(141.9 69.2% 58%);\n  --sl-color-green-500: hsl(142.1 70.6% 45.3%);\n  --sl-color-green-600: hsl(142.1 76.2% 36.3%);\n  --sl-color-green-700: hsl(142.4 71.8% 29.2%);\n  --sl-color-green-800: hsl(142.8 64.2% 24.1%);\n  --sl-color-green-900: hsl(143.8 61.2% 20.2%);\n  --sl-color-green-950: hsl(144.3 60.7% 12%);\n\n  --sl-color-emerald-50: hsl(151.8 81% 95.9%);\n  --sl-color-emerald-100: hsl(149.3 80.4% 90%);\n  --sl-color-emerald-200: hsl(152.4 76% 80.4%);\n  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);\n  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);\n  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);\n  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);\n  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);\n  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);\n  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);\n  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);\n\n  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);\n  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);\n  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);\n  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);\n  --sl-color-teal-400: hsl(172.5 66% 50.4%);\n  --sl-color-teal-500: hsl(173.4 80.4% 40%);\n  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);\n  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);\n  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);\n  --sl-color-teal-900: hsl(175.9 60.8% 19%);\n  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);\n\n  --sl-color-cyan-50: hsl(183.2 100% 96.3%);\n  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);\n  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);\n  --sl-color-cyan-300: hsl(187 92.4% 69%);\n  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);\n  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);\n  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);\n  --sl-color-cyan-700: hsl(192.9 82.3% 31%);\n  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);\n  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);\n  --sl-color-cyan-950: hsl(196.8 61% 16.1%);\n\n  --sl-color-sky-50: hsl(204 100% 97.1%);\n  --sl-color-sky-100: hsl(204 93.8% 93.7%);\n  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);\n  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);\n  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);\n  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);\n  --sl-color-sky-600: hsl(200.4 98% 39.4%);\n  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);\n  --sl-color-sky-800: hsl(201 90% 27.5%);\n  --sl-color-sky-900: hsl(202 80.3% 23.9%);\n  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);\n\n  --sl-color-blue-50: hsl(213.8 100% 96.9%);\n  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);\n  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);\n  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);\n  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);\n  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);\n  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);\n  --sl-color-blue-700: hsl(224.3 76.3% 48%);\n  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);\n  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);\n  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);\n\n  --sl-color-indigo-50: hsl(225.9 100% 96.7%);\n  --sl-color-indigo-100: hsl(226.5 100% 93.9%);\n  --sl-color-indigo-200: hsl(228 96.5% 88.8%);\n  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);\n  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);\n  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);\n  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);\n  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);\n  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);\n  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);\n  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);\n\n  --sl-color-violet-50: hsl(250 100% 97.6%);\n  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);\n  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);\n  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);\n  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);\n  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);\n  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);\n  --sl-color-violet-700: hsl(263.4 70% 50.4%);\n  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);\n  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);\n  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);\n\n  --sl-color-purple-50: hsl(270 100% 98%);\n  --sl-color-purple-100: hsl(268.7 100% 95.5%);\n  --sl-color-purple-200: hsl(268.6 100% 91.8%);\n  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);\n  --sl-color-purple-400: hsl(270 95.2% 75.3%);\n  --sl-color-purple-500: hsl(270.7 91% 65.1%);\n  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);\n  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);\n  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);\n  --sl-color-purple-900: hsl(273.6 65.6% 32%);\n  --sl-color-purple-950: hsl(276 59.5% 16.5%);\n\n  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);\n  --sl-color-fuchsia-100: hsl(287 100% 95.5%);\n  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);\n  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);\n  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);\n  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);\n  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);\n  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);\n  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);\n  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);\n  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);\n\n  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);\n  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);\n  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);\n  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);\n  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);\n  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);\n  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);\n  --sl-color-pink-700: hsl(335.1 77.6% 42%);\n  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);\n  --sl-color-pink-900: hsl(335.9 69% 30.4%);\n  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);\n\n  --sl-color-rose-50: hsl(355.7 100% 97.3%);\n  --sl-color-rose-100: hsl(355.6 100% 94.7%);\n  --sl-color-rose-200: hsl(352.7 96.1% 90%);\n  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);\n  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);\n  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);\n  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);\n  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);\n  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);\n  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);\n  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);\n\n  --sl-color-primary-50: var(--sl-color-sky-50);\n  --sl-color-primary-100: var(--sl-color-sky-100);\n  --sl-color-primary-200: var(--sl-color-sky-200);\n  --sl-color-primary-300: var(--sl-color-sky-300);\n  --sl-color-primary-400: var(--sl-color-sky-400);\n  --sl-color-primary-500: var(--sl-color-sky-500);\n  --sl-color-primary-600: var(--sl-color-sky-600);\n  --sl-color-primary-700: var(--sl-color-sky-700);\n  --sl-color-primary-800: var(--sl-color-sky-800);\n  --sl-color-primary-900: var(--sl-color-sky-900);\n  --sl-color-primary-950: var(--sl-color-sky-950);\n\n  --sl-color-success-50: var(--sl-color-green-50);\n  --sl-color-success-100: var(--sl-color-green-100);\n  --sl-color-success-200: var(--sl-color-green-200);\n  --sl-color-success-300: var(--sl-color-green-300);\n  --sl-color-success-400: var(--sl-color-green-400);\n  --sl-color-success-500: var(--sl-color-green-500);\n  --sl-color-success-600: var(--sl-color-green-600);\n  --sl-color-success-700: var(--sl-color-green-700);\n  --sl-color-success-800: var(--sl-color-green-800);\n  --sl-color-success-900: var(--sl-color-green-900);\n  --sl-color-success-950: var(--sl-color-green-950);\n\n  --sl-color-warning-50: var(--sl-color-amber-50);\n  --sl-color-warning-100: var(--sl-color-amber-100);\n  --sl-color-warning-200: var(--sl-color-amber-200);\n  --sl-color-warning-300: var(--sl-color-amber-300);\n  --sl-color-warning-400: var(--sl-color-amber-400);\n  --sl-color-warning-500: var(--sl-color-amber-500);\n  --sl-color-warning-600: var(--sl-color-amber-600);\n  --sl-color-warning-700: var(--sl-color-amber-700);\n  --sl-color-warning-800: var(--sl-color-amber-800);\n  --sl-color-warning-900: var(--sl-color-amber-900);\n  --sl-color-warning-950: var(--sl-color-amber-950);\n\n  --sl-color-danger-50: var(--sl-color-red-50);\n  --sl-color-danger-100: var(--sl-color-red-100);\n  --sl-color-danger-200: var(--sl-color-red-200);\n  --sl-color-danger-300: var(--sl-color-red-300);\n  --sl-color-danger-400: var(--sl-color-red-400);\n  --sl-color-danger-500: var(--sl-color-red-500);\n  --sl-color-danger-600: var(--sl-color-red-600);\n  --sl-color-danger-700: var(--sl-color-red-700);\n  --sl-color-danger-800: var(--sl-color-red-800);\n  --sl-color-danger-900: var(--sl-color-red-900);\n  --sl-color-danger-950: var(--sl-color-red-950);\n\n  --sl-color-neutral-50: var(--sl-color-gray-50);\n  --sl-color-neutral-100: var(--sl-color-gray-100);\n  --sl-color-neutral-200: var(--sl-color-gray-200);\n  --sl-color-neutral-300: var(--sl-color-gray-300);\n  --sl-color-neutral-400: var(--sl-color-gray-400);\n  --sl-color-neutral-500: var(--sl-color-gray-500);\n  --sl-color-neutral-600: var(--sl-color-gray-600);\n  --sl-color-neutral-700: var(--sl-color-gray-700);\n  --sl-color-neutral-800: var(--sl-color-gray-800);\n  --sl-color-neutral-900: var(--sl-color-gray-900);\n  --sl-color-neutral-950: var(--sl-color-gray-950);\n\n  --sl-color-neutral-0: hsl(0, 0%, 100%);\n  --sl-color-neutral-1000: hsl(0, 0%, 0%);\n\n  --sl-border-radius-small: 0.1875rem;\n  --sl-border-radius-medium: 0.25rem;\n  --sl-border-radius-large: 0.5rem;\n  --sl-border-radius-x-large: 1rem;\n\n  --sl-border-radius-circle: 50%;\n  --sl-border-radius-pill: 9999px;\n\n  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);\n  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);\n\n  --sl-spacing-3x-small: 0.125rem;\n  --sl-spacing-2x-small: 0.25rem;\n  --sl-spacing-x-small: 0.5rem;\n  --sl-spacing-small: 0.75rem;\n  --sl-spacing-medium: 1rem;\n  --sl-spacing-large: 1.25rem;\n  --sl-spacing-x-large: 1.75rem;\n  --sl-spacing-2x-large: 2.25rem;\n  --sl-spacing-3x-large: 3rem;\n  --sl-spacing-4x-large: 4.5rem;\n\n  --sl-transition-x-slow: 1000ms;\n  --sl-transition-slow: 500ms;\n  --sl-transition-medium: 250ms;\n  --sl-transition-fast: 150ms;\n  --sl-transition-x-fast: 50ms;\n\n  --sl-font-mono: SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;\n  --sl-font-sans: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n  --sl-font-serif: Georgia, \"Times New Roman\", serif;\n\n  --sl-font-size-2x-small: 0.625rem;\n  --sl-font-size-x-small: 0.75rem;\n  --sl-font-size-small: 0.875rem;\n  --sl-font-size-medium: 1rem;\n  --sl-font-size-large: 1.25rem;\n  --sl-font-size-x-large: 1.5rem;\n  --sl-font-size-2x-large: 2.25rem;\n  --sl-font-size-3x-large: 3rem;\n  --sl-font-size-4x-large: 4.5rem;\n\n  --sl-font-weight-light: 300;\n  --sl-font-weight-normal: 400;\n  --sl-font-weight-semibold: 500;\n  --sl-font-weight-bold: 700;\n\n  --sl-letter-spacing-denser: -0.03em;\n  --sl-letter-spacing-dense: -0.015em;\n  --sl-letter-spacing-normal: normal;\n  --sl-letter-spacing-loose: 0.075em;\n  --sl-letter-spacing-looser: 0.15em;\n\n  --sl-line-height-denser: 1;\n  --sl-line-height-dense: 1.4;\n  --sl-line-height-normal: 1.8;\n  --sl-line-height-loose: 2.2;\n  --sl-line-height-looser: 2.6;\n\n  --sl-focus-ring-color: var(--sl-color-primary-600);\n  --sl-focus-ring-style: solid;\n  --sl-focus-ring-width: 3px;\n  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)\n    var(--sl-focus-ring-color);\n  --sl-focus-ring-offset: 1px;\n\n  --sl-button-font-size-small: var(--sl-font-size-x-small);\n  --sl-button-font-size-medium: var(--sl-font-size-small);\n  --sl-button-font-size-large: var(--sl-font-size-medium);\n\n  --sl-input-height-small: 1.875rem;\n  --sl-input-height-medium: 2.5rem;\n  --sl-input-height-large: 3.125rem;\n\n  --sl-input-background-color: var(--sl-color-neutral-0);\n  --sl-input-background-color-hover: var(--sl-input-background-color);\n  --sl-input-background-color-focus: var(--sl-input-background-color);\n  --sl-input-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-border-color: var(--sl-color-neutral-300);\n  --sl-input-border-color-hover: var(--sl-color-neutral-400);\n  --sl-input-border-color-focus: var(--sl-color-primary-500);\n  --sl-input-border-color-disabled: var(--sl-color-neutral-300);\n  --sl-input-border-width: 1px;\n  --sl-input-required-content: \"*\";\n  --sl-input-required-content-offset: -2px;\n  --sl-input-required-content-color: var(--sl-input-label-color);\n\n  --sl-input-border-radius-small: var(--sl-border-radius-medium);\n  --sl-input-border-radius-medium: var(--sl-border-radius-medium);\n  --sl-input-border-radius-large: var(--sl-border-radius-medium);\n\n  --sl-input-font-family: var(--sl-font-sans);\n  --sl-input-font-weight: var(--sl-font-weight-normal);\n  --sl-input-font-size-small: var(--sl-font-size-small);\n  --sl-input-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-font-size-large: var(--sl-font-size-large);\n  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);\n\n  --sl-input-color: var(--sl-color-neutral-700);\n  --sl-input-color-hover: var(--sl-color-neutral-700);\n  --sl-input-color-focus: var(--sl-color-neutral-700);\n  --sl-input-color-disabled: var(--sl-color-neutral-900);\n  --sl-input-icon-color: var(--sl-color-neutral-500);\n  --sl-input-icon-color-hover: var(--sl-color-neutral-600);\n  --sl-input-icon-color-focus: var(--sl-color-neutral-600);\n  --sl-input-placeholder-color: var(--sl-color-neutral-500);\n  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);\n  --sl-input-spacing-small: var(--sl-spacing-small);\n  --sl-input-spacing-medium: var(--sl-spacing-medium);\n  --sl-input-spacing-large: var(--sl-spacing-large);\n\n  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);\n  --sl-input-focus-ring-offset: 0;\n\n  --sl-input-filled-background-color: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-filled-color: var(--sl-color-neutral-800);\n  --sl-input-filled-color-hover: var(--sl-color-neutral-800);\n  --sl-input-filled-color-focus: var(--sl-color-neutral-700);\n  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);\n\n  --sl-input-label-font-size-small: var(--sl-font-size-small);\n  --sl-input-label-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-label-font-size-large: var(--sl-font-size-large);\n  --sl-input-label-color: inherit;\n\n  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);\n  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);\n  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);\n  --sl-input-help-text-color: var(--sl-color-neutral-500);\n\n  --sl-toggle-size-small: 0.875rem;\n  --sl-toggle-size-medium: 1.125rem;\n  --sl-toggle-size-large: 1.375rem;\n\n  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);\n\n  --sl-panel-background-color: var(--sl-color-neutral-0);\n  --sl-panel-border-color: var(--sl-color-neutral-200);\n  --sl-panel-border-width: 1px;\n\n  --sl-tooltip-border-radius: var(--sl-border-radius-medium);\n  --sl-tooltip-background-color: var(--sl-color-neutral-800);\n  --sl-tooltip-color: var(--sl-color-neutral-0);\n  --sl-tooltip-font-family: var(--sl-font-sans);\n  --sl-tooltip-font-weight: var(--sl-font-weight-normal);\n  --sl-tooltip-font-size: var(--sl-font-size-small);\n  --sl-tooltip-line-height: var(--sl-line-height-dense);\n  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);\n  --sl-tooltip-arrow-size: 6px;\n\n  --sl-z-index-drawer: 999700;\n  --sl-z-index-dialog: 999800;\n  --sl-z-index-dropdown: 999900;\n  --sl-z-index-toast: 999950;\n  --sl-z-index-tooltip: 9991000;\n}\n\n.sl-scroll-lock {\n  padding-right: var(--sl-scroll-lock-size) !important;\n  overflow: hidden !important;\n}\n\n.sl-toast-stack {\n  position: fixed;\n  top: 0;\n  inset-inline-end: 0;\n  z-index: var(--sl-z-index-toast);\n  width: 28rem;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.sl-toast-stack sl-alert {\n  margin: var(--sl-spacing-medium);\n}\n\n.sl-toast-stack sl-alert::part(base) {\n  box-shadow: var(--sl-shadow-large);\n}\n\nsl-drawer::part(base) {\n  color: var(--sl-color-neutral-800) !important;\n}\n\n.h5player-popup-wrap {\n  position: relative;\n  z-index: 99999999;\n  opacity: 0;\n}\n\n.h5player-popup-wrap sl-popup {\n  position: relative;\n}\n\n.h5player-popup-wrap .h5player-popup-content {\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #fff;\n  font-size: 16px;\n  min-width: 220px;\n  height: 48px;\n  line-height: 48px;\n  display: flex;\n  padding: 0 16px;\n  border-radius: 6px 6px 0 0;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n\n  /* 灰色向下的过度阴影 */\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.7);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@keyframes text-lumos {\n  0%,100%{ color:#fff; }\n\t50%{ color:#ccc; }\n}\n\n.h5player-popup-content .h5p-logo-mod {\n  white-space: nowrap;\n  font-weight: 500;\n  text-shadow: 0px 0px 2px #666, 0 0 30px #666;\n  animation: text-lumos 5s infinite;\n}\n\n.h5player-popup-content .h5p-menu-wrap {}\n\n.h5player-popup-content .h5p-action-mod {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.h5player-popup-content .h5p-action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  padding: 0 8px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.h5player-popup-content .h5p-action-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.h5player-popup-content .h5p-action-btn sl-icon {\n  padding: 0 4px;\n}\n\n/* 激活态 */\n.h5player-popup-active {\n  opacity: 0.8;\n  transition: opacity 0.2s;\n}\n\n.h5player-popup-content a, .h5player-popup-content a:visited{\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.h5player-popup-wrap:hover, .h5player-popup-full-active {\n  opacity: 1 !important;\n  transition: opacity 0.2s;\n}\n\n.h5player-popup-wrap:hover .h5player-popup-content, .h5player-popup-full-active .h5player-popup-content {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.6);\n}\n\n.h5player-popup-content .h5p-action-mod sl-menu {\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #fff;\n  border-radius: 4px;\n  padding: 5px 0;\n}\n\n.h5player-popup-content .h5p-action-mod sl-menu-item::part(base) {\n  /* background-color: rgba(0, 0, 0, 0.9); */\n  color: #fff;\n  font-size: 14px;\n  padding: 2px 0;\n}\n\n.h5player-popup-content .h5p-action-mod sl-menu-item::part(base):hover {\n  background-color: var(--sl-color-primary-500);\n  color: #fff;\n}\n\n.h5player-popup-content .h5p-recommend-wrap {\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0 20px;\n  text-align: center;\n  font-size: 14px;\n  overflow: hidden;\n  white-space: nowrap;\n\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n\n@keyframes text-marquee {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(-100%); }\n}\n\n.h5player-popup-content .h5p-recommend-mod {\n  display: inline-block;\n  word-break: keep-all;\n  white-space: nowrap;\n  /* 无限循环滚动的动画效果 */\n  /* padding-left: 100%; */\n  /* animation: text-marquee 15s linear infinite; */\n}\n.h5player-popup-content .h5p-recommend-item {\n  word-break: keep-all;\n  white-space: nowrap;\n\n  position: absolute;\n  top: 0;\n  right: 0;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n\n.h5player-popup-content .h5p-recommend-item__active {\n  opacity: 1;\n  z-index: 99;\n  pointer-events: auto;\n}\n\n.h5player-popup-content .h5p-recommend-wrap>div {\n  opacity: 0.5;\n}\n.h5player-popup-content .h5p-recommend-wrap>div:hover{\n  opacity: 1;\n}\n.h5player-popup-content .h5p-recommend-wrap>div:hover .h5p-recommend-mod {\n  animation-play-state: paused;\n}");

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=globalThis,e$8=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$5=new WeakMap;let n$5 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$8&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$6=t=>new n$5("string"==typeof t?t:t+"",void 0,s$3),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$5(o,t,s$3)},S$1=(s,o)=>{if(e$8)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$3=e$8?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$2,defineProperty:e$7,getOwnPropertyDescriptor:r$5,getOwnPropertyNames:h$3,getOwnPropertySymbols:o$4,getPrototypeOf:n$4}=Object,a$1=globalThis,c$2=a$1.trustedTypes,l$1=c$2?c$2.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$3=(t,s)=>!i$2(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$3};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$7(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$5(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$3(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$3(s));}else void 0!==s&&i.push(c$3(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$E_?.delete(t);}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$3)(this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$Ej();}catch(s){throw t=!1,this._$Ej(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.3");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=globalThis,i$1=t$1.trustedTypes,s$2=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="$lit$",h$2=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+h$2,n$3=`<${o$3}>`,r$4=document,l=()=>r$4.createComment(""),c$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$4.createTreeWalker(r$4,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$2?s$2.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$2;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$2?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f$2,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f$2:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f$2?s+n$3:d>=0?(o.push(a),s.slice(0,d)+e$6+s.slice(d)+h$2+x):s+h$2+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$6)){const i=v[a++],s=r.getAttribute(t).split(h$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h$2)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h$2),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$3)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$2,t+1));)d.push({type:7,index:c}),t+=h$2.length-1;}c++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$1(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$4).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$4,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c$1(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T&&c$1(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$4.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c$1(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c$1(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.1");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let s$1 = class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}};s$1._$litElement$=!0,s$1[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$1});const r$3=globalThis.litElementPolyfillSupport;r$3?.({LitElement:s$1});(globalThis.litElementVersions??=[]).push("4.0.3");

  // src/styles/component.styles.ts
  var component_styles_default = i$3`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

  var popup_styles_default = i$3`
  ${component_styles_default}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$3},r$2=(t=o$2,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function r$1(r){return n$2({...r,state:!0,attribute:!1})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$5=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$4(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$5(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$5(n,s,{get(){return o(this)}})}}

  var ShoelaceElement = class extends s$1 {
    constructor() {
      super();
      Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
        this.constructor.define(name, component);
      });
    }
    emit(name, options) {
      const event = new CustomEvent(name, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
    /* eslint-enable */
    static define(name, elementConstructor = this, options = {}) {
      const currentlyRegisteredConstructor = customElements.get(name);
      if (!currentlyRegisteredConstructor) {
        customElements.define(name, class extends elementConstructor {
        }, options);
        return;
      }
      let newVersion = " (unknown version)";
      let existingVersion = newVersion;
      if ("version" in elementConstructor && elementConstructor.version) {
        newVersion = " v" + elementConstructor.version;
      }
      if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
        existingVersion = " v" + currentlyRegisteredConstructor.version;
      }
      if (newVersion && existingVersion && newVersion === existingVersion) {
        return;
      }
      console.warn(
        `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
      );
    }
  };
  /* eslint-disable */
  // @ts-expect-error This is auto-injected at build time.
  ShoelaceElement.version = "2.12.0";
  ShoelaceElement.dependencies = {};
  __decorateClass([
    n$2()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass([
    n$2()
  ], ShoelaceElement.prototype, "lang", 2);

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y: v
  });
  const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split('-')[0];
  }
  function getAlignment(placement) {
    return placement.split('-')[1];
  }
  function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
  }
  function getSideAxis(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ['left', 'right'];
    const rl = ['right', 'left'];
    const tb = ['top', 'bottom'];
    const bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(side => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
      element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === 'floating' ? {
      ...rects.floating,
      x,
      y
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow$1 = options => ({
    name: 'arrow',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform,
        elements,
        middlewareData
      } = state;
      // Since `element` is required, we don't Partial<> the type.
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform.getDimensions(element);
      const isYAxis = axis === 'y';
      const minProp = isYAxis ? 'top' : 'left';
      const maxProp = isYAxis ? 'bottom' : 'right';
      const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

      // DOM platform can return `window` as the `offsetParent`.
      if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;

      // If the padding is large enough that it causes the arrow to no longer be
      // centered, modify the padding so that it is centered.
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds.
      const min$1 = minPadding;
      const max = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = clamp(min$1, center, max);

      // If the reference is small enough that the arrow's padding causes it to
      // to point to nothing for an aligned placement, adjust the offset of the
      // floating element itself. To ensure `shift()` continues to take action,
      // a single reset is performed when this is true.
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset,
          centerOffset: center - offset - alignmentOffset,
          ...(shouldAddOffset && {
            alignmentOffset
          })
        },
        reset: shouldAddOffset
      };
    }
  });

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);

        // If a reset by the arrow was caused due to an alignment offset being
        // added, we should skip any logic now since `flip()` has already done its
        // work.
        // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (placement) {
                    resetPlacement = placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };

  // For type backwards-compatibility, the `OffsetOptions` type was also
  // Derivable.

  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === 'y';
    const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === 'number' ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset = function (options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);

        // If the placement is the same and the arrow caused an alignment offset
        // then we don't need to change the positioning coordinates.
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let {
                x,
                y
              } = _ref;
              return {
                x,
                y
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'size',
      options,
      async fn(state) {
        const {
          placement,
          rects,
          platform,
          elements
        } = state;
        const {
          apply = () => {},
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === 'y';
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isYAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle$1(element);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }

  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }

  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }

  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }

  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }

  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(ancestor => ancestor !== currentNode);
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }

  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }

  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    const window = getWindow(element);
    if (!isHTMLElement(element)) {
      return window;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  const getElementRects = async function (_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  };

  function isRTL(element) {
    return getComputedStyle$1(element).direction === 'rtl';
  }

  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            resizeObserver && resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift = shift$1;

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip = flip$1;

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size = size$1;

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow = arrow$1;

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   */
  const computePosition = (reference, floating, options) => {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$2=e$3(class extends i{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.it){this.it=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.it)t in i||(r.remove(t),this.it.delete(t));for(const t in i){const s=!!i[t];s===this.it.has(t)||this.st?.has(t)||(s?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)));}return w}});

  /* eslint-disable @typescript-eslint/ban-types */
  function offsetParent(element) {
      return offsetParentPolyfill(element);
  }
  function flatTreeParent(element) {
      if (element.assignedSlot) {
          return element.assignedSlot;
      }
      if (element.parentNode instanceof ShadowRoot) {
          return element.parentNode.host;
      }
      return element.parentNode;
  }
  function offsetParentPolyfill(element) {
      // Do an initial walk to check for display:none ancestors.
      for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
          if (!(ancestor instanceof Element)) {
              continue;
          }
          if (getComputedStyle(ancestor).display === 'none') {
              return null;
          }
      }
      for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
          if (!(ancestor instanceof Element)) {
              continue;
          }
          const style = getComputedStyle(ancestor);
          // Display:contents nodes aren't in the layout tree so they should be skipped.
          if (style.display === 'contents') {
              continue;
          }
          if (style.position !== 'static' || style.filter !== 'none') {
              return ancestor;
          }
          if (ancestor.tagName === 'BODY') {
              return ancestor;
          }
      }
      return null;
  }

  function isVirtualElement(e) {
    return e !== null && typeof e === "object" && "getBoundingClientRect" in e;
  }
  var SlPopup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.active = false;
      this.placement = "top";
      this.strategy = "absolute";
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = "anchor";
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = "";
      this.flipFallbackStrategy = "best-fit";
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stop();
    }
    async updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("active")) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProps.has("anchor")) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === "string") {
        const root = this.getRootNode();
        this.anchorEl = root.getElementById(this.anchor);
      } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (this.anchorEl) {
        this.start();
      }
    }
    start() {
      if (!this.anchorEl) {
        return;
      }
      this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise((resolve) => {
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute("data-current-placement");
          this.style.removeProperty("--auto-size-available-width");
          this.style.removeProperty("--auto-size-available-height");
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
    /** Forces the popup to recalculate and reposition itself. */
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
        // The offset middleware goes first
        offset({ mainAxis: this.distance, crossAxis: this.skidding })
      ];
      if (this.sync) {
        middleware.push(
          size({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
          })
        );
      } else {
        this.popup.style.width = "";
        this.popup.style.height = "";
      }
      if (this.flip) {
        middleware.push(
          flip({
            boundary: this.flipBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
          })
        );
      }
      if (this.shift) {
        middleware.push(
          shift({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding
          })
        );
      }
      if (this.autoSize) {
        middleware.push(
          size({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
              } else {
                this.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
              } else {
                this.style.removeProperty("--auto-size-available-width");
              }
            }
          })
        );
      } else {
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
      }
      if (this.arrow) {
        middleware.push(
          arrow({
            element: this.arrowEl,
            padding: this.arrowPadding
          })
        );
      }
      const getOffsetParent = this.strategy === "absolute" ? (element) => platform.getOffsetParent(element, offsetParent) : platform.getOffsetParent;
      computePosition(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
        platform: __spreadProps(__spreadValues({}, platform), {
          getOffsetParent
        })
      }).then(({ x, y, middlewareData, placement }) => {
        const isRtl = getComputedStyle(this).direction === "rtl";
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        this.setAttribute("data-current-placement", placement);
        Object.assign(this.popup.style, {
          left: `${x}px`,
          top: `${y}px`
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? value : "";
            left = isRtl ? "" : value;
          } else if (this.arrowPlacement === "end") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? "" : value;
            left = isRtl ? value : "";
            bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          } else if (this.arrowPlacement === "center") {
            left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
            top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
          });
        }
      });
      this.emit("sl-reposition");
    }
    render() {
      return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${e$2({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
    }
  };
  SlPopup.styles = popup_styles_default;
  __decorateClass([
    e$4(".popup")
  ], SlPopup.prototype, "popup", 2);
  __decorateClass([
    e$4(".popup__arrow")
  ], SlPopup.prototype, "arrowEl", 2);
  __decorateClass([
    n$2()
  ], SlPopup.prototype, "anchor", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlPopup.prototype, "active", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlPopup.prototype, "placement", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlPopup.prototype, "strategy", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlPopup.prototype, "distance", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlPopup.prototype, "skidding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlPopup.prototype, "arrow", 2);
  __decorateClass([
    n$2({ attribute: "arrow-placement" })
  ], SlPopup.prototype, "arrowPlacement", 2);
  __decorateClass([
    n$2({ attribute: "arrow-padding", type: Number })
  ], SlPopup.prototype, "arrowPadding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlPopup.prototype, "flip", 2);
  __decorateClass([
    n$2({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (value) => {
          return value.split(" ").map((p) => p.trim()).filter((p) => p !== "");
        },
        toAttribute: (value) => {
          return value.join(" ");
        }
      }
    })
  ], SlPopup.prototype, "flipFallbackPlacements", 2);
  __decorateClass([
    n$2({ attribute: "flip-fallback-strategy" })
  ], SlPopup.prototype, "flipFallbackStrategy", 2);
  __decorateClass([
    n$2({ type: Object })
  ], SlPopup.prototype, "flipBoundary", 2);
  __decorateClass([
    n$2({ attribute: "flip-padding", type: Number })
  ], SlPopup.prototype, "flipPadding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlPopup.prototype, "shift", 2);
  __decorateClass([
    n$2({ type: Object })
  ], SlPopup.prototype, "shiftBoundary", 2);
  __decorateClass([
    n$2({ attribute: "shift-padding", type: Number })
  ], SlPopup.prototype, "shiftPadding", 2);
  __decorateClass([
    n$2({ attribute: "auto-size" })
  ], SlPopup.prototype, "autoSize", 2);
  __decorateClass([
    n$2()
  ], SlPopup.prototype, "sync", 2);
  __decorateClass([
    n$2({ type: Object })
  ], SlPopup.prototype, "autoSizeBoundary", 2);
  __decorateClass([
    n$2({ attribute: "auto-size-padding", type: Number })
  ], SlPopup.prototype, "autoSizePadding", 2);

  SlPopup.define("sl-popup");

  var dropdown_styles_default = i$3`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

  // src/internal/tabbable.ts
  function isTakingUpSpace(elem) {
    return Boolean(elem.offsetParent || elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  }
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    if (el.getAttribute("tabindex") === "-1") {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
      return false;
    }
    if (!isTakingUpSpace(el)) {
      return false;
    }
    if (window.getComputedStyle(el).visibility === "hidden") {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    return ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(tag);
  }
  function getTabbableBoundary(root) {
    var _a, _b;
    const tabbableElements = getTabbableElements(root);
    const start = (_a = tabbableElements[0]) != null ? _a : null;
    const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
    return { start, end };
  }
  function getTabbableElements(root) {
    const tabbableElements = [];
    function walk(el) {
      if (el instanceof Element) {
        if (el.hasAttribute("inert")) {
          return;
        }
        if (!tabbableElements.includes(el) && isTabbable(el)) {
          tabbableElements.push(el);
        }
        const slotChildrenOutsideRootElement = (slotElement) => {
          var _a;
          return ((_a = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a.host) !== root;
        };
        if (el instanceof HTMLSlotElement && slotChildrenOutsideRootElement(el)) {
          el.assignedElements({ flatten: true }).forEach((assignedEl) => {
            walk(assignedEl);
          });
        }
        if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      [...el.children].forEach((e) => walk(e));
    }
    walk(root);
    return tabbableElements.sort((a, b) => {
      const aTabindex = Number(a.getAttribute("tabindex")) || 0;
      const bTabindex = Number(b.getAttribute("tabindex")) || 0;
      return bTabindex - aTabindex;
    });
  }

  // src/utilities/animation-registry.ts
  var defaultAnimationRegistry = /* @__PURE__ */ new Map();
  var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") {
      return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
      };
    }
    return animation;
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) {
      return getLogicalAnimation(customAnimation[animationName], options.dir);
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return getLogicalAnimation(defaultAnimation, options.dir);
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }

  // src/internal/event.ts
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // src/internal/animate.ts
  function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(
      el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          const handleAnimationEvent = requestAnimationFrame(resolve);
          animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
          animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
          animation.cancel();
        });
      })
    );
  }

  const connectedElements = new Set();
  const documentElementObserver = new MutationObserver(update);
  const translations = new Map();
  let documentDirection = document.documentElement.dir || 'ltr';
  let documentLanguage = document.documentElement.lang || navigator.language;
  let fallback;
  documentElementObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir', 'lang']
  });
  function registerTranslation(...translation) {
      translation.map(t => {
          const code = t.$code.toLowerCase();
          if (translations.has(code)) {
              translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
          }
          else {
              translations.set(code, t);
          }
          if (!fallback) {
              fallback = t;
          }
      });
      update();
  }
  function update() {
      documentDirection = document.documentElement.dir || 'ltr';
      documentLanguage = document.documentElement.lang || navigator.language;
      [...connectedElements.keys()].map((el) => {
          if (typeof el.requestUpdate === 'function') {
              el.requestUpdate();
          }
      });
  }
  let LocalizeController$1 = class LocalizeController {
      constructor(host) {
          this.host = host;
          this.host.addController(this);
      }
      hostConnected() {
          connectedElements.add(this.host);
      }
      hostDisconnected() {
          connectedElements.delete(this.host);
      }
      dir() {
          return `${this.host.dir || documentDirection}`.toLowerCase();
      }
      lang() {
          return `${this.host.lang || documentLanguage}`.toLowerCase();
      }
      getTranslationData(lang) {
          var _a, _b;
          const locale = new Intl.Locale(lang.replace(/_/g, '-'));
          const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
          const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
          const primary = translations.get(`${language}-${region}`);
          const secondary = translations.get(language);
          return { locale, language, region, primary, secondary };
      }
      exists(key, options) {
          var _a;
          const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
          options = Object.assign({ includeFallback: false }, options);
          if ((primary && primary[key]) ||
              (secondary && secondary[key]) ||
              (options.includeFallback && fallback && fallback[key])) {
              return true;
          }
          return false;
      }
      term(key, ...args) {
          const { primary, secondary } = this.getTranslationData(this.lang());
          let term;
          if (primary && primary[key]) {
              term = primary[key];
          }
          else if (secondary && secondary[key]) {
              term = secondary[key];
          }
          else if (fallback && fallback[key]) {
              term = fallback[key];
          }
          else {
              console.error(`No translation found for: ${String(key)}`);
              return String(key);
          }
          if (typeof term === 'function') {
              return term(...args);
          }
          return term;
      }
      date(dateToFormat, options) {
          dateToFormat = new Date(dateToFormat);
          return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
      }
      number(numberToFormat, options) {
          numberToFormat = Number(numberToFormat);
          return isNaN(numberToFormat) ? '' : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
      }
      relativeTime(value, unit, options) {
          return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
      }
  };

  // src/translations/en.ts
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0)
        return "No options selected";
      if (num === 1)
        return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);
  var en_default = translation;

  var LocalizeController = class extends LocalizeController$1 {
  };
  registerTranslation(en_default);

  // src/internal/watch.ts
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update.call(this, changedProps);
      };
    };
  }

  var SlDropdown = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
      this.open = false;
      this.placement = "bottom-start";
      this.disabled = false;
      this.stayOpenOnSelect = false;
      this.distance = 0;
      this.skidding = 0;
      this.hoist = false;
      this.handleKeyDown = (event) => {
        if (this.open && event.key === "Escape") {
          event.stopPropagation();
          this.hide();
          this.focusOnTrigger();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        var _a;
        if (event.key === "Escape" && this.open) {
          event.stopPropagation();
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if (event.key === "Tab") {
          if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
            event.preventDefault();
            this.hide();
            this.focusOnTrigger();
            return;
          }
          setTimeout(() => {
            var _a2, _b, _c;
            const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
            if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
              this.hide();
            }
          });
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this.containingElement && !path.includes(this.containingElement)) {
          this.hide();
        }
      };
      this.handlePanelSelect = (event) => {
        const target = event.target;
        if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
          this.hide();
          this.focusOnTrigger();
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.containingElement) {
        this.containingElement = this;
      }
    }
    firstUpdated() {
      this.panel.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.popup.active = true;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeOpenListeners();
      this.hide();
    }
    focusOnTrigger() {
      const trigger = this.trigger.assignedElements({ flatten: true })[0];
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        trigger.focus();
      }
    }
    getMenu() {
      return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
    }
    handleTriggerClick() {
      if (this.open) {
        this.hide();
      } else {
        this.show();
        this.focusOnTrigger();
      }
    }
    async handleTriggerKeyDown(event) {
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.handleTriggerClick();
        return;
      }
      const menu = this.getMenu();
      if (menu) {
        const menuItems = menu.getAllItems();
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          if (!this.open) {
            this.show();
            await this.updateComplete;
          }
          if (menuItems.length > 0) {
            this.updateComplete.then(() => {
              if (event.key === "ArrowDown" || event.key === "Home") {
                menu.setCurrentItem(firstMenuItem);
                firstMenuItem.focus();
              }
              if (event.key === "ArrowUp" || event.key === "End") {
                menu.setCurrentItem(lastMenuItem);
                lastMenuItem.focus();
              }
            });
          }
        }
      }
    }
    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    //
    // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
    // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
    // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
    // a child of the slotted element, or an element in the slotted element's shadow root.
    //
    // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
    //
    // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
    //
    updateAccessibleTrigger() {
      const assignedElements = this.trigger.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
      let target;
      if (accessibleTrigger) {
        switch (accessibleTrigger.tagName.toLowerCase()) {
          case "sl-button":
          case "sl-icon-button":
            target = accessibleTrigger.button;
            break;
          default:
            target = accessibleTrigger;
        }
        target.setAttribute("aria-haspopup", "true");
        target.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
    /** Shows the dropdown panel. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dropdown panel */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
     * is activated.
     */
    reposition() {
      this.popup.reposition();
    }
    addOpenListeners() {
      this.panel.addEventListener("sl-select", this.handlePanelSelect);
      this.panel.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      if (this.panel) {
        this.panel.removeEventListener("sl-select", this.handlePanelSelect);
        this.panel.removeEventListener("keydown", this.handleKeyDown);
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    }
    async handleOpenChange() {
      if (this.disabled) {
        this.open = false;
        return;
      }
      this.updateAccessibleTrigger();
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.panel.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.panel.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    render() {
      return x`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${e$2({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
    }
  };
  SlDropdown.styles = dropdown_styles_default;
  SlDropdown.dependencies = { "sl-popup": SlPopup };
  __decorateClass([
    e$4(".dropdown")
  ], SlDropdown.prototype, "popup", 2);
  __decorateClass([
    e$4(".dropdown__trigger")
  ], SlDropdown.prototype, "trigger", 2);
  __decorateClass([
    e$4(".dropdown__panel")
  ], SlDropdown.prototype, "panel", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "open", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlDropdown.prototype, "placement", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "disabled", 2);
  __decorateClass([
    n$2({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  ], SlDropdown.prototype, "stayOpenOnSelect", 2);
  __decorateClass([
    n$2({ attribute: false })
  ], SlDropdown.prototype, "containingElement", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlDropdown.prototype, "distance", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlDropdown.prototype, "skidding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlDropdown.prototype, "hoist", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDropdown.prototype, "handleOpenChange", 1);
  setDefaultAnimation("dropdown.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("dropdown.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  SlDropdown.define("sl-dropdown");

  var menu_styles_default = i$3`
  ${component_styles_default}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

  var SlMenu = class extends ShoelaceElement {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menu");
    }
    handleClick(event) {
      const menuItemTypes = ["menuitem", "menuitemcheckbox"];
      const target = event.composedPath().find((el) => {
        var _a;
        return menuItemTypes.includes(((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) || "");
      });
      if (!target)
        return;
      const item = target;
      if (item.type === "checkbox") {
        item.checked = !item.checked;
      }
      this.emit("sl-select", { detail: { item } });
    }
    handleKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        const item = this.getCurrentItem();
        event.preventDefault();
        event.stopPropagation();
        item == null ? void 0 : item.click();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        const items = this.getAllItems();
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        if (items.length > 0) {
          event.preventDefault();
          event.stopPropagation();
          if (event.key === "ArrowDown") {
            index++;
          } else if (event.key === "ArrowUp") {
            index--;
          } else if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = items.length - 1;
          }
          if (index < 0) {
            index = items.length - 1;
          }
          if (index > items.length - 1) {
            index = 0;
          }
          this.setCurrentItem(items[index]);
          items[index].focus();
        }
      }
    }
    handleMouseDown(event) {
      const target = event.target;
      if (this.isMenuItem(target)) {
        this.setCurrentItem(target);
      }
    }
    handleSlotChange() {
      const items = this.getAllItems();
      if (items.length > 0) {
        this.setCurrentItem(items[0]);
      }
    }
    isMenuItem(item) {
      var _a;
      return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
    }
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems() {
      return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
        if (el.inert || !this.isMenuItem(el)) {
          return false;
        }
        return true;
      });
    }
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem() {
      return this.getAllItems().find((i) => i.getAttribute("tabindex") === "0");
    }
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item) {
      const items = this.getAllItems();
      items.forEach((i) => {
        i.setAttribute("tabindex", i === item ? "0" : "-1");
      });
    }
    render() {
      return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
  };
  SlMenu.styles = menu_styles_default;
  __decorateClass([
    e$4("slot")
  ], SlMenu.prototype, "defaultSlot", 2);

  SlMenu.define("sl-menu");

  var menu_item_styles_default = i$3`
  ${component_styles_default}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$1=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,f$1=o=>void 0===o.strings;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const s=(i,t)=>{const e=i._$AN;if(void 0===e)return !1;for(const i of e)i._$AO?.(t,!1),s(i,t);return !0},o$1=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t);}};function h$1(i){void 0!==this._$AN?(o$1(this),this._$AM=i,r(this)):this._$AM=i;}function n$1(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o$1(r[i]);else null!=r&&(s(r,!1),o$1(r));else s(this,i);}const c=i=>{i.type==t.CHILD&&(i._$AP??=n$1,i._$AQ??=h$1);};class f extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o$1(this));}setValue(t){if(f$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=()=>new h;class h{}const o=new WeakMap,n=e$3(class extends f{render(i){return T}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=s,this.ct=i.options?.host,this.ot(this.lt=i.element)),T}ot(t){if("function"==typeof this.G){const i=this.ct??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t);}else this.G.value=t;}get rt(){return "function"==typeof this.G?o.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

  // src/components/menu-item/submenu-controller.ts
  var SubmenuController = class {
    constructor(host, hasSlotController, localize) {
      this.popupRef = e();
      this.enableSubmenuTimer = -1;
      this.isConnected = false;
      this.isPopupConnected = false;
      this.skidding = 0;
      this.submenuOpenDelay = 100;
      // Set the safe triangle cursor position
      this.handleMouseMove = (event) => {
        this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
        this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
      };
      this.handleMouseOver = () => {
        if (this.hasSlotController.test("submenu")) {
          this.enableSubmenu();
        }
      };
      // Focus on the first menu-item of a submenu.
      this.handleKeyDown = (event) => {
        switch (event.key) {
          case "Escape":
          case "Tab":
            this.disableSubmenu();
            break;
          case "ArrowLeft":
            if (event.target !== this.host) {
              event.preventDefault();
              event.stopPropagation();
              this.host.focus();
              this.disableSubmenu();
            }
            break;
          case "ArrowRight":
          case "Enter":
          case " ":
            this.handleSubmenuEntry(event);
            break;
        }
      };
      this.handleClick = (event) => {
        var _a;
        if (event.target === this.host) {
          event.preventDefault();
          event.stopPropagation();
        } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a = event.target.role) == null ? void 0 : _a.startsWith("menuitem")))) {
          this.disableSubmenu();
        }
      };
      // Close this submenu on focus outside of the parent or any descendants.
      this.handleFocusOut = (event) => {
        if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
          return;
        }
        this.disableSubmenu();
      };
      // Prevent the parent menu-item from getting focus on mouse movement on the submenu
      this.handlePopupMouseover = (event) => {
        event.stopPropagation();
      };
      // Set the safe triangle values for the submenu when the position changes
      this.handlePopupReposition = () => {
        const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
        const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "sl-menu")[0];
        const isRtl = this.localize.dir() === "rtl";
        if (!menu) {
          return;
        }
        const { left, top, width, height } = menu.getBoundingClientRect();
        this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
      };
      (this.host = host).addController(this);
      this.hasSlotController = hasSlotController;
      this.localize = localize;
    }
    hostConnected() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
      }
    }
    hostDisconnected() {
      this.removeListeners();
    }
    hostUpdated() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
        this.updateSkidding();
      } else {
        this.removeListeners();
      }
    }
    addListeners() {
      if (!this.isConnected) {
        this.host.addEventListener("mousemove", this.handleMouseMove);
        this.host.addEventListener("mouseover", this.handleMouseOver);
        this.host.addEventListener("keydown", this.handleKeyDown);
        this.host.addEventListener("click", this.handleClick);
        this.host.addEventListener("focusout", this.handleFocusOut);
        this.isConnected = true;
      }
      if (!this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = true;
        }
      }
    }
    removeListeners() {
      if (this.isConnected) {
        this.host.removeEventListener("mousemove", this.handleMouseMove);
        this.host.removeEventListener("mouseover", this.handleMouseOver);
        this.host.removeEventListener("keydown", this.handleKeyDown);
        this.host.removeEventListener("click", this.handleClick);
        this.host.removeEventListener("focusout", this.handleFocusOut);
        this.isConnected = false;
      }
      if (this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = false;
        }
      }
    }
    handleSubmenuEntry(event) {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      if (!submenuSlot) {
        console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
        return;
      }
      let menuItems = null;
      for (const elt of submenuSlot.assignedElements()) {
        menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
        if (menuItems.length !== 0) {
          break;
        }
      }
      if (!menuItems || menuItems.length === 0) {
        return;
      }
      menuItems[0].setAttribute("tabindex", "0");
      for (let i = 1; i !== menuItems.length; ++i) {
        menuItems[i].setAttribute("tabindex", "-1");
      }
      if (this.popupRef.value) {
        event.preventDefault();
        event.stopPropagation();
        if (this.popupRef.value.active) {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        } else {
          this.enableSubmenu(false);
          this.host.updateComplete.then(() => {
            if (menuItems[0] instanceof HTMLElement) {
              menuItems[0].focus();
            }
          });
          this.host.requestUpdate();
        }
      }
    }
    setSubmenuState(state) {
      if (this.popupRef.value) {
        if (this.popupRef.value.active !== state) {
          this.popupRef.value.active = state;
          this.host.requestUpdate();
        }
      }
    }
    // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
    // newly opened menu.
    enableSubmenu(delay = true) {
      if (delay) {
        this.enableSubmenuTimer = window.setTimeout(() => {
          this.setSubmenuState(true);
        }, this.submenuOpenDelay);
      } else {
        this.setSubmenuState(true);
      }
    }
    disableSubmenu() {
      clearTimeout(this.enableSubmenuTimer);
      this.setSubmenuState(false);
    }
    // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
    updateSkidding() {
      var _a;
      if (!((_a = this.host.parentElement) == null ? void 0 : _a.computedStyleMap)) {
        return;
      }
      const styleMap = this.host.parentElement.computedStyleMap();
      const attrs = ["padding-top", "border-top-width", "margin-top"];
      const skidding = attrs.reduce((accumulator, attr) => {
        var _a2;
        const styleValue = (_a2 = styleMap.get(attr)) != null ? _a2 : new CSSUnitValue(0, "px");
        const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
        const pxValue = unitValue.to("px");
        return accumulator - pxValue.value;
      }, 0);
      this.skidding = skidding;
    }
    isExpanded() {
      return this.popupRef.value ? this.popupRef.value.active : false;
    }
    renderSubmenu() {
      const isLtr = this.localize.dir() === "ltr";
      if (!this.isConnected) {
        return x` <slot name="submenu" hidden></slot> `;
      }
      return x`
      <sl-popup
        ${n(this.popupRef)}
        placement=${isLtr ? "right-start" : "left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `;
    }
  };

  // src/internal/slot.ts
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };
  function getTextContent(slot) {
    if (!slot) {
      return "";
    }
    const nodes = slot.assignedNodes({ flatten: true });
    let text = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text;
  }

  var icon_styles_default = i$3`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

  // src/utilities/base-path.ts
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }

  // src/components/icon/library.default.ts
  var library = {
    name: "default",
    resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
  };
  var library_default_default = library;

  // src/components/icon/library.system.ts
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name) => {
      if (name in icons) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;

  // src/components/icon/library.ts
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find((lib) => lib.name === name);
  }

  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = /* @__PURE__ */ new Map();
  var SlIcon = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.initialRender = false;
      this.svg = null;
      this.label = "";
      this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    async resolveIcon(url, library) {
      var _a;
      let fileData;
      if (library == null ? void 0 : library.spriteSheet) {
        return x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
      }
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok)
          return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch (e) {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
          return CACHEABLE_ERROR;
        if (!parser)
          parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl)
          return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch (e) {
        return CACHEABLE_ERROR;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.initialRender = true;
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library = getIconLibrary(this.library);
      if (this.name && library) {
        return {
          url: library.resolver(this.name),
          fromLibrary: true
        };
      }
      return {
        url: this.src,
        fromLibrary: false
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      var _a;
      const { url, fromLibrary } = this.getIconSource();
      const library = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library);
        iconCache.set(url, iconResolver);
      }
      if (!this.initialRender) {
        return;
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (e$1(svg)) {
        this.svg = svg;
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.emit("sl-error");
          break;
        default:
          this.svg = svg.cloneNode(true);
          (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, this.svg);
          this.emit("sl-load");
      }
    }
    render() {
      return this.svg;
    }
  };
  SlIcon.styles = icon_styles_default;
  __decorateClass([
    r$1()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
    n$2()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
    n$2()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
    watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
    watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);

  var SlMenuItem = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.type = "normal";
      this.checked = false;
      this.value = "";
      this.disabled = false;
      this.localize = new LocalizeController(this);
      this.hasSlotController = new HasSlotController(this, "submenu");
      this.submenuController = new SubmenuController(this, this.hasSlotController, this.localize);
      this.handleHostClick = (event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleMouseOver = (event) => {
        this.focus();
        event.stopPropagation();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener("click", this.handleHostClick);
      this.addEventListener("mouseover", this.handleMouseOver);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("click", this.handleHostClick);
      this.removeEventListener("mouseover", this.handleMouseOver);
    }
    handleDefaultSlotChange() {
      const textLabel = this.getTextLabel();
      if (typeof this.cachedTextLabel === "undefined") {
        this.cachedTextLabel = textLabel;
        return;
      }
      if (textLabel !== this.cachedTextLabel) {
        this.cachedTextLabel = textLabel;
        this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
      }
    }
    handleCheckedChange() {
      if (this.checked && this.type !== "checkbox") {
        this.checked = false;
        console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
        return;
      }
      if (this.type === "checkbox") {
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.removeAttribute("aria-checked");
      }
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleTypeChange() {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.setAttribute("role", "menuitem");
        this.removeAttribute("aria-checked");
      }
    }
    /** Returns a text label based on the contents of the menu item's default slot. */
    getTextLabel() {
      return getTextContent(this.defaultSlot);
    }
    isSubmenu() {
      return this.hasSlotController.test("submenu");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      const isSubmenuExpanded = this.submenuController.isExpanded();
      return x`
      <div
        id="anchor"
        part="base"
        class=${e$2({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `;
    }
  };
  SlMenuItem.styles = menu_item_styles_default;
  SlMenuItem.dependencies = {
    "sl-icon": SlIcon,
    "sl-popup": SlPopup
  };
  __decorateClass([
    e$4("slot:not([name])")
  ], SlMenuItem.prototype, "defaultSlot", 2);
  __decorateClass([
    e$4(".menu-item")
  ], SlMenuItem.prototype, "menuItem", 2);
  __decorateClass([
    n$2()
  ], SlMenuItem.prototype, "type", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "checked", 2);
  __decorateClass([
    n$2()
  ], SlMenuItem.prototype, "value", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "disabled", 2);
  __decorateClass([
    watch("checked")
  ], SlMenuItem.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlMenuItem.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("type")
  ], SlMenuItem.prototype, "handleTypeChange", 1);

  SlMenuItem.define("sl-menu-item");

  var menu_label_styles_default = i$3`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;

  var SlMenuLabel = class extends ShoelaceElement {
    render() {
      return x` <slot part="base" class="menu-label"></slot> `;
    }
  };
  SlMenuLabel.styles = menu_label_styles_default;

  SlMenuLabel.define("sl-menu-label");

  SlIcon.define("sl-icon");

  var divider_styles_default = i$3`
  ${component_styles_default}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

  var SlDivider = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.vertical = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "separator");
    }
    handleVerticalChange() {
      this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
    }
  };
  SlDivider.styles = divider_styles_default;
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlDivider.prototype, "vertical", 2);
  __decorateClass([
    watch("vertical")
  ], SlDivider.prototype, "handleVerticalChange", 1);

  SlDivider.define("sl-divider");

  var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-fast-forward-btn' viewBox='0 0 16 16'%3e %3cpath d='M8.79 5.093A.5.5 0 0 0 8 5.5v1.886L4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L8 8.614V10.5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z'/%3e %3cpath d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4Z'/%3e%3c/svg%3e";

  var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-image' viewBox='0 0 16 16'%3e %3cpath d='M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'/%3e %3cpath d='M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z'/%3e%3c/svg%3e";

  var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-list' viewBox='0 0 16 16'%3e %3cpath fill-rule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'/%3e%3c/svg%3e";

  var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-download' viewBox='0 0 16 16'%3e %3cpath d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'/%3e %3cpath d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'/%3e%3c/svg%3e";

  // import iconGear from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/gear.svg'
  // import iconXLg from '../../../node_modules/@shoelace-style/shoelace/dist/assets/icons/x-lg.svg'

  const { i18n, debug: debug$1, globalFunctional, configManager: configManager$1 } = window.h5playerUIProvider;
  const isGlobalStorageUsable = configManager$1.isGlobalStorageUsable();

  const menuConfig = [
    {
      title: i18n.t('download'),
      desc: i18n.t('download'),
      icon: img,
      action: 'mediaDownload',
      args: null
    },
    {
      title: i18n.t('capture'),
      desc: i18n.t('capture'),
      icon: img$2,
      action: 'capture',
      args: null
    },
    {
      title: i18n.t('speed'),
      desc: i18n.t('speed'),
      icon: img$3,
      dropdownMenu: [
        {
          title: '0.5x',
          desc: '0.5x',
          action: 'setPlaybackRate',
          args: 0.5
        },
        {
          title: '0.75x',
          desc: '0.75x',
          action: 'setPlaybackRate',
          args: 0.75
        },
        {
          title: '1.0x',
          desc: '1.0x',
          action: 'setPlaybackRate',
          args: 1
        },
        {
          title: '1.25x',
          desc: '1.25x',
          action: 'setPlaybackRate',
          args: 1.25
        },
        {
          title: '1.5x',
          desc: '1.5x',
          action: 'setPlaybackRate',
          args: 1.5
        },
        {
          title: '2.0x',
          desc: '2.0x',
          action: 'setPlaybackRate',
          args: 2
        },
        {
          title: '3.0x',
          desc: '3.0x',
          action: 'setPlaybackRate',
          args: 3
        },
        {
          title: '4.0x',
          desc: '4.0x',
          action: 'setPlaybackRate',
          args: 4
        },
        {
          title: '8.0x',
          desc: '8.0x',
          action: 'setPlaybackRate',
          args: 8
        },
        {
          title: '16.0x',
          desc: '16.0x',
          action: 'setPlaybackRate',
          args: 16
        }
      ]
    },
    {
      title: i18n.t('menu'),
      desc: i18n.t('menu'),
      icon: img$1,
      dropdownMenu: [
        {
          title: i18n.t('graphicalInterface'),
          desc: i18n.t('graphicalInterface'),
          subMenu: [
            {
              title: i18n.t('disableCurrentInstanceGUI'),
              desc: i18n.t('disableCurrentInstanceGUI'),
              action: 'disableCurrentInstanceGUI',
              args: null
            },
            {
              title: i18n.t('disableGUITemporarily'),
              desc: i18n.t('disableGUITemporarily'),
              action: 'disableGUITemporarily',
              args: null
            },
            {
              ...globalFunctional.toggleGUIStatusUnderCurrentSite,
              action: 'toggleGUIStatusUnderCurrentSite',
              args: null
            },
            {
              ...globalFunctional.alwaysShowGraphicalInterface,
              action: 'alwaysShowGraphicalInterface',
              args: null,
              disabled: !debug$1.isDebugMode() || !isGlobalStorageUsable
            }
          ]
        },
        {
          title: i18n.t('videoFilter'),
          desc: i18n.t('videoFilter'),
          subMenu: [
            {
              title: i18n.t('resetFilterAndTransform'),
              desc: i18n.t('resetFilterAndTransform'),
              action: 'resetFilterAndTransform',
              args: null
            },
            {
              title: i18n.t('brightnessUp'),
              desc: i18n.t('brightnessUp'),
              action: 'setBrightnessUp',
              args: 0.1
            },
            {
              title: i18n.t('brightnessDown'),
              desc: i18n.t('brightnessDown'),
              action: 'setBrightnessDown',
              args: -0.1
            },
            {
              title: i18n.t('contrastUp'),
              desc: i18n.t('contrastUp'),
              action: 'setContrastUp',
              args: 0.1
            },
            {
              title: i18n.t('contrastDown'),
              desc: i18n.t('contrastDown'),
              action: 'setContrastDown',
              args: -0.1
            },
            {
              title: i18n.t('saturationUp'),
              desc: i18n.t('saturationUp'),
              action: 'setSaturationUp',
              args: 0.1
            },
            {
              title: i18n.t('saturationDown'),
              desc: i18n.t('saturationDown'),
              action: 'setSaturationDown',
              args: -0.1
            },
            {
              title: i18n.t('hueUp'),
              desc: i18n.t('hueUp'),
              action: 'setHueUp',
              args: 1
            },
            {
              title: i18n.t('hueDown'),
              desc: i18n.t('hueDown'),
              action: 'setHueDown',
              args: -1
            },
            {
              title: i18n.t('blurUp'),
              desc: i18n.t('blurUp'),
              action: 'setBlurUp',
              args: 1
            },
            {
              title: i18n.t('blurDown'),
              desc: i18n.t('blurDown'),
              action: 'setBlurDown',
              args: -1
            }
          ]
        },
        {
          title: i18n.t('rotateAndMirror'),
          desc: i18n.t('rotateAndMirror'),
          action: 'rotateAndMirror',
          subMenu: [
            {
              title: i18n.t('rotate90'),
              desc: i18n.t('rotate90'),
              action: 'setRotate',
              args: null
            },
            {
              title: i18n.t('horizontalMirror'),
              desc: i18n.t('horizontalMirror'),
              action: 'setMirror',
              args: null
            },
            {
              title: i18n.t('verticalMirror'),
              desc: i18n.t('verticalMirror'),
              action: 'setMirror',
              args: true
            }
          ]
        },
        {
          title: i18n.t('videoTransform'),
          desc: i18n.t('videoTransform'),
          action: 'translate',
          subMenu: [
            {
              title: i18n.t('translateRight'),
              desc: i18n.t('translateRight'),
              action: 'setTranslateRight',
              args: null
            },
            {
              title: i18n.t('translateLeft'),
              desc: i18n.t('translateLeft'),
              action: 'setTranslateLeft',
              args: null
            },
            {
              title: i18n.t('translateUp'),
              desc: i18n.t('translateUp'),
              action: 'setTranslateUp',
              args: null
            },
            {
              title: i18n.t('translateDown'),
              desc: i18n.t('translateDown'),
              action: 'setTranslateDown',
              args: null
            }
          ]
        },
        {
          title: i18n.t('moreActions'),
          desc: i18n.t('moreActions'),
          subMenu: [
            {
              title: `${i18n.t('toggleStates')} ${i18n.t('autoGotoBufferedTime')}`,
              desc: `${i18n.t('toggleStates')} ${i18n.t('autoGotoBufferedTime')}`,
              action: 'toggleAutoGotoBufferedTime'
            },
            {
              title: 'Clean remote helper info',
              desc: 'Clean remote helper info',
              action: 'cleanRemoteHelperInfo',
              disabled: !debug$1.isDebugMode()
            },
            {
              title: 'Print Player info',
              desc: 'Print Player info',
              action: 'printPlayerInfo',
              disabled: !debug$1.isDebugMode()
            },
            {
              ...globalFunctional.openCustomConfigurationEditor,
              action: 'openCustomConfigurationEditor',
              args: null,
              disabled: true
            },
            {
              title: i18n.t('comingSoon'),
              desc: i18n.t('comingSoon')
            }
          ]
        },
        {
          divider: true
        },
        {
          title: i18n.t('hotkeys'),
          desc: i18n.t('hotkeys'),
          subMenu: [
            {
              ...globalFunctional.openHotkeysPage,
              action: 'openHotkeysPage',
              args: ''
            },
            {
              title: i18n.t('toggleHotkeysTemporarily'),
              desc: i18n.t('toggleHotkeysTemporarily'),
              action: 'toggleHotkeys',
              args: null
            },
            {
              ...globalFunctional.toggleHotkeysStatusUnderCurrentSite,
              action: 'toggleHotkeysStatusUnderCurrentSite',
              args: null
            },
            {
              ...globalFunctional.toggleHotkeysStatus,
              action: 'toggleHotkeysStatus',
              args: null,
              disabled: !isGlobalStorageUsable
            }
          ]
        },
        {
          title: i18n.t('setting'),
          desc: i18n.t('setting'),
          subMenu: [
            {
              ...globalFunctional.openCustomConfigurationEditor,
              action: 'openCustomConfigurationEditor',
              args: ''
            },
            {
              ...globalFunctional.restoreGlobalConfiguration,
              action: 'restoreGlobalConfiguration',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleScriptEnableState,
              action: 'toggleScriptEnableState',
              args: null
            },
            {
              ...globalFunctional.toggleSetCurrentTimeFunctional,
              action: 'toggleSetCurrentTimeFunctional',
              args: ''
            },
            {
              ...globalFunctional.toggleSetVolumeFunctional,
              action: 'toggleSetVolumeFunctional',
              args: ''
            },
            {
              ...globalFunctional.toggleGUIStatus,
              action: 'toggleGUIStatus',
              args: null,
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleSetPlaybackRateFunctional,
              action: 'toggleSetPlaybackRateFunctional',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleAcousticGainFunctional,
              action: 'toggleAcousticGainFunctional',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleCrossOriginControlFunctional,
              action: 'toggleCrossOriginControlFunctional',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleExperimentFeatures,
              action: 'toggleExperimentFeatures',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleExternalCustomConfiguration,
              action: 'toggleExternalCustomConfiguration',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleDebugMode,
              action: 'toggleDebugMode',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              title: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
              desc: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
              disabled: !isGlobalStorageUsable,
              subMenu: [
                {
                  title: i18n.t('autoChoose'),
                  desc: i18n.t('autoChoose'),
                  action: 'setLanguage',
                  args: 'auto'
                },
                {
                  title: '简体中文',
                  desc: '简体中文',
                  action: 'setLanguage',
                  args: 'zh-CN'
                },
                {
                  title: '繁體中文',
                  desc: '繁體中文',
                  action: 'setLanguage',
                  args: 'zh-TW'
                },
                {
                  title: 'English',
                  desc: 'English',
                  action: 'setLanguage',
                  args: 'en-US'
                },
                {
                  title: 'русский',
                  desc: 'русский',
                  action: 'setLanguage',
                  args: 'ru'
                }
              ]
            }
          ]
        },
        {
          title: i18n.t('about'),
          desc: i18n.t('about'),
          subMenu: [
            {
              ...globalFunctional.openWebsite,
              action: 'openWebsite',
              args: ''
            },
            {
              ...globalFunctional.openProjectGithub,
              action: 'openProjectGithub',
              args: ''
            },
            {
              ...globalFunctional.openIssuesPage,
              action: 'openIssuesPage',
              args: ''
            },
            {
              ...globalFunctional.openAddGroupChatPage,
              action: 'openAddGroupChatPage',
              args: ''
            },
            {
              ...globalFunctional.openChangeLogPage,
              action: 'openChangeLogPage',
              args: ''
            },
            {
              ...globalFunctional.openCheckVersionPage,
              action: 'openCheckVersionPage',
              args: ''
            },
            {
              ...globalFunctional.openDonatePage,
              action: 'openDonatePage',
              args: ''
            },
            {
              ...globalFunctional.openAboutDonatePage,
              action: 'openAboutDonatePage',
              args: ''
            },
            {
              ...globalFunctional.openAuthorHomePage,
              action: 'openAuthorHomePage',
              args: ''
            }
          ]
        },
        {
          title: i18n.t('more'),
          desc: i18n.t('more'),
          subMenu: [
            {
              title: i18n.t('ffmpegScript'),
              desc: i18n.t('ffmpegScript'),
              url: 'https://u.anzz.top/ffmpegscript'
            }
          ]
        }
      ]
    }
  ];

  /* menuConfig预处理函数，根据指定的参考dom元素，通过判断元素的宽度来决定是否只显示菜单的图标，以节省展示位置 */
  function menuConfigPreprocess (menuConfig, refDom) {
    const refWidth = refDom.offsetWidth;
    const iconOnly = refWidth < 500;

    return menuConfig.map(item => {
      if (item.dropdownMenu) {
        item.dropdownMenu = menuConfigPreprocess(item.dropdownMenu, refDom);
      }

      return {
        ...item,
        iconOnly
      }
    })
  }

  /* 写个函数，支持将menuConfig.dropdownMenu的数据构建成sl-menu组件的template */
  function convertDropdownMenuToTemplate (dropdownMenu, isRootMenu = true) {
    const menuItems = dropdownMenu.map(item => {
      if (item.disabled) return ''
      const title = (item.title instanceof Function ? item.title() : item.title) || '';
      const desc = (item.desc instanceof Function ? item.desc() : item.desc) || '';
      const id = item.id || Math.random().toString(36).substr(2);

      if (item.subMenu) {
        return `
        <sl-menu-item class="h5p-menu-action" value="${id}" title="${desc || title}" data-action="${item.action || ''}" data-args='${JSON.stringify(item.args || null)}'>
          ${title}
          <sl-menu slot="submenu">
            ${convertDropdownMenuToTemplate(item.subMenu, false)}
          </sl-menu>
        </sl-menu-item>
      `
      } else if (item.divider) {
        return '<sl-divider></sl-divider>'
      } else {
        return `<sl-menu-item class="h5p-menu-action" value="${id}" title="${desc || title}" data-action="${item.action || ''}" data-args='${JSON.stringify(item.args || null)}' data-url="${item.url || ''}">
        ${title}
      </sl-menu-item>
      `
      }
    }).join('');

    return isRootMenu ? `<sl-menu>${menuItems}</sl-menu>` : menuItems
  }

  /* 写一个函数可以将menuConfig转换成template进行输出 */
  function convertMenuConfigToTemplate (menuConfig) {
    return `
  <div class="h5p-action-mod">
      ${menuConfig.map(item => {
        if (item.disabled) return ''

        const title = (item.title instanceof Function ? item.title() : item.title) || '';
        const desc = (item.desc instanceof Function ? item.desc() : item.desc) || '';
        const iconHtml = item.icon ? `<sl-icon src="${item.icon}"></sl-icon>` : '';
        const menuDesc = item.iconOnly && iconHtml ? '' : `<span class="h5p-desc">${title}</span>`;

        if (item.dropdownMenu) {
          return `
            <sl-dropdown distance="6">
              <span slot="trigger" class="h5p-action-btn" title="${desc || title}" data-title="${title}" data-action="${item.action || ''}">
                ${iconHtml}
                ${menuDesc}
              </span>
              ${convertDropdownMenuToTemplate(item.dropdownMenu)}
            </sl-dropdown>
          `
        } else {
          return `
            <span class="h5p-action-btn h5p-menu-action" title="${desc || title}" data-title="${title}" data-action="${item.action || ''}" data-args='${JSON.stringify(item.args || null)}'>
              ${iconHtml}
              ${menuDesc}
            </span>
          `
        }
      }).join('')
    } 
  </div>
  `
  }

  function createMenuTemplate (config = menuConfig || []) {
    return convertMenuConfigToTemplate(config)
  }

  function createLogoModTemplate () {
    const homepage = globalFunctional.getHomePageLink.fn();
    return `<a class="h5p-logo-mod" href="${homepage}" target="_blank">h5player</a>`
  }

  function createRecommendModTemplate (refDom) {
    const refWidth = refDom.offsetWidth;
    if (refWidth < 500) { return '' }

    let recommendList = configManager$1.getGlobalStorage('recommendList') || [{
      title: i18n.t('recommend'),
      url: 'https://u.anzz.top/h5precommend'
    }];
    recommendList = recommendList.filter(item => !item.disabled);

    const curLang = i18n.language() || '';
    /* 兼容各种可能的语言配置写法 */
    const curLang2 = curLang.replace('-', '');
    const curLang3 = curLang.replace('-', '_');
    const curLang4 = curLang.split('-')[0];

    /* 根据当前的language和recommendList的languages配置过滤出符合当前语言的recommendList */
    recommendList = recommendList.filter(item => {
      let lang = item.lang || item.language || item.languages;
      if (lang && !Array.isArray(lang)) { lang = [lang]; }
      if (curLang && lang) {
        return lang.includes(curLang) || lang.includes(curLang2) || lang.includes(curLang3) || lang.includes(curLang4)
      } else {
        return true
      }
    });

    if (!recommendList.length) { return '' }

    /* 从recommendList里随机取5条数据，多余的不予以展示 */
    if (recommendList.length > 5) { recommendList = recommendList.sort(() => Math.random() - 0.5).slice(0, 5); }

    /* 根据recommendList里的priority字段进行排序，priority值越大越靠前 */
    recommendList = recommendList.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    const recommendHtml = recommendList.map(item => {
      let title = item.title || '';
      let desc = item.desc || '';
      let url = item.url || '';

      if (item.i18n) {
        const i18nInfo = item.i18n[`${curLang}`] || item.i18n[`${curLang2}`] || item.i18n[`${curLang3}`] || item.i18n[`${curLang4}`];
        if (i18nInfo) {
          title = i18nInfo.title || title;
          desc = i18nInfo.desc || desc;
          url = i18nInfo.url || url;
        }
      }

      return `<a class="h5p-recommend-item" href="${url}" title="${desc}" target="_blank">${title}</a>`
    }).join('');

    return `<div class="h5p-recommend-mod" >${recommendHtml}</div>`
  }

  /**
   * 注册Recommend切换逻辑，每4s检测一次当前哪个h5p-recommend-item上有h5p-recommend-item__active，然后将h5p-recommend-item__active切换到下一个元素，如此往复
   * 当鼠标移动到recommendWrap的时候停止切换，移开后继续切换
   */
  function registerRecommendModToggle (recommendWrap, reRender) {
    if (!reRender && (!recommendWrap || recommendWrap.__h5pRecommendModRegistered__)) { return }

    let recommendIndex = 0;
    let stopToggle = false;

    const toggleRecommend = () => {
      if (stopToggle) { return }
      const recommendItems = recommendWrap.querySelectorAll('.h5p-recommend-item');
      recommendItems.forEach((item, index) => {
        if (index === recommendIndex) {
          item.classList.add('h5p-recommend-item__active');
        } else {
          item.classList.remove('h5p-recommend-item__active');
        }
      });

      recommendIndex = (recommendIndex + 1) % recommendItems.length;
    };

    toggleRecommend();

    clearInterval(recommendWrap.__h5pRecommendModInterval__);
    recommendWrap.__h5pRecommendModInterval__ = setInterval(toggleRecommend, 3000);
    if (!reRender) {
      recommendWrap.addEventListener('mouseenter', () => { stopToggle = true; });
      recommendWrap.addEventListener('mouseleave', () => { stopToggle = false; });
    }

    recommendWrap.__h5pRecommendModRegistered__ = true;
  }

  /**
   * 通过事件委托的方式处理菜单点击事件，减少事件绑定，提升性能
   * @param { Event } event -必选 事件对象
   */
  function menuActionHandler (obj) {
    const { event, h5Player, h5playerUI, videoElement, popup, actionCallback } = obj;
    const target = event.target;

    /* 根据target查找是否包含data-action属性，注意这里可能需要使用closest来向上查找 */
    const actionDOM = target.closest('.h5p-menu-action');
    if (!actionDOM) {
      debug$1.log('[menuActionHandler]', '未找到actionDOM', event.target);
      return
    }

    const action = actionDOM.getAttribute('data-action');
    const args = JSON.parse(actionDOM.getAttribute('data-args') || null);
    const url = actionDOM.getAttribute('data-url');

    if (url) {
      globalFunctional.openInTab(url);
      return
    }

    h5Player.setPlayerInstance(videoElement);

    if (action === 'disableGUITemporarily') {
      h5playerUI.disableGUITemporarily();
      debug$1.log('[menuActionHandler][disableGUITemporarily]');
      return
    }

    if (action && (h5Player[action] instanceof Function || globalFunctional[action])) {
      // debug.log('[menuActionHandler]', actionDOM, action, args)

      try {
        if (action === 'setPlaybackRate') {
          /* 使用UI操作需强行跳过锁检测逻辑 */
          h5Player.setPlaybackRate(args, false, false, true);
        } else if (globalFunctional[action] && globalFunctional[action].fn instanceof Function) {
          globalFunctional[action].fn(args);
        } else {
          h5Player[action](args);
          popup && popup.reposition();
        }
      } catch (e) {
        debug$1.error('[menuActionHandler][error]', e);
      }

      if (actionCallback instanceof Function) {
        actionCallback(action, args);
      }
    }
  }

  // https://shoelace.style/getting-started/installation#bundling

  if (!window.h5playerUIProvider) {
    throw new Error('h5playerUIProvider is not defined, please check if you have imported h5playerUIProvider.js')
  }

  const { debug, parseHTML, observeVisibility, isOutOfDocument, configManager, device } = window.h5playerUIProvider;

  const popupWrapObjs = {};

  function removePopupWrapById (popupWrapId) {
    const popupWrap = document.querySelector(`#${popupWrapId}`);
    if (popupWrap) {
      popupWrap.remove();
    }

    delete popupWrapObjs[popupWrapId];
  }

  function removePopupWrapByElement (element) {
    if (!element) { return false }
    const popupWrapId = element.getAttribute('data-popup-wrap-id');
    if (popupWrapId) { removePopupWrapById(popupWrapId); }
  }

  /* 遍历popupWrapObjs，如果popupWrapObjs中的element元素的offsetParent为null，则移除掉 */
  function cleanPopupWrap () {
    const popupWrapIds = Object.keys(popupWrapObjs);
    popupWrapIds.forEach(popupWrapId => {
      const element = popupWrapObjs[popupWrapId];
      if (isOutOfDocument(element)) {
        removePopupWrapById(popupWrapId);
      }
    });
  }

  function getAllPopupWrapElement () {
    return document.querySelectorAll('.h5player-popup-wrap')
  }

  function findPopupWrapWithElement (videoElement) {
    const result = [];
    const popupWrapIds = Object.keys(popupWrapObjs);
    popupWrapIds.forEach(popupWrapId => {
      const element = popupWrapObjs[popupWrapId];
      if (element === videoElement) {
        result.push(popupWrapId);
      }
    });

    return result.map(id => document.querySelector(`#${id}`))
  }

  const h5playerUI = {
    async init () {
      debug.log('h5playerUI init');

      /* 插入组件相关的样式 */
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    },

    disableGUITemporarily () {
      this.__disableGUITemporarily__ = true;
      const popupWrapIds = Object.keys(popupWrapObjs);
      popupWrapIds.forEach(popupWrapId => {
        removePopupWrapById(popupWrapId);
      });
    },

    getAllPopupWrapElement,
    findPopupWrapWithElement,
    cleanPopupWrap,
    removePopupWrapById,
    removePopupWrapByElement,

    popup (element, h5Player) {
      if (this.__disableGUITemporarily__ || element.__disableGUITemporarily__) { return false }

      /* 如果element元素的宽高比大于2.5，说明可能为视频背景，则也不显示popup */
      if (element.videoWidth / element.videoHeight > 2.5) { return false }

      /* 防止popup渲染过于频繁 */
      if (this.lastRenderedPopupTime && Date.now() - this.lastRenderedPopupTime < 100) {
        return false
      } else {
        this.lastRenderedPopupTime = Date.now();
      }

      /* 防止popup死循环渲染 */
      if (element.__popupRenderedCount__ && element.__popupRenderedCount__ > 15) {
        return false
      } else {
        element.__popupRenderedCount__ = element.__popupRenderedCount__ ? element.__popupRenderedCount__ + 1 : 1;
      }

      if (!element || !element.tagName || element.tagName.toLowerCase() !== 'video' || isOutOfDocument(element)) {
        return false
      }

      let popupWrapId = element.getAttribute('data-popup-wrap-id');
      if (!popupWrapId) {
        popupWrapId = 'h5player-popup-wrap-' + Math.random().toString(36).substr(2);
        element.setAttribute('data-popup-wrap-id', popupWrapId);
      }

      let popupWrap = document.querySelector(`#${popupWrapId}`);

      if (!popupWrapObjs[popupWrapId]) {
        popupWrapObjs[popupWrapId] = element;
      }

      if (popupWrap) {
        const popup = popupWrap.querySelector('sl-popup');
        popup && popup.reposition();
        return
      }

      const menuTemplate = createMenuTemplate(menuConfigPreprocess(menuConfig, element));
      popupWrap = parseHTML(`
      <div id="${popupWrapId}" class="h5player-popup-wrap">
        <sl-popup placement="top" sync="width">
        <div class="h5player-popup-content">
          <div class="h5p-logo-wrap">
            ${createLogoModTemplate()}
          </div>
          <div class="h5p-recommend-wrap">
            <div style="overflow:hidden">${createRecommendModTemplate(element)}</div>
          </div>
          <div class="h5p-menu-wrap">
            ${menuTemplate}
          </div>
        </div>
        </sl-popup>
      </div>
    `, document.body)[0];

      setTimeout(() => { registerRecommendModToggle(popupWrap.querySelector('.h5p-recommend-wrap')); }, 100);

      const popup = popupWrap.querySelector('sl-popup');

      /**
       * 判断popup初始化是否异常，油管上使用了custom-elements-es5-adapter.js，会导致popup异常，故有此判断
       * 例如：https://www.youtube.com/watch?v=jsb-5H_hy0M
       * 例如：https://www.youtube.com/watch?v=-2xb7rGCi2k
       */
      function checkPopupUpdateComplete () {
        if (!popup || !popup.updateComplete || !popup.updateComplete.then) {
          // debug.error('[h5playerUI][popup][updateComplete], 组件初始化异常', popup, element)
          element.removeAttribute('data-popup-wrap-id');
          popupWrap.remove();
          delete popupWrapObjs[popupWrapId];
          return false
        }

        return true
      }

      /* 确保popup已经被渲染 */
      customElements.whenDefined('sl-popup').then(() => {
        if (!checkPopupUpdateComplete()) {
          return false
        }

        popup.updateComplete.then(() => {
          popup.anchor = element;
          popup.distance = -48;
          popup.active = true;
          setTimeout(() => { popup.reposition(); }, 600);
        });
      });

      /* 重新渲染h5p-action-mod对应的菜单，以便更新菜单状态 */
      function reRenderMenuMod () {
        const menuWrap = popupWrap.querySelector('.h5player-popup-content .h5p-menu-wrap');
        const actionMod = popupWrap.querySelector('.h5p-action-mod');
        if (menuWrap && actionMod) {
          menuWrap.removeChild(actionMod);

          const newMenuTemplate = createMenuTemplate(menuConfigPreprocess(menuConfig, element));
          parseHTML(newMenuTemplate, menuWrap);

          /* 图标加载失败时，移除图标元素 */
          const slIcons = popupWrap.querySelectorAll('sl-icon');
          slIcons && slIcons.forEach(slIcon => {
            slIcon.addEventListener('sl-error', (event) => {
              const parent = event.target.parentElement;
              event.target.remove();

              /* 改为只显示文字标题 */
              if (parent.getAttribute('data-title')) {
                parent.innerText = parent.getAttribute('data-title');
              }
            }, { once: true });
          });

          // debug.log('[h5playerUI][popup][reRenderMenuMod]')
        }
      }

      /* 油管首次渲染会莫名其妙的出错，所以此处延迟一段时间重新渲染一次菜单 */
      setTimeout(() => { reRenderMenuMod(); }, 400);

      /* 重新渲染h5p-recommend-mod对应的推荐模块，如果位置不够则对隐藏该模块 */
      function reRenderRecommendMod () {
        const recommendWrap = popupWrap.querySelector('.h5player-popup-content .h5p-recommend-wrap');
        const recommendMod = popupWrap.querySelector('.h5player-popup-content .h5p-recommend-wrap>div');
        if (recommendWrap && recommendMod) {
          recommendWrap.removeChild(recommendMod);

          const newRecommendModTemplate = `<div style="overflow:hidden">${createRecommendModTemplate(element)}</div>`;
          parseHTML(newRecommendModTemplate, recommendWrap);

          registerRecommendModToggle(recommendWrap, true);
          // debug.log('[h5playerUI][popup][reRenderRecommendMod]')
        }
      }

      const activeClass = 'h5player-popup-active';
      const fullActiveClass = 'h5player-popup-full-active';
      const alwaysShowUIBar = configManager.getGlobalStorage('ui.alwaysShow');

      /**
       * 鼠标移动到popupWrap上时增加fullActiveClass的样式类，移出一段时间后再移除fullActiveClass的样式类
       * 用于防止鼠标移动到popupWrap上时popupWrap被快速隐藏，以提示操作体验
       */
      let mouseleaveTimer = null;
      popupWrap.addEventListener('mouseenter', () => {
        /* 元素比例异常，不显示popup */
        if (element.videoWidth / element.videoHeight > 2.5) {
          element.__disableGUITemporarily__ = true;
          removePopupWrapByElement(element);
          return false
        }

        clearTimeout(mouseleaveTimer);
        if (isOutOfDocument(element)) {
          popupWrap.classList.remove(fullActiveClass);
        } else {
          popupWrap.classList.add(fullActiveClass);
        }
        popup.reposition();
      });
      popupWrap.addEventListener('mouseleave', () => {
        clearTimeout(mouseleaveTimer);

        if (isOutOfDocument(element)) {
          popupWrap.classList.remove(fullActiveClass);
        } else {
          mouseleaveTimer = setTimeout(() => {
            !alwaysShowUIBar && !element.paused && popupWrap.classList.remove(activeClass);
            !alwaysShowUIBar && !element.paused && popupWrap.classList.remove(fullActiveClass);

            /* 关闭popupWrap中的所有sl-dropdown */
            const dropdowns = popupWrap.querySelectorAll('sl-dropdown');
            dropdowns.forEach(dropdown => {
              dropdown._open_ = false;
              dropdown.open = false;
            });

            reRenderMenuMod();
          }, 500);
        }
      });

      // let lastOpenDropdownTime = Date.now()
      async function openDropdown (event) {
        // if (Date.now() - lastOpenDropdownTime < 100) { return false }
        // lastOpenDropdownTime = Date.now()

        const target = event.target;

        const actionBtnClass = 'h5p-action-btn';
        if (!(target.classList.contains(actionBtnClass) || target.parentElement.classList.contains(actionBtnClass))) {
          return false
        }

        const dropdowns = popupWrap.querySelectorAll('sl-dropdown');
        const curDropdown = target.parentElement.tagName.toLowerCase() === 'sl-dropdown' ? target.parentElement : target.parentElement.parentElement;
        const isDropdownDom = curDropdown && curDropdown.tagName.toLowerCase() === 'sl-dropdown';

        if (!isDropdownDom) {
          dropdowns.forEach(dropdown => {
            dropdown.open = false;
            dropdown._open_ = false;
          });
          return false
        }

        dropdowns.forEach(async (dropdown) => {
          if (dropdown !== curDropdown) {
            dropdown._open_ = false;
            await dropdown.hide();
          }
        });

        if (event.type === 'mousemove') {
          curDropdown._open_ = true;
          await curDropdown.show();
          return false
        }

        if (!curDropdown._open_) {
          await curDropdown.show();
          curDropdown._open_ = true;

          curDropdown.addEventListener('sl-after-hide', () => {
            curDropdown._open_ = false;
          }, { once: true });
        } else {
          await curDropdown.hide();
          curDropdown._open_ = false;

          curDropdown.addEventListener('sl-after-show', () => {
            curDropdown._open_ = true;
          }, { once: true });
        }
      }

      /* 移动端下如果注册了mousemove会导致click没法触发，或者导致事件相互干扰，没法唤起sl-dropdown */
      if (!device.isMobile()) {
        /* 鼠标在popupWrap上移动时，如果检测到isOutOfDocument(element)也移除fullActiveClass的样式类，注意需加上debounce */
        let lastCheckIsOutOfDocumentTime = Date.now();
        popupWrap.addEventListener('mousemove', (event) => {
          const now = Date.now();
          if (now - lastCheckIsOutOfDocumentTime > 100) {
            lastCheckIsOutOfDocumentTime = now;
            if (isOutOfDocument(element)) {
              clearTimeout(mouseleaveTimer);
              popupWrap.classList.remove(fullActiveClass);
            } else {
              popup.reposition();
            }
          }

          openDropdown(event);
        });
      }

      popupWrap.addEventListener('click', (event) => {
        openDropdown(event);
        menuActionHandler({
          event,
          videoElement: element,
          h5Player,
          h5playerUI: this,
          popup,
          actionCallback: (action, args) => {
            reRenderMenuMod();
          }
        });
      });

      observeVisibility((entry, observer) => {
        let activeStatus = false;
        if (entry) {
          if (!isOutOfDocument(element)) {
            activeStatus = true;
          }

          if (element && element.paused && !isOutOfDocument(element)) {
            if (element.currentTime && element.currentTime > 1.5) {
              popupWrap.classList.add(activeClass);
            }
          } else {
            if (alwaysShowUIBar) {
              popupWrap.classList.add(activeClass);
              popupWrap.classList.add(fullActiveClass);
            } else {
              popupWrap.classList.remove(activeClass);
              popupWrap.classList.remove(fullActiveClass);
            }
          }
        } else {
          activeStatus = false;
          popupWrap.classList.remove(activeClass);
          popupWrap.classList.remove(fullActiveClass);
        }

        if (!checkPopupUpdateComplete()) { return false }

        popup.updateComplete.then(() => {
          popup.active = activeStatus;
          popup.reposition();
        });
      }, element);

      popup.oldRect = element.getBoundingClientRect();
      popup.addEventListener('sl-reposition', () => {
        if (isOutOfDocument(element)) {
          popup.active = false;
          popupWrap.classList.remove(activeClass);
          popupWrap.classList.remove(fullActiveClass);
        } else {
          const newRect = element.getBoundingClientRect();
          if (newRect.width !== popup.oldRect.width) {
            popup.oldRect = newRect;
            reRenderMenuMod();
            reRenderRecommendMod();
          }
        }
      });

      /* element切换播放状态时，如果是播放状态，则隐藏popup，否则显示popup */
      element.addEventListener('play', () => {
        if (alwaysShowUIBar) {
          popupWrap.classList.add(activeClass);
          popupWrap.classList.add(fullActiveClass);
        } else {
          popupWrap.classList.remove(activeClass);
          popupWrap.classList.remove(fullActiveClass);
        }

        if (isOutOfDocument(element)) {
          popup.active = false;
        } else {
          popup.active = true;
        }
        popup.reposition();
        cleanPopupWrap();

        reRenderMenuMod();
      });

      element.addEventListener('pause', () => {
        reRenderMenuMod();

        if (alwaysShowUIBar) {
          popupWrap.classList.add(activeClass);
          popupWrap.classList.add(fullActiveClass);
        } else {
          if (element.currentTime && element.currentTime > 1.5) {
            popupWrap.classList.add(activeClass);
          }
        }

        if (isOutOfDocument(element)) {
          popup.active = false;
        } else {
          popup.active = true;
        }

        popup.reposition();
        cleanPopupWrap();
      });

      /* element的播放进度发生变化时，执行一次popup.reposition() */
      let lastTimeupdateTime = Date.now();
      element.addEventListener('timeupdate', () => {
        const now = Date.now();
        if (!isOutOfDocument(element) && now - lastTimeupdateTime > 400) {
          lastTimeupdateTime = now;
          popup.reposition();
        }
      });

      /* 尝试清除popupWrapObjs中的无效元素 */
      cleanPopupWrap();

      // debug.log('[h5playerUI][popup]', popup, popupWrap, element)
    }
  };

  return h5playerUI;

})();return h5playerUI};

/* 定义支持哪些媒体标签 */
// const supportMediaTags = ['video', 'bwp-video', 'audio']
const supportMediaTags = ['video', 'bwp-video'];

let TCC = null;
const h5Player = {
  version,
  mediaCore,
  mediaPlusApi: null,
  mediaSource,
  configManager,
  /* 提示文本的字号 */
  fontSize: 12,
  enable: true,
  globalMode: true,
  playerInstance: null,
  scale: 1,
  translate: {
    x: 0,
    y: 0
  },
  rotate: 0,

  /* 水平镜像翻转, 0 或 180 */
  rotateY: 0,
  /* 垂直镜像翻转, 0 或 180 */
  rotateX: 0,

  defaultTransform: {
    scale: 1,
    translate: {
      x: 0,
      y: 0
    },
    rotate: 0,
    rotateY: 0,
    rotateX: 0
  },

  /* 存储旧的Transform值 */
  historyTransform: {},

  playbackRate: configManager.get('media.playbackRate'),
  volume: configManager.get('media.volume'),
  lastPlaybackRate: configManager.get('media.lastPlaybackRate'),
  /* 快进快退步长 */
  skipStep: 5,

  /* 监听鼠标活动的观察对象 */
  mouseObserver: new MouseObserver(),

  disableHotkeysTemporarily () {
    this.__disableHotkeysTemporarily__ = true;
  },
  enableHotkeys () {
    this.__disableHotkeysTemporarily__ = false;
  },
  toggleHotkeys () {
    const confirm = window.confirm(this.__disableHotkeysTemporarily__ ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys'));
    if (confirm) {
      this.__disableHotkeysTemporarily__ = !this.__disableHotkeysTemporarily__;
    }
  },

  debuggerNow () {
    if (debug.isDebugMode()) {
      const script = document.createElement('script');
      script.innerText = 'debugger';
      document.body.appendChild(script);
    }
  },

  /* 关闭当前视频实例的UI界面，以便消除UI界面对其他元素遮挡等相关影响 */
  disableCurrentInstanceGUI () {
    const t = this;
    const player = t.player();
    if (player && t.UI && t.UI.removePopupWrapByElement) {
      player.__disableGUITemporarily__ = true;
      t.UI.removePopupWrapByElement(player);
    }
  },

  /* 获取当前播放器的实例 */
  player: function () {
    const t = this;
    let playerInstance = t.playerInstance;

    if (!playerInstance) {
      const mediaList = t.getPlayerList();
      if (mediaList.length) {
        playerInstance = mediaList[mediaList.length - 1];
        t.playerInstance = playerInstance;
        t.initPlayerInstance(mediaList.length === 1);
      }
    }

    if (playerInstance && !t.mediaPlusApi) {
      t.mediaPlusApi = mediaCore.mediaPlus(playerInstance);
    }

    return playerInstance
  },

  isAudioInstance () {
    return isAudioElement(this.player())
  },

  /* 每个网页可能存在的多个video播放器 */
  getPlayerList: function () {
    const list = mediaCore.mediaElementList || [];

    function findPlayer (context) {
      supportMediaTags.forEach(tagName => {
        context.querySelectorAll(tagName).forEach(function (player) {
          if (player.tagName.toLowerCase() === 'bwp-video') {
            /* 将B站的BWP-VIDEO标识为HTMLVideoElement */
            player.HTMLVideoElement = true;
          }

          if (isMediaElement(player) && !list.includes(player)) {
            list.push(player);
          }
        });
      });
    }

    findPlayer(document);

    // 被封装在 shadow dom 里面的video
    if (window._shadowDomList_) {
      window._shadowDomList_.forEach(function (shadowRoot) {
        findPlayer(shadowRoot);
      });
    }

    return list
  },

  getPlayerWrapDom: function () {
    const t = this;
    const player = t.player();
    if (!player) return

    let wrapDom = null;
    const playerBox = player.getBoundingClientRect();
    eachParentNode(player, function (parent) {
      if (parent === document || !parent.getBoundingClientRect) return
      const parentBox = parent.getBoundingClientRect();
      if (parentBox.width && parentBox.height) {
        if (parentBox.width === playerBox.width && parentBox.height === playerBox.height) {
          wrapDom = parent;
        }
      }
    });
    return wrapDom
  },

  /* 挂载到页面上的window对象，用于调试 */
  async mountToGlobal () {
    try {
      const pageWindow = await getPageWindow();
      if (pageWindow) {
        pageWindow._h5Player = h5Player || 'null';
        if (window.top !== window) {
          pageWindow._h5PlayerInFrame = h5Player || 'null';
        }
        pageWindow._window = window || '';
        debug.log('h5Player对象已成功挂载到全局');
      }
    } catch (e) {
      debug.error(e);
    }
  },

  /**
   * 初始化播放器实例
   * @param isSingle 是否为单实例video标签
   */
  initPlayerInstance (isSingle) {
    const t = this;
    if (!t.playerInstance) return

    const player = t.playerInstance;

    t.mediaPlusApi = mediaCore.mediaPlus(player);

    t.initPlaybackRate();
    t.isFoucs();
    t.proxyPlayerInstance(player);

    t.unLockPlaybackRate();
    t.setPlaybackRate();
    t.lockPlaybackRate(1000);

    /* 增加通用全屏，网页全屏api */
    player._fullScreen_ = new FullScreen(player);
    player._fullPageScreen_ = new FullScreen(player, true);

    /* 注册热键运行器 */
    t.registerHotkeysRunner();

    if (!player._hasCanplayEvent_) {
      player.addEventListener('canplay', function (event) {
        t.initAutoPlay(player);
      });
      player._hasCanplayEvent_ = true;
    }

    /* 播放的时候进行相关同步操作 */
    if (!player._hasPlayerInitEvent_) {
      let setPlaybackRateOnPlayingCount = 0;
      player.addEventListener('playing', function (event) {
        t.unLockPlaybackRate();
        t.setPlaybackRate(null, true);
        t.lockPlaybackRate(1000);

        /* 同步播放音量 */
        if (configManager.get('enhance.blockSetVolume') === true && event.target.muted === false) {
          t.setVolume(configManager.getGlobalStorage('media.volume'), true);
        }

        /* 禁止默认的进度控制 */
        if (configManager.get('enhance.blockSetCurrentTime') === true) {
          t.lockCurrentTime();
        }

        /* 恢复播放进度 */
        t.setPlayProgress(player);

        if (setPlaybackRateOnPlayingCount === 0) {
          /* 同步之前设定的播放速度，音量等 */
          t.unLockPlaybackRate();
          t.setPlaybackRate();
          t.lockPlaybackRate(1000);

          /* 启动播放进度记录 */
          setTimeout(() => {
            t.playProgressRecorder(player);
          }, 2000);
        } else {
          t.unLockPlaybackRate();
          t.setPlaybackRate(null, true);
          t.lockPlaybackRate(1000);
        }
        setPlaybackRateOnPlayingCount += 1;
      });

      player._hasPlayerInitEvent_ = true;
    }

    /* 进行自定义初始化操作 */
    const taskConf = TCC.getTaskConfig();
    if (taskConf.init) {
      TCC.doTask('init', player);
    }

    const needInitEvent = !player.__registeredInitEvent__;

    /* 注册鼠标响应事件 */
    needInitEvent && t.mouseObserver.on(player, 'click', function (event, offset, target) {
      // debug.log('捕捉到鼠标点击事件：', event, offset, target)
    });

    /* 画中画事件监听 */
    needInitEvent && player.addEventListener('enterpictureinpicture', () => {
      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: true
      });
      debug.log('enterpictureinpicture', player);
    });
    needInitEvent && player.addEventListener('leavepictureinpicture', () => {
      t.leavepictureinpictureTime = Date.now();

      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: false
      });
      debug.log('leavepictureinpicture', player);
    });

    // if (debug.isDebugMode()) {}

    /* 记录player使用过的src */
    function srcRecord (player) {
      const src = player.currentSrc || player.src;
      if (!src) { return }

      player.srcList = player.srcList || [src];
      if (!player.srcList.includes(src)) {
        player.srcList.push(src);
      }
    }

    function updataBufferedTime (player) {
      /* 随时记录缓存数据到了哪个时间节点 */
      if (player.buffered.length > 0) {
        const bufferedTime = player.buffered.end(player.buffered.length - 1);
        player.bufferedTime = bufferedTime;
      }

      if (t.autoGotoBufferedTime && player.bufferedTime && t.player() === player && player.bufferedTime < player.duration - 1 && player.currentTime < player.bufferedTime - 1) {
        t.setCurrentTime(player.bufferedTime);
      }
    }

    needInitEvent && player.addEventListener('loadeddata', function () {
      debug.log(`[player][loadeddata] ${player.src} video duration: ${player.duration} video dom:`, player);
      srcRecord(player);
    });
    needInitEvent && player.addEventListener('durationchange', function () {
      debug.log(`[player][durationchange] ${player.duration}`);
      srcRecord(player);
    });

    needInitEvent && player.addEventListener('loadstart', function () {
      debug.log('[player][loadstart]', player.currentSrc, player.src);
      srcRecord(player);
    });

    /* 注册UI界面 */
    t.UI && t.UI.popup && t.UI.popup(player, t);

    /* 在播放或暂停时，也尝试注册UI界面，这样即使popup被意外删除，也还是能正常再次创建回来 */
    needInitEvent && player.addEventListener('play', function () {
      t.UI && t.UI.popup && t.UI.popup(player, t);
    });
    needInitEvent && player.addEventListener('pause', function () {
      t.UI && t.UI.popup && t.UI.popup(player, t);
    });
    let lastRegisterUIPopupTime = Date.now();
    let tryRegisterUIPopupCount = 0;
    needInitEvent && player.addEventListener('timeupdate', function () {
      // updataBufferedTime(player)

      if (Date.now() - lastRegisterUIPopupTime > 800 && tryRegisterUIPopupCount < 60) {
        lastRegisterUIPopupTime = Date.now();
        tryRegisterUIPopupCount += 1;
        t.UI && t.UI.popup && t.UI.popup(player, t);
      }

      srcRecord(player);
      mediaSource.connectMediaSourceWithMediaElement(player);
    });

    let lastCleanMediaSourceDataTime = Date.now();
    needInitEvent && player.addEventListener('progress', () => {
      updataBufferedTime(player);
      mediaSource.connectMediaSourceWithMediaElement(player);

      if (Date.now() - lastCleanMediaSourceDataTime > 1000 * 10) {
        lastCleanMediaSourceDataTime = Date.now();
        mediaSource.cleanMediaSourceData();
      }
    });

    needInitEvent && player.addEventListener('durationchange', function () {
      lastRegisterUIPopupTime = Date.now();
      tryRegisterUIPopupCount = 0;
      t.UI && t.UI.popup && t.UI.popup(player, t);
    });

    player.__registeredInitEvent__ = true;
  },

  registerHotkeysRunner () {
    if (!this.hotkeysRunner) {
      this.hotkeysRunner = new HotkeysRunner(configManager.get('hotkeys'));

      if (isInIframe() && !isInCrossOriginFrame()) {
        /* 让顶层页面也可以监听组合键的触发 */
        this.hotkeysRunner.setCombinationKeysMonitor(window.top);
      }
    }
  },

  /* 刚关闭画中画不久，此段时间内允许跨TAB控制 */
  isLeavepictureinpictureAwhile () {
    const t = this;
    return t.leavepictureinpictureTime && (Date.now() - t.leavepictureinpictureTime < 1000 * 10)
  },

  /**
   * 对播放器实例的方法或属性进行代理
   * @param player
   */
  proxyPlayerInstance (player) {
    if (!player) return

    /* 要代理的方法或属性列表 */
    const proxyList = [
      'play',
      'pause'
    ];

    proxyList.forEach(key => {
      const originKey = 'origin_' + key;
      if (Reflect.has(player, key) && !Reflect.has(player, originKey)) {
        player[originKey] = player[key];
        const proxy = new Proxy(player[key], {
          apply (target, ctx, args) {
            // debug.log(key + '被调用')

            /* 处理挂起逻辑 */
            const hangUpInfo = player._hangUpInfo_ || {};
            const hangUpDetail = hangUpInfo[key] || hangUpInfo['hangUp_' + key];
            const needHangUp = hangUpDetail && hangUpDetail.timeout >= Date.now();
            if (needHangUp) {
              debug.log(key + '已被挂起，本次调用将被忽略');
              return false
            }

            return target.apply(ctx || player, args)
          }
        });

        player[key] = proxy;
      }
    });

    if (!player._hangUp_) {
      player._hangUpInfo_ = {};
      /**
       * 挂起player某个函数的调用
       * @param name {String} -必选 player方法或属性名，名字写对外，还须要该方法或属性被代理了才能进行挂起，否则这将是个无效的调用
       * @param timeout {Number} -可选 挂起多长时间，默认200ms
       * @private
       */
      player._hangUp_ = function (name, timeout) {
        timeout = Number(timeout) || 200;
        // debug.log('_hangUp_', name, timeout)
        player._hangUpInfo_[name] = {
          timeout: Date.now() + timeout
        };
      };

      /* 取消挂起 */
      player._unHangUp_ = function (name) {
        if (player._hangUpInfo_ && player._hangUpInfo_[name]) {
          player._hangUpInfo_[name].timeout = Date.now() - 1;
        }
      };
    }
  },

  /**
   * 初始化自动播放逻辑
   * 必须是配置了自动播放按钮选择器得的才会进行自动播放
   */
  initAutoPlay: function (p) {
    const t = this;
    const player = p || t.player();
    const taskConf = TCC.getTaskConfig();

    /* 注册开启禁止自动播放的控制菜单 */
    if (taskConf.autoPlay) {
      if (configManager.getLocalStorage('media.autoPlay') === null) {
        configManager.setLocalStorage('media.autoPlay', true);
      }

      addMenu({
        title: () => configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'),
        fn: () => {
          const confirm = window.confirm(configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'));
          if (confirm) {
            const autoPlay = configManager.getLocalStorage('media.autoPlay');
            if (autoPlay === null) {
              alert(i18n.t('configFail'));
            } else {
              configManager.setLocalStorage('media.autoPlay', !autoPlay);
            }
          }
        }
      });
    }

    // 在轮询重试的时候，如果实例变了，或处于隐藏页面中则不进行自动播放操作
    if (!configManager.get('media.autoPlay') || (!p && t.hasInitAutoPlay) || !player || (p && p !== t.player()) || document.hidden) {
      return false
    }

    /**
     * 元素不在可视范围，不允许进行初始化自动播放逻辑
     * 由于iframe下元素的可视范围判断不准确，所以iframe下也禁止初始化自动播放逻辑
     * TODO 待优化
     */
    if (!isInViewPort(player) || isInIframe()) {
      return false
    }

    if (!taskConf.autoPlay) {
      return false
    }

    t.hasInitAutoPlay = true;

    if (player && taskConf.autoPlay && player.paused) {
      TCC.doTask('autoPlay');
      if (player.paused) {
        // 轮询重试
        if (!player._initAutoPlayCount_) {
          player._initAutoPlayCount_ = 1;
        }
        player._initAutoPlayCount_ += 1;
        if (player._initAutoPlayCount_ >= 10) {
          return false
        }
        setTimeout(function () {
          t.initAutoPlay(player);
        }, 200);
      }
    }
  },

  printPlayerInfo (p) {
    const t = this;
    const player = p || t.player();

    const info = {
      curPlayer: player,
      srcList: player.srcList,
      h5player: t,
      h5playerUI: t.UI,
      mediaSource,
      window
    };

    if (t.UI && t.UI.findPopupWrapWithElement) {
      info.curlPopupWrap = t.UI.findPopupWrapWithElement(player);
      info.allPopupWrap = t.UI.getAllPopupWrapElement();
    }

    debug.info('[playerInfo]', info);
  },

  /* 设置视频全屏 */
  setFullScreen () {
    const player = this.player();
    const isDo = TCC.doTask('fullScreen');
    if (!isDo && player && player._fullScreen_) {
      player._fullScreen_.toggle();
    }
  },

  /* 设置页面全屏 */
  setWebFullScreen: function () {
    const t = this;
    const player = t.player();
    const isDo = TCC.doTask('webFullScreen');
    if (!isDo && player && player._fullPageScreen_) {
      player._fullPageScreen_.toggle();
    }
  },

  initPlaybackRate () {
    const t = this;
    t.playbackRate = t.getPlaybackRate();
  },

  playbackRateInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* 未初始化播放实列前，不知道倍速是多少，所以设置为-1 */
    value: -1
  },

  getPlaybackRate () {
    let playbackRate = configManager.get('media.playbackRate') || this.playbackRate;
    if (isInIframe()) {
      const globalPlaybackRate = configManager.getGlobalStorage('media.playbackRate');
      if (globalPlaybackRate) {
        playbackRate = globalPlaybackRate;
      }
    }
    return Number(Number(playbackRate).toFixed(1))
  },

  /* 锁定playbackRate，禁止调速 */
  lockPlaybackRate: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetPlaybackRate') === true) {
        // 如果配置了要锁死外部对playbackRate的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockPlaybackRate(timeout);
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() + timeout;
  },

  unLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockPlaybackRate();
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() - 1;
  },

  isLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockPlaybackRate()
    }

    return Date.now() - this.playbackRateInfo.lockTimeout < 0
  },

  /* 解决高低倍速频繁切换后，音画不同步的问题 */
  fixPlaybackRate: function (oldPlaybackRate) {
    const t = this;
    const curPlaybackRate = t.getPlaybackRate();

    if (Math.abs(curPlaybackRate - oldPlaybackRate) > 1) {
      t.setCurrentTimeUp(0.1, true);
    }
  },

  /* 设置播放速度 */
  setPlaybackRate: function (num, notips, duplicate, skipLock) {
    const t = this;
    const player = t.player();

    if (!skipLock && t.isLockPlaybackRate()) {
      debug.info('调速能力已被锁定');
      return false
    }

    if (TCC.doTask('playbackRate')) {
      // debug.log('[TCC][playbackRate]', 'suc')
      return
    }

    if (!player) return

    const oldPlaybackRate = t.getPlaybackRate();

    let curPlaybackRate;
    if (num) {
      num = Number(num);
      if (Number.isNaN(num)) {
        debug.error('h5player: 播放速度转换出错');
        return false
      }

      if (num <= 0) {
        num = 0.1;
      } else if (num > 16) {
        num = 16;
      }

      num = Number(num.toFixed(1));
      curPlaybackRate = num;
    } else {
      curPlaybackRate = t.getPlaybackRate();
    }

    /* 记录播放速度的信息 */
    t.playbackRate = curPlaybackRate;
    if (isInIframe()) {
      configManager.setGlobalStorage('media.playbackRate', curPlaybackRate);
    } else {
      configManager.set('media.playbackRate', curPlaybackRate);
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setPlaybackRate(curPlaybackRate);

      if (!(!num && curPlaybackRate === 1) && !notips) {
        t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);
      }

      /* 将播放倍速同步到全部媒体元素 */
      const mediaList = t.getPlayerList();
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media);
          mediaPlusApi && mediaPlusApi.setPlaybackRate(curPlaybackRate);
        }
      });

      t.fixPlaybackRate(oldPlaybackRate);
      return true
    }

    delete player.playbackRate;
    player.playbackRate = curPlaybackRate;

    t.playbackRateInfo.time = Date.now();
    t.playbackRateInfo.value = curPlaybackRate;
    player._setPlaybackRate_ = {
      time: Date.now(),
      value: curPlaybackRate
    };

    try {
      const playbackRateDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate');
      originalMethods.Object.defineProperty.call(Object, player, 'playbackRate', {
        configurable: true,
        get: function () {
          /**
           * 在油管，如果返回的是playbackRateDescriptor.get.apply(player, arguments)，调速会出现波动和异常
           * 暂时不知是什么原因，所以还是先返回curPlaybackRate
           */
          return curPlaybackRate || playbackRateDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number') {
            return false
          }

          /* 有些网站是通过定时器不断刷playbackRate的，所以通过计时器减少不必要的信息输出 */
          !Number.isInteger(player._blockSetPlaybackRateTips_) && (player._blockSetPlaybackRateTips_ = 0);

          if (TCC.doTask('blockSetPlaybackRate')) {
            player._blockSetPlaybackRateTips_++;
            player._blockSetPlaybackRateTips_ < 3 && debug.info('调速能力已被自定义的调速任务进行处理');
            return false
          }

          if (configManager.get('enhance.blockSetPlaybackRate') === true) {
            player._blockSetPlaybackRateTips_++;
            player._blockSetPlaybackRateTips_ < 3 && debug.info('调速能力已被blockSetPlaybackRate锁定');
            return false
          } else {
            t.setPlaybackRate(val);
          }
        }
      });
    } catch (e) {
      debug.error('解锁playbackRate失败', e);
    }

    /* 本身处于1倍播放速度的时候不再提示 */
    if (!num && curPlaybackRate === 1) {
      return true
    } else {
      !notips && t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);
    }

    /**
     * 重复触发最后一次倍速的设定
     * 解决YouTube快速调速时并不生效，要停顿下来再调节一下才能生效的问题
     */
    if (!duplicate && configManager.get('enhance.blockSetPlaybackRate') === true) {
      clearTimeout(t._setPlaybackRateDuplicate_);
      clearTimeout(t._setPlaybackRateDuplicate2_);
      const duplicatePlaybackRate = () => {
        t.unLockPlaybackRate();
        t.setPlaybackRate(curPlaybackRate, true, true);
        t.lockPlaybackRate(1000);
      };
      t._setPlaybackRateDuplicate_ = setTimeout(duplicatePlaybackRate, 600);
      /* 600ms时重新触发无效的话，再来个1200ms后触发，如果是1200ms才生效，则调速生效的延迟已经非常明显了 */
      t._setPlaybackRateDuplicate2_ = setTimeout(duplicatePlaybackRate, 1200);
    }

    t.fixPlaybackRate(oldPlaybackRate);
  },

  /**
   * 加强版的倍速调节，当短时间内设置同一个值时，会认为需更快的跳速能力
   * 则会对调速的数值进行叠加放大，从而达到快速跳跃地进行倍速调节的目的
   * 可用于视频广告的高速快进，片头片尾的速看等场景
   * @param {*} num
   */
  setPlaybackRatePlus: function (num) {
    num = Number(num);
    if (!num || Number.isNaN(num)) {
      return false
    }

    const t = this;
    t.playbackRatePlusInfo = t.playbackRatePlusInfo || {};
    t.playbackRatePlusInfo[num] = t.playbackRatePlusInfo[num] || {
      time: Date.now() - 1000,
      value: num
    };

    if (Date.now() - t.playbackRatePlusInfo[num].time < 300) {
      t.playbackRatePlusInfo[num].value = t.playbackRatePlusInfo[num].value + num;
    } else {
      t.playbackRatePlusInfo[num].value = num;
    }

    t.playbackRatePlusInfo[num].time = Date.now();

    t.unLockPlaybackRate();
    t.setPlaybackRate(t.playbackRatePlusInfo[num].value);
    t.lockPlaybackRate(1000);
  },

  /* 恢复播放速度，还原到1倍速度、或恢复到上次的倍速 */
  resetPlaybackRate: function (player) {
    const t = this;
    player = player || t.player();

    t.unLockPlaybackRate();

    const oldPlaybackRate = Number(player.playbackRate);
    const playbackRate = oldPlaybackRate === 1 ? t.lastPlaybackRate : 1;
    if (oldPlaybackRate !== 1) {
      t.lastPlaybackRate = oldPlaybackRate;
      configManager.setLocalStorage('media.lastPlaybackRate', oldPlaybackRate);
    }

    t.setPlaybackRate(playbackRate);

    /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
    t.lockPlaybackRate(1000);
  },

  /* 提升播放速率 */
  setPlaybackRateUp (num) {
    num = numUp(num) || 0.1;
    if (this.player()) {
      this.unLockPlaybackRate();
      this.setPlaybackRate(this.player().playbackRate + num);

      /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
      this.lockPlaybackRate(1000);
    }
  },

  /* 降低播放速率 */
  setPlaybackRateDown (num) {
    num = numDown(num) || -0.1;
    if (this.player()) {
      this.unLockPlaybackRate();
      this.setPlaybackRate(this.player().playbackRate + num);

      /* 防止外部调速逻辑的干扰，所以锁定一段时间 */
      this.lockPlaybackRate(1000);
    }
  },

  /**
   * 锁定播放进度的控制逻辑
   * 跟锁定音量和倍速不一样，播放进度是跟视频实例有密切相关的，所以其锁定信息必须依附于播放实例
   */
  lockCurrentTime: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetCurrentTime') === true) {
        // 如果配置了要锁死外部对currentTime的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockCurrentTime(timeout);
      return true
    }

    const player = this.player();
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {};
      player.currentTimeInfo.lockTimeout = Date.now() + timeout;
    }
  },

  unLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockCurrentTime();
      return true
    }

    const player = this.player();
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {};
      player.currentTimeInfo.lockTimeout = Date.now() - 1;
    }
  },

  isLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockCurrentTime()
    }

    const player = this.player();
    if (player && player.currentTimeInfo && player.currentTimeInfo.lockTimeout) {
      return Date.now() - player.currentTimeInfo.lockTimeout < 0
    } else {
      return false
    }
  },

  /* 设置播放进度 */
  setCurrentTime: function (num) {
    if (!num && num !== 0) return
    num = Number(num);
    const _num = Math.abs(Number(num.toFixed(1)));

    const t = this;
    const player = t.player();

    if (t.isLockCurrentTime()) {
      return false
    }

    if (TCC.doTask('currentTime')) {
      // debug.log('[TCC][currentTime]', 'suc')
      return
    }

    if (this.mediaPlusApi) {
      this.mediaPlusApi.setCurrentTime(_num);
      return true
    }

    delete player.currentTime;
    player.currentTime = _num;
    player.currentTimeInfo = player.currentTimeInfo || {};
    player.currentTimeInfo.time = Date.now();
    player.currentTimeInfo.value = _num;

    try {
      const currentTimeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime');
      originalMethods.Object.defineProperty.call(Object, player, 'currentTime', {
        configurable: true,
        enumerable: true,
        get: function () {
          return currentTimeDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number' || TCC.doTask('blockSetCurrentTime') || configManager.get('enhance.blockSetCurrentTime') === true) {
            return false
          }

          if (t.isLockCurrentTime()) {
            return false
          }

          player.currentTimeInfo.time = Date.now();
          player.currentTimeInfo.value = val;

          return currentTimeDescriptor.set.apply(player, arguments)
        }
      });
    } catch (e) {
      debug.error('解锁currentTime失败', e);
    }
  },

  setCurrentTimeUp (num, hideTips) {
    num = Number(numUp(num) || this.skipStep);

    if (TCC.doTask('addCurrentTime')) ; else {
      if (this.player()) {
        this.unLockCurrentTime();
        this.setCurrentTime(this.player().currentTime + num);

        /* 防止外部进度控制逻辑的干扰，所以锁定一段时间 */
        this.lockCurrentTime(500);

        if (!hideTips) {
          this.tips(i18n.t('tipsMsg.forward') + num + i18n.t('tipsMsg.seconds'));
        }
      }
    }
  },

  setCurrentTimeDown (num) {
    num = Number(numDown(num) || -this.skipStep);

    if (TCC.doTask('subtractCurrentTime')) ; else {
      if (this.player()) {
        let currentTime = this.player().currentTime + num;
        if (currentTime < 1) {
          currentTime = 0;
        }

        this.unLockCurrentTime();
        this.setCurrentTime(currentTime);

        /* 防止外部进度控制逻辑的干扰，所以锁定一段时间 */
        this.lockCurrentTime(500);

        this.tips(i18n.t('tipsMsg.backward') + Math.abs(num) + i18n.t('tipsMsg.seconds'));
      }
    }
  },

  volumeInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* 未初始化播放实列前，不知道音量是多少，所以设置为-1 */
    value: -1
  },

  getVolume: function () {
    let volume = configManager.get('media.volume');
    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      const globalVolume = configManager.getGlobalStorage('media.volume');
      if (globalVolume !== null) {
        volume = globalVolume;
      }
    }
    return Number(Number(volume).toFixed(2))
  },

  /* 锁定音量，禁止调音 */
  lockVolume: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetVolume') === true) {
        // 如果配置了要锁死外部对voluem的操作，则直接给一个超大的值
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockVolume(timeout);
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() + timeout;
  },

  unLockVolume: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockVolume();
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() - 1;
  },

  isLockVolume: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockVolume()
    }

    return Date.now() - this.volumeInfo.lockTimeout < 0
  },

  /* 设置声音大小 */
  setVolume: function (num, notips, outerCall) {
    const t = this;
    const player = t.player();

    if (t.isLockVolume()) {
      return false
    }

    if (!num && num !== 0) {
      num = t.getVolume();
    }

    num = Number(num).toFixed(2);
    if (num < 0) {
      num = 0;
    }

    if (num > 1 && configManager.get('enhance.allowAcousticGain')) {
      num = Math.ceil(num);

      try {
        player._amp_ = player._amp_ || new MediaElementAmplifier(player);
      } catch (e) {
        num = 1;
        debug.error('媒体声音响度增益逻辑异常', e);
      }

      /* 限定增益的最大值 */
      if (num > 6) {
        num = 6;
      }

      if (!player._amp_ || !player._amp_.setLoudness) {
        num = 1;
      }
    } else if (num > 1) {
      num = 1;
    }

    /* 记录播放音量信息 */
    t.volume = num;

    /* 使用音量增益逻辑，增益音量不进行本地存储记录 */
    if (num > 1 && player._amp_ && player._amp_.setLoudness) {
      player._amp_.setLoudness(num);

      if (!outerCall) { player.muted = false; }

      !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(num * 100) + '%');
      return true
    }

    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      configManager.setGlobalStorage('media.volume', num);
    } else {
      configManager.setLocalStorage('media.volume', num);
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setVolume(num);

      /* 将播放音量同步到全部媒体元素 */
      const mediaList = t.getPlayerList();
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media);
          mediaPlusApi && mediaPlusApi.setVolume(num);
        }
      });
    } else {
      delete player.volume;
      player.volume = num;
      t.volumeInfo.time = Date.now();
      t.volumeInfo.value = num;

      try {
        const volumeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume');
        originalMethods.Object.defineProperty.call(Object, player, 'volume', {
          configurable: true,
          get: function () {
            return volumeDescriptor.get.apply(player, arguments)
          },
          set: function (val) {
            if (typeof val !== 'number' || val < 0) {
              return false
            }

            if (TCC.doTask('blockSetVolume') || configManager.get('enhance.blockSetVolume') === true) {
              return false
            } else {
              t.setVolume(val, false, true);
            }
          }
        });
      } catch (e) {
        debug.error('解锁volume失败', e);
      }
    }

    /* 调节音量的时候顺便把静音模式关闭 */
    if (!outerCall) { player.muted = false; }

    !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(player.volume * 100) + '%');
  },

  setVolumeUp (num) {
    num = numUp(num) || 0.2;
    const player = this.player();
    if (player) {
      this.unLockVolume();

      if (this.volume > 1 && player._amp_) {
        this.setVolume(this.volume + num);
      } else {
        this.setVolume(player.volume + num);
      }

      /* 防止外部调音逻辑的干扰，所以锁定一段时间 */
      this.lockVolume(500);
    }
  },

  setVolumeDown (num) {
    num = numDown(num) || -0.2;
    const player = this.player();
    if (player) {
      this.unLockVolume();

      if (this.volume > 1 && player._amp_) {
        this.setVolume(Math.floor(this.volume + num));
      } else {
        this.setVolume(player.volume + num);
      }

      /* 防止外部调音逻辑的干扰，所以锁定一段时间 */
      this.lockVolume(500);
    }
  },

  /* 采集Transform值的历史变更记录，以便后续进行还原 */
  collectTransformHistoryInfo () {
    const t = this;
    Object.keys(t.defaultTransform).forEach(key => {
      if (key === 'translate') {
        const translate = t.defaultTransform.translate;
        t.historyTransform.translate = t.historyTransform.translate || {};
        Object.keys(translate).forEach(subKey => {
          if (Number(t.translate[subKey]) !== t.defaultTransform.translate[subKey]) {
            t.historyTransform.translate[subKey] = t.translate[subKey];
          }
        });
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          t.historyTransform[key] = t[key];
        }
      }
    });
  },

  /* 判断h5Player下的Transform值是否跟默认的Transform值一致 */
  isSameAsDefaultTransform () {
    let result = true;
    const t = this;
    Object.keys(t.defaultTransform).forEach(key => {
      if (isObj$1(t.defaultTransform[key])) {
        Object.keys(t.defaultTransform[key]).forEach(subKey => {
          if (Number(t[key][subKey]) !== t.defaultTransform[key][subKey]) {
            result = false;
          }
        });
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          result = false;
        }
      }
    });
    return result
  },

  /* 设置视频画面的缩放与位移 */
  setTransform (notTips) {
    const t = this;
    const player = t.player();
    const scale = t.scale = Number(t.scale).toFixed(2);
    const translate = t.translate;

    const mirror = t.rotateX === 180 ? `rotateX(${t.rotateX}deg)` : (t.rotateY === 180 ? `rotateY(${t.rotateY}deg)` : '');
    player.style.transform = `scale(${scale}) translate(${translate.x}px, ${translate.y}px) rotate(${t.rotate}deg) ${mirror}`;

    let tipsMsg = i18n.t('tipsMsg.videozoom') + `${(scale * 100).toFixed(0)}%`;
    if (translate.x) {
      tipsMsg += ` ${i18n.t('tipsMsg.horizontal')}${t.translate.x}px`;
    }
    if (translate.y) {
      tipsMsg += ` ${i18n.t('tipsMsg.vertical')}${t.translate.y}px`;
    }

    if (notTips === true) ; else {
      t.collectTransformHistoryInfo();
      t.tips(tipsMsg);
    }

    /* 始终保持transform样式的正常 */
    if (!t._transformStateGuard_) {
      t._transformStateGuard_ = setInterval(() => {
        t.setTransform(true);
      }, 300);
    }
  },

  /* 视频画面旋转 90 度 */
  setRotate () {
    const t = this;
    t.rotate += 90;
    if (t.rotate % 360 === 0) t.rotate = 0;
    t.setTransform(true);
    t.tips(i18n.t('tipsMsg.imgrotate') + t.rotate + '°');
  },

  /* 设置镜像翻转 */
  setMirror (vertical = false) {
    const t = this;
    let tipsMsg = '';
    if (vertical) {
      t.rotateX = t.rotateX === 0 ? 180 : 0;
      tipsMsg += ` ${i18n.t('tipsMsg.verticalMirror')} ${t.rotateX}deg`;
    } else {
      t.rotateY = t.rotateY === 0 ? 180 : 0;
      tipsMsg += ` ${i18n.t('tipsMsg.horizontalMirror')} ${t.rotateY}deg`;
    }

    t.setTransform(true);
    t.tips(tipsMsg);
  },

  /* 缩放视频画面 */
  setScale (num) {
    if (Number.isNaN(this.scale) || Number.isNaN(num)) {
      this.scale = 1;
    } else {
      this.scale = num;
    }

    this.setTransform();
  },

  /* 视频放大 +0.1 */
  setScaleUp (num) {
    num = numUp(num) || 0.05;
    this.setScale(Number(this.scale) + num);
  },

  /* 视频缩小 -0.1 */
  setScaleDown (num) {
    num = numDown(num) || -0.05;
    this.setScale(Number(this.scale) + num);
  },

  /* 设置视频画面的位移属性 */
  setTranslate (x, y) {
    if (typeof x === 'number') {
      this.translate.x = x;
    }

    if (typeof y === 'number') {
      this.translate.y = y;
    }

    this.setTransform();
  },

  /* 视频画面向右平移 */
  setTranslateRight (num) {
    num = numUp(num) || 10;
    this.setTranslate(this.translate.x + num);
  },

  /* 视频画面向左平移 */
  setTranslateLeft (num) {
    num = numDown(num) || -10;
    this.setTranslate(this.translate.x + num);
  },

  /* 视频画面向上平移 */
  setTranslateUp (num) {
    num = numUp(num) || 10;
    this.setTranslate(null, this.translate.y - num);
  },

  /* 视频画面向下平移 */
  setTranslateDown (num) {
    num = numDown(num) || -10;
    this.setTranslate(null, this.translate.y - num);
  },

  resetTransform (notTips) {
    const t = this;

    if (t.isSameAsDefaultTransform() && Object.keys(t.historyTransform).length) {
      /* 还原成历史记录中的Transform值 */
      Object.keys(t.historyTransform).forEach(key => {
        if (isObj$1(t.historyTransform[key])) {
          Object.keys(t.historyTransform[key]).forEach(subKey => {
            t[key][subKey] = t.historyTransform[key][subKey];
          });
        } else {
          t[key] = t.historyTransform[key];
        }
      });
    } else {
      /* 还原成默认的Transform值 */
      const defaultTransform = clone(t.defaultTransform);
      Object.keys(defaultTransform).forEach(key => {
        t[key] = defaultTransform[key];
      });
    }

    t.setTransform(notTips);
  },

  /**
   * 定格帧画面
   * @param perFps {Number} -可选 默认 1，即定格到下一帧，如果是-1则为定格到上一帧
   */
  freezeFrame (perFps) {
    perFps = perFps || 1;
    const t = this;
    const player = t.player();

    /* 跳帧 */
    player.currentTime += Number(perFps / t.fps);

    /* 定格画面 */
    if (!player.paused) player.pause();

    /* 有些播放器发现画面所在位置变了会自动进行播放，所以此时需要对播放操作进行挂起 */
    player._hangUp_ && player._hangUp_('play', 400);

    if (perFps === 1) {
      t.tips(i18n.t('tipsMsg.nextframe'));
    } else if (perFps === -1) {
      t.tips(i18n.t('tipsMsg.previousframe'));
    } else {
      t.tips(i18n.t('tipsMsg.stopframe') + perFps);
    }
  },

  autoGotoBufferedTime: false,
  toggleAutoGotoBufferedTime () {
    const t = this;
    t.autoGotoBufferedTime = !t.autoGotoBufferedTime;
    t.tips(t.autoGotoBufferedTime ? i18n.t('autoGotoBufferedTime') : i18n.t('disableAutoGotoBufferedTime'));
  },

  /**
   * 切换画中画功能
   */
  togglePictureInPicture () {
    const player = this.player();
    if (window._isPictureInPicture_ && document.pictureInPictureElement) {
      document.exitPictureInPicture().then(() => {
        window._isPictureInPicture_ = null;
      }).catch((e) => {
        window._isPictureInPicture_ = null;
        debug.error('[togglePictureInPicture]', e);
      });
    } else {
      player.requestPictureInPicture && player.requestPictureInPicture().then(() => {
        window._isPictureInPicture_ = true;
      }).catch((e) => {
        window._isPictureInPicture_ = null;
        debug.error('[togglePictureInPicture]', e);
      });
    }
  },

  /* 播放下一个视频，默认是没有这个功能的，只有在TCC里配置了next字段才会有该功能 */
  setNextVideo () {
    const isDo = TCC.doTask('next');
    if (!isDo) {
      debug.log('当前网页不支持一键播放下个视频功能~');
    }
  },

  /* 切换播放状态 */
  switchPlayStatus () {
    const t = this;
    const player = t.player();

    if (TCC.doTask('switchPlayStatus')) {
      // debug.log('[TCC][switchPlayStatus]', 'suc')
      return
    }

    if (player.paused) {
      if (TCC.doTask('play')) ; else {
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPause(400);
          t.mediaPlusApi.applyPlay();
        } else {
          /* 挂起其它逻辑的暂停操作，确保播放状态生效 */
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('pause', 400);
            player._unHangUp_('play');
          }

          player.play();
        }

        t.tips(i18n.t('tipsMsg.play'));
      }

      TCC.doTask('afterPlay');
    } else {
      if (TCC.doTask('pause')) ; else {
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPlay(400);
          t.mediaPlusApi.applyPause();
        } else {
          /* 挂起其它逻辑的播放操作，确保暂停状态生效 */
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('play', 400);
            player._unHangUp_('pause');
          }

          player.pause();
        }

        t.tips(i18n.t('tipsMsg.pause'));
      }

      TCC.doTask('afterPause');
    }
  },

  isAllowRestorePlayProgress: function () {
    const allowRestoreVal = configManager.get(`media.allowRestorePlayProgress.${window.location.host}`);
    return allowRestoreVal === null || allowRestoreVal
  },
  /* 切换自动恢复播放进度的状态 */
  switchRestorePlayProgressStatus: function () {
    const t = h5Player;
    let isAllowRestorePlayProgress = t.isAllowRestorePlayProgress();

    if (isInCrossOriginFrame()) {
      isAllowRestorePlayProgress = false;
    } else {
      /* 进行值反转 */
      isAllowRestorePlayProgress = !isAllowRestorePlayProgress;
    }

    configManager.set(`media.allowRestorePlayProgress.${window.location.host}`, isAllowRestorePlayProgress);

    /* 操作提示 */
    if (isAllowRestorePlayProgress) {
      t.tips(i18n.t('tipsMsg.arpl'));
      t.setPlayProgress(t.player());
    } else {
      t.tips(i18n.t('tipsMsg.drpl'));
    }
  },
  tipsClassName: 'html_player_enhance_tips',

  getTipsContainer: function (videoEl) {
    const t = h5Player;
    const player = videoEl || t.player();
    // 使用getContainer获取到的父节点弊端太多，暂时弃用
    // const _tispContainer_ = player._tispContainer_  ||  getContainer(player);

    let tispContainer = player.parentNode || player;

    /* 如果父节点为无长宽的元素，则再往上查找一级 */
    const containerBox = tispContainer.getBoundingClientRect();
    if ((!containerBox.width || !containerBox.height) && tispContainer.parentNode) {
      tispContainer = tispContainer.parentNode;
    }

    return tispContainer
  },
  tips: function (str) {
    const t = h5Player;
    const player = t.player();
    if (!player) {
      debug.log('h5Player Tips:', str);
      return true
    }

    const isAudio = t.isAudioInstance();
    const parentNode = isAudio ? document.body : t.getTipsContainer();

    if (parentNode === player) {
      debug.info('获取tips的包裹容器异常：', player, str);
      return false
    }

    let backupStyle = '';
    if (!isAudio) {
      // 修复部分提示按钮位置异常问题
      const defStyle = parentNode.getAttribute('style') || '';

      backupStyle = parentNode.getAttribute('style-backup') || '';
      if (!backupStyle) {
        let backupSty = defStyle || 'style-backup: none';
        const backupStyObj = inlineStyleToObj(backupSty);

        /**
         * 修复因为缓存时机获取到错误样式的问题
         * 例如在：https://www.xuetangx.com/
         */
        if (backupStyObj.opacity === '0') {
          backupStyObj.opacity = '1';
        }
        if (backupStyObj.visibility === 'hidden') {
          backupStyObj.visibility = 'visible';
        }

        backupSty = objToInlineStyle(backupStyObj);

        parentNode.setAttribute('style-backup', backupSty);
        backupStyle = defStyle;
      } else {
        /* 如果defStyle被外部修改了，则需要更新备份样式 */
        if (defStyle && !defStyle.includes('style-backup')) {
          backupStyle = defStyle;
        }
      }

      const newStyleArr = backupStyle.split(';');

      const oldPosition = parentNode.getAttribute('def-position') || window.getComputedStyle(parentNode).position;
      if (parentNode.getAttribute('def-position') === null) {
        parentNode.setAttribute('def-position', oldPosition || '');
      }
      if (['static', 'inherit', 'initial', 'unset', ''].includes(oldPosition)) {
        newStyleArr.push('position: relative');
      }

      const playerBox = player.getBoundingClientRect();
      const parentNodeBox = parentNode.getBoundingClientRect();
      /* 不存在高宽时，给包裹节点一个最小高宽，才能保证提示能正常显示 */
      if (!parentNodeBox.width || !parentNodeBox.height) {
        newStyleArr.push('min-width:' + playerBox.width + 'px');
        newStyleArr.push('min-height:' + playerBox.height + 'px');
      }

      parentNode.setAttribute('style', newStyleArr.join(';'));

      const newPlayerBox = player.getBoundingClientRect();
      if (Math.abs(newPlayerBox.height - playerBox.height) > 50) {
        parentNode.setAttribute('style', backupStyle);
        // debug.info('应用新样式后给播放器高宽造成了严重的偏差，样式已被还原：', player, playerBox, newPlayerBox)
      }
    }

    const tipsSelector = '.' + t.tipsClassName;

    /* 当出现多个tips元素时，将这些tips元素全部移除 */
    const tipsList = document.querySelectorAll(tipsSelector);
    if (tipsList.length > 1) {
      tipsList.forEach(tipsItem => {
        tipsItem.remove();
      });
    }

    let tipsDom = parentNode.querySelector(tipsSelector);

    /* 提示dom未初始化的，则进行初始化 */
    if (!tipsDom) {
      t.initTips();
      tipsDom = parentNode.querySelector(tipsSelector);
      if (!tipsDom) {
        debug.log('init h5player tips dom error...');
        return false
      }
    }

    const style = tipsDom.style;
    tipsDom.innerText = str;

    for (let i = 0; i < 3; i++) {
      if (this.on_off[i]) clearTimeout(this.on_off[i]);
    }

    function showTips () {
      style.display = 'block';
      t.on_off[0] = setTimeout(function () {
        style.opacity = 1;
      }, 50);
      t.on_off[1] = setTimeout(function () {
        // 隐藏提示框和还原样式
        style.opacity = 0;
        style.display = 'none';
        if (backupStyle) {
          parentNode.setAttribute('style', backupStyle);
        }
      }, 2000);
    }

    if (style.display === 'block') {
      style.display = 'none';
      clearTimeout(this.on_off[3]);
      t.on_off[2] = setTimeout(function () {
        showTips();
      }, 100);
    } else {
      showTips();
    }
  },

  /* 设置提示DOM的样式 */
  initTips: function () {
    const t = h5Player;
    const isAudio = t.isAudioInstance();
    const parentNode = isAudio ? document.body : t.getTipsContainer();
    if (parentNode.querySelector('.' + t.tipsClassName)) return

    // top: 50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    let tipsStyle = `
      position: absolute;
      z-index: 999999;
      font-size: ${t.fontSize || 16}px;
      padding: 5px 10px;
      background: rgba(0,0,0,0.4);
      color:white;
      top: 0;
      left: 0;
      transition: all 500ms ease;
      opacity: 0;
      border-bottom-right-radius: 5px;
      display: none;
      -webkit-font-smoothing: subpixel-antialiased;
      font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
      -webkit-user-select: none;
    `;

    if (isAudio) {
      tipsStyle = `
        position: fixed;
        z-index: 999999;
        font-size: ${t.fontSize || 16}px;
        padding: 5px 10px;
        background: rgba(0,0,0,0.4);
        color:white;
        bottom: 0;
        right: 0;
        transition: all 500ms ease;
        opacity: 0;
        border-top-left-radius: 5px;
        display: none;
        -webkit-font-smoothing: subpixel-antialiased;
        font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
        -webkit-user-select: none;
      `;
    }

    const tips = document.createElement('div');
    tips.setAttribute('style', tipsStyle);
    tips.setAttribute('class', t.tipsClassName);
    parentNode.appendChild(tips);
  },
  on_off: new Array(3),
  fps: 30,
  /* 滤镜效果 */
  filter: {
    key: [1, 1, 1, 0, 0],
    setup: function () {
      let view = 'brightness({0}) contrast({1}) saturate({2}) hue-rotate({3}deg) blur({4}px)';
      for (let i = 0; i < 5; i++) {
        view = view.replace('{' + i + '}', String(this.key[i]));
        this.key[i] = Number(this.key[i]);
      }
      h5Player.player().style.filter = view;
    },
    reset: function () {
      this.key[0] = 1;
      this.key[1] = 1;
      this.key[2] = 1;
      this.key[3] = 0;
      this.key[4] = 0;
      this.setup();
    }
  },

  setFilter (item, num, isDown) {
    if (![0, 1, 2, 3, 4].includes(item) || typeof num !== 'number') {
      debug.error('[setFilter]', '参数有误', item, num);
      return false
    }

    /* 如果标识为down，则自动取负数值 */
    if (isDown === true) {
      if (num && num > 0) { num = -num; }
    }

    const nameMap = {
      0: 'brightness',
      1: 'contrast',
      2: 'saturation',
      3: 'hue',
      4: 'blur'
    };

    const t = this;
    t.filter.key[item] += num || 0.1;
    t.filter.key[item] = t.filter.key[item].toFixed(2);

    if (t.filter.key[item] < 0 && nameMap[item] !== 'hue') {
      t.filter.key[item] = 0;
    }

    t.filter.setup();
    t.tips(i18n.t(`tipsMsg.${nameMap[item]}`) + parseInt(t.filter.key[item] * 100) + '%');
  },

  /* 设置视频的亮度 */
  setBrightness (num) {
    this.setFilter(0, num);
  },

  /* 提升视频的亮度 */
  setBrightnessUp (num) {
    this.setFilter(0, num || 0.1);
  },

  /* 降低视频的亮度 */
  setBrightnessDown (num) {
    this.setFilter(0, num || -0.1, true);
  },

  /* 设置视频的对比度 */
  setContrast (num) {
    this.setFilter(1, num);
  },

  /* 提升视频的对比度 */
  setContrastUp (num) {
    this.setFilter(1, num || 0.1);
  },

  /* 降低视频的对比度 */
  setContrastDown (num) {
    this.setFilter(1, num || -0.1, true);
  },

  /* 设置饱和度 */
  setSaturation (num) {
    this.setFilter(2, num);
  },

  /* 提升饱和度 */
  setSaturationUp (num) {
    this.setFilter(2, num || 0.1);
  },

  /* 降低饱和度 */
  setSaturationDown (num) {
    this.setFilter(2, num || -0.1, true);
  },

  /* 设置色相 */
  setHue (num) {
    this.setFilter(3, num);
  },

  /* 增加色相 */
  setHueUp (num) {
    this.setFilter(3, num || 1);
  },

  /* 降低色相 */
  setHueDown (num) {
    this.setFilter(3, num || -1, true);
  },

  /* 设置模糊度 */
  setBlur (num) {
    this.setFilter(4, num);
  },

  /* 增加模糊度 */
  setBlurUp (num) {
    this.setFilter(4, num || 1);
  },

  /* 降低模糊度 */
  setBlurDown (num) {
    this.setFilter(4, num || -1, true);
  },

  resetFilterAndTransform () {
    const t = this;

    t.resetTransform(true);
    t.filter.reset();
    t.tips(i18n.t('tipsMsg.imgattrreset'));
  },

  mediaDownload () {
    if (configManager.get('enhance.allowExperimentFeatures')) {
      debug.warn('[experimentFeatures][mediaDownload]');
      mediaDownload(this.player());
    } else {
      const result = window.confirm(i18n.t('useMediaDownloadTips'));
      if (result) {
        configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'));
        window.location.reload();
      }
    }
  },

  capture () {
    const player = this.player();
    videoCapturer.capture(player, true);

    /* 暂停画面 */
    if (!player.paused && !document.pictureInPictureElement && document.visibilityState !== 'visible') {
      this.freezeFrame();
    }
  },

  _isFoucs: false,

  /* 播放器的聚焦事件 */
  isFoucs: function () {
    const t = h5Player;
    const player = t.player();
    if (!player) return

    player.onmouseenter = function (e) {
      h5Player._isFoucs = true;
    };
    player.onmouseleave = function (e) {
      h5Player._isFoucs = false;
    };
  },
  /* 播放器事件响应器 */
  palyerTrigger: function (player, event) {
    if (!player || !event) return
    const t = h5Player;
    const keyCode = event.keyCode;
    const key = event.key.toLowerCase();

    if (event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
      // 网页全屏
      if (key === 'enter') {
        t.setWebFullScreen();
      }

      // 进入或退出画中画模式
      if (key === 'p') {
        t.togglePictureInPicture();
      }

      // 截图并下载保存
      if (key === 's') {
        t.capture();
      }

      if (key === 'r') {
        t.switchRestorePlayProgressStatus();
      }

      if (key === 'm') {
        /* 垂直镜像翻转 */
        t.setMirror(true);
      }

      if (key === 'd') {
        t.mediaDownload();
      }

      // 视频画面缩放相关事件
      const allowKeys = ['x', 'c', 'z', 'arrowright', 'arrowleft', 'arrowup', 'arrowdown'];
      if (!allowKeys.includes(key)) return

      t.scale = Number(t.scale);
      switch (key) {
        // shift+X：视频缩小 -0.1
        case 'x':
          t.setScaleDown();
          break
        // shift+C：视频放大 +0.1
        case 'c':
          t.setScaleUp();
          break
        // shift+Z：视频恢复正常大小
        case 'z':
          t.resetTransform();
          break
        case 'arrowright':
          t.setTranslateRight();
          break
        case 'arrowleft':
          t.setTranslateLeft();
          break
        case 'arrowup':
          t.setTranslateUp();
          break
        case 'arrowdown':
          t.setTranslateDown();
          break
      }

      // 阻止事件冒泡
      event.stopPropagation();
      event.preventDefault();
      return true
    }

    // ctrl+方向键右→：快进30秒
    if (event.ctrlKey && keyCode === 39) {
      t.setCurrentTimeUp(t.skipStep * 6);
    }
    // ctrl+方向键左←：后退30秒
    if (event.ctrlKey && keyCode === 37) {
      t.setCurrentTimeDown(-t.skipStep * 6);
    }

    // ctrl+方向键上↑：音量升高 20%
    if (event.ctrlKey && keyCode === 38) {
      t.setVolumeUp(0.2);
    }
    // 方向键下↓：音量降低 20%
    if (event.ctrlKey && keyCode === 40) {
      t.setVolumeDown(-0.2);
    }

    // 防止其它无关组合键冲突
    if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) return

    // 方向键右→：快进5秒
    if (keyCode === 39) {
      t.setCurrentTimeUp();
    }
    // 方向键左←：后退5秒
    if (keyCode === 37) {
      t.setCurrentTimeDown();
    }

    // 方向键上↑：音量升高 10%
    if (keyCode === 38) {
      t.setVolumeUp(0.05);
    }
    // 方向键下↓：音量降低 10%
    if (keyCode === 40) {
      t.setVolumeDown(-0.05);
    }

    // 空格键：暂停/播放
    if (keyCode === 32) {
      t.switchPlayStatus();
    }

    // 按键X：减速播放 -0.1
    if (keyCode === 88) {
      t.setPlaybackRateDown();
    }
    // 按键C：加速播放 +0.1
    if (keyCode === 67) {
      t.setPlaybackRateUp();
    }
    // 按键Z：正常速度播放
    if (keyCode === 90) {
      t.resetPlaybackRate();
    }

    // 按1-4设置播放速度 49-52;97-100
    if ((keyCode >= 49 && keyCode <= 52) || (keyCode >= 97 && keyCode <= 100)) {
      t.setPlaybackRatePlus(event.key);
    }

    // 按键F：下一帧
    if (keyCode === 70) {
      t.freezeFrame(1);
    }
    // 按键D：上一帧
    if (keyCode === 68) {
      t.freezeFrame(-1);
    }

    // 按键E：亮度增加%
    if (keyCode === 69) {
      t.setBrightnessUp();
    }
    // 按键W：亮度减少%
    if (keyCode === 87) {
      t.setBrightnessDown();
    }

    // 按键T：对比度增加%
    if (keyCode === 84) {
      t.setContrastUp();
    }
    // 按键R：对比度减少%
    if (keyCode === 82) {
      t.setContrastDown();
    }

    // 按键U：饱和度增加%
    if (keyCode === 85) {
      t.setSaturationUp();
    }
    // 按键Y：饱和度减少%
    if (keyCode === 89) {
      t.setSaturationDown();
    }

    // 按键O：色相增加 1 度
    if (keyCode === 79) {
      t.setHueUp();
    }
    // 按键I：色相减少 1 度
    if (keyCode === 73) {
      t.setHueDown();
    }

    // 按键K：模糊增加 1 px
    if (keyCode === 75) {
      t.setBlurUp();
    }
    // 按键J：模糊减少 1 px
    if (keyCode === 74) {
      t.setBlurDown();
    }

    // 按键Q：图像复位
    if (keyCode === 81) {
      t.resetFilterAndTransform();
    }

    // 按键S：画面旋转 90 度
    if (keyCode === 83) {
      t.setRotate();
    }

    /* 水平镜像翻转 */
    if (keyCode === 77) {
      t.setMirror();
    }

    // 按键回车，进入全屏
    if (keyCode === 13) {
      t.setFullScreen();
    }

    if (key === 'n') {
      t.setNextVideo();
    }

    // 阻止事件冒泡
    event.stopPropagation();
    event.preventDefault();
    return true
  },

  /* 运行自定义的快捷键操作，如果运行了会返回true */
  runCustomShortcuts: function (player, event) {
    if (!player || !event) return
    const key = event.key.toLowerCase();
    const taskConf = TCC.getTaskConfig();
    const confIsCorrect = isObj$1(taskConf.shortcuts) &&
      Array.isArray(taskConf.shortcuts.register) &&
      taskConf.shortcuts.callback instanceof Function;

    /* 判断当前触发的快捷键是否已被注册 */
    function isRegister () {
      const list = taskConf.shortcuts.register;

      /* 当前触发的组合键 */
      const combineKey = [];
      if (event.ctrlKey) {
        combineKey.push('ctrl');
      }
      if (event.shiftKey) {
        combineKey.push('shift');
      }
      if (event.altKey) {
        combineKey.push('alt');
      }
      if (event.metaKey) {
        combineKey.push('command');
      }

      combineKey.push(key);

      /* 通过循环判断当前触发的组合键和已注册的组合键是否完全一致 */
      let hasReg = false;
      list.forEach((shortcut) => {
        const regKey = shortcut.split('+');
        if (combineKey.length === regKey.length) {
          let allMatch = true;
          regKey.forEach((key) => {
            if (!combineKey.includes(key)) {
              allMatch = false;
            }
          });
          if (allMatch) {
            hasReg = true;
          }
        }
      });

      return hasReg
    }

    if (confIsCorrect && isRegister()) {
      // 执行自定义快捷键操作
      const isDo = TCC.doTask('shortcuts', {
        event,
        player,
        h5Player
      });

      if (isDo) {
        event.stopPropagation();
        event.preventDefault();
      }

      return isDo
    } else {
      return false
    }
  },

  /* 按键响应方法 */
  keydownEvent: function (event) {
    const t = h5Player;
    const keyCode = event.keyCode;
    // const key = event.key.toLowerCase()
    const player = t.player();

    /* 处于可编辑元素中不执行任何快捷键 */
    const target = event.composedPath ? event.composedPath()[0] || event.target : event.target;
    if (t.__disableHotkeysTemporarily__ || isEditableTarget(target)) return

    /* 广播按键消息，进行跨域控制 */
    monkeyMsg.send('globalKeydownEvent', event, 0);

    if (!player) {
      if (t.hasCrossOriginVideoDetected) {
        if (!configManager.get('enhance.allowCrossOriginControl')) {
          return false
        }

        /**
         * 利用热键运行器的匹配能力来决定要不要禁止事件冒泡和阻止默认事件
         * 解决处于跨TAB、跨域控制时造成其它默认快捷键响应异常的问题
         */
        if (t.hotkeysRunner && t.hotkeysRunner.run) {
          t.hotkeysRunner.run({
            event,
            stopPropagation: true,
            preventDefault: true
          });
        } else {
          t.registerHotkeysRunner();
          event.stopPropagation();
          event.preventDefault();
        }

        // debug.log('当前页面检出了跨域受限的视频，仍需阻止默认事件和事件冒泡')
      }

      // debug.log('无可用的媒体元素，不执行相关操作')
      return false
    }

    /* 切换插件的可用状态 */
    if (event.ctrlKey && keyCode === 32) {
      t.enable = !t.enable;
      if (t.enable) {
        t.tips(i18n.t('tipsMsg.onplugin'));
      } else {
        t.tips(i18n.t('tipsMsg.offplugin'));
      }
    }

    if (!t.enable) {
      debug.log('h5Player 已禁用~');
      return false
    }

    // 按ctrl+\ 键进入聚焦或取消聚焦状态，用于视频标签被遮挡的场景
    if (event.ctrlKey && keyCode === 220) {
      t.globalMode = !t.globalMode;
      if (t.globalMode) {
        t.tips(i18n.t('tipsMsg.globalmode') + ' ON');
      } else {
        t.tips(i18n.t('tipsMsg.globalmode') + ' OFF');
      }
    }

    /* 非全局模式下，不聚焦则不执行快捷键的操作 */
    if (!t.globalMode && !t._isFoucs) return

    /* 判断是否执行了自定义快捷键操作，如果是则不再响应后面默认定义操作 */
    if (t.runCustomShortcuts(player, event) === true) return

    /* 热键运行器匹配到相关执行任务便不在执行后续的palyerTrigger */
    if (t.hotkeysRunner && t.hotkeysRunner.run) {
      const matchResult = t.hotkeysRunner.run({
        event,
        target: t,
        stopPropagation: true,
        preventDefault: true,
        conditionHandler (condition) {
          // TODO 完善条件限定回调逻辑
          if (condition) {
            return true
          }
        }
      });

      if (matchResult) {
        debug.info('[hotkeysRunner][matchResult]', matchResult);
        return true
      }
    } else {
      /* 未用到的按键不进行任何事件监听 */
      if (!isRegisterKey(event)) { return false }

      /* 响应播放器相关操作 */
      t.palyerTrigger(player, event);
    }
  },

  /**
   * 获取播放进度
   * @param player -可选 对应的h5 播放器对象， 如果不传，则获取到的是整个播放进度表，传则获取当前播放器的播放进度
   */
  getPlayProgress: function (player) {
    const progressMap = configManager.get('media.progress') || {};

    if (!player) {
      return progressMap
    } else {
      const keyName = window.location.href + player.duration;
      if (progressMap[keyName]) {
        /* 对于直播的视频流，会出现记录的duration和当前视频duration不一致的情况，这时候通过返回currentTime来忽略恢复播放进度 */
        if (Number.isNaN(Number(player.duration)) || Number(progressMap[keyName].duration) !== Number(player.duration)) {
          return player.currentTime
        } else {
          return progressMap[keyName].progress
        }
      } else {
        return player.currentTime
      }
    }
  },
  /* 播放进度记录器 */
  playProgressRecorder: function (player) {
    const t = h5Player;
    clearTimeout(player._playProgressTimer_);
    function recorder (player) {
      player._playProgressTimer_ = setTimeout(function () {
        /* 时长小于两分钟的视频不记录播放进度 */
        const isToShort = !player.duration || Number.isNaN(Number(player.duration)) || player.duration < 120;
        const isLeave = document.visibilityState !== 'visible' && player.paused;

        if (!t.isAllowRestorePlayProgress() || isToShort || isLeave) {
          recorder(player);
          return true
        }

        const progressMap = t.getPlayProgress() || {};
        const list = Object.keys(progressMap);
        const keyName = window.location.href + player.duration;

        /**
         * 对首次记录到progressMap的值进行标记
         * 用于防止手动切换播放进度时，执行到错误的恢复逻辑
         */
        if (!progressMap[keyName]) {
          t._firstProgressRecord_ = keyName;
          t._hasRestorePlayProgress_ = keyName;
        }

        /* 只保存最近10个视频的播放进度 */
        if (list.length > 10) {
          /* 根据更新的时间戳，取出最早添加播放进度的记录项 */
          let timeList = [];
          list.forEach(function (keyName) {
            progressMap[keyName] && progressMap[keyName].t && timeList.push(progressMap[keyName].t);
          });
          timeList = quickSort(timeList);
          const timestamp = timeList[0];

          /* 删除最早添加的记录项 */
          list.forEach(function (keyName) {
            if (progressMap[keyName].t === timestamp) {
              delete progressMap[keyName];
            }
          });
        }

        /* 记录当前播放进度 */
        progressMap[keyName] = {
          progress: player.currentTime,
          duration: player.duration,
          t: new Date().getTime()
        };

        /* 存储播放进度表 */
        configManager.setLocalStorage('media.progress', progressMap);

        /* 循环侦听 */
        recorder(player);
      }, 1000 * 2);
    }
    recorder(player);
  },

  /* 设置播放进度 */
  setPlayProgress: function (player) {
    const t = h5Player;
    if (!player || !player.duration || Number.isNaN(player.duration)) return

    const curTime = Number(t.getPlayProgress(player));

    /* 要恢复进度的时间过小或大于player.duration都不符合规范，不进行进度恢复操作 */
    if (!curTime || Number.isNaN(curTime) || curTime < 10 || curTime >= player.duration) return

    /* 忽略恢复进度时间与当前播放进度时间相差不大的情况 */
    if (Math.abs(curTime - player.currentTime) < 2) {
      return false
    }

    const progressKey = window.location.href + player.duration;
    t._hasRestorePlayProgress_ = t._hasRestorePlayProgress_ || '';

    if (t._hasRestorePlayProgress_ === progressKey || t._firstProgressRecord_ === progressKey) {
      if (t._hasRestorePlayProgress_ === progressKey) {
        t._firstProgressRecord_ = '';
      }
      return false
    }

    if (t.isAllowRestorePlayProgress()) {
      // 比curTime少1.5s可以让用户知道是前面的画面，从而有个衔接上了的感觉
      player.currentTime = curTime - 1.5;
      t._hasRestorePlayProgress_ = progressKey;
      t.tips(i18n.t('tipsMsg.playbackrestored'));
    } else {
      t.tips(i18n.t('tipsMsg.playbackrestoreoff'));
    }
  },

  setPlayerInstance (el) {
    if (!el && !el.getBoundingClientRect) {
      return false
    }

    const t = h5Player;

    if (t.player() === el) {
      return false
    }

    if (!t.playerInstance && isMediaElement(el)) {
      t.playerInstance = el;
      t.initPlayerInstance(false);
      return true
    }

    if (isVideoElement(el)) {
      const elParentNode = t.getTipsContainer(el);
      const elInfo = el.getBoundingClientRect();
      const parentElInfo = elParentNode && elParentNode.getBoundingClientRect();
      if (elInfo && elInfo.width > 200 && parentElInfo && parentElInfo.width > 200) {
        t.playerInstance = el;
        t.initPlayerInstance(false);
      }
    } else if (isAudioElement(el)) {
      if (isAudioElement(t.playerInstance) || (isVideoElement(t.playerInstance) && !t.playerInstance.isConnected)) {
        t.playerInstance = el;
        t.initPlayerInstance(false);
      }
    }
  },

  /**
   * 视频元素是否出现在视口里的观察对象，用于优化多视频实例的实例切换
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
   */
  intersectionObserver: new IntersectionObserver(function (entries, observer) {
    const t = h5Player;
    // debug.log('[intersectionObserver]', entries)

    let tmpIntersectionRatio = 0;
    entries.forEach(entrie => {
      entrie.target._intersectionInfo_ = entrie;

      if (entrie.intersectionRatio > tmpIntersectionRatio && entrie.intersectionRatio > 0.4) {
        tmpIntersectionRatio = entrie.intersectionRatio;

        const oldPlayer = t.player();
        if (oldPlayer && oldPlayer._intersectionInfo_ && tmpIntersectionRatio < oldPlayer._intersectionInfo_.intersectionRatio) {
          /* 新实例的视图范围比旧的小，则不切换实例 */
          return
        }

        /* 切换视频实例 */
        const toggleResult = t.setPlayerInstance(entrie.target);
        toggleResult && debug.log('[intersectionObserver] 切换视频实例', entrie);
      }
    });
  }, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  }),

  /**
   * 检测h5播放器是否存在
   * @param callback
   */
  detecH5Player: function () {
    const t = this;
    const playerList = t.getPlayerList();

    if (playerList.length) {
      // debug.log('检测到HTML5视频！', location.href, h5Player, playerList)

      /* 单video实例标签的情况 */
      if (playerList.length === 1) {
        t.playerInstance = playerList[0];
        t.initPlayerInstance(true);
      }

      /* 多video实例标签的情况 */
      playerList.forEach(function (player) {
        /* 鼠标移到其上面的时候重新指定实例 */
        if (!player._hasMouseRedirectEvent_) {
          player.addEventListener('mouseenter', function (event) {
            t.setPlayerInstance(event.target);
          });
          player._hasMouseRedirectEvent_ = true;
        }

        /* 播放器开始播放的时候重新指向实例 */
        if (!player._hasPlayingRedirectEvent_) {
          player.addEventListener('playing', function (event) {
            const media = event.target;

            /* 对于超短的音视频可能是某些操作反馈的特效，可忽略对其进行播放实例切换 */
            if (media.duration && media.duration < 8) {
              return false
            }

            t.setPlayerInstance(media);
          });
          player._hasPlayingRedirectEvent_ = true;
        }

        /* 当被观察到出现在浏览器视口里时，切换视频实例 */
        if (!player._hasIntersectionObserver_) {
          t.intersectionObserver.observe(player);
          player._hasIntersectionObserver_ = true;
        }
      });

      if (isInCrossOriginFrame()) {
        /* 广播检测到H5Player的消息 */
        monkeyMsg.send('videoDetected', {
          src: t.playerInstance.src
        });
      }

      registerH5playerMenus(h5Player);
    }
  },

  /* 响应来自按键消息的广播 */
  bindFakeEvent () {
    const t = this;
    if (t._hasBindFakeEvent_) return

    /* 触发来自消息广播的模拟事件，实现跨域、跨Tab控制视频播放 */
    let triggerFakeEvent = function (name, oldVal, newVal, remote) {
      const player = t.player();
      if (player && !t.__disableHotkeysTemporarily__) {
        const fakeEvent = newVal.data;
        fakeEvent.stopPropagation = () => { };
        fakeEvent.preventDefault = () => { };
        t.palyerTrigger(player, fakeEvent);

        debug.log('已响应跨Tab/跨域按键控制信息：', newVal);
      }
    };

    /**
     * 操作节流控制，减少按键消息频率，
     * 注意，开启节流控制后导致复合按键（如：shift+s）没法生效
     */
    if (!crossTabCtl.hasOpenPictureInPicture() && !t.hasCrossOriginVideoDetected) {
      triggerFakeEvent = throttle(triggerFakeEvent, 80);
    }

    /* 注册响应来自按键消息的广播的事件 */
    monkeyMsg.on('globalKeydownEvent', async (name, oldVal, newVal, remote) => {
      if (remote) {
        if (isInCrossOriginFrame()) {
          /**
           * 同处跨域受限页面，且都处于可见状态，大概率处于同一个Tab标签里，但不是100%
           * tabId一致则100%为同一标签下
           */
          if (document.visibilityState === 'visible' && newVal.originTab) {
            triggerFakeEvent(name, oldVal, newVal, remote);
          }
        } else if (crossTabCtl.hasOpenPictureInPicture()) {
          /* 跨Tab控制画中画里面的视频播放 */
          if (!newVal.originTab && (document.pictureInPictureElement || t.isLeavepictureinpictureAwhile())) {
            triggerFakeEvent(name, oldVal, newVal, remote);
          }
        }
      }
    });

    t._hasBindFakeEvent_ = true;
  },

  /* 绑定相关事件 */
  bindEvent: function () {
    const t = this;
    if (t._hasBindEvent_) return

    document.removeEventListener('keydown', t.keydownEvent);
    document.addEventListener('keydown', t.keydownEvent, true);

    /* 兼容iframe操作 */
    if (isInIframe() && !isInCrossOriginFrame()) {
      window.top.document.removeEventListener('keydown', t.keydownEvent);
      window.top.document.addEventListener('keydown', t.keydownEvent, true);
    }

    t._hasBindEvent_ = true;
  },

  setCustomConfiguration (config, tag = 'Default') {
    if (!config) return false

    const configuration = configManager.mergeDefConf(config.customConfiguration);
    const taskConf = mergeTaskConf(config.customTaskControlCenter);
    if (TCC && TCC.setTaskConf) {
      TCC.setTaskConf(taskConf);
    }

    h5Player.hasSetCustomConfiguration = tag;
    debug.info(`[CustomConfiguration][${tag}]`, configuration, taskConf);
  },

  mergeExternalConfiguration (config, tag = 'Default') {
    if (!config || !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) return false
    h5Player.setCustomConfiguration(config, 'External');
    h5Player.hasExternalCustomConfiguration = tag;
  },

  init: function (global) {
    const t = this;

    if (window.unsafeWindow && window.unsafeWindow.__h5PlayerCustomConfiguration__) {
      !t.hasExternalCustomConfiguration && t.mergeExternalConfiguration(window.unsafeWindow.__h5PlayerCustomConfiguration__);
    }

    if (TCC && TCC.doTask('disable') === true) {
      debug.info(`[TCC][disable][${location.host}] 已禁止在该网站运行视频检测逻辑，您可查看任务配置中心的相关配置了解详情`);
      return true
    }

    if (!configManager.get('enable')) {
      debug.info(`[config][disable][${location.host}] 当前网站已禁用脚本，如要启用脚本，请在菜单里开启`);
      return true
    }

    if (!global) {
      /* 检测是否存在H5播放器 */
      t.detecH5Player();
      return true
    }

    if (configManager.get('debug') === true) {
      window._debugMode_ = true;
      t.mountToGlobal();
    }

    setFakeUA();

    /* 初始化任务配置中心 */
    TCC = h5PlayerTccInit(t);

    /* 绑定键盘事件 */
    if (configManager.get('enableHotkeys') !== false) {
      t.bindEvent();
      t.bindFakeEvent();
    } else {
      debug.warn('快捷键能力已被禁用');
    }

    /* 响应来自跨域受限的视频检出事件 */
    monkeyMsg.on('videoDetected', async (name, oldVal, newVal, remote) => {
      if (newVal.originTab) {
        t.hasCrossOriginVideoDetected = true;
      }

      debug.log('[hasCrossOriginVideoDetected]', t, name, oldVal, newVal, remote);
    });

    /* 当页面处于可视化状态时，初始化自定义播放逻辑 */
    document.addEventListener('visibilitychange', function () {
      h5Player.initAutoPlay();
    });

    if (window.unsafeWindow && configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) {
      window.unsafeWindow.__setH5PlayerCustomConfiguration__ = t.mergeExternalConfiguration;
    }
  }
};

async function h5PlayerInit () {
  try {
    mediaCore.init(function (mediaElement) {
      h5Player.init();
    });

    if (configManager.get('enhance.allowExperimentFeatures')) {
      mediaSource.init();
      debug.warn(`[experimentFeatures][warning] ${i18n.t('experimentFeaturesWarning')}`);
      debug.warn('[experimentFeatures][mediaSource][activated]');
    }

    /* 禁止对playbackRate等属性进行锁定 */
    hackDefineProperty();

    /* 禁止对shadowdom使用close模式 */
    hackAttachShadow();

    /* 对所有事件进行接管 */
    proxyHTMLMediaElementEvent();
    // hackEventListener()
  } catch (e) {
    console.error('h5player hack error', e);
  }

  menuRegister();

  try {
    /* 初始化全局所需的相关方法 */
    h5Player.init(true);

    /* 检测到有视频标签就进行初始化 */
    supportMediaTags.forEach(tagName => {
      ready(tagName, function () {
        h5Player.init();
      });
    });

    /* 检测shadow dom 下面的video */
    document.addEventListener('addShadowRoot', function (e) {
      const shadowRoot = e.detail.shadowRoot;
      supportMediaTags.forEach(tagName => {
        ready(tagName, function (element) {
          h5Player.init();
        }, shadowRoot);
      });
    });

    /* 初始化跨Tab控制逻辑 */
    crossTabCtl.init();

    if (isInIframe()) {
      debug.log('h5Player init suc, in iframe:');
    } else {
      debug.log('h5Player init suc');
    }

    if (isInCrossOriginFrame()) {
      debug.log('当前处于跨域受限的iframe中，h5Player部分功能可能无法正常开启', window.location.href);
    }
  } catch (e) {
    debug.error('h5Player init fail', e);
  }

  /* 注意：只有明确为fasle才隐藏GUI */
  if (configManager.get('ui.enable') !== false) {
    if (window.customElements && document.adoptedStyleSheets) {
      h5Player.UI = h5playerUI(windowSandbox);
      setTimeout(async () => {
        h5Player.UI.init();
      }, 400);
    } else {
      /* webkit内核建议73以上的浏览器才允许使用UI组件，否则兼容或性能都是很大的问题 */
      debug.warn('当前浏览器不支持customElements或adoptedStyleSheets，无法使用UI组件，建议使用Chrome 83+，Edge 83+');
    }
  } else {
    debug.warn('UI组件已被禁用', configManager.get('ui.enable'));
  }

  /**
   * 跟官网远程助手进行互动，有严重安全或信息洁癖的人手动注释下面代码即可
   * 下面代码不会影响主要功能的正常使用
   * 不注释代码，禁用UI界面也有同等效果
   */
  try {
    configManager.get('ui.enable') !== false && remoteHelper.init();
  } catch (e) {
    debug.error('[remoteHelper.init]', e);
  }
}

function init (retryCount = 0) {
  if (!window.document || !window.document.documentElement) {
    setTimeout(() => {
      if (retryCount < 200) {
        init(retryCount + 1);
      } else {
        console.error('[h5player message:]', 'not documentElement detected!', window);
      }
    }, 10);

    return false
  } else if (retryCount > 0) {
    console.warn('[h5player message:]', 'documentElement detected!', retryCount, window);
  }

  h5PlayerInit();
}

/**
 * 某些极端情况下，直接访问window对象都会导致报错，所以整个init都try起来
 * 例如：www.icourse163.org 就有一定的机率异常
 */
let initTryCount = 0;
try {
  init(0);
} catch (e) {
  setTimeout(() => {
    if (initTryCount < 200) {
      initTryCount++;
      init(0);
      console.error('[h5player message:]', 'init error', initTryCount, e);
    }
  }, 10);
}
