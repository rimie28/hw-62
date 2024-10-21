import adress from "../assets/img/adress.jpg";

const Contacts = () => {
  return (
    <div
      className="p-4 contact-page text-white"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url('/public/img/kodak.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="mb-3">Contacts</h1>
      <div className="d-flex gap-4">
        <img
          src={adress}
          alt="adress"
          style={{ width: "400px", borderRadius: "20px" }}
        />
        <div className="d-flex flex-column gap-3">
          <h4>ул. Фурманова, 10</h4>
          <h4>
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              +996 709 81 55 75
            </a>
          </h4>
          <h4>
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              rimiefilmstudio@gmail.com
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
