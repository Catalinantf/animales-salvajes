//Crear las clases representadas en el diagrama implementando la herencia indicada
export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let Nombre = nombre
        this.getNombre = () => Nombre
        let Edad = edad
        this.getEdad = () => Edad
        let Img = img
        this.getImg = () => Img
        let Comentarios = comentarios
        this.getComentarios = () => Comentarios
        let Sonido = sonido
        this.getSonido = () => Sonido
    }
    get Nombre() {
        return this._getNombre
    }
    get Edad() {
        return this._getEdad
    }
    get Img() {
        return this._getImg
    }
    get Comentarios() {
        return this._getComentarios
    }
    get Sonido() {
        return this._getSonido
    }
    set Comentarios(nuevo_comentario) {
        this._getComentarios = nuevo_comentario
    }
}

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir() {
        return this.sonido
    }
}
export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar() {
        return this.sonido
    }
}
export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Gruñir() {
        return this.sonido
    }
}
export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear() {
        return this.sonido
    }
}
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar() {
        return this.sonido
    }
}
