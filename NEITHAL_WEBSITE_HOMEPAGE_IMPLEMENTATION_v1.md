# NEITHAL® WEBSITE — HOMEPAGE + HERO IMPLEMENTATION SPECIFICATION
## Version 1.0
### For Antigravity Implementation

---

## 0. PROJECT OBJECTIVE

Build a premium, modern healthcare website for:

**NEITHAL® AYURVEDA**

Tagline:

**Traditional Wisdom | Modern Care**

Core identity:

**CLINIC | PHARMACY | PANCHAKARMA | YOGA**

Primary domain:

`neithalayurveda.com`

Clinic:

**#83, Chetty Street, MG Road Junction, Heritage Town, Puducherry – 605001**

Phone / WhatsApp:

**+91 94880 23328**

Email:

**neithalayurveda@gmail.com**

Working hours:

**9:00 AM – 9:00 PM**

Established:

**2019**

---

# 1. DESIGN DIRECTION

The website must NOT look like a generic Ayurveda clinic template.

The visual direction is:

> **Premium healthcare + traditional Ayurveda + contemporary editorial design**

Reference feeling:

- Apple-level clarity
- Google-level information hierarchy
- Premium wellness / healthcare brand
- Indian cultural subtlety
- Calm and trustworthy
- Human
- Minimal
- Spacious
- Sophisticated

Avoid:

- Excessive decorative Ayurveda graphics
- Generic stock Ayurveda imagery
- Overuse of leaves
- Loud gradients
- Excessive gold
- Heavy shadows
- Excessive rounded cards
- Flashy animations
- Sales-heavy language
- "Guaranteed cure" language
- Fake statistics
- Fake testimonials
- Medical claims without evidence

---

# 2. BRAND SYSTEM

## 2.1 Logo

Use the supplied official Neithal logo.

Primary logo file:

`neithal-logo.png`

Requirements:

- Preserve proportions
- Do not recolor the logo
- Do not distort
- Do not add shadows
- Do not crop
- Maintain clear space
- Use the gold/black version on light backgrounds
- Use an appropriate reversed version only if an official asset exists

The logo should visually anchor the website header.

---

# 2.2 Brand Colors

Use these as the initial design tokens.

```css
--neithal-green-950: #06352A;
--neithal-green-900: #0A3F32;
--neithal-green-800: #124D3D;

--neithal-gold-500: #C9A227;
--neithal-gold-400: #D8B94E;
--neithal-gold-300: #E8CF72;

--neithal-cream-50: #FCFAF4;
--neithal-cream-100: #F6F1E5;
--neithal-cream-200: #EEE6D5;

--neithal-black: #11110F;
--neithal-white: #FFFFFF;

--neithal-text: #22231F;
--neithal-muted: #68685F;
--neithal-border: rgba(17,17,15,0.12);
```

Use gold as an accent, not as the dominant page color.

Primary visual balance:

- 60–70% cream/white
- 20–30% green
- 5–10% gold

---

# 2.3 Typography

Use a premium serif + modern sans-serif combination.

Recommended:

### Display / editorial

`Cormorant Garamond`

Fallback:

`Georgia, serif`

### UI / body

`Inter`

Fallback:

`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Typography rules:

- Large serif headlines
- Clean sans-serif navigation
- Generous line-height
- Avoid all-caps paragraphs
- Small uppercase labels can use letter spacing

---

# 3. GLOBAL HEADER

Desktop header consists of TWO levels.

## 3.1 Utility bar

Height:

**34–38px**

Background:

`--neithal-green-950`

Content:

Left:

**#83, Chetty Street, MG Road Junction, Heritage Town, Puducherry – 605001**

Center/right:

**9:00 AM – 9:00 PM**

Phone:

**+91 94880 23328**

Social:

Instagram / Facebook / YouTube

Typography:

10–12px.

Gold should be used sparingly.

---

# 3.2 Main navigation

Height:

**78–84px**

Background:

Cream / white.

Layout:

```text
[LOGO]     Home  About  Treatments  Conditions  AHARA  Pharmacy  Journal  Contact

                                             Search   [Book a Consultation]
