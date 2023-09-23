import { openDb } from "../configDb.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec(
            'CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, sobrenome TEXT NOT NULL, email TEXT NOT NULL UNIQUE, senha TEXT NOT NULL, numero_telefone TEXT NOT NULL)'
        )
    })
}

export async function insertUsuario(usuario){
     usuario = usuario.body
    console.log(usuario)
    await openDb().then(db =>{
         db.run('INSERT INTO User (nome , sobrenome , email , numero_telefone, senha) VALUES (?, ?, ?, ?, ?)', [usuario.nome , usuario.sobrenome, usuario.email, usuario.numero_telefone, usuario.senha]);
    })
}