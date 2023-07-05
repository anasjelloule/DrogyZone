export class Element {
    id!: number;
    type: string="text";
    title?: string = "Element";
}
export interface Task{
    id:string,
    text:string
}
export interface initialStatetypes{
    elements:Element[],
    drags:Array<Element>,
    tasks:Task[],
    tasktitle:string,
    checked:boolean
}

 