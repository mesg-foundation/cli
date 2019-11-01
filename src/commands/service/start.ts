import {flags} from '@oclif/command'
import {RunnerCreateOutputs} from 'mesg-js/lib/api'
import * as base58 from 'mesg-js/lib/util/base58'

import {WithCredential as Command} from '../../credential-command'
import serviceResolver from '../../utils/service-resolver'

export default class ServiceStart extends Command {
  static description = 'Start a service by creating a new runner'

  static flags = {
    ...Command.flags,
    env: flags.string({
      description: 'Set environment variables',
      multiple: true,
      helpValue: 'FOO=BAR'
    })
  }

  static args = [{
    name: 'SERVICE_HASH',
    required: true,
  }]

  async run(): RunnerCreateOutputs {
    const {args, flags} = this.parse(ServiceStart)
    const credential = await this.getCredential()
    this.spinner.start('Start runner')
    const serviceHash = await serviceResolver(this.api, args.SERVICE_HASH)
    const runner = await this.api.runner.create({
      serviceHash,
      env: flags.env
    }, credential)
    if (!runner.hash) throw new Error('invalid runner')
    this.spinner.stop(base58.encode(runner.hash))
    return runner
  }
}
