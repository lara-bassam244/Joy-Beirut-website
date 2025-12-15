import "./community.css";
import Navbar from "../../components/nav-bar/Navbar";
import Card from "../../components/cards/Card";
import Button from "../../components/cta-btn/Button";
import Footer from "../../components/footer/Footer";

const rooms = [
  { title: "CreativeNass Workshops", image: "/community1.jpg" },
  { title: "Spreading Holiday Cheer", image: "/community2.jpg" },
  { title: "Through Your Lens", image: "/community3.jpg" },
];

const Community = () => {
  return (
    <>
      <Navbar />
      <div className="community-page">
        <section className="community-title-container">
          <div className="community-title">
            <h3 className="title-page">Our Community</h3>
            <p>
              Joy Beirut grows because of the people who step into our world. We cherish
              the conversations, the celebrations, and the tiny shared moments that make
              us feel connected. You’re always welcome here, and we’re happy to be part of your day.
            </p>
          </div>
        </section>

        <div className="divider">
          <hr />
          <img src="flower3.png" alt="" />
          <hr />
        </div>

        <section className="community-cards">
          {rooms.map((r) => (
            <Card
              key={r.title}
              title={r.title}
              image={r.image}
              showHeart={false}
              showPrice={false}
              buttonText="Join Room"
              buttonTextActive="Joined"
              variant="community"
              onButtonClick={() => console.log("Join room:", r.title)}
            />
          ))}
        </section>
        <section className="community-cta">
        <Button>
            Create Your Room
            </Button>
        </section>

      </div>
      <Footer/>
    </>
  );
};

export default Community;
