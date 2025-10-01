'use client'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import type { FC } from 'react'

export const ArticlesDashboard: FC = () => {
  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 240
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro'
      ]
    },
    yAxis: {
      title: {
        text: 'Total de Usuários'
      }
    },
    series: [
      {
        type: 'line',
        name: 'Usuários Ativos',
        data: [12, 19, 14, 17, 22, 26, 24, 18, 21],
        color: '#d97706',
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: '#000'
          }
        }
      }
    ]
  }

  return (
    <div className="max-h-[260px] w-full min-w-[300px] bg-white pt-8 2xl:min-w-[450px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
