import './arrow-buttons.css';

const ArrowLeft = ({ onClick }) => {
    return (
        <button className='arrow-btn arrow-left' onClick={onClick} aria-label='Previous'>
            <img src="/arrow-left.svg" alt="Left arrow" />
        </button>
    );
};

export default ArrowLeft;