import { TfiLayoutLineSolid } from "react-icons/tfi";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <TfiLayoutLineSolid style={{ color: "red" }} />
          <span
            style={{ color: "navy", marginLeft: "1rem", marginRight: "1rem" }}
          >
            HIZMETLERIMIZ
          </span>
          <TfiLayoutLineSolid style={{ color: "red" }} />
        </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            Profesyonel Mobil Asansor{" "}
            <span style={{ color: "red" }}>Hizmetleri </span>
          </span>
        </p>
      </div>

      <ServiceCard />
    </div>
  );
}

export default Services;
