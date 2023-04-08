export default {
    name: 'location',
    type: 'document',
    title: 'Location',
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
            name: 'merchants',
            title: 'Merchants',
            type: 'array',
            of: [{
                    name: 'merchant',
                    title: 'Merchant',
                    type: 'reference',
                    to: [{ type: 'merchant' }],
            }],
        }
    ]
}