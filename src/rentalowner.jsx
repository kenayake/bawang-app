import React from "react";

export default function rentalowner() {
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
        {/* row buat tulisan list rental owner and search bar + toggles */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "7%",
            marginLeft: "7%",
            marginTop: "2%",
          }}
        >
          {/* column buat tulisan list rental owner di bawang */}
          <div style={{ display: "flex", flexDirection: "column" }}>
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
              List Rental Owner di Bawang
            </p>
            <p
              style={{
                fontFamily: "Segoe UI, sans-serif",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 15,
                color: "#ac25eb",
                marginTop: 10,
                marginBottom: 5,
              }}
            >
              1203 Rental Owner ditemukan
            </p>
          </div>
          {/* end of column buat tulisan list rental owner di bawang */}
          {/* column buat search bar and toggles */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20%",
              marginRight: 0,
              width: "45%",
            }}
          >
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
          {/* end of column buat search bar and toggles */}
        </div>
        {/*  end of row buat tulisan list rental owner and search bar + toggles */}
        <p
          style={{
            fontFamily: "Segoe UI, sans-serif",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: 24,
            color: "#252b36",
            marginTop: 25,
            marginBottom: 0,
            marginLeft: "7%",
          }}
        >
          Jawa Tengah
        </p>
        {/* start of costume for rent row 2 */}
        <div id="costumesforrent2">
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
                  height: 300,
                  width: 200,
                }}
              >
                {/* main image */}
                <img className="main-image" loading="lazy" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "60.23140496%",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className="Rentalan-Name" />
                    <p className="Rentalan-At" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 8,
                        marginTop: 10,
                      }}
                    >
                      <img className="location-img" alt="location icon" />
                      <p className="location-info" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 8,
                        marginTop: 5,
                      }}
                    >
                      <img className="jumlah-kostum-img" alt="penis" />
                      <p className="jumlah-kostum" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* copy from here  */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "90%",
            justifyContent: "start",
            marginTop: 15,
            marginLeft: "7%",
            marginRight: "7%",
          }}
        >
          <div
            id="template-container1"
            style={{
              display: "flex",
              flexDirection: "row" /* maxWidth: '100%', */,

              /* marginLeft: '5%', marginRight: '5%', */
              gap: "1%",
            }}
          />
        </div>
        {/* first row */}
        {/* copy to here  */}
        {/* second row */}
        {/* copy from here  */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "90%",
            justifyContent: "start",
            marginTop: 15,
            marginLeft: "7%",
            marginRight: "7%",
          }}
        >
          <div
            id="template-container2"
            style={{
              display: "flex",
              flexDirection: "row" /* maxWidth: '100%', */,

              /* marginLeft: '5%', marginRight: '5%', */
              gap: "1%",
            }}
          />
        </div>
        {/* first row */}
        {/* copy to here  */}
        {/* third row  */}
        {/* copy from here  */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "90%",
            justifyContent: "start",
            marginTop: 15,
            marginLeft: "7%",
            marginRight: "7%",
          }}
        >
          <div
            id="template-container3"
            style={{
              display: "flex",
              flexDirection: "row" /* maxWidth: '100%', */,

              /* marginLeft: '5%', marginRight: '5%', */
              gap: "1%",
            }}
          />
        </div>
        {/* copy to here  */}
        {/* fourth row  */}
        {/* copy from here  */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "90%",
            justifyContent: "start",
            marginTop: 15,
            marginLeft: "7%",
            marginRight: "7%",
          }}
        >
          <div
            id="template-container4"
            style={{
              display: "flex",
              flexDirection: "row" /* maxWidth: '100%', */,

              /* marginLeft: '5%', marginRight: '5%', */
              gap: "1%",
            }}
          />
        </div>
        {/* copy to here  */}
        {/* end of start of costume for rent row 2 */}
        <div style={{ height: 20 }} />
      </div>
    </>
  );
}
