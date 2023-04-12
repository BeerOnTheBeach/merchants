export default {
    name: 'currency',
    type: 'document',
    title: 'Currency',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'factor',
            type: 'number',
            title: 'Faktor'
        },
        {
            name: 'currency_higher',
            title: 'Übergeordnete Geldeinheit',
            type: 'reference',
            to: [{ type: 'currency' }],
        },
        {
            title: 'Icon',
            name: 'image',
            type: 'image',
        }
    ]
}