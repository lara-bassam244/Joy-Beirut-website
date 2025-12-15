import './arrow-buttons.css';

const ArrowRight = ({ onClick }) => {
    return (
        <button className='arrow-btn arrow-right' onClick={onClick} aria-label='Next'>
            <img src="/arrow-right.svg" alt="Right arrow" />
        </button>
    );
};

export default ArrowRight;