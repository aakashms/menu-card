import "./App.css";

export default function Foods({imgurl,info,cost}) {
    return(
        <div className="food-wrap">
            <img src={imgurl} alt="foodlist" className="foods" />
            <div className="price-tag">
            <p className="label">{info}</p>
            <p className="cost">{cost}</p>

            </div>
            
            
        </div>
    ) 
}