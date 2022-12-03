import './shorten.css';
import { useState } from 'react';
import LinkCard from './link-card/link-card';
import axios from "axios";

function Shorten() {
    const [isValid, setIsValid] = useState(false);
    const [hasBeenClickedAtLeastOnce, setHasBeenClickedAtLeastOnce] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [urlList, setUrlList] = useState([]);
    const [toastMessage, setToastMessage] = useState(undefined);

    const setValueWithValidityCheck = (event) => {
        setIsValid((event && event != ''));
        setUrl(event);
    }


    // pattern validation
    // const isValidUrl = urlString => {
    //     var urlPattern = new RegExp('^(https?:\\/\\/)?' +
    //         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    //         '((\\d{1,3}\\.){3}\\d{1,3}))' +
    //         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    //         '(\\?[;&a-z\\d%_.~+=-]*)?' +
    //         '(\\#[-a-z\\d_]*)?$', 'i');
    //     const isValidOnUrlPattern = !!urlPattern.test(urlString);
    // }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!hasBeenClickedAtLeastOnce)
            setHasBeenClickedAtLeastOnce(true);
        // setIsValid((url && url != ''));
        if (isValid)
            shortify(url);
    }

    const shortify = (url) => {
        setIsLoading(true);
        axios.get("https://api.shrtco.de/v2/shorten", { params: { url: url } })
            .then(response => {
                setIsLoading(false);
                setValueWithValidityCheck('');
                setHasBeenClickedAtLeastOnce(false);
                setUrlList([
                    ...urlList,
                    { originalLink: response.data.result.original_link, shortLink: response.data.result.share_link }
                ]);
            })
            .catch(error => {
                setIsLoading(false);
                setToastMessage(error.response.data.error);
                setTimeout(() => {
                    setToastMessage(undefined);
                }, 4500);
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
            return <div className="loader-wrapper" title="4">
                <svg version="1.1" className='loader' x="0px" y="0px"
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
        <form onSubmit={onSubmit}>
            <div className='shorten'>
                <div className='shorten-banner bg-very-dark-blue'>
                    <div className='input-group'>
                        <span className="validation">
                            <input className={!isValid && hasBeenClickedAtLeastOnce ? 'shorten-input invalid' : 'shorten-input'} placeholder='Shorten a link here...'
                                value={url}
                                onChange={e => setValueWithValidityCheck(e.target.value)} />
                            {getInvalidMessage()}
                        </span>

                        <button className='btn btn-cyan shorten-button' type='submit'
                            disabled={isLoading}>
                            Shorten it!
                        </button>
                        {getLoading()}
                    </div>
                </div >
                {getLinksList()}
            </div >
            <div className={toastMessage ? 'error-toast  error-toast-show' : 'error-toast'}>
                {toastMessage}
            </div>
        </form>
    );
}

export default Shorten;