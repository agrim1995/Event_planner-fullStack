import React from 'react'

export const View_event = () => {
    return (
        <div>
            <div id="events" class="events-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="title-box">
                                <h2>Events<span> We provide</span></h2>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="event-inner">
                                <div class="event-img">
                                    <img class="img-fluid" src="images/event-img-01.jpg" alt="" />
                                </div>
                                <h2 style="text-align: center;">Engagement</h2>
                                <p>We'll provide best arrangements and facilities for your auspicious events</p>
                                {/* <!-- paste --> */}
                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal" style="background-color: #ceb0ce; color: white;">
                                    View
                                </button>

                                {/* <!-- The Modal --> */}
                                <div class="modal fade" id="myModal">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">

                                            {/* <!-- Modal Header --> */}
                                            <div class="modal-header">
                                                <h4 class="modal-title">Enter your budget</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>

                                            {/* <!-- Modal body --> */}
                                            <div class="modal-body">
                                                <input type="text" placeholder="" />
                                            </div>

                                            {/* <!-- Modal footer --> */}
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Submit</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- paste --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
            )
}
