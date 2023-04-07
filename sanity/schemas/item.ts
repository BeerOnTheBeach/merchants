export default {
    name: 'item',
    type: 'document',
    title: 'Item',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Preis'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Beschreibung'
        },
        {
            title: 'Bild',
            name: 'image',
            type: 'image',
        }
    ]
}