export interface DataGoogleInterface {
    clientId: string,
    client_id: string,
    credential: string,
    select_by: string
}
export interface stateInterface {
    attempts?: number | undefined,
    timer?: number,
    gameStarted?: boolean,
    interval?: number | null,
}

export interface CardInterface {
    id: number;
    value: string;
};
