import React from "react";
import './About.css'
import team from "../../assets/team.svg";
import growth from "../../assets/growth.svg";
import hand from "../../assets/agriculture.svg";


export default function OurMissionSection() {
  return (
    <div className='our-values-section'>
        <h1 className='title'>Our Values</h1>
        <div className='value'>
            <img className='icon'src={team} alt='team icon' />
            <div className='value-info'>
                <h2 className='value-name'>Strengthening our Community</h2>
                <p className='description'>
                    Being a part of a community means making contributions to its growth
                    and prosperity. We build for nonprofits so that they can continue their
                    impactful work, and we offer opportunities to our student community so
                    that they can learn alongside us.
                </p>
            </div>
        </div>
        <div className='value'>
            <img className='icon' src={hand} alt='hand icon' />
            <div className='value-info'>
                <h2 className='value-name'>Paying It Forward</h2>
                <p className='description'>
                    It’s through community resources and the help of others that we are able
                    to do what we do as developers. We’re committing ourselves to a cycle
                    of gratitude by always paying it forward and using our skills for social good.
                </p>
            </div>
        </div>
        <div className='value'>
            <img className='icon' src={growth} alt='growth icon' />
            <div className='value-info'>
                <h2 className='value-name'>Growth Mindset</h2>
                <p className='description'>
                    We want to maintain the mindset that our team members’ potential is
                    boundless, and we’re reaching for that potential by putting in the
                    work to constantly learn, cultivate our skills, and encourage each
                    other to do the same.
                </p>
            </div>
        </div>
    </div>
  );
}
