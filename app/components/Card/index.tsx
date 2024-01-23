import type {ReactNode} from 'react'
import './index.css'
interface Props {
    title: ReactNode,
    user: ReactNode,
    content: ReactNode,
}

const Card = ({title, user, content}: Props) => {
  return <div className="m-card">
    <div className="m-card-align">
      <span className="m-card-align-red"></span>
      <span className="m-card-align-yellow"></span>
      <span className="m-card-align-green"></span>
    </div>

    <h1 className="text-center m-1 text-[#DAF4ED] text-shadow-lg">{title}</h1>
    <h3 className="text-center text-[#DAF4ED] text-shadow-lg">{user}</h3>
    <p className="whitespace-pre-wrap">{content}</p>
  </div>
}

export default Card;
