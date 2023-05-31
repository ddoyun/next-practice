# next.js 초기 세팅

- pages는 auto routing 되는 페이지들 생성
- \_app.tsx 가장 먼저 실행되는 페이지. 공통 레이아웃 역할 (로직, 전역 스타일 등 컴포넌트에 사용할 데이터)
- \_Document.tsx는 서버에서만 실행. (공통적으로 적용될 HTML 마크업)

## Next.js + Typescript + Styled-components 세팅

```bash
# styled-components 타입 정의 요소 설치
npm i --save-dev @types/styled-components
npm install styled-reset
npm i @next/bundle-analyzer
```

## 바벨 대신 SWC 사용하기

### Speedy Web Compiler

> JavaScript 프로젝트의 컴파일과 번들링 모두에 사용될 수 있는 Rust로 제작된 빌드 툴.

- Next.js 12 버전부터는 기본적으로 SWC 컴파일러가 바벨을 대체하도록 설정 됨
- 바벨이나 Terser보다 빌드 과정이 매우 빠르다

### 적용

- .babelrc 파일 삭제
- babel-plugin-styled-components 바벨과 관련된 라이브러리 삭제
