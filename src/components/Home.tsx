import "./Home.css"; // Import your Home component's CSS here
// import ThreeDImage from "./IndianMap";
import Square from "./Sqaure";
import Footer from "./Footer";
import ImageGallery from "./ImageGallery";
import Box from "./Box";
import Header from "./Header";
import JoinUs from "./JoinUs";

// import ImageDisplay from "./ImageDisplay";
import NavBar from "./NavBar";
import IndiaMap from "./ThreeIndiaMap";


const Home = () => {
  return (
    <div className="home">
      <NavBar></NavBar>

      <br />
      <Header></Header>

      <div
        className="container mt-5"
        style={{
          display: "flex",
          alignItems: "flex-start",
          backgroundImage: 'url("/.jpg")', // Replace "your-image.jpg" with the actual image file name
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "2000px", // You can adjust this property based on your preference
        }}
      >
        <div
          className="container mt-5"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          {/* First section of squares (before image) */}
          <div className="mr-3">
            <section className="container">
              <div className="row">
                {/* First square */}
                <div className="col">
                  <Square
                    color="#4ef28f"
                    border="2px solid #4ef28f"
                    text="62.5M Indians consume Alcohol."
                    top="-100px"
                    left="100px"
                    width="200px"
                    height="200px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Second square */}
                <div className="col">
                  <Square
                    color="#4ef28f"
                    border="3px solid #4ef28f"
                    text="8.75 millions Indian use Cannabis."
                    width="200px"
                    height="200px"
                    top="-250px"
                    left="400px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Third square */}
                <div className="col">
                  <Square
                    color="#CCDEDC"
                    border="4px solid #CCDEDC"
                    text="
                    267M Indian adults (29%) use tobacco - GATS 2016-17."
                    width="210px"
                    height="210px"
                    top="-107px"
                    left="200px"
                    textColor="black"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                {/* fourth */}
                <div className="col">
                  <Square
                    color="#CCDEDC"
                    border="4px solid #CCDEDC"
                    text="
                    Men: 27.3% alcohol use."
                    width="170px"
                    height="170px"
                    top="-400px"
                    left="200px"
                    textColor="black"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                {/* fifth */}
                <div className="col">
                  <Square
                    color="#8CC8D2"
                    border="4px solid #8CCD2"
                    text="
                    Women: 1.6% alcohol use."
                    width="170px"
                    height="170px"
                    top="-130px"
                    left="330px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                {/* fifth */}
                <div className="col">
                  <Square
                    color="#8CC8D2"
                    border="4px solid #8CCD2"
                    text="2 millions Indians use Opiates asfsd."
                    width="130px"
                    height="130px"
                    top="-100px"
                    left="400px"
                    textColor="white"
                    fontSize="22px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Second section with ThreeDImage component */}
          {/* <div className="mr-3">
          <section className="image-section">
            <div className="image-container">
              <ThreeDImage />
            </div>
          </section>
        </div> */}

          {/* <ImageDisplay
            src={"map.png"}
            alt={"map"}
            width="600px"
            height="600px"
            top="150px"
            left="0"
          ></ImageDisplay> */}

          {/* Third section of squares (after image) */}
          <div>
            <section className="container">
              <div className="row">
                {/* Fourth square */}
                <div className="col">
                  <Square
                    color="#048785"
                    border="2px solid #048785"
                    text="
                    Alcohol: 1.4 lakh cirrhosis deaths/year."
                    top="-20px"
                    left="-210px"
                    width="200px"
                    height="200px"
                    opacity={0.8}
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Fifth square */}
                <div className="col">
                  <Square
                    color="#048785"
                    border="3px solid #048785"
                    text="Arunachal Pradesh: High alcohol consumption"
                    height="200px"
                    width="200px"
                    top="-70px"
                    left="80px"
                    opacity={0.8}
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Sixth square */}
                <div className="col">
                  <Square
                    color="#005271"
                    border="4px solid #005271"
                    text="India (29% of all adults) are users of tobacco,"
                    height="210px"
                    width="210px"
                    left="20px"
                    top="-100px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                <div className="col">
                  <Square
                    color="#005271"
                    border="4px solid #005271"
                    text="
                    Odisha, Jammu & Kashmir: >40% tobacco use."
                    height="200px"
                    width="200px"
                    top="-10px"
                    left="-20px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Rest of your code */}
      </div>

      {/* <ImageDisplay
        src={"addict1.png"}
        alt={"addict2"}
        width="600px"
        height="250px"
        top="-380px"
        left="-250px"
      ></ImageDisplay> */}

      <IndiaMap>
      </IndiaMap>

      <div className="box-container">
        <Box
          image="drug.jpg"
          text="Are you a concerned family member/Friend? Find treatment and facilities here."
          link={undefined}
          style={{justify:"center", }}
        />
        <Box
          image="disc.jpg"
          text="Are you a De-Addiction Facility/Nasha Mukti Kendra? Join us in our mission to make India Drug Free"
          link={undefined}
          style={{justify:"center"}}
        />
        <Box
          image="MoSJE.png"
          text="Leverage our Huge Dataset to analyzie the nasha mukti progess nation wide."
          link={"/Ministry"}
          style={{justify:"center"}}
        />
      </div>

      <br />

      <br />
      {/* <ShowFacilities></ShowFacilities> */}

      <br />

      <JoinUs></JoinUs>
      <br />
      <br />
      <ImageGallery></ImageGallery>

      <br />
      <Footer></Footer>
    </div>
  );
};

export default Home;
