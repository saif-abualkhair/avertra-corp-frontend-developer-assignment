import './link-card.css';
import { useState } from 'react';

function LinkCard(props) {
    const [isClicked, setIsClicked] = useState(false);
    const copyShortLink = (shortLinkEvent) => {
        navigator.clipboard.writeText(shortLinkEvent);
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    }

    return (
        <div className='link-card'>
            <span className='links'>
                <span className='original-link text-gray-violet'>
                    {props.url.originalLink}
                </span>
                <div className="separator"></div>
                <span className='short-link text-cyan'>
                    {props.url.shortLink}
                </span>
            </span>
            <button className={isClicked ? 'btn btn-cyan copy-btn active' : 'btn btn-cyan copy-btn'} onClick={() => { copyShortLink(props.url.shortLink) }}>
                {isClicked ? 'Copied!' : 'Copy'}
            </button>
        </div >
    );
}

export default LinkCard;
