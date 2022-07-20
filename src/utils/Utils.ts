export const getTimeStamp = () => Date.now()

export const differenceInHours = (timestamp: number) => {
    var difference = getTimeStamp() - timestamp
    return Math.floor(difference/1000/60/60);
}

export const getRandomString = () => Math.random().toString(36).slice(2, 7);