import logo from '../../assets/restaurante_logo.jpeg';
import { Button, Image, Input } from './Header.js';

export default function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex mx-2 align-items-center" href="#">
                        <Image src={logo} alt="uma pizza com chapeu de cozinheiro" />
                        <h2>Restaurante</h2>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li>
                                <form className="d-flex" role="search">
                                    <Input className="form-control me-2" type="search" placeholder="Pesquisa um item do cardapio" aria-label="Search"/>
                                    <Button className="btn btn-outline-success btn-sm" type="submit">Pesquisa</Button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}