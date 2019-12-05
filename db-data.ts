export const REPOSITORIES: any = {

    1: {
        id: 1,
        titles: {
            description: 'Serverless Typescript and ReactJs, with Firebase Example',
            longDescription: 'Serveless Typescript and ReactJs with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions'
        },
        iconUrl: 'https://i.imgur.com/BGKMUhk.png',
        categories: ['INTERMEDIATE'],
        seqNo: 1,
        url: 'serverless-typescript-reactjs'
    },
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

