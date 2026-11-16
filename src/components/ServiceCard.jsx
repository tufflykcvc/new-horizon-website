function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} />

      <span>0{service.id}</span>

      <h2>{service.title}</h2>

      <p>{service.description}</p>
    </div>
  );
}

export default ServiceCard;