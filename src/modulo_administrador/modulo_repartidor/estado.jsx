import {useState} from "react"
//const Likes =({})=>{
const getinitialikes=()=>12
const getinitialikes=()=>{console.log('getInitialikes')}
//const Likes=({initialikes})=>{
	const Likes=({})=>{
    //const [likes,setLikes]=useState(0)
    const [likes,setLikes]=useState(getinitialikes)
   // const newLikes={...likes}//va a hacer una copia
    return (
              <Button onClick={()=>setLikes(likes+1)}></Button>
           )
}
const Button=()>={console.log('Render Button')return <button onClick={onClick}>{children}></button>
const estado = () => {
  return (
    <div>
	<Likes likes={12}/>
	<Likes initialikes={12}/>
	</div>
  )
}

export default estado