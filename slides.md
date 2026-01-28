---
theme: none
title: How to Start a Product Using AI
info: |
  ## How to Start a Product Using AI
  A practical guide for developers navigating the AI revolution.
layout: center
class: text-center
drawings:
  persist: false
transition: glitch
mdc: true
duration: 35min
css: unocss
fonts:
  sans: 'JetBrains Mono, monospace'
  mono: 'JetBrains Mono, monospace'
---

<div class="relative z-10">

<h1 class="text-6xl! font-bold">How to Start a Product Using AI</h1>

<div class="mt-24 flex justify-center gap-3">
  <span class="inline-block w-3 h-3 bg-cyan-400 animate-pulse"></span>
  <span class="inline-block w-3 h-3 bg-fuchsia-400 animate-pulse" style="animation-delay: 0.2s"></span>
  <span class="inline-block w-3 h-3 bg-cyan-400 animate-pulse" style="animation-delay: 0.4s"></span>
</div>

<div class="abs-br m-2 text-base text-glitch-cyan opacity-70">
  Press Space to continue <carbon:arrow-right class="inline animate-pulse" />
</div>

</div>

<!--
Welcome everyone. Today we're going to talk about something that's on everyone's mind - how to actually start building products in this new AI-powered world.
-->

---
layout: default
class: px-16
transition: pixel
---

# The Timing Paradox

<div class="grid grid-cols-4 gap-4 mt-8">
<div v-click class="p-3 bg-gray-500/20 rounded text-center">"Don't adopt too early"</div>
<div v-click class="p-3 bg-gray-500/20 rounded text-center">"Wait for things to stabilize"</div>
<div v-click class="p-3 bg-gray-500/20 rounded text-center">"Let others be guinea pigs"</div>
<div v-click class="p-3 bg-gray-500/20 rounded text-center">"Mature tech is safer"</div>
</div>

<div v-click class="text-center mt-6 text-pink-400">This advice has served us well for decades. But...</div>

<div v-click class="flex justify-center mt-8">

```mermaid {scale: 0.7}
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#0f0f0f', 'primaryTextColor': '#fff', 'primaryBorderColor': '#00ffff', 'lineColor': '#ff00ff', 'secondaryColor': '#1a1a2e', 'tertiaryColor': '#0f0f0f'}}}%%
graph LR
    A[Tech Appears] --> B{Wait?}
    B -->|Too Early| C[Wasted effort]
    B -->|Sweet Spot| D[Maximum advantage]
    B -->|Too Late| E[Playing catch-up]

    style A fill:#1a1a2e,stroke:#00ffff,color:#fff
    style B fill:#1a1a2e,stroke:#ff00ff,color:#fff
    style C fill:#1a1a2e,stroke:#666,color:#999
    style D fill:#ff00ff,stroke:#00ffff,color:#fff,stroke-width:2px
    style E fill:#1a1a2e,stroke:#ff0044,color:#ff0044
```

</div>

<!--
Traditionally, we've been told to wait. Don't adopt too early. Let things stabilize.

And that advice has been GOOD. It saved us from betting on technologies that died.

BUT - and this is a big but - there's a catch...
-->

---
layout: center
class: text-center px-20
transition: cyber
---

<div class="text-4xl font-bold mb-8">
Quick poll:
</div>

<div class="text-3xl opacity-90 mb-12">
Do you feel we're <span class="text-glitch-cyan font-bold">still in time</span> to integrate AI,<br/>
or are we already <span class="text-glitch-magenta font-bold">playing catch-up</span>?
</div>

<!--
Quick show of hands. How many of you feel we're still in time to integrate AI into our workflows?

And how many feel we're already playing catch-up?

Interesting. Let me share my perspective on this...
-->

---
layout: default
class: px-16
transition: corrupt
---

# AI Agents Amplify Skill, Not Replace It

<div class="mt-12">
<img src="https://pbs.twimg.com/media/G6usaisa0AAH528?format=jpg&name=large" class="rounded-lg shadow-xl" alt="Graph showing senior engineers accept more agent output than juniors" />
<div class="text-xs opacity-50 mt-2">Source: Eric Zakariasson</div>
</div>


<!--
Here's data that should give you confidence. Eric Zakariasson found that senior engineers actually ACCEPT more AI output than juniors.

Why? Because seniors write better prompts - they know what they want. They break down problems into pieces an AI can handle. And they can VERIFY the output quickly because they already know what good code looks like.

