import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { contact } from "@/content";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Datenschutz — Javeed Ahamed",
};

function P({ children }: { children: ReactNode }) {
  return <p className="text-base leading-relaxed text-ink">{children}</p>;
}

const LINK_CLASS = "underline decoration-rule underline-offset-4 hover:decoration-ink";

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-ink">
          <span aria-hidden="true" className="text-ink-muted">
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <main>
        <Section ground="paper">
          <div className="max-w-[65ch]">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Datenschutzerklärung
            </h1>

            <div className="mt-10 flex flex-col gap-12">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  1. Verantwortlicher
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <P>
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                  </P>
                  <P>
                    Javeed Ahamed
                    <br />
                    Berlin
                    <br />
                    Deutschland
                    <br />
                    E-Mail:{" "}
                    <a href={`mailto:${contact.email}`} className={LINK_CLASS}>
                      {contact.email}
                    </a>
                  </P>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  2. Grundsätzliches
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <P>
                    Diese Website verwendet keine Cookies, keine Analyse- oder
                    Tracking-Werkzeuge und keine Werbe- oder Social-Media-Plugins. Es
                    findet keine Profilbildung und keine automatisierte
                    Entscheidungsfindung statt. Eine Einwilligung in die Speicherung
                    von Informationen auf Ihrem Endgerät ist daher nicht erforderlich.
                  </P>
                  <P>
                    Verwendete Schriftarten werden lokal vom Server dieser Website
                    ausgeliefert. Es erfolgt keine Verbindung zu externen
                    Schriftarten-Diensten.
                  </P>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  3. Hosting und Server-Logfiles
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <P>Diese Website wird gehostet von:</P>
                  <P>Vercel, Inc., Delaware, USA</P>
                  <P>
                    Datenschutzerklärung:{" "}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={LINK_CLASS}
                    >
                      https://vercel.com/legal/privacy-policy
                    </a>
                  </P>
                  <P>
                    Auftragsverarbeitungsvertrag:{" "}
                    <a
                      href="https://vercel.com/legal/dpa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={LINK_CLASS}
                    >
                      https://vercel.com/legal/dpa
                    </a>
                  </P>
                  <P>
                    Beim Aufruf dieser Website werden durch den Hosting-Anbieter
                    automatisch Informationen in Server-Logfiles verarbeitet, die Ihr
                    Browser übermittelt:
                  </P>
                  <List
                    items={[
                      "IP-Adresse",
                      "Datum und Uhrzeit des Zugriffs",
                      "aufgerufene Seite beziehungsweise Datei",
                      "übertragene Datenmenge und Statusmeldung",
                      "Browsertyp, Browserversion und Betriebssystem",
                      "gegebenenfalls die zuvor besuchte Seite (Referrer)",
                    ]}
                  />
                  <P>
                    Diese Verarbeitung ist technisch erforderlich, um die Website
                    auszuliefern sowie Stabilität und Sicherheit zu gewährleisten.
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes
                    Interesse liegt im technisch fehlerfreien und sicheren Betrieb
                    dieser Website.
                  </P>
                  <P>
                    Die Daten werden nicht mit anderen Datenquellen zusammengeführt
                    und nicht zur Identifizierung einzelner Personen verwendet. Sie
                    werden vom Hosting-Anbieter nach kurzer Zeit automatisch gelöscht.
                  </P>
                  <P>
                    Mit dem Hosting-Anbieter besteht ein Vertrag zur
                    Auftragsverarbeitung nach Art. 28 DSGVO. Eine Verarbeitung in den
                    Vereinigten Staaten von Amerika kann nicht ausgeschlossen werden.
                    Die Übermittlung erfolgt auf Grundlage der
                    Standardvertragsklauseln der Europäischen Kommission
                    beziehungsweise einer Zertifizierung nach dem EU-US Data Privacy
                    Framework.
                  </P>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  4. Kontaktaufnahme per E-Mail
                </h2>
                <div className="mt-4">
                  <P>
                    Wenn Sie mich per E-Mail kontaktieren, verarbeite ich Ihre
                    Angaben ausschließlich zur Bearbeitung Ihrer Anfrage.
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO beziehungsweise,
                    sofern die Anfrage auf einen Vertrag abzielt, Art. 6 Abs. 1 lit. b
                    DSGVO. Ihre Angaben werden gelöscht, sobald sie für den Zweck der
                    Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen
                    Aufbewahrungspflichten entgegenstehen.
                  </P>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  5. Externe Links
                </h2>
                <div className="mt-4">
                  <P>
                    Diese Website enthält Links zu externen Diensten, darunter
                    LinkedIn, GitHub sowie eine auf Render gehostete Anwendung. Beim
                    Anklicken eines solchen Links verlassen Sie diese Website. Auf die
                    Datenverarbeitung durch die jeweiligen Anbieter habe ich keinen
                    Einfluss. Es werden keine Daten automatisch an diese Dienste
                    übermittelt, solange Sie die Links nicht aktiv anklicken.
                  </P>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  6. Ihre Rechte
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <P>Sie haben nach der DSGVO folgende Rechte:</P>
                  <List
                    items={[
                      "Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO)",
                      "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                      "Löschung (Art. 17 DSGVO)",
                      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                      "Datenübertragbarkeit (Art. 20 DSGVO)",
                      "Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)",
                    ]}
                  />
                  <P>
                    Zur Ausübung dieser Rechte genügt eine Nachricht an die oben
                    genannte E-Mail-Adresse.
                  </P>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  7. Beschwerderecht
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <P>
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                    über die Verarbeitung Ihrer personenbezogenen Daten zu
                    beschweren. Zuständig ist:
                  </P>
                  <P>
                    Berliner Beauftragte für Datenschutz und Informationsfreiheit
                    <br />
                    Alt-Moabit 59–61
                    <br />
                    10555 Berlin
                  </P>
                </div>
              </div>

              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  8. Änderungen dieser Datenschutzerklärung
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <P>
                    Diese Datenschutzerklärung wird angepasst, sobald sich die
                    Datenverarbeitung auf dieser Website ändert.
                  </P>
                  <P>Stand: August 2026</P>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="border-t border-rule">
        <div className="mx-auto max-w-[68rem] px-6 py-10 font-mono text-xs text-ink-muted sm:px-8">
          <Link
            href="/"
            className="underline decoration-rule underline-offset-4 hover:decoration-ink hover:text-ink"
          >
            ← Back to homepage
          </Link>
        </div>
      </footer>
    </>
  );
}
