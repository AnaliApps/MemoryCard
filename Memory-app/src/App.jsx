import { useEffect,useState } from 'react'
import Card from './components/Card'
import './App.css'
import Score from './components/Score'

function App() {
    const [records,setRecords] = useState([])
    const [visited,setVisited] = useState([])
    const [score,setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const url2 = ()=>{
      let url3= []
      for(let i=1;i<51;i++){
          url3.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      return url3;
    }

    const urlsToFetch = [...url2()]

    const fetchUrls = async(urls)=>{
      try{
        const promises = urls.map(url=>fetch(url));
        const responses = await Promise.all(promises)
        const data = await Promise.all(responses.map(response=>response.json()));
        return data
      }catch(error){
        throw new Error(`Failed to fetch data: ${error}`)
      }
    }
    useEffect(()=>{
      fetchUrls(urlsToFetch).then((data)=>setRecords([...data]))
      .catch(error=>console.log(error))
    })
    function handleClick(e){
      let present = visited.filter((item)=>item.id === e)
    if(present.length>0){
      setScore((score)=>{
        setBestScore(score)
        let updatedScore = score -1
        console.log(updatedScore)
        score = 0;
        updatedScore = score;
        return updatedScore
      })
    }else{
      setVisited((updatedinfo)=>{
      let updated = [...updatedinfo,{id:e}]
      return updated;
    })
    setScore((score)=>{
        let updatedScore = score + 1
        console.log(updatedScore)
        return updatedScore
      })
    }
    }
  return (
    <>
      <Score score={score} bestScore={bestScore}/>
      <Card records={records} handleClick={handleClick}/>
    </>
  )
}

export default App
