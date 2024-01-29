'use client'

import { message } from 'antd'

export default ({ path }) => {
  const upload = async ({ target }) => {
    console.log(target.files)
    if (!target.files.length) return
    // if (target.files[0].size > 1000000000) return
    message.loading('uploading', 0)

    const formData = new FormData()
    for (const i of target.files) {
      let filename = ''
      for (const j of i.name) if (j.charCodeAt() < 128) filename += j

      formData.append('file', i, path + '/' + filename)
    }

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    if (res.ok) {
      alert('upload success')
      location.reload()
    } else alert('upload fail')

    message.destroy()
  }

  return <input type="file" onChange={upload} multiple />
}
