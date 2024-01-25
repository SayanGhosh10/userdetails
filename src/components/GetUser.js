import React, { useEffect, useState } from 'react'
import Users from './Users'
import UserDetails from './UserDetails'
import Spinner from './Spinner'

function GetUser() {
    const [user, setUser] = useState([]);
    const [selectedUserDetails, setSelectedUserDetails] = useState(null);
    const [prgress, setPrgress] = useState(100)

    const getUser = async () => {
        try {
            setPrgress(0)
            const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
            const data = await response.json();
            setUser(data);
            setPrgress(100)
        } catch (error) {
            console.log(error);
        }

    }

    const handleButtonClick = (userId) => {
        const selected = user.find(user => user.id === userId);
        setSelectedUserDetails(selected);
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div>
            {prgress < 100 && <Spinner />}
            <div className="row row-cols-lg-auto g-3 align-items-center">
                <div>
                    {user.map((element) => (
                        <div>
                            <div className="card mb-5" key={element.id} style={{ maxWidth: "540px", backgroundColor: "#EAF0F1" }}>
                                <Users id={element.id} element={element} handleButtonClick={handleButtonClick} />
                                <div className="d-grid gap-2 col-6 mx-auto mb-3">
                                    <button className="btn btn-primary" type="button" onClick={() => handleButtonClick(element.id)}>Get User Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ position: "fixed", top: 20, right: 150 }}>
                    {selectedUserDetails && <i className="fa-solid fa-x" style={{ cursor: "pointer", fontSize: "20px", color: "white" }} onClick={() => setSelectedUserDetails(null)}></i>} {selectedUserDetails && <UserDetails element={selectedUserDetails} />}
                </div>
            </div>
        </div>
    )
}

export default GetUser
