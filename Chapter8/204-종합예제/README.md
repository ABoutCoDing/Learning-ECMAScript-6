1. babel 설치

$npm install --save-dev babel-preset-es2015



2. .babelrc 파일 생성

	{
		"presets": [
			"node6"
		]
	}



3. 실행

./node_modules/babel-cli/bin/babel-node.js ./index.js