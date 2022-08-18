import PropsType from 'prop-types';
import './Title.css'

interface Props {
title:string
}

const Title = ({title}:Props) => (
  <h1>
    {title}
  </h1>
)

Title.prototype = {
    title: PropsType.string.isRequired
}

export default Title;