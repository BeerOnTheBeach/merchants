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
        }
    ]
}