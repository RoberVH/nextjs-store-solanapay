import { useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"

export default function Confirmed() {
  const [percentage, setPercentage] = useState(0)
  const [text, setText] = useState('🥃')
  const [pathColor, setPathColor] = useState("#BF84FC")

  useEffect(() => {
    const t1 = setTimeout(() => setPercentage(100), 100)
    const t2 = setTimeout(() => {setText("✅"); setPathColor("#00AB00");}, 600);


    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <CircularProgressbar value={percentage} text={text} styles={
      buildStyles({
        pathColor,
      })
    } />
  )
}