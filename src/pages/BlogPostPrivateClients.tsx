import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostPrivateClients = () => (
  <KompetenzLayout
    breadcrumbLabel="Private Clients"
    title={<>Private Clients &<br />Family Offices.</>}
    heroLead="Diskrete, vorausschauende Vermögens- und Nachfolgeplanung — inklusive der besonderen Anforderungen digitaler Vermögenswerte."
    introStatement="Langfristige Begleitung. Familiäres Augenmaß."
    introBody={
      <>
        <p>
          Wir beraten Privatpersonen und Family Offices in allen Fragen der langfristigen Vermögens- und Nachfolgeplanung — diskret, vorausschauend und mit Blick auf die familiäre Gesamtsituation.
        </p>
        <p>
          Unser Fokus liegt auf der rechtssicheren Gestaltung von Testamenten, Schenkungen, Vorsorgevollmachten und Ehe-/Partnerschaftsverträgen sowie der gesellschaftsrechtlichen Strukturierung von Familienvermögen. Zunehmend gehören dazu auch digitale Vermögenswerte: Krypto-Bestände bedürfen einer eigenen Nachlassplanung — von der Zugangs- und Schlüsselverwahrung bis zur dokumentierten Mittelherkunft.
        </p>
        <p>
          Im Konfliktfall agieren wir zunächst als Mediatoren. Lässt sich eine außergerichtliche Lösung nicht erzielen, vertreten wir Sie konsequent vor Gericht.
        </p>
      </>
    }
    focusHeadline="Vorsorge, Übergabe, Schutz."
    focusItems={[
      {
        title: "Nachfolgeplanung",
        content:
          "Eine vorausschauende Nachfolgeplanung sichert den geordneten Übergang Ihres Vermögens — einschließlich Beteiligungen, Immobilien und digitaler Assets wie Krypto-Beständen — in die nächste Generation.",
      },
      {
        title: "Testamente",
        content:
          "Wir analysieren Ihre erbrechtliche Ausgangslage und gestalten Testamente, die Ihren Wünschen entsprechen — inklusive Regelungen zu Krypto-Wallets, Zugangsdaten und Verwahrlösungen.",
      },
      {
        title: "Vorsorgevollmachten und Patientenverfügungen",
        content:
          "Vorsorgevollmachten und Patientenverfügungen sichern Ihre Selbstbestimmung im Fall einer Entscheidungsunfähigkeit. Wir bestimmen mit Ihnen bevollmächtigte Personen und formulieren medizinische Vorgaben rechtssicher und durchsetzbar.",
      },
      {
        title: "Schenkungsverträge unter Lebenden und auf den Todesfall",
        content:
          "Wir gestalten Schenkungen steuerlich optimiert und konfliktvermeidend — und berücksichtigen dabei die zunehmende Praxis, auch Krypto-Vermögenswerte frühzeitig zu übertragen.",
      },
      {
        title: "Partnerschafts- und Eheverträge",
        content:
          "Partnerschafts- und Eheverträge schaffen rechtliche Klarheit über Güterstand, Vermögenszuordnung und Versorgungsregelungen — und damit Sicherheit für beide Seiten.",
      },
      {
        title: "Interfamiliäre Übertragung von Kapitalanlagen, Unternehmen und Immobilien",
        content:
          "Wir begleiten Übertragungen zu Lebzeiten — vom Übertragungsvertrag bis zu begleitenden Nießbrauch- und Versorgungsregelungen.",
      },
      {
        title: "Gesellschafts- und erbrechtliche Nachfolgegestaltung",
        content:
          "Wir verbinden gesellschafts- und erbrechtliche Gestaltung zu einem stimmigen Gesamtkonzept — von der Holding-Struktur über Familienpoolverträge bis zur Übertragung digitaler Vermögenswerte.",
      },
    ]}
    ctaTitle="Vermögen geordnet weiterführen."
    ctaBody="Wir entwickeln mit Ihnen eine Struktur, die familiäre, steuerliche und juristische Anforderungen verbindet — diskret, generationsübergreifend, dokumentiert."
  />
);

export default BlogPostPrivateClients;
