import "../css/safeDepositBox.css";
import { Table } from "react-bootstrap";

const SaveDepositBox = () => {
  return (
    <div>
      <div className="hero-section-sdb">
        <div
          className="containers-visi"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>Safe Deposit Box</h1>
        </div>
      </div>

      <section className="contSdb">
        <p
          div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <b>
            <span>Bank Multi Sembada Dana </span>
          </b>
          menyediakan produk layanan{" "}
          <b>
            <span>Safe Deposit Box (SDB)</span>
          </b>{" "}
          dalam jangka waktu tertentu atau sesuai dengan permintaan pelanggan
          dengan keamanan dan perlindungan yang maksimal. Sehingga Anda dapat
          lebih tenang dalam menyimpan barang berharga/dokumen Anda seperti
          perhiasan, logam mulia, saham, obligasi, surat berharga, sertifikat
          atau barang-barang Anda yang tidak ternilai harganya.
        </p>
      </section>
      <section className="keunggulanSdb">
        <div
          className="contKeunggulan"
          div
          data-aos="fade-right"
          data-aos-once="true"
        >
          <h1>Keuntungan Layanan SDB Sembada </h1>
          <p>
            Sembada berkomitmen menghadirkan produk layanan Safe Deposit Box
            (SDB), yang aman dan nyaman dengan harga layanan yang kompetitif
            untuk memenuhi kebutuhan Anda.
          </p>
        </div>
        <div className="hovKeunggulan">
          <section className="row1">
            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <h2>Aman</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <h2>Nyaman</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <h2>Fleksibel</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <h2>Kompetitif</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </section>
        </div>
      </section>

      <section
        className="persyaratan"
        div
        data-aos="fade-out"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div className="listSyarat">
          <h1>Persyaratan mudah pengajuan SDB</h1>
          <ol>
            <li>
              Hanya dengan mengisi formulir aplikasi, melampirkan fotokopi KTP
              atau bukti identitas lain, mengisi perjanjian sewa SDB dan
              memiliki rekening di Bank Sembada
            </li>
            <li>
              Jangka waktu sewa 6 dan 12 bulan serta dapat diperpanjang secara
              otomatis.
            </li>
            <li>Tersedia bagi penyewa perorangan maupun non perorangan.</li>
            <li>
              Dapat memberi kuasa kepada pihak lain untuk mengambil/menyimpan
              barang simpanan.
            </li>
            <li>Tersedia berbagai ukuran box sesuai dengan keutuhan Anda.</li>
          </ol>
        </div>
        <div className="tabelSyarat">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Ukuran Box</th>
                <th>No</th>
                <th>Ukuran Box</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>3 x 5 x 24</td>
                <td>5</td>
                <td>15 x 10 x 24</td>
              </tr>
              <tr>
                <td>2</td>
                <td>5 x 5 x 24</td>
                <td>6</td>
                <td>5 x 15 x 24</td>
              </tr>
              <tr>
                <td>3</td>
                <td>3 x 10 x 24</td>
                <td>7</td>
                <td>15 x 15 x 24</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5 x 10 x 24</td>
                <td>8</td>
                <td>15 x 30 x 24</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
      <div
        className="list-harga-SDB"
        div
        data-aos="fade-out"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <div className="Judul-hargaSDB">
          <h1>List harga sewa SDB Sembada</h1>
          <p className="p-SDB">
            Berikut price list harga sewa dan ukuran SDB sembada
          </p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th rowSpan={2}>Ukuran Box</th>
              <th colSpan={2}>Harga Sewa 12 Bulan</th>
              <th rowSpan={2}>Jaminan kunci</th>
            </tr>
            <tr>
              <th>Nasabah dengan total rata-rata saldo minimal Rp 10 Juta</th>
              <th>
                Nasabah dengan total rata-rata saldo kurang dari Rp 10 Juta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 x 5 x 24</td>
              <td>200.000</td>
              <td>400.000</td>
              <td rowSpan={8}>600.000</td>
            </tr>
            <tr>
              <td>5 x 5 x 24</td>
              <td>250.000</td>
              <td>500.000</td>
            </tr>
            <tr>
              <td>3 x 10 x 24</td>
              <td>300.000</td>
              <td>600.000</td>
            </tr>
            <tr>
              <td>5 x 10 x 24</td>
              <td>450.000</td>
              <td>900.000</td>
            </tr>
            <tr>
              <td>15 x 10 x 24</td>
              <td>750.000</td>
              <td>1.500.000</td>
            </tr>
            <tr>
              <td>5 x 15 x 24</td>
              <td>750.000</td>
              <td>1.500.000</td>
            </tr>
            <tr>
              <td>15 x 15 x 24</td>
              <td>900.000</td>
              <td>1.800.000</td>
            </tr>
            <tr>
              <td>15 x 30 x 24</td>
              <td>2.250.000</td>
              <td>4.500.000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default SaveDepositBox;
