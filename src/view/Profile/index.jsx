import React from "react";
import styled from "styled-components";
import ProfileImg from "@/assets/images/profile.jpg";

const StyledProfileContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const ProfileTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const AboutSection = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const Profile = () => {
  return (
    <StyledProfileContainer>
      <ProfileTitle>Admin User</ProfileTitle>
      <ProfileImage
        src={ProfileImg} // Replace with your profile image URL
        alt="Profile"
      />
      <AboutSection>
        <p>
          Hi, I'm Admin User! Welcome to my profile. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam in justo vitae velit
          posuere accumsan.
        </p>
      </AboutSection>
    </StyledProfileContainer>
  );
};

export default Profile;
