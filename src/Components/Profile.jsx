import React, { useState } from "react";
import ProfileImage from "../../src/assets/images/bessie.png";
import Edit from "../../src/assets/images/icons/edit_24dp_1F1F1F.png";
import EditProfileModal from "./EditProfile";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="profile">
        <div className="profile_user_info">
          <img
            src={ProfileImage}
            alt="Bessie Coleman"
            className="profile_photo"
          />
          <div className="profile_text">
            <h3>Bessie Coleman</h3>
            <span className="title">Civil Aviator</span>
            <div className="edit_profile">
              <img src={Edit} alt="Edit icon" onClick={handleEditClick} />
              <span>Edit Profile</span>
            </div>
          </div>
        </div>

        <button className="new_post_btn">
          <span className="plus">+</span> New Post
        </button>
      </div>
      <hr />
      {isModalOpen && (
        <EditProfileModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Profile;
