export default {
    name: 'review',
    title: 'Review',
    type: 'object',
    fields: [
        {
            name: 'reviewDescription',
            title: 'Review Description',
            type: 'string',
        },
        {
            name: 'traveller',
            title: 'Traveller',
            type: 'traveller'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'string',
            options: {
                list: [
                    {title: '1 Star', value: '1-star'},
                    {title: '2 Stars', value: '2-stars'},
                    {title: '3 Stars', value: '3-stars'},
                    {title: '4 Stars', value: '4-stars'},
                    {title: '5 Stars', value: '5-stars'},
                ]
            }
        }
    ]
}