```

Logo should include:

- circular Neithal mark
- NEITHAL®
- Traditional Wisdom | Modern Care
- CLINIC | PHARMACY | PANCHAKARMA | YOGA

If this makes the desktop logo too tall, use a compact lockup.

---

# 3.3 Navigation behavior

At scroll:

- Header becomes sticky
- Slight backdrop blur
- Slightly reduced height
- Subtle bottom border
- No dramatic animation

Use:

```css
position: sticky;
top: 0;
z-index: 100;
backdrop-filter: blur(16px);
```

---

# 4. HERO SECTION

## 4.1 Objective

The visitor should understand Neithal within approximately 5 seconds.

The hero must communicate:

1. Neithal
2. Ayurveda
3. Traditional + modern
4. Human care
5. Puducherry
6. Clear appointment action

---

## 4.2 Hero content

Eyebrow:

**AYURVEDA FOR A BETTER TOMORROW**

Main headline:

# Traditional Wisdom.
# Modern Care.

Supporting copy:

> A more personal approach to Ayurvedic care.

Secondary descriptor:

**Ayurveda · Panchakarma · Pharmacy · Yoga**

Primary CTA:

**Book a Consultation →**

Secondary CTA:

**Explore Treatments →**

Trust indicators:

**Trusted Care**
Since 2019

**Personalized**
Treatment Plans

**Holistic**
Mind · Body · Life

Bottom location:

**Puducherry · Since 2019**

---

# 4.3 Hero layout

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  LEFT 45%                         RIGHT 55%                  │
│                                                              │
│  EYEBROW                            HUMAN CLINIC IMAGE       │
│                                                              │
│  Traditional                                                  │
│  Wisdom.                                                      │
│  Modern Care.                                                 │
│                                                              │
│  Supporting copy                                              │
│                                                              │
│  [Book] [Explore]                                             │
│                                                              │
│  Trust indicators                    Doctor + Patient         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

Recommended hero height:

**650–720px desktop**

Do not make the hero unnecessarily tall.

---

# 4.4 Hero image

Use high-quality real clinic photography when available.

Preferred composition:

- Ayurveda doctor
- Patient consultation
- Natural clinic environment
- Warm daylight
- Dark green / cream wardrobe
- Authentic Indian environment
- Premium photography
- Calm human interaction

Do not use:

- AI-looking people
- Generic Western wellness imagery
- Overly staged medical imagery
- Fear-based disease imagery

Until real Neithal photography is available, use the approved visual mockup as a design reference.

---

# 4.5 Hero image treatment

The image can slightly overlap the green background.

Use subtle:

- Gradient
- Shadow
- Edge fade

Do not heavily blur the photograph.

---

# 5. HERO TRUST INDICATORS

Three compact indicators.

### 01
Leaf icon

**Trusted Care**
Since 2019

### 02
People icon

**Personalized**
Treatment Plans

### 03
Lotus icon

**Holistic Healing**
Mind · Body · Life

These are positioning statements, not quantified clinical claims.

---

# 6. SERVICE STRIP

Immediately below hero.

Background:

`--neithal-cream-100`

Six equal columns.

```text
AYURVEDA
Consultation & Care

PANCHAKARMA
Detox & Rejuvenation

THERAPIES
Traditional Treatments

AHARA
Food & Lifestyle

YOGA
Mind–Body Balance

