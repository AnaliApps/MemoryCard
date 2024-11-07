import { useEffect,useState } from 'react'
import Card from './components/Card'
import './App.css'
import Score from './components/Score'

function App() {
    const [records,setRecords] = useState([])
    const [allImages,setAllImages] = useState([])
    const [allInfo,setAllInfo] = useState([])

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

  return (
    <>
      <Score/>
      <Card records={records}/>
    </>
  )
}

export default App
