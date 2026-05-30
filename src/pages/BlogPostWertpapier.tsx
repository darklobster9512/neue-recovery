import { KompetenzLayout } from "@/components/KompetenzLayout";

const BlogPostWertpapier = () => (
  <KompetenzLayout
    breadcrumbLabel="Kapitalmarktrecht"
    title={<>Wertpapier- &<br />Kapitalmarktrecht.</>}
    heroLead="Von der Produktstrukturierung über aufsichtsrechtliche Verfahren bis zur Durchsetzung von Anlegeransprüchen — klassisch und für tokenisierte Finanzinstrumente."
    introStatement="Klassisches Kapitalmarktrecht, verbunden mit Krypto-Kompetenz."
    introBody={
      <>
        <p>
          Wir beraten und vertreten in allen Fragen des Wertpapier- und Kapitalmarktrechts — von der Produktstrukturierung über aufsichtsrechtliche Verfahren bis zur Durchsetzung von Anlegeransprüchen.
        </p>
        <p>
          Die Regulierungsdichte am Kapitalmarkt nimmt stetig zu. Mit Kryptowerten und tokenisierten Finanzinstrumenten ist eine neue Asset-Klasse hinzugekommen, deren rechtliche Einordnung — von MiCAR über Prospektpflichten bis hin zu Geldwäsche- und Compliance-Vorgaben — fundierte Expertise erfordert.
        </p>
      </>
    }
    focusHeadline="Beratung, Streit, Verfahren."
    focusItems={[
      {
        title: "Beratung von FinTechs, Wertpapierfirmen und -dienstleistern",
        content:
          "Wir beraten FinTechs, Wertpapierfirmen und Krypto-Asset-Dienstleister bei Lizenzierung, Compliance-Aufbau, Produktgestaltung und der Umsetzung aufsichtsrechtlicher Vorgaben — von MiFID II bis MiCAR.",
      },
      {
        title: "Schadenersatzansprüche bei (Krypto-)Futures, Swaps, Investmentfonds, Anleihen",
        content:
          "Wir setzen Schadenersatzansprüche aus fehlerhafter Anlageberatung, Prospekthaftung und Pflichtverletzungen bei komplexen Finanzprodukten durch — einschließlich Krypto-Derivaten, Futures, Swaps und Investmentfonds. Über zehn Jahre Prozesserfahrung fließen in jedes Mandat ein.",
      },
      {
        title: "Kryptowährungen und Finanzierungen",
        content:
          "Krypto-Assets sind ein Kernbereich unserer Kanzlei. Wir beraten bei der Strukturierung von Token-Emissionen, bei Streitigkeiten aus Krypto-Investments und Krediten und bei der rechtssicheren Integration von Krypto-Werten in bestehende Finanzierungen.",
      },
      {
        title: "Zivil-, aufsichts- und verwaltungsbehördliche Verfahren",
        content:
          "Wir vertreten in Zivilprozessen, aufsichts- und verwaltungsbehördlichen Verfahren rund um Finanz- und Krypto-Produkte — vor Gerichten ebenso wie gegenüber FMA, BaFin und vergleichbaren Aufsichtsstellen.",
      },
    ]}
    ctaTitle="Kapitalmarktmandat anfragen."
    ctaBody="Ob Lizenzierung, Anlegerverfahren oder Token-Strukturierung — wir prüfen Ihren Sachverhalt und entwickeln eine belastbare Strategie."
  />
);

export default BlogPostWertpapier;