PHARMACY
Authentic Formulations
```

Each has a minimal line icon.

Desktop:

6 columns.

Mobile:

Horizontal scroll.

---

# 7. "WHAT WOULD YOU LIKE HELP WITH?"

Section background:

Cream / white.

Eyebrow:

**YOUR WELLBEING MATTERS**

Heading:

# What would you like help with?

Supporting:

> Find the right path for your health journey.

Three cards.

---

## Card 1

Image:

Person experiencing a common health concern.

Title:

**A Health Concern**

Text:

> Explore conditions and how Ayurveda may support your care journey.

CTA:

**Browse Conditions →**

---

## Card 2

Image:

Ayurvedic treatment / herbal preparation.

Title:

**A Treatment**

Text:

> Discover our therapies and Panchakarma programs.

CTA:

**Explore Treatments →**

---

## Card 3

Image:

Peaceful wellness / yoga / nature.

Title:

**A Wellness Journey**

Text:

> Support your long-term wellbeing with Ayurveda, yoga and AHARA.

CTA:

**Explore Wellness →**

---

# 8. CONDITION DISCOVERY

Eyebrow:

**AREAS OF CARE**

Heading:

# Care that begins with understanding.

Supporting:

> Every person is different. Explore our areas of care and learn how Neithal approaches health concerns through an individualized Ayurvedic perspective.

Categories:

### Musculoskeletal

- Arthritis
- Joint concerns
- Back & neck pain
- Sciatica

### Digestive

- IBS
- Gastric concerns
- Constipation
- Digestive health

### Neurological

- Parkinson's disease
- Migraine
- Neuropathy

### Metabolic

- Diabetes
- Weight management
- Fatty liver

### Women's Health

- PCOS
- Menstrual health
- Menopause

CTA:

**Explore All Conditions →**

IMPORTANT:

Do not make disease cards claim that Neithal cures diseases.

Use educational wording such as:

- "Understanding..."
- "Ayurvedic perspectives..."
- "Care options..."
- "Supportive care..."

---

# 9. THE NEITHAL APPROACH

Background:

Very light green / cream.

Eyebrow:

**THE NEITHAL APPROACH**

Headline:

# Healthcare should begin with listening.

Supporting:

> A structured, individualized approach to care, combining traditional Ayurvedic wisdom with thoughtful modern patient experience.

Six steps:

---

### 01 — LISTEN

Understand the person behind the concern.

### 02 — ASSESS

Explore symptoms, lifestyle and individual factors.

### 03 — PERSONALIZE

Develop a care pathway suited to individual needs.

### 04 — TREAT

Use appropriate Ayurvedic therapies and interventions.

### 05 — RESTORE

Support diet, lifestyle and overall wellbeing.

### 06 — FOLLOW UP

Review the journey and refine the plan.

CTA:

**Learn More About Our Approach →**

---

# 10. PANCHAKARMA FEATURE

This is a major visual section.

Background:

Dark green + premium photography.

Eyebrow:

**TRADITIONAL AYURVEDIC THERAPY**

Headline:

# Panchakarma

Supporting:

> A structured Ayurvedic therapeutic approach traditionally used as part of individualized care under professional supervision.

Treatments:

**Vamana · Virechana · Basti · Nasya · Raktamokshana**

CTA:

**Explore Panchakarma →**

Visual:

Large immersive treatment image.

Do not use "detox" as a medical guarantee.

---

# 11. TREATMENTS SECTION

Eyebrow:

**EXPLORE NEITHAL CARE**

Heading:

# Care designed around you.

Four cards:

### Ayurveda Consultation

Personalized consultation and care planning.

### Panchakarma

Traditional Ayurvedic therapeutic programs.

### Ayurvedic Therapies

Traditional therapies selected according to individual needs.

### Wellness & Yoga

Integrating movement, food and lifestyle.

Each card:

Image
Title
Description
Arrow CTA

---

# 12. AHARA SECTION

Background:

Cream.

Eyebrow:

**NEITHAL AHARA**

Headline:

# Food is part of the journey.

Supporting:

> Discover a thoughtful approach to food, nutrition and everyday living inspired by Ayurvedic principles and adapted to modern life.

Four mini categories:

- South Indian Diet
- Personalized Guidance
- Food & Lifestyle
- Seasonal Wellness

CTA:

**Explore AHARA →**

Visual direction:

Elegant South Indian food photography.

Avoid exaggerated "food as medicine" claims.

---

# 13. DOCTORS SECTION

Eyebrow:

**THE PEOPLE BEHIND NEITHAL**

Headline:

# Meet the people behind your care.

Doctor cards:

### Dr. Saranya K.
Senior Ayurveda Physician

Photo: pending.

### Dr. Sathiyaraj N.
Senior Ayurveda Physician

Photo: pending.

Each card should support:

- Portrait
- Qualification
- Specialization
- Experience
- Languages
- Short biography
- View profile

Do not publish registration numbers until verified.

---

# 14. CLINIC / SPACE

Heading:

# A space created for care.

Supporting:

> Located in the heart of Heritage Town, Puducherry, Neithal brings consultation, therapies, Panchakarma, pharmacy and wellness together under one roof.

Visual gallery:

1. Exterior
2. Reception
3. Consultation
4. Treatment room
5. Pharmacy
6. Team

CTA:

**Visit Neithal →**

---

# 15. PHARMACY SECTION

Background:

Dark green.

Eyebrow:

**NEITHAL PHARMACY**

Headline:

# Traditional formulations.
# Thoughtfully delivered.

Categories:

- Classical Ayurveda
- Herbal Wellness
- Personal Care
- Neithal Formulations

CTA:

**Explore Pharmacy →**

Future integration:

Website → Pharmacy → Product → Availability / WhatsApp / Online Order

---

# 16. PATIENT STORIES

Eyebrow:

**PATIENT JOURNEYS**

Headline:

# Every journey is personal.

Use only genuine testimonials with appropriate consent.

Structure:

- Patient initials/name as consented
- General concern
- Journey
- Testimonial

No fabricated reviews.

No guaranteed outcomes.

---

# 17. NEITHAL JOURNAL

Eyebrow:

**THE NEITHAL JOURNAL**

Headline:

# Understand your health.
# Learn from Ayurveda.

Featured article cards:

- Panchakarma education
- Condition education
- AHARA
- Lifestyle
- Yoga
- Seasonal wellness

CTA:

**Visit the Journal →**

This section is important for long-term SEO.

---

# 18. CAMPS & COMMUNITY

Eyebrow:

**BEYOND THE CLINIC**

Headline:

# Serving beyond the consultation room.

Show:

- Medical camps
- Awareness programs
- Yoga sessions
- Community initiatives
- Events

CTA:

**Explore Our Community Work →**

Use real Neithal photographs.

---

# 19. LOCATION / CONTACT

Headline:

# Visit Neithal.

Address:

**#83, Chetty Street, MG Road Junction, Heritage Town, Puducherry – 605001**

Hours:

**9:00 AM – 9:00 PM**

Phone:

**+91 94880 23328**

Email:

**neithalayurveda@gmail.com**

Actions:

**Get Directions**

**Call Neithal**

**WhatsApp Neithal**

Use Google Maps integration.

---

# 20. FINAL CTA

Background:

Dark green.

Headline:

# Begin your journey with Neithal.

Supporting:

> Speak with our team and discover the right starting point for your care.

Primary CTA:

**Book a Consultation →**

Secondary:

**+91 94880 23328**

---

# 21. FOOTER

Brand:

**NEITHAL®**

**Traditional Wisdom | Modern Care**

Navigation:

- About
- Treatments
- Conditions
- AHARA
- Pharmacy
- Journal
- Contact

Services:

- Ayurveda
- Panchakarma
- Therapies
- Yoga

Contact:

- Address
- Phone
- Email
- Hours

Legal:

- Privacy Policy
- Terms
- Medical Disclaimer

Social:

- Instagram
- Facebook
- YouTube

---

# 22. MOBILE DESIGN

Mobile is NOT a compressed desktop version.

Design specifically for:

**360px**
**390px**
**430px**

Hero:

```text
NEITHAL®

