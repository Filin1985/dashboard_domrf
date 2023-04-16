import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useSelector, useDispatch } from '../../services/hooks'
import { expandData } from '../../services/slices/regionsSlice'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const BarChartComponent = () => {
  const {
    regionsData,
    isExpended,
    filterType,
    filteredRegions2020,
    filteredRegions2021,
    filteredRegions2022,
    filteredRegions2023,
  } = useSelector((store) => store.regionData)
  const [filteredData, setDilteredData] = useState([])

  console.log(filterType)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(expandData())
  }

  return (
    <div className={styles.container}>
      <div
        className={
          isExpended ? styles.container__box_expended : styles.container__box
        }
      >
        <h1 className={styles.container__title}>
          Количество многоквартирных домов, шт
        </h1>
        <button
          onClick={handleClick}
          className={styles.container__button}
          type='button'
        >
          Расширить
        </button>
      </div>
      {filteredRegions2020.length > 0 && (
        <div
          className={
            isExpended ? styles.container__expanded : styles.container__scroll
          }
        >
          <BarChart
            width={600}
            height={2800}
            data={
              filterType === '2023'
                ? filteredRegions2023
                : filterType === '2020'
                ? filteredRegions2020
                : filterType === '2021'
                ? filteredRegions2021
                : filterType === '2022'
                ? filteredRegions2022
                : regionsData
            }
            layout='vertical'
          >
            <XAxis type='number' hide />
            <YAxis width={200} dataKey='region' type='category' />
            <Tooltip />
            <Bar
              name='2020 год'
              layout='vertical'
              dataKey='year_2020'
              stackId='a'
              fill='rgba(78, 195, 224, 0.4)'
            />
            <Bar
              name='2021 год'
              layout='vertical'
              dataKey='year_2021'
              stackId='a'
              fill='rgba(139, 197, 64, 0.6)'
            />
            <Bar
              name='2022 год'
              layout='vertical'
              dataKey='year_2022'
              stackId='a'
              fill='rgb(228, 231, 232)'
            />
            <Bar
              name='2023 год'
              layout='vertical'
              dataKey='year_2023'
              stackId='a'
              fill='rgb(122, 131, 134)'
            />
          </BarChart>
        </div>
      )}
    </div>
  )
}

export default BarChartComponent
