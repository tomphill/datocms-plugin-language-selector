import { connect, RenderFieldExtensionCtx } from "datocms-plugin-sdk";
import { render } from "./utils/render";
import "datocms-react-ui/styles.css";
import LanguageSelector from "./components/LanguageSelector";

connect({
  manualFieldExtensions() {
    return [
      {
        id: "languageSelector",
        name: "Language Selector",
        type: "editor",
        fieldTypes: ["json"],
      },
    ];
  },
  renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
    switch (fieldExtensionId) {
      case "languageSelector":
        return render(<LanguageSelector ctx={ctx} />);
    }
  },
});
