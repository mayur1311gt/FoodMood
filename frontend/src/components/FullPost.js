import React from 'react'

function FullPost() {
    return (
        <div>
            <div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="post-block mb-4">
						<div className="d-flex justify-content-between">
							<div className="d-flex mb-3">
								<div className="me-2">
									<a href="#!" className="text-dark"><img src="images/home/user1.jpg" alt="User" className="author-img"/></a>
								</div>
								<div>
									<h5 className="mb-0"><a href="#!" className="text-dark">Kiran Acharya</a></h5>
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
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laboriosam non atque, porro cupiditate commodi? Provident culpa vel sit enim!</p>
							<img src="images/home/food1.jpg" alt="Content img"/>
						</div>
						<div className="mb-3">
							<div className="d-flex justify-content-between mb-2">
								<div className="d-flex">
									<a href="#!" className="text-danger me-2"><span><i className="fa fa-heart"></i></span></a>
									<a href="#!" className="text-dark me-2"><span>Comment</span></a>
								</div>
								<a href="#!" className="text-dark"><span>Share</span></a>
							</div>
							<p className="mb-0">Liked by <a href="#!" className="text-muted font-weight-bold">John doe</a> & <a href="#!" className="text-muted font-weight-bold">25 others</a></p>
						</div>
						<hr/>
						<div className="post-block__comments">
							
							<div className="input-group mb-3">
								<input type="text" className="form-control" placeholder="Add your comment"/>
								<div className="input-group-append">
								  	<button className="btn btn-primary" type="button" id="button-addon2"><i className="fa fa-paper-plane"></i></button>
								</div>
							</div>
							
							<div className="comment-view-box mb-3">
								<div className="d-flex mb-2">
									<img src="images/home/user2.jpg" alt="User img" className="author-img author-img--small me-2"/>
									<div>
										<h6 className="mb-1"><a href="#!" className="text-dark">John doe</a> <small className="text-muted">1m</small></h6>
										<p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<div className="d-flex">
											<a href="#!" className="text-dark me-2"><span><i className="fa fa-heart-o"></i></span></a>
											<a href="#!" className="text-dark me-2"><span>Reply</span></a>
										</div>
									</div>
								</div>
							</div>
							
							<hr/>
							<a href="#!" className="text-dark">View More comments <span className="font-weight-bold">(12)</span></a>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default FullPost
