# Artillery
자세한 설명은 아래의 글을 참고하세요. <br>
[https://blog.hyunjun.kr/artillery-1](https://blog.hyunjun.kr/artillery-1)

<br>

설치
```shell
npm install -D artillery
```

<br>

100명의 사용자가 각각 100개의 요청 (10000번 요청)
```shell
npx artillery quick --count 100 -n 100 http://localhost:3000/
```

<br>

시나리오 테스트 진행 및 파일로 저장
```shell
npx artillery run --output test_report.json Artillery_test/test.json
```

<br>

저장한 파일을 리포트로 HTML 파일로 변환
```shell
npx artillery report test_report.json                               
```
