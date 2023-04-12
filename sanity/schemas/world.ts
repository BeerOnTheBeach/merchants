export default {
    name: 'world',
    type: 'document',
    title: 'World',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },        {
            name: 'description',
            type: 'text',
            title: 'Beschreibung'
        },
        {
            name: 'locations',
            title: 'Locations',
            type: 'array',
            of: [{
                name: 'location',
                title: 'Location',
                type: 'reference',
                to: [{ type: 'location' }],
            }],
        },
        {
            title: 'Bild',
            name: 'image',
            type: 'image',
        },
        {
            name: 'characters',
            title: 'Characters',
            type: 'array',
            of: [{
                name: 'character',
                title: 'Characters',
                type: 'reference',
                to: [{ type: 'character' }],
            }],
        },
    ]
}