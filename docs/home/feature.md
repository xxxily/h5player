# User Manual

## Playback Speed Control

The basic shortcuts for speed adjustment are as follows:

| Shortcut Key | Description          |
| ------------ | -------------------- |
| C            | Speed up playback +0.1 |
| X            | Slow down playback -0.1|
| Z            | Normal playback speed |

Holding down the `C`, `X`, or `Z` keys on the keyboard can achieve basic speed control operations.

If you feel that adjusting by 0.1 is too slow, you can also quickly specify the required speed through the number keys: `1-4`:

| Number Key   | Description                   |
| ------------ | ----------------------------- |
| 1            | Set playback speed to 1x      |
| 2            | Set playback speed to 2x      |
| 3            | Set playback speed to 3x      |
| 4            | Set playback speed to 4x      |

Using the number keys allows you to quickly jump speeds. In most cases, this should satisfy the majority of speed control scenarios. However, you might want to quickly set a higher speed to `skip intros, outros, ads` or for high-speed video `rewatching`.

To cater to these needs, version `3.5.2` and above added the ability for jump-style speed adjustment. In simple terms, by quickly double-pressing a number key, you can attain a cumulative rate of that number key:

| Double Press Number Key | Description                   |
| ----------------------- | ----------------------------- |
| 1                       | Set playback speed to 2x      |
| 2                       | Set playback speed to 4x      |
| 3                       | Set playback speed to 6x      |
| 4                       | Set playback speed to 8x      |

If that's still not enough, you can continuously press and hold a number key to keep adding speed until you reach the browser's limit of 16x:

| Hold Number Key | Description                    |
| --------------- | ------------------------------ |
| 1               | Speed up +1 until reaching 16x |
| 2               | Speed up +2 until reaching 16x |
| 3               | Speed up +3 until reaching 16x |
| 4               | Speed up +4 until reaching 16x |

## Volume Adjustment

The basic shortcuts for volume adjustment are as follows:

| Shortcut Key | Description      |
| ------------ | ---------------- |
| ↑            | Increase volume 5% |
| ↓            | Decrease volume 5% |

If you wish to adjust the volume more significantly, you can use the following shortcuts:

| Shortcut Key   | Description         |
| -------------- | ------------------- |
| Ctrl+↑         | Increase volume by 20% |
| Ctrl+↓         | Decrease volume by 20% |

However, the above shortcuts may conflict with other system shortcuts and may not work. For example, on MacOS, this shortcut cannot be used.

