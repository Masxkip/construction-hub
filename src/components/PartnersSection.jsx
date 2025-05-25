

const partnerLogos = [
  "/images/c1.jpg",
  "/images/c1.jpg",
  "/images/c1.jpg",
  "/images/c1.jpg",
 "/images/c1.jpg",
  "/images/c1.jpg",
  "/images/c1.jpg",
  "/images/partners/mauldin.png",
  "/images/partners/felling.png",
  "/images/partners/rammer.png",
  "/images/partners/jlg.png",
  "/images/partners/bomag.png",
  "/images/partners/itre.png",
  "/images/partners/dynapac.png",
  "/images/partners/trackless.png"
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
