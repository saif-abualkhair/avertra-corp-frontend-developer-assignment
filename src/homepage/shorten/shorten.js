import './shorten.css';
import { useState } from 'react';
import LinkCard from './link-card/link-card';
import axios from "axios";

function Shorten() {
    const [isValid, setIsValid] = useState(false);
    const [hasBeenClickedAtLeastOnce, setHasBeenClickedAtLeastOnce] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setName] = useState('');
    const [urlList, setUrlList] = useState([]);

    const onSubmit = () => {
        if (!hasBeenClickedAtLeastOnce)
            setHasBeenClickedAtLeastOnce(true);
        setIsValid((url && url != ''));
        if (isValid)
            shortify(url);
    }

    const shortify = (url) => {
        setIsLoading(true);
        axios.get("https://api.shrtco.de/v2/shorten", { params: { url: url } })
            .then(response => {
                setIsLoading(false);
                setName('');
                setUrlList([
                    ...urlList,
                    { originalLink: response.data.result.original_link, shortLink: response.data.result.share_link }
                ]);
            })
            .catch(error => {
                setIsLoading(false);
                console.log('drdr error', error);
            });
    }

    const getInvalidMessage = () => {
        if (!isValid && hasBeenClickedAtLeastOnce)
            return <span className='invalid-message'>Please add a link</span>;
    };

    const getLinksList = () => {
        return urlList.map((url, index) => {
            return <LinkCard key={index} url={url}></LinkCard>
        });
    }

    const getLoading = () => {
        if (isLoading)
            return <div className="loader loader--style5" title="4">
                <svg version="1.1" id="Layer_1" x="0px" y="0px"
                    width="24px" height="30px" viewBox="0 0 24 30">
                    <rect x="0" y="0" width="4" height="10" fill="#333">
                        <animateTransform attributeType="xml"
                            attributeName="transform" type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="10" y="0" width="4" height="10" fill="#333">
                        <animateTransform attributeType="xml"
                            attributeName="transform" type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="20" y="0" width="4" height="10" fill="#333">
                        <animateTransform attributeType="xml"
                            attributeName="transform" type="translate"
                            values="0 0; 0 20; 0 0"
                            begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                </svg>
            </div>
    }

    return (
        <div className='shorten'>
            <div className='shorten-banner bg-very-dark-blue'>
                <div className='input-group'>
                    <input className={!isValid && hasBeenClickedAtLeastOnce ? 'shorten-input invalid' : 'shorten-input'} placeholder='Shorten a link here...'
                        value={url}
                        onChange={e => setName(e.target.value)} />
                    <button className='btn btn-cyan shorten-button' onClick={onSubmit}
                        disabled={isLoading}>
                        Shorten it!
                    </button>
                    {getInvalidMessage()}
                    {getLoading()}
                </div>
            </div >
            {getLinksList()}
        </div >
    );
}

export default Shorten;