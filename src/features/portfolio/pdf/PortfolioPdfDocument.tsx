import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  type DocumentProps
} from '@react-pdf/renderer'
import type { ReactElement } from 'react'
import type { PortfolioCopy } from '@/features/portfolio/content'
import type { SupportedLocale, ThemeMode } from '@/lib/preferences'

function createStyles(theme: ThemeMode) {
  const palette =
    theme === 'dark'
      ? {
          pageText: '#e2e8f0',
          pageBackground: '#020617',
          accent: '#38bdf8',
          mutedText: '#94a3b8',
          panelBackground: '#0f172a',
          panelBorder: '#1e293b',
          raisedBackground: '#111c33',
          badgeBackground: '#082f49',
          badgeText: '#bae6fd',
          footerBorder: '#1e293b'
        }
      : {
          pageText: '#0f172a',
          pageBackground: '#ffffff',
          accent: '#0284c7',
          mutedText: '#475569',
          panelBackground: '#f8fafc',
          panelBorder: '#dbe4f0',
          raisedBackground: '#ffffff',
          badgeBackground: '#e0f2fe',
          badgeText: '#075985',
          footerBorder: '#e2e8f0'
        }

  return StyleSheet.create({
    page: {
      paddingTop: 40,
      paddingBottom: 48,
      paddingHorizontal: 38,
      fontFamily: 'Helvetica',
      fontSize: 10,
      color: palette.pageText,
      backgroundColor: palette.pageBackground
    },
    headerEyebrow: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 1.8,
      color: palette.accent
    },
    title: {
      marginTop: 10,
      fontSize: 25,
      fontWeight: 700,
      lineHeight: 1.2
    },
    lead: {
      marginTop: 12,
      fontSize: 11,
      lineHeight: 1.6,
      color: palette.mutedText
    },
    heroBox: {
      marginTop: 18,
      padding: 18,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: palette.panelBorder,
      backgroundColor: palette.panelBackground
    },
    heroHighlight: {
      fontSize: 16,
      fontWeight: 700,
      color: palette.pageText
    },
    heroBody: {
      marginTop: 8,
      fontSize: 10,
      lineHeight: 1.7,
      color: palette.mutedText
    },
    statRow: {
      marginTop: 14,
      flexDirection: 'row',
      gap: 12
    },
    statCard: {
      flexGrow: 1,
      padding: 12,
      borderRadius: 12,
      backgroundColor: palette.raisedBackground,
      borderWidth: 1,
      borderColor: palette.panelBorder
    },
    statLabel: {
      fontSize: 8,
      textTransform: 'uppercase',
      letterSpacing: 1.2,
      color: palette.mutedText
    },
    statValue: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: 700
    },
    statDescription: {
      marginTop: 6,
      fontSize: 9,
      lineHeight: 1.5,
      color: palette.mutedText
    },
    section: {
      marginTop: 24
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 10
    },
    sectionLead: {
      marginBottom: 12,
      fontSize: 10,
      lineHeight: 1.6,
      color: palette.mutedText
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10
    },
    card: {
      width: '48%',
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: palette.panelBorder,
      backgroundColor: palette.raisedBackground
    },
    wideCard: {
      width: '100%',
      padding: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: palette.panelBorder,
      backgroundColor: palette.raisedBackground
    },
    cardTitle: {
      fontSize: 11,
      fontWeight: 700
    },
    cardBody: {
      marginTop: 6,
      fontSize: 9.5,
      lineHeight: 1.6,
      color: palette.mutedText
    },
    badgeRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6
    },
    badge: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 999,
      backgroundColor: palette.badgeBackground,
      color: palette.badgeText,
      fontSize: 8,
      fontWeight: 700
    },
    outcome: {
      marginTop: 8,
      fontSize: 9,
      fontWeight: 700,
      color: palette.pageText
    },
    contactBlock: {
      marginTop: 10,
      gap: 6
    },
    link: {
      fontSize: 10,
      color: palette.accent,
      textDecoration: 'none'
    },
    footer: {
      position: 'absolute',
      left: 38,
      right: 38,
      bottom: 18,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: palette.footerBorder,
      paddingTop: 8
    },
    footerText: {
      fontSize: 8,
      color: palette.mutedText
    }
  })
}

export function createPortfolioPdfDocument(
  copy: PortfolioCopy,
  locale: SupportedLocale,
  theme: ThemeMode
): ReactElement<DocumentProps> {
  const styles = createStyles(theme)

  return (
    <Document title={copy.meta.title} author="Dario" language={locale}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.headerEyebrow}>{copy.hero.eyebrow}</Text>
        <Text style={styles.title}>{copy.meta.title}</Text>
        <Text style={styles.lead}>{copy.meta.description}</Text>

        <View style={styles.heroBox}>
          <Text style={styles.heroHighlight}>{copy.hero.highlight}</Text>
          <Text style={styles.heroBody}>{copy.hero.description}</Text>

          <View style={styles.statRow}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>{copy.hero.statOneLabel}</Text>
              <Text style={styles.statValue}>{copy.hero.statOneValue}</Text>
              <Text style={styles.statDescription}>{copy.hero.statOneDescription}</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statLabel}>{copy.hero.statTwoLabel}</Text>
              <Text style={styles.statValue}>{copy.hero.statTwoValue}</Text>
              <Text style={styles.statDescription}>{copy.hero.statTwoDescription}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{copy.about.title}</Text>
          <Text style={styles.sectionLead}>{copy.about.lead}</Text>
          <View style={styles.grid}>
            {copy.about.highlights.map((item) => (
              <View key={item.title} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardBody}>{item.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{copy.projects.title}</Text>
          <Text style={styles.sectionLead}>{copy.projects.lead}</Text>
          <View style={{ gap: 10 }}>
            {copy.projects.items.map((project) => (
              <View key={project.title} style={styles.wideCard}>
                <View style={styles.badgeRow}>
                  {project.stack.map((item) => (
                    <Text key={item} style={styles.badge}>
                      {item}
                    </Text>
                  ))}
                </View>
                <Text style={[styles.cardTitle, { marginTop: 8 }]}>{project.title}</Text>
                <Text style={styles.cardBody}>{project.summary}</Text>
                <Text style={styles.outcome}>{project.outcome}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{copy.stack.title}</Text>
          <Text style={styles.sectionLead}>{copy.stack.lead}</Text>
          <View style={styles.grid}>
            {copy.stack.notes.map((item) => (
              <View key={item.title} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardBody}>{item.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{copy.contact.title}</Text>
          <Text style={styles.sectionLead}>{copy.contact.lead}</Text>
          <View style={styles.wideCard}>
            <Text style={styles.cardTitle}>{copy.contact.panelTitle}</Text>
            <Text style={styles.cardBody}>{copy.contact.panelDescription}</Text>
            <View style={styles.contactBlock}>
              <Link src="mailto:dario@example.com" style={styles.link}>
                {copy.contact.emailLabel}
              </Link>
              <Link src="https://github.com/" style={styles.link}>
                {copy.contact.githubLabel}
              </Link>
              <Link src="https://www.linkedin.com/" style={styles.link}>
                {copy.contact.linkedinLabel}
              </Link>
            </View>
          </View>
        </View>

        <View fixed style={styles.footer}>
          <Text style={styles.footerText}>{copy.meta.title}</Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  )
}
