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
export const clients: ClientProps[] = [
    {
        cover: './assets/faces/face13.jpg',
        clientname: 'Henry Klein', 
        order: '02312', 
        cost: 14.500, 
        project: 'Dashboard', 
        paymentMode: 'Credit card', 
        startDate: '04 Dec 2019', 
        state: 'Approved'
    }, 
    {
        cover: './assets/faces/face1.jpg',
        clientname: 'Estella Bryan', 
        order: '02312', 
        cost: 14.500, 
        project: 'Website', 
        paymentMode: 'Cash on delivered', 
        startDate: '04 Dec 2019', 
        state: 'Pending'
    }, 
    {
        cover: './assets/faces/face10.jpg',
        clientname: 'Lucy Abbott', 
        order: '02312', 
        cost: 14.500, 
        project: 'App design', 
        paymentMode: 'Credit card', 
        startDate: '04 Dec 2019', 
        state: 'Rejected'
    }, 
    {
        cover: './assets/faces/face2.jpg',
        clientname: 'Peter Gill', 
        order: '02312', 
        cost: 14.500, 
        project: 'Development', 
        paymentMode: 'Online Payment', 
        startDate: '04 Dec 2019', 
        state: 'Approved'
    }, 
    {
        cover: './assets/faces/face23.jpg',
        clientname: 'Sallie Reyes', 
        order: '02312', 
        cost: 14.500, 
        project: 'Website', 
        paymentMode: 'Credit card', 
        startDate: '04 Dec 2019', 
        state: 'Approved'
    }
]