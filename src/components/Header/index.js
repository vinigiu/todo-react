import Logo from '../../assets/logo@2x.png'
import Sino from '../../assets/bell.png'
import * as HeaderS from './styles'
import { Link } from 'react-router-dom'

function Header(props) {
    return(
            <HeaderS.Container>
                <HeaderS.LeftSide>
                    <img src={Logo}></img>
                </HeaderS.LeftSide>
                <HeaderS.RightSide>
                    <button><Link to="/">INÍCIO</Link></button>
                    <span className='dividir'></span>
                    <button className='button'><Link to="/tasks">NOVA TAREFA</Link></button>
                    <button>
                        <img src={Sino}></img>
                        <span>7</span>
                    </button>
                </HeaderS.RightSide>
            </HeaderS.Container>
    )
}

export default Header;