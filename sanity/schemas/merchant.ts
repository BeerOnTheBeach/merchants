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
            name: 'itemsRef',
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