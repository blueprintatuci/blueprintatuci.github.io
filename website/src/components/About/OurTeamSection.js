import React from "react";
import './OurTeamSection.css'
import MemberCard from "./MemberCard";

export default function OurMissionSection() {
  return (
    <div className='our-team-section'>
        <h1 className='title'>Our Team</h1>
        <div className='members'>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
      </div>
    </div>
    );
}