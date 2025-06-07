import React from "react";
import HeroHeader from "../components/HeroHeader";
import bgImage from "/images/c1.jpg"; 

const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    title: "President",
    role: "President & Lead of AAA professionals",
    image: "/images/BenWhite_1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Sales Manager",
    role: "Sales Department AAA Professional",
    image: "/images/JimCrouse_New.jpg",
  },
  {
    id: 3,
    name: "Emily Zhang",
    title: "Accounts Receivables",
    role: "Sales Department of AAA professionals",
    image: "/images/AmandaBarker.jpg",
  },
  {
    id: 4,
    name: "Michael Lee",
    title: "Marketing Manager",
    role: "Sales Management of AAA professionals",
    image: "/images/steve-wells.jpg",
  },
  {
    id: 5,
    name: "Sarah Ali",
    title: "Head Mechanic",
    role: "Head of Service Department of AAA professionals",
    image: "/images/RichWilson.jpg",
  },
  {
    id: 6,
    name: "Carlos Diaz",
    title: "Data Analyst",
    role: "Sales Management of AAA professionals",
    image: "/images/GaryPhillips.jpg",
  },
];

const OurTeam = () => {
  return (
             <>
      <HeroHeader
        title="Our Team"
        subtitle="Meet Our Team Dedicated To This Mission"
        backgroundImage={bgImage}
      />
    <section className="our-team">
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <p className="team-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
     </>
  );
};

export default OurTeam;
