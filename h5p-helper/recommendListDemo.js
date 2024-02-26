/**
 * recommendList的配置示例
 * 除了title和url外，其它都是可选字段
 */
const recommendList = [
  {
    title: "【免费GPT-4】由字节跳动海外团队提供",
    desc: "GPT-4是一种基于大规模预训练模型的自然语言处理模型，由OpenAI公司开发。",
    url: "https://u.anzz.top/ai",
    i18n: {
      /* language未命中则使用默认值，所以这里不需要重复设置zh-CN、zh等值 */
      // "zh-CN": {
      //   title: "【免费GPT-4】由字节跳动海外团队提供",
      //   desc: "GPT-4是一种基于大规模预训练模型的自然语言处理模型，由OpenAI公司开发。",
      //   url: "https://u.anzz.top/ai"
      // },
      "en-US": {
        title: "【Free GPT-4】Provided by the overseas team of ByteDance",
        desc: "GPT-4 is a natural language processing model based on large-scale pre-training models, developed by OpenAI.",
        url: "https://u.anzz.top/ai"
      },
      // "en": {
      //   title: "【Free GPT-4】Provided by the overseas team of ByteDance",
      //   desc: "GPT-4 is a natural language processing model based on large-scale pre-training models, developed by OpenAI.",
      //   url: "https://u.anzz.top/ai"
      // },
      "ja-JP": {
        title: "【無料GPT-4】バイトダンスの海外チーム提供",
        desc: "GPT-4は、大規模な事前トレーニングモデルに基づく自然言語処理モデルであり、OpenAIによって開発されました。",
        url: "https://u.anzz.top/ai"
      }
    },
    priority: 99,
    disabled: false
  },
  {
    title: "让我看看，作者收了多少打赏？",
    url: "https://u.anzz.top/aboutonate",
    desc: "让我看看，作者收了多少打赏？",
    priority: 99,
    /* 指定哪些语言下才显示当前推荐 */
    lang: ["zh-CN", "zh-CN", "zh-HK", "zh-TW"],
    disabled: false
  },
  {
    title: "hello world",
    url: "https://u.anzz.top/helloworld",
    desc: "hello world",
    /* 指定哪些语言下才显示当前推荐 */
    lang: ["zh-CN", "zh-CN", "zh-HK", "zh-TW"],
    /* 如果需要在所以中文语言下显示，则不设置为"zh"更方便 */
    // lang: ["zh"],
    disabled: false
  },
  {
    title: "ffmpeg-script",
    url: "https://github.com/xxxily/ffmpeg-script",
    desc: "ffmpeg-script is a powerful and easy-to-use script for video and audio processing.",
    i18n: {
      /* "zh-CN", "zh-CN", "zh-HK", "zh-TW"都会使用"zh"的值 */
      "zh": {
        title: "音视频合并工具",
        desc: "将h5player下载到的音视频文件自动合并成一个文件，不经过二次编码，可快速合并",
      }
    },
    lang: ["en", "en-US", "ru"],
    disabled: true
  }
];
window.recommendList = recommendList;