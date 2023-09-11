// CurrentTimeIndex.jsx
const times = ['10:00','12:00','14:00','16:00','18:00', '20:00','22:00'];

export const getCurrentTimeIndex = () => {
    const now = new Date();
    const nowInMinutes = now.getHours() * 60 + now.getMinutes();

    let index = times.findIndex(time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes > nowInMinutes;
    });

   
    if (index === -1) {
        index = times.length - 1;
    } else if (index > 0) {
        
        index--;
    }

    return index;
};
