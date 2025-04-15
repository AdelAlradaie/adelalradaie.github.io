import React from "react";
import "./ProfileCard.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import { profileInfo } from "../../portfolio";
import { Fade } from "react-reveal";

export default function GithubProfileCard() {

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">{profileInfo.title}</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{profileInfo.subtitle}</p>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={profileInfo.image}
              alt="profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
