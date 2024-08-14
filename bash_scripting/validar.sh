#!/bin/bash

validar() {
    pass="$1"

    if [ -z "$1" ]; then
        echo "No se ha pasado ninguna contraseña, pruebe de nuevo"
        exit
    elif [[ ${#pass} -lt 8 ]]; then
        echo "La password es debil, debe tener al menos 8 caracteres"
        return
    elif ! [[ "$pass" =~ [0-9] ]]; then
        echo "La contraseña es debil, debe contener al menos un numero"
        return
    elif ! [[ "$pass" =~ [@#$%*+\-=] ]]; then
        echo "La contraseña es debil, debe contener al menos un caracter especial"
        return
    fi

    echo "La contraseña es valida"
    
}

pass="$1"
validar "$pass"