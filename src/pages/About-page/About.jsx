import './about.css';
import Navbar from '../../components/nav-bar/Navbar';
import Footer from '../../components/footer/Footer';
import Hashtag from '../../components/hashtagStrip/Hashtag';

const About = () => {
    return (
        <>
            <section className='about-section'>
                <Navbar />
                
                <div className='about-hero'>
                    <div className='about-hero-content'>
                        <div className='about-hero-text'>
                            <h1 className='brand-font'>Where Your Joy Begins</h1>
                            <p>Joy Beirut brings together specialty coffee, fresh blooms, and a warm, colorful atmosphere to brighten the everyday. We are here to turn simple moments into small celebrations, whether you are grabbing your morning cup, choosing a bouquet, or enjoying a quiet pause.</p>
                        </div>
                        <img src="/hero-banner,about.png" alt="Joy Beirut Hero" className='about-hero-image' />
                    </div>
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
                    repeat={5}
                />

                <section className='about-banner-two'>
                    <div className='about-banner-two-content'>
                        <img src="/hero-banner,about2.png" alt="What We Offer" className='about-banner-two-image' />
                        <div className='about-banner-two-text'>
                            <h2 className='brand-font'>What We <span>Offer</span></h2>
                            <p>From our "bundle of joy" pairings to our customizable loyalty cards, everything we offer is meant to bring a smile. We care about quality, creativity, and giving our community a comforting spot they can return to again and again.</p>
                        </div>
                    </div>
                </section>

                <div className='flower-divider'>
                    <img src="/flower3.png" alt="Flower tag track" className='flower-tag-track' />
                </div>

                <div className='about-banner-three'>
                    <div className='about-banner-three-content'>
                        <div className='about-banner-three-text'>
                            <h2 className='brand-font'>Our<br /><span>Mission</span></h2>
                            <p>We believe that happiness is found in the small things: the scent of fresh flowers, the first sip of a warm drink, the quiet corners where you can slow down for a moment. Every detail in our space is designed to make your visit feel light, calm, and uplifting.</p>
                        </div>
                        <img src="/hero-banner,about3.png" alt="Our Mission" className='about-banner-three-image' />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;