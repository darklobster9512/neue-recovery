import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostCeoFraud2 = () => (
  <KompetenzLayout
    breadcrumbLabel="Cybercrime"
    title={<>Cybercrime.</>}
    heroLead="Strafrechtliche und zivilrechtliche Aufarbeitung digitaler Delikte — verbunden mit eigener Blockchain-Forensik zur Sicherung und Rückführung entwendeter Krypto-Werte."
    introStatement="Juristische und technische Analyse in einer Hand."
    introBody={
      <>
        <p>
          Cybercrime ist heute eine der häufigsten Ursachen erheblicher Vermögensschäden — bei Unternehmen ebenso wie bei Privatpersonen. Anlagebetrug über vermeintliche Krypto-Plattformen, CEO Fraud, Phishing, Ransomware und Identitätsdiebstahl gehören längst zum Tagesgeschäft organisierter Tätergruppen.
        </p>
        <p>
          Wir begleiten die gesamte rechtliche Aufarbeitung: Beweissicherung, Strafanzeige, zivilrechtliche Durchsetzung und — wo Krypto-Werte betroffen sind — die forensische Nachverfolgung der Geldflüsse bis zur Empfänger-Börse. In den ersten Stunden nach einem Vorfall entscheidet sich häufig, ob Vermögenswerte noch erreichbar sind. Wir nehmen Ihren Sachverhalt umgehend auf, sichern Beweise und leiten die nötigen Schritte ein.
        </p>
      </>
    }
    focusHeadline="Prävention, Reaktion, Rückführung."
    focusItems={[
      {
        title: "Prävention – Cyber Resilienz",
        content:
          "Mit NIS2 (NISG 2024) und dem Cyber Resilience Act steigen die regulatorischen Anforderungen an Unternehmen erheblich. Wir begleiten Sie bei Gap-Analyse, Umsetzung der organisatorischen und technischen Pflichten sowie der Dokumentation gegenüber Aufsichtsbehörden.",
      },
      {
        title: "Ransomware – Incident Response",
        content:
          "Bei Ransomware-Angriffen koordinieren wir gemeinsam mit erfahrenen IT-Forensikern die Incident Response — von der Eindämmung über die rechtliche Bewertung einer etwaigen Lösegeldforderung bis zur Meldung an Datenschutz- und Aufsichtsbehörden. Bei Krypto-Lösegeldzahlungen verfolgen wir die Transaktionen on-chain, um spätere Rückführungen vorzubereiten.",
      },
      {
        title: "Anlagebetrug – Datenmissbrauch",
        content:
          "Vermeintlich lukrative Krypto-Investments, gefälschte Trading-Plattformen und der Missbrauch persönlicher Daten zählen zu den häufigsten Schadensbildern. Wir analysieren die Geldflüsse — bei Krypto-Zahlungen on-chain bis zur Empfänger-Börse — und leiten Auskunfts-, Einfrierungs- und Herausgabeverfahren ein.",
      },
      {
        title: "Hass im Netz",
        content:
          "Hasspostings, Beleidigungen in sozialen Medien und Cybermobbing sind rechtswidrig. Wir betreiben die Identifizierung der Verantwortlichen, leiten Straf- und Unterlassungsverfahren ein und setzen Ihre zivil- und medienrechtlichen Ansprüche konsequent durch.",
      },
      {
        title: "Asset- und Krypto-Tracing",
        content:
          "Als zertifizierte Blockchain-Forensiker rekonstruieren wir Krypto-Transaktionsketten und ordnen Wallets realen Gegenparteien zu. Diese Analyse ist die Grundlage für die Rückholung entwendeter Krypto-Werte — in Strafverfahren ebenso wie in zivilrechtlichen Streitigkeiten, Insolvenzen und Erbsachen.",
      },
    ]}
    ctaTitle="Diskrete Soforthilfe."
    ctaBody="Wir nehmen Ihren Sachverhalt unverzüglich auf, sichern Beweise und koordinieren das Zusammenspiel von Strafverfolgung, Krypto-Börsen und Finanzinstituten — mit dem Ziel, entwendete Vermögenswerte einzufrieren und zurückzuführen."
  />
);

export default BlogPostCeoFraud2;
