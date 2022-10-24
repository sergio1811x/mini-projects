import React, {useEffect, useState} from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import axios from "axios";

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = useState([])
    const [invites, setInvites] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get('https://reqres.in/api/users').then(res =>  setUsers(res.data.data)).catch(err => console.log(err)).finally(() => setLoading(false))
    },[])

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        }
        else {
            setInvites(prev => [...prev, id])
        }
    }

  return (
    <div className="App">
        {success ? <Success  setSuccess={setSuccess} invites={invites} />
                 :  <Users items={users} setSuccess={setSuccess} isLoading={isLoading} onChangeSearchValue={onChangeSearchValue} searchValue={searchValue} onClickInvite={onClickInvite} invites={invites}/> }
    </div>
  );
}

export default App;
