/*Esta BD trata de Españoles en la NBA*/


db.jugadores.insertMany
(
    [
        { nombre: "Ricky Rubio", equipo: "Cavaliers", partidos_jugados: 4 ,average_minutos: 19.4, puntos_por_partido: 10.3, tiros_de_campo: { media_anotados: 4, media_intentados: 9.8, porcentaje: 41.0}, triples: { media_anotados: 0.5, media_intentados: 2.8, porcentaje: 18.2}},
        { nombre: "Usman Garuba",equipo: "Houston Rockets",partidos_jugados: 2,average_minutos: 6.7, puntos_por_partido: 2.5,tiros_de_campo: { media_anotados: 1.0, media_intentados: 1.5, porcentaje: 66.7},triples: { media_anotados: 0.5, media_intentados: 0.5, porcentaje: 100}},
        { nombre: "Juancho Hernangomez",equipo: "Boston Celtics",partidos_jugados: 2,average_minutos: 13.1,puntos_por_partido: 6.5,tiros_de_campo: { media_anotados: 1.5, media_intentados: 2.5, porcentaje: 60.0},triples: { media_anotados: 0.5, media_intentados: 1.5, porcentaje: 33.3}}
    ]
)
