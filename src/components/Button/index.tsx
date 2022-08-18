import './Button.css'

interface Props {
    title: string;
    icon?: string;
    style?: string;
    disable?: boolean
    handleClick?:()=>void
}
const index = ({title,icon,style, handleClick,disable}:Props) =>  {
  return (
      <button className={style} onClick={handleClick} disabled={disable}>
          <span ><i className={icon}></i></span>
          {title}
      </button>
  )
}

export default index