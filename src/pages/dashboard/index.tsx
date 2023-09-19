import DashboardCard from '@/components/_ui/dashboardCard';
import React from 'react';
import { ClientProps, clients } from '../api/mock/clients';
import Client from '@/components/_ui/client';
import { interatingPeoples } from '../api/mock/interacting';
import MessagesPeopleInterator from '@/components/_ui/messagesPeoples';
import { me } from '../api/mock/portifolio';
import Main from '@/components/_ui/main';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Main>
    <div id="publicity-even-features">
      <div className="even-left-side">
        <img src="./assets/dashboard/Group126@2x.png" alt="eve-features" />
        <div className="even-left-text">
          <h3>Want even more features?</h3>
          <p>Check out our Pro version with 5 unique layouts!</p>              
        </div>
      </div>
      <div className="even-right-side">
        <button className="upgrate-to-pro">Upgrate to pro</button>
      </div>
    </div>

    <div className="cards-row">
      <DashboardCard 
        mb={12.34}
        percent={3.5}
        text="Potential growth"
      />
      <DashboardCard 
        mb={17.34}
        percent={11}
        text="Revenue current"
      />
      <DashboardCard 
        mb={12.34}
        percent={-2.4}
        text="Daily Income"
      />
      <DashboardCard 
        mb={31.53}
        percent={3.5}
        text="Expense current"
      />
    </div>

    <div className="row gap transaction">
      <div className="transaction-history">
        <div className="card-header">
          <h5>Transaction History</h5>
        </div>
        <div className="graphic-circle">
        
        </div>
        <div className="transfer">
          <div className="transfer-to">
            <div>
              <h5>Transfer to Paypal</h5>
              <span>07 Jan 2019, 09:12AM</span>
            </div>
            <strong>$236</strong>
          </div>
          <div className="transfer-to">
            <div>
              <h5>Transfer to Stripe</h5>
              <span>07 Jan 2019, 09:12AM</span>
            </div>
            <strong>$593</strong>
          </div>
        </div>
      </div>
      <div className="card open-projects">
          <div className="card-header">
            <h5>Open Projects</h5>
            <span>Your data status</span>
          </div>
          <ul className="projects-list">
            <li>
              <div className="left-side">
                <div className="icon-square bcg-blue">
                  <i className="mdi mdi-file-document"/>
                </div>
                <div className="projects-list-labels">
                  <h5>Admin dashboard design</h5>
                  <p>Broadcast web app mockup</p>
                </div>
              </div>
              <div className="right-side">
                  <span>15 minutes ago</span>
                  <span>30 tasks, 5 issues</span>
              </div>
            </li>
            <li>
              <div className="left-side">
                <div className="icon-square bcg-green">
                <i className="mdi mdi-cloud-download"/>
                </div>
                <div className="projects-list-labels">
                  <h5>Wordpress Development</h5>
                  <p>Upload new design</p>
                </div>
              </div>
              <div className="right-side">
                <span>1 hour ago</span>
                <span>23 tasks, 5 issues</span>
              </div>
            </li>
            <li>
              <div className="left-side">
                <div className="icon-square bcg-violet">
                  <i className="mdi mdi-clock"/>
                </div>
                <div className="projects-list-labels">
                  <h5>Project meeting</h5>
                  <p>New project discussion</p>
                </div>
              </div>
              <div className="right-side">
                <span>35 minutes ago</span>
                <span>15 tasks, 2 issues</span>
              </div>
            </li>
            <li>
              <div className="left-side">
                <div className="icon-square bcg-red">
                  <i className="mdi mdi-email-open"/>
                </div>
                <div className="projects-list-labels">
                  <h5>Broadcast Mail</h5>
                  <p>Sent release details to team</p>
                </div>
              </div>
              <div className="right-side">
                <span>55 minutes ago</span>
                <span>35 tasks, 7 issues</span>
              </div>
            </li>
            <li>
              <div className="left-side">
                <div className="icon-square bcg-orange">
                  <i className="mdi mdi-chart-pie"/>
                </div>
                <div className="projects-list-labels">
                  <h5>UI Design</h5>
                  <p>New application planning</p>
                </div>
              </div>
              <div className="right-side">
                <span>50 minutes ago</span>
                <span>27 tasks, 4 issues</span>
              </div>
            </li>
          </ul>
      </div>
    </div>
    
    
    <div className="cards-row mt" id="sinces">
      <div className="card">
        <div className="card-header">
          <h4>Revenue</h4>
        </div>
        <div>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <div className="av">
                  <h3 className="mb-1">$32123</h3>
                  <p className="text success"><i className="mdi mdi-plus"></i> 3.5%</p>
                </div>
              </div>
              <div className="col-3">
                <div className="icon">
                  <i className="icon-lg mdi mdi-codepen blue"/>    
                </div>
              </div>
            </div>
            <h6>11.38% Since last month</h6>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4>Sales</h4>
        </div>
        <div>
          <div className="card-body">
          <div className="row">
            <div className="col-9">
              <div className="av">
                <h3 className="mb-1">$45850</h3>
                <p className="text success"><i className="mdi mdi-plus"></i>8.3%</p>
              </div>
            </div>
            <div className="col-3">
              <div className="icon">
                <i className="icon-lg mdi mdi-wallet-travel failed"/>
              </div>
            </div>
          </div>
          <h6>9.61% Since last month</h6>
      </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4>Purchase</h4>
        </div>
        <div>
          <div className="card-body">
          <div className="row">
            <div className="col-9">
              <div className="av">
                <h3 className="mb-1">$2039</h3>
                <p className="text failed">2.1%</p>
              </div>
            </div>
            <div className="col-3">
              <div className="icon">
                <i className="icon-lg mdi mdi-monitor success"></i>
              </div>
            </div>
          </div>
          <h6>2.27% Since last month</h6>
      </div>
    </div>
      </div>
    </div>
    
    
    <div className="card mt">
      <div className="card-header">
        <h5>Order Status</h5>
      </div>
      <ul id="clients" className="mt">
          <div id="clients-header">
            <li>
              <input type="checkbox" />
            </li>
            <li>
              <h5>Client Name</h5>
            </li>
            <li className="hidde-when-small">
              <h5>Order No</h5>
            </li>
            <li className="hidde-when-small">
              <h5>Product Cost</h5>
            </li>
            <li className="hidde-when-small">
              <h5>Project</h5>
            </li>
            <li className="hidde-when-small">
              <h5>Payment Mode</h5>
            </li>
            <li className="hidde-when-small">
              <h5>Start Date</h5>
            </li>
            <li>
              <h5>Payment Status</h5>
            </li>
          </div>
          <div id="clients-table">
            {clients.map((clientOrder: ClientProps, i) => (
              <Client client={clientOrder} key={i}/>
            ))}
          </div>
      </ul>
    </div>

    <div className="cards-row mt" id="messages-portifolio-toDoList">
      <div className="card messages-card">
        <div className="card-header">
          <h5>Messages</h5>
          <span>View all</span>
        </div>
        <div className="card-body">
          <ul>
            {interatingPeoples.map((people, i) => (
              <MessagesPeopleInterator people={people} key={i}/>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="card portifolio-slide">
        <div className="card-header">
          <h5>Portifolio Slide</h5>
          <div className="icons-left-right">
            <div><i className="mdi mdi-chevron-left"/></div>
            <div><i className="mdi mdi-chevron-right"/></div>
          </div>
        </div>
        <div id="portifolio-slide"/>
        <MessagesPeopleInterator people={me}/>
        <br />
        <span className="normal-size">Well, it seems to be working now.</span>
        <div className="graphic">
          <div className="graphic-sizing"></div>
        </div>
      </div>
      
      <div className="card toDoCard">
        <div className="card-header">
          <h5>To Do List</h5>
        </div>
        <div className="card-body toDoListBody">
          <form id="toDoListForm">
            <input type="text" placeholder="enter task..."/>
            <button>Add</button>
          </form>
          <ul>
            <li>
              <div>
                <input type="checkbox" />
                <p>Pick up kids from school</p>
              </div>
              <i className="mdi mdi-close-box"/>
            </li>
            <li>
              <div>
                <input type="checkbox" />
                <p>Pick up kids from school</p>
              </div>
              <i className="mdi mdi-close-box"/>
            </li>
            <li>
              <div>
                <input type="checkbox" />
                <p>Pick up kids from school</p>
              </div>
              <i className="mdi mdi-close-box"/>
            </li>
            <li>
              <div>
                <input type="checkbox" />
                <p>Pick up kids from school</p>
              </div>
              <i className="mdi mdi-close-box"/>
            </li>
           
          </ul>
        </div>
      </div>
    </div>

  </Main>
  )
}

export default Dashboard;