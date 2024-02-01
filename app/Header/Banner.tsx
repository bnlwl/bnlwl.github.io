'use client'

import {useCallback, useLayoutEffect, useRef, useState} from "react";
import TypeWriter from "@/app/utils/typeWriter";

interface Props {
    className: string,
    text: string
}

const Banner = ({className, text = '中华人民共和国万岁，中国共产党万岁!'}: Props) => {
  const timer = useRef<TimeIntervalRef>(null!)
  const typeWriter = useRef<TypeWriter>(null!)

  const [content, setContent] = useState<string>('')

  const writeText = useCallback(() => {
    setContent('')
    typeWriter.current.reset()
    typeWriter.current.init();
    typeWriter.current.inject(text)
  }, [text])

  const loop = useCallback(() => {
    writeText()
    clearInterval(timer.current)
    timer.current = setInterval(writeText, 5000)
  }, [writeText])

  useLayoutEffect(() => {
    typeWriter.current = new TypeWriter({
      increment: false,
      interval: 120,
      output: (txt: string) => setContent(prevState => prevState + txt)
    })

    loop()

    return () => {
      typeWriter.current.reset()
    }
  }, [loop])

  return <div className={className}>{content}</div>
}

export default Banner
