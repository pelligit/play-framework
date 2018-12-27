#!/bin/bash

root_path=`pwd`

api_path=$root_path"/play-api"
ng_path=$root_path"/play-ng"
react_path=$root_path"/play-react"
vue_path=$root_path"/play-vue"
vuecli_path=$root_path"/play-vuecli"

function init_project(){
    cd $1
    npm install >> init-log& 
}

init_project $api_path

init_project $ng_path

init_project $react_path

init_project $vue_path

init_project $vuecli_path

