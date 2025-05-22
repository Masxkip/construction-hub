import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    title: "President",
    role: "President & Lead of AAA professionals",
    image: "/images/BenWhite.jpg",
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
    image: "/images/GaryPhillips.jpg",
  },
  {
    id: 6,
    name: "Carlos Diaz",
    title: "Data Analyst",
    role: "Sales Management of AAA professionals",
    image: "/images/team6.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="our-team">
      <h2 className="team-section-header">Meet Our Team</h2>
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
  );
};

export default OurTeam;
