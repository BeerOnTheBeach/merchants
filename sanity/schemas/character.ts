export default {
    name: 'character',
    type: 'document',
    title: 'Characters',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            title: 'Bild',
            name: 'image',
            type: 'image',
        },
        {
            name: 'money',
            title: 'Geld',
            type: 'number'
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
                name: 'item',
                title: 'Item',
                type: 'reference',
                to: [{ type: 'item' }],
            }],
        },
        {
            title: 'Aktiv',
            name: 'active',
            type: 'boolean',
        },
    ]
}