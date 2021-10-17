/*Esta BD trata de Españoles en la NBA*/

/*Comando para meter documentos en una colección en "Tanda"*/
db.jugadores.insertMany
(
    [
        { nombre: "Ricky Rubio", equipo: "Cavaliers", partidos_jugados: 4 ,average_minutos: 19.4, puntos_por_partido: 10.3, tiros_de_campo: { media_anotados: 4, media_intentados: 9.8, porcentaje: 41.0}, triples: { media_anotados: 0.5, media_intentados: 2.8, porcentaje: 18.2}},
        { nombre: "Usman Garuba",equipo: "Houston Rockets",partidos_jugados: 2,average_minutos: 6.7, puntos_por_partido: 2.5,tiros_de_campo: { media_anotados: 1.0, media_intentados: 1.5, porcentaje: 66.7},triples: { media_anotados: 0.5, media_intentados: 0.5, porcentaje: 100}},
        { nombre: "Juancho Hernangomez",equipo: "Boston Celtics",partidos_jugados: 2,average_minutos: 13.1,puntos_por_partido: 6.5,tiros_de_campo: { media_anotados: 1.5, media_intentados: 2.5, porcentaje: 60.0},triples: { media_anotados: 0.5, media_intentados: 1.5, porcentaje: 33.3}}
    ]
)

/*También puedo meter documentos de manera individual*/
db.jugadores.insertOne({nombre: "Willy Hernangomez", equipo: "Pelicans", partidos_jugados: 4 ,average_minutos: 14.3, puntos_por_partido: 4.0, tiros_de_campo: { media_anotados: 1.5, media_intentados: 4.8, porcentaje: 31.6}, triples: { media_anotados: 0.0, media_intentados: 0.0, porcentaje: 0.0}})
db.jugadores.insertOne({nombre: "Santi Aldama", equipo: "Memphis Grizzlies", partidos_jugados: 5 ,average_minutos: 14.3, puntos_por_partido: 6.0, tiros_de_campo: { media_anotados: 2.4, media_intentados: 6.6, porcentaje: 36.4}, triples: { media_anotados: 0.6, media_intentados: 2.6, porcentaje: 23.1}})