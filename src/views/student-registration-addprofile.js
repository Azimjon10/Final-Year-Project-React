import React from 'react'

import { Helmet } from 'react-helmet'

import './student-registration-addprofile.css'

const StudentRegistrationAddprofile = (props) => {
  return (
    <div className="student-registration-addprofile-container">
      <Helmet>
        <title>Student-Registration-addprofile - Final Year Project</title>
        <meta
          property="og:title"
          content="Student-Registration-addprofile - Final Year Project"
        />
      </Helmet>
      <div className="student-registration-addprofile-container1">
        <input
          type="text"
          required
          placeholder="Student ID"
          autoComplete="name"
          className="input student-registration-addprofile-textinput"
        />
        <input
          type="text"
          required
          placeholder="Birth Date"
          autoComplete="name"
          className="input student-registration-addprofile-textinput1"
        />
        <input
          type="text"
          required
          placeholder="Phone Number"
          autoComplete="name"
          className="input student-registration-addprofile-textinput2"
        />
        <input
          type="text"
          required
          placeholder="Email Address"
          autoComplete="name"
          className="input student-registration-addprofile-textinput3"
        />
        <input
          type="text"
          required
          placeholder="First Name"
          autoComplete="name"
          className="input student-registration-addprofile-textinput4"
        />
        <input
          type="text"
          required
          placeholder="Last Name"
          className="input student-registration-addprofile-textinput5"
        />
        <span className="student-registration-addprofile-text">Last Name:</span>
        <span className="student-registration-addprofile-text01">
          Phone Number:
        </span>
        <span className="student-registration-addprofile-text02">
          Student ID:
        </span>
        <span className="student-registration-addprofile-text03">
          Birth Date:
        </span>
        <span className="student-registration-addprofile-text04">Email:</span>
        <span className="student-registration-addprofile-text05">
          First Name:
        </span>
        <h1 className="student-registration-addprofile-text06">
          Student Registration
        </h1>
        <svg
          viewBox="0 0 1024 1024"
          className="student-registration-addprofile-icon"
        >
          <path d="M320 384h128v128h-128zM512 384h128v128h-128zM704 384h128v128h-128zM128 768h128v128h-128zM320 768h128v128h-128zM512 768h128v128h-128zM320 576h128v128h-128zM512 576h128v128h-128zM704 576h128v128h-128zM128 576h128v128h-128zM832 0v64h-128v-64h-448v64h-128v-64h-128v1024h960v-1024h-128zM896 960h-832v-704h832v704z"></path>
        </svg>
        <div className="student-registration-addprofile-container2"></div>
        <img
          alt="image"
          src="/playground_assets/bio-500h.jpg"
          className="student-registration-addprofile-image"
        />
        <svg
          viewBox="0 0 1024 1024"
          className="student-registration-addprofile-icon02"
        >
          <path d="M585.143 785.714v-108.571c0-10.286-8-18.857-18.286-18.857h-109.714c-10.286 0-18.286 8.571-18.286 18.857v108.571c0 10.286 8 18.857 18.286 18.857h109.714c10.286 0 18.286-8.571 18.286-18.857zM584 572l10.286-262.286c0-3.429-1.714-8-5.714-10.857-3.429-2.857-8.571-6.286-13.714-6.286h-125.714c-5.143 0-10.286 3.429-13.714 6.286-4 2.857-5.714 8.571-5.714 12l9.714 261.143c0 7.429 8.571 13.143 19.429 13.143h105.714c10.286 0 18.857-5.714 19.429-13.143zM576 38.286l438.857 804.571c12.571 22.286 12 49.714-1.143 72s-37.143 36-62.857 36h-877.714c-25.714 0-49.714-13.714-62.857-36s-13.714-49.714-1.143-72l438.857-804.571c12.571-23.429 37.143-38.286 64-38.286s51.429 14.857 64 38.286z"></path>
        </svg>
        <span className="student-registration-addprofile-text07">
          Use biometric photo only jpg, png format
        </span>
        <span className="student-registration-addprofile-text08">
          Current Photo:
        </span>
        <span className="student-registration-addprofile-text09">Change:</span>
        <button className="button student-registration-addprofile-button">
          Choose File
        </button>
        <span className="student-registration-addprofile-text10">
          No file chosen
        </span>
        <button className="button student-registration-addprofile-button1">
          Cancel
        </button>
      </div>
      <button className="button student-registration-addprofile-button2">
        Save
      </button>
      <h1 className="student-registration-addprofile-text11">
        Student Registration
      </h1>
      <header
        data-role="Header"
        className="student-registration-addprofile-header"
      >
        <div className="student-registration-addprofile-btn-group">
          <button className="student-registration-addprofile-login button">
            Login
          </button>
          <button className="student-registration-addprofile-register button">
            Register
          </button>
        </div>
        <div
          data-role="MobileMenu"
          className="student-registration-addprofile-mobile-menu"
        >
          <div className="student-registration-addprofile-nav">
            <div className="student-registration-addprofile-container3">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="student-registration-addprofile-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="student-registration-addprofile-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="student-registration-addprofile-icon04"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="student-registration-addprofile-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="student-registration-addprofile-icon08"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="student-registration-addprofile-icon10"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
          <img
            alt="image"
            src="/playground_assets/image-f0l-1500h.png"
            className="student-registration-addprofile-image2"
          />
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="student-registration-addprofile-icon12"
        >
          <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
        </svg>
        <img
          alt="image"
          src="/playground_assets/image-kzui-200h.png"
          className="student-registration-addprofile-image3"
        />
      </header>
      <div className="student-registration-addprofile-container4">
        <span className="student-registration-addprofile-text12">
          Dashboard
        </span>
        <span className="student-registration-addprofile-text13">
          Student Registration
        </span>
        <span className="student-registration-addprofile-text14">Profiles</span>
        <div className="student-registration-addprofile-profile">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;w=200"
            className="student-registration-addprofile-image4"
          />
          <div className="student-registration-addprofile-container5">
            <span className="student-registration-addprofile-text15">
              John Doe
            </span>
            <span className="student-registration-addprofile-text16">
              View Profile
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentRegistrationAddprofile
