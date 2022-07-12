import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return(
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido
                    <a href="https://www.xvideos.com/profiles/rakan_gasoso/photos/6098507/pinto_do_rakan?fbc=">@joaaoj</a>
                </p>
            </div>
        </header>
    )
}

export default Header