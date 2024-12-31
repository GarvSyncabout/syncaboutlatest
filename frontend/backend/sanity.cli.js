import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5ri1ym64',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
