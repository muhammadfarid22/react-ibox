import { Card, Container, Navbar, Row } from "react-bootstrap"

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <img className="l" src="https://storage.googleapis.com/eraspacelink/pmp/production/banners/images/1Pd7RvRQe0AysCeQlSs0hKvWfsJMLEvFnZ4LXqOA.jpg" alt="1Pd7RvRQe0AysCeQlSs0hKvWfsJMLEvFnZ4LXqOA.jpg" />
      </header>
      <div className="w-100 min-vh-100">
          <h5 className="border">Menuju Promo 8.8, Ambil Voucher Up To 288k Sekarang <a href="#event&promo"><b text-color="#000">klik disini.</b></a></h5>
          <img class="gambar" src="https://cdn.eraspace.com/pub/media/wysiwyg/banner-juni/Banner-MyEraspace-Desktop.jpg" alt="Banner-MyEraspace-Desktop.jpg" width={"1100px"} />
      </div>

      <div className="w-100">
        <img className="layanan" src="https://cdn.eraspace.com/pub/media/wysiwyg/ibox/Banner_iBox_Tentang_Kami_1396x298px_20_Juli_2020_.jpg" alt="Banner_iBox_Tentang_Kami_1396x298px_20_Juli_2020_.jpg" />
        <div className="card">
        </div>
      </div>

      <div className="sercing">
        <b><p>Mulai berlangganan newsletter dan dapatkan informasi dan promo terbaru</p></b>
          <div className="sercing-box">  
            <input type="text"  placeholder="Masukkan email anda"/>
             <div>
            </div>
          </div>
          </div>
      </div>
  )
}

export default HomePage
