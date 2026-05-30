import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostDatenschutz = () => (
  <KompetenzLayout
    breadcrumbLabel="Datenschutz & Compliance"
    title={<>Datenschutz &<br />Compliance.</>}
    heroLead="DSGVO, Geldwäscheprävention und NIS 2 — beratungsstark, dokumentationssicher, prüfungsfest."
    introStatement="Zertifiziert. Prüfungssicher. Praxisnah."
    introBody={
      <>
        <p>
          Datenschutz und Compliance bestimmen heute den unternehmerischen Alltag. Bußgelder, Schadenersatzansprüche und Reputationsrisiken sind real.
        </p>
        <p>
          Als zertifizierte Datenschutz- und Geldwäschebeauftragte beraten wir bei der Umsetzung von DSGVO und NIS 2, beim Aufbau wirksamer Compliance-Strukturen und bei der Erstellung von Mittelherkunftsnachweisen — insbesondere für Mandant:innen mit Krypto-Vermögen.
        </p>
      </>
    }
    focusHeadline="DSGVO, AML, NIS 2."
    focusItems={[
      {
        title: "Datenschutzrechtliche Beratung und Umsetzung",
        content:
          "Datenschutzverstöße werden empfindlich geahndet, hinzu kommen Reputationsverluste und Schadenersatzansprüche. Wir setzen die DSGVO-Anforderungen in Ihrem Unternehmen rechtssicher um — als zertifizierte Datenschutzexperten.",
      },
      {
        title: "Geldwäscheprävention",
        content:
          "Risikoanalyse, Geldwäschepräventionskonzept, Schulungen: Wir begleiten Sie durch die komplexen Vorgaben zur Prävention von Geldwäsche und Terrorismusfinanzierung und stellen die Erfüllung aller Anforderungen sicher.",
      },
      {
        title: "Erstellung von Mittelherkunftsnachweisen",
        content:
          "Banken und Krypto-Börsen verlangen bei Auszahlungen oder Transfers einen vollständigen Mittelherkunftsnachweis (Source of Funds). Als Rechtsanwält:innen, zertifizierte Geldwäschebeauftragte und Blockchain-Forensiker erstellen wir prüfungssichere Nachweise — von der On-Chain-Analyse bis zur strukturierten Dokumentation.",
      },
      {
        title: "Vertretung bei Datenschutzverletzungen",
        content:
          "Ob vor der Datenschutzbehörde oder dem Zivilgericht: Wir haben Erfahrung in der Durchsetzung wie in der Abwehr von Ansprüchen aus Datenschutzverletzungen.",
      },
      {
        title: "NIS 2 — Cyber-Compliance",
        content:
          "Die NIS 2-Richtlinie verpflichtet Unternehmen kritischer Sektoren zu strengen Cybersicherheitsstandards. Wir überprüfen IT-Sicherheitsstrategien, implementieren Maßnahmen, erstellen die nötige Dokumentation und führen die gesetzlich vorgeschriebenen Führungskräfteschulungen durch.",
      },
    ]}
    ctaTitle="Compliance auf Prüfungsniveau."
    ctaBody="Wir analysieren Ihren Status, schließen Lücken und stellen Ihre Dokumentation auf prüfungsfestes Niveau — DSGVO, NIS 2 und AML in einer Hand."
  />
);

export default BlogPostDatenschutz;
