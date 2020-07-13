import React, { useState, useEffect } from "react";
import rawData from "../../assets/mockData/profile.json";
import ProfileDisplayComponent from "../../component/profilepage/profileDisplayComponent";
import ProfileEditComp from "../../component/profilepage/ProfileEditComponent";

const ProfileContainer = () => {
  const [data, setData] = useState(rawData);
  const [showEdit, setShowEdit] = useState(false);

  let toggleEditPage = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div>
      {showEdit ? (
        <ProfileEditComp showDisplay={toggleEditPage} />
      ) : (
        <ProfileDisplayComponent
        showEditor={toggleEditPage}
        personalinfo={data} />
      )}
    </div>
  );
};
export default ProfileContainer;
