"use client";

import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  CircleGauge,
  Code2,
  Database,
  Handshake,
  Linkedin,
  Menu,
  MessageSquareText,
  Network,
  PlugZap,
  Send,
  Settings2,
  Sparkles,
  X,
  Zap,
  Clock3,
  DollarSign,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const technologies = [
  {
    name: "OpenAI",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai/default.svg",
  },
  {
    name: "n8n",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/n8n/default.svg",
  },
  {
    name: "Make",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/make/default.svg",
  },
  {
    name: "Zapier",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/zapier/default.svg",
  },
  {
    name: "Airtable",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/airtable/default.svg",
  },
  {
    name: "HubSpot",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/hubspot/default.svg",
  },
  {
    name: "Slack",
    logo: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/slack/default.svg",
  },
  { name: "Google Workspace", logo: "/google.png" },
];

const problems = [
  [
    "Repetitive Manual Tasks",
    "Employees spend hours on repetitive work that could be automated.",
    Settings2,
  ],
  [
    "Slow Response Times",
    "Delayed replies to customers and leads result in missed opportunities.",
    Clock3,
  ],
  [
    "Inefficient Workflows",
    "Disconnected processes create bottlenecks and reduce productivity.",
    CircleGauge,
  ],
  [
    "High Operational Costs",
    "Manual operations increase costs and limit business growth.",
    DollarSign,
  ],
  [
    "Data Entry & Human Errors",
    "Repetitive data entry leads to mistakes and inconsistent information.",
    Check,
  ],
  [
    "Missed Leads",
    "Potential customers are lost because follow-ups aren't fast or consistent.",
    MessageSquareText,
  ],
  [
    "Lack of Business Insights",
    "Important data is scattered, making it difficult to make informed decisions.",
    BarChart3,
  ],
  [
    "Scaling Challenges",
    "Growing the business requires hiring more people instead of smarter systems.",
    TrendingUp,
  ],
];

const services = [
  ["AI Agents", Bot],
  ["Workflow Automation", Zap],
  ["AI Chatbots", MessageSquareText],
  ["Email Automation", Database],
  ["Lead Generation Automation", Handshake],
  ["CRM Integrations", Sparkles],
  ["Data & Reporting Automation", PlugZap],
  ["Custom AI Solutions", Code2],
];

const industries = [
  "Marketing",
  "SEO",
  "SaaS",
  "Healthcare",
  "Real Estate",
  "Finance",
  "Professional Services",
  "SMB",
];

