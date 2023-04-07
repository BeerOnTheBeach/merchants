export default {
    name: 'merchant',
    type: 'document',
    title: 'Merchant',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{type: 'item'}]
        }
    ]
}