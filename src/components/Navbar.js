import { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import './css/navbar.scss'

const Navbar = ({ history }) => {
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "MENU"
    })
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        history.listen(() => {
            setState({
                clicked: false, menuName: "MENU"
            })
        })
    })

    const hanldeMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            })
            console.log("1")
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            })
            console.log("2")

        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
            console.log("3")

        }
    }
    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        }, 1000)
    }

    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <Link to="/"><h2>IPF</h2></Link>
                    </div>
                    <div className="hamburger">
                        <button disabled={disabled} onClick={hanldeMenu}>{state.menuName}</button>
                    </div>
                </div>
            </div>
            <BurgerMenu state={state} />
        </header>
    )
}

export default withRouter(Navbar)
