interface Feedback {
    message: string
    timeInSeconds: number
}

interface Me {
    cover: string
    name: string
    lastFeedback: Feedback
}

export const me: Me = {
    cover: './assets/faces/face17.jpg',
    name: 'Henry Klein', 
    lastFeedback: {
        message: "Well, it seems to be working now..",
        timeInSeconds: 14000
    }
}