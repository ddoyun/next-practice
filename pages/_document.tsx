import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

// styled-components 적용할 때 HTML만 로딩되고 스타일은 미적용
// 코드를 추가해야 서버 사이드 렌더링 시 styled-components 헤더에 주입
// 즉 서버에서 미리 HTML을 마크업할 때 스타일도 HTML 요소에 녹여냄
class MyDocument extends Document {
  static async loadGetInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const intialProps = await Document.getInitialProps(ctx);
      return {
        ...intialProps,
        styles: (
          <>
            {intialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
