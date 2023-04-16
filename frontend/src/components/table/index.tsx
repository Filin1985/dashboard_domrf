import styles from './styles.module.scss'
import { useSelector } from '../../services/hooks'

const Table = () => {
  const { flatDataByYear } = useSelector((store) => store.flatData)
  const { filterType } = useSelector((store) => store.regionData)

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table__head}>Год</th>
            <th className={styles.table__head}>Продано</th>
            <th className={styles.table__head}>Не продано</th>
            <th className={styles.table__head}>Продажи не открыты</th>
            <th className={styles.table__head}>Всего</th>
          </tr>
        </thead>
        <tbody>
          {flatDataByYear.map((item) => (
            <tr
              className={filterType === item.date ? styles.table__active : ''}
            >
              <td className={styles.table__row}>{item.date}</td>
              <td className={styles.table__row}>{item.close_meters}</td>
              <td className={styles.table__row}>{item.open_meters}</td>
              <td className={styles.table__row}>{item.pending_meters}</td>
              <td className={styles.table__row}>{item.all_meters}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
