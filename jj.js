//const fechaNacimiento = document.getElementById("fechaNacimiento");

const año = document.getElementById("año");
const mes = document.getElementById("mes");
const dias = document.getElementById("dias");

const calcularAño = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let año = anoActual - 2022;
    if (mesActual < mesNacimiento) {
        año--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            año--;
        }
    }
    return año;    
};

const calcularMes = (fechaNacimiento) => {
    const fechaActual = new Date();
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let mes = mesActual - 01;
    if (mesActual < mesNacimiento) {
        mes--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            mes--;
        }
    }
    return mes;
};

const calcularDia = (fechaNacimiento) => {
    const fechaActual = new Date();
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());
    
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let dias = diaActual - 01;
    if (mesActual < mesNacimiento) {
        dias--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            dias--;
        }
    }
    return dias;
};
año.innerText = `${calcularAño(this.value)} `;
mes.innerText = `${calcularMes(this.value)} `;
dias.innerText = `${calcularDia(this.value)} `;