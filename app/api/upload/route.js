const fs = require('fs')
const { pipeline } = require('stream')
const root = './public/'

export async function POST(req) {
  const files = (await req.formData()).getAll('file')

  for (const i of files)
    pipeline(i.stream(), fs.createWriteStream(root + i.name), () => {})

  return Response.json('success')
}
