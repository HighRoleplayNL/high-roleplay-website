# Besluitenlog

## Vastgestelde projectkeuzes

### D-001 — Volledig statische website

**Status:** vastgesteld

**Keuze:** gewone HTML, CSS en JavaScript zonder framework, database of externe afhankelijkheden.

**Reden:** eenvoudig lokaal te openen, goedkoop te hosten via GitHub Pages en goed te onderhouden.

### D-002 — Strikte scheiding van de FiveM-server

**Status:** vastgesteld

**Keuze:** de website bevat geen serverbestanden, configuraties, sleutels, API-koppelingen, submodules of andere technische verbindingen met het FiveM-serverproject.

**Reden:** veiligheid, privacy en een schone openbare repository.

### D-003 — Mobiel-eerste donker ontwerp

**Status:** vastgesteld

**Keuze:** nachtblauwe basis, helderblauw accent, lokale systeemlettertypen en een tekstuele `HR`-placeholder.

**Reden:** professionele uitstraling, snelle laadtijd, goede leesbaarheid en geen externe aanvragen.

### D-004 — Conceptstatus van de APV

**Status:** vastgesteld

**Keuze:** de eerste APV wordt overal duidelijk als concept getoond. Onbevestigde beleidsdetails krijgen een expliciet conceptlabel.

**Reden:** voorkomen dat voorlopige tekst als definitief of afdwingbaar beleid wordt gezien.

### D-005 — Progressieve APV-filtering

**Status:** vastgesteld

**Keuze:** alle artikelen staan direct in HTML; lokaal JavaScript voegt zoeken en filteren toe.

**Reden:** de APV blijft zonder JavaScript volledig leesbaar en werkt zonder internet.

### D-006 — Filmische, compacte presentatie

**Status:** vastgesteld

**Keuze:** de homepage gebruikt een beeldvullende hero met compacte navigatie, beperkte tekst, één rustige ontwikkelstatus en directe APV- en Discord-acties. De APV gebruikt compacte introductie en native inklapbare hoofdstukken.

**Reden:** bezoekers zien sneller de identiteit en belangrijkste acties, terwijl de volledige APV-inhoud overzichtelijk en toegankelijk blijft.

### D-007 — Tijdelijke hero-afbeelding niet publiceren

**Status:** tijdelijk vastgesteld

**Keuze:** `assets/images/hero-preview.jpg` wordt uitsluitend lokaal gebruikt, expliciet door Git genegeerd en niet gewijzigd.

**Reden:** de hergebruikrechten zijn onbekend. Vóór publicatie is een eigen afbeelding of aantoonbare toestemming vereist.

### D-008 — Rustige APV-navigatie

**Status:** vastgesteld

**Keuze:** de veertien APV-hoofdstukken zijn afzonderlijke native inklapbare kaarten en staan bij een regulier bezoek standaard dicht. Een rechtstreekse hoofdstuklink of zoekresultaat opent alleen de relevante inhoud; wissen van de zoekopdracht herstelt het ingeklapte overzicht.

**Reden:** dit verkort de pagina visueel zonder inhoud te verbergen voor toetsenbordgebruikers, schermlezers of bezoekers zonder JavaScript.

### D-009 — Eerste lokale visuele goedkeuring

**Status:** vastgesteld op 30 augustus 2026

**Keuze:** de huidige lokale homepage, navigatie, Over-ons-sectie en APV-presentatie zijn visueel goedgekeurd als eerste herstelpunt. De hero heeft een donkerblauwe CSS-terugval wanneer de tijdelijke preview ontbreekt.

**Reden:** het goedgekeurde ontwerp blijft lokaal herkenbaar en leesbaar zonder een niet-publiceerbaar beeldbestand in Git op te nemen. De tijdelijke hero moet vóór publicatie worden vervangen door een eigen afbeelding of een afbeelding met aantoonbare toestemming.

### D-010 — Scheiding tussen APV, wetboeken en techniek

**Status:** vastgesteld op 30 augustus 2026

**Keuze:** de APV regelt spelersgedrag, staffhandelen en roleplay. IC-misdrijven, boetes en celstraffen komen later in het Wetboek van Strafrecht; politiebevoegdheden, procedures en rechten later in het Wetboek van Strafvordering. Cooldowns, dienststatussen, reserveringen, logging en automatische blokkades worden in scripts of configuratie beheerd.

**Reden:** iedere regel blijft op de juiste plek vindbaar, uitvoerbaar en onderhoudbaar zonder beleidsregels met speltechniek te vermengen.

### D-011 — Goedgekeurde APV-kaders

**Status:** vastgesteld op 30 augustus 2026

**Keuze:** de aangeleverde kaders voor één account en actief personage, NLR, combat logging, overvallen, politiebeschikbaarheid, gangsamenwerking, overheidscorruptie, in-game communicatie, vuurwapens, staffbehandeling, sanctiecategorieën, bezwaar en minimale interne registratie zijn verwerkt in de concept-APV.

**Reden:** deze keuzes zijn inhoudelijk goedgekeurd en vervangen de eerdere open conceptvoorstellen. De APV blijft als geheel een concept totdat versie, ingangsdatum en wijzigingsprocedure zijn vastgesteld.

## Nog goed te keuren APV-keuzes

Deze punten zijn bewust nog geen definitief beleid:

1. De definitieve indeling van kleine en middelgrote overvallen nadat de gebruikte resources zijn gekozen.
2. De inhoud van het toekomstige Wetboek van Strafrecht en Wetboek van Strafvordering.
3. Eventuele afzonderlijke regels voor messen, slagwapens en andere niet-vuurwapens.
4. Of later een verborgen, dure en beperkte NPC-bron voor vuurwapens wordt toegevoegd.
5. De definitieve APV-versie, ingangsdatum en procedure voor toekomstige wijzigingen.
6. Of per APV-artikel een standaard sanctiecategorie nodig is; staff gebruikt tot die beslissing de vastgestelde algemene beoordelingsfactoren.
