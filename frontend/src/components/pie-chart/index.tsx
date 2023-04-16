import React, { useState, useCallback } from 'react'
import styles from './styles.module.scss'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'
import { useSelector } from '../../services/hooks'

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
        {payload.date}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill='none'
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill='#333'
      >{`${value} млн. кв. м`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill='#999'
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

const PieChartComponent = () => {
  const { flatDataByYear } = useSelector((store) => store.flatData)
  const { isExpended } = useSelector((store) => store.regionData)

  const [activeIndex, setActiveIndex] = useState(0)
  const onPieEnter = useCallback(
    (_: any, index: number) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )

  return (
    <div className={isExpended ? styles.container_none : styles.container}>
      <h1 className={styles.container__title}>
        Реализация квартир в строящихся домах РФ за 2020-2023 год
      </h1>
      <PieChart width={600} height={490}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={flatDataByYear}
          cx={280}
          cy={220}
          innerRadius={60}
          outerRadius={100}
          fill='rgba(139, 197, 64, 0.6)'
          dataKey='all_meters'
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </div>
  )
}

export default PieChartComponent
