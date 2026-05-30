import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostGesellschaftsrecht = () => (
  <KompetenzLayout
    breadcrumbLabel="Gesellschaftsrecht"
    title={<>Gesellschafts- &<br />Unternehmens­recht.</>}
    heroLead="Von der Gründung über laufende gesellschaftsrechtliche Themen bis zu Transaktionen und Streitigkeiten — mit eigener Krypto- und MiCAR-Kompetenz."
    introStatement="Unternehmensrecht als interdisziplinäre Aufgabe."
    introBody={
      <>
        <p>
          Wir beraten Unternehmen in allen Phasen — von der Gründung über laufende gesellschaftsrechtliche Themen bis hin zu Transaktionen und Streitigkeiten.
        </p>
        <p>
          Bei Mandant:innen aus dem Krypto- und Blockchain-Bereich begleiten wir die Gründung und Strukturierung von Krypto-Asset-Dienstleistern, MiCAR-Lizenzierungen sowie die Tokenisierung von Beteiligungen. Unsere kanzleieigene Krypto-Kompetenz erlaubt es, regulatorische, gesellschafts- und kapitalmarktrechtliche Fragen aus einer Hand zu beantworten.
        </p>
        <p>
          Im Streitfall vertreten wir Gesellschafter, Geschäftsführer und Unternehmen vor Gericht und in Schiedsverfahren — national wie international.
        </p>
      </>
    }
    focusHeadline="Gründung, Transaktion, Streit."
    focusItems={[
      {
        title: "Allgemeines Unternehmensrecht / externe Rechtsabteilung",
        content:
          'Gute Beratung im Unternehmensrecht erfordert fächerübergreifende Kenntnis und ein Verständnis für wirtschaftliche und operative Zusammenhänge. Wir unterstützen Unternehmen unterschiedlicher Größe laufend als „externe Rechtsabteilung".',
      },
      {
        title: "Beratung zu allen Bereichen des Gesellschaftsrechts",
        content:
          "Die Wahl der Rechtsform, optimal gestaltete Gesellschaftsverträge, Geschäftsordnungen und Gesellschaftervereinbarungen verhindern Konflikte und schaffen Raum für das operative Geschäft.",
      },
      {
        title: "Gesellschaftsgründungen",
        content:
          "Ausgeklügelte vertragliche Grundlagen, die zukünftige Entwicklungen und Szenarien bestmöglich berücksichtigen, bilden die Basis für unternehmerischen Erfolg.",
      },
      {
        title: "Unternehmenskauf und -verkauf (M&A)",
        content:
          "Ein vorteilhafter Unternehmenskauf erfordert umfassende Vorbereitung. Mit ganzheitlichem Ansatz verstehen wir uns als deal-maker, nicht deal-breaker.",
      },
      {
        title: "Umgründungen, Einbringungen und Verschmelzungen",
        content:
          "Das Umgründungssteuergesetz bietet umfangreiche Gestaltungsmöglichkeiten — Umwandlung, Einbringung, Spaltung. Wir führen Sie durch dieses Geflecht aus Optionen.",
      },
      {
        title: "Gesellschafterstreitigkeiten",
        content:
          "Bei Gesellschafterstreitigkeiten kommen wir als versierte, streiterfahrene, aber lösungsfördernde Rechtsanwält:innen mit Verhandlungserfahrung zum Einsatz.",
      },
    ]}
    ctaTitle="Unternehmen rechtssicher aufstellen."
    ctaBody="Ob Gründung, Transaktion, MiCAR-Lizenz oder Gesellschafterstreit — wir entwickeln die passende rechtliche Struktur und vertreten Sie konsequent."
  />
);

export default BlogPostGesellschaftsrecht;
