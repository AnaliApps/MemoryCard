function Card({records}){
    return (
    <>
        {records.map((item,index)=>
              <ul key={index} className="allImageData">
                <li>
                  <div className="card">
                    <div className="imageCont">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`} alt={`pokemon_${index}`} width='200px' height='200px'/>
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