import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { RegistUser } from '../../redux/store/actions/UserActions'

const Register = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const userData = useSelector(state => state.UserReducer.user)

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleClick = () => {
        console.log(user)
        dispatch(RegistUser(user))
        router.push('/Login')
    }

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.id]: e.target.value
        })
        console.log(e.target.value)
    }

    return (
        <div>
            <input type='text' id='username' onChange={handleChange}></input>
            <input type='password' id='password' onChange={handleChange}></input>
            <button onClick={handleClick} >test</button>
            <button onClick={() => console.log(userData)}>consolelog</button>
        </div>
    )
}

export default Register
