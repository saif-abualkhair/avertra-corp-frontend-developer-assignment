import AdvancedStatistics from './advanced-statistics/advanced-statistics';
import './homepage.css';
import Shorten from './shorten/shorten';
import BoostYourLinksBanner from './boost-your-links-banner/boost-your-links-banner';

function HomePage() {
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='upper'>
                    More than just shorter links
                    build your brand's recognition and get detailed insights on how your links are performing.
                    <button className='btn btn-cyan rounded'>Get Started</button>
                </div>
            </div>

            <div className='bottom'>
                <div className='container'>
                <Shorten></Shorten>
                </div>
            </div>
            {/* <AdvancedStatistics></AdvancedStatistics>
            <BoostYourLinksBanner></BoostYourLinksBanner> */}
        </div>
    );
}

export default HomePage;