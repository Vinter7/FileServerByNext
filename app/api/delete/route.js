import { join } from 'path'

const fs = require('fs')

const root = './public/'

const delFold = path => {
  for (const i of fs.readdirSync(path)) {
    const filePath = join(path, i)
    if (fs.statSync(filePath).isDirectory()) delFold(filePath)
    else fs.unlinkSync(filePath)
  }
  fs.rmdirSync(path)
}

export async function POST(req) {
  let { path } = await req.json()
  path = join(root + path)
  if (fs.statSync(path).isDirectory()) delFold(path)
  else fs.unlinkSync(path)

  return Response.json('success')
}
