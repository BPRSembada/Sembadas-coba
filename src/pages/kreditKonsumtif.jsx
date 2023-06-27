import "../css/kreditKonsumtif.css";
import Icon from "@mdi/react";
import {
  mdiClockFast,
  mdiShieldCheckOutline,
  mdiClipboardEditOutline,
} from "@mdi/js";
import { Button, Table, Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
const KreditKonsumtif = () => {
  return (
    <div>
      {/*full Body */}
      {/* Hero */}
      <div className="hero-img-kreditKonsumtif">
        {/* <div
          className="hero-section-simkon"
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
            Kredit Konsumtif
          </h1>
          <p
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Hadir sebagai layanan pinjaman yang dapat membantu Anda untuk
            memenuhi berbagai macam kebutuhan konsumtif yang diperlukan. Penuhi
            beragam kebutuhan seperti Renovasi Rumah, Pendidikan, Biaya
            Pernikahan, Pengobatan, serta kebutuhan konsumtif lainnya
          </p>
        </div> */}
      </div>
      <div
        className="deskripsi-kedit-kerja"
        div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1>Kredit Konsumtif Sembada</h1>
        <p>
          Hadir sebagai layanan pinjaman yang dapat membantu Anda untuk memenuhi
          berbagai macam kebutuhan konsumtif yang diperlukan. Penuhi beragam
          kebutuhan seperti Renovasi Rumah, Pendidikan, Biaya Pernikahan,
          Pengobatan, serta kebutuhan konsumtif lainnya
        </p>
      </div>

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
                class="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Icon path={mdiClockFast} size={4} className="icon-simkon" />
                <h2>Cepat</h2>
                <p>
                  Proses pengajuan aplikasi mudah dan nyaman, ajukan online dan
                  data Anda dapat kami jemput, sehingga dana Anda cepat cair
                </p>
              </div>
              <div
                class="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Icon
                  path={mdiShieldCheckOutline}
                  size={4}
                  className="icon-simkon"
                />
                <h2>Aman</h2>
                <p>
                  Dikelola oleh tim profesional, Bank Sembada merupakan lembaga
                  jasa keuangan bank yang berizin dan diawasi oleh OJK (Otoritas
                  Jasa Keuangan)
                  <br />
                  <br />
                  <i>*setelah persyaratan data dinyatakan lengkap</i>
                </p>
              </div>
              <div
                class="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Icon
                  path={mdiClipboardEditOutline}
                  size={4}
                  className="icon-simkon"
                />
                <h2>Mudah</h2>
                <p>
                  Persyaratan mudah dan tidak berbelit-belit untuk mendapatkan
                  persetujuan kredit
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* <section
        className="persyaratan-kredit"
        div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="listSyarat-kredit">
          <h1>Fitur dan Manfaat</h1>
          <ol>
            <li>Suku bunga kredit kompetitif dengan bank lainnya</li>
            <li>Jangka waktu kredit 6 bulan hingga 10 tahun sejak akad</li>
            <li>Plafon kredit hingga Rp 5 Milyar</li>
            <li>
              Presentase Pembiayaan (Loan to Value) hingga 60% dari nilai agunan
              berdasarkan penilaian bank
            </li>
            <li>
              Agunan:
              <ul>
                <li>
                  a. SHM (Sertifikat Hak Milik)/SHGB (Sertifikat Hak Guna
                  Bangunan) untuk rumah, apartemen, ruko, rukan, atau tanah
                  kosong untuk dibangun
                </li>
                <li>b. BPKB Kendaraan (sebagai agunan tambahan)</li>
              </ul>
            </li>
            <li>Bebas biaya appraisal untuk kredit plafon &lt; Rp. 300 juta</li>
            <li>
              Sistem pembayaran:
              <ul>
                <li>Fasilitas pembayaran angsuran lewat autodebet</li>
                <li>
                  Bayar bunga & pokok saat tanggal ulangan bulanan dan dilunasi
                  saat jatuh tempo
                </li>
              </ul>
            </li>
            <li>
              Fasilitas Take-over: Pengambilalihan KPR/kredit dari bank lain,
              dengan maksimum limit kredit sebesar outstanding (sisa pinjaman)
              terakhir di bank asal atau limit kredit baru sesuai perhitungan
              Bank Sembada. Jika jumlahnya lebih besar dari outstanding terakhir
              di bank asal, Anda bisa memanfaatkannya untuk memenuhi berbagai
              kebutuhan lain.
            </li>
            <li>
              Fasilitas Top-up: Penambahan limit kredit yang telah berjalan di
              Bank Sembada. Dengan tambahan limit kredit, Anda dapat memenuhi
              beragam kebutuhan lain
            </li>
            <li>Mendapatkan perlindungan asuransi jiwa dan kebakaran</li>
          </ol>
          <h1>Syarat dan Ketentuan</h1>
          <ol>
            <li>Jenis nasabah sebagai:</li>
            <ul>
              <li>
                Karyawan tetap (usia 21 – 60 tahun s/d jatuh tempo kredit)
              </li>
              <li>Wiraswasta (usia 21 – 60 tahun s/d jatuh tempo kredit)</li>
              <li>Badan Usaha PD/UD, CV (usia ≥ 2 tahun setelah berdiri)</li>
            </ul>
            <li>
              Calon Nasabah disarankan agar mempersiapkan kelengkapan dokumen
              penunjang guna memudahkan petugas kami saat melakukan penjemputan
              dokumen dan proses pengajuan kredit multiguna bisa segera
              dilakukan.
            </li>
          </ol>
        </div>
        <div className="tabelSyarat-kredit">
          <h1>Berikut daftar dokumen persyaratan Kredit Konsumtif :</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Dokumen</th>
                <th>Karyawan</th>
                <th>Profesional</th>
                <th>Wiraswasta</th>
                <th>Perusahaan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Copy KTP (Suami/Istri yang berlaku)</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Copy Kartu Keluarga (KK)</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  Copy Akta Nikah dari Catatan Sipil/Cerai dari Pengadilan /
                  Kematian
                </td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Copy NPWP (untuk pinjaman &mt; Rp 50 juta)</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Akta Pendirian</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>TDP / SIUP / Surat Keterangan Usaha (SKU)</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Neraca (Rugi/Laba) / Laporan Keuangan</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Copy Catatan Keuangan</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Copy Rek. Koran / Tabungan 3 Bulan Terakhir</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Slip Gaji Terbaru</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>11.</td>
                <td>Copy Surat Keterangan Bekerja</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>12.</td>
                <td>Copy Surat Keterangan Pengangkatan</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>13.</td>
                <td>Copy Surat Keterangan Praktek / Izin</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>14.</td>
                <td>Copy Keanggotaan Profesional</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>15.</td>
                <td>Surat Rekomendasi dari Tempat Bekerja</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>16.</td>
                <td>Copy Rek. Listrik / PDAM / Token / Telpon</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>17.</td>
                <td>Copy SHM / SHGB / SHMSRS</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>18.</td>
                <td></td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>19.</td>
                <td></td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
              <tr>
                <td>20.</td>
                <td></td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
                <td>&#10004;</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section> */}
      <section className="fitur-manfaat-prasayart-kredit">
        <div className="cont-fitur-manfaat-kredit">
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1>AJUKAN LEWAT WEBSITE BANK SEMBADA</h1>
            <p>
              Anda dapat mengajukan kredit Konsumtif melalui website dengan
              mengisi form yang tersedia, dan petugas kami akan segera
              menghubungi Anda.
            </p>
            <div>
              <Button variant="danger" href="./formKredit">
                Buka Simpanan
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1>UNDUH FORM PENGAJUAN KEDIT BANK SEMBADA</h1>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan kredit konsumtif dan berkunjung langsung ke
              kantor Bank Sembada
            </p>
            <div>
              <Button variant="warning" href="">
                Download Form
              </Button>
            </div>
          </div>
        </div>
        <section
          className="cont-fitur-manfaat-kanan"
          div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="site-prasarat-kredit">
            <h1>Fitur dan Manfaat</h1>
            <ol>
              <li>Suku bunga kredit kompetitif dengan bank lainnya</li>
              <li>Jangka waktu kredit 6 bulan hingga 10 tahun sejak akad</li>
              <li>Plafon kredit hingga Rp 5 Milyar</li>
              <li>
                Presentase Pembiayaan (Loan to Value) hingga 80% dari nilai
                agunan (market value) berdasarkan penilaian bank
              </li>
              <li>
                Agunan:
                <ul>
                  <li>
                    SHM (Sertifikat Hak Milik)/SHGB (Sertifikat Hak Guna
                    Bangunan) untuk rumah, apartemen, ruko, rukan, atau tanah
                    kosong untuk dibangun
                  </li>
                  <li>BPKB Kendaraan (sebagai agunan tambahan)</li>
                </ul>
              </li>
              <li>
                Bebas biaya appraisal untuk kredit plafon &lt; Rp. 300 juta
              </li>
              <li>
                Sistem pembayaran:
                <ul>
                  <li>Fasilitas pembayaran angsuran lewat autodebet</li>
                  <li>
                    Bayar bunga & pokok saat tanggal ulangan bulanan dan
                    dilunasi saat jatuh tempo
                  </li>
                </ul>
              </li>
              <li>
                Fasilitas Take-over: Pengambilalihan kredit dari bank lain,
                dengan maksimum limit kredit sebesar outstanding (sisa pinjaman)
                terakhir di bank asal atau limit kredit baru sesuai perhitungan
                Bank Sembada. Jika jumlahnya lebih besar dari outstanding
                terakhir di bank asal, Anda bisa memanfaatkannya untuk memenuhi
                berbagai kebutuhan lain.
              </li>
              <li>
                Fasilitas Top-up: Penambahan limit kredit yang telah berjalan di
                Bank Sembada. Dengan tambahan limit kredit, Anda dapat memenuhi
                beragam kebutuhan lain
              </li>
              <li>Perlindungan asuransi jiwa dan kebakaran</li>
            </ol>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>Jenis nasabah sebagai:</li>
                    <ul>
                      <li>
                        Karyawan tetap (usia 21 – 60 tahun s/d jatuh tempo
                        kredit)
                      </li>
                      <li>
                        Wiraswasta (usia 21 – 60 tahun s/d jatuh tempo kredit)
                      </li>
                      <li>
                        Badan Usaha PD/UD, CV (usia ≥ 2 tahun setelah berdiri)
                      </li>
                    </ul>
                    <li>
                      Calon Nasabah disarankan agar mempersiapkan kelengkapan
                      dokumen penunjang guna memudahkan petugas kami saat
                      melakukan penjemputan dokumen dan proses pengajuan kredit
                      multiguna bisa segera dilakukan.
                    </li>
                  </ol>
                  {/* <div className="tabelSyarat-kredit">
                    <h1>Dokumen persyaratan Kredit Modal Kerja :</h1>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Dokumen</th>
                          <th>Karyawan</th>
                          <th>Profesional</th>
                          <th>Wiraswasta</th>
                          <th>Perusahaan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Copy KTP (Suami/Istri yang berlaku)</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Copy Kartu Keluarga (KK)</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>
                            Copy Akta Nikah dari Catatan Sipil/Cerai dari
                            Pengadilan / Kematian
                          </td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Copy NPWP (untuk pinjaman &mt; Rp 50 juta)</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>5.</td>
                          <td>Akta Pendirian</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>6.</td>
                          <td>TDP / SIUP / Surat Keterangan Usaha (SKU)</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>7.</td>
                          <td>Neraca (Rugi/Laba) / Laporan Keuangan</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>8.</td>
                          <td>Copy Catatan Keuangan</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>9.</td>
                          <td>Copy Rek. Koran / Tabungan 3 Bulan Terakhir</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>10.</td>
                          <td>Slip Gaji Terbaru</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>11.</td>
                          <td>Copy Surat Keterangan Bekerja</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>12.</td>
                          <td>Copy Surat Keterangan Pengangkatan</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>13.</td>
                          <td>Copy Surat Keterangan Praktek / Izin</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>14.</td>
                          <td>Copy Keanggotaan Profesional</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>15.</td>
                          <td>Surat Rekomendasi dari Tempat Bekerja</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>16.</td>
                          <td>Copy Rek. Listrik / PDAM / Token / Telpon</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>17.</td>
                          <td>Copy SHM / SHGB / SHMSRS</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>18.</td>
                          <td></td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>19.</td>
                          <td></td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                        <tr>
                          <td>20.</td>
                          <td></td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                          <td>&#10004;</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div> */}
                </Accordion.Body>
              </Accordion.Item>

              <AccordionItem eventKey="3">
                <Accordion.Header>
                  Dokumen Persyaratan Kredit Konsumtif &nbsp;
                  <strong>Wiraswasta</strong>
                </Accordion.Header>
                <AccordionBody>
                  <ol>
                    <li>
                      Data Calon Debitur
                      <ol>
                        <li>Foto Copy KTP Pengurus</li>
                        <li>
                          Foto Copy Akte Pendirian & Perubahannya (Lengkap)
                        </li>
                        <li>Foto Copy SK MenKeh (Lengkap)</li>
                        <li>Foto Copy Lembaran Berita Negara</li>
                        <li>Foto Copy RUPS</li>
                      </ol>
                    </li>
                    <li>
                      Dokumen Perizinan
                      <ol>
                        <li>Foto Copy NPWP Badan Usaha</li>
                        <li>Foto Copy NPWP Pengurus</li>
                        <li>Foto Copy SIUP/NIB</li>
                        <li>Foto Copy TDP</li>
                        <li>Foto Copy Domisili Usaha</li>
                      </ol>
                    </li>
                    <li>
                      Data Keunangan / Usaha
                      <ol>
                        <li>
                          Foto Copy Rekening Koran/Tabungan 6 Bulan Terakhir
                        </li>
                        <li>Foto Copy Laporan Keuangan</li>
                        <li>Data Supplier & Customer</li>
                        <li>Foto Copy Invoice/Catatan Penjualan-Pembelian</li>
                        <li>Company Profile, Brosur, Pricelist</li>
                      </ol>
                    </li>
                    <li>
                      Data Jaminan / Agunan
                      <ol>
                        <li>
                          Foto Copy Sertifikat Tanah/Bangunan/Bukti
                          Kepemilikan/Surat Berharga
                        </li>
                        <li>Foto Copy Akte Jual Beli</li>
                        <li>Foto Copy IMB</li>
                        <li>Foto Copy PBB Terakhir</li>
                      </ol>
                    </li>
                  </ol>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="4">
                <Accordion.Header>
                  Dokumen Persyaratan Kredit Konsumtif &nbsp;
                  <strong>Perusahaan</strong>
                </Accordion.Header>
                <AccordionBody>
                  <ol>
                    <li>
                      Data Calon Debitur
                      <ol>
                        <li>Foto Copy KTP Pengurus</li>
                        <li>
                          Foto Copy Akte Pendirian & Perubahannya (Lengkap)
                        </li>
                        <li>Foto Copy SK MenKeh (Lengkap)</li>
                        <li>Foto Copy Lembaran Berita Negara</li>
                        <li>Foto Copy RUPS</li>
                      </ol>
                    </li>
                    <li>
                      Dokumen Perizinan
                      <ol>
                        <li>Foto Copy NPWP Badan Usaha</li>
                        <li>Foto Copy NPWP Pengurus</li>
                        <li>Foto Copy SIUP/NIB</li>
                        <li>Foto Copy TDP</li>
                        <li>Foto Copy Domisili Usaha</li>
                      </ol>
                    </li>
                    <li>
                      Data Keunangan / Usaha
                      <ol>
                        <li>
                          Foto Copy Rekening Koran/Tabungan 6 Bulan Terakhir
                        </li>
                        <li>Foto Copy Laporan Keuangan</li>
                        <li>Data Supplier & Customer</li>
                        <li>Foto Copy Invoice/Catatan Penjualan-Pembelian</li>
                        <li>Company Profile, Brosur, Pricelist</li>
                      </ol>
                    </li>
                    <li>
                      Data Jaminan / Agunan
                      <ol>
                        <li>
                          Foto Copy Sertifikat Tanah/Bangunan/Bukti
                          Kepemilikan/Surat Berharga
                        </li>
                        <li>Foto Copy Akte Jual Beli</li>
                        <li>Foto Copy IMB</li>
                        <li>Foto Copy PBB Terakhir</li>
                      </ol>
                    </li>
                  </ol>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </section>
    </div>
  );
};
export default KreditKonsumtif;
