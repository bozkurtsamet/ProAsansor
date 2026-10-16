import "../css/ServiceCard.css";
import ProAsansorImage from "../assets/ProAsansorImage.jpeg";
import ProAsansorImage1 from "../assets/ProAsansorImage1.jpeg";
import ProAsansorImage2 from "../assets/ProAsansorImage2.jpeg";
import { IoHome } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";

function ServiceCard() {
  return (
    <div>
      <section className="ServiceSection">
        <div className="ServiceCard">
          <div className="ImageCard">
            <IoHome className="Icons" />
            <img
              src={ProAsansorImage}
              alt=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1",
                position: "relative",
              }}
            />
          </div>
          <div className="ContentCard">
            <h3>Ev Tasima Asansoru</h3>
            <p>
              Esyalarinizi guvenli ve hizli sekilde tasiyoruz. Dar merdiven ve
              asansor sorununa son
            </p>
          </div>
        </div>
        <div className="ServiceCard">
          <div className="ImageCard">
            <MdLocationCity className="Icons" />
            <img src={ProAsansorImage1} alt="" />
          </div>
          <div className="ContentCard">
            <h3>Dis Cephe Asansoru</h3>
            <p>
              Yuksek katli binalarda hizli, guvenli, ve profesyonel tasima
              cozumleri
            </p>
          </div>
        </div>
        <div className="ServiceCard">
          <div className="ImageCard">
            <GoShieldCheck className="Icons" />
            <img src={ProAsansorImage2} alt="" />
          </div>
          <div className="ContentCard">
            <h3>Guvenli Tasima</h3>
            <p>
              Esyalarinizi ozel ekipmanlarimizla korunur, hasarsiz sekilde yeni
              yerinize tasinir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceCard;