Juniors? They can generate code all day, but they don't have the experience to know if it's actually correct.
-->

---
layout: center
class: text-center
transition: pixel
---

<BigStatement
  primary="Coding agents amplify existing engineering skill."
  secondary="Not replace it."
>
  <div v-click class="mt-12 text-2xl text-white opacity-70">
    Your fundamentals are your superpower.
  </div>
</BigStatement>

<!--
This is the key takeaway. AI amplifies what you already have.

If you're good - AI makes you GREAT.
If you're mediocre - AI makes you... still mediocre, just faster at being mediocre.

Your fundamentals are your superpower. Design patterns, architecture, understanding how things work under the hood - THAT's what makes you effective with AI.
-->

---
layout: center
class: text-center
transition: cyber
---

<div class="grid grid-cols-3 gap-8 text-left">

<FeatureCard title="1. Mindset" description="How to think about AI as a collaborator" color="pink" />

<FeatureCard title="2. Tools" description="The essential stack for AI-powered development" color="fuchsia" />

<FeatureCard title="3. Workflow" description="Practical patterns for shipping faster" color="purple" />

</div>

<!--
So this presentation - consider it your manual. The one Karpathy said doesn't exist.

We'll cover three things: the right mindset, the essential tools, and practical workflows.

Let's get started.
-->

---
layout: center
class: text-center
transition: glitch
---

<SectionDivider
  section="SECTION_01"
  title="Part 1: Mindset"
  subtitle="The trust spectrum and why your experience matters more than ever"
  accent-color="cyan"
/>

<!--
Let's start with mindset. Because I've talked to many of you, and I know there's resistance. And honestly? That resistance comes from a good place.
-->

---
layout: default
class: px-16
transition: vhs
---

# The Trust Spectrum

<div class="flex items-center justify-between mt-12 mb-8">
<div class="text-center">
<div class="text-4xl mb-2">✍️</div>
<div class="font-bold">100% Manual</div>
<div class="text-sm opacity-60">"I write every line"</div>
</div>

<div class="flex-1 mx-8 h-2 rounded-full relative" style="background: linear-gradient(90deg, #444, #ff00ff, #00ffff);">
<div v-click class="absolute -top-8 left-1/4 transform -translate-x-1/2 text-sm px-2 py-1 rounded border border-[#ff00ff]">Most devs here</div>

</div>

<div class="text-center">
<div class="text-4xl mb-2">🤖</div>
<div class="font-bold">100% AI</div>
<div class="text-sm opacity-60">"Zero manual code"</div>
</div>
</div>

<div v-click class="grid grid-cols-2 gap-8 mt-8">

<ContrastBox
  label="The fear:"
  text="Use IA is not ready for production. It's untrustworthy."
  variant="negative"
/>

<ContrastBox
  label="The reality:"
  text="&quot;I'm a programmer who now has a junior dev that never sleeps&quot;"
  variant="positive"
/>

</div>

<!--
Here's the trust spectrum. On one end - 100% manual code. On the other - Guillermo Rauch saying some Vercel features have ZERO manual code.

Most of us are somewhere on the left. And I get it - there's this fear that if AI writes the code, we're not real programmers.

But here's the reframe: you're still the programmer. You just have a junior dev that never sleeps, never complains, and types at 1000 words per minute.
-->

---
layout: quote
class: text-center
transition: corrupt
---

# Guillermo Rauch reviewed a PR for an important feature at Vercel.

<v-clicks>

<div class="mt-8 text-xl opacity-80">
Perfect code. Great documentation. Full test coverage.
</div>

<div class="mt-6 text-xl opacity-80">
He asked the developer: "How much was AI-assisted?"
</div>

<div class="mt-6 text-2xl text-pink-400 font-bold">
"100%"
</div>

</v-clicks>

<div class="mt-12 text-2xl font-bold text-cyan-400">
This is the future. It's happening RIGHT NOW.
</div>

<!--
Let that sink in. Guillermo Rauch. The guy who created Next.js. CEO of Vercel.

He reviewed a PR for a really important feature at Vercel. The code was perfect - great documentation, full test coverage. It was so good he asked how much was AI-assisted. The developer said 100%.

This isn't some future prediction. This is happening RIGHT NOW at top-tier tech companies.
-->

---
layout: center
class: text-center px-16
transition: cyber
---

<div class="text-4xl font-bold mb-8">
The mindset shift:
</div>

