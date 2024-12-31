import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'

export default defineConfig({
  name: 'default',
  title: 'Blog',

  projectId: '5ri1ym64',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: 'rgba',
      defaultColorList: [
        {label: 'Light', value: '#ffffff'},
        {label: 'Dark', value: '#333333'},
        {label: 'Brand', value: '#ca786d'},
        {label: 'Accent', value: '#626754'},
        {label: 'Custom...', value: 'custom'},
      ],
      enableSearch: true,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
