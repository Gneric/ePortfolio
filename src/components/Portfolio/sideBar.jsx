import { slide as Menu } from 'react-burger-menu'

export default props => {
    return (
        <Menu {...props} >
            <a id="home" className='menu-item' href="/portfolio">Home</a>
            <a id="about" className='menu-item' href="/tictactoe">Proyects</a>
            <a id="services" className='menu-item' href="/blankTab">Extras</a>
        </Menu>
    )
}