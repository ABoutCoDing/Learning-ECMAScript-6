1. `script type="module"` 은 왜 써야 하나요?

bootstrap.js 의 System.loadScriptTypeModule()에서 `type="module"` 부분을 로드합니다.
`type="module"` 을 쓰지 않으면 소스가 transpiling 되지 않습니다. (브라우져의 환경으로 구동됩니다.)

