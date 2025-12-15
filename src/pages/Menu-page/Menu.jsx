import { useState } from 'react';
import './menu.css';
import Navbar from '../../components/nav-bar/Navbar';
import Footer from '../../components/footer/Footer';
import MenuItem from '../../components/menu-item/MenuItem';
import CategoryFilter from '../../components/category-filter/CategoryFilter';
import Hashtag from '../../components/hashtagStrip/Hashtag';
import ArrowLeft from '../../components/arrow-buttons/ArrowLeft';
import ArrowRight from '../../components/arrow-buttons/ArrowRight';

const Menu = () => {
    const menuData = [
        {
            category: 'Iced Coffee',
            items: [
                { id: 1, name: 'Spanish Latte', price: '$8', image: '/iced-coffee-1.png' },
                { id: 2, name: 'Golden Glow Caramel', price: '$8', image: '/iced-coffee-2.png' },
                { id: 3, name: 'Mocha Bliss', price: '$8', image: '/iced-coffee-3.png' },
                { id: 4, name: 'Chill Americano', price: '$8', image: '/iced-coffee-4.png' },
            ]
        },
        {
            category: 'Hot Beverages',
            items: [
                { id: 5, name: 'Sunshine Shot', price: '$8', image: '/hot-beverages-1.png' },
                { id: 6, name: 'Double Joy', price: '$8', image: '/hot-beverages-2.png' },
                { id: 7, name: 'Hot Cortado', price: '$8', image: '/hot-beverages-3.png' },
                { id: 8, name: 'Flat White', price: '$8', image: '/hot-beverages-4.png' },
            ]
        },
        {
            category: 'Frappes & Milkshakes',
            items: [
                { id: 9, name: 'Sunshine Shot', price: '$8', image: '/frappes-1.png' },
                { id: 10, name: 'Double Joy', price: '$8', image: '/frappes-2.png' },
                { id: 11, name: 'Hot Cortado', price: '$8', image: '/frappes-3.png' },
                { id: 12, name: 'Flat White', price: '$8', image: '/frappes-4.png' },
            ]
        },
        {
            category: 'Desserts',
            items: [
                { id: 13, name: 'Sunshine Shot', price: '$8', image: '/desserts-1.png' },
                { id: 14, name: 'Double Joy', price: '$8', image: '/desserts-2.png' },
                { id: 15, name: 'Hot Cortado', price: '$8', image: '/desserts-3.png' },
                { id: 16, name: 'Flat White', price: '$8', image: '/desserts-4.png' },
            ]
        },
    ];

    const categories = menuData.map(cat => cat.category);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleCategoryChange = (category) => {
        console.log(`Switched to category: ${category}`);
        setActiveCategory(category);
    };

    const handleArrowClick = (direction, categoryId) => {
        const gridEl = document.getElementById(`grid-${categoryId}`);
        if (gridEl) {
            const scrollAmount = 300;
            gridEl.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className='menu-section'>
                <Navbar />
                
                {/* Hero Banner */}
                <div className='hero-banner'>
                    <h1 className='brand-font'><span>Our</span> <span>Menu</span></h1>
                    <p>From handcrafted coffees to refreshing drinks and signature desserts explore our full menu made to delight every taste.</p>
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

                <div className='menu-background'>
                    <div className='menu-container'>
                        {/* Category Filter Tabs */}
                        <CategoryFilter 
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={handleCategoryChange}
                        />

                        {/* All Categories Display */}
                        <div className='menu-content'>
                            {menuData.map((categoryData) => (
                                <div key={categoryData.category} className='category-section'>
                                    <h2 
                                        id={`section-${categoryData.category.toLowerCase().replace(/\s+/g, '-')}`}
                                        className='category-title'
                                    >
                                        {categoryData.category.toUpperCase()}
                                    </h2>
                                    <div className='arrows-container'>
                                        <ArrowLeft onClick={() => handleArrowClick('left', categoryData.category.toLowerCase().replace(/\s+/g, '-'))} />
                                        <div className='category-grid-wrapper'>
                                            <div className='category-grid' id={`grid-${categoryData.category.toLowerCase().replace(/\s+/g, '-')}`}>
                                                {categoryData.items.map((item) => (
                                                    <MenuItem 
                                                        key={item.id}
                                                        item={item}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <ArrowRight onClick={() => handleArrowClick('right', categoryData.category.toLowerCase().replace(/\s+/g, '-'))} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Menu;