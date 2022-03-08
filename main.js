const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field) {
        this.field = field;
    
    }

    print() {
        const printBoard = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(printBoard);
    }

    static generateField(height, width, percentage) {
        
        //Create 2D Array filled with 0's and then fill with either hole or fieldCharacter tiles

        const field = new Array(height).fill(0).map(e => new Array(width).fill(0));
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const prob = Math.random();
                field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
        }

        return field;



    }
}

const newField = new Field(Field.generateField(6, 20, 0.2));
console.log(newField.print())