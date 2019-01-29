import{toDoInterface} from './lab2_interface';

class toDoClass implements toDoInterface{

    colours: Array<string> = [];
    addColour(colour:string):number{
        this.colours.push(colour);
        return this.colours.length;

    }
    
    
    listAllColours(){
        colours.forEach(function (colour){
            console.log(colours);
        })
    }
    
    deleteColours(colour:string):number{
    
        let index:number = colours.indexOf(colour, 0);
    
        if(index > -1){
            this.colours.splice(index, 1);
            console.log("item "+ colour +" has been deleted");
        }else {
            console.log("item not found: "+ colour );
        }
        
        return this.colours.length;
    } 
}

let testClass = new toDoClass();
testClass.addColour("blue");
testClass.addColour("red");
testClass.listAllColours();
testClass.deleteColours("red");
testClass.listAllColours();
