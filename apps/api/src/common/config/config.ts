import type { Config } from './config.interface'

const config: Config = {
  nest: {
    port: 8000
  },
  cors: {
    enabled: true
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true
  }
}

export default (): Config => config