Some websites prevent external logic from adjusting the volume, such as [Zhihu Video](https://www.zhihu.com/education/learning). For these cases, the script added thorough control over volume management, but this needs to be manually enabled, because once activated, the following will occur:

- Volume can only be adjusted using plugin shortcuts
- The website's own volume control will become ineffective

To enable it: click on the `Tampermonkey` plugin icon under the video address you wish to enable it for, and the following option will appear:

![blockSetVolume](./img/blockSetVolume.png)

::: tip
Changing this configuration will only affect the current website and will not apply globally. If other websites also cannot control the playback volume, you will need to repeat the above settings on the corresponding website.
:::

## Playback Progress Adjustment

The basic shortcuts for playback progress adjustment are as follows:

| Shortcut Key | Description   |
| ------------ | ------------- |
| →            | Fast forward 5 seconds     |
| ←            | Rewind 5 seconds |

If you wish to adjust the progress more significantly, you can use the following shortcuts:

| Shortcut Key   | Description            |
| -------------- | ---------------------- |
| Ctrl+→         | Fast forward 30 seconds |
| Ctrl+←         | Rewind 30 seconds |

But the above shortcuts may conflict with other system shortcuts and may not work. For example, on MacOS, this shortcut cannot be used.

Some websites prevent external logic from adjusting playback progress, such as [Tencent Classroom](https://ke.qq.com/). For these cases, the script added thorough control over playback progress management, but this needs to be manually enabled, because once activated, the following will occur:

- Playback progress can only be adjusted using plugin shortcuts
- The website's own playback progress management will become ineffective

![blockSetCurrentTime](./img/blockSetCurrentTime.png)

::: tip
Changing this configuration will only affect the current website and will not apply globally. If other websites also cannot control the playback progress, you will need to repeat the above settings on the corresponding website.
:::

## Fullscreen and Web Fullscreen

The shortcuts for activating fullscreen and web fullscreen for videos are as follows:

| Shortcut Key    | Description                 |
| --------------- | --------------------------- |
| Enter           | Enter/exit fullscreen       |
| shift+Enter     | Enter/exit web fullscreen   |
| Esc             | Exit fullscreen/web fullscreen |

::: warning
Due to the complexity of full screen and web full screen, we cannot guarantee that this feature will work 100% normally. Most websites require specific compatibility to maintain consistency with the website's own full-screen/web fullscreen logic, such as Bilibili, YouTube, etc. For mainstream video websites, the author will periodically adjust and refine compatibility logic to ensure the functions of these websites are usable.
:::

## Video Screenshot

The shortcut for capturing a video screenshot is as follows:

| Shortcut Key | Description                       |
| ------------ | --------------------------------- |
| shift+S      | Screenshot, capture current screen and save |

If you pause and find the screenshot is not satisfying and you want to find the best frame, you can use the frame operation shortcut keys for fine-tuning:

| Shortcut Key | Description             |
| ------------ | ----------------------- |
| D            | Previous frame of the video |
| F            | Next frame of the video |

After a successful screenshot, the script will decide whether to save the screenshot to the local download folder of your computer or to open a new window to let users handle the screenshot based on the website’s support.

::: tip
If the screenshot is automatically downloaded and saved to the local folder, the script will also try to automatically copy the screenshot into your clipboard, allowing you to paste the screenshot directly into a chat window or a Word document.
:::

::: warning
If you press the screenshot shortcut key and neither auto-download nor open a new window occur, it is very likely that you have prevented a pop-up, causing the screenshot feature to work abnormally. In such cases, simply allow pop-up operations for the current website.
:::

## Media Download

The shortcut for downloading media files is as follows:

| Shortcut Key | Description                               |
| ------------ | ----------------------------------------- |
| shift+D      | Download audio and video files (experimental feature) |

::: tip
Theoretically, it supports downloading all media files played using standard HTML5 technology, but it cannot be ruled out that the website itself has done a lot of anti-download work, which may prevent normal downloading.
:::

::: warning
Note: Media downloading is currently an experimental feature and must be manually enabled by selecting the 'Enable Experimental Features' option. For instructions on how to enable experimental features, please refer to the relevant Q&A documentation.
:::

## Picture-in-Picture (PiP) Function

The picture-in-picture feature allows you to overlay the current video screen as a small window on top of other pages/windows, enabling you to watch videos and perform other operations simultaneously.

The shortcut to activate video picture-in-picture is as follows:

| Shortcut Key | Description                      |
| ------------ | -------------------------------- |
| shift+P      | Enter or exit picture-in-picture |

In order to control the picture-in-picture video on other web pages, when you enter picture-in-picture mode, the plugin will start cross-TAB control capabilities.

Some basic video control shortcuts can still be applied normally to the picture-in-picture video, such as:

- Play/Pause
- Speed/Volume control
- Playback progress control

::: tip
Cross-TAB control allows you to exit picture-in-picture on another web page via the shortcut (shift+P) and retain 10s of cross-TAB control capability after exiting. This allows you to continue operations such as play/pause without switching back to the original webpage.
:::

::: warning
After starting picture-in-picture, because cross-TAB control is initiated, some default shortcuts will become invalid. If you need to perform frequent keyboard operations on other web pages, it's recommended to close picture-in-picture first, otherwise it might cause unnecessary confusion.
:::

## Video Panning and Zooming

The script allows you to pan and zoom the video screen using shortcuts, which are as follows:

| Shortcut Key | Description                |
| ------------ | -------------------------- |
| shift+C      | Zoom in on the video +0.05 |
| shift+X      | Zoom out of the video -0.05 |
| shift+Z      | Reset video view           |
| shift+→      | Move the screen right 10px |
| shift+←      | Move the screen left 10px  |
| shift+↑      | Move the screen up 10px    |
| shift+↓      | Move the screen down 10px  |

Version `3.5.1` and above added the ability to restore and revert video screen panning and zooming. By pressing shift+Z, you can revert to the initial screen state, and pressing shift+Z again will revert to the last set screen panning and zoom status.

::: tip
To return to the normal screen state from video screen pan and zoom, mirror and rotate, and adding filters, you can simply refresh the page. So, if you don't remember the shortcuts, or you accidentally touch the keyboard causing the video to look abnormal, don’t panic, just refresh the page to recover.
:::

## Screen Mirroring and Rotation

The script allows you to mirror and rotate the video screen using shortcuts, which are as follows:

| Shortcut Key | Description                |
| ------------ | -------------------------- |
| S            | Rotate the screen by 90 degrees |
| M            | Flip the screen horizontally  |
| shift+M      | Flip the screen vertically  |

::: tip
To return to the normal screen state from video screen pan and zoom, mirror and rotate, and adding filters, you can simply refresh the page. So, if you don't remember the shortcuts, or you accidentally touch the keyboard causing the video to look abnormal, don’t panic, just refresh the page to recover.
:::

## Filter Adjustment

The script supports adjusting video screen filters using shortcuts, which are as follows:

| Shortcut Key | Description           |
| ------------ | --------------------- |
| E            | Increase brightness %  |
| W            | Decrease brightness %  |
| T            | Increase contrast %    |
| R            | Decrease contrast %    |
| U            | Increase saturation %  |
| Y            | Decrease saturation %  |
| O            | Increase hue by 1 degree |
| I            | Decrease hue by 1 degree |
| K            | Increase blur by 1 px   |
| J            | Decrease blur by 1 px   |
| Q            | Reset image            |

::: tip
To return to the normal screen state from video screen pan and zoom, mirror and rotate, and adding filters, you can simply refresh the page. So, if you don't remember the shortcuts, or you accidentally touch the keyboard causing the video to look abnormal, don’t panic, just refresh the page to recover.
:::

## Shortcut Key Trigger Range Adjustment

By default, the trigger range for shortcuts on a webpage with videos will be any area of the webpage, which facilitates very convenient video control.

However, the broad range of effect can inevitably lead to some unexpected negative effects. If this occurs, you can try adjusting the trigger range for shortcuts to only fire when the mouse focus is within the video DOM, with the switch shortcut as follows:

| Shortcut Key | Description                                  |
| ------------ | -------------------------------------------- |
| ctrl+\       | Determines if shortcuts are usable across the entire webpage, default true  |

When `Global mode: off` appears in the top right corner of the video screen, it means your focus adjustment has been successful:

![global_mode_off](./img/global_mode_off.jpg)  

## Custom Functions and Configurations

To address the issues of occupied key positions and shortcut conflicts, version `v3.7.0` added the ability to allow external customization of shortcuts and other related capabilities.

For security considerations and minimizing potential external contamination, external customization capabilities must be enabled via the menu:

<img src="./img/allowExternalCustomConfiguration.png" width=380 alt="allowExternalCustomConfiguration" />

Once enabled, you can define the plugin's shortcuts and other capabilities through external scripts.

You can refer to the following script for customizing: [https://greasyfork.org/en/scripts/455396](https://greasyfork.org/en/scripts/455396)  

You can also click the link below to view the complete custom reference code:  
[HTML5 Player Custom Configuration](./customConfiguration.md)
