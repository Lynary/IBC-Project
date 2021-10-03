import React from 'react'
import { useSelector } from 'react-redux'

const index = () => {

    const isLogged = useSelector(state => state.UserReducer.auth.success)
    console.log(isLogged)

    return (
        <div>
            Dashboard.
        </div>
    )
}

export default index
