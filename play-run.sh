#!/bin/bash

# 定义项目根路径
root_path=`pwd`

# 启动项目
# 参数1：所在目录名
# 参数2：进入目录后执行的命令
run_project(){
    project_path=$root_path"/$1"
    echo "在目录："$project_path"中，执行命令：$2 >> log&"
    cd $project_path
    `$2 >> log&`
}

# 启动angular项目
run_project "play-ng" "npm start"

# 启动vue项目
run_project "play-vue" "npm start"

# 启动react项目
run_project "play-react" "npm start"

# 启动vue项目
run_project "play-vuecli" "npm run serve"

# 启动api项目
run_project "play-api" "npm start"


