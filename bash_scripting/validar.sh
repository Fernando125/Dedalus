# Escribe un script para comprobar y validar contraseñas. El objetivo es marcar las contraseñas 
# "debiles" o faciles de adivinar.
# Se introducira una contraseña de prueba en el script como parametro de la línea de comandos.
# Para ser considerada aceptable, una contraseña debe cumplir los siguientes requisitos minimos:
# ◊ Longitud mínima de 8 caracteres
# ◊ Debe contener al menos un caracter numérico
# ◊ Debe contener al menos uno de los siguientes caracteres no alfabeticos: @, #, $, %, &, *, +, -, =
# Escriba una funcion de script que determine si un argumento que se le pasa es un entero o una cadena.
# La funcion devolvera TRUE (0) si se le pasa un numero entero, y FALSE (1) si se le pasa una cadena.

#!/bin/bash

validar() {
    pass="$1"

    if [[ ${#pass} -lt 8 ]]; then
        echo "La password es debil, debe tener al menos 8 caracteres"
        return
    fi

    if ! [[ "$pass" =~ [0-9] ]]; then
        echo "La contraseña es debil, debe contener al menos un numero"
        return
    fi

    if ! [[ "$pass" =~ [@#$%&*+\-=] ]]; then
        echo "La contraseña es debil, debe contener al menos un caracter especial"
        return
    fi

    echo "La contraseña es valida"
}

pass="$1"

validar "$pass"