import ServiceCard from "../components/ServiceCard";

const services = [
  {
    id: 1,
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    description:
      "We create responsive and user-friendly websites that help businesses build a strong online presence.",
  },
  {
    id: 2,
    title: "Software Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "We develop reliable software solutions designed to solve problems and improve business operations.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    description:
      "We design simple, attractive and easy-to-use digital experiences for websites and applications.",
  },
  {
    id: 4,
    title: "IT Consulting",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    description:
      "We provide technology guidance to help businesses make better digital decisions.",
  },
];

function Services() {
  return (
    <main className="page-container">
      <section className="page-heading">
        <p className="section-label">WHAT WE DO</p>
        <h1>Our Services</h1>
        <p>
          Practical technology solutions to help you
          work smarter and grow faster.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </main>
  );
}

export default Services;