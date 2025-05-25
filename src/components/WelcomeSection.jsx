
const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <h2>WELCOME AAA CONSTRUCTION SERVICES</h2>
      <hr />

      <div className="welcome-visuals">
        <img src="/images/c1.jpg" alt="Sparks, NV Location" />
        <img src="/images/c1.jpg" alt="Company Logo" className="logo-center" />
        <img src="/images/c1.jpg" alt="Nampa, ID Location" />
      </div>

      <p className="welcome-description">
        AAA Construction Services is a proudly owned and operated company, built on family values and
        a deep commitment to the construction equipment industry. Our team listens closely to our customers'
        needs and treats every project as if it were our own. Whether you're purchasing, renting, or servicing
        equipment, our entire company is here to support you — not just one department.
        <br /><br />
        We ensure direct access to our leadership and industry experts 24/7, empowering customers with the best
        support and fastest solutions. With reliable equipment, genuine parts, and hands-on service,
        AAA Construction stands as your trusted partner in every phase of your operation.
      </p>
    </section>
  );
};

export default WelcomeSection;
