import "./ServiceType.css";
const ServiceType = ({ img, title, desc }) => {
  return (
    <div className="cursor-pointer service hover:scale-110">
      <img src={img} alt="" />
      <div className="service-title">{title}</div>
      <div className="service-desc">{desc}</div>
    </div>
  );
};

export default ServiceType;
