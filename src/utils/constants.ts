// icons
import { FiPhone } from 'react-icons/fi'
import { MdComputer, MdOutlineMail } from 'react-icons/md'
import { FaMobileScreenButton, FaUbuntu } from 'react-icons/fa6'
// my importations
import { REALISATION_TYPE } from '../redux/other/other.type'

export const workSkills = [
    { icon: MdComputer, name: 'Développement Web', description: `Je conçois et développe des sites web modernes, performants et responsives en utilisant des technologies de pointe comme React, Next.js, TailwindCSS, et Node.js. Mon objectif est d'offrir des solutions optimisées, sécurisées et adaptées aux besoins des utilisateurs. Que ce soit pour un site vitrine ou une plateforme e-commerce, je mets un point d'honneur à garantir une expérience utilisateur fluide et intuitive.` },
    { icon: FaMobileScreenButton, name: `Développement mobile`, description: `Je conçois et développe des applications mobiles modernes, intuitives et performantes, adaptées aux besoins des utilisateurs. Mon objectif est de proposer des solutions ergonomiques, sécurisées et optimisées pour offrir une expérience fluide sur Android et iOS. De la conception à la mise en ligne, j’accorde une attention particulière à la qualité, à la stabilité et à l’évolutivité des applications, en intégrant les meilleures pratiques du développement mobile.` },
    { icon: FaUbuntu, name: `Installation et Configuration d’OS`, description: `J’assure l’installation, la configuration et l’optimisation des systèmes d’exploitation (Windows, Linux) en fonction des besoins spécifiques des utilisateurs. Que ce soit pour une installation propre, la mise à jour de drivers, l’optimisation des performances ou la sécurisation du système, j’offre un service personnalisé pour garantir un environnement stable et performant.` },
]

export const contactInfos = [
    { icon: FiPhone, name: 'Téléphone', description1: '+223 73 03 07 32', description2: '+223 67 62 35 93' },
    { icon: MdOutlineMail, name: 'Email', description1: 'cheickoumardiabate300@gmail.com' },
]

export const educations = [
    { year: '2020-2021', name: 'Université Mouloud Mammeri de Tizi Ouzou', role: `Master: Ingénierie des Systèmes d'Information`, link: 'https://www.ummto.dz/' },
    { year: '2016-2019', name: 'Université Mouloud Mammeri de Tizi Ouzou', role: `Licence: Systèmes Informatiques`, link: 'https://www.ummto.dz/' },
]

export const experiences = [
    { year: '06/2022 – 03/2025', name: 'Logineo', role: `Développeur Full-Stack Web / Mobile`, link: 'https://logineo.com/' },
    // { year: '06/2022 – 05/2023', name: 'Logineo', role: `Stage: Développeur Full-Stack Web / Mobile`, link: 'https://logineo.com/' },
]

export const certifications = [
    { name: 'HTML', link: 'https://www.sololearn.com/certificates/CT-JUDCPPEQ' },
    { name: 'CSS', link: 'https://www.sololearn.com/certificates/CT-SECYLKXW' },
    { name: 'JavaScript', link: 'https://www.sololearn.com/en/certificates/CT-77191NF5' },
    { name: 'SQL', link: 'https://www.sololearn.com/en/certificates/CT-AZIPNT5R' },
    { name: 'React + Redux', link: 'https://www.sololearn.com/en/certificates/CT-S7BLIRPA' },
]

