import { fechas } from './eventsFechas'
import moment from 'moment'
import mahmut from './mahmut_cuadrado.jpeg'
import milena from './milena-adamis-flyer.jpeg'
import thedrop from './thedropflyer.jpeg'
import aura from './aura-2104-260395-min.jpg'
import nicomoreno from './nicomoreno.jpg'
import pfirter from './pfirter.jpg'
import magdalena from './magdalena-final.png'
import victoria_engel from './victoria-engel.png'
import moeaike from './MOEAIKE-cuadrado.png'
import arcanafestival from './arcanafestival-cuadrado.jpg'
import arcanaexperience from './arcanaexperience-cuadrado.jpg'
import julietfox from './julietfox-cuadrado.png'
import ezeramires from './ezeramires-cuadrado.png'
import sidneycharles from './sidneycharles-cuadrado.jpg'
import konstantin from './konstantin-cuadrado.png'


const hoy = moment()
const formato = 'DD / MM / YYYY'
const formatoDia = 'DD'
const formatoMes = 'MM'
const formatoAnio = 'YYYY'

export const events = [
    {
        id: 15,
        title: 'MOEAIKE',
        day: 'Viernes',
        date: moment('08-30-2024').format(formato),
        timeStart: '22:00',
        timeFinish: '05:00',
        producedBy: ['HAND'],
        location: 'Cima',
        link: 'https://www.passline.com/eventos/hand-producciones-3008-moeaike-italia/tomas-ferro-485400',
        lineUp: ['MOEAIKE', 'Terranova B2B Marcell, Gero Cherubini'],
        squareImage: moeaike,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('08-30-2024').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('08-30-2024').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('08-30-2024').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 14,
        title: 'ARCANA FESTIVAL (Día 1)',
        day: 'Viernes',
        date: moment('02-28-2025').format(formato),
        timeStart: '00:00',
        timeFinish: '00:00',
        producedBy: ['ARCANA'],
        location: 'Lomas del Malbec',
        link: 'https://venti.com.ar/evento/arcana-festival-febrero-2025-lomas-del-malbec/tomasferr',
        lineUp: ['', ''],
        squareImage: arcanafestival,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('02-28-2025').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('02-28-2025').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('02-28-2025').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 14,
        title: 'ARCANA FESTIVAL (Día 2)',
        day: 'Sábado',
        date: moment('03-01-2025').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['ARCANA'],
        location: 'Lomas del Malbec',
        link: 'https://venti.com.ar/evento/arcana-festival-febrero-2025-lomas-del-malbec/tomasferr',
        lineUp: ['MAGDALENA SOLOMUN', 'More TBA'],
        squareImage: arcanafestival,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('03-01-2025').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('03-01-2025').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('03-01-2025').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 13,
        title: 'ARCANA EXPERIENCE',
        day: 'Sábado',
        date: moment('12-07-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['ARCANA'],
        location: 'Termas de Cacheuta',
        link: 'https://venti.com.ar/evento/arcana-experience-cacheuta-7-12/tomasferr',
        lineUp: ['MAZ B2B ANTDOT', 'Juanchi Baez B2B Terranova', 'Jason Mind B2B Seto Paramo'],
        squareImage: arcanaexperience,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('12-07-2024').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('12-07-2024').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('12-07-2024').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 12,
        title: 'JULIET FOX',
        day: 'Viernes',
        date: moment('10-11-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['TODO Producciones'],
        location: 'El Andén',
        link: 'https://www.passline.com/eventos/juliet-fox-11-oct/tomas-ferro-311725',
        lineUp: ['Juliet Fox', 'More TBA'],
        squareImage: julietfox,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('10-11-2024').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('10-11-2024').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('10-11-2024').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 11,
        title: 'EZE RAMIREZ',
        day: 'Viernes',
        date: moment('09-27-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['Manglar'],
        location: 'WABI',
        link: 'https://centralticket.net/event/3338?prefer=130365',
        lineUp: ['Eze Ramirez', 'More TBA'],
        squareImage: ezeramires,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('09-27-2024').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('09-27-2024').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('09-27-2024').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 10,
        title: 'SIDNEY CHARLES',
        day: 'Viernes',
        date: moment('09-13-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['KOI CLUB'],
        location: 'Antigua Bodega Giol',
        link: 'https://wearebombo.app.link/z8Fe4u3nULb',
        lineUp: ['Sidney Charles', 'More TBA'],
        squareImage: sidneycharles,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('09-13-2024').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('09-13-2024').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('09-13-2024').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 9,
        title: 'KONSTANTIN SIBOLD',
        day: 'Viernes',
        date: moment('08-16-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['KOI CLUB'],
        location: 'Antigua Bodega Giol',
        link: 'https://wearebombo.app.link/IW8OA61nULb',
        lineUp: ['KONSTANTIN SIBOLD', 'More TBA'],
        squareImage: konstantin,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('08-16-2024').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('08-16-2024').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('08-16-2024').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },
    {
        id: 8,
        title: 'MAGDALENA',
        day: 'Viernes',
        date: moment('05-31-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['KOI CLUB'],
        location: 'Antigua Bodega Giol',
        link: 'https://www.passline.com/eventos/magdalena-solomun-club-koi/tomas-ferro-277916 ',
        lineUp: ['MAGDALENA SOLOMUN', 'More TBA'],
        squareImage: magdalena,
        images: [],
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        // finished: hoy.format(formatoMes) > moment('05-31-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia),
        finished: hoy.format(formatoAnio) > moment('05-31-2024').format(formatoAnio) 
        ? true 
        : hoy.format(formatoAnio) < moment('05-31-2024').format(formatoAnio) 
        ? false 
        // : true
        : hoy.format(formatoMes) > moment('05-31-2023').format(formatoMes) 
        // : hoy.format(formatoDia) > moment('05-31-2024').format(formatoDia)

        // LISTO EL CHEQUEO DEL AÑO. EN CASO DE SER EL AÑO QUE VIENE, ESTA ACTIVO. SI FUE EL AÑO PASADO, FINALIZADO. SI ES ESTE AÑO, CHEQUEA EL MES.
        // SEGUIR A PARTIR DE LA LINEA 40. LA 39 FUNCIONA. HAY QUE VER POR DONDE SEGUIR. CREO QUE SERVIRIA HACER LO MISMO QUE PARA EL AÑO. CHEQUEAR HACIA
        // EL AÑO QUE VIENE, EL ANTERIOR Y EL ACTUAL, PARA LUEGO IR AL DIA.
    },

    {
        id: 7,
        title: 'VICTORIA ENGEL',
        day: 'Viernes',
        date: moment('06-20-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['MANGLAR'],
        location: 'WABI',
        link: 'https://centralticket.net/event/2669?prefer=130365',
        lineUp: ['VICTORIA ENGEL', 'More TBA'],
        squareImage: victoria_engel,
        images: [],
        finished: hoy.format(formatoMes) > moment('06-20-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('06-20-2024').format(formatoDia),
        // finished: hoy.format(formatoAnio) > moment('06-20-2025').format(formatoAnio) ? true 
        // : hoy.format(formatoMes) > moment('06-20-2025').format(formatoMes) 
        // ? true 
        // : hoy.format(formatoDia) > moment('06-20-2025').format(formatoDia),
    },

    {
        id: 6,
        title: 'PFIRTER',
        day: 'Sábado',
        date: moment('05-11-2024').format(formato),
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['TEIKO WAREHOUSE'],
        location: 'OSA CLUB',
        link: 'https://www.passline.com/eventos/teiko-warehouse/tomas-ferro-401342',
        lineUp: ['Pfirter', 'Gresil', 'O-YOKAI'],
        squareImage: pfirter,
        images: [],
        // finished: hoy.format(formato) > moment('11-05-2024').format(formato),
        finished: hoy.format(formatoMes) > moment('11-05-2024').format(formatoMes) ? true : hoy.format(formatoDia) > moment('11-05-2024').format(formatoDia),


    },
    {
        id: 4,
        title: 'U S H N U',
        day: 'Domingo',
        date: '21/04/2024',
        timeStart: '18:00',
        timeFinish: '02:00',
        producedBy: ['Aura Sunsets'],
        producerInstagram: '',
        location: 'Cima Bar, Chacras de Coria',
        link: 'https://www.passline.com/eventos/aura-2104/tomas-ferro-456667',
        lineUp: ['U S H N U', 'KOMPAKT'],
        squareImage: aura,
        images: [],
        finished: true,

    },
    {
        id: 5,
        title: 'NICO MORENO',
        day: 'Sábado',
        date: '04/05/2024',
        timeStart: '23:00',
        timeFinish: '06:00',
        producedBy: ['KOI'],
        location: 'Arena Maipú Stadium',
        link: 'https://eventos.tuentrada.com/list/partnerAdvantage?code=nmaferro',
        lineUp: ['Nico Moreno', 'DIST', 'Rêvasser'],
        squareImage: nicomoreno,
        images: [],
        finished: true,

    },

    {
        id: 1,
        title: 'Mahmut Orhan',
        day: 'Viernes',
        date: '29/03/2024',
        timeStart: '19:00',
        timeFinish: '00:00',
        producedBy: ['Koi club', 'BlackJagger'],
        location: 'Bodega Tierras Altas',
        link: 'https://www.passline.com/eventos/mahmut-orhan-koi-club-x-jagger-sunset-tierras-altas/tomas-ferro-277916',
        lineUp: ['Mahmut Orhan', 'Twenty Six'],
        squareImage: mahmut,
        images: [],
        finished: true,
    },
    {
        id: 2,
        title: 'Milena Adamis',
        day: 'Sábado',
        date: '16/03/2024',
        timeStart: '17:00',
        timeFinish: '06:00',
        producedBy: ['Manglar'],
        location: 'Alma Hydra Lodge',
        link: null,
        lineUp: ['Milena Adamis', 'Ludmila Di Pasquale', 'IGCIØ', 'Baker', 'Igna Farrés', 'Proler'],
        squareImage: milena,
        images: [],
        finished: true,
        
    },
    {
        id: 3,
        title: 'The Drop Festival',
        day: 'Sábado',
        date: '02/03/2024',
        timeStart: '19:00',
        timeFinish: '01:00',
        producedBy: ['The Drop'],
        location: 'Pampa Meet Market',
        link: 'https://www.entradaweb.com.ar/evento/77f6ef34/step/1?v=VkVORC01ZWU4NTg4OSYwJjA=',
        lineUp: ['Yahir Abrahan', 'Blex'],
        squareImage: thedrop,
        images: [],
        finished: true,

    },
    
    
]