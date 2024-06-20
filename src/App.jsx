import logo from "./logo.svg";
import "./App.css";

function App() {
  const costumeData = [
    {
      mainImage:
        "https://m.media-amazon.com/images/I/71KM6tuxj7L._AC_UL1500_.jpg",
      profileImage:
        "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8480593/ca33e2bb06574b5ba5ccabe8657b8cab/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/2.jpg?token-time=1718841600&token-hash=Vo-EMGEVav1mQlfYKELtMMBA25ak4p6J65d4Sg_RTFo%3D",
      profileName: "Adrian XD",
      profileUsername: "@ailaa_cosrent",
      itemTitle: "Rental Cosplay Yae Miko",
      itemPrice: "Rp 55.000 / 3 hari",
      itemTag: "Maker Lokal",
      itemTV: "Genshin Impact",
      itemContact: "Adrian",
      itemLocation: "BSD, Tangerang Selatan",
      tagImage: "../../static/css/asset/images/tag.png",
      tvImage: "../../static/css/asset/images/tv.png",
      contactImage: "../../static/css/asset/images/contact.png",
      locationImage: "../../static/css/asset/images/location.png",
      link: "product.html", // Add the link htmlFor each item
    },
    // Add more items as needed
  ];

  const RentalData = [
    {
      mainImage:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/Raiden-Shogun-using-her-Elemental-Burst-in-Genshin-Impact-1536x768.jpg",

      RentalanName: "Adrian Cosplay XD",
      RentalanAt: "@adrian_rachman",
      itemTag: "Maker Lokal",

      LocationInfo: "BSD, Tangerang Selatan",

      tagImage: "../../static/css/asset/images/tag.png",

      locationimg: "../../static/css/asset/images/location.png",
      jumlahkostumimg: "../../static/css/asset/images/pensilkuning.png",
      JumlahKostum: "200 Kostum",
      link: "https://www.youtube.com/watch?v=HWpjpq2ux04", // Add the link htmlFor each item
    },

    // Add more items as needed
  ];

  return (
    <>
      <div>
        <div className="topscreen">
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
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <img
                    style={{ marginLeft: 10, marginTop: "6%" }}
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
          <div className="TitleContainer">
            <div className="titlecolumn1" />
            <div className="titlecolumn2">
              <div style={{ paddingTop: "25%" }} />
              <p
                style={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontWeight: 600,
                  color: "white",
                  fontSize: 31,
                  marginBottom: 0,
                }}
              >
                Dari Bawang Untuk Bawang
              </p>
              <p
                style={{
                  fontFamily: "Segoe UI, sans-serif",
                  color: "white",
                  fontSize: 20,
                  maxWidth: "70%",
                }}
              >
                HaluApp adalah #1 Asian Pop Culture Creator Hub di Asia
                Tenggara!
              </p>
              <div className="button-yellow">
                <button>Masuk</button>
              </div>
              <div style={{ marginBottom: "30%" }} />
            </div>
          </div>
        </div>
        <div
          className="container1"
          style={{
            flexDirection: "column",
            display: "flex",
            alignSelf: "stretch",
            position: "relative",
            marginTop: "0%",
          }}
        >
          {/* <p>------------------</p> */}
        </div>
        <div className="middlescreen">
          <p
            style={{
              fontSize: 31,
              fontWeight: "bold",
              fontFamily: "Segoe UI, sans-serif",
              color: "#252b36",
              marginTop: "4%",
              marginBottom: 0,
            }}
          >
            Platfrorm Sewa Cosplay Indonesia
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: "normal",
              fontFamily: "Segoe UI, sans-serif",
              color: "#ac25eb",
              marginTop: "0%",
              marginBottom: 0,
            }}
          >
            20000+ kostum tersedia untukmu
          </p>
          <div
            className="search-container"
            style={{ marginTop: 30, padding: 0 }}
          >
            <div className="SearchButton">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ba9834d873f505839e8f772bf334e9ad5bf65f78aaa81eedf97a7ddfa72af5c?apiKey=8483ae683318450a8a990dafc43c1ead&"
                alt
                className="search-icon"
                style={{ marginLeft: 25 }}
              />
            </div>
            <input
              type="text"
              className="search-input"
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
            <button type="button" className="search-button" />
          </div>
          {/* start of search */}
          {/* search provinsi */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "60%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: "0%",
                  marginRight: "0%",
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #0000003d",
                  borderRadius: 16,
                  width: "93%",
                }}
              >
                <div
                  style={{
                    marginTop: 0,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    width: "85%",
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "0px solid #ccc",
                  }}
                >
                  <div className="SearchButton" />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Semua Provinsi"
                    style={{
                      fontSize: 19,
                      fontWeight: "normal",
                      fontFamily: "Segoe UI, sans-serif",
                      color: "#252b36",
                      marginTop: "0%",
                      marginBottom: 0,
                      marginLeft: "5%",
                    }}
                  />
                  <button type="button" className="search-button" />
                </div>
              </div>
            </div>
            {/* search kota */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "60%",
                justifyContent: "space-between",
              }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: "0%",
                  marginRight: "0%",
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #0000003d",
                  borderRadius: 16,
                  width: "93%",
                }}
              >
                <div
                  style={{
                    marginTop: 0,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    width: "85%",
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "0px solid #ccc",
                  }}
                >
                  <div className="SearchButton" />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Semua Kota"
                    style={{
                      fontSize: 19,
                      fontWeight: "normal",
                      fontFamily: "Segoe UI, sans-serif",
                      color: "#252b36",
                      marginTop: "0%",
                      marginBottom: 0,
                      marginLeft: "5%",
                    }}
                  />
                  <button type="button" className="search-button" />
                </div>
              </div>
            </div>
            {/* search ukuran */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "60%",
                justifyContent: "space-between",
              }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: "0%",
                  marginRight: "0%",
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #0000003d",
                  borderRadius: 16,
                  width: "93%",
                }}
              >
                <div
                  style={{
                    marginTop: 0,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    width: "85%",
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "0px solid #ccc",
                  }}
                >
                  <div className="SearchButton" />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Semua Ukuran"
                    style={{
                      fontSize: 19,
                      fontWeight: "normal",
                      fontFamily: "Segoe UI, sans-serif",
                      color: "#252b36",
                      marginTop: "0%",
                      marginBottom: 0,
                      marginLeft: "5%",
                    }}
                  />
                  <button type="button" className="search-button" />
                </div>
              </div>
            </div>
            {/* search gender */}
            <div
              id="container"
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "60%",
                justifyContent: "space-between",
              }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: "0%",
                  marginRight: "0%",
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #0000003d",
                  borderRadius: 16,
                  width: "93%",
                }}
              >
                <div
                  style={{
                    marginTop: 0,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    width: "85%",
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "0px solid #ccc",
                  }}
                >
                  <div className="SearchButton" />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Semua Gender"
                    style={{
                      fontSize: 19,
                      fontWeight: "normal",
                      fontFamily: "Segoe UI, sans-serif",
                      color: "#252b36",
                      marginTop: "0%",
                      marginBottom: 0,
                      marginLeft: "5%",
                    }}
                  />
                  <button type="button" className="search-button" />
                </div>
              </div>
            </div>
          </div>
          {/* ini div tutup buat row search */}
          {/* Fresh from oven */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n        .shadow-top {\n          display: flex;\n          margin-top: 10%;\n          min-width: 100%;\n          box-shadow: 0px -50px 60px rgba(0, 0, 0, 0.205);\n        }\n      ",
            }}
          />
          <div
            className="shadow-top"
            style={{
              display: "flex",
              marginTop: "10%",
              flexDirection: "column",
              minWidth: "100%",
              justifyContent: "center",
              marginBottom: 0,
            }}
          >
            <div className="title-and-tombol-selengkapnya">
              <p
                style={{ fontSize: 25, fontWeight: "normal", color: "#3399ff" }}
              >
                Fresh From The Oven
              </p>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n            .button-selengkapnya {\n              margin: 0 10px;\n              padding: 10px 20px;\n              background-color: #44444400;\n              color: #9da5b1;\n\n              border-width: 1px;\n              border-color: #9da5b1;\n              cursor: pointer;\n              border-radius: 6.5px;\n              height: 40px;\n              width: 130px;\n            }\n          ",
                }}
              />
              <button
                className="button-selengkapnya"
                style={{ fontWeight: "normal", fontSize: 17 }}
              >
                Selengkapnya
              </button>
            </div>
            {/* the end of fresh from oven + Button row */}
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
                justifyContent: "center",
                marginTop: 0,
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
          </div>
        </div>
        {/* end of costumes to rent pt 1*/}
        {/* start of row list rentalan and button Selengkapnya */}
        <div className="title-and-tombol-selengkapnya">
          <p style={{ fontSize: 25, fontWeight: "normal", color: "#3399ff" }}>
            List Rentalan
          </p>
          <button
            className="button-selengkapnya"
            style={{ fontWeight: "normal", fontSize: 17 }}
          >
            Selengkapnya
          </button>
        </div>
        {/* end of row list rentalan and button Selengkapnya */}
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            justifyContent: "center",
            marginTop: 0,
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
        {/* end of start of costume for rent row 2 */}
        {/* start of costume for rent row 3 */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            justifyContent: "center",
            marginTop: "2%",
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
        {/* end of costume for rent row 3 */}
        <p style={{ marginTop: "10%" }} />
        {/* start of promosi */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", width: "90%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 300,
                backgroundColor: "#252b3650",
                color: "rgb(0, 0, 0)",
                borderRadius: 10,
                margin: "10px 0px",
              }}
            >
              promosi judi online
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "center",
              gap: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%" /* set the desired width */,
                height: 300 /* set the desired height */,
                backgroundColor: "#252b3650",
                color: "rgb(0, 0, 0)" /* optional: 'Add border radius */,
                margin: "10px",
              }}
            >
              promosi judi online
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%" /* set the desired width */,
                height: 300 /* set the desired height */,
                backgroundColor: "#252b3650",
                color: "rgb(0, 0, 0)" /* optional: 'Add border radius */,
                margin: "10px",
              }}
            >
              promosi judi online
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%" /* set the desired width */,
                height: 300 /* set the desired height */,
                backgroundColor: "#252b3650",
                color: "rgb(0, 0, 0)" /* optional: 'Add border radius */,
                margin: "10px",
              }}
            >
              promosi judi online
            </div>
          </div>
        </div>
        {/* end of promosi */}
        {/* start of kostum bedasarkan series */}
        <div className="title-and-tombol-selengkapnya">
          <p style={{ fontSize: 25, fontWeight: "normal", color: "#3399ff" }}>
            kostum bedasarkan series
          </p>
          <button
            className="button-selengkapnya"
            style={{ fontWeight: "normal", fontSize: 17 }}
          >
            Selengkapnya
          </button>
        </div>
        {/* start of kostum bedasarkan series */}
        {/* start of anime titles */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="row-anime-titles">
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "1%",
            alignItems: "center",
          }}
        >
          <div className="row-anime-titles">
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
            <div className="anime-title-button">
              <button onclick="window.location.href='';">
                Bungou Stray Dogs
              </button>
            </div>
          </div>
        </div>
        {/* end of anime titles */}
        {/* start of anime title (1 anime) */}
        <div className="title-and-tombol-selengkapnya">
          <p style={{ fontSize: 25, fontWeight: "normal", color: "#3399ff" }}>
            Blue Lock
          </p>
          <button
            className="button-selengkapnya"
            style={{ fontWeight: "normal", fontSize: 17 }}
          >
            Selengkapnya
          </button>
        </div>
        {/* end of anime title (1 anime) */}
        {/* start of costume for rent */}
        {/* copy form here */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          <div
            id="template-container4"
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
        {/* end of costume for rent */}
        {/* start of anime title (1 anime) */}
        <div className="title-and-tombol-selengkapnya">
          <p style={{ fontSize: 25, fontWeight: "normal", color: "#3399ff" }}>
            Genshin Impact
          </p>
          <button
            className="button-selengkapnya"
            style={{ fontWeight: "normal", fontSize: 17 }}
          >
            Selengkapnya
          </button>
        </div>
        {/* end of anime title (1 anime) */}
        {/* start of costume for rent */}
        {/* copy form here */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          <div
            id="template-container5"
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
        {/* end of costume for rent */}
        <div style={{ margin: "10%" }} />
        <div className="pepekfooter">Dari Bawang Untuk Bawang</div>
      </div>
    </>
  );
}

export default App;
