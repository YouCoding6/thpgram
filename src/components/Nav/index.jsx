import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from 'store/actions'
import { useHistory } from 'react-router-dom'





const Nav = () => {

    const currentUser = useSelector(state => state.authReducer)
    console.log('state', currentUser)
    const history = useHistory();
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        history.push('/')
    }
    return (
        <div className="row navbar navbar-expand-lg align-items-center text-center py-3">
            <div className="col-md-2" >
                <Link className="nav-link link-dark ps-0" to="/">Home</Link>
            </div>
            {!currentUser.id &&
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <Link className="nav-link link-dark" to="/register">Sign up</Link>
                        </div>
                        <div className="col-md-3">
                            <Link className="nav-link link-dark" to="/login">Sign in</Link>
                        </div>
                    </div>
                </div>
            }

            {currentUser.id &&
                <div className="col-md-6">
                    <div className="row">
                        <div class="col-md-2">
                            <Link className="nav-link link-dark" to="/profile">Profile</Link>
                        </div>
                        <div className="col-md-2">
                            <Link className="nav-link link-dark" to="/posts">Create Post</Link>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-outline-secondary" onClick={handleLogout}>Log out</button>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}


export default Nav