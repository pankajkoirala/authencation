import React,{useState,useEffect} from "react"
 import rawData from "../../assets/mockData/profile.json"
import ProfileDisplayComponent from "../../component/profilepage/profileDisplayComponent"


const ProfileContainer=()=>{
  const[data,setData]=useState(rawData)
  
  return(
    <div> <ProfileDisplayComponent personalinfo={data}/></div>
  )
}
 export default ProfileContainer