# http 통신 구조

### HTTP(HyperText Transfer Protocol)
- 웹에서 데이터를 교환하기 위해 만들어진 프로토콜(웹 브라우저 ↔ 웹서버)
- 요청(Request)-응답(Response) 매커니즘으로 구성된 클라이언트-서버 모델
- 서버가 세션 상태를 유지하지 않음(stateless)

### HTTP 메시지 구조
**`Request`**
- `start line`: Request Message의 시작 라인
    - HTTP method: 서버가 수행해야 하는 동작(ex: GET, POST, PUT, DELETE)
    - Request Target: 요청의 대상이 되는 리소스의 URI (ex: `/index.html`)
    - HTTP version: 사용된 HTTP 프로토콜 버전 (ex: `HTTP/1.1`)
    - ex) `GET /index.html HTTP/1.1`
- `headers`: 서버가 요청을 처리하는 데 필요한 추가 정보를 담고 있는 부분
    - Host: 요청하려는 서버 호스트 이름과 포트번호
    - User-Agent: 클라이언트 프로그램 정보
    - Referer: 바로 직전에 머물렀던 웹 주소
    - Accept: 클라이언트가 처리 가능한 미디어 타입의 종류
    - Authoriztion: 인증 토큰을 서버로 보낼 때 사용하는 값
    - Origin: 서버로 POST 요청을 보낼 때 어느 주소에서 요청이 시작됐는지 나타내는 값(해당 값으로 요청을 보낸 주소와 받는 주소가 다르면 CORS 오류 발생)
    - Cookie: 쿠키의 값이 key-value 형식으로 표현됨
- `body`: HTTP Request가 전송하는 데이터를 담고 있는 부분
    - 주로 POST, PUT 메서드를 사용할 때 서버로 보낼 실제 데이터가 포함됨
    - 전송하는 데이터가 없다면 비어있음
        
**`Response`**
- `status line`
    - HTTP version
    - Status Code: 응답 상태를 나타내는 숫자로 되어 있는 코드 (ex: `404`)
    - Status Text: 응답 상태를 간략하게 설명 (ex: `Not Found`)
    - ex) `HTTP/1.1 404 Not Found`
- `headers`: Request의 headers와 동일하지만, response에서만 사용되는 값들이 있음
    - User-Agent 대신 Server 라는 header 사용
- `body`: 클라이언트에게 전달할 실제 데이터를 담고 있는 부분
    - 요청한 HTML, 이미지, JSON 데이터 등
    - 전달받을 데이터가 없다면 비어있음

### 통신 흐름
1. 사용자가 브라우저에 URL 입력
2. DNS 조회로 서버 IP 획득
3. 브라우저가 서버에 TCP 연결 설정
    - TCP 3-way Handshake를 통해 네트워크 연결 설정
    - TCP 연결은 단일 또는 다중의 요청과 응답을 처리할 수 있고, 클라이언트는 상황에 따라 새로운 연결을 열거나, 기존의 연결을 재사용하거나, 여러 개의 연결을 동시에 시도할 수 있음
    - 80번 포트(general), 443 포트(HTTPS)
4. HTTP 요청 전송
    - 브라우저에서 서버로 HTTP Request 메시지를 보냄
5. HTTP 응답 수신
    - 서버가 요청을 처리하고, 클라이언트에게 HTTP Response 메시지를 보냄
6. 연결 종료 또는 유지
    - 응답 수신 후, 이후의 추가 요청을 위해 연결을 종료하거나, 다음 요청을 위해 연결을 유지
7. 브라우저는 받은 응답(HTML, CSS, JS 등)을 렌더링 해 화면에 표시
