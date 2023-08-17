import React from 'react';
import {Container,Profile, Avatar, UserData, Icons,
        MicIcon, HeadphoneIcon,SettingsIcon} from './UserInfoStyles'

const UserInfo = () =>{
    
 return (
    <Container>
        <Profile>
            <Avatar/>
            <UserData>
                <strong>Rohit Bhatu</strong>
                <span>#r45b7a54</span>
            </UserData>
        </Profile>
        <Icons>
            <MicIcon/>
            <HeadphoneIcon/>
            <SettingsIcon/>
        </Icons>
    </Container>
)};

export default UserInfo;