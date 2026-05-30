import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostProzessfuehrung = () => (
  <KompetenzLayout
    breadcrumbLabel="Prozessführung"
    title={<>Prozess­führung.</>}
    heroLead="Komplexe Wirtschafts-, Anleger- und Krypto-Verfahren — national und grenzüberschreitend, gerichtlich und außergerichtlich."
    introStatement="Stringente Durchsetzung. Internationale Reichweite."
    introBody={
      <>
        <p>
          Wir vertreten Mandant:innen vor sämtlichen Gerichten und Behörden — von komplexen Wirtschaftsverfahren über Anlegerprozesse bis zur grenzüberschreitenden Durchsetzung von Ansprüchen.
        </p>
        <p>
          Eine außergerichtliche Lösung ist häufig die effizienteste. Lässt sich diese nicht erzielen, führen wir das Verfahren stringent und prozesserfahren — auch in Konstellationen, in denen Krypto-Vermögenswerte eine Rolle spielen: bei der Sicherung digitaler Assets, der Durchsetzung von Auskunfts- und Herausgabeansprüchen gegenüber Krypto-Börsen oder bei der Vollstreckung im internationalen Rahmen.
        </p>
      </>
    }
    focusHeadline="Verfahren, die wir führen."
    focusItems={[
      {
        title: "Immobilien- und Bauprozesse",
        content:
          "Bauverzögerungen, Mängel, Kostenüberschreitungen, Gewährleistungsthematiken sowie Miet- und Wohnungseigentümerstreitigkeiten — wir setzen die Rechte unserer Mandant:innen gerichtlich und außergerichtlich durch.",
      },
      {
        title: "Miet- und wohnrechtliche Streitigkeiten",
        content:
          "Wir setzen miet- und wohnrechtliche Anliegen — Mietzinsminderung, Schadenersatz, Kündigungen — erfolgreich durch.",
      },
      {
        title: "Allgemeine zivilrechtliche Verfahren",
        content:
          "Vertragsstreitigkeiten, Schadensersatz, Forderungseinzüge, Haftungsfragen: Mandant:innen vertrauen auf unsere Expertise für die Durchsetzung ihrer Rechte.",
      },
      {
        title: "Anleger- und Krypto-Verfahren",
        content:
          "Wir vertreten geschädigte Anleger:innen bei Ansprüchen aus fehlerhafter Beratung, Prospekthaftung sowie bei Schäden aus Krypto-Investments und betrügerischen Trading-Plattformen — einschließlich der forensischen Nachverfolgung der Geldflüsse on-chain.",
      },
      {
        title: "Gesellschafterstreitigkeiten",
        content:
          "Wenn eine effektive Zusammenarbeit unter Mitgesellschaftern nicht mehr möglich ist, ist eine rasche Lösungsfindung essenziell. Wir agieren streiterfahren, aber lösungsorientiert.",
      },
      {
        title: "Datenschutzverletzungen",
        content:
          "Ob vor der Datenschutzbehörde oder dem Zivilgericht: Wir haben Erfahrung in der Durchsetzung wie in der Abwehr von Ansprüchen aus Datenschutzverletzungen.",
      },
      {
        title: "Versicherungsrechtliche Streitigkeiten",
        content:
          "Sach-, Haftpflicht-, Unfall-, Rechtsschutz- und Lebensversicherungen: Wir vertreten Versicherungsnehmer, Makler und Agenten — außergerichtlich wie gerichtlich.",
      },
    ]}
    ctaTitle="Verfahren prüfen lassen."
    ctaBody="Wir bewerten Ihre Erfolgsaussichten und entwickeln eine belastbare Prozessstrategie — gerichtlich, behördlich oder im Verhandlungsweg."
  />
);

export default BlogPostProzessfuehrung;
