const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

// 确保目标目录存在
const extensionDir = path.join(__dirname, '../web-extension')
const iconsDir = path.join(extensionDir, 'icons')

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true })
}

// 复制图标文件（假设已经存在）
const iconSizes = [16, 48, 128]
iconSizes.forEach(size => {
  const sourceIcon = path.join(__dirname, `icons/icon${size}.png`)
  const targetIcon = path.join(iconsDir, `icon${size}.png`)

  if (fs.existsSync(sourceIcon)) {
    fs.copyFileSync(sourceIcon, targetIcon)
  } else {
    console.warn(`警告: 图标文件 ${sourceIcon} 不存在`)
  }
})

// 构建扩展包
console.log('正在构建 WebExtension...')

// 为Chrome构建
exec(`cd ${extensionDir} && zip -r ../h5player-chrome.zip *`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Chrome构建失败: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`Chrome构建警告: ${stderr}`)
  }
  console.log(`Chrome构建成功: ${stdout}`)
  console.log('Chrome扩展已打包为 h5player-chrome.zip')
})

// 为Firefox构建
exec(`cd ${extensionDir} && zip -r ../h5player-firefox.zip *`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Firefox构建失败: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`Firefox构建警告: ${stderr}`)
  }
  console.log(`Firefox构建成功: ${stdout}`)
  console.log('Firefox扩展已打包为 h5player-firefox.zip')
})
