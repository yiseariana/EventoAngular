#!/bin/sh

DESTINO=/home/equipo/Documentos/Desarrollo/Cooapica/Codigo/cooapicaBU/public
INDEX=/home/equipo/Documentos/Desarrollo/Cooapica/Codigo/cooapicaBU/resources/views

grunt --force

cp -r dist/fonts $DESTINO
cp -r dist/images $DESTINO
cp -r dist/scripts $DESTINO
cp -r dist/styles $DESTINO

cp -f dist/index.html $INDEX/'welcome.blade.php'
