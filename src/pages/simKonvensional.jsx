import "../css/simKonvensional.css";
import { Button, Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiFinance,
  mdiHandCoinOutline,
  mdiCheckDecagramOutline,
} from "@mdi/js";

const SimpKonvensional = () => {
  return (
    <div>
      {/*full Body */}
      {/* Hero */}
      <div className="hero-img-simkon">
        <div
          className="hero-section-simkon"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Simpanan Konvensional
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Bank Sembada menghadirkan tabungan dengan mengutamakan kemudahan
            bertransaksi serta suku bunga yang menarik.
          </p>
        </div>
      </div>
      <section
        className="deskripsi-simpanan-konvensional"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1>Simpanan Konvensional Sembada</h1>
        <p>
          Bank Sembada memberi solusi simpanan dengan kemudahan transaksi dan
          suku bunga yang menguntungkan untuk Nasabah. Proses setor dana dapat
          dilakukan melalu Bank di seluruh Indonesia.
        </p>
      </section>
      <div className="container1">
        <div className="cont-body">
          <div className="mid-container">
            <h1 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
              Keunggulan
            </h1>
            <section class="features">
              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Icon path={mdiHandCoinOutline} size={4} className="icon" />
                <h2>Setoran Awal Ringan</h2>
                <p>
                  Dengan hanya Rp 10.000 anda dapat membuka dan menikmati
                  fasilitas tabungan di Bank Sembada
                </p>
              </div>
              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Icon path={mdiFinance} size={4} className="icon" />
                <h2>Menguntungkan</h2>
                <p>
                  Bank Sembada menawarkan suku bunga yang menarik dan
                  menguntungkan (3%), serta Nasabah berkesempatan menikmati
                  layanan Safe Deposit Box (SDB)
                </p>
              </div>
              <div
                className="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Icon
                  path={mdiCheckDecagramOutline}
                  size={4}
                  className="icon"
                />
                <h2>Dikelola oleh Profesional</h2>
                <p>
                  Setiap dana yang anda tabung akan di kelola secara profesional
                  oleh SDM ahli di Bank Sembada untuk mengoptimalisasi
                  keuntungan nasabah
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="fitur-manfaat-prasayart-simpanan">
        <div className="cont-fitur-manfaat-kiri">
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h1>BUKA REKENING SEKARANG</h1>
            <p>
              Anda dapat mengajukan simpanan melalui website dengan mengisi form
              yang tersedia
            </p>
            <div>
              <Button variant="danger" href="./formSimpanan">
                Buka Simpanan
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h1>UNDUH FORMULIR</h1>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan simpanan dan berkunjung langsung ke kantor
              Bank Sembada
            </p>
            <div>
              <Button variant="warning" href="">
                Download Form
              </Button>
            </div>
          </div>
        </div>

        <div
          className="cont-fitur-manfaat-kanan"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="site-prasarat-simpanan">
            <h1>FITUR DAN MANFAAT</h1>
            <ol>
              <li>Bunga yang menarik dan kompetitif sebesar 3%</li>
              <li>Setoran awal ringan</li>
              <li>Bebas biaya administrasi bulanan dan bebas biaya admin</li>

              <li>Transaksi mudah, aman dan nyaman</li>
              <li>
                Setoran bulanan dapat dilakukan menggunakan Bank seluruh
                Indonesia
              </li>
            </ol>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      Membawa bukti identitas diri yang masih berlaku, yaitu
                      <ul>
                        <li>Perorangan: KTP(WNI), KITAS/Passport(WNA), NPWP</li>
                        <li>
                          Badan Usaha: SIUP, TDP, NPWP, Akta pendirian, Akta
                          terbaru, Domisili perusahaan, AHU dari kementrian
                          Hukum dan HAM (apabila ada perubahan data perseroan)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mengisi dan menandatangani formulir pembukaan tabungan
                      Bank Sembada dengan setoran awal Rp.10.000
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpKonvensional;