Traditional Wisdom.
Modern Care.

A more personal approach
to Ayurvedic care.

Ayurveda · Panchakarma
Pharmacy · Yoga

[ Book a Consultation ]

[ Explore Treatments ]

[ Hero image ]
```

Recommended hero height:

**auto / approximately 700–820px depending on viewport**

Do not force a fixed height if content would overflow.

---

# 23. MOBILE STICKY CTA

Fixed bottom navigation:

```text
┌──────────────────────────────────┐
│ WhatsApp │ Call │ Book Visit     │
└──────────────────────────────────┘
```

Height:

**60–68px**

Respect safe-area insets on iPhone.

---

# 24. RESPONSIVE BREAKPOINTS

Use:

```text
Mobile:
< 640px

Tablet:
640–1023px

Desktop:
1024–1439px

Large desktop:
1440px+
```

Maximum content width:

**1280–1360px**

Do not allow text lines to become excessively wide.

---

# 25. SPACING SYSTEM

Use an 8px base system.

```text
8
16
24
32
40
48
64
80
96
120
```

Desktop section padding:

**96–120px**

Tablet:

**72–88px**

Mobile:

**56–72px**

---

# 26. CARD SYSTEM

Cards should feel editorial, not like SaaS dashboards.

Default:

- White/cream background
- 1px subtle border
- Very soft shadow only where required
- 12–18px radius
- Image at top
- Generous internal spacing

Avoid:

- Giant shadows
- Excessive rounded pills
- 30px+ radius everywhere

---

# 27. BUTTON SYSTEM

Primary:

Dark green background / cream text.

Hover:

Slightly lighter green.

Secondary:

Transparent / green border.

Gold can be used selectively for high-value CTA buttons.

Buttons:

Height:

**46–52px**

Horizontal padding:

**20–28px**

Border radius:

**6–10px**

Do not use pill buttons everywhere.

---

# 28. ICONOGRAPHY

Use one icon family throughout.

Style:

- Thin line
- Elegant
- Rounded
- Minimal
- 1.5–2px stroke

Preferred icons:

- Lucide
- Phosphor
- Custom Neithal icons later

Do not mix icon styles.

---

# 29. ANIMATION

Animations must communicate hierarchy.

Use:

### On page load

- Logo fade
- Hero text stagger
- Image fade/slide

### On scroll

- Fade-up sections
- Image reveal
- Journey progression

### Hover

- Image scale: 1.02–1.04
- Arrow movement
- Border transition

Duration:

**250–600ms**

Easing:

`cubic-bezier(0.22, 1, 0.36, 1)`

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable non-essential motion for users who prefer reduced motion.

---

# 30. PERFORMANCE

Target:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Images:

- AVIF preferred
- WebP fallback
- Responsive image sizes
- Lazy-load below-the-fold images
- Do not lazy-load the hero/LCP image

Fonts:

- Self-host if practical
- Preload only critical font files
- Avoid unnecessary font weights

---

# 31. SEO FOUNDATION

Homepage title:

**Neithal Ayurveda | Ayurveda, Panchakarma & Wellness in Puducherry**

Meta description:

> Neithal Ayurveda in Puducherry offers Ayurvedic consultation, Panchakarma, therapies, wellness, yoga and pharmacy services with a personalized approach to care.

Canonical:

`https://neithalayurveda.com/`

