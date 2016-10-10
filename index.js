#!/usr/bin/env node

//Dépendances
const db = require('sqlite')
const program = require('commander')

e
// Base de donnée
// On ouvre une session sqlite en mémoire
db.open('servercheck.db').then(() => {
  // Une fois la base ouverte, on créé une table
  // On n'oublie pas le return qui va permettre de faire suivre la Promise
  // et donc de gérer le "catch" plus bas, en cas d'erreur
return db.run('CREATE TABLE IF NOT EXISTS servers (name, url)')
	}).then(() => {
	  	console.log('> TABLE servers on')
	}).catch((err) => { // Si on a eu des erreurs
	  	console.error('ERR> ', err)
	}).then(() => {
		db.run('CREATE TABLE IF NOT EXISTS status (name, time, online)')
	}).then(() => {
	  	console.log('> TABLE status on')
	}).catch((err) => { // Si on a eu des erreurs
	  	console.error('ERR> ', err)
	}) 


// Configuration des paramètres attendus
program
 .version('1.0.0')
 .option('-a, --add', 'serveurs ajouté')
 .option('-r, --remove', 'serveurs retiré')
 .option('-l, --list', 'liste des serveurs')
// On parse (convertit en format utilisable) les options
// fonction synchrone
program.parse(process.argv)
// Maintenant on peut les utiliser
if (program.add) {
 




} else if (program.all) {
 console.log('Hello all!')
} else if (program.someone) {
 console.log(`Hello ${program.someone}!`)
} else {
 program.help()
}

