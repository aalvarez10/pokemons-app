import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Toast from './Toast'

test('render content',() => {
    const element = {
        text: 'Prueba',
        icon:'fa fa-check',
        show:true,
        color:'success'
    }

    const component = render(<Toast text={element.text} 
                                    icon={element.icon}
                                    show={element.show}
                                    color={element.color}/>)

    console.log(component)
})