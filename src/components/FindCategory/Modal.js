import React from 'react'

function Modal() {
    return (
        <div>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <section className="py-5 header">
                            <div className="container py-4">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist"
                                            aria-orientation="vertical">
                                            <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill"
                                                href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" />
                                            <img style={{width: "50px"}} src="img/ac.png" alt="ac" />
                                            <span>AC Repair Service</span>

                                            <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill"
                                                href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" />
                                            <img style={{width: "50px"}} src="img/ac.png" alt="ac" />
                                            <span>Any Repair Service</span>

                                            <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill"
                                                href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" />
                                            <img style={{width: "50px"}} src="img/ac.png" alt="ac" />
                                            <span>AC Repair Service</span>

                                            <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill"
                                                href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" >
                                                <i className="fa fa-check mr-2"></i>
                                                <span className="font-weight-bold small text-uppercase">Confirm booking</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel"
                                                aria-labelledby="v-pills-home-tab">
                                                <h4 className="font-italic mb-4">Personal information</h4>
                                                <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                                    id est laborum.
                                                </p>
                                            </div>

                                            <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel"
                                                aria-labelledby="v-pills-profile-tab">
                                                <h4 className="font-italic mb-4">Bookings</h4>
                                                <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                                    id est laborum.
                                                </p>
                                            </div>

                                            <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel"
                                                aria-labelledby="v-pills-messages-tab">
                                                <h4 className="font-italic mb-4">Reviews</h4>
                                                <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                                    id est laborum.
                                                </p>
                                            </div>

                                            <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel"
                                                aria-labelledby="v-pills-settings-tab">
                                                <h4 className="font-italic mb-4">Confirm booking</h4>
                                                <p className="font-italic text-muted mb-2">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                                    id est laborum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
