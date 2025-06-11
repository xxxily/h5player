# Update Log

## 4.3.4 [2025/06/11]

* Fix the problem that related addresses cannot be accessed normally

## 4.3.3 [2025/03/09]  

* Eliminated recurring validation loops during Cloudflare human verification processes
* Patched unintended concurrent loading of duplicate URLs
* Refined core algorithms for smoother operation and improved resource efficiency

## 4.3.2 [2024/10/24]

* Fix the persistent UI display issue in Tencent Video.
* Optimize the underlying logic for UI visibility and invisibility to enhance compatibility.

## 4.3.1 [2024/10/19]

* Adjust and refine the script introduction copy.

## 4.3.0 [2024/10/16]

* Disable recommended modules to let the script focus on core functions.
* Adjust the menu order to facilitate global shutdown of the graphical interface.

## 4.2.8 [2024/08/01]

* Optimize the underlying hook logic to reduce false positives.
* Solve the issue with Cloudflare CAPTCHA validation anomalies.

## 4.2.7 [2024/05/24]

* Solve the issue of not being able to pass Cloudflare's CAPTCHA verification.

## 4.2.6 [2024/05/01]

* Fix the issue of inaccessible Chinese document guidance.

## 4.2.5 [2024/04/18]

* Added a frequently asked questions menu option.
* Fixed the URL paths for other document links.

## 4.2.4 [2024/03/29]

* Added a switch configuration option for the mouse control module.
* Added a configuration option for the effective time of long-pressing the mouse.
* Optimized the default parameter options for the default custom configuration.
* Enhanced the categorization and display logic of the menu options.

## 4.2.3 [2024/03/02]

* Added mouse control module, planning to enhance the mouse control capability in the future
* Redefined the data structure of the blacklist, adding urls and domains as two global blacklists
* Refactored the script disabling logic for a specific domain to enable custom editing of the disable list configuration
* Modified the default recommendation configuration list, discarding irrational old recommendations
* Corrected the show/hide logic of the script disabling menu, ensuring normal enable/disable of the script under any website

## 4.2.2 [2024/02/29]

* Added URL exclusion configuration options, allowing for more refined configuration
* Added the B site homepage to the URL exclusion to fix severe memory leaks on the homepage reported by some users

## 4.2.1 [2024/02/28]

* Optimized disable logic to thoroughly disable scripts on individual websites
* Removed the shortcut key disabling script logic, solving issues with too many interfering logics
* Optimized some abnormal interactive logic in the UI

## 4.2.0 [2024/02/26]

* Improved support for non-Greasemonkey plugins to enhance compatibility
* Removed the looping scrolling logic of the recommendation module to improve user experience
* Adjusted the rendering logic of the recommendation module to downplay the display effect
* Added control logic for disabling UI options in the Greasemonkey menu
* Optimized download save logic to reduce filename input
* Internationalized the download module prompts

## 4.1.0 [2024/02/22]

* Added a module for actively reading configuration information from the official website
* Added logic to prevent UI rendering deadlocks
* Optimized the display logic of the UI to reduce toolbar interference
* Adjusted the display order of the UI close button
* Fixed the issue with global configuration write exceptions
* Fixed the issue with YouTube subtitles not following properly
* Added the @antifeature tag as needed

## 4.0.1 [2024/02/19]

