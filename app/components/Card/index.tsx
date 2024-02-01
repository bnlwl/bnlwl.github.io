import type {ReactNode} from 'react'
import './index.css'
import {useMemo} from "react";
interface Props {
    title: ReactNode,
    user: ReactNode,
    content: ReactNode,
    type:string
}

const Card = ({title, user, content, type}: Props) => {
  const leading = useMemo(() => {
    let classname = 'leading-6'

    if(type === '词') {
      classname = 'leading-7'
    }

    if(type === '诗'){
      classname = 'leading-8 text-center'
    }

    return classname
  }, [type])

  return <div className="m-card">
    <div className="m-card-align">
      <span className="m-card-align-red"></span>
      <span className="m-card-align-yellow"></span>
      <span className="m-card-align-green"></span>
    </div>

    <h1 className="text-center m-1 text-[#DAF4ED] text-shadow-lg">{title}</h1>
    <h3 className="text-center text-[#DAF4ED] text-shadow-lg">{user}</h3>
    <p className={`whitespace-pre-wrap py-4 ${leading}`}>{content}</p>
  </div>
}

export default Card;
