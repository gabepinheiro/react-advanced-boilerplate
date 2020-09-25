import { render, screen } from '@testing-library/react'

import Main from '.'

//Describe => Descrever algo que será testado.
//Nesse caso iremos testar o Component <Main />
describe('<Main />', () => {
  //Escrevendo o teste de algo que esperamos que aconteça no Component
  it('Should render the heading', () => {
    const { container } = render(<Main />)

    //Esperamos que encontre (aconteça) heading (h1,h2,h3...) escrito "react avançado"
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument() //E que o mesmo exista no Document

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})

//SnapShot
