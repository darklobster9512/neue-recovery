import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostKryptonachverfolgung = () => (
  <KompetenzLayout
    breadcrumbLabel="Kryptonachverfolgung"
    title={<>Krypto­nach­verfolgung &<br />Mittel­herkunft.</>}
    heroLead="Forensische Rekonstruktion von Geldflüssen on-chain und gerichtsfeste Dokumentation digitaler Vermögenswerte — gegenüber Banken, Krypto-Börsen, Aufsichts- und Strafverfolgungsbehörden."
    introStatement="Juristische Expertise, verbunden mit zertifizierter Blockchain-Forensik."
    introBody={
      <>
        <p>
          Die rechtliche Einordnung von Krypto-Transaktionen und der Nachweis ihrer Mittelherkunft gehören zu den anspruchsvollsten Aufgaben im modernen Wirtschaftsrecht. Unsere Kanzlei verbindet juristische Expertise mit zertifizierter Blockchain-Forensik.
        </p>
        <p>
          Wir rekonstruieren Geldflüsse on-chain, dokumentieren die Herkunft digitaler Vermögenswerte gerichtsfest und unterstützen Mandant:innen gegenüber Banken, Krypto-Börsen, Aufsichts- und Strafverfolgungsbehörden — von der Erstanalyse bis zur Durchsetzung von Herausgabe- und Schadenersatzansprüchen.
        </p>
      </>
    }
    focusHeadline="Analyse, Dokumentation, Durchsetzung."
    focusItems={[
      {
        title: "Mittelherkunftsnachweis",
        content: (
          <>
            <p className="mb-4">
              Wir erstellen Mittelherkunftsnachweise (Source of Funds), die den Anforderungen von Banken, Krypto-Börsen und Aufsichtsbehörden standhalten. Grundlage ist eine vollständige On-Chain-Analyse der relevanten Wallets und Transaktionsketten — mit Zeitstempeln, Beträgen, Gegenparteien und Risikoindikatoren.
            </p>
            <p>
              Auf Wunsch koordinieren wir die Vorlage gegenüber dem jeweiligen Institut und vertreten Sie bei Rückfragen oder bei der Freigabe blockierter Beträge.
            </p>
          </>
        ),
      },
      {
        title: "Asset- und Krypto-Nachverfolgung",
        content:
          'Im Zentrum unserer Arbeit steht die Rückholung entwendeter oder unrechtmäßig transferierter Krypto-Vermögenswerte. Mittels „Follow the Money"-Analyse identifizieren wir die Empfänger-Wallets, ordnen sie Börsen oder Dienstleistern zu und schaffen damit die Grundlage für Auskunfts-, Einfrierungs- und Herausgabeanträge — auch grenzüberschreitend.',
      },
    ]}
    ctaTitle="Vertrauliche Erstberatung."
    ctaBody="Ob Mittelherkunftsnachweis, Rückführung entwendeter Krypto-Werte oder Vorbereitung eines Verfahrens — wir prüfen Ihren Sachverhalt diskret und nennen Ihnen die belastbaren Handlungsoptionen."
  />
);

export default BlogPostKryptonachverfolgung;
