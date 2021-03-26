#!/bin/bash
unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
unset AWS_SESSION_TOKEN

role_arn=arn:aws:iam::659344654752:role/app-ci-stg-deployment
role_session_name='serverless-app-deployment'
profile_name='serverless-app-deployment'

temp_role=$(aws sts assume-role \
     --role-arn $role_arn \
     --role-session-name $role_session_name)

export AWS_ACCESS_KEY_ID=$(echo $temp_role | jq .Credentials.AccessKeyId | xargs)
export AWS_SECRET_ACCESS_KEY=$(echo $temp_role | jq .Credentials.SecretAccessKey | xargs)
export AWS_SESSION_TOKEN=$(echo $temp_role | jq .Credentials.SessionToken | xargs)
