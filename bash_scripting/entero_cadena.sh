# Escribe un script con una funcion que determine si un argumento
# que se le pasa es un entero o una cadena. La función devolverá
# TRUE (0) si se le pasa un entero, y FALSE (1) si se le pasa una cadena.

#!/bin/bash

entero_cadena() {
    if [ -z "$1" ]; then
        echo "No se ha pasado ningun argumento, pruebe de nuevo"
        exit
    elif [[ $1 =~ ^-?[0-9]+$ ]]; then
        return 0
    elif [[ $1 =~ ^[a-zA-Z]+$ ]]; then
        return 1
    else
        echo "El argumento no es un entero ni una cadena"
        exit
    fi
}

entero_cadena $1
echo $?