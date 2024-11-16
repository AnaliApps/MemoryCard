function Card({shuffle,records,handleClick}){
    let shuffled = shuffle(records)
    return (
    <>
        {shuffled.map((item,index)=>
              <ul key={index} className="allImageData">
                <li>
                  <div className="card" id={item.id} onClick={(e)=>handleClick(e.target.id)}>
                    <div className="imageCont">
                        <img src={item.url} alt={`pokemon_${item.id}`} width='200px' height='150px'/>
                    </div>
                    <div className="nameIdInfo">
                      <p>{item.name} <span>#{item.id}</span></p>
                    </div>
                  </div>
                </li>
              </ul>
      )}
    </>
    )
}

export default Card