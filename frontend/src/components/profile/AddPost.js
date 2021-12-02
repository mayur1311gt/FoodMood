import React from 'react'

function AddPost() {
    return (
        <div>
            <h3 className='text-tert card-header'>Add New Posts</h3>
            <div className="add-posts">

                <form>
                    <div className="row flex justify-content-center my-4">
                        <div className="col-2">
                            <label htmlFor="EventName" className="col-form-label">Title:</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id="EventName" className="form-control" placeholder="Title of your event" />
                        </div>
                    </div>
                    <div className="row flex justify-content-center my-3">
                        <div className="col-2">
                            <label htmlFor="EventDescription" className="col-form-label">Description:</label>
                        </div>
                        <div className="col-8">
                            <textarea className="form-control" placeholder="Give a brief description about your event..." id="EventDescription" style={{ resize: 'none', height: 100 }} aria-describedby="1" ></textarea>
                            <span id="1" className="form-text">
                                Must be upto 500 words
                            </span>
                        </div>
                    </div>
                   
                   
                    <div className="row flex justify-content-center my-3">
                        <div className="col-2">
                            <label htmlFor="EventPhotoName" className="col-form-label">Add Photo or Video:</label>
                        </div>
                        <div className="col-8">
                            <input type="file" id="EventPhotoName" />
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary my-4" style={{ marginLeft: 100 }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost
