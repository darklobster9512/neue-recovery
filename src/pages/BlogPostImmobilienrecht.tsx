import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostImmobilienrecht = () => (
  <KompetenzLayout
    breadcrumbLabel="Immobilienrecht"
    title={<>Immobilienrecht.</>}
    heroLead="Strukturierung, Vertragsgestaltung, Due Diligence und Durchsetzung — inklusive Mittelherkunftsnachweis bei Finanzierungen aus digitalen Vermögenswerten."
    introStatement="Rechtssichere Begleitung anspruchsvoller Transaktionen."
    introBody={
      <>
        <p>
          Wir beraten Privatpersonen, Investoren und Bauträger in allen immobilien- und baurechtlichen Angelegenheiten — von der Strukturierung über Vertragsgestaltung und Due Diligence bis zur Abwicklung und gerichtlichen Durchsetzung.
        </p>
        <p>
          Bei Transaktionen mit Bezug zu digitalen Vermögenswerten — etwa wenn der Kaufpreis aus Krypto-Beständen finanziert wird — übernehmen wir die rechtssichere Aufbereitung des Mittelherkunftsnachweises gegenüber Notar, Bank und Treuhänder. Damit lassen sich Verzögerungen im Closing vermeiden, die bei Krypto-Vermögen heute regelmäßig auftreten.
        </p>
      </>
    }
    focusHeadline="Vom Bauträger bis zum Streit."
    focusItems={[
      {
        title: "Bauträgerprojekte",
        content:
          "Von der ersten Idee bis zur finalen Umsetzung begleiten wir Bauträger und Immobilienentwickler — bei Baugenehmigungen, Auftragnehmerverträgen und der rechtlichen Absicherung von Verkaufs- und Marketingaktivitäten.",
      },
      {
        title: "(Ver-)Kauf von Immobilien",
        content:
          "Wir prüfen und gestalten Verträge, beraten umfassend rechtlich und sorgen für eine reibungslose Abwicklung — von der Titelprüfung bis zur Treuhandabwicklung.",
      },
      {
        title: "Planung und Strukturierung von Bauprojekten (Asset-/Share Deals)",
        content:
          "Als M&A- und Immobilien-Rechtsanwält:innen bieten wir umfassende Beratung aus einer Hand — mit Fokus auf Effizienz, Kostenoptimierung und Minimierung von Haftungsrisiken.",
      },
      {
        title: "Rechtliche Due Diligence",
        content:
          "Eine fundierte Due Diligence ist die Grundlage jeder Transaktion. Wir bewerten die rechtliche Situation eines Unternehmens oder einer Immobilie vollständig und tragen so dazu bei, rechtliche Risiken zu minimieren.",
      },
      {
        title: "Parifizierung / Wohnungseigentumsbegründung",
        content:
          "Wir begleiten den Prozess der Aufteilung in Eigentumswohnungen oder die Begründung mehrerer Einheiten bei Neubauten und stellen die Erfüllung aller rechtlichen Anforderungen sicher.",
      },
      {
        title: "Miet- und Pachtverträge",
        content:
          "Durch ständige gesetzliche Anpassungen und neue oberstgerichtliche Urteile ist das Miet- und Wohnrecht äußerst komplex. Wir vertreten Mieter:innen, Vermieter:innen und Eigentümer:innen sachkundig und durchsetzungsstark.",
      },
      {
        title: "Bau- und immobilienrechtliche Streitigkeiten",
        content:
          "Bauverzögerungen, Mängel, Kostenüberschreitungen, Gewährleistungsthematiken, Miet- und Wohnungseigentümerstreitigkeiten: Mit fundiertem Fachwissen setzen wir die Rechte unserer Mandant:innen gerichtlich und außergerichtlich durch.",
      },
    ]}
    ctaTitle="Immobilienprojekt rechtssicher umsetzen."
    ctaBody="Wir prüfen Ihre Transaktion, gestalten Verträge und übernehmen — wo erforderlich — auch den Mittelherkunftsnachweis bei Finanzierungen aus digitalen Vermögenswerten."
  />
);

export default BlogPostImmobilienrecht;
