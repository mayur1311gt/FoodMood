import React from 'react'

function ProfilePost(props) {
    return (
        <div>
            <div className="post post-1">
                {/* <div className="card">
                    <div className="card-header">user</div>
                    <div className="card-body">body</div>
                    <div className="card-footer">likes comments saved</div>
                </div> */}
                <div className="post-block scale-me mb-4">
						<div className="d-flex justify-content-between">
							<div className="d-flex mb-3">
								<div className="me-2">
									<a href="#!" className="text-dark"><img src={props.user_image_url} alt="User" className="author-img"/></a>
								</div>
								<div>
									<h5 className="mb-0"><a href="#!" className="text-dark">{props.post_name}</a></h5>
									<p className="mb-0 text-muted">5m</p>
								</div>
							</div>
							<div className="post-block__user-options">
								<a href="#!" id="triggerId">
											<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
								</a>
							</div>
						</div>
						<div className="post-block__content mb-2">
							
							<img src={props.food_image_url} alt="Content img"/>
						</div>
						<div className="mb-1">
							<div className="d-flex justify-content-between">
								<div className="d-flex">
									<a href="#!" className="text-danger me-2"><span><i className="fa fa-heart"></i></span></a>
									<p className="mb-0">Liked by <a href="#!" className="text-muted font-weight-bold">John doe</a> & <a href="#!" className="text-muted font-weight-bold">25 others</a></p>
								</div>
								
							</div>
							
						</div>						
					</div>
            </div>
        </div>
    )
}

export default ProfilePost
