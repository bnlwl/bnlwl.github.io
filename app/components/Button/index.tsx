import type {ReactNode} from 'react'
import './index.css'

const Button = ({children}: { children: ReactNode }) => {
  return <button className="m_button">{children}</button>
}

export default Button
