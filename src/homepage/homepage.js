import AdvancedStatistics from './advanced-statistics/advanced-statistics';
import './homepage.css';
import Shorten from './shorten/shorten';
import BoostYourLinksBanner from './boost-your-links-banner/boost-your-links-banner';

function HomePage() {
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='upper'>
                    <span className='text-very-dark-violet text-head'>More than just</span>
                    <span className='text-very-dark-violet text-head'>shorter links</span>
                    <span className='text-grayish-violet text-smaller'>
                        build your brand's recognition and get detailed
                    </span>
                    <span className='text-grayish-violet text-smaller'>
                        insights on how your links are performing.
                    </span>
                    <div className='get-started-area'>
                        <button className='btn btn-cyan rounded'>Get Started</button>
                    </div>
                    {/* <div className='illustration-working'></div> */}
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