import Link from 'next/link'
const { readdirSync } = require('fs')
import Upload from '../Upload'
import Delete from '../Delete'

const root = 'public/'

export default ({ params }) => {
  let folds = params.path ?? []
  const path = folds.join('/')
  const fold = folds.pop() ?? ''
  const files = {}

  for (const i of readdirSync(root + path)) files[i] = fold + '/' + i

  return (
    <>
      <h1>
        <Link href={'/' + folds.join('/')}>{path + '/'}</Link>
      </h1>
      <Upload path={path} />
      <ul>
        {Object.entries(files).map(([k, v]) => (
          <li key={k}>
            {/* <div></div> */}
            <Link href={v}>{k}</Link>&nbsp;&nbsp;&nbsp;
            <Delete path={v} />
          </li>
        ))}
      </ul>
    </>
  )
}
