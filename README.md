mesg-cli
=========

MESG Engine CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mesg-cli.svg)](https://npmjs.org/package/mesg-cli)
[![Downloads/week](https://img.shields.io/npm/dw/mesg-cli.svg)](https://npmjs.org/package/mesg-cli)
[![License](https://img.shields.io/npm/l/mesg-cli.svg)](https://github.com/mesg-foundation/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mesg-cli
$ mesg-cli COMMAND
running command...
$ mesg-cli (-v|--version|version)
mesg-cli/1.2.0 darwin-x64 node-v10.16.0
$ mesg-cli --help [COMMAND]
USAGE
  $ mesg-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mesg-cli account:create`](#mesg-cli-accountcreate)
* [`mesg-cli account:delete ADDRESS`](#mesg-cli-accountdelete-address)
* [`mesg-cli account:export ADDRESS`](#mesg-cli-accountexport-address)
* [`mesg-cli account:import ACCOUNT`](#mesg-cli-accountimport-account)
* [`mesg-cli account:import-private-key PRIVATE_KEY`](#mesg-cli-accountimport-private-key-private_key)
* [`mesg-cli account:list`](#mesg-cli-accountlist)
* [`mesg-cli daemon:logs`](#mesg-cli-daemonlogs)
* [`mesg-cli daemon:start`](#mesg-cli-daemonstart)
* [`mesg-cli daemon:status`](#mesg-cli-daemonstatus)
* [`mesg-cli daemon:stop`](#mesg-cli-daemonstop)
* [`mesg-cli help [COMMAND]`](#mesg-cli-help-command)
* [`mesg-cli marketplace:create-offer SID`](#mesg-cli-marketplacecreate-offer-sid)
* [`mesg-cli marketplace:publish SERVICE_PATH`](#mesg-cli-marketplacepublish-service_path)
* [`mesg-cli marketplace:purchase SID OFFER_ID`](#mesg-cli-marketplacepurchase-sid-offer_id)
* [`mesg-cli service:compile [SERVICE]`](#mesg-cli-servicecompile-service)
* [`mesg-cli service:create DEFINITION`](#mesg-cli-servicecreate-definition)
* [`mesg-cli service:delete SERVICE_HASH...`](#mesg-cli-servicedelete-service_hash)
* [`mesg-cli service:detail SERVICE_HASH`](#mesg-cli-servicedetail-service_hash)
* [`mesg-cli service:dev [SERVICE]`](#mesg-cli-servicedev-service)
* [`mesg-cli service:doc [SERVICE]`](#mesg-cli-servicedoc-service)
* [`mesg-cli service:execute INSTANCE_HASH TASK`](#mesg-cli-serviceexecute-instance_hash-task)
* [`mesg-cli service:init DIR`](#mesg-cli-serviceinit-dir)
* [`mesg-cli service:list`](#mesg-cli-servicelist)
* [`mesg-cli service:logs INSTANCE_HASH`](#mesg-cli-servicelogs-instance_hash)
* [`mesg-cli service:start SERVICE_HASH`](#mesg-cli-servicestart-service_hash)
* [`mesg-cli service:stop INSTANCE_HASH...`](#mesg-cli-servicestop-instance_hash)
* [`mesg-cli workflow:compile [WORKFLOW_FILE]`](#mesg-cli-workflowcompile-workflow_file)
* [`mesg-cli workflow:create DEFINITION`](#mesg-cli-workflowcreate-definition)
* [`mesg-cli workflow:delete WORKFLOW_HASH...`](#mesg-cli-workflowdelete-workflow_hash)
* [`mesg-cli workflow:detail WORKFLOW_HASH`](#mesg-cli-workflowdetail-workflow_hash)
* [`mesg-cli workflow:list`](#mesg-cli-workflowlist)

## `mesg-cli account:create`

Create an account

```
USAGE
  $ mesg-cli account:create

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/create.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/account/create.ts)_

## `mesg-cli account:delete ADDRESS`

Delete an account

```
USAGE
  $ mesg-cli account:delete ADDRESS

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/delete.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/account/delete.ts)_

## `mesg-cli account:export ADDRESS`

Export an existing account

```
USAGE
  $ mesg-cli account:export ADDRESS

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/export.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/account/export.ts)_

## `mesg-cli account:import ACCOUNT`

Import an account

```
USAGE
  $ mesg-cli account:import ACCOUNT

ARGUMENTS
  ACCOUNT  Account definition in JSON (could be retrieved with account:export)

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/import.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/account/import.ts)_

## `mesg-cli account:import-private-key PRIVATE_KEY`

Import an account with a private key

```
USAGE
  $ mesg-cli account:import-private-key PRIVATE_KEY

ARGUMENTS
  PRIVATE_KEY  Private key of the account

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/import-private-key.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/account/import-private-key.ts)_

## `mesg-cli account:list`

List accounts

```
USAGE
  $ mesg-cli account:list

OPTIONS
  -h, --help         show CLI help
  -p, --port=port    [default: 50052] Port to access the MESG engine
  -q, --quiet        Display only essential information
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --host=host        [default: localhost] Host to access the MESG engine
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)
```

_See code: [src/commands/account/list.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/account/list.ts)_

## `mesg-cli daemon:logs`

Show the Engine's logs

```
USAGE
  $ mesg-cli daemon:logs

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --[no-]follow    Follow logs
  --host=host      [default: localhost] Host to access the MESG engine
  --name=name      (required) [default: engine] Name of the docker service running the engine
  --tail=tail      [default: -1] Display the last N lines
```

_See code: [src/commands/daemon/logs.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/daemon/logs.ts)_

## `mesg-cli daemon:start`

Start the Engine

```
USAGE
  $ mesg-cli daemon:start

OPTIONS
  -h, --help                                       show CLI help
  -p, --port=port                                  [default: 50052] Port to access the MESG engine
  -q, --quiet                                      Display only essential information
  --host=host                                      [default: localhost] Host to access the MESG engine
  --log-force-colors                               Log force colors
  --log-format=(text|json)                         [default: text] Log format
  --log-level=(debug|info|warn|error|fatal|panic)  [default: info] Log level

  --name=name                                      (required) [default: engine] Name of the docker service running the
                                                   engine

  --version=version                                (required) [default: v0.12.1] Version of the Engine to run
```

_See code: [src/commands/daemon/start.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/daemon/start.ts)_

## `mesg-cli daemon:status`

Get the Engine's status

```
USAGE
  $ mesg-cli daemon:status

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
  --name=name      (required) [default: engine] Name of the docker service running the engine
```

_See code: [src/commands/daemon/status.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/daemon/status.ts)_

## `mesg-cli daemon:stop`

Stop the Engine

```
USAGE
  $ mesg-cli daemon:stop

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
  --name=name      (required) [default: engine] Name of the docker service running the engine
```

_See code: [src/commands/daemon/stop.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/daemon/stop.ts)_

## `mesg-cli help [COMMAND]`

display help for mesg-cli

```
USAGE
  $ mesg-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `mesg-cli marketplace:create-offer SID`

Create an offer of a service

```
USAGE
  $ mesg-cli marketplace:create-offer SID

ARGUMENTS
  SID  SID of the service

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock the account
  -p, --port=port              [default: 50052] Port to access the MESG engine
  -q, --quiet                  Display only essential information
  --duration=duration          (required) Duration (in seconds)
  --host=host                  [default: localhost] Host to access the MESG engine
  --price=price                (required) Price (in MESG tokens)
```

_See code: [src/commands/marketplace/create-offer.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/marketplace/create-offer.ts)_

## `mesg-cli marketplace:publish SERVICE_PATH`

Publish a service

```
USAGE
  $ mesg-cli marketplace:publish SERVICE_PATH

ARGUMENTS
  SERVICE_PATH  [default: ./] Path of the service

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock the account
  -p, --port=port              [default: 50052] Port to access the MESG engine
  -q, --quiet                  Display only essential information
  --host=host                  [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/marketplace/publish.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/marketplace/publish.ts)_

## `mesg-cli marketplace:purchase SID OFFER_ID`

Purchase a service

```
USAGE
  $ mesg-cli marketplace:purchase SID OFFER_ID

ARGUMENTS
  SID       ID of the service
  OFFER_ID  ID of the offer

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock the account
  -p, --port=port              [default: 50052] Port to access the MESG engine
  -q, --quiet                  Display only essential information
  --host=host                  [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/marketplace/purchase.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/marketplace/purchase.ts)_

## `mesg-cli service:compile [SERVICE]`

Compile a service and upload its source to IPFS server

```
USAGE
  $ mesg-cli service:compile [SERVICE]

ARGUMENTS
  SERVICE  [default: ./] Path or url ([https|mesg]://) of a service

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/compile.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/compile.ts)_

## `mesg-cli service:create DEFINITION`

Create a service

```
USAGE
  $ mesg-cli service:create DEFINITION

ARGUMENTS
  DEFINITION  Service's definition. Use service:compile first to build service definition

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
  --start          Automatically start the service once created
```

_See code: [src/commands/service/create.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/create.ts)_

## `mesg-cli service:delete SERVICE_HASH...`

Delete one or many services

```
USAGE
  $ mesg-cli service:delete SERVICE_HASH...

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --confirm        Confirm deletion
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/delete.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/delete.ts)_

## `mesg-cli service:detail SERVICE_HASH`

Display detailed information on a service

```
USAGE
  $ mesg-cli service:detail SERVICE_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/detail.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/detail.ts)_

## `mesg-cli service:dev [SERVICE]`

Run a service in development mode

```
USAGE
  $ mesg-cli service:dev [SERVICE]

ARGUMENTS
  SERVICE  [default: ./] Path or url ([https|mesg]://) of a service

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --env=FOO=BAR    Set environment variables
  --host=host      [default: localhost] Host to access the MESG engine
  --start          Automatically start the service once created
```

_See code: [src/commands/service/dev.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/dev.ts)_

## `mesg-cli service:doc [SERVICE]`

Generate documentation for service and print it on stdout

```
USAGE
  $ mesg-cli service:doc [SERVICE]

ARGUMENTS
  SERVICE  [default: ./] Path of a service

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  -s, --save       Save to default readme file
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/doc.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/doc.ts)_

## `mesg-cli service:execute INSTANCE_HASH TASK`

Execute a task on a running service

```
USAGE
  $ mesg-cli service:execute INSTANCE_HASH TASK

ARGUMENTS
  INSTANCE_HASH
  TASK           Task key

OPTIONS
  -d, --data=key=value  Task inputs
  -h, --help            show CLI help
  -j, --json=json       Path to a JSON file containing the task inputs
  -p, --port=port       [default: 50052] Port to access the MESG engine
  -q, --quiet           Display only essential information
  --host=host           [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/execute.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/execute.ts)_

## `mesg-cli service:init DIR`

Initialize a service from a template

```
USAGE
  $ mesg-cli service:init DIR

ARGUMENTS
  DIR  Directory to initialize a service into

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  -t, --template=template  Specify the template URL to use
  --host=host              [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/init.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/init.ts)_

## `mesg-cli service:list`

List running services

```
USAGE
  $ mesg-cli service:list

OPTIONS
  -h, --help         show CLI help
  -p, --port=port    [default: 50052] Port to access the MESG engine
  -q, --quiet        Display only essential information
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --host=host        [default: localhost] Host to access the MESG engine
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)
```

_See code: [src/commands/service/list.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/list.ts)_

## `mesg-cli service:logs INSTANCE_HASH`

Fetch the logs of a service

```
USAGE
  $ mesg-cli service:logs INSTANCE_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --event=event    Display a specific event
  --[no-]events    Display events
  --[no-]follow    Follow log output
  --host=host      [default: localhost] Host to access the MESG engine
  --[no-]results   Display results
  --tail=tail      [default: -1] Display the last N lines
  --task=task      Display a specific task results
