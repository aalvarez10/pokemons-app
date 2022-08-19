import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Button from "./index"

test('render content',() => {
    const element = {
        text: 'Prueba',
        icon:'fa fa-check'
    }

    const component = render(<Button title={element.text} icon={element.icon}/>)

    console.log(component)
})

