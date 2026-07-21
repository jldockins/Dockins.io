var PLAN_DATA = {
  "meta": {
    "company": "Sprits AI",
    "product": "QAI Agent",
    "startDate": "2026-08-05",
    "endDate": "2026-11-03",
    "totalDays": 91
  },
  "buckets": [
    {
      "id": "legal",
      "name": "Legal & Finance",
      "color": "#ff6b6b"
    },
    {
      "id": "brand",
      "name": "Branding & Identity",
      "color": "#ffd93d"
    },
    {
      "id": "web",
      "name": "Website & Online Presence",
      "color": "#6bcb77"
    },
    {
      "id": "product",
      "name": "Product & Demo",
      "color": "#4d96ff"
    },
    {
      "id": "sales",
      "name": "Sales & Outreach",
      "color": "#ff6fff"
    },
    {
      "id": "ops",
      "name": "Operations & Strategy",
      "color": "#00d9ff"
    }
  ],
  "phases": [
    {
      "id": 1,
      "name": "Foundation",
      "startDay": 1,
      "endDay": 30,
      "color": "#ff1493"
    },
    {
      "id": 2,
      "name": "Build Pipeline",
      "startDay": 31,
      "endDay": 60,
      "color": "#00d9ff"
    },
    {
      "id": 3,
      "name": "Land the Client",
      "startDay": 61,
      "endDay": 91,
      "color": "#6bcb77"
    }
  ],
  "days": [
    {
      "day": 1,
      "date": "2026-08-05",
      "dayOfWeek": "Wednesday",
      "phase": 1,
      "weekTheme": "Legal Kickoff & Discovery",
      "tasks": [
        {
          "id": "d1-legal-1",
          "bucket": "legal",
          "task": "Apply for EIN online at IRS.gov (Form SS-4)",
          "priority": "high",
          "duration": "30min",
          "notes": "Go to https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online — you'll get the EIN immediately if you apply online during business hours (7am-10pm ET, Mon-Fri). Save and print the confirmation letter (CP 575). You need the EIN before you can finalize the bank account."
        },
        {
          "id": "d1-legal-2",
          "bucket": "legal",
          "task": "Complete bank account signing with co-founder",
          "priority": "high",
          "duration": "1hr",
          "notes": "Bring your EIN confirmation, Delaware Certificate of Incorporation, and both founders' IDs. If using Mercury or Relay (online banks popular with startups, no fees), you can do this digitally. For a local bank, schedule a branch visit."
        },
        {
          "id": "d1-ops-1",
          "bucket": "ops",
          "task": "Set up Notion workspace for Sprits AI with 90-day plan board",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go to notion.so — free for small teams. Create pages: 90-Day Plan, Meeting Notes, Product Roadmap, Prospect Tracker. Use a Kanban board for task tracking. Alternatively, try Linear (linear.app) which is built for dev teams and free for small teams."
        },
        {
          "id": "d1-ops-2",
          "bucket": "ops",
          "task": "Schedule recurring daily standup with co-founder (15 min)",
          "priority": "high",
          "duration": "15min",
          "notes": "Pick a consistent time (e.g., 9:30am). Use Slack huddle, Google Meet, or a quick phone call. Keep it to 3 questions: What did you do yesterday? What are you doing today? Any blockers? Put it on a shared Google Calendar."
        },
        {
          "id": "d1-product-1",
          "bucket": "product",
          "task": "Create a feature inventory document listing every QAI Agent capability",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Open a Google Doc or Notion page. List every feature: /devbud trigger, browser-based QA, screenshot capture, PR report posting, supported frameworks, demo pages, etc. This becomes the source of truth for your website copy, pitch deck, and sales conversations."
        },
        {
          "id": "d1-sales-1",
          "bucket": "sales",
          "task": "Define your Ideal Customer Profile (ICP) in writing",
          "priority": "high",
          "duration": "1hr",
          "notes": "Answer these questions in a doc: Company size (employees)? Engineering team size? What languages/frameworks? Using GitHub? Current QA process? Pain points? Budget range? Decision maker title? Start with: 'Series A-C SaaS companies, 10-50 engineers, using GitHub, shipping weekly, no dedicated QA team or overwhelmed QA team.' Refine as you learn."
        },
        {
          "id": "d1-web-1",
          "bucket": "web",
          "task": "Audit the current sprits.ai website — document what exists and what's missing",
          "priority": "medium",
          "duration": "45min",
          "notes": "Visit every page on sprits.ai. Screenshot each page. Note: Is there a clear value prop above the fold? Is there a CTA (call to action)? Is the demo accessible? Is there pricing? Is there a contact form? Document all gaps in a spreadsheet or Notion page."
        },
        {
          "id": "d1-brand-1",
          "bucket": "brand",
          "task": "Research 5 competitor brands and screenshot their homepages, pricing pages, and messaging",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Look at: QA Wolf (qawolf.com), Cypress (cypress.io), BrowserStack (browserstack.com), Codecov (codecov.io), Mabl (mabl.com). Save screenshots in a folder. Note their taglines, color schemes, pricing models, and how they describe their product. This is your competitive landscape reference."
        }
      ]
    },
    {
      "day": 2,
      "date": "2026-08-06",
      "dayOfWeek": "Thursday",
      "phase": 1,
      "weekTheme": "Legal Kickoff & Discovery",
      "tasks": [
        {
          "id": "d2-legal-1",
          "bucket": "legal",
          "task": "Research NH foreign qualification requirements and download forms",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go to https://www.sos.nh.gov/corporation-division — since Sprits AI is a Delaware C-Corp operating in NH, you must register as a foreign corporation. You'll need: Certificate of Good Standing from Delaware (order at https://corp.delaware.gov, ~$50), completed NH Application for Registration, and the filing fee (~$100). Processing takes 5-7 business days."
        },
        {
          "id": "d2-legal-2",
          "bucket": "legal",
          "task": "Order Certificate of Good Standing from Delaware Division of Corporations",
          "priority": "high",
          "duration": "20min",
          "notes": "Go to https://corp.delaware.gov/onlinestatus/ — search for your company, then order the Certificate of Good Standing online. Cost is about $50 for standard, $100 for expedited. You need this document to file the NH foreign qualification. Standard takes about a week."
        },
        {
          "id": "d2-ops-1",
          "bucket": "ops",
          "task": "Set up HubSpot CRM free account and configure deal pipeline",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go to hubspot.com/products/crm — the free tier is excellent for startups. Set up your pipeline stages: Lead > Contacted > Demo Scheduled > Demo Completed > Proposal Sent > Negotiation > Closed Won / Closed Lost. Import your existing contact list. HubSpot also has free email tracking and meeting scheduling."
        },
        {
          "id": "d2-sales-1",
          "bucket": "sales",
          "task": "Start building prospect spreadsheet — research 15 target companies",
          "priority": "high",
          "duration": "2hr",
          "notes": "Use Google Sheets or HubSpot. For each company: Company name, website, size, engineering team size (check LinkedIn), tech stack (check job postings and GitHub), decision maker name + title + LinkedIn URL, email (use Hunter.io free tier to find emails). Focus on companies that: use GitHub, have 10-50 engineers, are SaaS, and are hiring QA or complaining about QA on social media."
        },
        {
          "id": "d2-product-1",
          "bucket": "product",
          "task": "Walk through all 5 demo pages and document the 40 planted bugs",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Go to sprits.ai/demo/ and test each page yourself. Create a spreadsheet listing all 40 bugs: which page, what the bug is, severity, and whether QAI Agent catches it. This becomes your demo talking points — you need to know exactly what to show prospects."
        },
        {
          "id": "d2-brand-1",
          "bucket": "brand",
          "task": "Define Sprits AI brand voice and values (draft document)",
          "priority": "medium",
          "duration": "45min",
          "notes": "Write a short brand guide: What is our tone? (e.g., technical but approachable, confident but not arrogant). What words do we use? (e.g., 'AI-powered' not 'artificial intelligence', 'dev teams' not 'developers'). What are our values? (e.g., ship fast, developer-first, transparent pricing). This guides all future copy."
        },
        {
          "id": "d2-web-1",
          "bucket": "web",
          "task": "Outline sitemap for the sprits.ai marketing website",
          "priority": "medium",
          "duration": "30min",
          "notes": "Plan these pages: Homepage, How It Works (features), Pricing, Demo, Blog, About/Team, Contact/Book a Demo. Draw a simple sitemap tree. Decide which pages are launch-critical (Homepage, How It Works, Pricing, Contact) vs. can-wait (Blog, About)."
        }
      ]
    },
    {
      "day": 3,
      "date": "2026-08-07",
      "dayOfWeek": "Friday",
      "phase": 1,
      "weekTheme": "Legal Kickoff & Discovery",
      "tasks": [
        {
          "id": "d3-legal-1",
          "bucket": "legal",
          "task": "Set up basic bookkeeping with Wave (free) or QuickBooks Simple Start ($15/mo)",
          "priority": "high",
          "duration": "1hr",
          "notes": "Wave (waveapps.com) is 100% free for accounting and invoicing — great for bootstrapped startups. Connect your bank account once it's open. Create categories: Software/Tools, Legal Fees, Marketing, Hosting/Infrastructure, Contractor Payments. Track every dollar from day one — investors and the IRS will thank you later."
        },
        {
          "id": "d3-sales-1",
          "bucket": "sales",
          "task": "Research 5 developer communities and forums where your ICP hangs out",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Investigate: Dev.to (dev.to), Hacker News (news.ycombinator.com), Reddit r/QualityAssurance and r/softwaretesting, IndieHackers (indiehackers.com), Discord servers for dev tools. Create accounts on each. Read recent posts about QA pain points. DO NOT sell yet — just observe and note the language people use to describe their problems."
        },
        {
          "id": "d3-product-1",
          "bucket": "product",
          "task": "Start writing a product one-pager (sell sheet) — first draft",
          "priority": "medium",
          "duration": "1hr",
          "notes": "One page, PDF format. Structure: Headline (pain point), subheadline (solution), 3 key benefits with icons, how it works (3 steps), social proof placeholder, CTA. Use Canva (canva.com — search 'product one pager template') or Google Docs. This is what you'll email to prospects and hand out at events."
        },
        {
          "id": "d3-web-1",
          "bucket": "web",
          "task": "Research competitor websites in detail — note their messaging frameworks",
          "priority": "medium",
          "duration": "45min",
          "notes": "For each competitor (QA Wolf, Cypress, BrowserStack, Mabl, Codecov): What's their headline? How do they explain how it works? What social proof do they show? How is pricing displayed? What's their primary CTA? Take notes — you'll use these patterns for your own site."
        },
        {
          "id": "d3-brand-1",
          "bucket": "brand",
          "task": "Create a brand inspiration/mood board with 10-15 visual references",
          "priority": "low",
          "duration": "45min",
          "notes": "Use Pinterest, Dribbble (dribbble.com), or a simple Google Slides deck. Collect logos, color palettes, website screenshots, and UI patterns you like from other dev tool companies. This helps when you're designing your own brand assets or briefing a designer."
        },
        {
          "id": "d3-ops-1",
          "bucket": "ops",
          "task": "Create a shared Google Drive folder structure for all Sprits AI documents",
          "priority": "medium",
          "duration": "30min",
          "notes": "Create folders: Legal, Finance, Brand Assets, Product, Sales Materials, Blog Content, Meeting Notes, Contracts. Share with your co-founder. This keeps everything organized and accessible. If you prefer Notion, create equivalent database pages."
        },
        {
          "id": "d3-ops-2",
          "bucket": "ops",
          "task": "Draft a weekly review template for co-founder check-ins",
          "priority": "low",
          "duration": "20min",
          "notes": "Template: What did we accomplish this week? What didn't get done? Key metrics (leads contacted, demos booked, website traffic). Blockers. Priorities for next week. Budget update. Keep this in Notion or Google Docs and fill it out every Friday."
        }
      ]
    },
    {
      "day": 4,
      "date": "2026-08-08",
      "dayOfWeek": "Saturday",
      "phase": 1,
      "weekTheme": "Legal Kickoff & Discovery",
      "tasks": []
    },
    {
      "day": 5,
      "date": "2026-08-09",
      "dayOfWeek": "Sunday",
      "phase": 1,
      "weekTheme": "Legal Kickoff & Discovery",
      "tasks": []
    },
    {
      "day": 6,
      "date": "2026-08-10",
      "dayOfWeek": "Monday",
      "phase": 1,
      "weekTheme": "Legal Kickoff & Discovery",
      "tasks": [
        {
          "id": "d6-legal-1",
          "bucket": "legal",
          "task": "Confirm bank account is fully open and set up online access",
          "priority": "high",
          "duration": "30min",
          "notes": "Log into your business bank account online. Set up two-factor authentication. Connect the account to Wave or QuickBooks. Transfer initial $10K capital. Set up Zelle or ACH for easy payments. Make sure both co-founders have appropriate access."
        },
        {
          "id": "d6-legal-2",
          "bucket": "legal",
          "task": "Research business insurance needs — get 3 quotes for general liability and E&O",
          "priority": "medium",
          "duration": "1hr",
          "notes": "SaaS companies typically need: General Liability ($500-1000/yr), Errors & Omissions / Professional Liability ($500-2000/yr), and eventually Cyber Liability. Get quotes from: Hiscox (hiscox.com — great for small tech), Next Insurance (nextinsurance.com), and Hartford (thehartford.com). You can often bundle for savings. Not urgent to buy yet — just gather info."
        },
        {
          "id": "d6-sales-1",
          "bucket": "sales",
          "task": "Add 10 more companies to prospect list — focus on GitHub-heavy orgs",
          "priority": "high",
          "duration": "1hr",
          "notes": "Search GitHub for active organizations. Look at companies on the GitHub Marketplace and their contributors. Check 'awesome' lists on GitHub for SaaS companies. Use LinkedIn to find their engineering leads. Target: get to 35 total prospects by end of day."
        },
        {
          "id": "d6-product-1",
          "bucket": "product",
          "task": "Identify gaps in the demo — list 3-5 improvements for the demo flow",
          "priority": "medium",
          "duration": "45min",
          "notes": "Run through sprits.ai/demo as if you're a prospect seeing it for the first time. Questions to ask: Is it clear what to do? Does the demo show the most impressive capabilities first? Are the planted bugs representative of real-world issues? Does the test report look professional? Create a prioritized list of improvements for your co-founder."
        },
        {
          "id": "d6-web-1",
          "bucket": "web",
          "task": "Research website hosting options for the marketing site — decide on stack",
          "priority": "medium",
          "duration": "30min",
          "notes": "Options: 1) Add pages to existing sprits.ai on current hosting, 2) Use Webflow (webflow.com, free basic site), 3) Use Next.js + Vercel (free tier), 4) Use a simple HTML/CSS template on Fly.io alongside your app. Recommend Webflow or a simple static site for speed — you want to ship the marketing site fast, not build a custom CMS."
        },
        {
          "id": "d6-brand-1",
          "bucket": "brand",
          "task": "Draft 3 tagline options for Sprits AI and get co-founder feedback",
          "priority": "medium",
          "duration": "30min",
          "notes": "Examples to inspire you: 'AI-Powered QA for Every Pull Request', 'Your PR's New QA Engineer', 'Ship Faster. Break Less.' The best tagline communicates the benefit in under 10 words. Write 5-10 options, narrow to 3, share with co-founder. Sleep on it before deciding."
        },
        {
          "id": "d6-ops-1",
          "bucket": "ops",
          "task": "Define the 5 key KPIs you'll track weekly for the next 90 days",
          "priority": "medium",
          "duration": "30min",
          "notes": "Recommended KPIs: 1) Prospects contacted per week, 2) Demo meetings booked, 3) Demo-to-proposal conversion rate, 4) Website visitors (once site is live), 5) Cash remaining / burn rate. Set up a simple Google Sheet dashboard or Notion table to track these weekly."
        }
      ]
    },
    {
      "day": 7,
      "date": "2026-08-11",
      "dayOfWeek": "Tuesday",
      "phase": 1,
      "weekTheme": "Legal Kickoff & Discovery",
      "tasks": [
        {
          "id": "d7-legal-1",
          "bucket": "legal",
          "task": "Set up bookkeeping categories and record all expenses to date",
          "priority": "high",
          "duration": "1hr",
          "notes": "In Wave or QuickBooks, categorize all spending so far: Delaware incorporation fees, domain registration, hosting costs, any tools purchased. Categories: Legal/Filing Fees, Software/Subscriptions, Hosting/Infrastructure, Marketing, Office/Supplies. Record the $10K initial capital as Owner Investment."
        },
        {
          "id": "d7-sales-1",
          "bucket": "sales",
          "task": "Research LinkedIn Sales Navigator free trial and decide if it's worth using",
          "priority": "medium",
          "duration": "30min",
          "notes": "LinkedIn Sales Navigator has a 30-day free trial. It lets you: search by company size, technology, job title, and recent activity. You can save leads and get alerts. Go to linkedin.com/sales — start the trial when you're ready to do outreach (Week 5), not now. For now, use the regular LinkedIn search."
        },
        {
          "id": "d7-sales-2",
          "bucket": "sales",
          "task": "Finalize prospect list to 50 companies with contact info",
          "priority": "high",
          "duration": "2hr",
          "notes": "Push hard to get to 50. Use Hunter.io (hunter.io, 25 free searches/month) or Apollo.io (free tier, 50 emails/month) to find email addresses. For each prospect, you need: company name, key contact name, title, email, LinkedIn URL, and a 1-sentence note on why they're a good fit."
        },
        {
          "id": "d7-product-1",
          "bucket": "product",
          "task": "Start drafting the FAQ document — list 20 questions prospects will ask",
          "priority": "medium",
          "duration": "45min",
          "notes": "Common questions: How does it integrate? What frameworks do you support? How long does a test run take? Is my code safe? What does it cost? Can I customize the tests? How is this different from Cypress/Selenium? Does it work with my CI/CD? What happens if it finds a bug? Write the questions now, answer them over the next week."
        },
        {
          "id": "d7-web-1",
          "bucket": "web",
          "task": "Sketch wireframe for homepage — hero section, features, how-it-works, CTA",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Use pen and paper, Excalidraw (excalidraw.com, free), or Figma (figma.com, free). Homepage sections: 1) Hero with tagline + CTA + screenshot, 2) Pain point (why manual QA sucks), 3) How it works (3 steps), 4) Features grid, 5) Demo section, 6) Pricing preview, 7) CTA. Don't overthink it — just get the structure right."
        },
        {
          "id": "d7-ops-1",
          "bucket": "ops",
          "task": "Set up email templates in HubSpot — intro, follow-up, and demo request",
          "priority": "medium",
          "duration": "45min",
          "notes": "In HubSpot, go to Conversations > Templates. Create: 1) Cold Intro (short, focus on their pain, end with question), 2) Follow-Up (reference the intro, add value like a blog post or stat), 3) Demo Invitation (clear value prop, easy scheduling link). Keep emails under 150 words. Personalize the first line for each prospect."
        }
      ]
    },
    {
      "day": 8,
      "date": "2026-08-12",
      "dayOfWeek": "Wednesday",
      "phase": 1,
      "weekTheme": "Legal Progress & Brand Development",
      "tasks": [
        {
          "id": "d8-legal-1",
          "bucket": "legal",
          "task": "File NH Foreign Qualification with NH Secretary of State",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go to https://www.sos.nh.gov/corporation-division — file the Application for Registration of a Foreign Corporation. You need: completed form, Delaware Certificate of Good Standing, a registered agent in NH (you can be your own if you have a NH address, or use a service like Northwest Registered Agent ~$125/yr), and the filing fee (~$100). Can file by mail or in person in Concord."
        },
        {
          "id": "d8-brand-1a",
          "bucket": "brand",
          "task": "Research logo styles — browse Dribbble and Behance for 10 SaaS/dev tool logos you like, save screenshots",
          "priority": "high",
          "duration": "30min",
          "notes": "Search dribbble.com and behance.net for \"SaaS logo\", \"developer tool logo\", \"tech startup logo\". Look for clean, modern, minimal designs. Save your top 10 favorites to a folder for reference."
        },
        {
          "id": "d8-brand-1b",
          "bucket": "brand",
          "task": "Create 3 logo concepts using Canva logo maker (or brief a Fiverr designer)",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go to canva.com/logos. Try 3 different directions: 1) Wordmark only (just \"Sprits\" in a distinctive font), 2) Icon + wordmark (a symbol next to the name), 3) Lettermark (\"S\" or \"SA\" stylized). If hiring on Fiverr, search \"minimalist logo design\" — budget $50-100, share your mood board and competitor screenshots."
        },
        {
          "id": "d8-brand-1c",
          "bucket": "brand",
          "task": "Share logo concepts with co-founder for feedback — pick top 2 to refine",
          "priority": "medium",
          "duration": "30min",
          "notes": "Send the 3 concepts and ask: Which feels most like us? Which would you trust as a customer? Don't overthink — you can always refine later. Pick 2 to move forward with."
        },
        {
          "id": "d8-brand-2",
          "bucket": "brand",
          "task": "Choose a color palette — primary, secondary, accent, and neutral colors",
          "priority": "medium",
          "duration": "30min",
          "notes": "Use Coolors.co (coolors.co) to generate palettes. You already have your bucket colors as a start. A good palette: 1 primary (brand color), 1 secondary, 1 accent, plus black/white/gray neutrals. Look at what competitors DON'T use — be distinctive. Save the hex codes in your brand doc."
        },
        {
          "id": "d8-product-1a",
          "bucket": "product",
          "task": "Outline the product one-pager — define sections: problem, solution, how it works, key features, pricing CTA",
          "priority": "high",
          "duration": "30min",
          "notes": "Use Google Docs. Standard one-pager sections: 1) The Problem (QA bottleneck), 2) The Solution (QAI Agent), 3) How It Works (3-step flow: install GitHub App → trigger /devbud → get report), 4) Key Features (5-6 bullets), 5) Call to Action (book a demo)."
        },
        {
          "id": "d8-product-1b",
          "bucket": "product",
          "task": "Draft the product one-pager — write compelling copy for each section",
          "priority": "high",
          "duration": "1hr",
          "notes": "Write for a busy engineering manager who has 60 seconds to decide if this is worth their time. Lead with the pain point, not the technology. Use concrete numbers where possible (\"catches bugs in minutes, not days\")."
        },
        {
          "id": "d8-product-1c",
          "bucket": "product",
          "task": "Review one-pager with co-founder — verify technical accuracy and refine messaging",
          "priority": "medium",
          "duration": "30min",
          "notes": "Have your developer review all technical claims. Make sure nothing is exaggerated or inaccurate. Ask: \"If a CTO reads this, will they trust us?\""
        },
        {
          "id": "d8-web-1",
          "bucket": "web",
          "task": "Wireframe the features/how-it-works page",
          "priority": "medium",
          "duration": "45min",
          "notes": "Sections: 1) Page hero — 'How QAI Agent Works', 2) 3-step process with illustrations, 3) Feature grid (6-8 features with icons), 4) Integration section (GitHub logo, PR screenshot), 5) Technical specs (what it tests, what browsers, etc.), 6) CTA to try demo. Use Excalidraw or Figma."
        },
        {
          "id": "d8-sales-1",
          "bucket": "sales",
          "task": "Identify 5 developer communities to join and create accounts",
          "priority": "medium",
          "duration": "45min",
          "notes": "Join: 1) Dev.to (dev.to/enter), 2) Hacker News (news.ycombinator.com — create account), 3) Reddit — subscribe to r/QualityAssurance, r/softwaretesting, r/webdev, 4) IndieHackers (indiehackers.com), 5) Find 1-2 relevant Discord/Slack communities (search 'developer community discord'). Complete your profiles — use your real name and mention Sprits AI."
        }
      ]
    },
    {
      "day": 9,
      "date": "2026-08-13",
      "dayOfWeek": "Thursday",
      "phase": 1,
      "weekTheme": "Legal Progress & Brand Development",
      "tasks": [
        {
          "id": "d9-legal-1",
          "bucket": "legal",
          "task": "Research SaaS-specific business insurance needs and request 2 quotes",
          "priority": "medium",
          "duration": "45min",
          "notes": "Request quotes from Hiscox (hiscox.com) and Next Insurance (nextinsurance.com). Ask for: General Liability and Professional Liability (E&O). Mention you're a SaaS company doing AI-based testing. Budget ~$100-200/mo. You don't need this immediately but want to have it before onboarding clients."
        },
        {
          "id": "d9-brand-1",
          "bucket": "brand",
          "task": "Select typography — choose 1 heading font and 1 body font",
          "priority": "medium",
          "duration": "30min",
          "notes": "Use Google Fonts (fonts.google.com). Popular pairings for tech/SaaS: Inter + Inter (clean and modern), Poppins + Open Sans, Space Grotesk + DM Sans. Pick fonts that are free, web-safe, and readable. Test them at different sizes. Save your choices in the brand document."
        },
        {
          "id": "d9-brand-2",
          "bucket": "brand",
          "task": "Create a brand mood board with finalized direction",
          "priority": "medium",
          "duration": "30min",
          "notes": "Combine your color palette, typography, logo directions, and inspiration images into one visual board. Use Canva, Figma, or a Google Slide. This is your visual north star for all design work going forward."
        },
        {
          "id": "d9-product-1",
          "bucket": "product",
          "task": "Refine the demo script — write a guided walkthrough for all 5 demo pages",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "For each demo page, write: What you say when showing it, which bugs to highlight, what QAI Agent catches, the 'wow moment' to emphasize. Practice the full script timing — aim for a 10-minute demo that shows the most impressive features. Have a 5-minute version for quick calls too."
        },
        {
          "id": "d9-web-1",
          "bucket": "web",
          "task": "Wireframe the pricing page — research SaaS pricing models for QA tools",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Research pricing at: QA Wolf (custom), Mabl (starts ~$500/mo), BrowserStack (~$29/user/mo), Cypress (~$75/mo). For early stage, consider: Free Trial > Starter ($99-199/mo, small team) > Pro ($499-999/mo, larger team) > Enterprise (custom). Wireframe: pricing cards with feature comparison, FAQ below, 'Talk to us' CTA."
        },
        {
          "id": "d9-ops-1",
          "bucket": "ops",
          "task": "Create email signature for joshua@ sprits.ai with brand colors",
          "priority": "low",
          "duration": "20min",
          "notes": "Use HubSpot's free email signature generator (hubspot.com/email-signature-generator) or Wisestamp (wisestamp.com/email-signature). Include: Name, Title (Co-founder & CEO), Sprits AI, phone, website, LinkedIn. Keep it clean — no quotes or banners. Set it up in your email client."
        }
      ]
    },
    {
      "day": 10,
      "date": "2026-08-14",
      "dayOfWeek": "Friday",
      "phase": 1,
      "weekTheme": "Legal Progress & Brand Development",
      "tasks": [
        {
          "id": "d10-legal-1",
          "bucket": "legal",
          "task": "Set up accounting categories for SaaS business expenses in Wave/QuickBooks",
          "priority": "medium",
          "duration": "30min",
          "notes": "Key categories to set up: Revenue (Subscription Revenue, Professional Services), COGS (Hosting/Infrastructure, API Costs), Operating Expenses (Salaries, Software/Tools, Marketing, Legal, Insurance, Office/Misc). Having clean categories from the start saves massive headaches at tax time."
        },
        {
          "id": "d10-product-1",
          "bucket": "product",
          "task": "Build a comparison chart — Manual QA vs QAI Agent (for sales materials)",
          "priority": "high",
          "duration": "1hr",
          "notes": "Create a side-by-side table: Manual QA — hours of human testing, missed bugs, blocks releases, expensive hires, doesn't scale. QAI Agent — minutes per PR, consistent coverage, non-blocking, fraction of the cost, scales instantly. Make it visual in Canva or Google Slides. This goes on the website and in the pitch deck."
        },
        {
          "id": "d10-sales-1",
          "bucket": "sales",
          "task": "Write 3 versions of a cold outreach email — short, medium, and with a case angle",
          "priority": "high",
          "duration": "1hr",
          "notes": "Email 1 (Short, 3 sentences): Identify pain + offer value + ask. Email 2 (Medium, 5-7 sentences): Reference something specific about their company + describe QAI Agent + invite to demo. Email 3 (Case angle): 'What if your next PR had automated QA in the comments?' All should end with a question, not a pitch. A/B test these later."
        },
        {
          "id": "d10-web-1",
          "bucket": "web",
          "task": "Choose a website template or framework and start setting up the project",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Recommended: Use a Tailwind CSS template (tailwindui.com has free components, or search 'free SaaS landing page template tailwind' on GitHub). If using Webflow, pick a SaaS template. Set up the project locally or in Webflow. The goal is to have the marketing site live by end of Week 3."
        },
        {
          "id": "d10-brand-1",
          "bucket": "brand",
          "task": "Review logo concepts and pick top 2 for refinement",
          "priority": "medium",
          "duration": "30min",
          "notes": "Look at your 3 logo concepts. Test them: Does it work as a favicon (16x16px)? Does it look good on a dark background? Is it simple enough to remember? Get your co-founder's opinion. If using Fiverr, request revisions on your top pick."
        },
        {
          "id": "d10-ops-1",
          "bucket": "ops",
          "task": "Week 2 planning — review priorities and adjust tasks for next week",
          "priority": "medium",
          "duration": "30min",
          "notes": "Review what's done from this week. Big question: Is the NH foreign qualification filed? Is the bank account fully set up? Is the prospect list at 50? Adjust next week's plan based on reality. Share the update with your co-founder."
        }
      ]
    },
    {
      "day": 11,
      "date": "2026-08-15",
      "dayOfWeek": "Saturday",
      "phase": 1,
      "weekTheme": "Legal Progress & Brand Development",
      "tasks": []
    },
    {
      "day": 12,
      "date": "2026-08-16",
      "dayOfWeek": "Sunday",
      "phase": 1,
      "weekTheme": "Legal Progress & Brand Development",
      "tasks": []
    },
    {
      "day": 13,
      "date": "2026-08-17",
      "dayOfWeek": "Monday",
      "phase": 1,
      "weekTheme": "Legal Progress & Brand Development",
      "tasks": [
        {
          "id": "d13-legal-1",
          "bucket": "legal",
          "task": "Follow up on NH foreign qualification status — call or check online",
          "priority": "high",
          "duration": "15min",
          "notes": "Call NH Secretary of State Corporation Division at (603) 271-3246 or check online status. If not yet filed, prioritize getting it sent today. If filed, note the expected approval date. You need this before doing business formally in NH."
        },
        {
          "id": "d13-legal-2",
          "bucket": "legal",
          "task": "Research SaaS legal essentials — EULA, SLA, and what you'll need for clients",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Google 'SaaS legal checklist for startups'. You'll need: Terms of Service (ToS), Privacy Policy, SaaS Subscription Agreement (your contract with clients), SLA (Service Level Agreement — uptime guarantees). For now, just research what each document covers. We'll draft them later this week. Good reference: saastr.com, clerky.com/blog."
        },
        {
          "id": "d13-brand-1",
          "bucket": "brand",
          "task": "Finalize logo — make final selection and request all file formats",
          "priority": "high",
          "duration": "1hr",
          "notes": "Pick your final logo. Get these file formats: SVG (for web), PNG with transparent background (for docs/slides), PNG on white background, PNG on dark background, favicon (32x32 and 16x16 ICO file). If using Canva, download as SVG and PNG. If on Fiverr, request all formats in your final revision."
        },
        {
          "id": "d13-web-1a",
          "bucket": "web",
          "task": "Set up the marketing site page structure — create index.html with navigation and footer",
          "priority": "high",
          "duration": "30min",
          "notes": "Create a clean HTML file for the marketing homepage. Include: nav bar (logo, Features, Pricing, About, Demo CTA button), main content area, and footer (copyright, links, social). Use your brand colors and fonts."
        },
        {
          "id": "d13-web-1b",
          "bucket": "web",
          "task": "Build the hero section — headline, subheadline, CTA button, and hero image or demo screenshot",
          "priority": "high",
          "duration": "45min",
          "notes": "The hero is the first thing people see. Include: 1) Headline (your one-liner value prop), 2) Subheadline (1-2 sentences expanding on the headline), 3) CTA button (\"Book a Demo\" or \"See It In Action\"), 4) Screenshot or GIF of QAI Agent in action."
        },
        {
          "id": "d13-web-1c",
          "bucket": "web",
          "task": "Build the \"How It Works\" section — 3-step visual flow showing the QAI Agent process",
          "priority": "high",
          "duration": "45min",
          "notes": "Three steps: 1) Install the GitHub App (icon: GitHub logo), 2) Trigger /devbud on any PR (icon: chat bubble), 3) Get a full QA report with screenshots (icon: clipboard/report). Use simple icons or illustrations. Keep it scannable."
        },
        {
          "id": "d13-product-1",
          "bucket": "product",
          "task": "Create a 'How It Works' diagram — 3 steps from PR comment to test report",
          "priority": "medium",
          "duration": "45min",
          "notes": "Use Canva, Figma, or even Google Slides. Three steps: 1) Developer types /devbud in a PR comment, 2) QAI Agent spins up a browser and runs QA tests, 3) Test report with screenshots is posted back to the PR. Make it visual with arrows, icons, and screenshots. This goes on the website and in the pitch deck."
        },
        {
          "id": "d13-sales-1",
          "bucket": "sales",
          "task": "Optimize your personal LinkedIn profile — headline, about section, and experience",
          "priority": "high",
          "duration": "1hr",
          "notes": "Update: Headline to 'Co-founder & CEO at Sprits AI | AI-Powered QA for Dev Teams'. About section: Tell the story of why you're building QAI Agent, what it does, who it's for. Add Sprits AI to your Experience section. Add a professional headshot if you don't have one. Keywords matter — LinkedIn search uses them."
        }
      ]
    },
    {
      "day": 14,
      "date": "2026-08-18",
      "dayOfWeek": "Tuesday",
      "phase": 1,
      "weekTheme": "Legal Progress & Brand Development",
      "tasks": [
        {
          "id": "d14-brand-1",
          "bucket": "brand",
          "task": "Create a 1-page brand guidelines document",
          "priority": "high",
          "duration": "1hr",
          "notes": "One page with: Logo (with spacing rules), Color palette (hex codes for primary, secondary, accent, neutrals), Typography (heading and body fonts with sizes), Brand voice (3-5 adjectives: e.g., technical, approachable, confident, concise), Do's and Don'ts. Use Canva or Google Slides. Share with co-founder so all materials are consistent."
        },
        {
          "id": "d14-brand-2",
          "bucket": "brand",
          "task": "Design LinkedIn banner for personal and company profiles",
          "priority": "medium",
          "duration": "30min",
          "notes": "Canva has LinkedIn banner templates (search 'LinkedIn banner'). Personal: 1584x396px — include Sprits AI logo, tagline, and sprits.ai URL. Company: 1128x191px — brand-focused with logo and value prop. Use your brand colors and fonts."
        },
        {
          "id": "d14-web-1a",
          "bucket": "web",
          "task": "Build the features grid — 6 key features with icons and short descriptions",
          "priority": "high",
          "duration": "45min",
          "notes": "Suggested features to highlight: 1) AI-Powered Browser Testing, 2) GitHub-Native Integration, 3) Screenshot Documentation, 4) Severity-Based Reporting, 5) Multi-Tenant Isolation, 6) Fast Setup (minutes not weeks). Use icons from heroicons.com or feathericons.com."
        },
        {
          "id": "d14-web-1b",
          "bucket": "web",
          "task": "Build the social proof / trust section — logos, stats, or early testimonial placeholders",
          "priority": "medium",
          "duration": "30min",
          "notes": "Even without clients yet, you can add: \"Built on AWS\", \"Powered by Claude AI\", technology partner logos, or a \"Trusted by innovative dev teams\" section with placeholder logos. You'll replace these with real logos once you have clients."
        },
        {
          "id": "d14-web-1c",
          "bucket": "web",
          "task": "Test homepage on mobile — fix any responsive layout issues",
          "priority": "medium",
          "duration": "45min",
          "notes": "Open Chrome DevTools (Cmd+Option+I), click the device toggle icon, and test on iPhone SE, iPhone 14, iPad, and a generic Android phone. Fix any text overflow, button sizing, or layout issues. The hero section is usually where mobile breaks first."
        },
        {
          "id": "d14-sales-1",
          "bucket": "sales",
          "task": "Create Sprits AI LinkedIn company page with full branding",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go to linkedin.com/company/setup — create the company page. Add: logo, banner, description (what QAI Agent does, who it's for), website URL, industry (Computer Software), company size (2-10). Write a compelling 'About' section. Invite your co-founder to list it as their employer. Publish one introductory post."
        },
        {
          "id": "d14-ops-1",
          "bucket": "ops",
          "task": "Set up Google Analytics on sprits.ai",
          "priority": "medium",
          "duration": "30min",
          "notes": "Go to analytics.google.com — create a GA4 property for sprits.ai. Get the tracking ID (G-XXXXXXXXXX) and add the script to your site's <head> tag. Set up basic goals: page views, demo page visits, contact form submissions. This data becomes critical for understanding what's working."
        },
        {
          "id": "d14-product-1",
          "bucket": "product",
          "task": "Answer remaining 10 FAQ questions and finalize the FAQ document",
          "priority": "medium",
          "duration": "45min",
          "notes": "Finish all 20 FAQ answers. Have your co-founder review the technical answers for accuracy. Format them cleanly — these will go on the website and be reference material for sales calls. Group them: General, Technical/Integration, Pricing, Security/Privacy."
        }
      ]
    },
    {
      "day": 15,
      "date": "2026-08-19",
      "dayOfWeek": "Wednesday",
      "phase": 1,
      "weekTheme": "Brand Finalization & Website Build",
      "tasks": [
        {
          "id": "d15-legal-1",
          "bucket": "legal",
          "task": "Start drafting Terms of Service using Termly.io as a starting point",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Go to termly.io — they have a free Terms of Service generator. Answer their questions about your service. Download the generated document. Customize it: add sections about API usage, data handling, and service availability. This is a starting point — plan to have a lawyer review before you onboard paying clients."
        },
        {
          "id": "d15-web-1a",
          "bucket": "web",
          "task": "Build the features page — detailed breakdown of each QAI Agent capability",
          "priority": "high",
          "duration": "1hr",
          "notes": "Expand beyond the homepage feature grid. For each feature, include: title, description (2-3 sentences), and a screenshot or illustration. Group features by category: Testing, Reporting, Integration, Security."
        },
        {
          "id": "d15-web-1b",
          "bucket": "web",
          "task": "Add a comparison section — QAI Agent vs Manual QA vs other tools",
          "priority": "medium",
          "duration": "45min",
          "notes": "Create a comparison table. Rows: Setup Time, Cost, Speed, Coverage, Documentation, GitHub Integration. Columns: Manual QA, QA Wolf, Cypress, QAI Agent. Be honest but highlight your strengths (GitHub-native, AI-powered, automatic documentation)."
        },
        {
          "id": "d15-web-1c",
          "bucket": "web",
          "task": "Add a CTA section at the bottom of the features page — drive visitors to book a demo",
          "priority": "medium",
          "duration": "15min",
          "notes": "Simple section: \"Ready to automate your QA?\" with a \"Book a Demo\" button. Include a secondary option like \"See the demo site\" that links to sprits.ai/demo/."
        },
        {
          "id": "d15-product-1",
          "bucket": "product",
          "task": "Polish demo page 1 and demo page 2 based on your gap analysis",
          "priority": "high",
          "duration": "1hr",
          "notes": "Work with your co-founder on the improvements you identified on Day 6. Focus on the first 2 pages — these are what you'll show in short demos. Make sure the bugs are realistic, the QAI Agent catches them reliably, and the test report is clear and professional."
        },
        {
          "id": "d15-sales-1",
          "bucket": "sales",
          "task": "Join 3 developer communities and make your first non-promotional posts",
          "priority": "medium",
          "duration": "45min",
          "notes": "Post in Dev.to, Reddit, or Hacker News. NOT about your product — instead, share helpful content: 'What's your QA process for PRs?', 'How do small teams handle QA without dedicated testers?', a thoughtful comment on someone else's post about testing. The goal is to be a helpful community member first. Selling comes later."
        },
        {
          "id": "d15-brand-1",
          "bucket": "brand",
          "task": "Create branded email signature and deploy to all team email accounts",
          "priority": "low",
          "duration": "20min",
          "notes": "Apply the final logo, brand colors, and fonts to your email signature. Set it up in Gmail/Outlook. Make sure the website link, LinkedIn link, and 'Book a Demo' link all work. Send a test email to your co-founder to verify it renders correctly."
        }
      ]
    },
    {
      "day": 16,
      "date": "2026-08-20",
      "dayOfWeek": "Thursday",
      "phase": 1,
      "weekTheme": "Brand Finalization & Website Build",
      "tasks": [
        {
          "id": "d16-web-1",
          "bucket": "web",
          "task": "Build the About/Team page on sprits.ai",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Include: Company story (why you're building QAI Agent), team bios and photos (professional headshots — use LinkedIn photos if needed), and your mission statement. Keep it human and authentic. Prospects check the About page to see if you're real."
        },
        {
          "id": "d16-web-2",
          "bucket": "web",
          "task": "Build the contact/demo request page with a form",
          "priority": "high",
          "duration": "1hr",
          "notes": "Create a page with a contact form. Use Formspree (formspree.io, free up to 50 submissions/mo), Tally (tally.so, free), or HubSpot Forms (free). Fields: Name, Email, Company, Team Size, Message. Set up email notification so you get pinged immediately when someone submits. Add a Calendly link (calendly.com, free) for direct demo booking."
        },
        {
          "id": "d16-product-1",
          "bucket": "product",
          "task": "Polish demo pages 3-5 based on gap analysis",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Continue improving the remaining demo pages. Ensure consistency across all 5 pages. Test the full flow: visiting the demo, triggering /devbud, and reviewing the report. Time the entire demo run — it should complete in under 5 minutes for a live demo."
        },
        {
          "id": "d16-sales-1",
          "bucket": "sales",
          "task": "Set up Calendly for demo scheduling with branded confirmation emails",
          "priority": "high",
          "duration": "30min",
          "notes": "Go to calendly.com — free tier works fine. Create a '30-Minute QAI Agent Demo' event type. Set your availability (leave buffer time between meetings). Customize the confirmation email with your branding. Add the Calendly link to your email signature, LinkedIn, and website."
        },
        {
          "id": "d16-ops-1",
          "bucket": "ops",
          "task": "Document the sales process — from first touch to closed deal",
          "priority": "medium",
          "duration": "45min",
          "notes": "Map out: 1) Prospect identified > 2) Cold outreach sent > 3) Response received > 4) Discovery call (15 min, learn their pain) > 5) Demo (30 min, show QAI Agent) > 6) Proposal sent > 7) Negotiation > 8) Contract signed > 9) Onboarding. For each stage, note: what happens, what materials you need, expected timeline, and success criteria."
        },
        {
          "id": "d16-legal-1",
          "bucket": "legal",
          "task": "Research SaaS agreement templates — find 2-3 good starting points",
          "priority": "medium",
          "duration": "30min",
          "notes": "Search for 'SaaS subscription agreement template'. Good free sources: Docracy (docracy.com), CommonPaper (commonpaper.com — specifically designed for SaaS), or LawDepot. A SaaS agreement should cover: subscription terms, payment, data handling, SLA, limitations, termination. Save 2-3 templates to review."
        }
      ]
    },
    {
      "day": 17,
      "date": "2026-08-21",
      "dayOfWeek": "Friday",
      "phase": 1,
      "weekTheme": "Brand Finalization & Website Build",
      "tasks": [
        {
          "id": "d17-web-1a",
          "bucket": "web",
          "task": "Define pricing tier structure — name each tier, list included features, set price points",
          "priority": "high",
          "duration": "30min",
          "notes": "Recommended: 3 tiers. Starter ($99-149/mo, up to 3 repos, 50 runs/mo), Team ($299-499/mo, up to 10 repos, 200 runs/mo, priority support), Enterprise (custom pricing, unlimited, SLA, dedicated support). These are starting points — you'll adjust based on market feedback."
        },
        {
          "id": "d17-web-1b",
          "bucket": "web",
          "task": "Build the pricing page HTML — tier cards with feature comparison grid",
          "priority": "high",
          "duration": "45min",
          "notes": "Standard layout: 3 cards side by side, middle one highlighted as \"Most Popular\". Each card: tier name, price, feature list with checkmarks, CTA button. Below the cards, add a detailed feature comparison table."
        },
        {
          "id": "d17-web-1c",
          "bucket": "web",
          "task": "Add FAQ section to pricing page — answer common pricing objections",
          "priority": "medium",
          "duration": "30min",
          "notes": "Common questions: \"Can I try it for free?\", \"What counts as a run?\", \"Can I change plans?\", \"What happens if I go over my limit?\", \"Do you offer annual discounts?\", \"Is there a startup discount?\". Write honest, helpful answers."
        },
        {
          "id": "d17-web-1d",
          "bucket": "web",
          "task": "Test pricing page on mobile and verify all CTAs link to contact/demo form",
          "priority": "medium",
          "duration": "15min",
          "notes": "Make sure the tier cards stack vertically on mobile instead of being cut off. Every CTA button should link to your demo booking page or contact form."
        },
        {
          "id": "d17-product-1",
          "bucket": "product",
          "task": "Create a full demo walkthrough script with timing marks",
          "priority": "high",
          "duration": "1hr",
          "notes": "Write a script: [0:00-1:00] Intro — state the problem. [1:00-3:00] Show triggering /devbud on a PR. [3:00-6:00] Walk through the test running, screenshots being captured. [6:00-8:00] Review the test report posted to the PR. [8:00-10:00] Highlight key bugs found, discuss next steps. Practice this 3 times. Time yourself."
        },
        {
          "id": "d17-sales-1",
          "bucket": "sales",
          "task": "Research 2 upcoming virtual dev events or webinars to attend",
          "priority": "medium",
          "duration": "30min",
          "notes": "Search: meetup.com (filter by 'software development' and 'virtual'), lu.ma for tech events, Dev.to events, Eventbrite (filter by 'software testing'). Look for: QA-focused meetups, developer tool showcases, startup pitch events. Sign up for 1-2 in the next 2 weeks. Great places to network with your ICP."
        },
        {
          "id": "d17-brand-1",
          "bucket": "brand",
          "task": "Create social media post templates — 3 reusable designs for LinkedIn",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Use Canva. Create templates for: 1) 'Tip/Insight' post (branded background with text overlay), 2) 'Product update' post (screenshot with branded frame), 3) 'Stat/data' post (big number with context). Use your brand colors and fonts. Save as Canva templates so you can quickly create new posts."
        },
        {
          "id": "d17-ops-1",
          "bucket": "ops",
          "task": "Set up a simple analytics dashboard to track weekly KPIs",
          "priority": "medium",
          "duration": "30min",
          "notes": "Use Google Sheets. Columns: Week, Prospects Contacted, Replies Received, Demos Booked, Demos Completed, Proposals Sent, Website Visitors, Cash Balance. Update this every Friday. Share with your co-founder. Simple but critical — you can't improve what you don't measure."
        }
      ]
    },
    {
      "day": 18,
      "date": "2026-08-22",
      "dayOfWeek": "Saturday",
      "phase": 1,
      "weekTheme": "Brand Finalization & Website Build",
      "tasks": []
    },
    {
      "day": 19,
      "date": "2026-08-23",
      "dayOfWeek": "Sunday",
      "phase": 1,
      "weekTheme": "Brand Finalization & Website Build",
      "tasks": []
    },
    {
      "day": 20,
      "date": "2026-08-24",
      "dayOfWeek": "Monday",
      "phase": 1,
      "weekTheme": "Brand Finalization & Website Build",
      "tasks": [
        {
          "id": "d20-web-1",
          "bucket": "web",
          "task": "Integrate all copy into website pages — homepage, features, about",
          "priority": "high",
          "duration": "2hr",
          "notes": "Take your finalized copy and put it into the actual website pages. Check that every page has: a clear headline, supporting text, a CTA (call to action), and proper formatting. Preview on both desktop and mobile. Fix any layout issues."
        },
        {
          "id": "d20-web-2",
          "bucket": "web",
          "task": "Add the contact form and Calendly integration to the website",
          "priority": "high",
          "duration": "1hr",
          "notes": "Embed your Formspree/Tally contact form and Calendly booking widget. Test both: submit a test form (verify you get the notification email), book a test meeting (verify the calendar invite works). These are your conversion points — they must work flawlessly."
        },
        {
          "id": "d20-product-1",
          "bucket": "product",
          "task": "Test the full demo flow end-to-end — verify everything works smoothly",
          "priority": "high",
          "duration": "1hr",
          "notes": "Run through the complete demo as if you're showing a prospect: navigate to demo, trigger /devbud on each page, wait for results, review reports. Time the whole process. Note anything that's slow, confusing, or broken. Fix critical issues immediately with your co-founder."
        },
        {
          "id": "d20-sales-1",
          "bucket": "sales",
          "task": "Start engaging on LinkedIn — comment thoughtfully on 10 posts from target audience",
          "priority": "medium",
          "duration": "45min",
          "notes": "Search LinkedIn for posts about: 'QA testing', 'automated testing', 'dev workflow', 'pull request'. Leave genuine, thoughtful comments — add value, share perspective, ask smart questions. Do NOT pitch your product in comments. The goal is visibility and relationship building. Do this daily from now on."
        },
        {
          "id": "d20-legal-1",
          "bucket": "legal",
          "task": "Draft Privacy Policy using Termly.io generator",
          "priority": "medium",
          "duration": "45min",
          "notes": "Go to termly.io — use their free Privacy Policy generator. Be honest about what data you collect (GitHub data during testing, user account info, analytics). Mention: data collection, data usage, data storage, third-party services (AWS, GitHub), user rights, contact info. Download and customize."
        },
        {
          "id": "d20-ops-1",
          "bucket": "ops",
          "task": "Review burn rate — how much have you spent so far and project remaining runway",
          "priority": "high",
          "duration": "30min",
          "notes": "Open Wave/QuickBooks. Sum all expenses to date. Calculate monthly burn rate. With $10K starting capital, how many months of runway do you have? Where are you spending the most? Any expenses you can cut? This keeps you honest about the financial reality."
        }
      ]
    },
    {
      "day": 21,
      "date": "2026-08-25",
      "dayOfWeek": "Tuesday",
      "phase": 1,
      "weekTheme": "Brand Finalization & Website Build",
      "tasks": [
        {
          "id": "d21-web-1",
          "bucket": "web",
          "task": "Mobile-optimize the entire website — test on phone and tablet",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Open Chrome DevTools (F12), click the device toggle icon, and test at: iPhone 12 (390px), iPad (768px), and desktop (1440px). Check every page. Fix: text that's too small, buttons that are too close together, images that overflow, nav that doesn't collapse to hamburger menu. Over 50% of web traffic is mobile."
        },
        {
          "id": "d21-web-2",
          "bucket": "web",
          "task": "Add meta tags, Open Graph tags, and favicon to the website",
          "priority": "medium",
          "duration": "30min",
          "notes": "Add to every page: <title>, <meta name='description'>, Open Graph tags (og:title, og:description, og:image — these control how your link looks when shared on LinkedIn/Twitter). Add your favicon. Test by pasting your URL into the LinkedIn post composer — preview should look good."
        },
        {
          "id": "d21-product-1",
          "bucket": "product",
          "task": "Finalize pricing tiers — decide on exact prices and feature breakdown",
          "priority": "high",
          "duration": "1hr",
          "notes": "Review competitor pricing. Discuss with co-founder. Recommended: don't overthink it — you'll change pricing multiple times. Start with: Starter ($149/mo), Pro ($449/mo), Enterprise (Custom). The first customer will probably negotiate anyway. The key is having SOMETHING to anchor the conversation."
        },
        {
          "id": "d21-sales-1",
          "bucket": "sales",
          "task": "Engage on LinkedIn — comment on 10 posts, connect with 10 people in target audience",
          "priority": "medium",
          "duration": "45min",
          "notes": "Send connection requests with a personal note (not a pitch): 'Hi [Name], I noticed we're both in the dev tools space. Would love to connect and follow your work.' Connect with: CTOs, VP Engineering, QA leads at target companies. Comment genuinely on posts. Build the network before you need it."
        },
        {
          "id": "d21-brand-1",
          "bucket": "brand",
          "task": "Create a one-pager/leave-behind PDF with final branding",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Update your product one-pager with the finalized brand: logo, colors, fonts. Finalize the content. Export as PDF. This is what you attach to follow-up emails after demos, send to interested prospects, and could even print for in-person events."
        },
        {
          "id": "d21-ops-1",
          "bucket": "ops",
          "task": "Create a weekly content calendar template for LinkedIn posts",
          "priority": "low",
          "duration": "30min",
          "notes": "Plan 3 posts/week: Monday (insight/tip about QA), Wednesday (product/behind-the-scenes), Friday (question/engagement post). Create a Google Sheet with columns: Date, Topic, Post Text, Image, Status. Start filling in topics for next week."
        }
      ]
    },
    {
      "day": 22,
      "date": "2026-08-26",
      "dayOfWeek": "Wednesday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": [
        {
          "id": "d22-legal-1a",
          "bucket": "legal",
          "task": "Download the CommonPaper Cloud Service Agreement template",
          "priority": "high",
          "duration": "15min",
          "notes": "Go to commonpaper.com — they offer free, standardized SaaS contracts used by real startups. Download the Cloud Service Agreement (CSA). It covers: subscription terms, payment, data handling, liability, termination. Much better than writing from scratch."
        },
        {
          "id": "d22-legal-1b",
          "bucket": "legal",
          "task": "Customize the SaaS agreement — fill in Sprits AI-specific terms (pricing, SLA, data handling)",
          "priority": "high",
          "duration": "1hr",
          "notes": "Key sections to customize: 1) Service description (what QAI Agent does and doesn't do), 2) Payment terms (monthly/annual, net 30), 3) Data handling (what code/data you access, how long you store it, encryption), 4) SLA (uptime commitment — start with 99.5%), 5) Liability cap (typically 12 months of fees paid), 6) Termination (30-day notice, data export)."
        },
        {
          "id": "d22-legal-1c",
          "bucket": "legal",
          "task": "Review the customized agreement with co-founder — ensure technical commitments are accurate",
          "priority": "high",
          "duration": "30min",
          "notes": "Your developer needs to verify: Can you actually meet the SLA? Are the data handling descriptions accurate? Any technical commitments you can't deliver on? Better to catch this now than in a client negotiation."
        },
        {
          "id": "d22-legal-1d",
          "bucket": "legal",
          "task": "Save the agreement as a template — create a PDF and editable version for future use",
          "priority": "low",
          "duration": "15min",
          "notes": "Save two versions: 1) A clean PDF for sending to prospects, 2) An editable Google Doc/Word version for customizing per client. Store both in your shared Google Drive or Notion."
        },
        {
          "id": "d22-web-1",
          "bucket": "web",
          "task": "Add testimonials/social proof section to homepage (use placeholders or early feedback)",
          "priority": "medium",
          "duration": "45min",
          "notes": "If you have any early feedback (from showing the demo to anyone), use real quotes. Otherwise, create a 'Trusted by developers at' section with a placeholder, or a 'What developers are saying about AI QA' section with industry quotes. Social proof is the #1 conversion factor — update this section as you get real testimonials."
        },
        {
          "id": "d22-web-2",
          "bucket": "web",
          "task": "Final QA pass on the website — check all links, forms, images, and copy",
          "priority": "high",
          "duration": "1hr",
          "notes": "Click every link on every page. Submit every form. Check every image loads. Read every word of copy for typos. Test the demo link. Check loading speed (use PageSpeed Insights at pagespeed.web.dev). Check that GA is tracking. Fix anything broken."
        },
        {
          "id": "d22-brand-1",
          "bucket": "brand",
          "task": "Finalize the pitch deck — polish design, add final data, review with co-founder",
          "priority": "high",
          "duration": "1hr",
          "notes": "Apply final branding to all slides. Ensure consistency: same fonts, colors, logo placement on every slide. Add any updated data (market size, pricing). Practice the full deck presentation — aim for 5-7 minutes. Get co-founder feedback. Export as PDF for sending."
        },
        {
          "id": "d22-product-1",
          "bucket": "product",
          "task": "Create an ROI calculator or ROI talking points sheet for sales conversations",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Build a simple Google Sheet calculator: inputs are team size, avg engineer salary, hours spent on QA per week. Outputs: annual cost of manual QA, annual cost of QAI Agent, annual savings, ROI percentage. Or create a PDF with pre-calculated scenarios for 5-person, 10-person, and 20-person teams."
        },
        {
          "id": "d22-sales-1",
          "bucket": "sales",
          "task": "Warm outreach — send 10 personal LinkedIn messages to people you know",
          "priority": "high",
          "duration": "1hr",
          "notes": "Message people in your existing network who work in tech. Not a pitch — a conversation: 'Hey [Name], I've been building something in the QA/testing space and would love your perspective. We built an AI agent that does browser QA testing directly from PR comments. Would you have 15 minutes to chat? I'd really value your input.' Warm intros convert 5-10x better than cold outreach."
        }
      ]
    },
    {
      "day": 23,
      "date": "2026-08-27",
      "dayOfWeek": "Thursday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": [
        {
          "id": "d23-legal-1",
          "bucket": "legal",
          "task": "Review Privacy Policy and Terms of Service drafts — finalize and publish on website",
          "priority": "high",
          "duration": "1hr",
          "notes": "Review your Termly-generated Privacy Policy and ToS. Customize any generic sections. Add them as pages on your website (usually linked in the footer). If you have budget (~$500-1000), consider having a lawyer review these. At minimum, make sure they accurately describe your data practices."
        },
        {
          "id": "d23-web-1",
          "bucket": "web",
          "task": "Launch the marketing website — deploy and announce",
          "priority": "high",
          "duration": "1hr",
          "notes": "Deploy the marketing site. Verify everything works in production: forms, links, images, GA tracking. Do a final check on mobile. Once live, share the URL with your co-founder. You'll announce it on LinkedIn in the coming days. Congrats — this is a huge milestone!"
        },
        {
          "id": "d23-sales-1",
          "bucket": "sales",
          "task": "Send 10 more warm outreach messages — emails and LinkedIn",
          "priority": "high",
          "duration": "1hr",
          "notes": "Continue reaching out to your personal network. Mix LinkedIn messages and emails. Personalize each one. Ask for: feedback, introductions, or just a conversation. Track all outreach in HubSpot. Follow up on any Day 22 messages that haven't responded."
        },
        {
          "id": "d23-product-1",
          "bucket": "product",
          "task": "Record a quick 2-minute product teaser video using Loom",
          "priority": "medium",
          "duration": "45min",
          "notes": "Sign up for Loom (loom.com, free tier). Record a quick screen share: show a PR, trigger /devbud, show the test report. Keep it under 2 minutes. This is NOT the full demo video — it's a teaser for social media and email. You can embed it on LinkedIn posts and your website."
        },
        {
          "id": "d23-brand-1",
          "bucket": "brand",
          "task": "Post your first LinkedIn content — share the founder story or a QA insight",
          "priority": "medium",
          "duration": "30min",
          "notes": "Publish that 'Why I'm building this' post you drafted on Day 12 (edit it first). Or post a QA insight: 'Did you know the average dev team spends 30% of sprint time on manual testing? We're building something to change that. More soon.' Include an image. Tag your co-founder. Engage with every comment."
        },
        {
          "id": "d23-ops-1",
          "bucket": "ops",
          "task": "Attend 1 virtual dev event or webinar — network and take notes",
          "priority": "medium",
          "duration": "1hr30min",
          "notes": "Attend one of the events you found on Day 17. Participate in chat, ask questions, connect with speakers/attendees on LinkedIn afterward. Note any potential prospects or partners you meet. Send follow-up connection requests within 24 hours."
        }
      ]
    },
    {
      "day": 24,
      "date": "2026-08-28",
      "dayOfWeek": "Friday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": [
        {
          "id": "d24-legal-1",
          "bucket": "legal",
          "task": "Finalize and review the SaaS client contract template with co-founder",
          "priority": "high",
          "duration": "1hr",
          "notes": "Review the SaaS agreement you drafted on Day 22. Key sections to double-check: payment terms (Net 30?), data handling (what you access, how you store it), SLA (if any uptime guarantee), termination (30-day notice?), liability limitations. Both founders should agree on terms before sending to any client."
        },
        {
          "id": "d24-sales-1",
          "bucket": "sales",
          "task": "Follow up on all warm outreach — respond to everyone who replied",
          "priority": "high",
          "duration": "1hr",
          "notes": "Check LinkedIn messages and email for replies to your warm outreach. Respond to everyone within 24 hours. For positive responses, schedule a 15-minute call. For 'not interested', ask if they know anyone who might be. Track everything in HubSpot. The fortune is in the follow-up."
        },
        {
          "id": "d24-sales-2",
          "bucket": "sales",
          "task": "Publish your second LinkedIn post — a QA pain point with data",
          "priority": "medium",
          "duration": "30min",
          "notes": "Post about a specific QA pain point: 'According to [stat], X% of bugs are found after deployment. Here's what that costs...' or share a personal observation about QA challenges. Include a relevant image or infographic (create in Canva). End with a question to drive engagement."
        },
        {
          "id": "d24-web-1",
          "bucket": "web",
          "task": "Review Google Analytics data from site launch — note initial traffic patterns",
          "priority": "medium",
          "duration": "20min",
          "notes": "Check GA4: How many visitors since launch? Which pages are they viewing? What's the bounce rate? Where are visitors coming from (direct, LinkedIn, etc.)? This is early data — don't overreact, just establish a baseline. Note any surprises."
        },
        {
          "id": "d24-product-1",
          "bucket": "product",
          "task": "Create a competitive positioning document — QAI Agent vs 5 competitors",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Make a comparison matrix: QAI Agent vs QA Wolf vs Cypress vs BrowserStack vs Mabl vs manual QA. Compare: pricing, setup time, GitHub integration, AI-powered, PR integration, screenshot capture. Highlight where QAI Agent wins. This is for your own reference and for sales conversations when prospects ask 'How are you different?'"
        },
        {
          "id": "d24-ops-1",
          "bucket": "ops",
          "task": "Update KPI dashboard with first data points",
          "priority": "medium",
          "duration": "15min",
          "notes": "Update your Google Sheet: prospects contacted, replies received, any demos booked, website visitors (from GA). Even if numbers are small, start tracking now. The trend matters more than the absolute numbers."
        },
        {
          "id": "d24-legal-add",
          "bucket": "legal",
          "priority": "high",
          "duration": "1hr",
          "task": "Draft a Data Processing Agreement (DPA) + a security & data-handling one-pager",
          "notes": "Prospects granting repo access WILL ask how you handle their code. Write a 1-page doc: exactly what data QAI Agent reads from a repo, where it's stored, encryption in transit/at rest, retention period, and deletion on cancellation. Add a short DPA addendum to your SaaS agreement. Missing these stalls deals."
        }
      ]
    },
    {
      "day": 25,
      "date": "2026-08-29",
      "dayOfWeek": "Saturday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": []
    },
    {
      "day": 26,
      "date": "2026-08-30",
      "dayOfWeek": "Sunday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": []
    },
    {
      "day": 27,
      "date": "2026-08-31",
      "dayOfWeek": "Monday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": [
        {
          "id": "d27-legal-1",
          "bucket": "legal",
          "task": "Check NH foreign qualification status and follow up if needed",
          "priority": "high",
          "duration": "15min",
          "notes": "Call NH Secretary of State at (603) 271-3246 or check online. If approved, save the certificate. If pending, ask about expected timeline. If there's an issue, address it immediately."
        },
        {
          "id": "d27-sales-1",
          "bucket": "sales",
          "task": "Send 10 more warm outreach messages to second-degree connections",
          "priority": "high",
          "duration": "1hr",
          "notes": "Ask your first-round contacts: 'Do you know anyone on a dev team struggling with QA who might be interested in chatting?' Also reach out to second-degree LinkedIn connections (people who liked or commented on your posts). Personalize every message."
        },
        {
          "id": "d27-sales-2",
          "bucket": "sales",
          "task": "Post your third LinkedIn content — share a product screenshot or demo GIF",
          "priority": "medium",
          "duration": "30min",
          "notes": "Show the product in action. A GIF of /devbud being triggered and the test report appearing is powerful. Use Giphy Capture or CleanShot X to record a GIF. Post with context: 'Here's what it looks like when AI does your QA. Type /devbud in a PR comment and get a full test report in minutes.' Tag relevant hashtags: #QA #DevTools #AI"
        },
        {
          "id": "d27-web-1",
          "bucket": "web",
          "task": "Add blog section to the website — set up the blog template/page",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Add a /blog page to your site. If using a static site, consider adding a simple CMS like Contentlayer or even just HTML pages. If using Webflow, the CMS feature is built in. Set up the blog index page and a post template. You'll start publishing in Phase 2."
        },
        {
          "id": "d27-product-1",
          "bucket": "product",
          "task": "Create a technical integration guide draft — how to set up QAI Agent",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Write a step-by-step guide for a new client: 1) Install the GitHub App, 2) Configure the repo, 3) Trigger /devbud on a PR, 4) Review the test report. Include screenshots for each step. This becomes onboarding documentation and a sales tool ('Look how easy setup is')."
        },
        {
          "id": "d27-ops-1",
          "bucket": "ops",
          "task": "Prepare the Phase 2 outreach plan — daily targets, email sequences, and tracking",
          "priority": "high",
          "duration": "45min",
          "notes": "Phase 2 is all about pipeline. Plan: Week 5-6: 10 cold emails/day, 3 LinkedIn posts/week, 5 community engagements/day. Week 7-8: Increase to 15/day, add referral asks, attend events. Set up tracking in HubSpot: email sequence for cold outreach, follow-up reminders at Day 3 and Day 7."
        }
      ]
    },
    {
      "day": 28,
      "date": "2026-09-01",
      "dayOfWeek": "Tuesday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": [
        {
          "id": "d28-sales-1",
          "bucket": "sales",
          "task": "Attend 1 virtual dev event or webinar — network and collect contacts",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Attend the second event you identified. Be active in the chat. Introduce yourself and what you're building when appropriate. Connect with 5+ people on LinkedIn afterward with personalized notes. Add any potential prospects to your CRM."
        },
        {
          "id": "d28-brand-1",
          "bucket": "brand",
          "task": "Create a leave-behind PDF with final branding — ready for email attachment",
          "priority": "medium",
          "duration": "45min",
          "notes": "Polish the one-pager. It should be: visually professional, clear value prop, 3 key benefits, how it works, pricing starting at, CTA with your Calendly link. Export as PDF. This is what you attach to every follow-up email."
        },
        {
          "id": "d28-web-1",
          "bucket": "web",
          "task": "Write the first blog post draft — 'The Hidden Cost of Manual QA Testing'",
          "priority": "medium",
          "duration": "1hr30min",
          "notes": "Target: 800-1200 words. Structure: Hook (surprising stat), the problem (manual QA costs), why it matters (shipping speed, developer happiness, bugs in production), the solution (AI-powered QA), soft CTA. This isn't a sales pitch — it's thought leadership. Include real data and statistics. Publish in Phase 2."
        },
        {
          "id": "d28-product-1",
          "bucket": "product",
          "task": "Build an onboarding checklist for new clients",
          "priority": "medium",
          "duration": "30min",
          "notes": "Create a checklist: Pre-onboarding (contract signed, account created), Setup (GitHub App installed, repo configured, first test run), Training (demo of features, walkthrough of reports, support channels), Go-Live (team notification, first real PR test, feedback collection). Make this a Notion template or Google Doc."
        },
        {
          "id": "d28-ops-1",
          "bucket": "ops",
          "task": "Review and finalize all email templates — intro, follow-up, demo invite, post-demo",
          "priority": "high",
          "duration": "45min",
          "notes": "In HubSpot, review all templates. Add: Post-Demo Follow-Up (thank them, recap key points, attach one-pager, propose next steps) and Proposal Email (summarize the deal, attach proposal, include timeline). Make sure every template has your email signature and correct links."
        },
        {
          "id": "d28-ops-add",
          "bucket": "operations",
          "priority": "high",
          "duration": "1hr",
          "task": "Set up a dedicated cold-email sending domain + CAN-SPAM compliance",
          "notes": "Don't cold-email from sprits.ai — a spam flag would hurt your primary domain and website email. Register a lookalike domain (e.g. getsprits.ai), set SPF/DKIM/DMARC, and warm it up before outreach starts Day 31. Legally (CAN-SPAM) every cold email needs a working opt-out and a physical mailing address in the footer — add both to your templates now."
        }
      ]
    },
    {
      "day": 29,
      "date": "2026-09-02",
      "dayOfWeek": "Wednesday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": [
        {
          "id": "d29-legal-1",
          "bucket": "legal",
          "task": "Comprehensive legal checklist review — verify all legal foundations are in place",
          "priority": "high",
          "duration": "30min",
          "notes": "Checklist: EIN obtained (yes/no), bank account open (yes/no), NH foreign qualification (status), bookkeeping set up (yes/no), ToS published (yes/no), Privacy Policy published (yes/no), SaaS agreement template ready (yes/no), insurance quotes received (yes/no). Address any gaps immediately."
        },
        {
          "id": "d29-sales-1",
          "bucket": "sales",
          "task": "Follow up on ALL outstanding warm outreach — leave no message unanswered",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go through HubSpot and check: Who hasn't responded? Send a friendly follow-up. Who responded positively but hasn't booked a call? Send a Calendly link. Who gave a referral? Thank them and reach out to the referral. Clean up your pipeline — mark prospects as Active, Stale, or Dead."
        },
        {
          "id": "d29-sales-2",
          "bucket": "sales",
          "task": "Prepare cold outreach campaign for Phase 2 — draft 5-email sequence",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Create a 5-touch sequence in HubSpot: Email 1 (Day 0): Cold intro. Email 2 (Day 3): Follow-up with a value-add (blog post or stat). Email 3 (Day 7): Social proof or case study angle. Email 4 (Day 14): Break-up email ('I know you're busy, last note from me...'). Email 5 (Day 21): Final reconnect. Draft all 5 emails."
        },
        {
          "id": "d29-product-1",
          "bucket": "product",
          "task": "Record the full 5-7 minute product demo video using Loom",
          "priority": "high",
          "duration": "1hr",
          "notes": "Use Loom (loom.com). Follow your demo script from Day 17. Tips: Clean desktop, close notifications, speak slowly, zoom in on key moments. Show: the PR, triggering /devbud, the agent running, the report with screenshots. Edit out any dead time. This video goes on your website and is sent to prospects who can't do a live demo."
        },
        {
          "id": "d29-web-1",
          "bucket": "web",
          "task": "Embed demo video on the website homepage or features page",
          "priority": "medium",
          "duration": "30min",
          "notes": "Upload the Loom video or export and upload to YouTube (unlisted). Embed on your website. Add a 'Watch the Demo' section or button. Make sure it loads fast and doesn't slow down your site. A video demo dramatically increases conversion on your homepage."
        },
        {
          "id": "d29-ops-1",
          "bucket": "ops",
          "task": "Prepare Phase 1 summary report for co-founder meeting",
          "priority": "high",
          "duration": "30min",
          "notes": "Summary: What was accomplished in all 6 buckets. Key metrics: prospects in pipeline, website launched (yes/no), legal status. Budget spent vs. remaining. Lessons learned. Phase 2 priorities and adjustments. Bring this to the co-founder meeting tomorrow."
        }
      ]
    },
    {
      "day": 30,
      "date": "2026-09-03",
      "dayOfWeek": "Thursday",
      "phase": 1,
      "weekTheme": "Foundation Wrap-up",
      "tasks": [
        {
          "id": "d30-ops-1",
          "bucket": "ops",
          "task": "Month 1 review meeting with co-founder — full Phase 1 retrospective",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Agenda: 1) Phase 1 accomplishments by bucket, 2) KPI review, 3) Budget review ($10K status), 4) Product feedback from any conversations, 5) What's working, what's not, 6) Phase 2 plan review and adjustments, 7) Assign Phase 2 responsibilities. This is one of the most important meetings of the 90 days."
        },
        {
          "id": "d30-sales-1",
          "bucket": "sales",
          "task": "Finalize prospect list — clean up, tag, and prioritize top 20 targets",
          "priority": "high",
          "duration": "1hr",
          "notes": "In HubSpot, review your entire prospect list (should be 50+). Tag each as: Hot (showed interest), Warm (connected/engaged), Cold (no contact yet). Prioritize the top 20 you'll target first in Phase 2. For each, note: why they're a good fit, who the decision maker is, and your angle."
        },
        {
          "id": "d30-legal-1",
          "bucket": "legal",
          "task": "Record all August expenses in bookkeeping — close the month cleanly",
          "priority": "high",
          "duration": "45min",
          "notes": "In Wave/QuickBooks, ensure every August expense is recorded and categorized. Download the bank statement and reconcile. Note total spend. Categories to check: legal fees, software subscriptions, marketing, hosting. This is your first month-end close — establish the habit now."
        },
        {
          "id": "d30-product-1",
          "bucket": "product",
          "task": "Prioritize product improvements for Phase 2 with co-founder",
          "priority": "high",
          "duration": "45min",
          "notes": "Based on your Day 26 list and any feedback from conversations: what 2-3 product improvements will have the biggest impact on closing deals? Maybe: faster test runs, better reports, support for more frameworks, self-service signup. Align with co-founder on what to build in September."
        },
        {
          "id": "d30-brand-1",
          "bucket": "brand",
          "task": "Create a case study template for future client stories",
          "priority": "medium",
          "duration": "30min",
          "notes": "Use Canva or Google Docs. Template: Company Overview, The Challenge (their QA pain), The Solution (how they use QAI Agent), The Results (time saved, bugs caught, speed improvement). You don't have a client yet, but having the template ready means you can create a case study quickly once you do."
        },
        {
          "id": "d30-web-1",
          "bucket": "web",
          "task": "Review website analytics for the full month — identify top pages and drop-offs",
          "priority": "medium",
          "duration": "20min",
          "notes": "Check GA4: Total visitors, top pages, average session duration, bounce rate, traffic sources. Where are people dropping off? Which page has the highest exit rate? Use these insights to improve the site in Phase 2. Even small data is useful."
        },
        {
          "id": "d30-ops-add",
          "bucket": "operations",
          "priority": "high",
          "duration": "30min",
          "task": "Set concrete numeric targets for Phases 2-3 with co-founder",
          "notes": "Make the plan outcome-based, not just activity-based. Write down and track weekly: # demos booked, # proposals sent, total pipeline $, and # founding customers to close by Oct 31. Review against these numbers at every weekly and monthly check-in."
        }
      ]
    },
    {
      "day": 31,
      "date": "2026-09-04",
      "dayOfWeek": "Friday",
      "phase": 2,
      "weekTheme": "Content & Outreach Launch",
      "tasks": [
        {
          "id": "d31-sales-1a",
          "bucket": "sales",
          "task": "Finalize your cold outreach email template — subject line, body, and CTA",
          "priority": "high",
          "duration": "30min",
          "notes": "Keep it short (under 150 words). Structure: 1) Personalized opening (reference their company or a recent PR), 2) Pain point (\"If your team is spending hours on manual QA...\"), 3) Solution (one sentence about QAI Agent), 4) Social proof or differentiator, 5) CTA (\"Worth a 15-min call?\"). Subject line should be casual and specific, not salesy."
        },
        {
          "id": "d31-sales-1b",
          "bucket": "sales",
          "task": "Verify your first 10 prospects — confirm email addresses and personalize each message",
          "priority": "high",
          "duration": "30min",
          "notes": "For each prospect: 1) Verify email (use hunter.io or apollo.io free tier), 2) Check their LinkedIn for recent posts or activity, 3) Look at their GitHub for recent PRs or repo activity, 4) Write a personalized first line for each email. This research is what separates effective outreach from spam."
        },
        {
          "id": "d31-sales-1c",
          "bucket": "sales",
          "task": "Send the first 10 personalized cold emails",
          "priority": "high",
          "duration": "30min",
          "notes": "Send from your joshua@sprits.ai email. Space them out (don't send all 10 at once). Track each in your CRM — log the date sent, subject line, and any personalization. Set a follow-up reminder for 3 days from now for non-responders."
        },
        {
          "id": "d31-sales-1d",
          "bucket": "sales",
          "task": "Set up a follow-up sequence — schedule Day 3 and Day 7 follow-up templates",
          "priority": "medium",
          "duration": "30min",
          "notes": "Most replies come from follow-ups, not the first email. Day 3 follow-up: Short, reference original email, add one new point. Day 7 follow-up: Different angle, maybe share a blog post or demo video. Day 14: Break-up email (\"Seems like timing isn't right, but if QA ever becomes a pain point...\"). You can use Mailshake or just do it manually from your CRM."
        },
        {
          "id": "d31-sales-2",
          "bucket": "sales",
          "task": "Publish LinkedIn post — announce the QAI Agent product (soft launch)",
          "priority": "high",
          "duration": "30min",
          "notes": "Post something like: 'After months of building, we're ready to show the world what QAI Agent can do. If your dev team wastes hours on manual QA every sprint, there might be a better way. DM me for an early look.' Include a product screenshot or short GIF. Tag your co-founder."
        },
        {
          "id": "d31-web-1",
          "bucket": "web",
          "task": "Publish first blog post — 'The Hidden Cost of Manual QA Testing'",
          "priority": "high",
          "duration": "1hr",
          "notes": "Edit the draft from Day 28. Add images, formatting, and a CTA at the end. Publish on your blog. Share on LinkedIn, Dev.to, and Reddit (if the subreddit allows). Add meta description and OG tags for the post. Submit to Hacker News (news.ycombinator.com/submit) if it's genuinely useful content."
        },
        {
          "id": "d31-legal-1",
          "bucket": "legal",
          "task": "Finalize the SaaS Subscription Agreement — ready for client signature",
          "priority": "high",
          "duration": "1hr",
          "notes": "Do a final review of your contract template. Make sure it includes: pricing terms that match your tiers, data handling section, SLA if you're offering one, and a clean signature block. Save as a Google Doc template and as a PDF. Consider using DocuSign (free trial) or PandaDoc (free tier) for e-signatures."
        },
        {
          "id": "d31-ops-1",
          "bucket": "ops",
          "task": "Set up outreach tracking — create a daily log for emails sent and responses",
          "priority": "medium",
          "duration": "20min",
          "notes": "Add a tab to your KPI sheet: Date, Emails Sent, LinkedIn Messages Sent, Replies Received, Positive Replies, Demos Booked. Fill this in every day. This tells you your outreach-to-demo conversion rate, which is the most important Phase 2 metric."
        }
      ]
    },
    {
      "day": 32,
      "date": "2026-09-05",
      "dayOfWeek": "Saturday",
      "phase": 2,
      "weekTheme": "Content & Outreach Launch",
      "tasks": []
    },
    {
      "day": 33,
      "date": "2026-09-06",
      "dayOfWeek": "Sunday",
      "phase": 2,
      "weekTheme": "Content & Outreach Launch",
      "tasks": []
    },
    {
      "day": 34,
      "date": "2026-09-07",
      "dayOfWeek": "Monday",
      "phase": 2,
      "weekTheme": "Content & Outreach Launch",
      "tasks": [
        {
          "id": "d34-sales-1",
          "bucket": "sales",
          "task": "Labor Day (US holiday) — light day: draft & personalize tomorrow's 10 cold emails, don't send today",
          "priority": "low",
          "duration": "45min",
          "notes": "Sept 7 is Labor Day — most US prospects are off, so cold email sent today gets buried. Use the light day to PREP: research and personalize tomorrow's 10 prospects so Day 35 is a fast send. Rest up; Phase 2's outreach grind starts in earnest tomorrow."
        },
        {
          "id": "d34-sales-2",
          "bucket": "sales",
          "task": "Engage on LinkedIn — comment on 10 posts, publish 1 post",
          "priority": "medium",
          "duration": "30min",
          "notes": "Keep building visibility. Comment on posts from your target audience and industry leaders. Publish your pre-written post from the weekend batch. Engage with every comment on your posts — LinkedIn's algorithm rewards conversation."
        },
        {
          "id": "d34-web-1",
          "bucket": "web",
          "task": "Publish blog post #2 — 'How AI is Changing Software Testing in 2026'",
          "priority": "medium",
          "duration": "30min",
          "notes": "Edit, add images, format, add CTA. Publish. Cross-post to Dev.to (dev.to — just copy/paste, set canonical URL to your blog). Share on LinkedIn and Reddit. Submit to Hacker News if it's genuinely valuable content."
        },
        {
          "id": "d34-product-1",
          "bucket": "product",
          "task": "Work with co-founder on top-priority product improvement from Phase 1 review",
          "priority": "high",
          "duration": "1hr",
          "notes": "Whatever improvement you prioritized on Day 30 — check in on progress. Can you help with testing, feedback, or documentation? The product needs to keep getting better based on what you're learning from outreach conversations."
        },
        {
          "id": "d34-ops-1",
          "bucket": "ops",
          "task": "Set up email warmup tool to improve cold email deliverability",
          "priority": "medium",
          "duration": "30min",
          "notes": "Sign up for Lemwarm (lemwarm.com, ~$29/mo) or Warmup Inbox (warmupinbox.com, ~$15/mo). These services send and receive emails from your address to improve your sender reputation. Critical if you're doing cold outreach — without warmup, your emails may land in spam. Start this immediately."
        }
      ]
    },
    {
      "day": 35,
      "date": "2026-09-08",
      "dayOfWeek": "Tuesday",
      "phase": 2,
      "weekTheme": "Content & Outreach Launch",
      "tasks": [
        {
          "id": "d35-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails — target companies hiring QA engineers",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Search LinkedIn Jobs for 'QA Engineer' or 'SDET' postings. The companies posting these roles are actively struggling with QA capacity — perfect prospects. Reach out to engineering managers or VPs at these companies. Angle: 'I noticed you're hiring a QA engineer. What if you could get AI-powered QA coverage while you search?'"
        },
        {
          "id": "d35-sales-2",
          "bucket": "sales",
          "task": "Follow up on Day 31 cold emails — send follow-up #1 to non-responders",
          "priority": "high",
          "duration": "45min",
          "notes": "In HubSpot, check who opened but didn't reply, and who didn't open at all. Send Follow-Up #1 from your sequence. For openers: 'I noticed you checked out my last email — curious if any of this resonated?' For non-openers: try a different subject line. Always add value (a stat, article, or insight) — don't just say 'following up'."
        },
        {
          "id": "d35-web-1",
          "bucket": "web",
          "task": "Start SEO optimization — research 10 keywords and optimize homepage meta tags",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Use Ubersuggest (neilpatel.com/ubersuggest, free) or Google Keyword Planner. Search for: 'AI QA testing', 'automated QA for pull requests', 'AI testing tool', 'automated browser testing', etc. Find keywords with decent volume and low competition. Update your homepage title, meta description, and H1/H2 tags to include top keywords."
        },
        {
          "id": "d35-brand-1",
          "bucket": "brand",
          "task": "Refine pitch based on early outreach feedback — update pitch deck if needed",
          "priority": "medium",
          "duration": "45min",
          "notes": "Review any replies or conversations from outreach so far. What questions are people asking? What objections are coming up? What excites them? Update your pitch deck slides and email templates based on real feedback. This is the most valuable data you have."
        },
        {
          "id": "d35-legal-1",
          "bucket": "legal",
          "task": "Set up invoicing system in Wave or QuickBooks — create first invoice template",
          "priority": "medium",
          "duration": "30min",
          "notes": "In Wave (Invoicing section) or QuickBooks, set up your invoice template: logo, company info, payment terms (Net 30), bank details or payment link. Create a draft invoice for your Starter tier. Having invoicing ready means you can send one within minutes of closing a deal."
        }
      ]
    },
    {
      "day": 36,
      "date": "2026-09-09",
      "dayOfWeek": "Wednesday",
      "phase": 2,
      "weekTheme": "Content & Outreach Launch",
      "tasks": [
        {
          "id": "d36-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails — target dev agencies and consultancies",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Dev agencies manage multiple clients and often handle QA for all of them. If you land an agency, you could get multiple projects. Search for: 'software development agency', 'dev consultancy' on Google and LinkedIn. Angle: 'QAI Agent could save your team hours per client project on QA.'"
        },
        {
          "id": "d36-sales-2",
          "bucket": "sales",
          "task": "LinkedIn engagement — comment on 10 posts, publish weekly post",
          "priority": "medium",
          "duration": "30min",
          "notes": "Stay consistent with LinkedIn. Share a useful insight about testing. Engage with your growing network. Every comment is visibility. Every post builds authority."
        },
        {
          "id": "d36-product-1",
          "bucket": "product",
          "task": "Review product improvement progress with co-founder — test any new features",
          "priority": "medium",
          "duration": "45min",
          "notes": "Check in on the product improvements prioritized for Phase 2. Test anything that's ready. Provide feedback from a sales perspective: 'Prospects are asking about X — can we show that?' Keep the product-sales feedback loop tight."
        },
        {
          "id": "d36-web-1",
          "bucket": "web",
          "task": "Add blog to site navigation and create a blog landing page with post previews",
          "priority": "medium",
          "duration": "45min",
          "notes": "Make the blog easily discoverable: add 'Blog' to main navigation, create a blog index page showing post titles, dates, and excerpts. If you have 2+ posts, this starts looking like a real content hub. Good for SEO and for showing prospects you're active."
        },
        {
          "id": "d36-ops-1",
          "bucket": "ops",
          "task": "Review pipeline weekly — how many active prospects, what stage are they in?",
          "priority": "high",
          "duration": "30min",
          "notes": "Open HubSpot. How many prospects in each stage? How many emails sent this week? Open rate? Reply rate? Any demos booked? If reply rate is below 5%, your messaging needs work. If it's above 10%, double down on what's working. Adjust your approach weekly."
        }
      ]
    },
    {
      "day": 37,
      "date": "2026-09-10",
      "dayOfWeek": "Thursday",
      "phase": 2,
      "weekTheme": "Content & Outreach Launch",
      "tasks": [
        {
          "id": "d37-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails — mix new prospects and follow-ups",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Split: 5 new prospects + 5 follow-ups from earlier in the week. For follow-ups, add a new angle: share a blog post, mention a relevant industry stat, or reference a recent news item about their company. Variety keeps you from sounding robotic."
        },
        {
          "id": "d37-sales-2",
          "bucket": "sales",
          "task": "Book your first demo call — reach out to any warm lead directly",
          "priority": "high",
          "duration": "30min",
          "notes": "Check HubSpot: who's responded positively? Who's engaged with your LinkedIn content? Reach out with a direct ask: 'Would you be up for a quick 20-minute demo? I can show you exactly how QAI Agent works on a real PR. Here's my Calendly: [link].' The first demo is a milestone — push hard to get it booked this week."
        },
        {
          "id": "d37-product-1",
          "bucket": "product",
          "task": "Prepare a demo environment tailored for your most promising prospects",
          "priority": "medium",
          "duration": "1hr",
          "notes": "If you know a prospect's tech stack (e.g., React, Python, Rails), prepare a demo that mimics their environment. This makes the demo feel more relevant. Even if you just change the demo page content to match their industry, it shows you care."
        },
        {
          "id": "d37-web-1",
          "bucket": "web",
          "task": "Write blog post #3 draft — 'Why Your PR Review Process is Missing Critical Bugs'",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Angle: code review catches logic errors but misses UI/UX bugs, broken flows, and visual regressions. QA testing on PRs catches what code review misses. Include examples of common bugs that slip through: broken forms, layout issues on mobile, accessibility problems. Publish early next week."
        },
        {
          "id": "d37-ops-1",
          "bucket": "ops",
          "task": "A/B test email subject lines — track which ones get higher open rates",
          "priority": "medium",
          "duration": "30min",
          "notes": "In your outreach tracker, note the subject line for each email. After 50+ sends, compare open rates by subject line. Test: question vs. statement, short vs. long, personalized vs. generic, curiosity-gap vs. direct. Example: 'Quick question about [Company]'s QA' vs. 'AI QA for your team'. Data-driven iteration wins."
        }
      ]
    },
    {
      "day": 38,
      "date": "2026-09-11",
      "dayOfWeek": "Friday",
      "phase": 2,
      "weekTheme": "Pipeline Building",
      "tasks": [
        {
          "id": "d38-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails — focus on companies with recent funding",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Recently funded companies are spending money on growth and tooling. Use Crunchbase or TechCrunch to find companies that raised in the last 6 months. Angle: 'Congrats on the raise! As you scale the team, QA becomes a bigger bottleneck — here's how we can help.'"
        },
        {
          "id": "d38-sales-2",
          "bucket": "sales",
          "task": "Follow up on all active conversations — push for demos",
          "priority": "high",
          "duration": "1hr",
          "notes": "Check every active conversation in HubSpot. Anyone who's expressed interest but hasn't booked a demo — send them a direct Calendly link with 2-3 specific time options. Be assertive but not pushy: 'I'd love to show you this in action — would Tuesday or Thursday this week work for 20 minutes?'"
        },
        {
          "id": "d38-legal-1",
          "bucket": "legal",
          "task": "Review insurance quotes and decide whether to purchase now or after first client",
          "priority": "medium",
          "duration": "30min",
          "notes": "Review the quotes from Hiscox and Next Insurance. If you're close to landing a client, consider purchasing General Liability + E&O now (~$100-200/mo). Some enterprise prospects will require proof of insurance. If budget is tight, you can wait until you have a signed deal."
        },
        {
          "id": "d38-web-1",
          "bucket": "web",
          "task": "Publish blog post #3 and share across all channels",
          "priority": "medium",
          "duration": "30min",
          "notes": "Edit, format, add images, publish. Share on LinkedIn (with a personal take, not just a link dump), Dev.to, relevant subreddits. Each blog post is a touchpoint and an SEO asset. Consistency matters more than virality."
        },
        {
          "id": "d38-ops-1",
          "bucket": "ops",
          "task": "Weekly pipeline review — update all deal stages in HubSpot",
          "priority": "high",
          "duration": "30min",
          "notes": "Go through every prospect in HubSpot. Update stages: Who responded? Who's warm? Any demos booked? Calculate: emails sent, reply rate, demo conversion rate. This weekly hygiene keeps your pipeline accurate and helps you focus on the right prospects."
        }
      ]
    },
    {
      "day": 39,
      "date": "2026-09-12",
      "dayOfWeek": "Saturday",
      "phase": 2,
      "weekTheme": "Pipeline Building",
      "tasks": []
    },
    {
      "day": 40,
      "date": "2026-09-13",
      "dayOfWeek": "Sunday",
      "phase": 2,
      "weekTheme": "Pipeline Building",
      "tasks": []
    },
    {
      "day": 41,
      "date": "2026-09-14",
      "dayOfWeek": "Monday",
      "phase": 2,
      "weekTheme": "Pipeline Building",
      "tasks": [
        {
          "id": "d41-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails — test new messaging angle",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Based on your A/B test results, try a new angle. Options: Lead with a question ('How does your team handle QA on PRs?'), lead with social proof ('Teams using AI for QA are shipping 2x faster'), or lead with a specific pain ('Manual QA is the #1 bottleneck for dev teams shipping weekly'). Track which angle gets the most replies."
        },
        {
          "id": "d41-sales-2",
          "bucket": "sales",
          "task": "LinkedIn engagement — comment on 10 posts, publish 1 post, connect with 5 new people",
          "priority": "medium",
          "duration": "30min",
          "notes": "Stay consistent. Your LinkedIn presence is a long-term investment that compounds over time. Every week your network grows, your content reaches more people."
        },
        {
          "id": "d41-web-1",
          "bucket": "web",
          "task": "Publish blog post #4 and optimize all blog posts for SEO",
          "priority": "medium",
          "duration": "45min",
          "notes": "Edit and publish. Then go back to all 4 posts: add internal links between them, update meta descriptions, ensure each targets a specific keyword, add alt text to all images. Good SEO takes months to compound, but you need to start now."
        },
        {
          "id": "d41-product-1",
          "bucket": "product",
          "task": "Create a technical integration guide — step-by-step with screenshots",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Expand the draft from Day 27 into a polished guide with screenshots of every step. This serves two purposes: 1) Shows prospects how easy setup is, 2) Becomes your actual onboarding documentation. Publish it on your site as a 'Getting Started' or 'Docs' page."
        },
        {
          "id": "d41-ops-1",
          "bucket": "ops",
          "task": "Start tracking conversion metrics by source — which channel produces the most demos?",
          "priority": "medium",
          "duration": "20min",
          "notes": "In your KPI sheet, add a column for 'Source' on every lead: Cold Email, LinkedIn, Referral, Inbound (website), Event. After a few weeks, you'll see which channel has the best ROI. Double down on what works."
        }
      ]
    },
    {
      "day": 42,
      "date": "2026-09-15",
      "dayOfWeek": "Tuesday",
      "phase": 2,
      "weekTheme": "Pipeline Building",
      "tasks": [
        {
          "id": "d42-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails — include the demo video link in some",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Test including your demo video link in the email: 'I recorded a quick 2-minute video showing how QAI Agent works in a real PR — [link]. Would love your thoughts.' Videos in cold emails can significantly boost engagement. Track whether emails with video links get more replies."
        },
        {
          "id": "d42-sales-2",
          "bucket": "sales",
          "task": "Follow up on all outstanding conversations — push toward demos",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go through every active lead in HubSpot. Send follow-ups with new angles: share a blog post, mention a relevant feature, ask a specific question about their workflow. The goal is to book 2+ demos this week."
        },
        {
          "id": "d42-product-1",
          "bucket": "product",
          "task": "Refine the demo based on any feedback from outreach conversations",
          "priority": "medium",
          "duration": "1hr",
          "notes": "If prospects have mentioned specific concerns or interests, adapt your demo: show the features they care about first, prepare answers for common objections, add a custom demo scenario that matches their use case. A tailored demo converts much better than a generic one."
        },
        {
          "id": "d42-web-1",
          "bucket": "web",
          "task": "Add SEO keywords to all website pages — title tags, headers, and body content",
          "priority": "medium",
          "duration": "45min",
          "notes": "Based on your keyword research from Day 35, update pages: Homepage should target 'AI QA testing tool' or 'automated QA for pull requests'. Features page targets feature-specific keywords. Blog posts target long-tail keywords. Don't keyword stuff — write naturally but include target terms in titles and headers."
        },
        {
          "id": "d42-ops-1",
          "bucket": "ops",
          "task": "Review email A/B test results — identify winning subject line and messaging",
          "priority": "medium",
          "duration": "20min",
          "notes": "Compare all subject lines and messaging angles tested so far. Which subject line has the highest open rate? Which email body gets the most replies? Lock in the winning combination as your primary template and keep testing one variable at a time."
        }
      ]
    },
    {
      "day": 43,
      "date": "2026-09-16",
      "dayOfWeek": "Wednesday",
      "phase": 2,
      "weekTheme": "Pipeline Building",
      "tasks": [
        {
          "id": "d43-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails using your best-performing template",
          "priority": "high",
          "duration": "1hr",
          "notes": "Use the winning subject line and messaging from your A/B tests. Still personalize the first line of each email. Consistency + personalization = results. You should be approaching 100+ total emails sent by now."
        },
        {
          "id": "d43-sales-2",
          "bucket": "sales",
          "task": "Prepare for upcoming demo calls — create a demo prep checklist",
          "priority": "high",
          "duration": "30min",
          "notes": "Checklist: Research the prospect's company, check their GitHub (if public), review their tech stack, prepare 3 discovery questions (What's your current QA process? What's your biggest testing pain? What would ideal QA look like?), have the demo environment ready, test everything 30 min before the call."
        },
        {
          "id": "d43-sales-3",
          "bucket": "sales",
          "task": "LinkedIn engagement — publish post and engage with 10 comments",
          "priority": "medium",
          "duration": "30min",
          "notes": "Publish a post about a testing insight or behind-the-scenes update. Keep engaging consistently. This compounds."
        },
        {
          "id": "d43-product-1",
          "bucket": "product",
          "task": "Test product improvements deployed this week — ensure demo quality",
          "priority": "medium",
          "duration": "30min",
          "notes": "Run through the demo with any new improvements your co-founder has shipped. Verify everything works smoothly. Note any issues and report back immediately."
        },
        {
          "id": "d43-web-1",
          "bucket": "web",
          "task": "Write blog post #5 draft — address a common prospect objection in content form",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Think about the #1 objection you've heard: 'Is AI testing reliable?' or 'How does it compare to our existing tests?' or 'Is it secure?'. Write a blog post that addresses it thoroughly. Title format: 'Is AI-Powered QA Testing Reliable? Here's What We Found.' This becomes a link you can share in sales conversations."
        },
        {
          "id": "d43-legal-1",
          "bucket": "legal",
          "task": "Ensure compliance documents are organized and ready for prospect requests",
          "priority": "low",
          "duration": "20min",
          "notes": "Some prospects will ask for: Privacy Policy (link), Terms of Service (link), Security overview, SOC 2 status (you likely don't have this yet — be honest). Have answers ready. Create a 'Trust & Security' one-pager if needed."
        },
        {
          "id": "d43-ops-add",
          "bucket": "operations",
          "priority": "medium",
          "duration": "45min",
          "task": "Prepare answers to common security-questionnaire questions",
          "notes": "Larger prospects send security questionnaires that can stall a deal for a week. Draft crisp answers now for: data encryption, access controls, hosting location, subprocessors, incident response, and SOC 2 status (be honest — 'not yet, on the roadmap'). Keep them in a doc ready to paste."
        }
      ]
    },
    {
      "day": 44,
      "date": "2026-09-17",
      "dayOfWeek": "Thursday",
      "phase": 2,
      "weekTheme": "Pipeline Building",
      "tasks": [
        {
          "id": "d44-sales-1",
          "bucket": "sales",
          "task": "Send 10 cold outreach emails and 5 follow-ups",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Keep the machine running. 10 new emails + 5 follow-ups on older sends. Vary your approach: some emails focus on pain, some on the product, some on ROI. The key is volume with personalization."
        },
        {
          "id": "d44-sales-2",
          "bucket": "sales",
          "task": "Conduct your first demo call (if booked) — follow the demo script",
          "priority": "high",
          "duration": "1hr",
          "notes": "If you have a demo booked: 1) Start with 5 min discovery (ask about their process), 2) Show the demo (10 min), 3) Q&A (10 min), 4) Next steps (5 min). Record the call (ask permission) with Zoom or Google Meet. Take notes on every objection and question. Send a follow-up email within 2 hours."
        },
        {
          "id": "d44-web-1",
          "bucket": "web",
          "task": "Publish blog post #5 and optimize previous posts based on GA data",
          "priority": "medium",
          "duration": "30min",
          "notes": "Publish the objection-addressing post. Check GA: which blog posts are getting the most traffic? Which have the highest bounce rate? Update underperforming posts with better titles, stronger intros, and clearer CTAs."
        },
        {
          "id": "d44-ops-1",
          "bucket": "ops",
          "task": "Weekly pipeline review — analyze conversion funnel and identify bottlenecks",
          "priority": "high",
          "duration": "30min",
          "notes": "Full funnel: Emails sent > Opens > Replies > Positive replies > Demos booked > Demos completed. Where's the biggest drop-off? That's where you focus improvement. If opens are low: fix subjects. If replies are low: fix copy. If demos aren't booking: fix your CTA/scheduling."
        },
        {
          "id": "d44-product-1",
          "bucket": "product",
          "task": "Document all prospect feedback and objections for product roadmap",
          "priority": "medium",
          "duration": "30min",
          "notes": "Create a 'Voice of Customer' doc in Notion. Log every piece of feedback, every question, every objection. Categorize: Feature Request, Concern, Praise, Objection. Review this weekly with your co-founder to inform product priorities."
        }
      ]
    },
    {
      "day": 45,
      "date": "2026-09-18",
      "dayOfWeek": "Friday",
      "phase": 2,
      "weekTheme": "Networking & Thought Leadership",
      "tasks": [
        {
          "id": "d45-sales-1",
          "bucket": "sales",
          "task": "Increase outreach to 15 emails/day — expand prospect pool",
          "priority": "high",
          "duration": "2hr",
          "notes": "Time to increase volume. If your messaging is working (5%+ reply rate), sending more emails = more opportunities. If it's not working, fix the messaging before increasing volume. 15/day means about 75/week — you're building real pipeline now."
        },
        {
          "id": "d45-sales-2",
          "bucket": "sales",
          "task": "Reach out to 3 QA consultants or freelancers as potential referral partners",
          "priority": "medium",
          "duration": "45min",
          "notes": "Search LinkedIn for 'QA Consultant' or 'Test Automation Freelancer'. These people work with multiple companies and can be incredible referral sources. Message them: 'I'm building an AI QA tool — would love to get your expert opinion and explore if there's a referral opportunity.' Some may even want to recommend your tool to their clients."
        },
        {
          "id": "d45-product-1",
          "bucket": "product",
          "task": "Create a 'How It Works' technical deep-dive document",
          "priority": "medium",
          "duration": "1hr",
          "notes": "More detailed than the website page: explain the architecture (Phoenix/Elixir, AWS Bedrock AgentCore, Playwright), how the AI makes testing decisions, how screenshots are captured and analyzed, how reports are generated. This is for technical prospects who want to understand what's under the hood."
        },
        {
          "id": "d45-ops-1",
          "bucket": "ops",
          "task": "Review and update Phase 2 KPIs — are you on track?",
          "priority": "high",
          "duration": "30min",
          "notes": "Halfway through Phase 2. Check: Total outreach sent, reply rate, demos completed, pipeline value, website traffic, blog post performance. Are you on track to have a healthy pipeline entering Phase 3? If not, what needs to change in the next 2 weeks?"
        }
      ]
    },
    {
      "day": 46,
      "date": "2026-09-19",
      "dayOfWeek": "Saturday",
      "phase": 2,
      "weekTheme": "Networking & Thought Leadership",
      "tasks": []
    },
    {
      "day": 47,
      "date": "2026-09-20",
      "dayOfWeek": "Sunday",
      "phase": 2,
      "weekTheme": "Networking & Thought Leadership",
      "tasks": []
    },
    {
      "day": 48,
      "date": "2026-09-21",
      "dayOfWeek": "Monday",
      "phase": 2,
      "weekTheme": "Networking & Thought Leadership",
      "tasks": [
        {
          "id": "d48-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails — continue increased volume",
          "priority": "high",
          "duration": "2hr",
          "notes": "Keep pushing. You should be approaching 200+ total emails sent. The law of large numbers: more outreach = more conversations = more demos = more clients. Stay personalized even at higher volume — the first line must reference something specific about the recipient."
        },
        {
          "id": "d48-sales-2",
          "bucket": "sales",
          "task": "Attend a virtual dev meetup or webinar — network actively",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Attend the event you identified. Be active: introduce yourself in chat, ask thoughtful questions, mention what you're building if there's a relevant opportunity. Connect with speakers and attendees on LinkedIn within 24 hours. Look for speaking/demo opportunities at future events."
        },
        {
          "id": "d48-product-1",
          "bucket": "product",
          "task": "Prepare for live demos — create backup plans for common technical issues",
          "priority": "medium",
          "duration": "30min",
          "notes": "What if the demo breaks during a call? Have: a pre-recorded video backup, a screenshot walkthrough, and a plan B demo page. Test your internet connection and screen sharing setup before every demo. Always have a backup."
        },
        {
          "id": "d48-ops-1",
          "bucket": "ops",
          "task": "Mid-plan review meeting with co-founder — assess Phase 2 progress",
          "priority": "high",
          "duration": "1hr",
          "notes": "Agenda: 1) Pipeline status — how many active prospects?, 2) Demo results — what's converting?, 3) Product feedback — what are prospects asking for?, 4) Budget update — how much runway left?, 5) Phase 3 preparation — what needs to be true to close a deal in October?, 6) Action items for the rest of Phase 2."
        }
      ]
    },
    {
      "day": 49,
      "date": "2026-09-22",
      "dayOfWeek": "Tuesday",
      "phase": 2,
      "weekTheme": "Networking & Thought Leadership",
      "tasks": [
        {
          "id": "d49-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails — target CTOs and VP Engineering",
          "priority": "high",
          "duration": "2hr",
          "notes": "Decision makers. Search LinkedIn for 'CTO' or 'VP Engineering' at your target companies. These are harder to reach but can make buying decisions. Keep emails even shorter for C-level: 3 sentences max, clear value prop, easy CTA."
        },
        {
          "id": "d49-sales-2",
          "bucket": "sales",
          "task": "Follow up on all event connections from yesterday — personalized LinkedIn messages",
          "priority": "high",
          "duration": "30min",
          "notes": "Within 24 hours of the event. Reference something specific from the event: 'Great meeting you at [event name] — I really liked your question about [topic].' Then transition: 'I'd love to show you what we're building.' Personal and timely follow-ups convert well."
        },
        {
          "id": "d49-product-1",
          "bucket": "product",
          "task": "Iterate on the demo based on latest feedback — implement quick wins",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Review your Voice of Customer doc. What are the easy wins your co-founder can implement quickly? Maybe: better report formatting, faster test execution, clearer error messages. Quick improvements show prospects you're responsive and iterating fast."
        },
        {
          "id": "d49-web-1",
          "bucket": "web",
          "task": "Optimize website landing pages based on analytics data",
          "priority": "medium",
          "duration": "45min",
          "notes": "Check GA: Which pages have the highest bounce rate? Where do users drop off? Test improvements: stronger headlines, clearer CTAs, better above-the-fold content, faster loading times. Even small conversion improvements compound over time."
        },
        {
          "id": "d49-sales-3",
          "bucket": "sales",
          "task": "LinkedIn — publish thought leadership post and engage with 10 comments",
          "priority": "medium",
          "duration": "30min",
          "notes": "Post something provocative or insightful: 'Hot take: Most dev teams don't need a dedicated QA engineer. They need better tooling.' Spark a discussion. These types of posts get massive engagement and attract your target audience."
        }
      ]
    },
    {
      "day": 50,
      "date": "2026-09-23",
      "dayOfWeek": "Wednesday",
      "phase": 2,
      "weekTheme": "Networking & Thought Leadership",
      "tasks": [
        {
          "id": "d50-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails — test a video email approach",
          "priority": "high",
          "duration": "2hr",
          "notes": "Try sending 5 of today's 15 emails as video emails using Loom: record a 60-second personalized video for each prospect ('Hey [Name], I checked out [Company] and noticed...'). Video emails get 3x higher response rates. It's more effort but potentially much higher conversion."
        },
        {
          "id": "d50-product-1",
          "bucket": "product",
          "task": "Check in with co-founder on product roadmap — Phase 3 readiness",
          "priority": "high",
          "duration": "30min",
          "notes": "Phase 3 starts in 11 days. Is the product ready for real client onboarding? What still needs to be built? What can be deferred post-first-client? Align on priorities: stability and reliability over new features."
        },
        {
          "id": "d50-ops-1",
          "bucket": "ops",
          "task": "Pipeline review — identify top 5 hottest prospects and create a plan for each",
          "priority": "high",
          "duration": "30min",
          "notes": "Which 5 prospects are closest to a demo or deal? For each: What's their status? What's the next action? What do they need to move forward? What's blocking them? Create a specific plan: 'Call John on Thursday, send case study, offer pilot program.' Focus on these 5 for the rest of Phase 2."
        }
      ]
    },
    {
      "day": 51,
      "date": "2026-09-24",
      "dayOfWeek": "Thursday",
      "phase": 2,
      "weekTheme": "Networking & Thought Leadership",
      "tasks": [
        {
          "id": "d51-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails and follow up on all video emails",
          "priority": "high",
          "duration": "2hr",
          "notes": "Continue the machine. Check: did the video emails from yesterday get better responses? If yes, do more. If no, stick with text. Follow up on all active conversations. Push hard for demos."
        },
        {
          "id": "d51-sales-2",
          "bucket": "sales",
          "task": "Reach out to 3 QA consultants or testing community leaders for partnerships",
          "priority": "medium",
          "duration": "45min",
          "notes": "Continue building your referral network. Look for: testing podcasters, QA bloggers, dev tool reviewers, testing community Slack/Discord admins. These people have influence in your target market. A single recommendation from them can generate multiple leads."
        },
        {
          "id": "d51-product-1",
          "bucket": "product",
          "task": "Create a custom demo environment for your hottest prospect",
          "priority": "high",
          "duration": "1hr",
          "notes": "Take your #1 prospect. Research their product — what does it do? What tech do they use? Customize a demo page that mimics their use case. If they're an e-commerce company, show QAI Agent finding bugs in a shopping cart. If they're SaaS, show it finding bugs in a dashboard. Personalized demos close deals."
        },
        {
          "id": "d51-ops-1",
          "bucket": "ops",
          "task": "Weekly pipeline and KPI review — end of Week 7",
          "priority": "high",
          "duration": "30min",
          "notes": "Full review: total outreach sent, reply rate, demos completed, pipeline status, website traffic, content performance. Two weeks until Phase 3. Is your pipeline healthy enough? Set aggressive goals for next week."
        }
      ]
    },
    {
      "day": 52,
      "date": "2026-09-25",
      "dayOfWeek": "Friday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": [
        {
          "id": "d52-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails and nurture all warm leads",
          "priority": "high",
          "duration": "2hr",
          "notes": "Split focus: 10 new emails + 5 personalized nurture touches to warm leads. For warm leads, share something valuable: a blog post relevant to their challenges, a testimonial if you have one, an industry report. Stay top of mind without being annoying."
        },
        {
          "id": "d52-sales-2",
          "bucket": "sales",
          "task": "Ask 5 existing connections for referrals — specific ask, easy to answer",
          "priority": "high",
          "duration": "30min",
          "notes": "Message 5 people who've been supportive: 'Hey [Name], I'm looking for intros to engineering leaders at SaaS companies with 10-50 devs. Do you know anyone who might be struggling with QA? Even one name would be incredibly helpful.' Make it specific and easy — people want to help but need direction."
        },
        {
          "id": "d52-product-1a",
          "bucket": "product",
          "task": "Decide on approach: self-service trial or waitlist signup — discuss with co-founder",
          "priority": "high",
          "duration": "20min",
          "notes": "Self-service trial requires more product polish (onboarding flow, docs, error handling) but scales better. Waitlist is simpler — collect email + company name, personally reach out to qualify. For now, waitlist is probably the right call unless the product onboarding is already smooth."
        },
        {
          "id": "d52-product-1b",
          "bucket": "product",
          "task": "Design the trial/waitlist landing page — headline, benefits, and signup form",
          "priority": "high",
          "duration": "45min",
          "notes": "Keep it simple: 1) Headline (\"Be the first to try QAI Agent\"), 2) 3-4 bullet points on what they get, 3) Form (name, email, company, team size, GitHub org URL), 4) \"Join the Waitlist\" CTA. Add urgency: \"Limited founding customer spots available.\""
        },
        {
          "id": "d52-product-1c",
          "bucket": "product",
          "task": "Build and test the page — implement the form and connect to email/CRM",
          "priority": "medium",
          "duration": "45min",
          "notes": "Options for the form backend: 1) Formspree.io (free, sends to your email), 2) Google Forms embedded, 3) HubSpot form (if using HubSpot CRM, this auto-creates contacts). Test the full flow — submit, confirm you receive it, verify the thank-you message."
        },
        {
          "id": "d52-ops-1",
          "bucket": "ops",
          "task": "Review outreach analytics — identify your best-performing messaging",
          "priority": "medium",
          "duration": "30min",
          "notes": "Full analysis: best subject lines (open rate), best email bodies (reply rate), best channels (conversion rate), best prospect profiles (who actually engages). Lock in your best performing approach for Phase 3."
        }
      ]
    },
    {
      "day": 53,
      "date": "2026-09-26",
      "dayOfWeek": "Saturday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": []
    },
    {
      "day": 54,
      "date": "2026-09-27",
      "dayOfWeek": "Sunday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": []
    },
    {
      "day": 55,
      "date": "2026-09-28",
      "dayOfWeek": "Monday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": [
        {
          "id": "d55-ops-1",
          "bucket": "sales",
          "task": "Send 10 personalized cold outreach emails to top prospects (volume moved off Labor Day)",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Normal working Monday (the old plan mislabeled this as Memorial Day). Kick off Pipeline Maturation week with a focused send to your best-fit prospects, referencing the founding-customer offer and the Oct 31 deadline."
        },
        {
          "id": "d55-sales-1",
          "bucket": "sales",
          "task": "Review your top 10 prospects — prepare personalized outreach for this week",
          "priority": "medium",
          "duration": "30min",
          "notes": "Light planning work. For your top 10 prospects, write a personalized note about why they'd benefit from being a founding customer. You'll send these throughout the week. Monday evenings are actually good for sending emails — they land at the top of the inbox Tuesday morning."
        }
      ]
    },
    {
      "day": 56,
      "date": "2026-09-29",
      "dayOfWeek": "Tuesday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": [
        {
          "id": "d56-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails plus founding customer offers to top 5 warm leads",
          "priority": "high",
          "duration": "2hr",
          "notes": "Big push. Send regular cold emails to new prospects AND the founding customer offer to your warmest leads. Make the founding customer pitch feel exclusive: 'We're selecting 3 founding customers who want to shape the future of AI QA testing — and I think [Company] would be a perfect fit.'"
        },
        {
          "id": "d56-sales-2",
          "bucket": "sales",
          "task": "LinkedIn — publish founding customer announcement and engage",
          "priority": "medium",
          "duration": "30min",
          "notes": "Post: 'We're looking for 3 founding customers for QAI Agent. 50% off for the first year, direct input on our roadmap, and priority support. If your team ships PRs daily and QA is a bottleneck, DM me.' This creates public urgency and can generate inbound interest."
        },
        {
          "id": "d56-product-1",
          "bucket": "product",
          "task": "Final product readiness check with co-founder — is onboarding smooth?",
          "priority": "high",
          "duration": "45min",
          "notes": "Walk through the entire client experience: signup, GitHub integration, first test, report. Is it smooth? Any bugs? Any confusing steps? Fix anything critical before Phase 3. You want onboarding to be effortless when the first client says yes."
        },
        {
          "id": "d56-ops-1",
          "bucket": "ops",
          "task": "Set up a dedicated Slack or email channel for client support (preparation)",
          "priority": "low",
          "duration": "20min",
          "notes": "Create a support email (support@sprits.ai) or Slack channel. Even before you have clients, having this ready shows professionalism. Consider Intercom free tier (intercom.com) for live chat on your site — prospects often prefer chatting to emailing."
        },
        {
          "id": "d56-product-add",
          "bucket": "product",
          "priority": "high",
          "duration": "1hr",
          "task": "Set up Stripe recurring billing to match your pricing tiers",
          "notes": "So a signed deal turns into revenue with zero friction. Create Stripe subscription Products/Prices for each tier, run a real test checkout end-to-end, and confirm invoices/receipts look right. Don't wait until a client says yes to figure out how to charge them."
        }
      ]
    },
    {
      "day": 57,
      "date": "2026-09-30",
      "dayOfWeek": "Wednesday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": [
        {
          "id": "d57-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails — emphasize the founding customer deadline",
          "priority": "high",
          "duration": "2hr",
          "notes": "Create urgency: 'We're only taking 3 founding customers before October 31.' This is real urgency — Phase 3 ends November 3. Use this natural deadline in every outreach. People respond to deadlines."
        },
        {
          "id": "d57-sales-2",
          "bucket": "sales",
          "task": "Follow up aggressively on all warm leads — push for demos this week",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go through every warm lead. Send a specific, time-bound ask: 'I'd love to show you QAI Agent this week — I have slots open Thursday at 2pm or Friday at 10am. Which works better?' Being specific with times converts better than 'let me know when works.'"
        },
        {
          "id": "d57-product-1",
          "bucket": "product",
          "task": "Prepare 2 custom demo scenarios for upcoming demo calls",
          "priority": "high",
          "duration": "1hr",
          "notes": "For each upcoming demo, customize the demo to match the prospect's use case. Even small customizations (matching their industry, showing relevant bug types) dramatically increase close rates."
        },
        {
          "id": "d57-web-1",
          "bucket": "web",
          "task": "Add the founding customer offer to the website — banner or dedicated page",
          "priority": "medium",
          "duration": "30min",
          "notes": "Create a simple landing page or banner: 'Founding Customer Program — 50% off for your first year. Limited to 3 spots.' Include the benefits and a CTA to schedule a call. Link to it from your outreach emails."
        },
        {
          "id": "d57-ops-1",
          "bucket": "ops",
          "task": "Review financials — September expenses, remaining budget, and revenue projections",
          "priority": "medium",
          "duration": "30min",
          "notes": "In Wave/QuickBooks, record all September expenses. What's your total burn to date? How much of the $10K is left? Project: if you close a client at $149/mo, when do you break even? This financial clarity keeps you grounded and motivated."
        }
      ]
    },
    {
      "day": 58,
      "date": "2026-10-01",
      "dayOfWeek": "Thursday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": [
        {
          "id": "d58-sales-1",
          "bucket": "sales",
          "task": "Send 15 cold outreach emails — last major push before Phase 3",
          "priority": "high",
          "duration": "2hr",
          "notes": "Final pipeline-building push. After this week, your focus shifts to converting existing pipeline, not building new. Make every email count. You should have 250+ total emails sent by now."
        },
        {
          "id": "d58-sales-2",
          "bucket": "sales",
          "task": "Conduct demo call (if booked) — use founding customer pitch",
          "priority": "high",
          "duration": "1hr",
          "notes": "In the demo, after showing the product, present the founding customer offer: 'We're looking for 3 founding customers. You'd get 50% off for the first year, direct input on our roadmap, and priority support. We're only taking companies that are a great fit — and I think you are.'"
        },
        {
          "id": "d58-web-1",
          "bucket": "web",
          "task": "Review website analytics for September — identify what's working and what's not",
          "priority": "medium",
          "duration": "30min",
          "notes": "Full September analytics review: total visitors, top pages, conversion rate (form submissions / visitors), traffic sources, blog post performance. Compare to August. Which blog posts drive the most traffic? Which pages convert best? Use these insights for Phase 3 optimization."
        },
        {
          "id": "d58-ops-1",
          "bucket": "ops",
          "task": "Prepare for the Month 2 review meeting with co-founder",
          "priority": "high",
          "duration": "30min",
          "notes": "Prepare: Phase 2 accomplishments, pipeline status (total prospects, stages, expected close timeline), product updates, financial review, Phase 3 plan. Bring specific numbers and honest assessment."
        },
        {
          "id": "d58-product-1",
          "bucket": "product",
          "task": "Final product improvements before Phase 3 — prioritize stability over features",
          "priority": "high",
          "duration": "1hr",
          "notes": "Work with co-founder: fix any remaining bugs, ensure uptime, make sure onboarding flow is bulletproof. Phase 3 is about closing — the product must be reliable. No new features unless they directly help close a deal."
        }
      ]
    },
    {
      "day": 59,
      "date": "2026-10-02",
      "dayOfWeek": "Friday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": [
        {
          "id": "d59-sales-1",
          "bucket": "sales",
          "task": "Final pipeline building outreach — 10 emails focused on warm follow-ups",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Focus on follow-ups today. Every warm lead needs a touch before Phase 3 begins. Send a value-add: blog post, industry stat, product update, or the founding customer offer. Make sure no warm lead goes cold over the weekend."
        },
        {
          "id": "d59-sales-2",
          "bucket": "sales",
          "task": "Review all active deals — create a Phase 3 closing plan for each",
          "priority": "high",
          "duration": "1hr",
          "notes": "For every prospect in Demo Completed or Proposal stage, create a plan: What's the next step? What objections remain? Who's the decision maker? What's their timeline? What offer will close them? Write this out for your top 5 prospects — these are your Phase 3 targets."
        },
        {
          "id": "d59-ops-1",
          "bucket": "ops",
          "task": "Month 2 review meeting with co-founder — Phase 2 retrospective",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Deep review: 1) Pipeline health, 2) Demo results and learnings, 3) Product status, 4) Content performance, 5) Financial review, 6) Phase 3 plan — who are we trying to close and how? 7) Role clarification for Phase 3 (Joshua: 100% sales, co-founder: 100% product reliability and support). This meeting sets the tone for the final sprint."
        },
        {
          "id": "d59-legal-1",
          "bucket": "legal",
          "task": "Record all September expenses in bookkeeping — close the month",
          "priority": "medium",
          "duration": "30min",
          "notes": "In Wave/QuickBooks: record all September expenses, reconcile bank statement, note total spend. Categories: software subscriptions, email tools, any marketing spend, hosting. Keep the books clean — it's a discipline."
        },
        {
          "id": "d59-web-1",
          "bucket": "web",
          "task": "Final website updates — ensure founding customer page and all CTAs are optimized",
          "priority": "medium",
          "duration": "30min",
          "notes": "Last check before Phase 3: founding customer page live and compelling, all CTAs working, contact form tested, Calendly link active, demo video embedded, blog content up to date. The website is your always-on salesperson — make it work."
        }
      ]
    },
    {
      "day": 60,
      "date": "2026-10-03",
      "dayOfWeek": "Saturday",
      "phase": 2,
      "weekTheme": "Pipeline Maturation",
      "tasks": []
    },
    {
      "day": 61,
      "date": "2026-10-04",
      "dayOfWeek": "Sunday",
      "phase": 3,
      "weekTheme": "Sales Sprint Begins",
      "tasks": []
    },
    {
      "day": 62,
      "date": "2026-10-05",
      "dayOfWeek": "Monday",
      "phase": 3,
      "weekTheme": "Sales Sprint Begins",
      "tasks": [
        {
          "id": "d62-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — mix cold, warm, and follow-ups",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Keep the volume high. Track everything in HubSpot. Personalize every first line. Include the founding customer offer in warm lead emails. For cold prospects: lead with pain, end with curiosity."
        },
        {
          "id": "d62-sales-2",
          "bucket": "sales",
          "task": "Respond to every reply within 1 hour — speed wins deals",
          "priority": "high",
          "duration": "ongoing",
          "notes": "During Phase 3, check email every 30 minutes. Respond to positive replies immediately — 'That's great to hear! Here's a 20-minute slot this week: [Calendly].' Speed of response correlates directly with close rate. The first vendor to respond often wins."
        },
        {
          "id": "d62-sales-3",
          "bucket": "sales",
          "task": "LinkedIn engagement — comment on 15 posts, direct-message 5 prospects",
          "priority": "medium",
          "duration": "45min",
          "notes": "Increase LinkedIn activity during Phase 3. DM prospects directly on LinkedIn (some people respond better to LinkedIn messages than email). Use the personal touch: 'I've been following [Company] and think QAI Agent would be a great fit for your team.'"
        },
        {
          "id": "d62-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — update all deal stages, plan tomorrow's priorities",
          "priority": "high",
          "duration": "15min",
          "notes": "Morning review: check all responses, update HubSpot, set today's priorities. End of day: note results, flag urgent follow-ups for tomorrow."
        },
        {
          "id": "d62-product-1",
          "bucket": "product",
          "task": "Prepare custom demo materials for any confirmed demo calls this week",
          "priority": "high",
          "duration": "45min",
          "notes": "For each demo booked: research the company, customize the demo, prepare discovery questions, have the founding customer offer ready to present."
        }
      ]
    },
    {
      "day": 63,
      "date": "2026-10-06",
      "dayOfWeek": "Tuesday",
      "phase": 3,
      "weekTheme": "Sales Sprint Begins",
      "tasks": [
        {
          "id": "d63-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — target companies in your most responsive segment",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "By now you know which type of company responds best (size, industry, role). Focus your outreach on that segment. If CTOs respond better than VPs, target CTOs. If Series A companies respond better, target Series A. Let data guide targeting."
        },
        {
          "id": "d63-sales-2",
          "bucket": "sales",
          "task": "Demo call #1 this week — deliver a flawless demo and present founding customer offer",
          "priority": "high",
          "duration": "1hr",
          "notes": "Follow your demo script. Discovery first (5 min), demo (10 min), founding customer pitch (5 min), Q&A (10 min). Key: ask for the sale! 'Based on what I showed you, does this look like it would help your team? We'd love to have you as a founding customer.' Don't leave without a clear next step."
        },
        {
          "id": "d63-sales-3",
          "bucket": "sales",
          "task": "Same-day follow-up on demo — send personalized email within 2 hours",
          "priority": "high",
          "duration": "30min",
          "notes": "After the demo: 'Great meeting you, [Name]. As we discussed, QAI Agent would save your team [specific benefit]. Attached is the founding customer offer we talked about. I'm available for any questions — would Thursday or Friday work for a follow-up?' Attach the one-pager and founding customer details."
        },
        {
          "id": "d63-web-1",
          "bucket": "web",
          "task": "Publish a case study or use case example from demo feedback (anonymized if needed)",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Even without a signed client, you can write about common use cases: 'How a 15-Person Dev Team Could Save 40 Hours/Month With AI QA.' Base it on real conversations and demo feedback. This social proof helps convert other prospects."
        },
        {
          "id": "d63-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — track demo outcomes and next steps",
          "priority": "high",
          "duration": "15min",
          "notes": "Update HubSpot with demo results. Set follow-up reminders. Note objections to address."
        }
      ]
    },
    {
      "day": 64,
      "date": "2026-10-07",
      "dayOfWeek": "Wednesday",
      "phase": 3,
      "weekTheme": "Sales Sprint Begins",
      "tasks": [
        {
          "id": "d64-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — focus on urgency and deadline",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Emphasize the October 31 founding customer deadline in every email. 'Only 3 founding customer spots, and we're already in conversations with several teams. Want to make sure [Company] has a chance before spots fill up.' Real but ethical urgency."
        },
        {
          "id": "d64-sales-2",
          "bucket": "sales",
          "task": "Follow up on yesterday's demo — address any objections or questions",
          "priority": "high",
          "duration": "30min",
          "notes": "Check if they replied to your follow-up. If not, send a value-add: 'I thought you might find this interesting — [relevant blog post/stat]. Also happy to answer any questions about the technical integration.' Stay helpful, not pushy."
        },
        {
          "id": "d64-sales-3",
          "bucket": "sales",
          "task": "Demo call #2 this week (if booked) — deliver and close",
          "priority": "high",
          "duration": "1hr",
          "notes": "Second demo of the week. Each demo makes you better. Refine your pitch based on the first demo's Q&A. Ask for the sale at the end. If they're interested, suggest specific next steps: 'We could have you set up by next week. Want me to send over the agreement?'"
        },
        {
          "id": "d64-product-1",
          "bucket": "product",
          "task": "Quick-turn any product feedback from demo calls with co-founder",
          "priority": "high",
          "duration": "45min",
          "notes": "If a prospect said 'I wish it could do X' and X is doable — build it this week. Speed of iteration shows prospects you're responsive. Even small improvements demonstrate that you listen and ship fast."
        },
        {
          "id": "d64-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review and prepare weekend follow-up schedule",
          "priority": "high",
          "duration": "15min",
          "notes": "Update all deals. Plan which prospects get a touch over the weekend (yes, you can follow up on weekends — many founders check email Saturday morning)."
        }
      ]
    },
    {
      "day": 65,
      "date": "2026-10-08",
      "dayOfWeek": "Thursday",
      "phase": 3,
      "weekTheme": "Sales Sprint Begins",
      "tasks": [
        {
          "id": "d65-sales-1",
          "bucket": "sales",
          "task": "Send 15 outreach emails and follow up on all demo prospects",
          "priority": "high",
          "duration": "2hr",
          "notes": "Slightly lighter volume on Friday, heavier on follow-ups. Every demo prospect from this week gets a Friday afternoon touch: 'Before the weekend, just wanted to check in — any questions from our chat? Happy to jump on a quick call.'"
        },
        {
          "id": "d65-sales-2",
          "bucket": "sales",
          "task": "Ask every warm prospect for a referral — 'Who else would benefit from this?'",
          "priority": "high",
          "duration": "30min",
          "notes": "Even prospects who said 'not right now' can give referrals. Ask: 'Totally understand the timing isn't right. Do you know any other engineering leads who might be looking for AI QA solutions? I'd appreciate the intro.' Referrals have the highest close rate of any channel."
        },
        {
          "id": "d65-web-1",
          "bucket": "web",
          "task": "Publish a blog post addressing the #1 objection from demo calls",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Whatever objection you heard most this week — write a blog post about it. 'Is AI QA Testing as Reliable as Manual Testing?', 'How QAI Agent Keeps Your Code Secure', etc. You can then share this post with prospects who have that objection."
        },
        {
          "id": "d65-ops-1",
          "bucket": "ops",
          "task": "Weekly review — Week 9 results, demo outcomes, pipeline assessment",
          "priority": "high",
          "duration": "30min",
          "notes": "This week's numbers: emails sent, demos completed, proposals sent, founding customer interest level. Are you on track? What needs to change for next week? This is the most important weekly review of the whole 90 days."
        },
        {
          "id": "d65-ops-2",
          "bucket": "ops",
          "task": "Daily pipeline review — end-of-week status update to co-founder",
          "priority": "high",
          "duration": "15min",
          "notes": "Share a quick update with your co-founder: this week's results, top prospect status, product requests, next week's plan. Keep aligned."
        }
      ]
    },
    {
      "day": 66,
      "date": "2026-10-09",
      "dayOfWeek": "Friday",
      "phase": 3,
      "weekTheme": "Sales Sprint Begins",
      "tasks": [
        {
          "id": "d66-sales-1",
          "bucket": "sales",
          "task": "Send Saturday morning follow-ups to top 5 prospects — personal and genuine",
          "priority": "high",
          "duration": "30min",
          "notes": "Saturday emails have surprisingly high open rates because inboxes are less crowded. Send a casual, personal note to your top 5: 'Hey [Name], was thinking about our conversation and had another idea on how QAI Agent could help with [specific issue they mentioned]. Happy to discuss next week.'"
        },
        {
          "id": "d66-ops-1",
          "bucket": "ops",
          "task": "Review and refine your demo script based on this week's experience",
          "priority": "medium",
          "duration": "45min",
          "notes": "What worked well in this week's demos? What questions stumped you? What part of the demo got the most excitement? Refine the script. Practice the improved version out loud."
        },
        {
          "id": "d66-product-1",
          "bucket": "product",
          "task": "Test any product updates shipped this week — ensure stability for next week's demos",
          "priority": "medium",
          "duration": "30min",
          "notes": "Run through the demo flow. Everything must work perfectly for next week's demo blitz."
        }
      ]
    },
    {
      "day": 67,
      "date": "2026-10-10",
      "dayOfWeek": "Saturday",
      "phase": 3,
      "weekTheme": "Sales Sprint Begins",
      "tasks": []
    },
    {
      "day": 68,
      "date": "2026-10-11",
      "dayOfWeek": "Sunday",
      "phase": 3,
      "weekTheme": "Demo Blitz",
      "tasks": []
    },
    {
      "day": 69,
      "date": "2026-10-12",
      "dayOfWeek": "Monday",
      "phase": 3,
      "weekTheme": "Demo Blitz",
      "tasks": [
        {
          "id": "d69-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — personalized with demo video",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Include the 2-minute demo video link in emails. 'I recorded a quick walkthrough — watch it here [link]. If it resonates, I'd love to show you the full thing live.' Videos dramatically increase engagement."
        },
        {
          "id": "d69-sales-2",
          "bucket": "sales",
          "task": "Demo call — deliver, ask for the sale, propose founding customer deal",
          "priority": "high",
          "duration": "1hr",
          "notes": "Same-day follow-up within 2 hours. Include: personalized recap, founding customer offer details, specific next step proposal, one-pager attachment. Ask: 'What would need to be true for you to move forward this month?'"
        },
        {
          "id": "d69-sales-3",
          "bucket": "sales",
          "task": "Follow up on all previous demo prospects — what's holding them back?",
          "priority": "high",
          "duration": "45min",
          "notes": "For each prospect who's done a demo: ask directly, 'What's your timeline for making a decision?' and 'Is there anything I can do to help move this forward?' Be direct — dancing around the ask wastes everyone's time."
        },
        {
          "id": "d69-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — track demo outcomes, update forecasts",
          "priority": "high",
          "duration": "15min",
          "notes": "How many demos done? How many more booked? What's the objection pattern? Update your pipeline forecast: who's likely to close, who needs more work, who's probably lost."
        },
        {
          "id": "d69-web-1",
          "bucket": "web",
          "task": "Publish a targeted blog post addressing a specific prospect's pain point",
          "priority": "medium",
          "duration": "1hr",
          "notes": "If multiple prospects have the same concern, write a blog post about it. Then you can share it in follow-ups: 'I wrote this post that addresses exactly what we discussed — [link].' Custom content shows commitment and expertise."
        }
      ]
    },
    {
      "day": 70,
      "date": "2026-10-13",
      "dayOfWeek": "Tuesday",
      "phase": 3,
      "weekTheme": "Demo Blitz",
      "tasks": [
        {
          "id": "d70-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — maximize last-minute demo bookings",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Mid-week push. Target prospects who opened but didn't reply to earlier emails. New subject line: 'Quick question about [Company]'s QA process' — curiosity-based subjects get opens."
        },
        {
          "id": "d70-sales-2",
          "bucket": "sales",
          "task": "Demo call — deliver personalized demo and present proposal",
          "priority": "high",
          "duration": "1hr",
          "notes": "If possible, present a written proposal at the end of the demo. 'I've prepared a simple proposal based on what we discussed — can I walk you through it now?' Moving from demo to proposal in one meeting dramatically shortens the sales cycle."
        },
        {
          "id": "d70-sales-3",
          "bucket": "sales",
          "task": "Send personalized proposals within 24 hours of all completed demos",
          "priority": "high",
          "duration": "1hr",
          "notes": "For every demo completed this week: send a formal proposal. Include: recap of their needs, proposed solution (tier + customization), founding customer pricing, implementation timeline, next steps (contract review, signature, onboarding). Use a Google Doc or PandaDoc for professional formatting."
        },
        {
          "id": "d70-sales-4",
          "bucket": "sales",
          "task": "Ask every demo prospect for referrals — even if they're not ready to buy",
          "priority": "medium",
          "duration": "20min",
          "notes": "After every demo, ask: 'Regardless of your timeline, do you know any other engineering leaders who might benefit from QAI Agent? I'd really appreciate an intro.' Even prospects who don't buy can send you your next customer."
        },
        {
          "id": "d70-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — mid-week Demo Blitz assessment",
          "priority": "high",
          "duration": "15min",
          "notes": "How many demos completed so far this week? How many proposals out? What's the main blocker to closing? Adjust the rest of the week's approach based on results."
        }
      ]
    },
    {
      "day": 71,
      "date": "2026-10-14",
      "dayOfWeek": "Wednesday",
      "phase": 3,
      "weekTheme": "Demo Blitz",
      "tasks": [
        {
          "id": "d71-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — final push for this week's demos",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Focus on follow-ups and last-chance bookings for Friday. 'I have one slot open tomorrow at 11am — worth 20 minutes to see how AI can eliminate your QA bottleneck?' Time-bounded offers create urgency."
        },
        {
          "id": "d71-sales-2",
          "bucket": "sales",
          "task": "Demo call (if booked) — close or establish clear next steps",
          "priority": "high",
          "duration": "1hr",
          "notes": "By demo 3+ this week, you should be getting smoother. Key: always leave with a clear next step. Never end a demo with 'Let me know!' Instead: 'I'll send the proposal tonight. Can we schedule a 15-minute follow-up for Tuesday to discuss?'"
        },
        {
          "id": "d71-sales-3",
          "bucket": "sales",
          "task": "Follow up on all proposals sent — check in on decision timeline",
          "priority": "high",
          "duration": "30min",
          "notes": "For every proposal out: 'Hi [Name], wanted to check in on the proposal I sent. Have you had a chance to review? I'm happy to jump on a quick call to answer any questions. Our founding customer spots are filling up — would hate for [Company] to miss out.'"
        },
        {
          "id": "d71-product-1",
          "bucket": "product",
          "task": "Address any product objections from demos — work with co-founder on quick fixes",
          "priority": "high",
          "duration": "1hr",
          "notes": "Review all demo notes: what did prospects ask for? What concerned them? Which requests can be addressed quickly? Ship improvements that remove buying objections."
        },
        {
          "id": "d71-ops-1",
          "bucket": "ops",
          "task": "Review win/loss on demos — what's working, what's not, iterate the pitch",
          "priority": "high",
          "duration": "30min",
          "notes": "Analyze all demos: Which prospects moved forward? Which didn't? Why? Common patterns? Update your demo script and pitch deck based on these insights. The pitch should get better every week."
        }
      ]
    },
    {
      "day": 72,
      "date": "2026-10-15",
      "dayOfWeek": "Thursday",
      "phase": 3,
      "weekTheme": "Demo Blitz",
      "tasks": [
        {
          "id": "d72-sales-1",
          "bucket": "sales",
          "task": "Send 15 outreach emails — nurture all warm prospects heading into weekend",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Friday afternoon is nurture time. Send a helpful article, congratulate a prospect on something (funding, product launch, etc.), or share a relevant industry insight. Keep the relationship warm without being salesy."
        },
        {
          "id": "d72-sales-2",
          "bucket": "sales",
          "task": "Final demo of the week (if booked) — deliver and propose",
          "priority": "high",
          "duration": "1hr",
          "notes": "Close out Demo Blitz week strong. How many demos this week? How many proposals? Even if you haven't closed yet, multiple demos and proposals mean the pipeline is healthy."
        },
        {
          "id": "d72-sales-3",
          "bucket": "sales",
          "task": "End-of-week pipeline review — how close are you to closing?",
          "priority": "high",
          "duration": "30min",
          "notes": "Full pipeline review: How many proposals are out? Expected close dates? What objections remain? Who's gone silent (re-engage immediately)? Share update with co-founder."
        },
        {
          "id": "d72-ops-1",
          "bucket": "ops",
          "task": "Weekly review — Demo Blitz results, refine Week 11 plan",
          "priority": "high",
          "duration": "30min",
          "notes": "Metrics: demos completed, proposals sent, positive signals received. Is the timeline to close a deal by October 31 realistic? What needs to happen next week to make it real? Next week is Negotiation & Close — be ready."
        },
        {
          "id": "d72-web-1",
          "bucket": "web",
          "task": "Update website with any new social proof or testimonial snippets from demos",
          "priority": "medium",
          "duration": "30min",
          "notes": "If any demo prospect said something positive ('This is exactly what we need', 'I've been looking for something like this'), ask if you can quote them (anonymized if needed). Add to your website: 'What developers are saying about QAI Agent.'"
        }
      ]
    },
    {
      "day": 73,
      "date": "2026-10-16",
      "dayOfWeek": "Friday",
      "phase": 3,
      "weekTheme": "Demo Blitz",
      "tasks": [
        {
          "id": "d73-sales-1",
          "bucket": "sales",
          "task": "Send personalized Saturday check-ins to top 3 prospects with proposals out",
          "priority": "high",
          "duration": "30min",
          "notes": "Short, genuine messages: 'Hi [Name], just thinking about our conversation. Any questions I can answer before next week? Want to make sure you have everything you need to make a decision.' Saturday messages stand out."
        },
        {
          "id": "d73-ops-1",
          "bucket": "ops",
          "task": "Prepare negotiation strategies for each active prospect",
          "priority": "high",
          "duration": "1hr",
          "notes": "For each prospect with a proposal: What's your walk-away price? What concessions can you offer (longer trial, extra month free, payment terms)? What concessions do you need (case study participation, annual commitment)? Know your BATNA (Best Alternative to a Negotiated Agreement) — it's okay to walk away from a bad deal."
        },
        {
          "id": "d73-product-1",
          "bucket": "product",
          "task": "Prepare for client onboarding — create a day-by-day onboarding schedule",
          "priority": "medium",
          "duration": "30min",
          "notes": "Day 1: Welcome email + account setup. Day 2: GitHub integration + first test run. Day 3: Team walkthrough + training. Day 7: Check-in call + gather feedback. Having this ready shows prospects you're professional and prepared for their success."
        }
      ]
    },
    {
      "day": 74,
      "date": "2026-10-17",
      "dayOfWeek": "Saturday",
      "phase": 3,
      "weekTheme": "Demo Blitz",
      "tasks": []
    },
    {
      "day": 75,
      "date": "2026-10-18",
      "dayOfWeek": "Sunday",
      "phase": 3,
      "weekTheme": "Negotiation & Close",
      "tasks": []
    },
    {
      "day": 76,
      "date": "2026-10-19",
      "dayOfWeek": "Monday",
      "phase": 3,
      "weekTheme": "Negotiation & Close",
      "tasks": [
        {
          "id": "d76-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — including re-engagement of stale leads",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Go back to prospects from Phase 2 who went quiet. 'Hi [Name], we spoke back in September about QAI Agent. A lot has improved since then — would you be open to a fresh look? We're also offering founding customer pricing through end of October.' Old leads can convert with the right timing."
        },
        {
          "id": "d76-sales-2",
          "bucket": "sales",
          "task": "Negotiate terms with any prospect in active discussion",
          "priority": "high",
          "duration": "1hr",
          "notes": "Key negotiation principles: 1) Know your floor (lowest acceptable price), 2) Start high and concede slowly, 3) Trade concessions (give something, get something), 4) Time is your friend if they're interested (scarcity), 5) Always be willing to walk away. Be confident — your product has real value."
        },
        {
          "id": "d76-sales-3",
          "bucket": "sales",
          "task": "LinkedIn — share a client success story (hypothetical or anonymized) to build FOMO",
          "priority": "medium",
          "duration": "20min",
          "notes": "Post: 'We just showed QAI Agent to a dev team and it found 12 bugs in their first PR review that would have shipped to production. 12 bugs. In one PR. Founding customer spots closing soon.' (Adjust based on real demo results.)"
        },
        {
          "id": "d76-product-1a",
          "bucket": "product",
          "task": "Write the client welcome email template — first impression after signing",
          "priority": "high",
          "duration": "20min",
          "notes": "Include: 1) Thank them for choosing Sprits AI, 2) Introduce yourself and your co-founder, 3) Outline next steps (GitHub App install, first test run, feedback call), 4) Share the onboarding timeline, 5) Provide direct contact info (email + Slack if applicable). Tone: professional but warm — they're your first client!"
        },
        {
          "id": "d76-product-1b",
          "bucket": "product",
          "task": "Create the client setup guide — step-by-step GitHub App installation and first run",
          "priority": "high",
          "duration": "30min",
          "notes": "Create a Google Doc or Notion page with screenshots: 1) Install the Sprits AI GitHub App, 2) Authorize for their org, 3) Select repos, 4) Create a test PR, 5) Comment /devbud, 6) Review the QA report. Include troubleshooting for common issues. Have your developer review for accuracy."
        },
        {
          "id": "d76-product-1c",
          "bucket": "product",
          "task": "Draft the kickoff call agenda — what to cover in the first client meeting",
          "priority": "medium",
          "duration": "15min",
          "notes": "Agenda: 1) Introductions (5min), 2) Walk through setup together (10min), 3) Run first test together (10min), 4) Review results and explain the report (5min), 5) Set expectations — what they'll see in week 1 (5min), 6) Q&A (10min). Schedule for 45 minutes."
        },
        {
          "id": "d76-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — push for signatures this week",
          "priority": "high",
          "duration": "15min",
          "notes": "Update deal statuses. Which deals could close this week? What's blocking each one? Remove every possible friction point."
        }
      ]
    },
    {
      "day": 77,
      "date": "2026-10-20",
      "dayOfWeek": "Tuesday",
      "phase": 3,
      "weekTheme": "Negotiation & Close",
      "tasks": [
        {
          "id": "d77-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — 'last chance' messaging to recent prospects",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Two weeks left. Every email carries urgency. 'I wanted to reach out one more time — we have 2 founding customer spots remaining. [Company] would be a perfect fit. Can we schedule a quick 15-minute call this week?'"
        },
        {
          "id": "d77-sales-2",
          "bucket": "sales",
          "task": "Handle objections on active deals — prepare written responses to every concern",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go through each prospect's concerns. Write a clear, thoughtful response for each objection. Common objections: 'We need to talk to our team' — offer to present to the team. 'Budget isn't approved' — offer a month-to-month start. 'We need to evaluate alternatives' — offer a free trial. Address every concern proactively."
        },
        {
          "id": "d77-sales-3",
          "bucket": "sales",
          "task": "If no proposal is close to closing, book 2 emergency demos for this week",
          "priority": "high",
          "duration": "1hr",
          "notes": "If your pipeline isn't converting, generate new opportunities fast. Reach out to: LinkedIn connections who engaged with your posts, past referrals you haven't contacted, companies on your list you haven't reached, and dev community connections. Offer immediate demo slots."
        },
        {
          "id": "d77-legal-1",
          "bucket": "legal",
          "task": "Prepare contract for signature — set up DocuSign or PandaDoc",
          "priority": "high",
          "duration": "30min",
          "notes": "Have the contract ready to send the moment a prospect says yes. Set up DocuSign (docusign.com, free trial) or PandaDoc (pandadoc.com, free tier). Upload your SaaS agreement template with signature fields. Test it by sending to yourself. Being ready = closing faster."
        },
        {
          "id": "d77-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — where does each deal stand right now?",
          "priority": "high",
          "duration": "15min",
          "notes": "Brutally honest assessment: which deals are real? Which are dead? Focus all energy on real deals. Don't let hope cloud judgment."
        }
      ]
    },
    {
      "day": 78,
      "date": "2026-10-21",
      "dayOfWeek": "Wednesday",
      "phase": 3,
      "weekTheme": "Negotiation & Close",
      "tasks": [
        {
          "id": "d78-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — emphasize founding customer deadline approaching",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "12 days left. The urgency is real. Every email should mention: limited founding customer spots, October 31 deadline, specific benefits of joining now vs. later. Urgency sells when the offer is genuinely time-limited."
        },
        {
          "id": "d78-sales-2",
          "bucket": "sales",
          "task": "Push for a verbal 'yes' from your top prospect — ask directly",
          "priority": "high",
          "duration": "30min",
          "notes": "Call or message your most promising prospect: 'Hi [Name], I want to be direct — I think QAI Agent is a great fit for [Company], and our founding customer pricing is the best deal we'll ever offer. Are you ready to move forward? If there's one thing holding you back, tell me and I'll address it right now.'"
        },
        {
          "id": "d78-sales-3",
          "bucket": "sales",
          "task": "Demo for any newly booked prospects — close the same day if possible",
          "priority": "high",
          "duration": "1hr",
          "notes": "If you've booked new demos this week, try to move from demo to proposal to signature as fast as possible. Some prospects who are ready can sign the same day. Don't assume they need time — ask: 'Would you like to get started now? We can have you set up by tomorrow.'"
        },
        {
          "id": "d78-product-1",
          "bucket": "product",
          "task": "Ensure product is 100% ready for client onboarding — final stability check",
          "priority": "high",
          "duration": "30min",
          "notes": "Last check before potential client onboarding. Everything must be bulletproof. Coordinate with co-founder: no risky changes until first client is stable."
        },
        {
          "id": "d78-ops-1",
          "bucket": "ops",
          "task": "Prepare the complete onboarding process — every step documented",
          "priority": "high",
          "duration": "30min",
          "notes": "When a client signs: 1) Send welcome email (within 1 hour), 2) Create their account, 3) Schedule onboarding call for Day 2, 4) Send setup guide, 5) First test run on Day 3, 6) Check-in call on Day 7. Have every template and document ready."
        }
      ]
    },
    {
      "day": 79,
      "date": "2026-10-22",
      "dayOfWeek": "Thursday",
      "phase": 3,
      "weekTheme": "Negotiation & Close",
      "tasks": [
        {
          "id": "d79-sales-1",
          "bucket": "sales",
          "task": "Send 15 outreach emails — end-of-week push on all fronts",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Keep pushing. 11 days left. Every day counts. Focus on: follow-ups to proposals, new outreach to any remaining untouched prospects, re-engagement emails to anyone who went quiet."
        },
        {
          "id": "d79-sales-2",
          "bucket": "sales",
          "task": "Offer a concession or pilot to move stuck deals forward",
          "priority": "high",
          "duration": "45min",
          "notes": "For stuck prospects: offer a 2-week free pilot ('Try it on one repo, no commitment'), or a money-back guarantee ('If you're not satisfied in 30 days, we'll refund 100%'), or monthly billing with no annual commitment. Remove risk to remove the barrier to saying yes."
        },
        {
          "id": "d79-sales-3",
          "bucket": "sales",
          "task": "Friday check-in with all prospects — maintain momentum into the weekend",
          "priority": "high",
          "duration": "30min",
          "notes": "Touch every active prospect: 'Heading into the weekend — just wanted to check if you've had a chance to review the proposal / discuss with your team / make a decision. Happy to jump on a quick call Monday morning to finalize.' Keep the urgency alive."
        },
        {
          "id": "d79-ops-1",
          "bucket": "ops",
          "task": "Weekly review — Negotiation & Close week results, 10-day countdown plan",
          "priority": "high",
          "duration": "30min",
          "notes": "10 days left. How many deals are active? What's the realistic probability of closing each? What can you do in the final 10 days to maximize your chances? Share update with co-founder."
        },
        {
          "id": "d79-legal-1",
          "bucket": "legal",
          "task": "Have contract and invoice ready to send within minutes of a verbal yes",
          "priority": "high",
          "duration": "15min",
          "notes": "Double-check: DocuSign/PandaDoc ready with contract? Invoice template ready in Wave/QuickBooks? Payment processing set up (Stripe is standard for SaaS — stripe.com)? When someone says yes, you want to get the contract signed within 24 hours before they change their mind."
        }
      ]
    },
    {
      "day": 80,
      "date": "2026-10-23",
      "dayOfWeek": "Friday",
      "phase": 3,
      "weekTheme": "Negotiation & Close",
      "tasks": [
        {
          "id": "d80-sales-1",
          "bucket": "sales",
          "task": "Send Saturday morning follow-ups to all active deal prospects",
          "priority": "high",
          "duration": "30min",
          "notes": "Short, personal Saturday messages to prospects with proposals: 'Hi [Name], hope you're having a good weekend. Just a quick note — I'm excited about the possibility of working together. Let me know if any questions came up. Enjoy the rest of your weekend.'"
        },
        {
          "id": "d80-ops-1",
          "bucket": "ops",
          "task": "Prepare a 'last 10 days' game plan — daily action items for closing",
          "priority": "high",
          "duration": "45min",
          "notes": "Write out a plan for each of the final 10 days: who to contact, what to send, what concessions to offer, when to escalate, how to handle silence. Have a plan for every scenario: deal moves fast, deal stalls, deal dies, new opportunity appears."
        },
        {
          "id": "d80-product-1",
          "bucket": "product",
          "task": "Set up client success workflow — what happens after they sign?",
          "priority": "medium",
          "duration": "30min",
          "notes": "Document: Day 1 welcome, Day 2 setup, Day 3-5 onboarding, Day 7 check-in, Day 14 review, Day 30 success review. Set up automated reminders for each step. First impressions matter — a smooth onboarding sets the tone for the relationship."
        }
      ]
    },
    {
      "day": 81,
      "date": "2026-10-24",
      "dayOfWeek": "Saturday",
      "phase": 3,
      "weekTheme": "Negotiation & Close",
      "tasks": []
    },
    {
      "day": 82,
      "date": "2026-10-25",
      "dayOfWeek": "Sunday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": []
    },
    {
      "day": 83,
      "date": "2026-10-26",
      "dayOfWeek": "Monday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": [
        {
          "id": "d83-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — break-up emails to non-responders, urgency to warm leads",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "For non-responders, send a 'break-up email': 'I've reached out a few times and haven't heard back — I'll take the hint! If QA testing ever becomes a priority for [Company], I'm here. Wishing you the best.' These often get responses because people feel the finality. For warm leads: urgency."
        },
        {
          "id": "d83-sales-2",
          "bucket": "sales",
          "task": "Negotiate final terms with any prospect ready to sign",
          "priority": "high",
          "duration": "1hr",
          "notes": "If a prospect is ready: be flexible on terms that don't matter (billing dates, contract start date), firm on terms that do (pricing, payment timeline). Common last-minute request: 'Can we do a month-to-month instead of annual?' Yes — a monthly client is better than no client."
        },
        {
          "id": "d83-sales-3",
          "bucket": "sales",
          "task": "Re-engage every single stale lead from the entire 90 days",
          "priority": "high",
          "duration": "1hr",
          "notes": "Go through your entire HubSpot database. Anyone who ever responded positively but didn't convert: send a final email. 'We're closing out our founding customer program on October 31. I know the timing wasn't right before — is anything different now? Just 20 minutes for a fresh look.'"
        },
        {
          "id": "d83-product-1",
          "bucket": "product",
          "task": "Stand by for rapid product changes if needed to close a deal",
          "priority": "high",
          "duration": "ongoing",
          "notes": "If a prospect says 'I'll sign if you can do X' and X is reasonable — build it. Coordinate with co-founder. In the final week, the product should serve the sale. Some of the best features come from client requests."
        },
        {
          "id": "d83-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — evening check-in with co-founder on deal status",
          "priority": "high",
          "duration": "15min",
          "notes": "Keep co-founder updated daily. They need to know what's happening so they can prioritize product work accordingly."
        }
      ]
    },
    {
      "day": 84,
      "date": "2026-10-27",
      "dayOfWeek": "Tuesday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": [
        {
          "id": "d84-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — every possible angle to close deals",
          "priority": "high",
          "duration": "2hr30min",
          "notes": "Mix it up: some emails with ROI calculations, some with demo video, some with testimonial quotes, some with a direct 'here's the contract, ready when you are.' Cover every persuasion angle."
        },
        {
          "id": "d84-sales-2",
          "bucket": "sales",
          "task": "Offer a pilot program to any prospect who's interested but hesitant",
          "priority": "high",
          "duration": "45min",
          "notes": "Pilot offer: 'Try QAI Agent on one repo for 2 weeks, completely free. If you love it, we'll convert to the founding customer plan. If not, no hard feelings.' Removes all risk. Some prospects need to try before they buy — let them."
        },
        {
          "id": "d84-sales-3",
          "bucket": "sales",
          "task": "Send a 'last chance' email to all LinkedIn connections who showed interest",
          "priority": "medium",
          "duration": "30min",
          "notes": "Final LinkedIn DM push: 'Hey [Name], just wanted to let you know — we're closing our founding customer program on October 31. If you've been considering it, now's the time. Happy to do a quick 15-min demo anytime this week.'"
        },
        {
          "id": "d84-legal-1",
          "bucket": "legal",
          "task": "Execute contract immediately if any prospect signs — send invoice same day",
          "priority": "high",
          "duration": "30min",
          "notes": "Be ready. If someone signs: 1) Send DocuSign, 2) Counter-sign within minutes, 3) Send invoice, 4) Send welcome email, 5) Schedule onboarding call. Speed shows professionalism and excitement."
        },
        {
          "id": "d84-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — 6 days remaining, maximize every hour",
          "priority": "high",
          "duration": "15min",
          "notes": "What's the single most impactful thing you can do today to close a deal? Focus all energy there."
        }
      ]
    },
    {
      "day": 85,
      "date": "2026-10-28",
      "dayOfWeek": "Wednesday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": [
        {
          "id": "d85-sales-1",
          "bucket": "sales",
          "task": "Send 20 outreach emails — countdown urgency in every message",
          "priority": "high",
          "duration": "2hr",
          "notes": "5 days left. 'Founding customer pricing ends Monday. Just 5 days left to lock in 50% off for your first year of QAI Agent.' Real deadlines create real decisions."
        },
        {
          "id": "d85-sales-2",
          "bucket": "sales",
          "task": "Direct outreach to any decision-maker who hasn't responded — try new channels",
          "priority": "high",
          "duration": "1hr",
          "notes": "If email and LinkedIn haven't worked, try: Twitter DM, phone call, reaching out to a different person at the company (maybe the CTO if you've been talking to a VP, or vice versa), or asking for a warm intro from a mutual connection."
        },
        {
          "id": "d85-sales-3",
          "bucket": "sales",
          "task": "If a deal is close, offer to do a live setup on the call — reduce friction to zero",
          "priority": "high",
          "duration": "30min",
          "notes": "For the closest prospect: 'I can set everything up for you right now on a call — it takes 10 minutes. By the end of the call, your team will have AI QA on their next PR. Want to do it today?' Make saying yes the easiest possible thing."
        },
        {
          "id": "d85-product-1",
          "bucket": "product",
          "task": "If a pilot is running, ensure it goes flawlessly — monitor closely",
          "priority": "high",
          "duration": "1hr",
          "notes": "If any prospect is on a pilot: watch their repos, make sure tests run smoothly, proactively send them results. 'Your first QAI Agent test just completed — found 3 bugs that would have shipped. Here's the report.' Proactive success management converts pilots to paid."
        },
        {
          "id": "d85-ops-1",
          "bucket": "ops",
          "task": "Daily pipeline review — what's the most likely deal to close and what does it need?",
          "priority": "high",
          "duration": "15min",
          "notes": "Laser focus on the most closable deal. What's the one thing standing between you and a signature? Address it today."
        }
      ]
    },
    {
      "day": 86,
      "date": "2026-10-29",
      "dayOfWeek": "Thursday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": [
        {
          "id": "d86-sales-1",
          "bucket": "sales",
          "task": "Send 15 outreach emails — final Friday push before deadline week",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "'Heading into the final weekend before our founding customer deadline. If you're considering QAI Agent, let's schedule a quick Monday morning call to finalize. I don't want you to miss this.' Create weekend momentum."
        },
        {
          "id": "d86-sales-2",
          "bucket": "sales",
          "task": "Call/DM your top 3 prospects — genuine, personal, direct ask for the close",
          "priority": "high",
          "duration": "1hr",
          "notes": "Personal calls to your top 3: 'Hi [Name], I'm reaching out because we have 4 days left on our founding customer pricing. I believe in the fit and I'd hate for [Company] to miss this. What would it take to make this happen by next Tuesday?'"
        },
        {
          "id": "d86-sales-3",
          "bucket": "sales",
          "task": "Prepare 'final offer' for each active prospect — best terms you can give",
          "priority": "high",
          "duration": "30min",
          "notes": "For each prospect, what's the absolute best offer? Maybe: 60% off instead of 50%, 3 months free before paid starts, or a guaranteed month-to-month with no commitment. Know your floor and be prepared to go there if it closes the deal."
        },
        {
          "id": "d86-legal-1",
          "bucket": "legal",
          "task": "Send contracts for any deals ready to sign — don't wait for Monday",
          "priority": "high",
          "duration": "15min",
          "notes": "If anyone is ready to sign, send the contract NOW. Don't wait. Weekends cool deals off. The faster you get a signature, the better."
        },
        {
          "id": "d86-ops-1",
          "bucket": "ops",
          "task": "Weekly review — 4 days to deadline, final strategy",
          "priority": "high",
          "duration": "30min",
          "notes": "Honest assessment with co-founder: Where do we stand? What's the plan for the final 4 days? What can the co-founder do to help close (join a call, build a feature, fix a bug)? Leave everything on the field."
        }
      ]
    },
    {
      "day": 87,
      "date": "2026-10-30",
      "dayOfWeek": "Friday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": [
        {
          "id": "d87-sales-1",
          "bucket": "sales",
          "task": "Send Saturday morning messages to all active prospects — short and personal",
          "priority": "high",
          "duration": "30min",
          "notes": "Short, personal Saturday messages: 'Hey [Name], thinking about our conversation. Just 3 days left on the founding customer offer. I'd love to make this happen for [Company]. Any questions I can answer?' Keep it human."
        },
        {
          "id": "d87-ops-1",
          "bucket": "ops",
          "task": "Start documenting the 90-day journey — learnings, metrics, and next steps",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Begin writing: what worked, what didn't, key metrics (total outreach, demos, conversion rates), biggest learnings, what you'd do differently. This becomes your foundation for the next 90-day plan. Include specific numbers — they're invaluable for planning."
        },
        {
          "id": "d87-product-1a",
          "bucket": "product",
          "task": "Send the welcome email to the new client with setup guide attached",
          "priority": "high",
          "duration": "15min",
          "notes": "Use the template you created on Day 76. Personalize it with their name, company, and the repos they mentioned during the sales process. Attach the setup guide PDF or share the link."
        },
        {
          "id": "d87-product-1b",
          "bucket": "product",
          "task": "Run the kickoff call — walk through setup live and complete first test run together",
          "priority": "high",
          "duration": "45min",
          "notes": "Follow the agenda you prepped. Key: do the setup WITH them, not for them. You want them to understand the process. Record the call (with permission) so they can reference it. Be prepared for questions about security and data access."
        },
        {
          "id": "d87-product-1c",
          "bucket": "product",
          "task": "Verify everything is working — confirm QAI Agent runs successfully on their repo",
          "priority": "high",
          "duration": "30min",
          "notes": "After the call, monitor their first few runs. Check: Did the agent trigger correctly? Were screenshots captured? Was the report posted to the PR? If anything fails, fix it immediately — first impressions are everything."
        },
        {
          "id": "d87-product-1d",
          "bucket": "product",
          "task": "Schedule the Week 1 check-in call — set up recurring touchpoint for the first month",
          "priority": "medium",
          "duration": "15min",
          "notes": "Schedule a 30-min call for one week out. Also set up a shared Slack channel or email thread for quick questions. For the first client, be extremely responsive — aim for under 1 hour response time."
        }
      ]
    },
    {
      "day": 88,
      "date": "2026-10-31",
      "dayOfWeek": "Saturday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": []
    },
    {
      "day": 89,
      "date": "2026-11-01",
      "dayOfWeek": "Sunday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": []
    },
    {
      "day": 90,
      "date": "2026-11-02",
      "dayOfWeek": "Monday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": [
        {
          "id": "d90-sales-1",
          "bucket": "sales",
          "task": "Final day — last-chance outreach to all remaining active prospects",
          "priority": "high",
          "duration": "2hr",
          "notes": "This is it. The founding customer deadline is today. Send a final email to every active prospect: 'Today is the last day for our founding customer pricing — 50% off for the first year. After today, we move to standard pricing. If you want in, let's make it happen today.'"
        },
        {
          "id": "d90-sales-2",
          "bucket": "sales",
          "task": "Close any deals that are ready — execute contracts and start onboarding",
          "priority": "high",
          "duration": "2hr",
          "notes": "If anyone signs today: execute immediately, send invoice, begin onboarding. If you've already closed a deal earlier this week: focus on making that client successful today."
        },
        {
          "id": "d90-sales-3",
          "bucket": "sales",
          "task": "Thank everyone who helped — referral partners, supportive connections, co-founder",
          "priority": "medium",
          "duration": "30min",
          "notes": "Send thank-you messages to everyone who helped you during the 90 days: people who took demos, gave referrals, provided feedback, connected you with prospects. Gratitude builds long-term relationships. These people are your network for the next phase."
        },
        {
          "id": "d90-legal-1",
          "bucket": "legal",
          "task": "Record all October expenses and close the month in bookkeeping",
          "priority": "high",
          "duration": "30min",
          "notes": "Final month-end close. Record all October expenses. Reconcile bank statement. Note total 90-day spend. If you have revenue, record it. Prepare a simple P&L for the quarter."
        },
        {
          "id": "d90-ops-1a",
          "bucket": "ops",
          "task": "Compile 90-day metrics — total outreach sent, demos done, pipeline value, clients signed",
          "priority": "high",
          "duration": "30min",
          "notes": "Pull from your CRM and outreach tracking: Total emails sent, response rate, demos booked, demos completed, proposals sent, deals closed, revenue signed, website traffic, blog views, LinkedIn followers gained. Put these in a spreadsheet."
        },
        {
          "id": "d90-ops-1b",
          "bucket": "ops",
          "task": "Prepare retrospective agenda — what worked, what didn't, surprises, key learnings",
          "priority": "high",
          "duration": "30min",
          "notes": "Structure: 1) Celebrate wins first (even small ones), 2) Review metrics honestly, 3) What worked that we should double down on?, 4) What didn't work that we should stop?, 5) What surprised us?, 6) Top 3 priorities for next 90 days."
        },
        {
          "id": "d90-ops-1c",
          "bucket": "ops",
          "task": "Hold the retrospective meeting with co-founder — 90 minutes, no distractions",
          "priority": "high",
          "duration": "1hr30min",
          "notes": "Block 90 minutes with no interruptions. Go through the agenda together. Be honest — this is about learning, not blame. Document all decisions and action items. This meeting sets the direction for Q4."
        },
        {
          "id": "d90-product-1",
          "bucket": "product",
          "task": "If client onboarded — check in and ensure smooth experience",
          "priority": "high",
          "duration": "30min",
          "notes": "If you have a client: call them. Ask how it's going. Get feedback. Fix anything broken. Start collecting a testimonial: 'What was your experience like so far? Would you mind sharing a few sentences we could use on our website?'"
        }
      ]
    },
    {
      "day": 91,
      "date": "2026-11-03",
      "dayOfWeek": "Tuesday",
      "phase": 3,
      "weekTheme": "Close & Onboard",
      "tasks": [
        {
          "id": "d91-ops-1a",
          "bucket": "ops",
          "task": "Write the 90-Day Retrospective document — key metrics and outcomes",
          "priority": "high",
          "duration": "45min",
          "notes": "Create a formal document with: Company overview (where you started), key metrics (all the numbers from yesterday), milestones achieved (legal, product, sales), and client status. This becomes a reference for future planning and investor conversations."
        },
        {
          "id": "d91-ops-1b",
          "bucket": "ops",
          "task": "Document top 5 things that worked and top 5 things you'd change",
          "priority": "high",
          "duration": "30min",
          "notes": "Be specific — not \"outreach worked\" but \"personalized emails referencing GitHub activity had 3x the response rate of generic templates.\" These specifics are what make the next 90 days more effective."
        },
        {
          "id": "d91-ops-1c",
          "bucket": "ops",
          "task": "Draft the next 90-day plan priorities — carry momentum into Q4",
          "priority": "high",
          "duration": "45min",
          "notes": "Based on the retrospective: If you have a client, focus on success, case study, and replicating. If you're close, focus on closing and expanding pipeline. If pipeline is thin, reassess ICP and messaging. Write down the top 3 priorities for July-September."
        },
        {
          "id": "d91-sales-1",
          "bucket": "sales",
          "task": "Transition pipeline prospects to post-founding-customer pricing — continue all active deals",
          "priority": "high",
          "duration": "1hr",
          "notes": "The founding customer window is closed, but deals don't stop. Reach out to every active prospect: 'Our founding customer pricing ended, but I'd still love to work together. Here's our standard pricing — [link]. I can also offer [specific incentive] to get you started this month.' The pipeline you built is still valuable."
        },
        {
          "id": "d91-product-1",
          "bucket": "product",
          "task": "Plan next product iteration with co-founder based on all 90 days of feedback",
          "priority": "medium",
          "duration": "1hr",
          "notes": "Review the Voice of Customer doc. What features were requested most? What objections could product solve? What would make the product 10x more compelling? Prioritize the top 3 improvements for the next quarter."
        },
        {
          "id": "d91-brand-1",
          "bucket": "brand",
          "task": "Celebrate the milestone — share a 90-day journey post on LinkedIn",
          "priority": "medium",
          "duration": "30min",
          "notes": "Post a reflection: '90 days ago, we had an idea and a demo. Today, Sprits AI has [achievements]. Here's what I learned building a startup from scratch...' Authentic founder journey posts are incredibly engaging. Share the real story — wins and struggles. Tag your co-founder. This post plants seeds for the next phase."
        }
      ]
    }
  ],
  "decisions": [
    {
      "id": "dec-1",
      "title": "Equity Split & Vesting Documentation",
      "description": "Formalize the equity split between both co-founders. Decide on vesting schedule (standard is 4-year vest with 1-year cliff). Document in writing — this prevents disputes later.",
      "dueByDay": 5,
      "date": "2026-08-09",
      "bucket": "legal",
      "priority": "high",
      "context": "Must be documented before any revenue comes in. A handshake agreement is not enough — you need this in writing. Consider using Clerky or Stripe Atlas templates."
    },
    {
      "id": "dec-2",
      "title": "Roles & Responsibilities Agreement",
      "description": "Clearly define who owns what: Joshua = business/ops/sales, Developer = product/engineering. Document decision-making authority for each domain, and how disagreements are resolved.",
      "dueByDay": 5,
      "date": "2026-08-09",
      "bucket": "ops",
      "priority": "high",
      "context": "Unclear roles lead to conflict. Write down: who has final say on product decisions? On business decisions? What requires both partners to agree?"
    },
    {
      "id": "dec-3",
      "title": "Monthly Burn Rate & Budget Allocation",
      "description": "With $10K, decide exactly how the money gets allocated: hosting costs, tools/subscriptions, marketing spend, legal fees, and a reserve buffer. Agree on a monthly spend limit.",
      "dueByDay": 3,
      "date": "2026-08-07",
      "bucket": "legal",
      "priority": "high",
      "context": "$10K goes fast. Recommended split: $2K legal/compliance, $1K branding, $2K tools/hosting, $2K marketing, $3K reserve. Adjust based on your priorities."
    },
    {
      "id": "dec-4",
      "title": "Target Customer Size & Segment",
      "description": "Decide your initial target: small dev teams (2-10), mid-size (10-50), or larger (50+)? Each has different sales cycles, pricing expectations, and support needs. Pick ONE to start.",
      "dueByDay": 7,
      "date": "2026-08-11",
      "bucket": "sales",
      "priority": "high",
      "context": "Trying to sell to everyone means selling to no one. Small teams buy faster but pay less. Mid-size has budget but longer cycles. Recommendation: start with teams of 5-20 devs — fast decisions, real budget."
    },
    {
      "id": "dec-5",
      "title": "Brand Identity Direction",
      "description": "Review logo concepts and brand direction together. Decide on: logo, color palette, brand voice (technical vs friendly vs enterprise), and how you want to be perceived in the market.",
      "dueByDay": 12,
      "date": "2026-08-16",
      "bucket": "brand",
      "priority": "high",
      "context": "Both founders should align on brand identity since it affects everything from the website to sales emails. Look at competitors: QA Wolf is friendly/approachable, BrowserStack is enterprise/technical."
    },
    {
      "id": "dec-6",
      "title": "Pricing Model & Tiers",
      "description": "Decide on pricing structure: per-seat, per-repo, per-PR-run, or flat monthly? How many tiers (recommend 2-3)? What's included in each? What's the entry price point?",
      "dueByDay": 20,
      "date": "2026-08-24",
      "bucket": "product",
      "priority": "high",
      "context": "Research competitors: QA Wolf charges $3K+/mo for enterprise. For your market, consider starting at $99-299/mo for small teams, $499-999/mo for mid-size. You can always adjust — don't overthink, just ship something."
    },
    {
      "id": "dec-7",
      "title": "Founding Customer Discount Strategy",
      "description": "Decide the discount level for founding customers: 30%, 50%, or free pilot? How long does the discount last? How many founding customer spots? What do you expect in return (testimonial, case study, feedback)?",
      "dueByDay": 25,
      "date": "2026-08-29",
      "bucket": "sales",
      "priority": "high",
      "context": "Founding customer deals should feel like a no-brainer for the buyer. Recommendation: 50% off for 6 months, limited to first 5 customers, in exchange for a testimonial and monthly feedback call."
    },
    {
      "id": "dec-8",
      "title": "Website Messaging & Positioning",
      "description": "Review and approve the website homepage copy together. What's the main headline? What's the value proposition? How do you describe QAI Agent in one sentence? This becomes your pitch everywhere.",
      "dueByDay": 18,
      "date": "2026-08-22",
      "bucket": "web",
      "priority": "high",
      "context": "The homepage headline is the most important copy you'll write. It should answer: what is it, who is it for, and why should they care? Both founders need to be able to recite this."
    },
    {
      "id": "dec-9",
      "title": "Terms of Service & Privacy Policy Review",
      "description": "Both founders should review the drafted ToS and Privacy Policy. Decide on data handling: what data does QAI Agent access from repos? How long is it stored? These are questions prospects WILL ask.",
      "dueByDay": 22,
      "date": "2026-08-26",
      "bucket": "legal",
      "priority": "high",
      "context": "Dev teams care deeply about code security. Your ToS/Privacy Policy needs to clearly address: code access scope, data retention, SOC2 plans, and where data is processed. This will come up in every enterprise conversation."
    },
    {
      "id": "dec-10",
      "title": "Demo Flow & Talking Points",
      "description": "Run through the full demo together. Agree on: which demo pages to show, in what order, key talking points for each, how to handle common questions, and the ideal demo length (aim for 15-20 min).",
      "dueByDay": 18,
      "date": "2026-08-22",
      "bucket": "product",
      "priority": "high",
      "context": "The developer needs to understand the sales angle, and Joshua needs to deeply understand the product. Practice the demo together at least 3 times before showing it to anyone external."
    },
    {
      "id": "dec-11",
      "title": "Content Strategy Approval",
      "description": "Review the blog/content plan together. Which topics to cover? What's the publishing cadence? Should the developer write technical posts? Align on tone and topics.",
      "dueByDay": 32,
      "date": "2026-09-05",
      "bucket": "web",
      "priority": "medium",
      "context": "Technical content from the developer adds credibility. Consider a mix: Joshua writes about QA pain points and industry trends, developer writes about the technical approach and AI testing."
    },
    {
      "id": "dec-12",
      "title": "Sales Outreach Messaging Review",
      "description": "Review cold outreach email templates together. The developer can flag technical inaccuracies or suggest better positioning. Agree on what technical claims you can make.",
      "dueByDay": 35,
      "date": "2026-09-08",
      "bucket": "sales",
      "priority": "medium",
      "context": "Nothing kills credibility faster than a sales email with wrong technical claims. Have the developer review all outreach templates before they go out."
    },
    {
      "id": "dec-13",
      "title": "Free Trial vs Demo-Only Decision",
      "description": "Should prospects be able to try QAI Agent on their own, or only through a guided demo? Self-service scales but requires more product polish. Demo-only gives more control but limits reach.",
      "dueByDay": 45,
      "date": "2026-09-18",
      "bucket": "product",
      "priority": "high",
      "context": "For your first customers, demo-only is recommended — you learn more and can hand-hold. Plan self-service for future quarters once you have the onboarding flow refined."
    },
    {
      "id": "dec-14",
      "title": "Partnership Strategy",
      "description": "Discuss potential partnerships: dev tool companies (CI/CD providers, monitoring tools), QA consultancies, dev agencies. Who should you partner with? What's the value exchange?",
      "dueByDay": 48,
      "date": "2026-09-21",
      "bucket": "sales",
      "priority": "medium",
      "context": "Partnerships can accelerate reach but take time to manage. Focus on 1-2 high-value partnerships max during this phase. Dev tool integrations (GitHub Marketplace listing?) could be high leverage."
    },
    {
      "id": "dec-15",
      "title": "Mid-Plan Review & Course Correction",
      "description": "Sit down together for a 2-hour strategy session. Review: What's working? What's not? Are we targeting the right customers? Is the messaging resonating? Do we need to pivot anything?",
      "dueByDay": 50,
      "date": "2026-09-23",
      "bucket": "ops",
      "priority": "high",
      "context": "This is the most important meeting of the 90 days. Be honest about what's working and what's not. Look at the data: email open rates, demo conversions, website traffic. Adjust the Phase 3 plan based on reality."
    },
    {
      "id": "dec-16",
      "title": "Minimum Acceptable Deal Terms",
      "description": "Before entering negotiations, agree on: minimum price you'll accept, maximum discount, payment terms (monthly vs annual), SLA commitments, and what's a dealbreaker.",
      "dueByDay": 62,
      "date": "2026-10-05",
      "bucket": "sales",
      "priority": "high",
      "context": "Never negotiate without knowing your floor. If a prospect pushes below your minimum, be willing to walk away. Your time and product have value — don't give it away."
    },
    {
      "id": "dec-17",
      "title": "Client Onboarding Process",
      "description": "Design the onboarding flow together: What happens after a client signs? Who does what? How is the GitHub App installed? Who provides support? What does week 1 look like for the client?",
      "dueByDay": 70,
      "date": "2026-10-13",
      "bucket": "ops",
      "priority": "high",
      "context": "First impressions matter. The onboarding experience can make or break retention. Create a checklist: Day 1 (install + config), Day 2-3 (first test runs), Week 1 (review results), Week 2 (feedback call)."
    },
    {
      "id": "dec-18",
      "title": "Support & SLA Commitments",
      "description": "Decide what level of support you can realistically provide: response times, support hours, dedicated Slack channel? Don't overpromise — but be responsive enough to keep the client happy.",
      "dueByDay": 70,
      "date": "2026-10-13",
      "bucket": "product",
      "priority": "high",
      "context": "For your first client, be extremely responsive (same-day response). But document what you're committing to in the contract — you'll need to scale this later."
    },
    {
      "id": "dec-19",
      "title": "Contract Review Before Signing",
      "description": "Both founders review the final client contract together before sending. Ensure both are comfortable with: pricing, terms, SLA, liability, termination clauses.",
      "dueByDay": 80,
      "date": "2026-10-23",
      "bucket": "legal",
      "priority": "high",
      "context": "Your first contract sets a precedent. Make sure it protects you (liability caps, IP ownership clarity, payment terms) while being fair to the client."
    },
    {
      "id": "dec-20",
      "title": "Next 90 Days Planning",
      "description": "Before the plan ends, align on the next quarter: What worked? What didn't? Where do we double down? Do we need to raise money? Hire? Change strategy?",
      "dueByDay": 88,
      "date": "2026-10-31",
      "bucket": "ops",
      "priority": "high",
      "context": "The next 90 days should build on this one. If you have a client, focus on success and case studies. If you're close, focus on closing. If pipeline is thin, reassess your ICP and messaging."
    }
  ]
};