<BigStatement
  primary="From &quot;writing code&quot;<br/>to <span class='neon-cyan'>&quot;directing code&quot;</span>"
  primary-effect="neon-magenta"
  :secondary="undefined"
>
  <div v-click class="text-2xl opacity-80 mt-8">
    You're not losing control.<br/>You're gaining leverage.
  </div>
</BigStatement>

<!--
Here's the mindset shift you need to make.

You're going from WRITING code to DIRECTING code. Think of yourself as a film director - you're not holding the camera, but you're absolutely in control of the vision.

You're not losing control. You're gaining leverage.
-->

---
layout: center
class: text-center
transition: glitch
---

<BigStatement
  primary="Small city <span class='neon-red'>≠</span> small impact"
  primary-effect="neon-cyan"
>
  <div v-click class="text-3xl opacity-80 mt-8">
    The playing field just got leveled.
  </div>

  <div v-click class="mt-12 text-xl opacity-60">
    The only question is: will you claim your boost?
  </div>
</BigStatement>

<!--
Small city does NOT mean small impact anymore.

The playing field just got leveled. Seriously.

The only question now is: will you claim your boost? Or will you let it be a "skill issue" like Karpathy said?
-->

---
layout: center
class: text-center
transition: corrupt
---

<SectionDivider
  section="SECTION_02"
  title="Part 2: Tools"
  subtitle="The stack that makes AI actually useful"
  accent-color="magenta"
/>

<!--
Now let's talk tools. But first, we need to talk about a problem most of us don't even realize we have.
-->

---
layout: center
class: text-center px-16
transition: pixel
---

<div class="text-4xl font-bold mb-8">
Be honest with yourself:
</div>

<div class="text-3xl opacity-80">
How much time do you spend <span class="text-pink-400">fighting your tools</span><br/>instead of using them?
</div>

<v-click>
<div class="mt-12 text-xl opacity-60">
Context scattered across Notion, Slack, Jira, Google Docs, Figma...<br/>
Every tool is another tab. Another context switch.<br/>
Another place where knowledge goes to die.
</div>
</v-click>

<!--
Be honest. How much time do you spend fighting your tools instead of actually building?

Your context is scattered everywhere. Notion for docs, Slack for discussions, Jira for tickets, Google Docs for specs, Figma for designs...

Every tool is another tab. Another context switch. Another place where knowledge goes to die.
-->

---
layout: center
class: text-center
transition: vhs
---

<div class="text-4xl font-bold mb-8">
The insight that changed everything:
</div>

<div class="text-4xl font-bold neon-cyan mb-8">
What if AI could not just <span class="text-white">read</span><br/>your knowledge base,<br/>but actually <span class="neon-magenta">operate it</span>?
</div>

<!--
Here's the insight that changed how I work.

What if AI could not just READ your knowledge base... but actually OPERATE it?

Merge PRs. Create issues. Update documentation. All from the same context.
-->

---
layout: default
class: px-16
transition: glitch
---

# The Solution: Text-Based, Version-Controlled, AI-Native

<div class="grid grid-cols-3 gap-6 mt-8">

<FeatureCard v-click icon="📝" title="Text-Based" description="Markdown files. No proprietary formats. Works with any editor. AI can read AND write." color="pink" />

<FeatureCard v-click icon="🔄" title="Version-Controlled" description="Everything in Git. Full history. Diffs. Collaboration via PRs. Auditable." color="fuchsia" />

<FeatureCard v-click icon="🤖" title="AI-Native" description="AI can discover, read, modify, and commit. Same access you have." color="purple" />

</div>

<CalloutBox v-click color="gray" class="mt-8 text-center">

**The future of company operations looks more like a git repo than a SaaS dashboard.**

</CalloutBox>

<!--
The solution has three properties.

Text-based - markdown files, no proprietary formats. AI can read AND write.

Version-controlled - everything in Git. Full history, diffs, collaboration.

AI-native - the AI has the same access you have. It can discover, read, modify, and commit.

The future of operations looks more like a git repo than a SaaS dashboard.
-->

---
layout: default
class: px-16
transition: corrupt
---

# Why Markdown is the Secret Weapon

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

<MarkdownDoc
  filename="SF-0039.md"
  maxHeight="380px"
  :meta="{
    id: 'SF-0039',
    title: 'Setup Email Service Integration (Sendgrid/Postmark)',
    type: 'task',
    status: 'backlog',
    priority: 'P0',
    complexity: 'Medium',
    dependencies: ['SF-0001'],
    tags: ['email', 'infrastructure', 'sendgrid'],
    assignee: 'unassigned',
    created_date: '2026-01-26'
  }"
