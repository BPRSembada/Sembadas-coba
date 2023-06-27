import "./Navibar.css";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
const Footers = () => {
  return (
    <div className="cont-footer">
      <div className="container-footer">
        <div className="footer-about">
          <h3>Hubungi kami</h3>
          <div className="footer-1">
            <div>
              <h5>Alamat Kami</h5>
              <p>
                Gedung ASEAN TOWER Jalan KH Samanhudi No.10 Lantai 6, RT.01
                RW.02 Kel. Pasar Baru, Kec. Sawah Besar, Jakarta Pusat 10710
              </p>
            </div>
            <div>
              <h5>Nomor Telephone</h5>
              <p>Telepon: 021-3840786</p>
              <p>Telepon: 021-3840881</p>
            </div>
            <div>
              <h5>Email</h5>
              <p>bprsembada@bprsembada.com</p>
            </div>
            <h6>Melayani dengan prinsip "TULUS"</h6>
          </div>
        </div>
        <div className="footer-social">
          <h3>Sosial Media</h3>
          <ul>
            <li>
              <a href="#">
                <Icon path={mdiInstagram} size={1} />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon path={mdiTwitter} size={1} />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon path={mdiFacebook} size={1} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-address">
          <h3>BERIZIN DAN DIAWASI OLEH OJK</h3>
          <div className="logoLegal">
            <img src="assets/OJKLogo.png" alt="" />
          </div>
          <h3 style={{ marginTop: "1rem" }}>MERUPAKAN PESERTA PENJAMIN LPS</h3>
          <div className="logoLegal">
            <img src="assets/LembagaPenjaminSimpanan.png" alt="" />
          </div>
          <p className="copyright">
            COPYRIGHT © 2023 PT BPR MULTI SEMBADA DANA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};
// testing kris
export default Footers;
