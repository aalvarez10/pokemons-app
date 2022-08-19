
import './Toast.css'

interface Props {
  text: string;
  icon: string;
  show: boolean;
  color: string;
}
const Toast = ({text, icon, show, color}:Props) => {
  return (
    <div id="toast" className={show ? "show" :""}>
      <div id="img" className={color}>
        <i className={icon}></i>
      </div>
      <div id="desc">{text}</div>
      </div>
  )
}

export default Toast