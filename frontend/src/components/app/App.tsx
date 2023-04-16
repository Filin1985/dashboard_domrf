import { useEffect } from 'react'
import { useDispatch } from '../../services/hooks'
import { getAllFlatData } from '../../services/slices/flatSlice'
import { getAllRegionData } from '../../services/slices/regionsSlice'
import styles from './styles.module.scss'
import BarChartComponent from '../bar-chart'
import PieChartComponent from '../pie-chart'
import Table from '../table'
import Header from '../header'
import Filter from '../filter'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFlatData())
    dispatch(getAllRegionData())
  }, [dispatch])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.container__title}>
          Основные показатели жилищного строительства
        </h1>
        <Filter />
        <div className={styles.container__table}>
          <Table />
        </div>
        <div className={styles.container__charts}>
          <PieChartComponent />
          <BarChartComponent />
        </div>
      </div>
    </>
  )
}

export default App
