import { Link } from "react-router-dom";

const ServicesIntro = () => {
  return (
    <section
      className="services-intro"
      style={{
        backgroundImage: `url('/images/services-bg.jpg')`
      }}
    >
      <div className="services-content">
        <h2>Your Equipment, Our Priority</h2>
        <h3>
          We don't just offer sales — we also specialize in Parts, Service & Sales All Under One Roof.
        </h3>
        <p>
          At AAA Construction Equipment, we don’t just sell machines — we power your entire operation.
          We specialize in premium equipment sales, genuine OEM parts, and expert service tailored for hardworking contractors and developers. Whether you're investing in new machinery or searching for the right part to keep your fleet moving, we're your go-to partner from the ground up..
        </p>
        <p>
          Need fast diagnostics? Engine tuning? Full hydraulic or electrical repairs? Our seasoned technicians are ready to get your equipment back on site — and keep it there. With a fully stocked inventory from top industry brands and years of field-proven experience, we deliver speed, precision, and peace of mind.
          Why do clients stick with us? Because we don’t just supply equipment — we stand behind it. When you choose AAA, you’re not just buying a machine; you’re partnering with a team that treats your uptime like our bottom line. 
        </p>

        <Link to="/services" className="cta-button">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesIntro;
