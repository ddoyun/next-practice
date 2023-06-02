import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// styled-components 적용할 때 HTML만 로딩되고
// 스타일은 헤더에 미적용이기 때문에 SRR을 위해 아래 코드 추가
export default class MyDocument extends Document {
  static async loadGetInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
