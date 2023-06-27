import "../css/visiMisi.css";
const VisiMisi = () => {
  return (
    <div>
      <div className="hero-section-visi">
        <div className="containers-visi">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Tentang Kami
          </h1>
        </div>
      </div>

      <div className="visimisi-desc">
        <p>
          Sesuai dengan Rencana Bisnis Bank tahun 2023, Bank Sembada berkomitmen
          untuk terus bertumbuh dan menjadi bank yang terpercaya sebagai pilihan
          utama solusi keuangan layanan perbankan dengan 3 M (Murah, Mudah,
          Menguntungkan), Sumber Daya Manusia yang kompeten serta sarana dan
          prasarana layanan yang berkualitas
        </p>
      </div>

      <div className="vision-mission">
        
        <div className="cont-visi">
          <div className="row">
            <div
              className="col-lg-6 vismis"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Pernyataan Visi Perusahaan</h2>
              <p>
                Menjadi Bank Perkreditan Rakyat yang terpercaya sebagai pilihan
                utama solusi keuangan layanan perbankan
              </p>
            </div>
            <div
              className="col-lg-6 vismis"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Pernyataan Misi Perusahaan</h2>
              <p>
                Untuk mewujudkan pernyataan visi perusahaan tersebut, Bank
                Sembada berkomitmen dan menjunjung tinggi Filosofi “TULUS” yang
                menjadi nilai-nilai dan budaya perusahaan
              </p>
              <ul>
                <li>
                  <b>T</b>ransformasi layanan perbankan 3M (Mudah, Murah,
                  Menguntungkan)
                </li>
                <li>
                  <b>U</b>tamakan pertumbuhan keuangan yang sehat dan kuat
                  bersama nasabah dan seluruh stakeholder
                </li>
                <li>
                  <b>L</b>ingkungan layanan ramah dengan sarana dan prasarana
                  layanan berkualitas
                </li>
                <li>
                  <b>U</b>paya terus menerus meningkatkan nilai tambah layanan
                  dan kepuasan seluruh stakeholder
                </li>
                <li>
                  <b>S</b>umber daya manusia yang berkompeten didukung teknologi
                  informasi memadai
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisiMisi;
