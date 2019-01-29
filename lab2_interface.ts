export interface toDoInterface{
    colours:Array<string>;
    addColour(colour:string):number;
    listAllColours():void;
    deleteColours(colour:string):number;
}