```

_See code: [src/commands/service/logs.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/logs.ts)_

## `mesg-cli service:start SERVICE_HASH`

Start a service by creating a new instance

```
USAGE
  $ mesg-cli service:start SERVICE_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --env=FOO=BAR    Set environment variables
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/start.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/start.ts)_

## `mesg-cli service:stop INSTANCE_HASH...`

Stop one or more running service

```
USAGE
  $ mesg-cli service:stop INSTANCE_HASH...

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --confirm        Confirm deletion
  --delete-data    Delete running service persistent data
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/stop.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/service/stop.ts)_

## `mesg-cli workflow:compile [WORKFLOW_FILE]`

Compile a workflow

```
USAGE
  $ mesg-cli workflow:compile [WORKFLOW_FILE]

ARGUMENTS
  WORKFLOW_FILE  Path of a workflow file

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/workflow/compile.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/workflow/compile.ts)_

## `mesg-cli workflow:create DEFINITION`

Create a workflow

```
USAGE
  $ mesg-cli workflow:create DEFINITION

ARGUMENTS
  DEFINITION  Workflow's definition. Use workflow:compile first to build workflow definition

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/workflow/create.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/workflow/create.ts)_

## `mesg-cli workflow:delete WORKFLOW_HASH...`

Delete one or many workflows

```
USAGE
  $ mesg-cli workflow:delete WORKFLOW_HASH...

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --confirm        Confirm deletion
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/workflow/delete.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/workflow/delete.ts)_

## `mesg-cli workflow:detail WORKFLOW_HASH`

Display detailed information on a workflow

```
USAGE
  $ mesg-cli workflow:detail WORKFLOW_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/workflow/detail.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/workflow/detail.ts)_

## `mesg-cli workflow:list`

List workflows

```
USAGE
  $ mesg-cli workflow:list

OPTIONS
  -h, --help         show CLI help
  -p, --port=port    [default: 50052] Port to access the MESG engine
  -q, --quiet        Display only essential information
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --host=host        [default: localhost] Host to access the MESG engine
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)
```

_See code: [src/commands/workflow/list.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/workflow/list.ts)_
<!-- commandsstop -->
