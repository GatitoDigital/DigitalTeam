        // Función para copiar texto al portapapeles
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar texto: ', err);
            });
        }

        // Función para obtener el nombre del usuario y actualizar el botón de saludo
        function obtenerNombreUsuario() {
            // Obtener el último nombre del almacenamiento local
            const ultimoNombre = localStorage.getItem('ultimoNombre');
            // Establecer el texto del botón de saludo
            document.getElementById('botondesaludo').querySelector('span').textContent = ultimoNombre || '';

            // Solicitar el nombre del usuario
            const nombre = prompt("Por favor, ingrese su nombre:", ultimoNombre || '');
            // Si se proporciona un nombre, almacenarlo en el almacenamiento local y copiar al portapapeles
            if (nombre && nombre.trim() !== '') {
                localStorage.setItem('ultimoNombre', nombre);
                document.getElementById('botondesaludo').querySelector('span').textContent = nombre;
                const ahora = new Date();
                const hora = ahora.getHours();
                let textoSaludo;
                if (hora < 13) {
                    textoSaludo = `Buenos días, mi nombre es ${nombre}; ¿En qué puedo ayudarte?`;
                } else {
                    textoSaludo = `Buenas tardes, mi nombre es ${nombre}; ¿En qué puedo ayudarte?`;
                }
                copyToClipboard(textoSaludo);
            }
        }
		

        // Evento clic del botón de saludo
        document.getElementById('botondesaludo').addEventListener('click', obtenerNombreUsuario);

    function copyToClipboard3() {
    var copyText3 = document.getElementById("aguarde").value;
    navigator.clipboard.writeText(copyText3).then(() => {
    });
    }

    function copyToClipboard4() {
    var copyText4 = document.getElementById("fin_consulta").value;
    navigator.clipboard.writeText(copyText4).then(() => {
    });
    }

    function copyToClipboard5() {
    var copyText5 = document.getElementById("despedida").value;
    navigator.clipboard.writeText(copyText5).then(() => {
    });
    }

    function copyToClipboard6() {
    var copyText6 = document.getElementById("despedida1").value;
    navigator.clipboard.writeText(copyText6).then(() => {
    });
    }

    function copyToClipboard7() {
    var copyText7 = document.getElementById("fuera_competencias").value;
    navigator.clipboard.writeText(copyText7).then(() => {
    });
    }

    function copyToClipboard8() {
    var copyText8 = document.getElementById("fecha_cobro").value;
    navigator.clipboard.writeText(copyText8).then(() => {
    });
    }

    function copyToClipboard9() {
    var copyText9 = document.getElementById("no_mail_aprobado").value;
    navigator.clipboard.writeText(copyText9).then(() => {
    });
    }

    function copyToClipboard10() {
    var copyText10 = document.getElementById("duplicados").value;
    navigator.clipboard.writeText(copyText10).then(() => {
    });
    }

    function copyToClipboard11() {
    var copyText11 = document.getElementById("rendir").value;
    navigator.clipboard.writeText(copyText11).then(() => {
    });
    }

    function copyToClipboard12() {
    var copyText12 = document.getElementById("informarnuevotextoaqui").value;
    navigator.clipboard.writeText(copyText12).then(() => {
    });
    }

    function copyToClipboard13() {
    var copyText13 = document.getElementById("presentarse_entrerios").value;
    navigator.clipboard.writeText(copyText13).then(() => {
    });
    }

    function copyToClipboard14() {
    var copyText14 = document.getElementById("consultas_reclamos").value;
    navigator.clipboard.writeText(copyText14).then(() => {
    });
    }

    function copyToClipboard15() {
    var copyText15 = document.getElementById("informarnuevotextoaqui2").value;
    navigator.clipboard.writeText(copyText15).then(() => {
    });
    }

    function copyToClipboard16() {
    var copyText16 = document.getElementById("tramite_curso").value;
    navigator.clipboard.writeText(copyText16).then(() => {
    });
    }

    function copyToClipboard17() {
    var copyText17 = document.getElementById("presentar_recibo").value;
    navigator.clipboard.writeText(copyText17).then(() => {
    });
    }

    function copyToClipboard18() {
    var copyText18 = document.getElementById("instructivo_boti").value;
    navigator.clipboard.writeText(copyText18).then(() => {
    });
    }

    function copyToClipboard19() {
    var copyText19 = document.getElementById("habitacional_quees").value;
    navigator.clipboard.writeText(copyText19).then(() => {
    });
    }

    function copyToClipboard20() {
    var copyText20 = document.getElementById("como_donde").value;
    navigator.clipboard.writeText(copyText20).then(() => {
    });
    }

    function copyToClipboard21() {
    var copyText21 = document.getElementById("cursos_obligatorios").value;
    navigator.clipboard.writeText(copyText21).then(() => {
    });
    }

        function copyToClipboard211() {
    var copyText211 = document.getElementById("datos_pad").value;
    navigator.clipboard.writeText(copyText211).then(() => {
    });
    }

        function copyToClipboard212() {
    var copyText212 = document.getElementById("datos_pad2").value;
    navigator.clipboard.writeText(copyText212).then(() => {
    });
    }

    function copyToClipboard22() {
    var copyText22 = document.getElementById("t_social").value;
    navigator.clipboard.writeText(copyText22).then(() => {
    });
    }

    function copyToClipboard23() {
    var copyText23 = document.getElementById("cmo").value;
    navigator.clipboard.writeText(copyText23).then(() => {
    });
    }

    function copyToClipboard24() {
    var copyText24 = document.getElementById("tarjeta_cabal").value;
    navigator.clipboard.writeText(copyText24).then(() => {
    });
    }

    function copyToClipboard25() {
    var copyText25 = document.getElementById("tarjeta_visa").value;
    navigator.clipboard.writeText(copyText25).then(() => {
    });
    }

    function copyToClipboard26() {
    var copyText26 = document.getElementById("dir_ts").value;
    navigator.clipboard.writeText(copyText26).then(() => {
    });
    }

    function copyToClipboard27() {
    var copyText27 = document.getElementById("dir_cp").value;
    navigator.clipboard.writeText(copyText27).then(() => {
    });
    }

    function copyToClipboard28() {
    var copyText28 = document.getElementById("dir_nf").value;
    navigator.clipboard.writeText(copyText28).then(() => {
    });
    }

    function copyToClipboard29() {
    var copyText29 = document.getElementById("dir_637").value;
    navigator.clipboard.writeText(copyText29).then(() => {
    });
    }

    function copyToClipboard30() {
    var copyText30 = document.getElementById("dir_vc").value;
    navigator.clipboard.writeText(copyText30).then(() => {
    });
    }
    function copyToClipboard31() {
    var copyText31 = document.getElementById("consultas_cp1").value;
    navigator.clipboard.writeText(copyText31).then(() => {
    });
    }

    function copyToClipboard32() {
    var copyText32 = document.getElementById("no_pagos").value;
    navigator.clipboard.writeText(copyText32).then(() => {
    });
    }
	
    function copyToClipboard33() {
    var copyText32 = document.getElementById("desalojoboti").value;
    navigator.clipboard.writeText(copyText32).then(() => {
    });
    }