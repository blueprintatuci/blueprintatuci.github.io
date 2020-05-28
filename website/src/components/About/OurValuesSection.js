import React from "react";
import './OurValuesSection.css'
import blueprint_logo from "../../assets/ThetaTau.png";

export default function OurMissionSection() {
  return (
    <div className='our-values-section'>
        <h1 className='title'>Our Values</h1>
        <div className='value'>
            <img src={blueprint_logo} alt='blueprint-logo' />
            <div className='value-info'>
                <h2 className='value-name'>Community</h2>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
        </div>
        <div className='value'>
            <img src={blueprint_logo} alt='blueprint-logo' />
            <div className='value-info'>
                <h2 className='value-name'>Growth</h2>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
        </div>
        <div className='value'>
            <img src={blueprint_logo} alt='blueprint-logo' />
            <div className='value-info'>
                <h2 className='value-name'>Growth</h2>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </div>
        </div>
    </div>
  );
}
