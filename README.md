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
