import "../component/Calculator.css";
import { useState } from "react";
import { InputGroup, Form, Table, Button } from "react-bootstrap";

const KalkulatorKredit = () => {
  const initialValue = 0;

  // state jenis kredit
  const [jenisKredit, setJenisKeredit] = useState();

  // state hasilPRK
  const [bungaPRK, setBungaPRK] = useState(initialValue);
  const [hasilPRK, setHsilPRK] = useState([0, 0]);

  // state input kalkulator
  const [nominal, setNominal] = useState(initialValue);
  const [bunga, SetBunga] = useState(initialValue);
  const [tenor, setTenor] = useState([0, ""]);
  const [hasil, setHasil] = useState([0, 0, 0]);
  const HandleNominal = (e) => {
    const { value } = e.target;
    setNominal(value);
  };
  // formating input nominal
  const formattedNumber = parseFloat(nominal).toLocaleString("en-US");

  const HandleTenor = (e) => {
    let Tenor = e.target.value;
    if (Tenor === "1") {
      setTenor([1, "1 Bulan"]);
    } else if (Tenor === "3") {
      setTenor([3, "3 Bulan"]);
    } else if (Tenor === "6") {
      setTenor([6, "6 Bulan"]);
    } else if (Tenor === "12") {
      setTenor([12, "12 Bulan"]);
    } else if (Tenor === "24") {
      setTenor([24, "24 Bulan"]);
    } else if (Tenor === "36") {
      setTenor([36, "36 Bulan"]);
    } else if (Tenor === "48") {
      setTenor([48, "48 Bulan"]);
    } else if (Tenor === "60") {
      setTenor([60, "60 Bulan"]);
    } else if (Tenor === "72") {
      setTenor([72, "72 Bulan"]);
    } else if (Tenor === "80") {
      setTenor([84, "84 Bulan"]);
    } else if (Tenor === "96") {
      setTenor([96, "96 Bulan"]);
    } else if (Tenor === "108") {
      setTenor([108, "108 Bulan"]);
    } else if (Tenor === "120") {
      setTenor([120, "120 Bulan"]);
    }
  };
  const PTAKalkulator = () => {
    return (
      <div className="cont-kalkulator">
        <div className="form-kalkulator">
          <Form.Label htmlFor="basic-url">
            Nominal Pinjaman Tetap Angsuran
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="E.g: Rp 100.000,00"
              type="number"
              onChange={HandleNominal}
              value={nominal}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Suku Bunga Pertahun</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="23.5% / Tahun"
              type="number"
              onChange={(e) => SetBunga(e.target.value)}
              value={bunga}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Tenor Pinjaman</Form.Label>
          <Form.Select className="mb-3" onChange={(e) => HandleTenor(e)}>
            <option value="kosong">Pilih salah satu</option>
            <option value="1">1 Bulan</option>
            <option value="3">3 Bulan</option>
            <option value="6">6 Bulan</option>
            <option value="12">12 Bulan</option>
            <option value="24">24 Bulan</option>
            <option value="36">36 Bulan</option>
            <option value="48">48 Bulan</option>
            <option value="60">60 Bulan</option>
            <option value="72">72 Bulan</option>
            <option value="84">84 Bulan</option>
            <option value="96">96 Bulan</option>
            <option value="108">108 Bulan</option>
            <option value="120">120 Bulan</option>
          </Form.Select>
        </div>
        <div className="hasil-kalkulator">
          <Form.Label htmlFor="basic-url">Hasil simulasi kredit</Form.Label>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2}>
                  Tenor kredit {tenor[1]} dengan bunga {bunga}%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pokok Pinjaman</td>
                <td>Rp. {formattedNumber}</td>
              </tr>
              <tr>
                <td>Total Bunga</td>
                <td>Rp. {hasil[0].toLocaleString()}</td>
              </tr>
              <tr>
                <td>Total Angsuran</td>
                <td>Rp. {hasil[1].toLocaleString()}</td>
              </tr>
              <tr>
                <td>Angsuran per bulan</td>
                <td>Rp. {hasil[2].toLocaleString()}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="danger" onClick={kalkulasi} className="me-4">
            Kalkulasi
          </Button>
        </div>
      </div>
    );
  };
  const PRKKalkulator = () => {
    return (
      <div className="cont-kalkulator">
        <div className="form-kalkulator">
          <Form.Label htmlFor="basic-url">
            Nominal Pinjaman Rekening Koran
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="E.g: Rp 100.000,00"
              type="number"
              onChange={HandleNominal}
              value={nominal}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Suku Bunga Pertahun</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="23.5% / Tahun"
              type="number"
              onChange={(e) => setBungaPRK(e.target.value)}
              value={bungaPRK}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Tenor Pinjaman</Form.Label>
          <Form.Select className="mb-3" onChange={(e) => HandleTenor(e)}>
            <option value="12">12 Bulan</option>
          </Form.Select>
        </div>
        <div className="hasil-kalkulator">
          <Form.Label htmlFor="basic-url">Hasil simulasi kredit</Form.Label>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2}>
                  Tenor kredit {tenor[1]} dengan bunga {bunga}%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pokok Pinjaman</td>
                <td>Rp. {formattedNumber}</td>
              </tr>
              <tr>
                <td>Bunga Harian</td>
                <td>Rp. {hasilPRK[0].toLocaleString()}</td>
              </tr>

              <tr>
                <td>Angsuran Bunga per bulan</td>
                <td>Rp. {hasilPRK[1].toLocaleString()}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="danger" onClick={kalkulasiPRK} className="me-4">
            Kalkulasi
          </Button>
        </div>
      </div>
    );
  };
  const kalkulasi = () => {
    let TotalBunga = +(nominal * bunga) / 100;
    let TotalAngsuran = +nominal + TotalBunga;
    let AngsuranBulanan = +TotalAngsuran / tenor[0];
    setHasil([TotalBunga, TotalAngsuran, AngsuranBulanan]);
    console.log(jenisKredit);
    console.log();
  };
  const kalkulasiPRK = () => {
    let TotalBunga = +(nominal * bungaPRK) / 100;
    let BungaHarian = TotalBunga / 360;
    let BungaBulanan = BungaHarian * 30;
    setHsilPRK([BungaHarian, BungaBulanan]);
  };
  return (
    <div className="main-kalkulator">
      <div className="calkulator-pinjaman-page">
        <h1>Simulasi kredit</h1>
        <p>
          Anda dapat melakukan simulasi kredit dengan mengisi form di bawah ini.
        </p>
        <div className="button-jenis-kredit">
          <button onClick={() => setJenisKeredit(false)}>
            PINJAMAN TETAP ANGSURAN
          </button>
          <button onClick={() => setJenisKeredit(true)}>
            PINJAMAN REKENING KORAN
          </button>
        </div>
      </div>
      {jenisKredit ? PRKKalkulator() : PTAKalkulator()}
      <div className="calkulator-pinjaman-page">
        <p>
          Kalkulator ini dirancang hanya sebagai simulasi kredit belaka. Untuk
          lebih lanjut silahkan hubungi bank pemberi pinjaman.
        </p>
      </div>
    </div>
  );
};

export default KalkulatorKredit;
