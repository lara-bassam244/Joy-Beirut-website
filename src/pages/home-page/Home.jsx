import { Instagram, Phone  } from 'lucide-react';
import './home.css';
import Navbar from '../../components/nav-bar/Navbar';
import Hashtag from '../../components/hashtagStrip/Hashtag'
import Button from '../../components/cta-btn/Button'
import Card from '../../components/cards/Card';
import ReviewCard from '../../components/review-card/ReviewCard';
import Footer from '../../components/footer/Footer';
const Home = () => {

const items = [
  {
    id: 1,
    title: "Bundle Of Joy",
    price: 8,
    image: "/bundle.png",
  },
  {
    id: 2,
    title: "Iced Sunshine Latte",
    price: 6,
    image: "/drinks.png",
  },
  {
    id: 3,
    title: "Club Sandwich",
    price: 6.5,
    image: "/sandwich.png",
  },
];

const reviews = [
  {
    id: 1,
    name: "Maya",
    text: "Joy Beirut has become my go-to coffee shop. Their lattes are addictive and the staff are always friendly.",
  },
  {
    id: 2,
    name: "Karim",
    text: "The atmosphere, the colors, the flowers, everything makes you want to slow down and enjoy the moment. Their Bundle of Joy box is the cutest thing ever!",
  },
  {
    id: 3,
    name: "Lea",
    text: "Every visit feels like a little celebration. You can tell everything is made with love,",
  },
];



    return (
        <>
        <section className='hero-section'>

        <Navbar/>
        <div className='hero-content'>
            <div className='hero-left-side'>
                <div className='socials'>
                <a href="#"><Instagram size={18} /></a>
                <a href="#">< Phone  size={18} /></a>
                <p className="hero-side-text">Drink it. Feel it. Gift it. Your joy starts here.</p>
            </div>
                <div className='hero-title'>
            <h1 className='brand-font'>More Than a Café, <br /><span>A Bundle of Joy</span></h1>
            <p>Enjoy handcrafted coffee, fresh flowers, and festive balloons all under one roof. At Joy Beirut, every visit is designed to brighten your day and celebrate life’s little moments.</p>
            <Button to="/Menu">Order Now</Button>
            </div>
            </div>
            <img src="/hero-section.png" alt="hero section" />
        </div>
        <Hashtag
        tags={[
          "#JoyInACup",
          "#BrewedWithLove",
          "#SipTheJoy",
          "#SliceOfHappiness",
          "#JoyfulMoments",
          "#SpreadJoy",
        ]}
        duration={25}
        repeat={5}/>
        </section>
        

        <section className='about-us'>
              <img  className="left-flower" src="/flower2.png" alt="" />
            <div className='about-us-title'>
            <h3 className='brand-font'>About Us</h3>
            <p>Joy Beirut brings together specialty coffee, fresh blooms, and a warm, colorful atmosphere to brighten the everyday. We are here to turn simple moments into small celebrations, whether you are grabbing your morning cup, choosing a bouquet, or enjoying a quiet pause. Our space is crafted for connection, comfort, and a touch of effortless joy in every visit.</p>
           <Button to="/About">Explore More</Button>
            </div>
            <img className='right-flower' src="/flower1.png" alt="" />
        </section>

        <div className='divider'>
            <hr />
            <img src="flower3.png" alt="" />
            <hr />
        </div>

        <section className='best-sellers'>
            <h3 className='brand-font'>Bestsellers</h3>
            <div className="menu-grid">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            onAdd={() => console.log("Added", item.title)}
          />
        ))}
      </div>
        <Button to="/Menu">View Our Menu</Button>
        </section>

        <Hashtag 
        tags={[
          'Get Your First Bundle of Joy For 30% Off',
        ]}
        duration={30}
        repeat={20}/>

        <section className='loyalty-card'>
          <div className='loyalty-card-title'>
           <h3 className='brand-font'>Customize Your <br /><span>Loyalty Card</span></h3>
           <p>Our loyalty cards are customizable so you can make them your own. Each visit earns a little reward and brings you closer to the treats we love sharing at Joy Beirut.</p>
           <Button to='/card'>Create Your Own</Button>
           </div>
        </section>

        <section className='customization-box'>
          <div className='customization-container'>

          <div className='image-container'>
          <img src="custom-box.png" alt="customization box" />
          </div>

          <div className='customization-title'>
          <h3 className='brand-font'>The Joy Surpise Box</h3>
          <p>Whether for a loved one, a partner, a friend, or a coworker, the Surprise Box is the perfect way to show your affection. Filled with handcrafted treats, fresh flowers, and festive touches.</p>
          <Button to='/Bundles'>Customize Your Box</Button>
          </div>
          </div>
        </section>

        <section className='reviews'>
          <h3 className='brand-font'>From Our Visitors</h3>
          <div className='review-row'>
            {reviews.map((review, index) =>(
            <ReviewCard
            key={review.id}
            name={review.name}
            text={review.text}
            variant={index === 1 ? "featured" : "normal"}
          />
          ))}
          </div>
        </section>
        <Footer/>
        </>
    )
}

export default Home