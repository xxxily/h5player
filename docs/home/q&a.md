# Q&A

## Why doesn't fast-tracking courses affect learning progress?

"The script supports video speed-up, but it's not designed for course brushing, so don't expect to use scripts to brush up on learning progress."

Most learning websites have rigorous progress monitoring logic, including, but not limited to:

::: warning

- Speed detection (if speed use is detected, learning progress is not recorded)
- Backend verification (if there's a discrepancy between learning duration and video length, progress is not recorded)
- Server timing (the learning end reports the learning status, the server calculates and records the progress)
- Log review (manual inspection of learning logs, severe discrepancies are reported and may lead to dismissal)

:::

These monitoring methods are listed to tell you: "there are risks with speed learning, and if there are any issues, don't blame the script."

Aside from brushing courses, this script can do many useful things, such as:

::: tip

- Enjoy a consistent video site playback control experience
- Speed watching TV dramas, movies, and entertainment programs
- Quick learning during the revision phase of video courses
- Speed playback of network disk audio and video files
- Video rotation and other picture adjustments
- Screenshotting exciting moments in web videos
- Picture-in-picture playback of web videos, and more

:::

## Baidu Netdisk videos can't be played at an increased speed

This occurs because non-Baidu members use a non-h5 standard player for playback.

It’s suggested to use it in combination with other Baidu disk scripts available at [https://greasyfork.org/zh-CN/scripts/?q=pan.baidu.com](https://greasyfork.org/zh-CN/scripts/?q=pan.baidu.com), which will allow speed playback.

If you are a Baidu member and still can’t speed up playback when using the script mentioned above, it's recommended to check the console for errors and report them to the author.

## Bilibili videos can't speed up, or they stutter when sped up

This is due to Bilibili's extensive customizations to the H5 player and their use of software decoding for video, which can cause issues with speed-up or stuttering during playback. If you encounter these problems, switch the encoding mode to AVC:

![blockSetCurrentTime](./img/bilibili.avc.jpg)

## Playback is stuttering, has no progress, or is out of sync

1. Potential reasons for stuttering playback upon speeding up include:

   - Poor computer performance, causing stutter due to high CPU/GPU resource usage
   - Poor network connection, causing stutter as video loading can't keep up with the speed of play
   - Limited network bandwidth from the video site causing slow data transfer and stuttering
   - Watching live videos where data can't be loaded in advance; please watch at 1x speed

2. Progress issues following speed-up, including progress resetting to zero or looping at a particular point in the video, typically indicate the site does not want you to play videos at increased speeds.

   Try enabling: "Block default playback progress control logic" to resolve this issue.

    ![blockSetCurrentTime](./img/blockSetCurrentTime.png)

3. Audio and video may be out of sync after speeding up, usually due to the site loading audio and video separately.

   Mitigate this through the following methods:

   - Use a higher-performance computer and ensure good network quality
   - Avoid frequently switching between high and normal play speeds
   - Try adjusting the playback point to potentially trigger a re-sync of audio and video
   - It's also possible the video itself is out of sync, which currently has no solution

## How can I support speed playback for local video files?

In your browser's extensions, find your script management plugin (such as Tampermonkey), click 'Details', and then enable 'Allow access to file URLs' as shown below:

![Extension](./img/kuozhanchengxu.png)

![Plugin Details](./img/tampermonkey.xiangqing.png)

Finally, drag and drop your local video into the browser, and you can use the plugin's shortcut keys to control the video's playback.

## The site's own speed control fails after enabling the plugin

This occurs because the plugin takes over the default speed control logic and prevents other logic from performing speed operations. If not disabled, multiple speed control logics would conflict, causing continuous jumps and changes in playback speed for the same video. To avoid this and other related issues, the plugin defaults to taking full control over speed logic.

If you prefer not to have complete takeover, the plugin provides an option: "Allow default speed adjustment logic."

![unblockSetPlaybackRate](./img/unblockSetPlaybackRate.png)

With it enabled, speed control logic can coexist, but related issues are likely to arise, so it is "not recommended to allow default speed adjustment logic."

## How to enable experimental features

On sites with video media, the following menu will appear:

![Extension](./img/allowExperimentFeatures.png)

Click the menu to globally enable experimental features.

::: warning
Experimental features may cause some unpredictable issues, please enable them with caution.
:::

## How to use the media download function

To use the media download function, you must meet two conditions:

- The script version must be [3.6.1](./changeLog.md) or above.
- Experimental features must be enabled.

## Why are video and audio downloaded separately?

Unlike other download scripts, this script downloads the raw media data streams. If the original streams are separate for audio and video, the downloads will be separate too. This is also why this script can download live stream media.

Since it's the raw media stream, the quality of the downloaded video matches the quality you selected for playback. If you want high-definition media files, select the high-quality setting, play to the end, and then download.

::: warning
Note that higher quality isn't always better; it must be matched to your computer's capabilities and bandwidth, or you may experience severe stuttering and significant memory usage.
:::

## How to merge downloaded audio and video files

You can use third-party tools to merge audio and video files, such as:

- [Format Factory](http://www.pcgeshi.com/)
- [JianYing (剪影)](https://lv.ulikecam.com/)
- [Adobe Premiere Pro](https://www.adobe.com/products/premiere.html)

These tools can merge audio and video files but have their drawbacks:

- They require a graphical interface for operation, which is less efficient.
- Understanding the conversion process and related parameters is necessary.
- The conversion process consumes significant CPU and GPU resources.
- Converted files may change in size and quality.
- Some tools require paid licenses to use.
- Some have ads or other annoying behaviors.

In general, these tools have their specialties, and for merging audio and video alone, they may not be the best or easiest options.

To simplify the process, the author has released [ffmpeg-script](https://github.com/xxxily/ffmpeg-script), which can achieve:

- Batch processing support
- Fast processing without re-encoding
- Automatic detection of related files
- Auto-skip over already processed files
- Can be stopped at any time without worry
- Simple and quick to use with a single command

For detailed instructions, see: [https://github.com/xxxily/ffmpeg-script](https://github.com/xxxily/ffmpeg-script)

::: tip
The script is free, open-source, and cross-platform, with no restrictions, so you can use it with confidence.
:::

## Why is video screenshot functionality inconsistent across websites?

This is due to the [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy, which in some cases prevents screenshot data from being directly downloaded after capture.

When CORS restrictions apply, the screenshot is displayed in a new window, requiring manual save or copy.

::: tip
If a screenshot can automatically download and save to a local folder, the script will also try to copy the screenshot to your clipboard, allowing you to paste it directly into a chat window or Word document.
:::

::: warning
If you press the screenshot hotkey and it neither downloads automatically nor opens a new window, then it's likely that you've blocked new window pop-ups, causing the screenshot function to malfunction. Setting permission for pop-ups on the current site will resolve this issue.
:::

## How to Disable or Customize Shortcut Keys

The latest version of the script provides a very rich customization capability. You can disable any shortcut keys you don't need or modify the ones you want by using any of the following methods:

- Click on GUI's `Menu > Settings > Open Custom Configuration Editor`.
- Click on the Tampermonkey plugin icon `Open Custom Configuration Editor`.
- Define your shortcut keys and other related capabilities through [Custom Configuration](./customConfiguration.md).

~~We sincerely apologize, as of now, the plugin does not provide an option to disable shortcut keys. We will add a visual configuration solution in the future, but it may be a long time coming. Please do not have too high expectations as the author's free time and energy are limited...~~

~~If you desperately need this feature and have some programming knowledge, congratulations, the plugin is completely open-source. You can fork a copy and add your own logic.~~

Additionally, I'd like to add: `I have disdain for those who hastily leave negative reviews because the plugin lacks the feature they want, and for those who disrespect others' hard work and spout abuse casually.`  

<br />
<br />
<br />
<br />

<Vssue :title="$title" />
