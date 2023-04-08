export default {
    name: 'merchant',
    type: 'document',
    title: 'Merchants',
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
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
                    name: 'item',
                    title: 'Item',
                    type: 'reference',
                    to: [{ type: 'item' }],
            }],
        }
    ]
}