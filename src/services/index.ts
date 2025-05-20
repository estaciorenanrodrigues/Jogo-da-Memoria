import axios from 'axios'

export const useServices = () => {
    const clientId = import.meta.env.VITE_ID_CLIENT;
    const clientSecret = import.meta.env.VITE_KEY_SECRET;
    const redirectUri = 'http://localhost:5173/auth/callback';

    const setDataStorage = (name: string, value: string) => {
        localStorage.setItem(name, value);
    };

    const getDataStorage = (name: string) => {
        return localStorage.getItem(name);
    };

    const deleteDataStorage = () => {
        localStorage.clear()
    };

    const getUserInfo = async (idClient: string, clientSecret: string, authCode: string) => {
        const API_URL = "https://oauth2.googleapis.com/token";
        try {
            const response = await axios.post(API_URL, {
                client_id: idClient,
                client_secret: clientSecret,
                code: authCode,
                grant_type: "authorization_code",
                redirect_uri: "http://localhost:5173",
            });
            console.log(response)
            const accessToken = response.data.access_token;
            const userInfoResponse = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            console.log(userInfoResponse.data)
            return userInfoResponse.data;

        } catch (erro) {
            console.log(erro)
        } finally {

        }
    }

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    }

    return {
        setDataStorage,
        getDataStorage,
        deleteDataStorage,
        getUserInfo,
        formatTime
    }

}