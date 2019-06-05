import Command from '../../service-command'

export default class ServiceDeployNew extends Command {
  static description = 'Stop a service instance'

  static flags = {
    ...Command.flags,
  }

  static args = [{
    name: 'INSTANCE',
    required: true,
    description: 'Service instance\'s hash'
  }]

  static hidden = true

  async run() {
    const {args} = this.parse(ServiceDeployNew)
    this.spinner.start('Stop service')
    return new Promise((resolve, reject) => {
      this.instanceAPI.Delete({hash: args.INSTANCE}, err => {
        if (err) {
          reject(err)
          this.spinner.stop(err)
          return
        }
        this.spinner.stop()
        resolve()
      })
    })
  }
}
