import React from 'react';

// import { Container } from './styles';
export interface ClientProps {
    cover: string
    clientname: string
    order: string
    cost: number
    project: string
    paymentMode: string
    startDate: string
    state: "Approved" | "Pending" | "Rejected"
}

interface Client {
    client: ClientProps
}

const Button: React.FC<{ state: "Approved" | "Pending" | "Rejected" }> = ({
    state
}) => {
    return (
        <>
            {state === "Approved" && (<button className='green b-green'>{state}</button>)}
            {state === "Pending" && (<button className='orange b-orange'>{state}</button>)}
            {state === "Rejected" && (<button className='red b-red'>{state}</button>)}
        </>
    )
} 

const Client: React.FC<Client> = ({
    client
}) => {
  return (
    <div className="client">
        <li>
            <input type="checkbox"/>
        </li>
        <li id="client-profile">
            <img src={client.cover} alt="client" />
            <span>{client.clientname}</span>
        </li>
        
        <li className='hidde-when-small'><span>{client.order}</span></li>
        <li className='hidde-when-small'><span>${client.cost}</span></li>
        <li className='hidde-when-small'><span>{client.project}</span></li>
        <li className='hidde-when-small'><span>{client.paymentMode}</span></li>
        <li className='hidde-when-small'><span>{client.startDate}</span></li>

        <li className='bussiness-state'>
            <Button state={client.state}/>
        </li>
    </div>
  )
}

export default Client;