'use client'

import { DeleteOutlined } from '@ant-design/icons'
import './style.css'

export default ({ path }) => {
  const del = async () => {
    if (!confirm('Are you sure to delete this file?')) return

    const res = await fetch('/api/delete', {
      method: 'POST',
      body: JSON.stringify({ path }),
    })
    if (res.ok) {
      alert('delete success')
      location.reload()
    } else alert('delete fail')
  }

  return <DeleteOutlined className="icon" onClick={del} />
}
