import React from 'react';

// import { Container } from './styles';
interface CardPrps {
    mb: number
    percent: number
    text: string
}

const Icon: React.FC<{ up?: Boolean }> = ({
    up
}) => {
    return (
        <>
            {up && (<i className="mdi mdi-arrow-top-right icon-box success"/>)}
            {!up && (<i className="mdi mdi-arrow-bottom-left icon-box failed bcg-red-o"/>)}
        </>
    )
} 

const Paragraph: React.FC<{percent:number}> = ({
    percent
}) => {

    if (percent < 0) return (
        <p className="text failed">{percent < 0 ? percent:"+"+percent}%</p>
    ) 
    else return <p className="text success">{percent < 0 ? percent:"+"+percent}%</p>
}

const DashboardCard: React.FC<CardPrps> = ({
    mb, percent, text
}) => {
  return (
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-9">
                    <div className="av">
                        <h3 className="mb-0">${mb}</h3>
                        <Paragraph percent={percent}/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="icon">
                       <Icon up={percent > 0}/>
                    </div>
                </div>
            </div>
            <h6>{text}</h6>
        </div>
    </div>
  )
}

export default DashboardCard;