* Added the @antifeature according to the community rules, being proactive
* Resolved the issue of being reported because the free GPT-4 was promoted in carousel ads (it's honestly free!)
* Currently, no plans to add a series of "features" with the @antifeature tag
* But, some promotional links that won't affect the user experience might be added

## 4.0.0 [2024/02/15]

* Added a visual UI operation interface, lowering the usage threshold and improving operational convenience
* Implemented support for adjusting speed in mobile browsers (update of user document will follow)
* Improved the video download feature, significantly enhancing streaming extraction capability for more websites
* Perfected the settings option feature, allowing for more refined configuration
* Optimized the memory usage of experimental features and performed overall performance tuning
* Fixed a series of known issues (But the addition of the UI interface may also introduce more potential issues)

## 3.7.12 [2024/01/19]

* Fixed the issue of oversized jpg files when saving screenshots
* Fixed the problem of passing screenshots to the clipboard being ineffective

## 3.7.11 [2024/01/04]

* Added script logic to automatically skip Youtube ads
* Fixed the problem of the underlying shortcut key library not supporting multiple window object bindings
* Solved the problem of unable to pass shortcuts on iframe nested websites

## 3.7.10 [2024/01/03]

* Added the function of remembering the historical playback speed
* Optimized the visibility logic of the progress bar when YouTube is paused
* Optimized debug output-related logic

## 3.7.9 [2023/11/03]

* Solved the problem of the Loading icon lingering during YouTube play and pause

## 3.7.8 [2023/06/28]

* Attempted to optimize the memory occupancy of the B site

## 3.7.7 [2023/06/26]

* Fixed the problem of audio and visual asynchrony after frequent switching of high and low speed

## 3.7.6 [2023/05/16]

* Added a UI configuration interface for global configuration
* Added support for ShadowDOM events
* Fixed the problem of B-site video ratio being interfered after adjustment

## 3.7.5 [2023/04/21]

* Solved the problem of not being able to chat normally in NewBing
* Resolved the issue of not being able to enter Wenxin Yiyuan normally
* Resolved the issue of script icons displaying abnormally under certain networks
* Fixed logical issues with shortcut keys compatible with win and mac

## 3.7.4 [2023/03/31]

* Promoted the public interest ChatGPT

## 3.7.3 [2023/03/15]

* Added menu options to enable/disable scripts
* Changed UA to solve the playback speed problem for non-members of Baidu Drive

## 3.7.2 [2023/02/23]

* Resolved the playback speed issue for non-members of Baidu Drive
* Enhanced the anti-interference ability of the speed adjustment

## 3.7.1 [2022/11/29]

* Added the switch menu option for volume gain
* Added the switch menu option for cross-domain control
* Enhanced the internationalization information

## 3.7.0 [2022/11/25]

* Implemented the ability to customize shortcut keys
* Implemented the ability to customize configurations
* Implemented the ability to customize the task configuration center
* Increased the ability of volume gain to enhance volume loudness
* Added more menu control items and optimized menu interaction
* Removed debug mode to reduce unnecessary information output
* Optimized the issue of shortcut key occupancy and conflict
* Solved the issue of abnormal recovery of playback speed
* Removed some unused APIs and scripts

## 3.6.3 [2022/11/18]

* Increased the anti-interference ability of the speed adjustment
* Fixed the issue of default progress prohibition not being effective
* Fixed the issue of B-site's "Next Episode" feature failing under certain addresses

## 3.6.2 [2022/11/11]

* Optimized menu description
* Fixed the issue of B-site’s HEVC video control failing

## 3.6.1 [2022/11/3]

* Added an option to switch on/off experimental features
* Added the ability to download video stream content (experimental feature)
* Optimized playback progress record and recovery logic
* Fixed the issue with overlapped Tampermonkey menus

## 3.6.0 [2022/10/23]

* Refactored the underlying control logic to enhance compatibility
* Added support for speed control of audio playback
* Added support for the AdGuard extension
* Can be used as a separate script introduced into web pages
* Gradually reduced dependence on Tampermonkey's proprietary API
* Adjusted the logic for recording playback progress
* Optimized and improved the accuracy of playback instance switching
* Fixed the issue of speed control failure in Tencent videos
* Fixed the problem of content prompts lingering on the page
* Solved the issue of control over the play progress not being able to return to 0:00
* Solved the issue of numeric menus appearing in Tampermonkey

## 3.5.4 [2022/10/9]

* Added compatibility for lower version webkit core

## 3.5.3 [2022/9/28]

* Optimized the double-click reaction time of the numeric key speed adjustment
* Fixed the issue of frequently appearing tips
* Fixed the compatibility issue with the Duolingo website

## 3.5.2 [2022/9/26]

* Added the ability to adjust the speed jump-wise
* Solved the issue of Youtube's speed adjustment not being effective
* Updated script documentation information and related addresses
* Fixed the issue of mute/unmute failure on some websites

## 3.5.1 [2022/9/24]

* Added the ability to recover video pan, zoom, and rotate
* Optimized compatibility with Xuetang Online
* Optimized debug information output

## 3.5.0 [2022/9/21]

* Refactored configuration option storage management logic
* Enhanced the fault tolerance ability of play/pause state switching
* Improved success rate of script initialization
* Increased detection rate of video instances
* Optimized shortcut key occupancy situation for cross-TAB control
* Adjusted volume amplitude from 10% to 5%
* Adjusted screen zoom from 10% to 5%
* Removed volume sync logic during initialization of instances
* Removed useless code to streamline script volume
* Fixed playback control support for several sites

## 3.4.8 [2022/9/13]

* Temporarily retreated to the 3.4.6 code

## 3.4.7 [2022/9/06]

* Added management logic to record playback volume
* Implemented compatibility between speed adjustment and website's own speed adjustment
* Added configurable options to the task configuration center
* Added a menu option to turn on/off enhanced configurations
* Added blocking of adjustment playback progress detection and anti-blocking
* Fixed the abnormal synchronization of configuration items in the configuration item state manager

## 3.4.6 [2022/9/04]

* Added detection of blocking speed adjustment and anti-blocking
* Enhanced the accuracy of video instance switching in multi-instance video websites
* Optimized the user experience of West Melon Video, Zhihu Video, Weibo Video

## 3.4.5 [2022/9/02]

* Implemented automatic writing of video screenshot results to the clipboard
* Added configurable items to the task configuration center
* Enhanced fault tolerance of the task configuration center
* Functionized shortcut key call
* Optimized support for Netflix

## 3.4.4 [2022/8/30]

* Added configuration option for global playback speed
* Optimized speed recording of cross-domain limited pages
* Fixed the problem of the auto-play menu option being invalid
* Fixed the problem of failed volume adjustment for Zhihu videos

## 3.4.3 [2022/8/29]

* Added support for local video playback control
* Added support for B station's HEVC videos (bwp player)
* Fixed the style disorder problem that may be caused by the prompt DOM
* Optimized the condition judgment when automatically paused when screenshotting

## 3.4.2 [2022/8/26]

* Adjusted screenshot interaction to achieve full compatibility of video screenshots
* Added video mirror flip function
* Optimized cross-TAB control logic
* Optimized picture-in-picture detection logic
* Fixed the cross-TAB control failure problem caused by the picture-in-picture performance strategy

## 3.4.1 [2022/8/22]

* Improved the control experience of cross-domain iframe videos
* Fixed the menu function of enabling/disabling auto-play

## 3.4.0 [2022/8/21]

* Improved the success rate of script initialization
* Added configuration management script logic
* Adjusted and perfected menu registration logic
* Added compatibility for douyin.com
* Fixed the shortcut key failure problem for B station's "Watch Later" videos

## 3.3.12 [2022/8/14]

* Fixed the problem of B station space pause play invalid
* Fixed the problem of B station next episode shortcut key invalid

## 3.3.11 [2022/8/14]

* Fixed the problem of invalid webpage fullscreen and fullscreen shortcuts for B station

## 3.3.10 [2022/5/10]

* Optimized the function and compatibility of some underlying libraries

## 3.3.9 [2021/6/6]

* Fixed the problem of automatic playback of multiple videos at the same time
* Added a button to disable initialization playback logic

## 3.3.8 [2021/6/6]

* Optimized compatibility with other plugins
* Solved the problem of script failure after initial abnormality

## 3.3.7 [2021/5/30]

* Added automatic playback of B station videos
* Optimized the webpage full-screen function of websites such as Baidu Pan and West Melon Video
* Fixed some script logic errors

## 3.3.6 [2021/5/27]

* Fixed the problem of no speed adjustment prompt after switching videos on B station
* Fixed loading exception problem of icon resources in domestic environments
* Fixed the problem of ineffective video playback speed for non-VIP members of Baidu Netdisk
* Solved the problem of speed adjustment loop before playing videos by non-VIP users of Baidu

## 3.3.5 [2021/5/26]

* Implemented high-speed playback of ads on mainstream video websites
* Refactored some core script library logic
* Optimized script performance and enhanced script compatibility

## 3.3.4 [2021/5/25]

* Reduced the impact of hookJs performance on other websites (temporary solution)

## 3.3.3 [2021/5/20]

* Fixed the issue of ineffective video playback speed for non-VIP members of Baidu Web Disk

## 3.3.2 [2021/5/19]

* Fixed support for Baidu NetDisk and other websites

## 3.3.1 [2020/9/3]

* Solved the problem of black screens on B site

## 3.3.0 [2020/4/24]

* The prompt interface supports internationalization
* Optimized the operation experience of B site and YouTube
* Optimized some other feedback issues

## 3.2.8 [2020/4/12]

* Added debugging auxiliary logic to implement hot update debugging
* Introduced UI-related dependencies, ready for UI interface development
* Solved compatibility issues of some websites

## 3.2.7 [2020/4/11]

* Fixed website page exceptions caused by script errors

## 3.2.6 [2020/4/11]

* Fixed error reporting problems in multiple websites caused by cross-domain screenshots

## 3.2.5 [2020/4/10]

* Corrected some website compatibility issues

## 3.2.4 [2020/4/9]

* Supported cross-domain screenshots
* Supported suspension of specific events (to enhance anti-interference ability)
* Optimized volume adjustment step length logic

## 3.2.3 [2020/4/5]

* Supported multiple languages

## 3.2.2 [2020/4/4]

* Added compatibility with Facebook's full-screen shortcut key
* Added fast forward, fast rewind, fast volume up, fast volume down (ctrl+up and down arrows)
* Fixed rotation function BUG

## 3.2.1 [2019/12/21]

* Automatically restore settings adjusted to be controlled by domain name
* Added compatibility for Station A and cancelled automatic play for Station B
* Optimized some other function details

## 3.2.0 [2019/11/22]

* Added cross-Tab operation Picture-in-Picture video function

## 3.1.2 [2019/11/20]

* Fixed the BUG causing black screen due to non-compatibility of filter in Firefox
* Added one-click play next video function to some websites
* Enhanced compatibility of some websites

## 3.1.1 [2019/11/5]

* Added compatibility for certain websites
* Optimized the logic of obtaining prompt parent node

## 3.1.0 [2019/10/24]

* Added the control option to automatically restore playback progress
* Fixed bugs where tips could not be displayed correctly on some websites

## 3.0.5 [2019/10/14]

* Added compatibility for Mac shortcut keys
* Optimized some code logic

## 3.0.4 [2019/10/11]

* Enhanced compatibility of prompt style under different websites
* Optimized the method of obtaining video wrapper node

## 3.0.3 [2019/10/9]

* Solved the style chaos BUG caused by tips
* Optimized the method of obtaining video wrapper node
* Added MouseObserver module

## 3.0.2 [2019/9/27]

* Fixed the problem of Task Configuration Center failure
* Optimized operation prompt style to reduce interference
* Optimized screenshot file size
* Added compatibility for some websites

## 3.0.1 [2019/9/25]

* Fixed the BUG of screenshot download failure due to overly long screenshot file link
* Added an ico icon

## 3.0.0 [2019/9/22]

* Supported video screenshot
* Supported Shortcut key Cross-domain Control
* Added more useful modules for future development

## 2.6.1 [2019/9/19]

* Removed statistical function
* Compatible with cross-domain iframe play

## 2.6.0 [2019/9/18]

* Added restore play speed function
* Added Esc to exit webpage full screen
* Code logic modularized

## 2.5.1 [2019/9/11]

* Fixed excessive occupation of shortcut keys BUG

## 2.5.0 [2019/9/11]

* Added screen moving function
* Task Configuration Center adds custom initialization method
* Shielded part of the website watermark
* Blocked iQiyi pause ads
* Compatible with Baidu Cloud Disk full screen shortcut keys
* Fixed several BUGs

## 2.4.1 [2019/8/30]

* Compatible with Tencent video speed play
* Added Picture-in-Picture function
* Added shortcut key customization function

## 2.3.3 [2019/8/30]

* Compatible with Tencent video shortcut key operation
* Added Picture-in-Picture function
* Added shortcut key customization function

## 2.3.2 [2019/6/15]

* Compatible with NetEase Open Class webpage
* Fixed non-linear brightness, contrast, saturation adjustment BUG
* Optimized other details such as fast forward and fast rewind

## 2.3.0 [2019/5/5]

* Added default full-screen logic
* Added default webpage full-screen logic
* Fixed other related BUGs

## 2.2.0 [2019/4/21]

* Refactored Task Configuration Center code logic
* Corrected the compatibility logic of Bilibili under pause
* Added compatibility with Bilibili Live
* Fixed other related BUGs

## 2.1.0 [2019/4/18]

* Implemented Task Configuration Center (TCC)
* Added some websites' full screen, webpage full screen play shortcut keys through the Task Configuration Center
* Corrected the problem that the playback speed cannot be synchronized under multiple instances
* Optimized prompt style
* Fixed other related BUGs

## 2.0.0 [2019/4/15]

* Unlocked shadowdom's video component
* Supports multi-instance environment
* Greatly optimized performance, using faster listening methods
* Code restructure and refinement
* Fixed other related BUGs

## 1.3.0 [2019/4/13]

* Added resume playback progress function
* Added record playback speed function
* Added disable plugin shortcut function (Ctrl+space)
* Shortcut key becomes globally available, improved compatibility
* Fixed other related BUGs

## 1.2.0 [2019/4/12]

* Added function to zoom video screen size
* Added support for netflix website
* Fully adjusted code structure
* Corrected some compatibility issues and related BUGs
* Script code engineering, code complies with js standard specification
* Completed documentation

## 1.1.2 [2019/4/11]

* Inherited code, tidied code
* Optimized adjustment of some codes
