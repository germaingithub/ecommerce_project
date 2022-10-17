export default {
    name: 'product',
    title: 'Product',
    type:'document',
    fields: [
        {
            name: 'image',
            title:'Image',
            type:'array',
            of:[{type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            tittle: 'Name',
            type: 'string',
        },
        {
            name:'slug',
            title: 'Slug',
            type:'slug',
            options: {
                source:'name',
                maxlengh:90,
            }
        },
        {
            name:'price',
            title: 'Price',
            type:'number', 
        },
        {
            name:'details',
            title: 'Details',
            type:'string',
        }
    ]
}