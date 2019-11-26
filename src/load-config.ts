import * as core from '@actions/core'

export interface Config {
  dummy_input: string
}

export const loadConfig = (): Config => {
  const dummy_input = core.getInput('dummy_input')
  return { dummy_input }
}
