import moment from 'moment'
import mahmut from './mahmut_cuadrado.jpeg'
import milena from './milena-adamis-flyer.jpeg'
import thedrop from './thedropflyer.jpeg'
import aura from './aura-2104-260395-min.jpg'
import nicomoreno from './nicomoreno.jpg'
import pfirter from './pfirter.jpg'
import magdalena from './magdalena-cuadrado.png'
import victoria_engel from './victoria-engel.png'

const hoy = moment()
const formato = 'DD / MM / YYYY'

export const events = [
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
        finished: hoy.format(formato) > moment('05-31-2024').format(formato),

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
        link: '',
        lineUp: ['VICTORIA ENGEL', 'More TBA'],
        squareImage: victoria_engel,
        images: [],
        finished: hoy.format(formato) > moment('06-20-2024').format(formato),

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
        finished: hoy.format(formato) > moment('11-05-2024').format(formato),

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