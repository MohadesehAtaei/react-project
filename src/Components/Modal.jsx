import React from 'react'

function Modal() {
  return (
    <div>
        <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 className="modal-title" id="exampleModalLabel">
                        <span> عضویت </span>
                    </h5>
                </div>
                <div className="modal-body">
                    <input type="text" className="form-control my-3" id="firstName" placeholder="نام"/> 
                    <input type="text" className="form-control my-3" id="lastName" placeholder="نام خانوادگی"/> 
                    <input type="text" className="form-control my-3" id="phoneNumber" placeholder="09123456789"/> 
                    <input type="email" className="form-control my-3" id="email" placeholder="ایمیل"/> 
                    <input type="password" className="form-control my-3" id="password" placeholder="کلمه عبور"/> 
                    <input type="password" className="form-control my-3" id="rePassword" placeholder="تکرار کلمه عبور"/> 
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">ثبت نام</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
                </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 className="modal-title" id="exampleModalLabel">
                        <span> ورود </span>
                    </h5>
                </div>
                <div className="modal-body">
                    <input type="email" className="form-control my-3" id="loginEmail" placeholder="ایمیل"/> 
                    <input type="password" className="form-control my-3" id="loginPassword" placeholder="کلمه عبور"/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">ورود</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Modal