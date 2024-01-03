const fs = require('fs')
const { pipeline } = require('stream')
const root = './public/'

export async function POST(req) {
  const file = (await req.formData()).get('file')

  pipeline(file.stream(), fs.createWriteStream(root + file.name), err =>
    console.log(err || 'success')
  )

  return Response.json('success')
}
