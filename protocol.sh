#!/bin/bash

mode=$1
protocol=$2

if [ "$mode" = "fetch" ]; then
	aws s3 sync --profile $protocol --delete s3://protocol-$protocol ./development/$protocol
elif [ "$mode" = "notify" ]; then
	curl -w "\n" -H "Authorization: Basic $HEALEE_STAGE_AUTH" -X POST $HEALEE_STAGE_URL/api/v1/notifyProtocol/$protocol
elif [ "$mode" = "build" ]; then
	if [ -f "./development/$protocol/info.json" ]; then
		# default exclude
		exclude="--exclude \".git/*\" --exclude \"node_modules/*\" --exclude \"gallery-widget/*\" --exclude \"runner/*\" --exclude \".idea/*\"  --exclude \".DS_Store\""
		# if exclude.rules exists this will override the eclude rules
		if [ -f "./development/$protocol/exclude.rules" ]; then
			# update exclude rules
			input="./development/$protocol/exclude.rules"
			exclude=""
			while IFS= read -r line
			do
				exclude=$exclude" --exclude \"$line\""
			done < "$input"
		fi
		aws s3 sync --profile $protocol --delete $exclude ./development/$protocol s3://protocol-$protocol
		curl -w "\n" -H "Authorization: Basic $HEALEE_STAGE_AUTH" -X POST $HEALEE_STAGE_URL/api/v1/buildProtocol/$protocol
	else
		echo "Protocol doesn't exist. Please, call fetch to retrieve the initial version of the protocol."
	fi
else
	echo "Try running: ./protocols.sh fetch|build|notify [protocol name]"
fi
