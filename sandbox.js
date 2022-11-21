let firstName = "jet";
firstName='pat';
console.log(firstName);

// Immutability notes, objects cannot be reassigned but they are not immutable

const person = {
    name: "jet"
}

person.name = 'Pat'

console.log(person)

class Author {
    constructor(private writingTool: IWritingTool) {}

    write() {
        this.writingTool.write();
    }
}

// Inheritance
class WritingTool {
    ink = 100;

    write() {
        this.ink--;
    }
}

class Marker extends WritingTool {
    write() {
        // markers consume double the ink
        super.write();
        this.ink--;
    }
}

class Ballpen extends WritingTool {
    
}

// Polymorphism
const teacher = new Author(new Marker());
const student = new Author(new Ballpen());

// =============================

interface IWritingTool {
    write(): void;
}

class WritingTool implements IWritingTool {
    ink = 100;

    write() {
        this.ink--;
    }
}