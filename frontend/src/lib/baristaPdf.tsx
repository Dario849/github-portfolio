import { renderToBuffer, Document, Page, Text, View, Link, Image, StyleSheet } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { baristaCopy, baristaPublicUrl, type BaristaCopy } from "../i18n/barista";

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 36,
    fontFamily: "Helvetica",
    fontSize: 10.5,
    color: "#171412",
    lineHeight: 1.5,
  },
  headerBlock: {
    marginBottom: 20,
  },
  eyebrow: {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#6d655d",
    marginBottom: 6,
  },
  title: {
    fontSize: 21,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.2,
  },
  subtitle: {
    marginTop: 8,
    color: "#4f4943",
  },
  cta: {
    marginTop: 10,
    fontSize: 9.5,
    color: "#2351ff",
  },
  factsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 18,
    gap: 8,
  },
  factCard: {
    width: "31%",
    minWidth: 150,
    borderWidth: 1,
    borderColor: "#d8cfc1",
    borderRadius: 8,
    padding: 10,
  },
  factLabel: {
    fontSize: 8.5,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#6d655d",
    marginBottom: 4,
  },
  factValue: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13.5,
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd5c9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  bullet: {
    marginBottom: 4,
  },
  contactLink: {
    color: "#2351ff",
    textDecoration: "none",
    marginBottom: 4,
  },
  qrSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd5c9",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  qrImage: {
    width: 88,
    height: 88,
  },
  qrTitle: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  small: {
    fontSize: 9,
    color: "#6d655d",
  },
  footer: {
    marginTop: 8,
    fontSize: 9,
    color: "#6d655d",
  },
});

const BulletList = ({ items }: { items: readonly string[] }) => (
  <View>
    {items.map((item) => (
      <Text key={item} style={styles.bullet}>
        - {item}
      </Text>
    ))}
  </View>
);

const BaristaPdfDocument = ({
  copy,
  qrDataUrl,
}: {
  copy: BaristaCopy;
  qrDataUrl: string;
}) => (
  <Document
    title={copy.metadata.title}
    author="Darío Rodríguez"
    subject="Perfil barista"
    keywords="barista, espresso, prensa francesa, café, home brewer"
    language="es-ES"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>{copy.header.eyebrow}</Text>
        <Text style={styles.title}>{copy.hero.identity}</Text>
        <Text style={styles.subtitle}>{copy.hero.summary}</Text>
        <Text style={styles.subtitle}>{copy.hero.summaryTail}</Text>
        <Link src={`mailto:${copy.contact.items[0]?.value ?? ""}`} style={styles.cta}>
          {copy.hero.secondaryCta}
        </Link>
      </View>

      <View style={styles.factsRow}>
        {copy.hero.quickFacts.map((fact) => (
          <View key={fact.label} style={styles.factCard}>
            <Text style={styles.factLabel}>{fact.label}</Text>
            <Text style={styles.factValue}>{fact.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{copy.story.title}</Text>
        <Text style={styles.paragraph}>{copy.story.intro}</Text>
        {copy.story.steps.map((step) => (
          <View key={step.title} style={styles.card}>
            <Text style={styles.cardTitle}>{step.title}</Text>
            <Text>{step.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{copy.skills.title}</Text>
        <Text style={styles.paragraph}>{copy.skills.intro}</Text>
        {copy.skills.items.map((item) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <BulletList items={item.points} />
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{copy.espresso.title}</Text>
        <Text style={styles.paragraph}>{copy.espresso.summary}</Text>
        <View style={styles.card}>
          <BulletList items={copy.espresso.highlights} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{copy.espresso.noteTitle}</Text>
          <Text>{copy.espresso.note}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{copy.service.title}</Text>
        <Text style={styles.paragraph}>{copy.service.summary}</Text>
        {copy.service.items.map((item) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{copy.contact.title}</Text>
        <Text style={styles.paragraph}>{copy.contact.summary}</Text>
        {copy.contact.items.map((item) => (
          <Link key={item.label} src={item.href} style={styles.contactLink}>
            {item.label}: {item.value}
          </Link>
        ))}
      </View>

      <View style={styles.qrSection}>
        <Image src={qrDataUrl} style={styles.qrImage} />
        <View>
          <Text style={styles.qrTitle}>{copy.pdf.qrTitle}</Text>
          <Text style={styles.paragraph}>{copy.pdf.qrCaption}</Text>
          <Link src={baristaPublicUrl} style={styles.contactLink}>
            {baristaPublicUrl}
          </Link>
        </View>
      </View>

      <Text style={styles.footer}>
        PDF compacto. Contenido centrado en perfil barista, no en portfolio general.
      </Text>
    </Page>
  </Document>
);

export const renderBaristaPdfBuffer = async () => {
  const qrDataUrl = await QRCode.toDataURL(baristaPublicUrl, {
    margin: 1,
    width: 220,
    color: {
      dark: "#171412",
      light: "#ffffff",
    },
  });

  return renderToBuffer(
    <BaristaPdfDocument copy={baristaCopy} qrDataUrl={qrDataUrl} />,
  );
};
