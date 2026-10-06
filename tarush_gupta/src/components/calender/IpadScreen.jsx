import { events } from '../../data'
import './iPadScreen.css'
export default function IpadScreen({ idx }) {
    return idx === 5 ?
    <section id="ipadScreen">
        {
            events.map(item => (<img src={`./ipadImgs/${item.img}.webp`} id={`ipad-img-${item.img}`} className='' alt="" key={item.img} />))
        }
    </section>
    : <></>
}