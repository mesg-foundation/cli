import {WithCredentialPassphrase as Command} from '../../credential-command'

export default class AccountCreate extends Command {
  static description = 'Create an account'

  static flags = {
    ...Command.flags,
  }

  static args = [{
    name: 'ACCOUNT_NAME',
    required: true
  }]

  async run() {
    const {args} = this.parse(AccountCreate)
    const passphrase = await this.getCredentialPassphrase()
    this.spinner.start('Creating account')
    const account = await this.api.account.create({
      name: args.ACCOUNT_NAME,
      password: passphrase,
    })
    this.spinner.stop(account.address || '')
    this.warn('Make sure to backup the mnemonic:')
    this.log(account.mnemonic || '')
    return account
  }
}
