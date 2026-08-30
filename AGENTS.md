# Werkafspraken voor High Roleplay Website

Dit document geldt voor iedere toekomstige bijdrage in deze map. De map bevat uitsluitend de openbare website van High Roleplay.

## Scheiding van projecten

- Houd de website volledig gescheiden van de FiveM-serverrepository, serverbestanden, databases en beheerpanelen.
- Kopieer of koppel geen serverconfiguraties, resources, scripts, logs, back-ups of database-exports naar dit project.
- Gebruik geen submodules, symbolische koppelingen of buildstappen die bestanden uit het serverproject ophalen.
- De website moet zelfstandig werken als statische GitHub Pages-site.

## Privacy en geheimen

- Voeg nooit licentiesleutels, tokens, wachtwoorden, webhooks, IP-adressen, persoonlijke identifiers, privé-e-mailadressen of andere geheime gegevens toe.
- Plaats uitsluitend gegevens die bewust openbaar mogen zijn. Controleer wijzigingen voor publicatie handmatig op geheimen en persoonsgegevens.
- Gebruik geen analytics, tracking, cookies, advertenties of externe lettertypen zonder een afzonderlijk, expliciet goedgekeurd besluit.
- Voeg geen `.env`-bestand toe. Als later configuratie nodig is, gebruik dan alleen aantoonbaar openbare waarden en documenteer waarom.

## Inhoud en eerlijkheid

- Schrijf in helder Nederlands en formuleer originele teksten.
- Verzin geen spelersaantallen, staffleden, openingsdata, partners, serverfuncties of andere onbevestigde feiten.
- Zeg niet dat de server openbaar of gereed is zolang dat niet expliciet is bevestigd.
- Markeer ongoedgekeurd beleid zichtbaar als concept.
- Gebruik geen teksten, logo's of afbeeldingen van andere FiveM-servers.

## Techniek en onderhoud

- Gebruik begrijpelijke, semantische HTML, CSS en JavaScript zonder framework of externe runtime-afhankelijkheden.
- Bewaar afbeeldingen, logo's en iconen lokaal in `assets/images/` en controleer gebruiksrechten.
- `assets/images/hero-preview.jpg` is uitsluitend een lokale ontwerp-preview met onbekende hergebruikrechten. Houd dit bestand genegeerd door Git en vervang het vóór iedere publicatie door een eigen beeld of een beeld met aantoonbare toestemming.
- Ontwerp mobiel eerst en voeg verbeteringen voor grotere schermen progressief toe.
- Zorg dat de kerninhoud ook leesbaar blijft als JavaScript uitstaat; JavaScript mag alleen de ervaring verbeteren.
- Open externe links met `target="_blank"` en `rel="noopener noreferrer"`.
- Gebruik geen inline scripts, verborgen externe verzoeken of code van onbekende herkomst.

## Toegankelijkheid en kwaliteit

- Gebruik semantische koppen, landmarks, beschrijvende linkteksten en correcte labels.
- Alle bediening moet met een toetsenbord werken en een duidelijke focusstijl hebben.
- Houd tekstcontrast minimaal op WCAG AA-niveau en respecteer `prefers-reduced-motion`.
- Test voor iedere oplevering minimaal: interne links, 404-pagina, mobiele en brede schermen, toetsenbordvolgorde, focuszichtbaarheid, APV-filter, JavaScript-fallback en consolefouten.
- Controleer op ongewenste externe verzoeken en gevoelige gegevens.

## Wijzigingsbeheer

- Werk `CHANGELOG.md` bij bij inhoudelijke of technische wijzigingen.
- Leg blijvende keuzes en redenen vast in `DECISIONS.md`.
- Plaats onbevestigde suggesties in `IDEAS.md`; voer ze pas uit na goedkeuring.
- Houd wijzigingen klein en controleerbaar. Maak geen remote, publicatie of GitHub-koppeling zonder expliciete opdracht.
