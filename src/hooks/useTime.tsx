import { useCallback, useEffect, useState } from "react"

export function useTime (seconds: number) {
    const [hour, setHour] = useState(0)
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        if (minutes >= 60) setHour(parseInt(`${minutes / 60}`))
    }, [minutes])
    
    useEffect(() => {
        if (seconds >= 60) setMinutes(parseInt(`${seconds / 60}`))
    }, [seconds])

    return {
        seconds,
        minutes,
        hour
    }
}