# Healee Digital Health Protocols start-up guide

## Prerequisites

Install AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

## Authentication

1. Add **HEALEE_STAGE_URL** and **HEALEE_STAGE_AUTH** to the end of your _~/.bashrc_ / _~/.zshrc_ / etc. file.

E.g.
```
export HEALEE_STAGE_URL=<your_healee_stage_url>
export HEALEE_STAGE_AUTH=<your_healee_stage_auth_token>
```

2. Add the provided named AWS profile to your _~/.aws/credentials_ file.

You can read more about named AWS profiles here: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

## First steps

1. Clone this repository.

2. Run: ```./protocol.sh fetch <protocol name>``` to fetch the initial version of the protocol.

3. The protocol will be downloaded to the _./development/\<protocol name\>_ folder.

4. After making changes to the files, run ```./protocol.sh build <protocol name>``` to build and deploy the changed version of the protocol.

## Testing the protocol

1. Login / Register in the provided Healee staging environment.

2. Go to section **Profile** and click the button **Add Protocol**.

3. Select your protocol and install it.

4. The protocol is added to your profile. Click its name to open it.

## Testing reminders

When you want to test reminders for notifications which you've added to the protocol, you can use the _protocol.sh_ tool to speed up the process because sometimes even if you've put "Minutes" for the period attribute, you may need to wait some extra minutes for the scheduler job to run.

e.g.

```./protocol.sh notify <protocol name>```

## Versioning

The storage for the protocol files does not support versioning and that's why we recommend adding the protocol files to your own private / public repository right after the initial fetch of the protocol files.

e.g.

```
./protocol.sh fetch <protocol name>
cd development/<protocol name>
git init
git remote add origin <your git repo url>
...
```
