import './shorten.css';
import { useState } from 'react';
import LinkCard from './link-card/link-card';
import axios from "axios";

function Shorten() {
    const [isValid, setIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setName] = useState('');
    const [urlList, setUrlList] = useState([]);

    const onSubmit = () => {
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
        if (!isValid)
            return <span className='invalid-message'>Please Add a Link</span>;
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
                    <input className={!isValid ? 'shorten-input invalid' : 'shorten-input'} placeholder='Shorten a link here...'
                        value={url}
                        onChange={e => setName(e.target.value)} />
                    <button className='btn btn-cyan shorten-button' onClick={onSubmit}
                        disabled={isLoading}>
                        Shorten it!
                    </button>
                    {getInvalidMessage()}
                    {getLoading()}
                </div>
                {/* <img src='src\assets\images\bg-shorten-desktop.svg'></img> */}
                {/* <div className='background-img'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1110" height="168"><path fill="#4B3F6B" fill-rule="evenodd" d="M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z" /></svg>
                </div> */}
            </div >
            {getLinksList()}
        </div >
    );
}

export default Shorten;