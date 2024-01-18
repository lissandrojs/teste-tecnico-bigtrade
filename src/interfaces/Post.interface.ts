interface OutputPostInterface{
    id : number;
    title: string;
    content: string;
    userId: number;
    published: Date;
    updated: Date;
}

 interface InputPostInterface{
    title: string;
    content: string;
    userId: number;
    published: Date;
    updated: Date;
}

export {
    OutputPostInterface,
    InputPostInterface
}