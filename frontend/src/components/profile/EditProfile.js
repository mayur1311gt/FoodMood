import axios from 'axios'
import React, { useState } from 'react'

function EditProfile(props) {

    let ussr = props.theUser
    let photo_url = process.env.REACT_APP_PHOTOPATH + ussr['UserPhotoName']

    const [inputUser, setInputUser] = useState({
        full_name: "",
    })


    const HandleInput = (e) => {
        const value = e.target.value;
        setInputUser({
            ...inputUser,
            [e.target.id]: value
        });
    }
    const UpdateProfile = async()=>{
        console.log("click");
        
        // ? Want to send the change from grandchild EditProfile to Parent root App
        // await axios.put('http://127.0.0.1:8000/api/user/1',inputUser)
        // setInputUser({full_name: "",})
    }



    return (
        <div>
            <h3 className='text-tert card-header'>Edit Profile</h3>
            <div className="edit-profile card-body">
                <div className="center-object profile-pic2" >
                    <div className="img-div">
                        <img src={photo_url} alt="profile pic" />
                    </div>

                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="full_name" className="form-label">Change Name</label>
                        <input type="text" className="form-control" id="full_name" onChange={HandleInput} value={inputUser.full_name} placeholder={ussr["full_name"]} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="inputGroupFile01" className="form-label" >Change Profile Image</label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userbio" className="form-label">Edit User Bio</label>
                        <input type="text" className="form-control" id="userbio" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="inputPassword1" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="inputPassword1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="inputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPassword2" />
                    </div>

                    <button type="button" className="btn btn-dark" id='updateBtn' onClick={UpdateProfile}>Update Changes</button>
                </form>
            </div>
        </div>
    )
}


export default EditProfile
