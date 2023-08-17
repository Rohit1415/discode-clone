import React from 'react';
import {Container, Role, User, Avatar} from './UserListStyles'

const UserRow = ({nickname, isBot}) =>{
  return (
    <User >
        <Avatar className={isBot?'bot':''}/>
        <strong>{nickname}</strong>
        {isBot && <span>Bot</span> }
    </User>
  )
}

const UserList = () =>{
    
 return (
    <Container>
        <Role>Online - 3</Role>
        <UserRow nickname='Rohit Bhatu'/>
        <UserRow nickname='Tisha Patl;'/>
        <UserRow nickname='Hitsh Chorasiya'/>
        <UserRow nickname='Swati Panjaban'/>

        <Role>Offine - 23</Role>
        <UserRow nickname='Rohit' isBot/>
        <UserRow nickname='Tisha'/>
        <UserRow nickname='Darshan'/>
        <UserRow nickname='Semil'/>
        <UserRow nickname='Swata'/>
        <UserRow nickname='Rajesh1'/>
        <UserRow nickname='Dharti'/>
        <UserRow nickname='Prajakta'/>
        <UserRow nickname='Barkha'/>
        <UserRow nickname='Rahul'/>
        <UserRow nickname='Krutik'/>
        <UserRow nickname='Sidhart'/>
        <UserRow nickname='Jemish'/>
        <UserRow nickname='Tejas'/>
        <UserRow nickname='Pintu'/>
        <UserRow nickname='Ruman'/>
        <UserRow nickname='PIyush'/>
        <UserRow nickname='Kilani'/>

        
    </Container>
)};

export default UserList;