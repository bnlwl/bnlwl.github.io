'use client'

import React, {useMemo, useState} from "react";
import {useRouter} from "next/navigation";

interface Props {
    className: string
}

interface NavType {
    name: string,
    link: string,
    type: string
}

const navList: NavType[] = [
  {
    name: '诗词',
    link: '/',
    type: 'home'
  },
  {
    name: '方块',
    link: '/dashboard',
    type: 'dashboard'
  }
]

const Nav = ({className}: Props) => {
  const router = useRouter()
  const [active, setActive] = useState<string>('home')

  const classes = useMemo(() => `${className} flex px-4 gap-10`, [className])

  const getClassName = (type: string) => {
    return `hover:bg-[#c02c38] px-5 py-1 rounded-full ${type === active ? 'bg-[#c02c38]' : ''}`
  }

  const handleRouter = (item: NavType) => {
    setActive(item.type)
    router.push(item.link)
  }

  return <div className={classes}>
    {
      navList.map(item => {
        return <div key={item.type} className="cursor-pointer" onClick={() => handleRouter(item)}>
          <span className={getClassName(item.type)}>{item.name}</span>
        </div>
      })
    }
  </div>
}

export default Nav
