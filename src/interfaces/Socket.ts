
interface ServerToClientEvents {
    addAnimal: (message: string) => void;
    addSpecies: (message: string) => void;
}

interface ClientToServerEvents {
    update: (msg: string) => void;
}

export {ServerToClientEvents, ClientToServerEvents};