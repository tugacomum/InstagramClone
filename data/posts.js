import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes: 1250,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'És um merdas, n vales um caralho.',
            },
            {
                user: 'brunoo_mfp',
                comment: 'És um merdas, n vales um caralho.',
            },
            {
                user: 'o_nigga',
                comment: 'És um merdas, n vales um caralho.',
            },
        ],
    },
    {
        imageUrl: 'https://blog.publicidade.uol.com.br/wp-content/uploads/2018/11/UOL-AD_LAB-Fortnite-1024x576.jpg',
        user: USERS[1].user,
        likes: 1250,
        caption: 'Pilinhas.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'És um merdas, n vales um caralho.',
            },
            {
                user: 'yah_mo_preto',
                comment: 'És um merdas, n vales um caralho.',
            },
            {
                user: 'o_nigga',
                comment: 'És um merdas, n vales um caralho.',
            },
        ],
    },
];