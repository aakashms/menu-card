

export default function Foods({imgurl,info,cost}) {
    return(
        <div className="food-wrap">
            <img src={imgurl} alt="foodlist" className="foods" />
            <div className="price-tag">
            <p>{info}</p>
            <p className="cost">{cost}</p>

            </div>
            
            
        </div>
    ) 
}