>

# 🎯 Objective
Configure email service provider for transactional emails (verification, notifications, reminders).

# 🧠 Context & Why
IR-001 specifies email integration. Client does not have existing email service (Client Decision Jan 2026). We need to set up Sendgrid or Postmark, configure SPF/DKIM/DMARC for deliverability, and create the infrastructure for all email types.

# ✅ Acceptance Criteria (Definition of Done)
- [ ] Email provider selected (Sendgrid recommended for pricing)
- [ ] API key configured in environment variables
- [ ] SPF record configured for sending domain
- [ ] DKIM configured for email signing
- [ ] DMARC policy configured
- [ ] Verified sending domain
- [ ] Test email sent successfully
- [ ] Email service wrapper created (`src/lib/email/`)
- [ ] Support for:
  - [ ] Send single email
  - [ ] Send templated email
  - [ ] Batch send
- [ ] Error handling and retry logic
- [ ] `email_logs` table integration
- [ ] Bounce/complaint webhook handler (optional for MVP)

# 🛠️ Technical Implementation Strategy
*   **Affected Areas:** `src/lib/email/`, environment config, DNS records
*   **Constraints:** 
    - Use SDK provided by email service
    - Abstract provider (easy to switch Sendgrid ↔ Postmark)
    - Store credentials in environment variables ONLY
*   **Out of Scope:** Marketing emails, newsletter

