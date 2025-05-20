
export const useServices = () => {


    const setDataStorage = (name: string, value: string) => {
        localStorage.setItem(name, value);
    };

    const getDataStorage = (name: string) => {
        return localStorage.getItem(name);
    };

    const deleteDataStorage = () => {
        localStorage.clear()
    };


    const formatTime = (seconds: number): string => {
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    }

    return {
        setDataStorage,
        getDataStorage,
        deleteDataStorage,
        formatTime
    }

}