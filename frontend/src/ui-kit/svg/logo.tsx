import React from 'react'

interface IIcon {
  onClick?: (e: React.MouseEvent<HTMLOrSVGElement>) => void
  style?: object
}

export const Logo: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.632 20.7346H20.5572V2.58422H15.632V20.7346ZM12.9412 23.3218H23.2463V0H12.9412V23.3218Z'
        fill='currentColor'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 28.44H43.8027V25.8633H0V28.44Z'
        fill='currentColor'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.68094 38.5067H15.3421V33.5877H2.68094V38.5067ZM0 43.9998H2.68094V41.0804H18.0237V31.0117H0V43.9998Z'
        fill='currentColor'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M33.4963 2.58421V23.3215H36.1854V7.75743L41.1096 2.58626V23.3215H43.8014V0H40.0217L36.1854 4.01693V0H32.4074L25.8789 6.77882V23.3215H28.5714V7.75845L33.4963 2.58421Z'
        fill='currentColor'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.3268 38.5067H30.7971V33.5877H23.3268V38.5067ZM33.5942 38.5067H41.1213V33.5877H33.5942V38.5067ZM20.6445 41.0804H30.7974V43.9998H33.5942V41.0804H43.8019V31.0117H20.6445V41.0804Z'
        fill='currentColor'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.69208 7.75845L7.61525 2.58626V20.7349H2.69208V7.75845ZM7.61525 23.3215H10.3064V0H6.52802L0.000244141 6.77882V23.3215H7.61525Z'
        fill='currentColor'
      ></path>
    </svg>
  )
}
