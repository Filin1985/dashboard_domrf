import React, { SyntheticEvent } from 'react'
import styles from './styles.module.scss'
import { useDispatch } from '../../services/hooks'
import { setFilterTypes } from '../../services/slices/regionsSlice'

const Filter = () => {
  const dispatch = useDispatch()

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = evt.currentTarget
    dispatch(setFilterTypes(button.name))
  }

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>Выберите год</p>
      <div className={styles.container__box}>
        <button
          name='2020'
          className={styles.container__button}
          onClick={handleClick}
        >
          2020
        </button>
        <button
          name='2021'
          className={styles.container__button}
          onClick={handleClick}
        >
          2021
        </button>
        <button
          name='2022'
          className={styles.container__button}
          onClick={handleClick}
        >
          2022
        </button>
        <button
          name='2023'
          className={styles.container__button}
          onClick={handleClick}
        >
          2023
        </button>
        <button className={styles.container__button} onClick={handleClick}>
          Сбросить значения
        </button>
      </div>
    </div>
  )
}

export default Filter
