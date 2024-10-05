import React from 'react'
import './Profile.css'

const Profile = () =>
{
    return (
        <section className='profile-container'>
            <div className='profile-content'>
                <h2>Creating Innovative Software Solutions</h2>
                <p>
                    Passionate Software Engineer | Merging Creativity and Code to Build Seamless
                    User-Focused Applications
                </p>
            </div>

            <div className='profile-img'>
                <div>
                    <img src='./assets/images/p3.JPG' alt="profile-image" />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/React.png' alt="React" />
                    </div>
                    <div className='tech-icon'>
                        <img src="./assets/images/HTML.png" alt="HTML" />
                    </div>
                    <div className='tech-icon'>
                        <img src="./assets/images/CSS.png" alt="CSS" />
                    </div>
                    <div className='tech-icon'>
                        <img src="./assets/images/JS.png" alt="JavaScript" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Profile