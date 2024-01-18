interface OutputUserInterface{
    id: number;
    displayName: string;
    email: string;
    password: string;
}

 interface InputUserInterface{
    displayName: string;
    email: string;
    password: string;
}

export {
    OutputUserInterface,
    InputUserInterface
}