Structured data to implement:

- Organization
- LocalBusiness / appropriate healthcare business schema
- MedicalBusiness where appropriate
- Physician
- WebSite
- BreadcrumbList
- Article for journal posts

Do not create fake review schema or unsupported medical claims.

---

# 32. ACCESSIBILITY

Required:

- WCAG-conscious contrast
- Keyboard navigation
- Visible focus state
- Semantic HTML
- Alt text for meaningful images
- Decorative images marked appropriately
- Accessible buttons
- Accessible mobile menu
- Form labels
- Error messages
- Reduced-motion support

---

# 33. CONTACT / APPOINTMENT CTA TRACKING

Track:

```text
hero_book_click
hero_treatment_click
whatsapp_click
phone_click
directions_click
condition_click
treatment_click
panchakarma_click
ahra_click
pharmacy_click
doctor_profile_click
appointment_started
appointment_completed
contact_form_submitted
```

Use analytics without collecting unnecessary personal information.

---

# 34. WHATSAPP

Primary WhatsApp:

**+91 94880 23328**

Context-specific messages should be generated.

Example:

From Panchakarma:

> Hello Neithal Ayurveda, I would like to know more about your Panchakarma programs.

From Appointment:

> Hello Neithal Ayurveda, I would like to book an Ayurveda consultation.

