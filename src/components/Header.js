import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const logoutFn = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'> <img src='midnightblog-logo.svg' alt='Logo' /> </Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button className='logout-button' onClick={logoutFn}> Logout </button>
                    </li>
                ) : (
                    <>
                        <div className='login-button'>
                            <li>
                                <Link className='login-text' to='/login'> Login</Link>
                            </li>
                        </div>
                        <div className='register-button'>
                            <li>
                                <Link className='register-text' to='/register'> Register</Link>
                            </li>
                        </div>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header