# High Roleplay — openbare website

Eerste lokale versie van de openbare website voor High Roleplay. De server en de website zijn afzonderlijke projecten; deze repository mag uitsluitend openbaar veilige websitebestanden bevatten.

## Lokaal openen

Er is niets te installeren en internet is niet nodig voor de site zelf.

1. Open `index.html` rechtstreeks in een moderne browser.
2. Gebruik de navigatie om de concept-APV te bekijken.
3. Alleen de Discord-knop opent een externe website en heeft internet nodig.

De huidige hero gebruikt lokaal `assets/images/hero-preview.jpg`. Dit bestand is alleen een tijdelijke ontwerp-preview met onbekende hergebruikrechten, wordt door Git genegeerd en mag niet worden gepubliceerd. Vervang het vóór publicatie door een eigen afbeelding of een afbeelding met bevestigde toestemming.

Voor een realistischer lokale test kan vanuit deze map een eenvoudige lokale webserver worden gestart, bijvoorbeeld wanneer Python al aanwezig is:

```powershell
python -m http.server 8000
```

Open daarna `http://localhost:8000/`. Dit commando installeert niets en is niet nodig voor normaal gebruik.

## Handmatig testen

- Controleer `index.html`, `apv.html` en `404.html` op telefoon- en desktopschermbreedte.
- Loop met `Tab`, `Shift+Tab`, `Enter` en `Spatie` door navigatie, knoppen, hoofdstuklinks en de ingeklapte APV-hoofdstukken.
- Controleer dat `Over ons` vanuit de hoofd- en voetnavigatie naar de juiste homesectie gaat.
- Zoek in de APV op termen zoals `RDM`, `metagaming`, `hulpdiensten` en een niet-bestaande term; controleer dat passende hoofdstukken openen.
- Wis de zoekopdracht met het kruisje via muis en toetsenbord en controleer dat alle hoofdstukken zichtbaar en weer ingeklapt zijn.
- Open een adres zoals `apv.html#hoofdstuk-15` en controleer dat het gekoppelde hoofdstuk automatisch opent.
- Schakel JavaScript uit en bevestig dat de volledige APV leesbaar blijft.
- Controleer dat de Discord-link exact `https://discord.gg/zPV2AMXaX` gebruikt en veilig in een nieuw tabblad opent.
- Controleer vóór iedere publicatie op geheimen, persoonsgegevens en onverwachte externe bronnen.

## Structuur

- `index.html` — homepage
- `apv.html` — eerste concept-APV
- `404.html` — foutpagina voor GitHub Pages
- `styles.css` — alle lokale opmaak
- `script.js` — navigatie en lokale APV-filtering
- `assets/images/` — toekomstige eigen afbeeldingen, logo en favicon
- `AGENTS.md` — blijvende werk-, privacy-, veiligheids- en kwaliteitsregels
- `PROJECT_BRIEF.md` — visie en bevestigde projectgegevens
- `ROADMAP.md` — kleine, controleerbare fasen
- `DECISIONS.md` — genomen en nog te nemen besluiten
- `IDEAS.md` — niet-goedgekeurde ideeën
- `CHANGELOG.md` — wijzigingshistorie

## Later publiceren via GitHub Pages

Publiceer pas na expliciete goedkeuring en een laatste veiligheidscontrole:

1. Maak onder de openbare gebruiker `HighRoleplayNL` een **nieuwe, afzonderlijke openbare repository** voor alleen deze website.
2. Controleer opnieuw dat er geen serverbestanden, sleutels, persoonlijke gegevens of ongewenste geschiedenis aanwezig zijn.
3. Verwijder `assets/images/hero-preview.jpg` en vervang de hero door een eigen of aantoonbaar toegestane afbeelding.
4. Voeg daarna pas de repository als remote toe en push branch `main`.
5. Activeer in de repository-instellingen GitHub Pages vanaf de hoofdmap van branch `main`.
6. Controleer de gepubliceerde links, 404-pagina en APV opnieuw.

Deze eerste versie maakt of gebruikt nog geen GitHub-remote en publiceert niets.

## Inhoudelijke status

De APV is een eerste concept en nog niet definitief. De open beleidskeuzes staan in `DECISIONS.md`. Verwijder de conceptmarkering pas nadat de eigenaar alle relevante keuzes heeft goedgekeurd.
