import React from "react";
import pk from "../../assets/pk.JPG";
import { Link } from "react-router-dom";

const ProfileDisplayComponent = (props) => {
  let personalData = props.personalinfo;
  console.log(personalData);
  return (
    <div>
      <div className="container emp-profile mt-4">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img className="h-50 w-50" src={pk} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{personalData.personalInformation.firstName}</h5>
                <h6>Web Developer and Designer</h6>

                <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <button onClick={props.showEditor}>
                 Edit Profile
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Personal info</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 font-weight-bold">
                    <label>Name</label>
                  </div>
                  <div className="col-md-3">
                    <p>
                      {personalData.personalInformation.firstName}{" "}
                      {personalData.personalInformation.lastName}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 font-weight-bold">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-3">
                    <p>{personalData.personalInformation.mobileNo}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 font-weight-bold">
                    <label>Date of birth</label>
                  </div>
                  <div className="col-md-3">
                    <p>{personalData.personalInformation.DOB}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 font-weight-bold">
                    <label>Address</label>
                  </div>
                  <div className="col-md-3">
                    <p>
                      {personalData.address.permanent.country},
                      {personalData.address.permanent.phoneNo}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div className="row">
                      <div className="col-md-12 ">
                        <h5 className="font-weight-bold">Temporary Address</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>Country</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.temporary.tCountry} </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>provience</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.temporary.tProvience}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>city</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.temporary.tCity}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>phone No</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.temporary.tPhoneNo},</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div className="row">
                      <div className="col-md-12">
                        <h5 className="font-weight-bold">Permanent Address</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>Country</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.permanent.pCountry} </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>provience</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.permanent.pProvience}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>city</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.permanent.pCity}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 font-weight-bold">
                        <label>phone No</label>
                      </div>
                      <div className="col-md-6">
                        <p>{personalData.address.permanent.pPhoneNo},</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfileDisplayComponent;
