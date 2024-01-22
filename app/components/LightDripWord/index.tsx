import DripWord from "@/app/utils/dripWord";
import {useEffect} from "react";

const LightDripWord = () => {
  useEffect(() => {
    const container = document.querySelector('#container')!
    const dripWord = new DripWord({element: container})
    console.log(dripWord);
  }, [])

  return <div id="container">777</div>
}

export default LightDripWord
