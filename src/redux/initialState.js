const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article 1 title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date ('02-02-2022'),
            author: 'John Doe',
            category: 'sport'
        },
        {
            id: '2',
            title: 'Article 2 title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date ('02-02-2022'),
            author: 'Jane Doe',
            category: 'politics'
        },
        {
            id: '3',
            title: 'Article 3 title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            category: 'social'
        },
    ],

    categories: 
        [
            { id: 1, name: 'social' },
            { id: 2, name: 'sport' },
            { id: 3, name: 'politics' },
        ]
};

export default initialState