'use client'

export default ({ path }) => {
  const upload = async ({ target }) => {
    console.log(target.files)
    if (!target.files.length) return
    // if (target.files[0].size > 1000000000) return
    const formData = new FormData()
    formData.append('file', target.files[0], path + '/' + target.files[0].name)
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    if (res.ok) {
      alert('upload success')
      location.reload()
    } else alert('upload fail')
  }

  return <input type="file" onChange={upload} />
}
