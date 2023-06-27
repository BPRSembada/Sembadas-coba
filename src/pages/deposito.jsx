import "../css/tabungan.css";
import { Button, Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiShieldAccountVariantOutline,
  mdiHandshakeOutline,
  mdiFinance,
} from "@mdi/js";
const Deposito = () => {
  return (
    <div>
      {/*full Body */}
      {/* Hero */}
      <div className="hero-img-tabungan">
        <div
          className="hero-section-tabungan"
          div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Deposito
          </h1>
          <p
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Bank Sembada menghadirkan produk investasi berjangka yang memudahkan
            bagi nasabah, menjamin keamanan dalam berinvestasi serta memberikan
            bunga yang menarik.
          </p>
        </div>
        <div className="table-deposito">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Jangka Waktu</th>
                <th scope="col">Suku Bunga Perpanjangan</th>
                <th scope="col">Suku Bunga Penempatan Baru</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1 Bulan</th>
                <td>5.00%</td>
                <td>5.00%</td>
              </tr>
              <tr>
                <th scope="row">3 Bulan</th>
                <td>5.25%</td>
                <td>5.25%</td>
              </tr>
              <tr>
                <th scope="row">6 Bulan</th>
                <td>5.50%</td>
                <td>5.50%</td>
                
              </tr>
              <tr>
                <th scope="row">12 Bulan</th>
                <td>5.75%</td>
                <td>5.75%</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section
        className="deskripsi-simpanan-konvensional"
        div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1>Deposito Sembada</h1>
        <p>
          Bank Multi Sembada Dana memberikan solusi investasi berjangka dalam
          bentuk deposito dengan proses yang mudah dengan suku bunga menarik dan
          dapat digunakan sebagai jaminan kredit.
        </p>
      </section>

      <div className="container1">
        <div className="cont-body">
          <div className="mid-container">
            <h1
              div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Keunggulan
            </h1>
            <section class="features">
              <div
                className="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Icon path={mdiHandshakeOutline} size={4} className="icon" />
                <h2>Proses Mudah dan Nyaman</h2>
                <p>
                  Persyaratan yang simpel dan proses yang cepat dengan pelayanan
                  sepenuh hati
                </p>
              </div>
              <div
                className="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Icon
                  path={mdiShieldAccountVariantOutline}
                  size={4}
                  className="icon"
                />
                <h2>Aman</h2>
                <p>
                  Dikelola oleh tim profesional, berizin dan diawasi oleh
                  Otoritas Jasa Keuangan (OJK) serta dijamin Lembaga Penjamin
                  Simpanan (LPS).
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
                <Icon path={mdiFinance} size={4} className="icon" />
                <h2>Menguntungkan</h2>
                <p>
                  Deposito di Bank Sembada yang menarik dengan suku bunga tinggi
                  dan berkesempatan untuk mendapatkan layanan Safe Deposit Box
                  (SDB)
                </p>
              </div>
            </section>
            <br />
          </div>
        </div>
      </div>
      <section className="fitur-manfaat-prasayart-deposito">
        <div className="cont-fitur-manfaat-kiri">
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h1>AJUKAN DEPOSITO LEWAT WEBSITE BANK SEMBADA</h1>
            <p>
              Anda dapat mengajukan deposito melalui website dengan mengisi form
              yang tersedia, dan kami akan segera menghubungi Anda.
            </p>
            <div>
              <Button variant="danger" href="./formSimpanan">
                Buka Simpanan
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h1>UNDUH FORM PENGAJUAN DEPOSITO BANK SEMBADA</h1>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan deposito lalu berkunjung langsung ke kantor
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
          div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="site-prasarat-simpanan">
            <h1>FITUR DAN MANFAAT</h1>
            <ol>
              <li>
                Jangka waktu penempatan fleksible dengan tenor 1,3,6,9 dan 12
                bulan 1
              </li>
              <li>Dapat dijadikan jaminan kredit</li>
              <li>
                Bunga dihitung berdasarkan jumlah hari penempatan (1 tahun
                dihitung 365 hari)
              </li>

              <li>
                Penempatan deposit dapat diperpanjang secara otomatis
                (Automatick Roll Over/ARO) 5. Pencairan deposito, dana dapat di
                transfer ke rekening bank lain atau di tempatkan kembali di
                tabungan Bank Sembada Dana.
              </li>
            </ol>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      Membawa Bukti identitas diri yang masih berlaku, yaitu
                      <ul>
                        <li>
                          Perorangan: KTP (WNI), KITAS/Passport (WNA), NPWP
                        </li>
                        <li>
                          Badan Usaha : SIUP, TDP, NPWP,, Akta pendirian, Akta
                          terbaru, Domisili perusahaan, AHU dari kementrian
                          Hukum dan HAM (apabila ada perubahan data perseroan)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mengisi dan menandatangani formulir apikasi data
                      penempatan Deposito
                    </li>
                    <li>
                      Penempatan Deposito awal yg ringan minimal Rp. 1.000.000
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
export default Deposito;
