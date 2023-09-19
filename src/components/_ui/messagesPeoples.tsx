import { useTime } from '@/hooks/useTime';
import React from 'react';

// import { Container } from './styles';
interface LastFeedback {
    message: string
    timeInSeconds: number
}
interface interatingPeoples {
    cover: string
    name: string
    lastFeedback: LastFeedback
}


const MessagesPeopleInterator: React.FC<{ people: interatingPeoples }> = ({
    people
}) => {
  const { hour, minutes, seconds } = useTime(people.lastFeedback.timeInSeconds)
  return (
    <li>
        <div className="left-side">
            <img src={people.cover} alt="" />
            <div className="messages-people">
                <strong>{ people.name }</strong>
                <p>{ people.lastFeedback.message }</p>
            </div>
        </div>
       
        { hour > 0 && <span>{hour} hours ago</span> }
        { hour === 0 && minutes > 0 && <span>{minutes} minutes ago</span> }
        { hour === 0 && minutes === 0 && <span>{seconds} seconds ago</span> }
    </li>
  );
}

export default MessagesPeopleInterator;