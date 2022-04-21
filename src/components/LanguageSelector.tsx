import { RenderFieldExtensionCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";
import { FC } from "react";
import languages from "../data/languages";
import get from "lodash/get";

type Props = {
  ctx: RenderFieldExtensionCtx;
};

const LanguageSelector: FC<Props> = ({ ctx }) => {
  const stringifiedValue = get(ctx.formValues, ctx.fieldPath) as string | null;
  const initialValue = stringifiedValue ? JSON.parse(stringifiedValue) : {};

  return (
    <Canvas ctx={ctx}>
      <select
        style={{
          border: "1px solid var(--border-color)",
          padding: "var(--spacing-m) var(--spacing-s)",
          width: "100%",
          color: "var(--body-color)",
          fontSize: "var(--font-size-m)",
          fontFamily: "inherit",
        }}
        value={`${initialValue.name}${initialValue.code}`}
        onChange={(e) => {
          const newValue = e.target.value;
          ctx.setFieldValue(
            ctx.fieldPath,
            newValue
              ? JSON.stringify(
                  languages.find(
                    (language) =>
                      newValue === `${language.name}${language.code}`
                  )
                )
              : null
          );
        }}
      >
        <option value="">None</option>
        {languages
          .sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          })
          .map((language) => (
            <option
              key={`${language.name}${language.code}`}
              value={`${language.name}${language.code}`}
            >
              {language.name} ({language.code})
            </option>
          ))}
      </select>
    </Canvas>
  );
};
export default LanguageSelector;
