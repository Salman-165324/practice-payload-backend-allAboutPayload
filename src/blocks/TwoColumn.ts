import { Block } from "payload/types";

export const TwoColumn:Block = {
  slug: "twoColumn",
  labels: {
    singular: "Two Column Block",
    plural: "Two Column Blocks",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: 'text',
      label: 'Text', 
      type: 'textarea',
    },
    {
      name: "direction",
      label: "Direction",
      type: "select",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Reverse",
          value: "reverse",
        },
      ],
    },
  ],
};