From Pharmacy:

> Hello Neithal Ayurveda, I would like to enquire about your pharmacy products.

---

# 35. APPOINTMENT FLOW

Initial version:

```text
Book Consultation
      ↓
Select Consultation Type
      ↓
Select Preferred Date
      ↓
Enter Name
      ↓
Phone / WhatsApp
      ↓
Confirm Request
      ↓
WhatsApp / Confirmation
```

Future:

```text
Website
   ↓
Neithal Appointment Engine
   ↓
Doctor Availability
   ↓
Google Calendar
   ↓
Neithal HRMS
   ↓
Patient Record
```

Do not build unnecessary complexity in V1.

---

# 36. CMS REQUIREMENT

The website must eventually allow non-developers to update:

- Doctors
- Services
- Treatments
- Conditions
- Journal
- Events
- Camps
- Testimonials
- Gallery
- Pharmacy products
- FAQs
- Appointment information

Do not hardcode these long-term.

For V1, if CMS implementation would delay launch, create clean data structures so CMS can be introduced without rewriting components.

---

# 37. COMPONENT ARCHITECTURE

Suggested component structure:

```text
/components
  /layout
    Header
    UtilityBar
    Footer
    MobileBottomBar

  /hero
    HeroSection
    TrustIndicators

  /navigation
    DesktopNav
    MobileNav

  /sections
    ServiceStrip
    CareDiscovery
    ConditionDiscovery
    NeithalApproach
    PanchakarmaFeature
    Treatments
    Ahara
    Doctors
    ClinicSpace
    Pharmacy
    PatientStories
    Journal
    Community
    Location
    FinalCTA

  /ui
    Button
    SectionHeading
    Card
    Icon
    Image
    Container
```

Use reusable components.

Do not duplicate markup unnecessarily.

---

# 38. DATA ARCHITECTURE

Create structured content models.

Example:

```ts
Doctor {
  id
  name
  title
  qualification
  registration
  specialization[]
  experience
  languages[]
  bio
  image
  slug
}

Treatment {
  id
  name
  category
  shortDescription
  description
  image
  slug
  featured
}

Condition {
  id
  name
  category
  shortDescription
  content
  image
  slug
}

Article {
  id
  title
  slug
  category
  excerpt
  content
  image
  author
  publishedAt
  seoTitle
  seoDescription
}
```

---

# 39. IMAGE ASSET PLAN

Required real assets:

### Priority A

1. Official logo
2. Clinic exterior
3. Doctor Saranya portrait
4. Doctor Sathiyaraj portrait
5. Doctor consultation
6. Reception
7. Panchakarma room
8. Therapy
9. Pharmacy
10. Team

### Priority B

11. Yoga
12. AHARA / food
13. Patient interaction
14. Community camps
15. Products

Until these are supplied, use temporary placeholders with clearly defined image slots.

Do not permanently depend on generated images for clinical trust sections.

---

# 40. SECURITY

Required:

- HTTPS
- Secure form handling
- Server-side validation
- Rate limiting
- Spam protection
- No sensitive patient information in URL parameters
- No patient health information stored in analytics
- Environment variables for secrets
- No API keys committed to Git
- Proper CORS
- Secure headers

---

# 41. MEDICAL CONTENT RULES

All health content must be written responsibly.

Avoid:

- "100% cure"
- "Guaranteed results"
- "Permanent cure"
- "Works for everyone"
- "Reverses disease"
- Unsupported percentages
- Fear-based claims
- Attacks on conventional medicine

Use:

- "May support..."
- "Traditionally used..."
- "Individual response varies..."
- "Discuss suitability with a qualified practitioner..."

Each condition page should contain an appropriate medical disclaimer.

---

# 42. V1 ACCEPTANCE CRITERIA

