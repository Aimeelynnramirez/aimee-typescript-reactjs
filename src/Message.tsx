import React from 'react';

interface UserMessage {
    name:string;
    message:string;
}
const Message = (prop: UserMessage): any => {
    return(
    <h1>{prop.name} is saying, {prop.message}</h1>
    );
}
export default Message;