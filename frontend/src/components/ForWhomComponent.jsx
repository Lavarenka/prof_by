import './ForWhomComponent.css'



function HoverImageWithText({ imageUrl, text }) {
    return (
        <div className="image-container">
            <img src={imageUrl} alt="Hover me" className="image" />
            <div className="overlay">
                <p className="text">{text}</p>
            </div>
        </div>
    );
}

export default HoverImageWithText;