The implementation is not complete until:

### Visual

- [ ] Logo correctly implemented
- [ ] Brand colors match
- [ ] Typography matches
- [ ] Hero matches design direction
- [ ] Header works on desktop/mobile
- [ ] No visual overflow
- [ ] Consistent spacing
- [ ] Consistent buttons/cards

### Responsive

- [ ] 360px
- [ ] 390px
- [ ] 430px
- [ ] Tablet
- [ ] Desktop
- [ ] Large desktop

### Functional

- [ ] Navigation
- [ ] Mobile menu
- [ ] WhatsApp
- [ ] Call
- [ ] Directions
- [ ] Appointment CTA
- [ ] Internal routing
- [ ] Journal routing
- [ ] Treatment routing
- [ ] Condition routing

### Performance

- [ ] Optimized images
- [ ] Lazy loading
- [ ] No unnecessary JS
- [ ] Good LCP
- [ ] Good CLS
- [ ] Good INP

### Accessibility

- [ ] Keyboard navigation
- [ ] Semantic HTML
- [ ] Focus states
- [ ] Alt text
- [ ] Accessible forms
- [ ] Reduced motion

---

# 43. IMPLEMENTATION ORDER

Antigravity should build in this order.

## Phase 1 — Foundation

1. Project setup
2. Fonts
3. Design tokens
4. Global CSS
5. Logo
6. Header
7. Footer
8. Responsive system

## Phase 2 — Homepage

1. Hero
2. Trust indicators
3. Service strip
4. Care discovery
5. Conditions
6. Neithal Approach
7. Panchakarma
8. Treatments
9. AHARA
10. Doctors
11. Clinic
12. Pharmacy
13. Stories
14. Journal
15. Community
16. Location
17. Final CTA

## Phase 3 — Interactions

1. Mobile menu
2. Sticky header
3. Scroll animations
4. CTA tracking
5. WhatsApp
6. Call
7. Maps

## Phase 4 — Content Architecture

1. Conditions
2. Treatments
3. Doctors
4. Journal
5. Pharmacy
6. Events

## Phase 5 — SEO / Performance

1. Metadata
2. Schema
3. Sitemap
4. Robots
5. Image optimization
6. Performance
7. Accessibility

## Phase 6 — Integration

1. Appointment system
2. HRMS
3. Google Calendar
4. WhatsApp
5. Analytics

---

# 44. IMPORTANT IMPLEMENTATION RULE

Do NOT try to build the entire Neithal ecosystem in one pass.

Build:

**V1 = Premium public website**

Then:

**V1.1 = CMS**

Then:

**V1.2 = Appointment integration**

Then:

**V1.3 = Pharmacy**

Then:

**V2 = Full Neithal digital ecosystem**

This prevents the website from becoming slow, complicated and difficult to maintain.

---

# 45. REFERENCE DESIGN

Use the supplied high-fidelity homepage visual mockup as the **visual direction reference**, not as a pixel-perfect production asset.

The implementation should preserve:

- Overall hierarchy
- Premium green/cream/gold palette
- Editorial typography
- Large human-centered hero
- Generous whitespace
- Care discovery cards
- Six-step approach
- Panchakarma visual treatment
- Clean navigation

But production images must eventually be replaced with authentic Neithal photography.

---

# 46. FINAL PRODUCT PRINCIPLE

The website should feel like:

> **A modern healthcare institution rooted in Ayurveda.**

Not:

> A traditional Ayurveda template with modern colors.

Every design decision should reinforce:

**Trust → Clarity → Human Care → Expertise → Action**

---

## END OF SPECIFICATION

### Next implementation deliverable

After completing the homepage, create:

`NEITHAL_WEBSITE_PAGES_SPEC_v1.md`

This should define:

- About
- Doctors
- Treatments
- Panchakarma
- Conditions
- AHARA
- Pharmacy
- Journal
- Patient Stories
- Camps
- Contact
- Appointment

Do not invent missing clinical information. Use clearly marked content placeholders until Neithal provides verified information.
