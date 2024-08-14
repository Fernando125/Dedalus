#!/bin/bash

entero_cadena() {
    if [ -z "$1" ]; then
        echo "No se ha pasado ningun argumento, pruebe de nuevo"
        exit
    elif [[ $1 =~ ^-?[0-9]+$ ]]; then
        return 0
    elif [[ $1 =~ ^[a-zA-Z0-9@#$%*+\-=]+$ ]]; then
        return 1
    else
        echo "El argumento no es un entero ni una cadena"
        exit
    fi
}

entero_cadena $1
echo $?