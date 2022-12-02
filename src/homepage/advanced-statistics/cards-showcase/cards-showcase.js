import Card from "./card/card";
import './cards-showcase.css';

function CardsShowcase() {
    return (
        <div className='cards-showcase'>
            <Card title="Brand Recognition" description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." iconClass="sh sh-brand">
            </Card>
            <Card title="Detailed Records" description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." iconClass="sh sh-detailed">
            </Card>
            <Card title="Fully Customizable" description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." iconClass="sh sh-customizable">
            </Card>
            <div className="bar bg-cyan"></div>
        </div>
    );
}

export default CardsShowcase;
