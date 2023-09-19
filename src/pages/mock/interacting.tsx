
interface LastFeedback {
    message: string
    timeInSeconds: number
}
interface interatingPeoples {
    cover: string
    name: string
    lastFeedback: LastFeedback
}

export const interatingPeoples = [
    {
        cover: './assets/faces/face13.jpg',
        name: 'Henry Klein', 
        lastFeedback: {
            message: "Well, it seems to be working now.",
            timeInSeconds: 5
        }
    }, 
    {
        cover: './assets/faces/face1.jpg',
        name: 'Estella Bryan', 
        lastFeedback: {
            message: "Please review the tickets.",
            timeInSeconds: 7
        }
    }, 
    {
        cover: './assets/faces/face10.jpg',
        name: 'Lucy Abbott', 
        lastFeedback: {
            message: "Thanks a lot. It was easy to fix it .",
            timeInSeconds: 10
        }
    }, 
    {
        cover: './assets/faces/face2.jpg',
        name: 'Peter Gill', 
        lastFeedback: {
            message: "OOOh...that will be so ease. Thanks!",
            timeInSeconds: 19
        }
    }
]