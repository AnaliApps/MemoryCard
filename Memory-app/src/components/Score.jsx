function Score({score,bestScore}){
    return (
        
        <header className="header_container">
            <div>
                <h3>MEMORY CARD GAME</h3>
            </div>
            <div>
                <p>Score: <b>{score}</b></p>
                <p>Best Score: <b>{bestScore}</b></p>
            </div>
        </header>
        )
}

export default Score