const faqs = [
  [
    "What types of businesses does Zrok work with?",
    "We work with ambitious teams from growing startups to established service businesses. Our systems are tailored to your processes, technical environment, and business goals.",
  ],
  [
    "How quickly can we launch an automation?",
    "The timeline depends on the scope, but focused automations can typically move from discovery to launch in a few weeks. We prioritize high-impact improvements first.",
  ],
  [
    "Can Zrok integrate with our existing tools?",
    "Yes. We design around your current stack and connect the tools your team relies on, from CRMs and project software to internal databases and AI platforms.",
  ],
  [
    "Will our team be able to manage the solution?",
    "Absolutely. We document every system, train the relevant team members, and remain available to optimize and expand your automation as you grow.",
  ],
  [
    "What happens after deployment?",
    "We monitor performance, refine workflows, and identify opportunities for the next automation. The goal is lasting operational leverage, not a one-time handoff.",
  ],
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      {description && <p className="section-copy mt-5">{description}</p>}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully.");

        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="bg-[#111111] text-white selection:bg-[#2563EB]">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#fff] backdrop-blur-xl">
        <div className="mx-auto flex h-14 md:h-20 max-w-[1320px] items-center justify-between px-2 lg:px-10">
          <Link
            href="#home"
            className="flex items-center gap-2 text-xl font-bold tracking-[-0.06em]"
          >
            <Image src="/logo.png" alt="" width={100} height={100} />
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-black md:flex">
            <Link href="#services" className="">
              Services
            </Link>
            <Link href="#solutions" className="">
              Solutions
            </Link>
            <Link href="#about" className="">
              About
            </Link>
            <Link href="#contact" className="">
              Contact
            </Link>
          </nav>
          <Link
            href="#contact"
            className="button-primary hidden md:inline-flex"
          >
            Book a Free Call <ArrowRight size={15} />
          </Link>
          <button
            className="grid h-10 w-10 place-items-center  md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={20} color="black" />
            ) : (
              <Menu size={20} color="black" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className=" bg-[#fff] px-10 py-5 md:hidden">
            <div className="mx-auto flex max-w-[1320px] flex-col gap-4 text-sm text-black">
              <Link href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <Link href="#solutions" onClick={() => setMenuOpen(false)}>
                Solutions
              </Link>
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href="#contact"
                className="button-primary mt-2 justify-center"
              >
                Book a Free Call
              </Link>
            </div>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="grid-pattern flex min-h-screen items-center pt-20"
      >
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-16 px-6 md:py-20 py-14 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <p className="eyebrow">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              AI systems for serious growth
            </p>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl xl:text-[68px] xl:leading-[.98]">
              AI Automation That Saves Your Team 20+ Hours Every Week
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              We build custom AI agents and workflow automation that eliminate
              repetitive tasks, streamline operations, and help businesses scale
              faster with less manual work.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#contact" className="button-primary">
                Book a Free Call <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-7 border-t border-white/10 pt-7 text-sm text-white/45">
              <span>
                <strong className="block text-xl text-white">40%</strong>faster
                operations
              </span>
              <span>
                <strong className="block text-xl text-white">90%</strong>less
                manual work
              </span>
              <span>
                <strong className="block text-xl text-white">24/7</strong>
                intelligent support
              </span>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="dashboard-shadow relative mx-auto max-w-[600px] rounded-2xl border border-white/10 bg-[#171717] p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <i className="h-2 w-2 rounded-full bg-white/20" />
                  <i className="h-2 w-2 rounded-full bg-white/20" />
                  <i className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <span className="text-[10px] uppercase tracking-[.18em] text-white/35">
                  Zrok command center
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-[1.25fr_.75fr]">
                <div className="rounded-xl border border-white/10 bg-[#111111] p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-white/45">
                        Automation performance
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">
                        +42.8%
                      </p>
                    </div>
                    <span className="rounded-md bg-[#2563EB]/15 px-2 py-1 text-xs text-[#ffffff]">
                      Live
                    </span>
                  </div>
                  <div className="mt-7 flex h-28 items-end gap-2">
                    {[35, 48, 38, 63, 57, 83, 72, 92, 85].map((height, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-sm bg-[#2563EB]"
                        style={{
                          height: `${height}%`,
                          opacity: 0.35 + i * 0.07,
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] text-white/30">
                    <span>Mon</span>
                    <span>Fri</span>
                    <span>Now</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-[#111111] p-4">
                    <p className="text-xs text-white/45">Active workflows</p>
                    <p className="mt-2 text-3xl font-semibold">12</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-[#2563EB]" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#111111] p-4">
                    <div className="flex items-center gap-2 text-xs text-white/65">
                      <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                      All systems operational
                    </div>
                    <p className="mt-3 text-xs leading-5 text-white/35">
                      Your AI agents are working across 8 connected tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-4 hidden w-56 rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl sm:block">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-[#2563EB]">
                  <Bot size={14} />
                </span>
                <div>
                  <p className="text-xs font-medium">Lead agent</p>
                  <p className="text-[10px] text-white/40">
                    Qualified new inquiry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-12">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <p className="mb-7 text-center text-xs font-medium uppercase tracking-[.2em] text-white/35">
            Trusted Technologies
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[.025] text-sm font-semibold text-white/60"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={150}
                  height={150}
                  className={` object-contain ${tech.name == "Google Workspace" ? "w-24 md:w-28 md:h-28" : "h-8 w-8"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-16 md:py-20">
        <div className="container-zrok">
          <SectionTitle
            eyebrow="The opportunity"
            title="Problems we solve"
            description="Helping businesses automate repetitive tasks, save time, and scale faster."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(([title, text, Icon]: [string, string, any]) => (
              <article key={title} className="dark-card p-6">
                <Icon size={20} className="text-[#2563EB]" />
                <h3 className="mt-9 text-base font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-16 md:py-20 border-y border-white/10 bg-white/[.018]"
      >
        <div className="container-zrok">
          <SectionTitle
            eyebrow="What we build"
            title="Our AI automation services"
            description="Focused automation capabilities, designed around the outcomes that matter to your business."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, Icon]: [string, any]) => (
              <article key={title} className="dark-card group p-6">
                <Icon
                  size={21}
                  className="text-[#2563EB] transition-transform group-hover:scale-110"
                />
                <h3 className="mt-8 text-base font-semibold">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20">
        <div className="container-zrok">
          <SectionTitle
            eyebrow="A clear process"
            title="How we work"
            description="We bring clarity to complex systems and move from opportunity to impact with intention."
          />
          <div className="relative mt-16 grid gap-8 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-white/15 md:block" />
            {[
              "Discovery",
              "Strategy",
              "Development",
              "Deployment",
              "Optimization",
            ].map((step, i) => (
              <div key={step} className="relative">
                <span className="relative grid h-8 w-8 place-items-center rounded-full border border-[#2563EB] bg-[#111111] text-xs font-semibold text-[#ffffff]">
                  0{i + 1}
                </span>
                <h3 className="mt-7 font-semibold">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {
                    [
                      "Map your workflow and identify the highest-value leverage points.",
                      "Define the systems, priorities, and success metrics that guide the work.",
                      "Build, test, and refine intelligent workflows around your team.",
                      "Launch with confidence and create a seamless handoff for everyone.",
                      "Measure impact and continuously improve what is working.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-y border-white/10 bg-white/[.018]">
        <div className="container-zrok">
          <SectionTitle
            eyebrow="The Zrok difference"
            title="Why choose Zrok"
            description="The focus is not simply to add technology. It is to create a compounding advantage for your team."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm font-medium text-white/45">
                Traditional agency
              </p>
              <ul className="mt-8 space-y-5 text-sm text-white/45">
                {[
                  "Generic recommendations",
                  "Manual delivery model",
                  "Static implementations",
                  "Slow iteration cycles",
                  "Costs rise with headcount",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <X size={17} className="shrink-0 text-white/25" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#2563EB]/50 bg-[#2563EB]/10 p-8">
              <p className="text-sm font-medium text-white">Zrok</p>
              <ul className="mt-8 space-y-5 text-sm text-white/85">
                {[
                  "Business-first systems strategy",
                  "Intelligence working around the clock",
                  "Automation that evolves with you",
                  "Fast, measurable improvements",
                  "Scalable operations without the overhead",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check size={17} className="shrink-0 text-[#2563EB]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20">
        <div className="container-zrok">
          <SectionTitle
            eyebrow="Built for your world"
            title="Industries we serve"
            description="Every industry has repetitive work, fragmented data, and room for a smarter operating model."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry, i) => (
              <div
                key={industry}
                className="dark-card flex h-36 flex-col justify-between p-5"
              >
                <span className="text-xs text-[#2563EB]">0{i + 1}</span>
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="case-studies" className="section border-y border-white/10 bg-white/[.018]"><div className="container-zrok"><div className="flex flex-wrap items-end justify-between gap-6"><SectionTitle eyebrow="Selected impact" title="Case studies" description="Meaningful operational progress from systems built to perform." /><a className="button-secondary" href="#contact">See all work <ArrowRight size={15} /></a></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{[["NOVA Growth", "Lead follow-up was entirely manual", "65%", "more qualified leads"],["Helix Health", "Patient intake lived across five tools", "90%", "less manual admin"],["Arbor Partners", "Reporting took days every month", "40%", "faster operations"]].map(([company, challenge, metric, result]) => <article key={company} className="dark-card overflow-hidden"><div className="flex h-40 items-end bg-[#2563EB]/10 p-6"><p className="text-xl font-semibold tracking-tight">{company}</p></div><div className="p-6"><p className="text-xs uppercase tracking-[.15em] text-white/35">Challenge</p><p className="mt-2 text-sm text-white/65">{challenge}</p><div className="mt-8 border-t border-white/10 pt-5"><p className="text-4xl font-semibold tracking-tight text-white">{metric}</p><p className="mt-1 text-sm text-white/45">{result}</p></div></div></article>)}</div></div></section> */}

      <section className="py-16 md:pt-24">
        <div className="container-zrok grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Common questions"
              title="Frequently asked questions"
              description="Everything you need to know before we start the conversation."
            />
          </div>
          <div className="lg:col-span-7">
            {faqs.map(([question, answer], i) => (
              <div key={question} className="border-b border-white/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium"
                >
                  <span>{question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-white/45 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="max-w-xl pb-6 text-sm leading-7 text-white/50">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-[1320px] rounded-3xl bg-[#2563EB] px-7 py-16 text-center sm:px-14 lg:py-24">
          <p className="eyebrow !text-white/70">Make work flow</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-.055em] sm:text-5xl lg:text-6xl">
            Ready to automate your business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75">
            See where AI and automation can create the most impact in your
            operation.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#111111]"
            >
              Book Free Call <ArrowRight size={15} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20">
        <div className="container-zrok grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Start a conversation"
              title="Build the operating system for your next stage of growth."
              description="Tell us where work feels slow, disconnected, or unnecessarily manual. We will help you see the path forward."
            />
            <div className="mt-10 space-y-5 text-sm text-white/60">
              <p>hello@zrok.ai</p>
              <div className="flex gap-3 pt-3">
                <Link href="#contact" className="social">
                  <Linkedin size={17} />
                </Link>
              </div>
            </div>
          </div>
          <form
            className="grid gap-4 lg:col-span-7 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            {[
              { label: "Full Name", type: "text", name: "fullName" },
              { label: "Company Name", type: "text", name: "companyName" },
              { label: "Business Email", type: "email", name: "email" },
              { label: "Phone", type: "tel", name: "phone" },
              { label: "Company Website", type: "url", name: "website" },
            ].map((field) => (
              <label key={field.name} className="block text-sm text-white/60">
                {field.label}

                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="form-input mt-2"
                />
              </label>
            ))}
            <label className="block text-sm text-white/60 sm:col-span-2">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input mt-2 min-h-32 resize-y"
              />
            </label>
            <button
              className="button-primary mt-2 justify-center sm:col-span-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Inquiry"}

              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 pb-8 pt-14 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 grid-cols-2 lg:grid-cols-4">
            <div>
              {" "}
              <Link
                href="#home"
                className="flex items-center gap-2 text-xl font-bold tracking-[-0.06em]"
              >
                <Image
                  src="/footer.jpeg"
                  alt=""
                  width={30}
                  height={50}
                  className="rounded-md"
                />
              </Link>
              <p className="mt-4 max-w-48 text-sm leading-6 text-white/45">
                AI automation for modern businesses.
              </p>
            </div>
            {[
              ["Company", "About", "Case studies", "Contact"],
              ["Services", "AI Agents", "Automations", "Integrations"],
              ["Resources", "Insights", "FAQ", "Privacy"],
            ].map(([heading, ...links]) => (
              <div key={heading}>
                <p className="text-sm font-medium">{heading}</p>
                <div className="mt-4 space-y-3">
                  {links.map((link) => (
                    <Link
                      key={link}
                      href="#contact"
                      className="block text-sm text-white/45 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center  border-t border-white/10 pt-4 text-xs text-white/35">
            <p>© 2026 Zrok. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
