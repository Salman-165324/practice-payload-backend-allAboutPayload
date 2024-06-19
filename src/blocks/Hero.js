export const Hero = {
    slug: 'hero', 
    labels: {
        singular: "Hero Block", 
        plurals: "Hero Blocks", 
    }, 
    fields: [
        {
            name: 'Heading', 
            label: 'Heading', 
            type: 'text',
        },
        {
            name: 'text', 
            label: 'Text', 
            type: 'textarea',
        }, 
        {
            name: 'backgroundImage', 
            label: 'Background Image', 
            type: 'upload', 
            relationTo: 'media',
        }
        
    ]

}