import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import config from 'config'


const MyProfile = () => {
    const [email, setEmail] = useState()
    const currentUser = useSelector(state => state.authReducer)
    const history = useHistory()
    // const currentUserEmail = currentUser.email
    const token = Cookies.get(config.COOKIE_STORAGE_KEY)
    const updateCurrentUser = async (e) => {
        e.preventDefault()
        const dataUser = {
            user: {
                email: email,
            }
        }
        console.log('token', token)

        const response = await fetch(`http://localhost:3000/api/users/${currentUser.id}`,
            {
                method: 'put',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUser)
            })

        if (response.status !== 200) {
            alert("Something wrong during update of your profile!")
            return
        }

        const data = await response.json()
        currentUser.email = email
        history.push('/')
    }

    return (
        <div>
            <div className="container mx-auto bg-dark w-50 rounded text-white p-4 mb-5">
                <h5>{currentUser.email}</h5>
            </div>

            <div className="container mx-auto bg-dark w-50 rounded text-white p-4">
                <div className="text-center my-2">
                    <h3>Edit Profile</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label className="mb-1" type="email" name="email">Email</label>
                        <input className="form-control mb-2" value={email} type="text" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                        <button className="btn btn-outline-secondary" type="submit" onClick={updateCurrentUser}>Update</button>
                    </div>
                </form>
            </div>
        </div>


    )
}


export default MyProfile
