import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/useSlice';
import User from './redux/User';

function UserList() {
    const dispatch = useDispatch();

    const { user } = useSelector(store => store.user);
    console.log(user)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <div>
            {
                user && user.map((user) => (
                    <User key={user.id} user={user} />
                ))
            }
        </div>
    )
}

export default UserList