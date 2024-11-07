function Card({records}){
    return (
    <>
        {records.map((item,index)=>
              <ul key={index}>
                <li>
                  <div>
                    <p>Id:{item.id}</p>
                    <p>Name: {item.name}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`} alt={`pokemon_${index}`} />
                  </div>
                </li>
              </ul>
      )}
    </>
    )
}

export default Card