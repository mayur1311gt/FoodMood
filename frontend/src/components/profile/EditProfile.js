import React from 'react'

function EditProfile() {
    return (
        <div>
            <h3 className='text-sec card-header'>Edit Profile</h3>
            <div className="edit-profile card-body">
                <div className="center-object profile-pic2" >
                    <div className="img-div">
                        <img src='https://avatarfiles.alphacoders.com/715/thumb-1920-71560.jpg' alt="profile pic" />
                    </div>

                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputname3" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="inputname3" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputGroupFile01" className="form-label" >Profile Image</label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword1" />
                    </div>

                    <button type="button" className="btn btn-dark">Update Changes</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
