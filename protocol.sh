#!/bin/bash

mode=$1
protocol=$2

if [ "$mode" = "fetch" ]; then
	aws s3 sync --profile $protocol --delete s3://protocol-$protocol ./development/$protocol
elif [ "$mode" = "build" ]; then
	aws s3 sync --profile $protocol --delete ./development/$protocol s3://protocol-$protocol
	curl -w "\n" -H "Authorization: Basic $HEALEE_STAGE_AUTH" -X POST $HEALEE_STAGE_URL/api/v1/buildProtocol/$protocol
else
	echo "Try running: ./protocols.sh fetch|build [protocol name]"
fi
