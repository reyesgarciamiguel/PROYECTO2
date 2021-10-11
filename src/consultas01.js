/*
Find sin Query de Partidos jugados
*/
db.jugadores.find({partidos_jugados:2})
/*
Todos los documentos con nombre Ricky Rubio
*/
db.jugadores.find({nombre:"Ricky Rubio"})
db.jugadores.find({nombre:{$eq: "Ricky Rubio"}})
/*
Valor 2 de partidos jugados pero con un Query
*/
db.jugadores.find({partidos_jugados:{$eq: 2}})
/*
Valor triples porcentaje  100% query
*/
db.jugadores.find({"triples.porcentaje":{$eq: 100}})