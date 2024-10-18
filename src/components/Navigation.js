import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { logout } from '../actions/action';

function Navigation() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = (event) => {
        event.preventDefault()
        dispatch(logout())
        navigate('/');
    }

    return (
        <>
            <Navbar bg="dark" style={{ "height": "75px" }}>
                <Navbar.Brand href="/purchasedItems" style={{ "marginTop": '10px' }}>
                    <img height="55px" alt="csp1" src={process.env.PUBLIC_URL + '/images/csp1.png'} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" style={{ "marginRight": '10px' }}>
                    <Nav>
                        <NavItem>
                            <button className="logout" onClick={(event) => onLogout(event)}>Logout</button>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navigation;
