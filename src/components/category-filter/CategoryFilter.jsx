import './categoryfilter.css';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
    const handleCategoryClick = (category) => {
        onCategoryChange(category);
        // Scroll to the category section by ID
        const sectionId = `section-${category.toLowerCase().replace(/\s+/g, '-')}`;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className='category-tabs'>
            {categories.map((category) => (
                <button 
                    key={category}
                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;