export default {
    name: 'location',
    type: 'document',
    title: 'Locations',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Beschreibung',
            type: 'text'
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
        },
        {
            title: 'Aktiv',
            name: 'active',
            type: 'boolean',
        },
    ]
}