import "../css/kreditKerja.css";
import "../component/Calculator.css";
import { Button, Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiClockFast,
  mdiShieldCheckOutline,
  mdiClipboardEditOutline,
} from "@mdi/js";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

// import component
import KalkulatorKredit from "../component/kalkulator";

const Kreditkerja = () => {
  return (
    <div>
      <div className="hero-img-kreditKerja">
        {/* <div
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
            Kredit Modal Kerja
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Bank Sembada memberikan solusi untuk memperluas bisnis Anda, dengan
            kredit modal kerja akan menunjang perputaran modal dalam bisnis dan
            membantu meningkatkan keuntungan transaksi bisnis Anda.
          </p>
        </div> */}
      </div>
      <div
        className="deskripsi-kedit-kerja"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1>Kredit Modal Kerja Sembada</h1>
        <p>
          Hadir sebagai layanan pinjaman untuk menunjang dan meningkatkan
          usaha/bisnis Anda dengan sistem plafon yang memperhitungkan hanya
          pembayaran bunga pinjaman setiap bulannya
        </p>
        {/* <p>
          Bank Sembada menghadirkan produk keuangan Kredit Modal yang di tujukan
          bagi usaha di bidang usaha industri, perdagangan dan jasa atau yang
          berhubungan dengan pengadaan maupun proses produksi sampai dengan
          barang tersebut dijual. Dengan suku bunga yang kompetitif, serta
          proses pengajuan dan pencairan yang dilakukan dengan cepat, aman dan
          mudah. Sehingga dapat mendukung usaha Anda agar terus tumbuh dan
          berkembang kearah yg lebih baik.
        </p> */}
      </div>

      <div className="container1">
        <div className="cont-body">
          <div className="mid-container">
            <h1 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
              Keunggulan
            </h1>
            <section className="features">
              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Icon path={mdiClockFast} size={4} className="icon-simkon" />
                <h2>Cepat</h2>
                <p>
                  Data anda siap dijemput dan langsung diproses, dan kami
                  berkomitmen memberikan kepastian dalam 5 hari kerja. *(setelah
                  berkas lengkap)
                </p>
              </div>
              <div
                className="feature"
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
                  Dikelola oleh tim yang berpengalaman dan profesional, BPR
                  Sembada merupakan lembaga jasa keuangan bank yang terdaftar
                  dan diawasi OJK (Otoritas Jasa Keuangan)
                  <br />
                  <br />
                  <i>*setelah persyaratan data dinyatakan lengkap</i>
                </p>
              </div>
              <div
                className="feature"
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
                  Persyaratan pengajuan pinjaman mudah dan tidak berbelit-belit
                  untuk mendapatkan persetujuan kredit
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="fitur-manfaat-prasayart-kredit">
        <div className="cont-fitur-manfaat-kredit">
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1>AJUKAN LEWAT WEBSITE BANK SEMBADA</h1>
            <p>
              Anda dapat mengajukan kredit modal kerja melalui website dengan
              mengisi form yang tersedia, dan petugas kami akan segera
              menghubungi Anda.
            </p>
            <div>
              <Button variant="danger" href="./formKredit">
                Buka Pinjaman
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1>UNDUH FORM PENGAJUAN KEDIT BANK SEMBADA</h1>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan kredit modal kerja dan berkunjung langsung
              ke kantor Bank Sembada
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
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="site-prasarat-kredit">
            <h1>Fitur dan Manfaat</h1>
            <ol>
              <li>Suku bunga kredit kompetitif dengan bank lainnya</li>
              <li>
                Jangka waktu kredit maksimal 1 tahun sejak akad (dapat
                diperpanjang)
              </li>
              <li>Plafon kredit hingga Rp 5 Milyar</li>
              <li className="red-kk">
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
              <li className="red-kk">
                Bebas biaya appraisal untuk kredit plafon &lt; Rp. 300 juta
              </li>
              <li>
                Sistem pembayaran:
                <ul>
                  <li>
                    Bayar bunga saat tanggal ulangan bulanan dan bayar pokok
                    saat jatuh tempo
                  </li>
                  <li className="red-kk">Fasilitas pembayaran angsuran lewat autodebet</li>
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
              <li className="red-kk">Perlindungan asuransi jiwa dan kebakaran</li>
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
      <section className="calkulator-pinjaman">
        <KalkulatorKredit />
      </section>
    </div>
  );
};
export default Kreditkerja;
