import MenuItem from '../menu-item/MenuItem';
import './menucategory.css';

const MenuCategory = ({ category, items }) => {
    return (
        <div className='menu-category'>
            <h2 className='menu-category-title'>{category}</h2>
            <div className='menu-items-grid'>
                {items.map((item) => (
                    <MenuItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;