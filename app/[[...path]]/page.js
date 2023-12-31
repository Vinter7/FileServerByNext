import Link from 'next/link'
const { readdirSync } = require('fs')
// const { join } = require('path')

const root = 'public/'

export default ({ params }) => {
  let folds = params.path ?? []
  const path = folds.join('/')

  const files = {}

  for (const i of readdirSync(root + path)) files[i] = path + '/' + i

  return (
    <>
      <h1>
        <Link href="../">{path + '/'}</Link>
      </h1>
      <ul>
        {Object.entries(files).map(([k, v]) => (
          <li key={k}>
            <Link href={v}>{k}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
