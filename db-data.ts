export const REPOSITORIES: any = {

    1: {
        id: 1,
        titles: {
            description: 'papayas',
            longDescription: 'are tasty and have seeds'
        },
        iconUrl: 'https://i.imgur.com/gYUVIBN.jpg',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 0,
        url: 'url-placers-here'
    },

    2: {
        id: 2,
        titles: {
            description: 'pineapples',
            longDescription: 'pineapples are spikey fruit, pronounced pen-apple'
        },
        iconUrl: 'https://i.imgur.com/sXBEQKx.jpg',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 2,
        url: 'url-placers-here'
    },

    3: {
        id: 3,
        titles: {
            description: 'strawberries',
            longDescription: 'strawberries are red and sweet things'
        },
        iconUrl: 'https://i.imgur.com/S8zCxmi.jpg',
        courseListIcon: 'https://i.imgur.com/S8zCxmi.jpg',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 3,
        url: 'url-placers-here'
    },

    4: {
        id: 4,
        titles: {
            description: 'green grapes',
            longDescription: 'green grapes are good with salt.'
        },
        iconUrl: 'https://i.imgur.com/f0B6O9y.jpg',
        courseListIcon: 'https://i.imgur.com/f0B6O9y.jpgg',
        categories: ['BEGINNER', 'INTERMEDIATE'],
        lessonsCount: 10,
        seqNo: 4,
        url: 'url-placers-here'
    },

    5: {
        id: 5,
        titles: {
            description: 'bananas',
            longDescription: 'bananas aka b-a-n-a-n-a-s'
        },
        iconUrl: 'https://i.imgur.com/iGkke3p.jpg',
        courseListIcon: 'https://i.imgur.com/iGkke3p.jpg',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 5,
        url: 'url-placers-here'
    },

    6: {
        id: 6,
        titles: {
            description: 'kiwi',
            longDescription: 'kiwis are fuzzy fruits.'
        },
        iconUrl: 'https://i.imgur.com/p1GyaV9.jpg',
        courseListIcon: 'https://i.imgur.com/p1GyaV9.jpg',
        categories: ['ADVANCED'],
        lessonsCount: 11,
        seqNo: 6,
        url: 'url-placers-here'
    },

    7: {
        id: 7,
        titles: {
            description: 'apples',
            longDescription: 'apples are shiny.'
        },
        iconUrl: 'https://i.imgur.com/jnCJL9l.jpg',
        courseListIcon: 'https://i.imgur.com/jnCJL9l.jpg',
        categories: ['ADVANCED'],
        lessonsCount: 8,
        seqNo: 7,
        url: 'url-placers-here'
    },

    8: {
        id: 8,
        titles: {
            description: 'lychee',
            longDescription: 'lychee fruit is sweet are kind of like grapes'
        },
        iconUrl: 'https://i.imgur.com/Y8e6rnJ.jpg',
        courseListIcon: 'https://i.imgur.com/Y8e6rnJ.jpg',
        categories: ['INTERMEDIATE', 'ADVANCED'],
        seqNo: 8,
        url: 'url-placers-here'
    },

    9: {
        id: 9,
        titles: {
            description: 'pomegranate',
            longDescription: 'pomegranates are used in baking, cooking, juice blends, meal garnishes, smoothies, and alcoholic beverages, such as cocktails and wine.'
        },
        iconUrl: 'https://i.imgur.com/9LHRLOA.jpg',
        courseListIcon: 'https://i.imgur.com/9LHRLOA.jpg',
        categories: ['BEGINNER'],
        seqNo: 9,
        url: 'url-placers-here'
    }

};

export const LESSONS = {

    1: {
        id: 1,
        description: 'Firebase Storage In Detail',
        'seqNo': 3,
        repositoryId: 1
    }


};


export function findRepositoriesById(repositoryId: number) {
    return REPOSITORIES[repositoryId];
}

export function findLessonsForRepositories(repositoryId: number) {
    return Object.values(LESSONS).filter(lesson => lesson.repositoryId == repositoryId );
}

