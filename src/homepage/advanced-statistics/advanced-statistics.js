import CardsShowcase from "./cards-showcase/cards-showcase";
import './advanced-statistics.css';
function AdvancedStatistics() {
    return (
        <div className='advanced-statistics'>
            <span className="advanced-statistics-title text-very-dark-violet">
                Advanced Statistics
            </span>
            <span className="advanced-statistics-description text-grayish-violet">
                Track how your links are performing across the web with our advanced statistics dashboard.
            </span>
            <CardsShowcase></CardsShowcase>
        </div>
    );
}

export default AdvancedStatistics;
