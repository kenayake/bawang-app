import React from "react";

export default function cari_costum() {
  return (
    <>
      <div>
        {/* start of header */}
        <header>
          <div className="header-container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxHeight: "100%",
              }}
            >
              {/* start of logo */}
              <a
                href="index.html"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                }}
              >
                <img
                  style={{ marginLeft: 10, marginTop: "6%", marginBottom: 0 }}
                  loading="lazy"
                  src="../static/css/asset/images/Logo-bawang.png"
                  alt="pepek"
                  width={43}
                  height={44}
                />
                <p
                  style={{
                    fontFamily: '"Segoe UI", sans-serif',
                    fontWeight: "bold",
                    color: "#ac25eb",
                    fontSize: 20,
                  }}
                >
                  Bawang
                </p>
              </a>
              {/* end of logo */}
            </div>
            <div className="center-buttons">
              <a href="index.html">
                <button>Home</button>
              </a>
              <a href="cari_costum.html">
                <button>Cari kostum</button>
              </a>
              <a href="rentalowner.html">
                <button>List Rental</button>
              </a>
              <button>Jadwal Event</button>
            </div>
            <div className="right-button">
              <button style={{ fontWeight: "bold" }}>Gabung Jadi Wibu</button>
            </div>
          </div>
        </header>
        {/* end of header */}
        {/* start of the whole row*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "5%",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          {/* start of the column on the left (sampe bawah) */}
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <p
              style={{
                fontFamily: "Segoe UI, sans-serif",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 32,
                color: "#252b36",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              Cari Kostum
            </p>
            <p
              style={{
                fontFamily: "Segoe UI, sans-serif",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 16,
                color: "#252b36c0",
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              di Bawang
            </p>
            <p className="text-biru-yg-di-kiri">Series</p>
            <div className="list-container">
              <a href="#" className="list-item">
                Genshin Impact
              </a>
              <a href="#" className="list-item">
                Honkai: Star Rail
              </a>
              <a href="#" className="list-item">
                Blue Lock
              </a>
              <a href="#" className="list-item">
                Jujutsu Kaisen
              </a>
              <a href="#" className="list-item">
                Chainsaw Man
              </a>
              <a href="#" className="list-item">
                Hololive
              </a>
              <a href="#" className="list-item">
                Spy x Family
              </a>
              <a href="#" className="list-item">
                Frieren Beyond Journey's End
              </a>
              <a href="#" className="list-item">
                Mobile Legends: Bang Bang
              </a>
            </div>
            <p className="text-biru-yg-di-kiri">Karakter</p>
            <div className="list-container">
              <a href="#" className="list-item">
                Yae Miko
              </a>
              <a href="#" className="list-item">
                Kafka
              </a>
              <a href="#" className="list-item">
                Ganyu
              </a>
              <a href="#" className="list-item">
                Silver Wolf
              </a>
              <a href="#" className="list-item">
                Fubuki
              </a>
              <a href="#" className="list-item">
                Suisei
              </a>
              <a href="#" className="list-item">
                Lor Forger
              </a>
              <a href="#" className="list-item">
                Frieren
              </a>
              <a href="#" className="list-item">
                Übel
              </a>
            </div>
            <p className="text-biru-yg-di-kiri">Brand</p>
            <div className="list-container">
              <a href="#" className="list-item">
                Maker Lokal
              </a>
              <a href="#" className="list-item">
                No brand (Taobao)
              </a>
              <a href="#" className="list-item">
                Wudu
              </a>
              <a href="#" className="list-item">
                UwU
              </a>
              <a href="#" className="list-item">
                Adrian Brand
              </a>
              <a href="#" className="list-item">
                Pepek Brand
              </a>
              <a href="#" className="list-item">
                ketiak
              </a>
              <a href="#" className="list-item">
                Serval Brand
              </a>
              <a href="#" className="list-item">
                Polytron
              </a>
            </div>
          </div>
          {/* end of the column on the left (sampe bawah) */}
          {/* start of the column on the right (sampe bawah, yg ada search bar etc.) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "5%",
              width: "80%",
            }}
          >
            {/* start ofinner row (buat searchbar, dropdown search (dikiri) and toggles (yg di kanan)) */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* start of inner left column (buat searh and dropdown search) */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* start of search */}
                <div
                  className="search-container"
                  style={{ marginTop: "px", padding: 0 }}
                >
                  <input
                    type="text"
                    className="search-input1"
                    placeholder="Cari kreator atau produk"
                    style={{
                      fontSize: 19,
                      fontWeight: "normal",
                      fontFamily: "Segoe UI, sans-serif",
                      color: "#252b36",
                      marginTop: "0%",
                      marginBottom: 0,
                    }}
                  />
                  <div className="SearchButton">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ba9834d873f505839e8f772bf334e9ad5bf65f78aaa81eedf97a7ddfa72af5c?apiKey=8483ae683318450a8a990dafc43c1ead&"
                      alt
                      className="search-icon"
                      style={{ marginRight: 20 }}
                    />
                  </div>
                </div>
                {/* end of search */}
                {/* start of search dropdown */}
                <div className="search-dropdown-container">
                  <div className="search-dropdown">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Semua Provinsi"
                    />
                    <span className="dropdown-arrow">▾</span>
                    <div className="dropdown-content">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                  <div className="search-dropdown">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Semua Kota"
                    />
                    <span className="dropdown-arrow">▾</span>
                    <div className="dropdown-content">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                  <div className="search-dropdown">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Semua Ukuran"
                    />
                    <span className="dropdown-arrow">▾</span>
                    <div className="dropdown-content">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                  <div className="search-dropdown">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Semua Gender"
                    />
                    <span className="dropdown-arrow">▾</span>
                    <div className="dropdown-content">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                </div>
                {/* end of searchdropdown */}
              </div>
              {/* end of inner left column (buat searh and dropdown search) */}
              {/* start of toggles */}
              <div className="toggle-container">
                <div className="toggle-wrapper">
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider" />
                  </label>
                  <span className="toggle-label">Sewa weekday</span>
                </div>
                <div className="toggle-wrapper">
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider" />
                  </label>
                  <span className="toggle-label">Kirim luar pulau</span>
                </div>
              </div>
              {/* end of toggles */}
            </div>
            {/* end of inner row (buat searchbar, dropdown search (dikiri) and toggles (yg di kanan)) */}
            <p
              style={{
                fontFamily: "Segoe UI, sans-serif",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 15,
                color: "#ac25eb",
                marginTop: 15,
                marginBottom: 5,
              }}
            >
              4000 Kostum ditemukan
            </p>
            {/* start of costume for rent */}
            <div id="costumesforrent">
              <a
                className="item-link"
                href="product.html"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      border: "1px solid #0000003d",
                      borderRadius: 10,
                      height: 500,
                      width: 200,
                    }}
                  >
                    <img className="main-image" loading="lazy" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "60.23140496%",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <img className="profile-image" loading="lazy" />
                        <div
                          className="profile-details"
                          style={{
                            fontFamily: "Segoe UI, sans-serif",
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "4%",
                          }}
                        >
                          <p className="profile-name" />
                          <p className="profile-username" />
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <p className="item-title" />
                        <p className="item-price" />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 10,
                            marginTop: 5,
                          }}
                        >
                          <img className="tag-image" alt="tag" />
                          <p className="item-tag" />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 10,
                            marginTop: 5,
                          }}
                        >
                          <img className="tv-image" alt="tv" />
                          <p className="item-tv" />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 10,
                            marginTop: 5,
                          }}
                        >
                          <img className="contact-image" alt="contact" />
                          <p className="item-contact" />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 10,
                            marginTop: 5,
                          }}
                        >
                          <div
                            style={{
                              border: "1px solid #252b36",
                              borderRadius: 5,
                            }}
                          >
                            <p className="item-size">Size</p>
                          </div>
                          <div
                            style={{
                              border: "1px solid #252b36",
                              borderRadius: 5,
                              marginLeft: 10,
                            }}
                          >
                            <p className="item-gender">Gender</p>
                          </div>
                        </div>
                        <div className="top-border">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginLeft: 10,
                              marginTop: "5%",
                              marginBottom: "5%",
                              overflow: "hidden",
                            }}
                          >
                            <img className="location-image" alt="location" />
                            <p className="item-location" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* copy form here */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "start",
                marginTop: 5,
                marginLeft: 20,
              }}
            >
              <div
                id="template-container"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  maxWidth: "100%",
                  justifyContent:
                    "center" /* marginLeft: '10%', marginRight: '10%', */,
                  gap: "1%",
                }}
              />
            </div>
            {/* to here */}
            {/* copy form here */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "start",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              <div
                id="template-container2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  maxWidth: "100%",
                  justifyContent:
                    "center" /* marginLeft: '10%', marginRight: '10%', */,
                  gap: "1%",
                }}
              />
            </div>
            {/* to here */}
            {/* copy form here */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                justifyContent: "start",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              <div
                id="template-container3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  maxWidth: "100%",
                  justifyContent:
                    "center" /* marginLeft: '10%', marginRight: '10%', */,
                  gap: "1%",
                }}
              />
            </div>
            {/* to here */}
            {/* end of costumes to rent pt 1*/}
          </div>
          {/* end of the column on the right (sampe bawah, yg ada search bar etc.) */}
        </div>
        {/* start of the whole row*/}
        <div style={{ height: 20 }} />
      </div>
    </>
  );
}
