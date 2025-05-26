

const partnerLogos = [
  "/images/lo14.webp",
  "/images/lo1.jpg",
  "/images/lo2.jpg",
  "/images/lo3.jpg",
  "/images/lo4.jpg",
 "/images/lo5.jpg",
  "/images/lo6.jpg",
  "/images/lo7.jpg",
  "/images/lo8.jpg",
  "/images/lo9.jpg",
  "/images/lo10.webp",
  "/images/lo11.webp",
  "/images/lo12.webp",
  "/images/lo13.webp",
  
];

const PartnersSection = () => {
  return (
    <section className="partners">
      <h2 className="partners-title">Associations & Brands We Partner With</h2>
      <div className="partner-grid">
        {partnerLogos.map((logo, idx) => (
          <img key={idx} src={logo} alt={`Partner ${idx + 1}`} className="partner-logo" />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
