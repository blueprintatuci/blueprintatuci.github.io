import React from "react";
import './About.css'
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
import kaeley from "../../assets/member_pictures/kaeley.png";
import yoseph from "../../assets/member_pictures/yoseph.png";
import chase from "../../assets/member_pictures/chase.png";
import kevin from "../../assets/member_pictures/kevin.png";
import tanay from "../../assets/member_pictures/tanay.png";
import rileyw from "../../assets/member_pictures/rileyw.png";
import hana from "../../assets/member_pictures/hana.png";
import daniel from "../../assets/member_pictures/daniel.png";
import cyre from "../../assets/member_pictures/cyre.png";
import arthur from "../../assets/member_pictures/arthur.png";
import kingsley from "../../assets/member_pictures/kingsley.png";
import justine from "../../assets/member_pictures/justine.png";
import rileyg from "../../assets/member_pictures/rileyg.png";
import lee from "../../assets/member_pictures/lee.png";
import serena from "../../assets/member_pictures/serena.png";
import alexandria from "../../assets/member_pictures/alexandria.png";
import andrea from "../../assets/member_pictures/andrea.png";
import ryan from "../../assets/member_pictures/ryan.png";
import esha from "../../assets/member_pictures/esha.png";


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
              name="Ben Huynh"
              role="Treasurer"
              image={ben}
              linkedin="https://www.linkedin.com/in/benhuynh408/"
            />
            <MemberCard 
              name="Justin Huynh"
              role="Public Relations"
              image={justin}
              linkedin="https://www.linkedin.com/in/justinhuynh11/"
            />
            <MemberCard 
              name="Lynette Nguyen"
              role="Public Relations + Project Lead"
              image={lynette}
              linkedin="https://www.linkedin.com/in/lynettenguyen14/"
            />
            <MemberCard 
              name="Kaeley Lenard"
              role="Design Director"
              image={kaeley}
              linkedin="https://www.linkedin.com/in/kaeleylenard/"
            />
            <MemberCard 
              name="Kevin Huynh"
              role="Project Lead"
              image={kevin}
              linkedin="https://www.linkedin.com/in/khuynh09/"
            />
            <MemberCard 
              name="Alexandria Wang"
              role="Project Lead Designer"
              image={alexandria}
              linkedin="https://www.linkedin.com/in/alexandria-wang-44066a187/"
            />
            <MemberCard 
              name="Kingsley Szeto"
              role="Project Lead"
              image={kingsley}
              linkedin="https://www.linkedin.com/in/kingsleyszeto/"
            />
            <MemberCard 
              name="Justine Chou"
              role="Project Lead Designer"
              image={justine}
              linkedin="https://www.linkedin.com/in/justine-chou/"
            />
            <MemberCard 
              name="Yoseph Ghazal"
              role="Developer"
              image={yoseph}
              linkedin="https://www.linkedin.com/in/yosephghazal/"
            />
            <MemberCard 
              name="Chase Carnaroli"
              role="Developer"
              image={chase}
              linkedin="https://www.linkedin.com/in/chasecarnaroli/"
            />
            <MemberCard 
              name="Hana Lee"
              role="Developer"
              image={hana}
              linkedin="https://www.linkedin.com/in/hanalee394/"
            />
            <MemberCard 
              name="Cyre Jorin To"
              role="Developer"
              image={cyre}
              linkedin="https://www.linkedin.com/in/cyrejorin/"
            />
            <MemberCard 
              name="Serena Trang"
              role="Developer"
              image={serena}
              linkedin="https://www.linkedin.com/in/serenatrang"
            />
            <MemberCard 
              name="Lee Bahir"
              role="Developer"
              image={lee}
              linkedin="https://www.linkedin.com/in/lee-bahir-3498571a1/"
            />
            <MemberCard 
              name="Riley Garcia"
              role="Developer"
              image={rileyg}
              linkedin="https://www.linkedin.com/in/riley-garcia-05056a19a/"
            />          
            <MemberCard 
              name="Andrea AhSue"
              role="Developer"
              image={andrea}
              linkedin="https://www.linkedin.com/in/andrea-ahsue"
            />
            <MemberCard 
              name="Arthur Lafrance"
              role="Developer"
              image={arthur}
              linkedin="https://www.linkedin.com/in/arthurlafrance"
            />
            <MemberCard 
              name="Riley Wong"
              role="Developer"
              image={rileyw}
              linkedin="https://www.linkedin.com/in/riley-wong/"
            />
            <MemberCard 
              name="Ryan Tang"
              role="Developer"
              image={ryan}
              linkedin="http://www.linkedin.com/in/ryantanggg"
            />
            <MemberCard 
              name="Donghyun Koo"
              role="Developer"
              image={daniel}
              linkedin="https://www.linkedin.com/in/koo-donghyun/"
            />
            <MemberCard 
              name="Tanay Kane"
              role="Developer"
              image={tanay}
              linkedin="http://linkedin.com/in/tanay-kane"
            />
            <MemberCard 
              name="Esha Gupta"
              role="Developer"
              image={esha}
              linkedin="https://www.linkedin.com/in/esha-gupta01/"
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