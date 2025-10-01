'use client'

import React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts'

export const MostAccessedCategories = () => {
  const data = [
    {
      subject: 'Conheça o projeto do IFSP campeão da feira da Febrace 2025',
      A: 85,
      B: 130,
      fullMark: 150
    },
    {
      subject: 'IFSP firma parceria com indústria local para estágio',
      A: 70,
      B: 100,
      fullMark: 150
    },
    {
      subject: 'Quadra poliesportiva do IFSP recebe projeto de inclusão',
      A: 80,
      B: 90,
      fullMark: 90
    },
    {
      subject: 'Semana de Tecnologia promove inovação no IFSP',
      A: 65,
      B: 85,
      fullMark: 110
    },
    {
      subject: 'IFSP inaugura novo campus em Capivari',
      A: 105,
      B: 85,
      fullMark: 150
    }
  ]

  return (
    <div className="flex w-full flex-col gap-8 rounded-sm bg-white p-8">
      <h2 className="text-2xl !font-bold">Artigos mais acessados</h2>
      <ResponsiveContainer height={270} width="100%">
        <RadarChart cx="50%" cy="50%" data={data} outerRadius="85%">
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
          <PolarRadiusAxis angle={30} tick={{ fontSize: 10 }} />
          <Radar
            dataKey="A"
            fill="#d97706"
            fillOpacity={0.5}
            name="Mike"
            stroke="#d97706"
            strokeWidth={1.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
