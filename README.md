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
