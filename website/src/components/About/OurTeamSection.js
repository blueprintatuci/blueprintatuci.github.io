import React from "react";
import './OurTeamSection.css'
import MemberCard from "./MemberCard";

import areeta from "../../assets/member_pictures/areeta.png";
import lily from "../../assets/member_pictures/lily.png";
import aina from "../../assets/member_pictures/aina.png";
import agnes from "../../assets/member_pictures/agnes.png";
import justin from "../../assets/member_pictures/justin.png";
import ben from "../../assets/member_pictures/ben.png";
import jeffrey from "../../assets/member_pictures/jeffrey.png";
import judith from "../../assets/member_pictures/judith.png";
import john from "../../assets/member_pictures/john.png";
import lynette from "../../assets/member_pictures/lynette.png";


export default function OurMissionSection() {
  return (
    <div className='our-team-section'>
        <h1 className='title'>Our Team</h1>
        <div className='members'>
            <MemberCard 
              name="Areeta Wong"
              role="President"
              image={areeta}
              linkedin="https://www.linkedin.com/in/areetaw/"
            />
            <MemberCard 
              name="Lily Pham"
              role="President"
              image={lily}
              linkedin="https://www.linkedin.com/in/phamlily/"
            />
            <MemberCard 
              name="Jeffrey Xu"
              role="Project Director"
              image={jeffrey}
              linkedin="https://www.linkedin.com/in/xujeffreyc/"
            />
            <MemberCard 
              name="Benjamin Huynh"
              role="Treasurer"
              image={ben}
              linkedin="https://www.linkedin.com/in/benhuynh408/"
            />
            <MemberCard 
              name="Justin Huynh"
              role="Public Communications"
              image={justin}
              linkedin="https://www.linkedin.com/in/justinhuynh11/"
            />
            <MemberCard 
              name="Lynette Nguyen"
              role="Public Communications"
              image={lynette}
              linkedin="https://www.linkedin.com/in/lynettenguyen14/"
            />
            <MemberCard 
              name="Agnes Jang"
              role="Founder"
              image={agnes}
              linkedin="https://www.linkedin.com/in/agnesjang/"
            />
            <MemberCard 
              name="Aina Tancinco"
              role="Founder"
              image={aina}
              linkedin="https://www.linkedin.com/in/ainatancinco/"
            />
            <MemberCard 
              name="John Luong"
              role="Founder"
              image={john}
              linkedin="https://www.linkedin.com/in/johndluong/"
            />
            <MemberCard 
              name="Judith Rupasinghe"
              role="Founder"
              image={judith}
              linkedin="https://www.linkedin.com/in/judith-rupasinghe/"
            />
      </div>
    </div>
    );
}