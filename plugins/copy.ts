import fs from 'node:fs'
import path from 'node:path'

export default function copyFiles() {
  return {
    name: 'copy-files',
    hooks: {
      'astro:build:done': async ({ dir: { pathname } }) => {
        const source = path.resolve('.')

        console.log(path.join(pathname, 'theme.yaml'))

        // 复制 ../theme.yaml 和 ../settings.yaml 到输出目录
        fs.copyFileSync(
          path.join(source, 'theme.yaml'),
          path.join(pathname, '..', 'theme.yaml'),
        )

        fs.copyFileSync(
          path.join(source, 'settings.yaml'),
          path.join(pathname, '..', 'settings.yaml'),
        )
      },
    },
  }
}
