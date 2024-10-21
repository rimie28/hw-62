import filmStudioInside from "../assets/img/film-studio-inside.webp";

const AboutUs = () => {
  return (
    <div
      className="text-black p-4"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url('/public/img/film-bw.webp')`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="mb-4">About Us</h1>
      <div className="d-flex gap-3">
        <img
          style={{ width: "500px", borderRadius: "20px" }}
          src={filmStudioInside}
          alt="Film Studio Inside"
        />
        <h3 className="w-50">
          At Rimie Film Studio, we appreciate the artistry and nostalgia of film
          photography. Our passion lies in connecting people with the timeless
          beauty of analog cameras and films. Whether you're a seasoned
          photographer or just starting your journey, we provide a curated
          selection of vintage cameras, classic films, and photography supplies
          to help you capture your world in a unique way.
        </h3>
      </div>
    </div>
  );
};

export default AboutUs;
