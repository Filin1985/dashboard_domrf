import React from 'react'
import { Logo } from '../../ui-kit/svg/logo'
import { LogoText } from '../../ui-kit/svg/logoText'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__logo}>
        <Logo />
        <LogoText />
      </div>
    </div>
  )
}

export default Header
