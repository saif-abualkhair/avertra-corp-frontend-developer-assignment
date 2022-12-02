import './card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='icon-wrapper bg-very-dark-violet'>
                <span className='icon sh sh-brand'>
                    <span className={props.iconClass}></span>
                </span>
            </div>
            <div className="card-title text-very-dark-violet">{props.title}</div>
            <div className="card-description text-grayish-violet">{props.description}</div>
        </div>
    );
}

export default Card;
