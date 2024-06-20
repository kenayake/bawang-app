import React from "react";

export default function product() {
  return (
    <>
      <div>
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
          {/* start of main row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "2%",
            }}
          >
            {/* start of left image */}
            {/* main image */}
            <div className="image-container">
              <img
                id="big-image"
                className="big-image"
                src="https://keqingmains.com/wp-content/uploads/2024/03/Yae-Art-F.webp"
                alt="Main Product Image"
              />
              {/* thumbmail image */}
              <div className="thumbnail-container">
                <img
                  className="thumbnail"
                  src="https://keqingmains.com/wp-content/uploads/2024/03/Yae-Art-F.webp"
                  alt="Thumbnail 1"
                  onclick="changeImage(this)"
                />
                <img
                  className="thumbnail"
                  src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/02/Yae-Miko-in-Genshin-Impact.jpg"
                  alt="Thumbnail 2"
                  onclick="changeImage(this)"
                />
                <img
                  className="thumbnail"
                  src="https://preview.redd.it/k6s0utwznz6b1.jpg?auto=webp&s=87b73c52042f34476874f2b2f3e013714970f66d"
                  alt="Thumbnail 3"
                  onclick="changeImage(this)"
                />
                <img
                  className="thumbnail"
                  src="https://m.media-amazon.com/images/I/71Y--kBdDkL._AC_UF894,1000_QL80_.jpg"
                  alt="Thumbnail 4"
                  onclick="changeImage(this)"
                />
                <img
                  className="thumbnail"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e2e99f6-4591-4d84-9b16-ca5304808938/dfw8w20-4b1d331b-9db1-4a84-85ee-809dac3ac1ee.png/v1/fill/w_1280,h_1793,q_80,strp/_fanart_genshin_impact_yae_miko_by_kittywai_dfw8w20-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5MyIsInBhdGgiOiJcL2ZcLzFlMmU5OWY2LTQ1OTEtNGQ4NC05YjE2LWNhNTMwNDgwODkzOFwvZGZ3OHcyMC00YjFkMzMxYi05ZGIxLTRhODQtODVlZS04MDlkYWMzYWMxZWUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dGZZuUgegxcsfYxFVsSsIDxnF5iqtqmyy2T8hUOPAWs"
                  alt="Thumbnail 5"
                  onclick="changeImage(this)"
                />
                <img
                  className="thumbnail"
                  src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/02/genshin-impact-25-release-time-yae-miko-banner-1.jpg"
                  alt="Thumbnail 6"
                  onclick="changeImage(this)"
                />
                <img
                  className="thumbnail"
                  src="https://staticg.sportskeeda.com/editor/2022/11/3924e-16684282358212-1920.jpg?w=640"
                  alt="Thumbnail 7"
                  onclick="changeImage(this)"
                />
              </div>
            </div>
            {/* end of left image */}
            {/* start of column  */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "100%",
                alignItems: "start",
              }}
            >
              {/* start of search */}
              <div
                className="search-container"
                style={{ marginTop: "px", padding: 0 }}
              >
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
              {/* start of inner row */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "95%",
                  marginLeft: "5%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "80%",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "60.23140496%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "3%",
                        }}
                      >
                        <p className="item-title1">Rental Cosplay Yae Miko</p>
                        <p className="item-price1">Rp 200.000</p>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "3%",
                          }}
                        >
                          <img
                            className="location-image1"
                            style={{ height: 20, width: 20 }}
                            src="../../static/css/asset/images/location.png"
                            alt="location"
                          />
                          <p className="item-location1">Tangerang, BSD</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 0,
                            marginTop: "3%",
                          }}
                        >
                          <img
                            style={{ height: 20, width: 20 }}
                            className="tag-image1"
                            src="../../static/css/asset/images/tag.png"
                            alt="tag"
                          />
                          <p className="item-tag1">Game</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 0,
                            marginTop: "3%",
                          }}
                        >
                          <img
                            style={{ height: 20, width: 20 }}
                            className="tv-image1"
                            src="../../static/css/asset/images/tv.png"
                            alt="tv"
                          />
                          <p className="item-tv1">Genshin Impact</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 0,
                            marginTop: "3%",
                          }}
                        >
                          <img
                            style={{ height: 20, width: 20 }}
                            className="contact-image1"
                            src="../../static/css/asset/images/contact.png"
                            alt="contact"
                          />
                          <p className="item-contact1">Adrian Rachman</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 0,
                            marginTop: "5%",
                          }}
                        >
                          <div
                            style={{
                              border: "1px solid #252b36",
                              borderRadius: 5,
                            }}
                          >
                            <p className="item-size1">Size</p>
                          </div>
                          <div
                            style={{
                              border: "1px solid #252b36",
                              borderRadius: 5,
                              marginLeft: 10,
                            }}
                          >
                            <p className="item-gender1">Gender</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="Detailtitle1">Detail</p>
                  <div id="description-box" className="description-box" />
                  {/* instagram button */}
                  <a
                    href="https://www.instagram.com/iamdorasnow/"
                    className="instagram-button"
                    target="_blank"
                  >
                    Lihat di Instagram
                  </a>
                  {/* end of instagram button  */}
                  <p className="Detailtitle1">Aturan Sewa</p>
                  <div id="description-box2" className="description-box" />
                  <p className="Detailtitle1">Disclaimer</p>
                  <div id="Disclaimer-box" className="description-box" />
                </div>
                <div className="box-yang-di-kanan">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <img
                        className="profile-image"
                        loading="lazy"
                        src="https://dotesports.com/wp-content/uploads/2022/11/21122158/Character-Demo-Yae-Miko-Anecdote-of-a-Divine-Kitsune-Guuji-Genshin-Impact_-Character-Demo-Yae-Miko-Anecdote-of-a-Divine-Kitsune-Guuji-Genshin-Impact-2022-11-18-102128.979-1080p-streamshot.png"
                      />
                      <div
                        className="profile-details"
                        style={{
                          fontFamily: "Segoe UI, sans-serif",
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "4%",
                          maxWidth: "100%",
                        }}
                      >
                        <p className="profile-name">Adrian</p>
                        <p className="profile-username">@adrian_racman</p>
                        <div id="Box-Kanan" className="description-box" />
                      </div>
                    </div>
                    <div className="top-border1">
                      <a
                        href="https://www.instagram.com/reel/C8T-mRdSOl9/?utm_source=ig_web_copy_link"
                        target="_blank"
                        className="button-yellow"
                      >
                        <button>DM Instagram</button>
                      </a>
                    </div>
                    {/* diluar inner column */}
                  </div>
                </div>
              </div>
              {/* end of box yg di kanan itu */}
            </div>
            {/* end of inner row */}
          </div>
          {/* end of column */}
          {/* end of main row */}
          {/*  */}
          {/*  */}
          {/* start of row list rentalan and button Selengkapnya */}
          <div className="title-and-tombol-selengkapnya">
            <p style={{ fontSize: 25, fontWeight: "normal", color: "#3399ff" }}>
              Kostum Lainnya
            </p>
            <button
              className="button-selengkapnya"
              style={{ fontWeight: "normal", fontSize: 17 }}
            >
              Selengkapnya
            </button>
          </div>
          {/* end of row list rentalan and button Selengkapnya */}
          {/*  */}
          {/*  */}
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
          {/* end of costumes to rent pt 1*/}
        </div>
        <div style={{ height: 20 }} />
      </div>
    </>
  );
}
