import Icon from "@mdi/react";
import { mdiPhoneClassic, mdiWhatsapp, mdiEmailCheck } from "@mdi/js";

import "../css/kontakKami.css";
const KontakKami = () => {
  return (
    <div>
      <section
        className="main-hero-kontakkami"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="img-kontakKami"></div>
        <div className="header-kontak">
          <h1>Hubungi Kami</h1>
          <p>
            Anda dapat menghubungi kami lewat beberapa cara, kami dengan senang
            hati melayani anda.
          </p>
        </div>
      </section>

      <section
        className="conten-kontak"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h1>Terimakasih telah mengunjungi web Sembada</h1>
        <p>
          Anda dapat memilih salah satu saluran komunikasi di bawah ini, kami
          dengan senang hati akan melayani Anda.
        </p>
      </section>
      <div className="contact-container">
        <div
          className="contact-item"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Icon className="icon" path={mdiPhoneClassic} size={3} />
          <h2>Layanan Sembada Care</h2>
          <p>Hubungi kami di nomor:</p>
          <a href="tel:+628123456789" target="blank">
            021-3840786
          </a>
          /
          <a href="tel:+628123456789" target="blank">
            021-3840881
          </a>
        </div>

        <div
          className="contact-item"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Icon className="icon" path={mdiWhatsapp} size={3} />
          <h2>Layanan WhatsApp Marketing</h2>
          <p>Hubungi kami melalui WhatsApp:</p>
          <a href="https://wa.me/628123456789" target="blank">
            08123456789
          </a>
        </div>

        <div
          className="contact-item"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Icon className="icon" path={mdiEmailCheck} size={3} />
          <h2>Layanan Sembada Email</h2>
          <p>Kirim email kepada kami di:</p>
          <a
            href="https://support.google.com/mail/answer/8494?hl=id&co=GENIE.Platform%3DDesktop"
            target="blank"
          >
            bprsembada@bprsembada.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default KontakKami;
