import { useTranslations } from "next-intl";
import { ComponentWithLinks } from "./_components/ComponentWithLinks";

export default function IndexPage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <ComponentWithLinks />
    </div>
  );
}