export const competences = [
    { name: 'Pascal, Java, SQL, PHP, JavaScript, TypeScript' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Sass' },
    { name: 'WordPress' },
    { name: 'BootStrap, Material-UI, TailwindCss' },
    { name: 'NodeJS, ExpressJS, NestJS, Prisma, Swagger' },
    { name: 'ReactJS, NextJS, React Native, Redux, Angular' },
    { name: 'MySQL, MongoDB, Firebase, PostgreSQL' },
    { name: 'Git/GitHub, Docker' },
    { name: 'Windows, Linux' },
    { name: 'MERISE, UML' },
]

export const comportements = [
    { name: 'Capacité à travailler en équipe' },
    { name: 'Adaptabilité et apprentissage rapide' },
    { name: 'Communication efficace' },
    { name: 'Créativité et esprit de résolution de problèmes' },
    { name: 'Gestion du temps et organisation' },
    { name: 'Autonomie et sens des responsabilités' },
]

export const realisations: REALISATION_TYPE[] = [
    {
        type: 'web', title: 'Marvel Quiz',
        description: `Mon tout premier projet en React, encadré par le formateur en ligne DONKEY GEEK.`,
        technologies: ['ReactJS', 'Firebase', 'JavaScript'],
        images: [
            '/images/marvel/1.png',
            '/images/marvel/2.png',
            '/images/marvel/3.png',
        ]
    },
    {
        type: 'web', title: 'Imitation facebook',
        description: `Après mon premier projet encadré, j'ai voulu recréer quelques fonctionnalités de Facebook.`,
        technologies: ['ReactJS', 'MongoDB', 'Redux', 'NodeJS', 'ExpressJS', 'Socket IO', 'Multer', 'JavaScript'],
        images: [
            '/images/imi-fb/1.png',
            '/images/imi-fb/2.png',
            '/images/imi-fb/3.png',
            '/images/imi-fb/4.png',
        ]
    },
    {
        type: 'web', title: 'Jigiasso',
        description: 'Plateforme de financement participatif dédiée aux associations et ONGs',
        technologies: ['WordPress'],
        images: [
            '/images/jigiasso/1.png',
            '/images/jigiasso/2.png',
            '/images/jigiasso/3.png',
            '/images/jigiasso/4.png',
        ]
    },
    {
        type: 'web', title: 'Gama-afrique',
        description: `Site vitrine pour une Société par Actions Simplifiées, SAS, d’Expertise Comptable et de Commissariat aux Comptes inscrite à l’Ordre National des Experts Comptables et Comptables Agréés, ONECCA Mali.`,
        technologies: ['WordPress'],
        images: [
            '/images/gama/1.png',
            '/images/gama/2.png',
            '/images/gama/3.png',
            '/images/gama/4.png',
            '/images/gama/5.png',
        ]
    },
    {
        type: 'web', title: 'backoffice-infoTox',
        description: `Gestionnaire de l'application mobile infoToxic`,
        technologies: ['ReactJS', 'ViteJs', 'MySQL', 'Docker', 'Redux', 'NodeJS', 'ExpressJS', 'Minio', 'SCSS'],
        images: [
            '/images/infoTox/backoffice/1.png',
            '/images/infoTox/backoffice/2.png',
        ]
    },
    {
        type: 'mobile', title: 'mobile-infoTox',
        description: `InfoToxic est une application de partage d'informations sur ce sujet, provenant de n'importe où.`,
        technologies: ['React Native', 'Redux', 'TypeScript'],
        images: [
            '/images/infoTox/mobile/1.jpeg',
            '/images/infoTox/mobile/2.jpeg',
            '/images/infoTox/mobile/3.jpeg',
            '/images/infoTox/mobile/4.jpeg',
            '/images/infoTox/mobile/5.jpeg',
        ]
    },
    {
        type: 'mobile', title: 'mobile-empay',
        description: `Empay est une application qui permet de recharger sa carte UBA grâce à Vitepay.`,
        technologies: ['React Native', 'Redux', 'TypeScript'],
        images: [
            '/images/empay/mobile/1.jpeg',
            '/images/empay/mobile/2.jpeg',
            '/images/empay/mobile/3.jpeg',
        ]
    },
    {
        type: 'mobile', title: 'mobile-daneela',
        description: `Daneela est une application qui permet de lister les sites de vente en ligne en collaboration avec LOGINEO.`,
        technologies: ['React Native', 'Redux', 'TypeScript'],
        images: [
            '/images/daneela/mobile/1.jpeg',
            '/images/daneela/mobile/2.jpeg',
        ]
    },
    {
        type: 'mobile', title: 'leBamakoi',
        description: `LeBamakoi est une application qui permet de récupérer les informations provenant des sites proposant un flux RSS au Mali.`,
        technologies: ['React Native', 'Redux', 'TypeScript'],
        images: [
            '/images/leBamakoi/1.jpeg',
            '/images/leBamakoi/2.jpeg',
            '/images/leBamakoi/3.jpeg',
            '/images/leBamakoi/4.jpeg',
        ]
    },
]