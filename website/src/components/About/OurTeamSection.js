import React from "react";
import './OurTeamSection.css'
import MemberCard from "./MemberCard";
import areeta from "../../assets/member_pictures/areeta.png";
import lily from "../../assets/member_pictures/lily.png";
import aina from "../../assets/member_pictures/aina.png";
import agnes from "../../assets/member_pictures/agnes.png";
import justin from "../../assets/member_pictures/justin.png";
import ben from "../../assets/member_pictures/ben.png";

export default function OurMissionSection() {
  return (
    <div className='our-team-section'>
        <h1 className='title'>Our Team</h1>
        <div className='members'>
            <MemberCard 
              name="Areeta Wong"
              role="President"
              image={areeta}
            />
            <MemberCard 
              name="Lily Pham"
              role="President"
              image={lily}
            />
            <MemberCard 
              name="Jeffrey Xu"
              role="Project Director"
            />
            <MemberCard 
              name="Benjamin Huynh"
              role="Treasurer"
              image={ben}
            />
            <MemberCard 
              name="Justin Huynh"
              role="Public Communications"
              image={justin}
            />
            <MemberCard 
              name="Lynette Nguyen"
              role="Public Communications"
            />
            <MemberCard 
              name="Agnes Jang"
              role="Founder"
              image={agnes}
            />
            <MemberCard 
              name="Aina Tancinco"
              role="Founder"
              image={aina}
            />
            <MemberCard 
              name="John Luong"
              role="Founder"
            />
            <MemberCard 
              name="Judith Rupasinghe"
              role="Founder"
            />
      </div>
    </div>
    );
}