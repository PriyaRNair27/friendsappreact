import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
    var [name,setname]=useState([])
    var [friendName,setfriendName]=useState([])
    var [FriendsNickName,setFriendNickName]=useState([])
    var [DescribedYourFriend,setDescribedYourFriend]=useState({})
    const subdata=()=>{
        const  data={"name":name,"friendName":friendName,"FriendsNickName":FriendsNickName,"DescribedYourFriend":DescribedYourFriend}
        console.log(data)
        axios.post("http://dummyapifriends.herokuapp.com/view",data).then(
        (response)=>
        {
            console.log(response.data)
            if(response.data.status=="success")
            {
                alert("successfully inserted")
            }
            else
            {
                alert("failed ")
            }
        
        })
        }

  return (
    <div>
<Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">name</label>
                    <input  onChange={(c)=>{setname(c.target.value)} } type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">friendName</label>
                    <input  onChange={(c)=>{setfriendName(c.target.value)} } type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">FriendsNickName</label>
                    <input  onChange={(c)=>{setFriendNickName(c.target.value)} }type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">DescribedYourFriend</label>
                   <textarea  onChange={(c)=>{setDescribedYourFriend(c.target.value)} }name="" id="" cols="30" rows="10" className="form-control"></textarea>
                   
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                <button className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Add