# 🔗 References & Dependencies
*   IR-001 in REQUIREMENTS.md
*   [Sendgrid API](https://docs.sendgrid.com/)
*   **Blockers:** SF-0001 (infrastructure), Client decision on domain


</MarkdownDoc>

</div>

<div class="flex flex-col justify-between h-full">

<v-clicks>

<div class="p-3 bg-pink-500/10 rounded">
<span class="text-pink-400 font-bold">✓</span> AI can parse the structure
</div>

<div class="p-3 bg-pink-500/10 rounded">
<span class="text-pink-400 font-bold">✓</span> AI can update the checkboxes
</div>

<div class="p-3 bg-pink-500/10 rounded">
<span class="text-pink-400 font-bold">✓</span> AI can link to actual code files
</div>

<div class="p-3 bg-pink-500/10 rounded">
<span class="text-pink-400 font-bold">✓</span> AI can create the GitHub issue
</div>

<div class="p-3 bg-fuchsia-500/10 rounded">
<span class="text-fuchsia-400 font-bold">✓</span> Git tracks every change
</div>

<div class="p-3 bg-purple-500/10 rounded">
<span class="text-purple-400 font-bold">✓</span> You can review via PR
</div>

</v-clicks>

</div>

</div>

<!--
Let me show you why markdown is the secret weapon.

Look at this simple feature spec. It's just markdown. But AI can parse the structure, update the checkboxes, link to actual code files, create the GitHub issue from it.

And because it's in Git, every change is tracked. You can review AI's changes via PR just like you'd review a human's code.
-->

---
layout: center
class: text-center
transition: pixel
---

<div class="text-4xl font-bold mb-8">
Markdown is not just documentation.
</div>

<div class="text-4xl font-bold neon-magenta">
It's your <span class="neon-cyan">source of truth</span><br/>that AI can actually use.
</div>

<v-click>
<div class="mt-12 text-xl opacity-60">
Your tasks. Your specs. Your decisions. Your business logic.<br/>
All in a format AI can read, understand, and act on.
</div>
</v-click>

<!--
Markdown is not just documentation.

It's your source of truth that AI can actually use.

Your tasks, your specs, your decisions, your business logic - all in a format AI can read, understand, and act on.
-->

---
layout: default
class: px-16
transition: cyber
---

# My Stack (Accessible & Affordable)

<div class="grid grid-cols-3 gap-6 mt-8">

<ToolCard v-click icon="⌨️" name="Claude Code" description="Terminal-based AI coding agent" price="$20/month (Pro)" color="pink" />

<ToolCard v-click icon="💻" name="Open Code + Copilot" description="Open source Claude Code alternative" price="$10/month" color="fuchsia" price-color="green" />

<ToolCard v-click icon="📝" name="VSCode + Copilot" description="For quick edits and autocomplete" price="$10/month" color="purple" />

</div>

<v-click>
<div class="mt-8 text-center">

<div class="text-lg opacity-70 mb-2">Total: ~$30/month for a complete AI-powered workflow</div>
<div class="text-sm opacity-50">That's less than a Netflix + Spotify subscription</div>

</div>
</v-click>

<!--
Here's my actual stack. Nothing fancy, nothing expensive.

Claude Code - $20 a month for Pro. This is my main workhorse.

Open Code - completely free, open source alternative. You bring your own API key.

VSCode with Copilot - $10 a month for quick edits and autocomplete.

Total? About $30 a month. That's less than Netflix and Spotify combined.
-->

---
layout: center
class: text-center
transition: bug
---

<SectionDivider
  section="SECTION_03"
  title="Part 3: Workflow"
  subtitle="Practical patterns for shipping faster with AI"
  accent-color="purple"
/>

---
layout: center
class: text-center
transition: glitch
---

<div class="relative">

<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <div class="absolute top-0 left-0 w-full h-1 bg-glitch-cyan animate-pulse opacity-50"></div>
  <div class="absolute bottom-0 right-0 w-full h-1 bg-glitch-magenta animate-pulse opacity-50" style="animation-delay: 0.5s"></div>
  <div class="absolute top-1/4 left-0 w-2 h-32 bg-glitch-cyan/30 animate-glitch-shift"></div>
  <div class="absolute top-1/2 right-0 w-3 h-24 bg-glitch-magenta/30 animate-glitch-shift" style="animation-delay: 0.3s"></div>
</div>

<div class="text-6xl font-bold mb-4 glitch-text" data-text="WORKFLOWS">
  <span class="text-glitch-cyan">WORK</span><span class="text-glitch-magenta">FLOWS</span>
</div>

<div class="text-3xl opacity-80 mt-8 mb-12">
  Want to go deeper?
</div>

<div class="text-4xl font-bold neon-magenta mb-6">
  Interested in a Workshop?
</div>

<div class="text-xl opacity-70 max-w-2xl mx-auto">
  If there's interest, we could do a hands-on session.<br/>
  Prompting strategies. Tool integration. Automation patterns.
</div>

<div class="mt-12 flex justify-center gap-4">
  <span class="px-4 py-2 border border-cyan-400/50 rounded text-cyan-400 text-sm">Live coding</span>
  <span class="px-4 py-2 border border-fuchsia-400/50 rounded text-fuchsia-400 text-sm">Real projects</span>
  <span class="px-4 py-2 border border-purple-400/50 rounded text-purple-400 text-sm">Q&A</span>
</div>

</div>

<!--
So workflows - this is where things get really practical. But honestly, this deserves its own dedicated session.

If there's enough interest, we could organize a hands-on workshop. Real coding, real projects, real problems.

Let me know after if that sounds interesting to you.
-->

---
layout: center
class: text-center
transition: cyber
---

<div class="mb-8">
  <div class="text-sm uppercase tracking-widest text-glitch-cyan opacity-70 mb-4">Introducing</div>
  <div class="text-7xl font-bold tracking-tight">
    <span class="">Coyomi</span> <span class="text-white/90">Labs</span>
  </div>
</div>

<div class="text-2xl opacity-80 mt-8 mb-12 max-w-2xl mx-auto">
  Building the future of AI-powered development.
</div>

<div class="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-left">

<div class="p-4 border border-cyan-400/30 rounded-lg bg-cyan-400/5">
  <div class="text-cyan-400 text-2xl mb-2">🔧</div>
  <div class="font-bold text-cyan-400">Tools</div>
  <div class="text-sm opacity-60 mt-1">Open source AI workflow tools</div>
</div>

<div class="p-4 border border-fuchsia-400/30 rounded-lg bg-fuchsia-400/5">
  <div class="text-fuchsia-400 text-2xl mb-2">💼</div>
  <div class="font-bold text-fuchsia-400">Consulting</div>
  <div class="text-sm opacity-60 mt-1">AI integration for teams</div>
</div>

<div class="p-4 border border-purple-400/30 rounded-lg bg-purple-400/5">
  <div class="text-purple-400 text-2xl mb-2">🎓</div>
  <div class="font-bold text-purple-400">Training</div>
  <div class="text-sm opacity-60 mt-1">Workshops & courses</div>
</div>

</div>

<!--
And one more thing.

I'm launching something new. Coyomi Labs.

This is my new company focused on AI-powered development. We're building tools, offering consulting for teams who want to integrate AI, and running training programs like the workshop I just mentioned.

If any of this resonates with you - the tools, the consulting, the training - let's talk.

Thank you all for your time today. Questions?
-->
