import styles from './index.module.scss'
import { Button } from 'antd'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button type="primary">hello next.js</Button>
    </div>
  )
}

export default Home
