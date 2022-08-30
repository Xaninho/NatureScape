export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        },
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    {title: 'House', value: 'house'},
                    {title: 'Flat', value: 'flat'},
                    {title: 'Bed & Breakfast', value: 'bed-and-breakfast'},
                    {title: 'Boutique Hotel', value: 'boutique-hotel'},
                ],
                layout: 'radio'
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'propertyImage' }]
        },
        {
            name: 'pricePerNight',
            title: 'Price per Night',
            type: 'number',
        },
        {
            name: 'beds',
            title: 'Beds',
            type: 'number'
        },
        {
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100
            }
        },
        {
            name: 'id',
            title: 'ID',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'host',
            title: 'Host',
            type: 'host',
        },
        {
            name: 'reviews',
            title: 'Review',
            type: 'array',
            of: [{ type: 'review' }]
        }
    
    ]
}