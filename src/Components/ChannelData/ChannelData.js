import React from 'react'
import ChannelMessage, {Mention} from '../ChannelMessage/ChannelMessage';
import {Container, Messages, InputWrapper, Input, InputIcon} from './ChannelDataStyles'

const ChannelData = () => {
  return (
    <Container>
        <Messages>

            <ChannelMessage
                author='Jay'
                date='16/04/2022'
                content='Lorem ipsum dolor sit amet consectetu'
                isBot
            />

            <ChannelMessage
                author='Krutik'
                date='16/04/2022'
                content='Lorem ipsum dolor sit amet consectetu'
            />

            <ChannelMessage
                author='Darshan'
                date='16/04/2022'
                content='Lorem ipsum dolor sit amet consectetu'
            />

            <ChannelMessage
                author='Sidhart'
                date='16/04/2022'
                content={
                    <><Mention>@jay</Mention> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque! Deserunt eaque incidunt cumque. Corrupti. </>
                }
                isBot
            />

            <ChannelMessage
                author='Vaibhav'
                date='16/04/2022'
                content='Lorem ipsum dolor'
            />
            <ChannelMessage
                author='Pintu'
                date='16/04/2022'
                content='sit amet consectetur'
            />
            <ChannelMessage
                author='Rikhil'
                date='16/04/2022'
                content='adipisicing elit. Laborum, atque! Deserunt '
            />
            <ChannelMessage
                author='Rohit'
                date='16/04/2022'
                content={
                    <><Mention>@Fábio Junik</Mention> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque! Deserunt eaque incidunt cumque. Corrupti. </>
                }
                isBot
                hasMention
            />
        </Messages>
        <InputWrapper>
            <Input type='text' placeholder='Conversar em #chat-livre'/>
            <InputIcon/>
        </InputWrapper>
    </Container>
  )
}


export default ChannelData;