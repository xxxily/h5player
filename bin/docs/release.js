/**
 * 将dist/h5player-docs下的所有文件同步到h5player-docs所在的目录下，文件名重复的直接覆盖
 */
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import dotenv from 'dotenv'
const env = dotenv.config().parsed

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootPath = path.resolve(__dirname, '../../')

const docsPath = path.resolve(rootPath, env.DOCS_TARGET_PATH || '../h5player-docs/')
const distPath = path.resolve(rootPath, './dist/h5player-docs/')
const userScriptPath = path.resolve(rootPath, './dist/h5player.user.js')

const copyFile = (src, dist) => {
  fs.copyFileSync(src, dist)
}

const copyDir = (src, dist) => {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist)
  }
  const files = fs.readdirSync(src)
  files.forEach(file => {
    const srcPath = `${src}/${file}`
    const distPath = `${dist}/${file}`
    const stat = fs.statSync(srcPath)
    if (stat.isFile()) {
      copyFile(srcPath, distPath)
    } else if (stat.isDirectory()) {
      copyDir(srcPath, distPath)
    }
  })
}

copyDir(distPath, docsPath)
copyFile(userScriptPath, path.resolve(docsPath, 'h5player.user.js'))
