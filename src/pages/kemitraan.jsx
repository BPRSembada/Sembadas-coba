import { Form, Button, InputGroup } from "react-bootstrap";
import "../css/kemitraan.css";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiEmailOutline,
  mdiPhoneOutline,
} from "@mdi/js";
const Kemitraan = () => {
  return (
    <div>
      <div className="hero-section-kemitraan">
        <div className="containers-visi">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Kemitraan
          </h1>
        </div>
      </div>
      <form className="cont-form-simpanan">
        <div className="cont-formss">
          <h3>Form pengajuan kemitraan :</h3>
          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">Tulis nama anda</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiAccountCircleOutline} size={1} />
                </InputGroup.Text>
                <Form.Control placeholder="Nama anda" />
              </InputGroup>
              <Form.Text className="TextErr"></Form.Text>
            </div>
            <div className="form-item2">
              <Form.Label htmlFor="basic-url">Organisasi</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiAccountCircleOutline} size={1} />
                </InputGroup.Text>
                <Form.Control placeholder="Nama Organisasi" />
              </InputGroup>
              <Form.Text className="TextErr"></Form.Text>
            </div>
          </div>
          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">No telephone</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiPhoneOutline} size={1} />
                </InputGroup.Text>
                <Form.Control placeholder="No telephone anda" type="number" />
              </InputGroup>
            </div>
            <div className="form-item2">
              <Form.Label htmlFor="basic-url">Email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiEmailOutline} size={1} />
                </InputGroup.Text>
                <Form.Control placeholder="your-email@gmail.com" type="email" />
              </InputGroup>
              <Form.Text className="TextErr"></Form.Text>
            </div>
          </div>
          <div className="form-terakhir">
            <div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Form Masukan Anda</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </div>
          </div>
          <div className="cont-btn-form">
            <Button variant="danger" className="BukaTabungan">
              Pengajuan Kemitraan
            </Button>{" "}
            <p>
              Dengan klik 'Pengajuan Kemitraan' maka petugas bank Sembada dapat
              segera melayani Anda untuk pembukaan tabungan
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Kemitraan;
