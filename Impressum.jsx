/* Impressum.jsx */
function Impressum() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-impressum", handler);
    return () => window.removeEventListener("open-impressum", handler);
  }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="legal-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="legal-modal">
        <button className="legal-modal__close" onClick={() => setOpen(false)} aria-label="Schließen">✕</button>
        <h2 className="legal-modal__title">IMPRESSUM</h2>

        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          Tobias Flister<br />
          Scharfensteinstraße 16<br />
          34295 Edermünde
        </p>

        <h3>Kontakt</h3>
        <p>
          E-Mail: <a href="mailto:vlistamedia@gmail.com">vlistamedia@gmail.com</a>
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Tobias Flister<br />
          Scharfensteinstraße 16<br />
          34295 Edermünde
        </p>

        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
    </div>
  );
}
window.Impressum = Impressum;
