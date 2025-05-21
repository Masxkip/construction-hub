import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Chief Executive Officer",
    role: "Sales Management",
    image: "/images/b1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Lead Developer officer",
    role: "Sales Management",
    image: "/images/c1.jpg",
  },
  {
    id: 3,
    name: "Emily Zhang",
    title: "Product Designer",
    role: "Sales Management",
    image: "/images/team3.jpg",
  },
  {
    id: 4,
    name: "Michael Lee",
    title: "Marketing Manager",
    role: "Sales Management",
    image: "/images/team4.jpg",
  },
  {
    id: 5,
    name: "Sarah Ali",
    title: "Customer Success Lead",
    role: "Sales Management",
    image: "/images/team5.jpg",
  },
  {
    id: 6,
    name: "Carlos Diaz",
    title: "Data Analyst",
    role: "Sales Management",
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
