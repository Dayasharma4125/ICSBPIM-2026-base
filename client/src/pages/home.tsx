import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users, 
  BookOpen, 
  Leaf, 
  Cpu, 
  Globe, 
  Award,
  ChevronRight,
  Mail,
  Phone,
  Download,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import heroImage from "@assets/WhatsApp_Image_2025-12-16_at_5.09.42_PM_1765885211199.jpeg";
import dtuLogo from "@assets/WhatsApp_Image_2025-12-16_at_5.09.42_PM_(1)_1765885211198.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tracksData = [
  {
    title: "AI and Digital Transformation in Business",
    topics: [
      "AI applications in strategic decision-making",
      "Automation and process re-engineering",
      "Cloud computing and digital ecosystems",
      "Generative AI and intelligent systems in management",
      "Digital maturity models and transformation roadmaps",
      "Related contemporary issues"
    ]
  },
  {
    title: "Sustainable and Green Business Practices",
    topics: [
      "Circular economy and resource efficiency",
      "ESG frameworks and sustainability reporting",
      "Green supply chains and carbon footprint reduction",
      "AI for environmental monitoring and sustainability analytics",
      "Corporate governance and responsible innovation",
      "Energy readiness for sustainable development",
      "Related contemporary issues"
    ]
  },
  {
    title: "Marketing 5.0 and Digital Consumer Behavior",
    topics: [
      "AI-enabled marketing and consumer insights",
      "Neuromarketing and predictive customer analytics",
      "Social media, influencer, and experiential marketing",
      "Sustainability marketing and green consumer behavior",
      "Omnichannel strategies and digital customer journeys",
      "AI-driven personalization and recommendation systems",
      "E-commerce innovation and consumer trust",
      "Mobile commerce and fintech integration",
      "Digital storytelling and ethical branding",
      "Related contemporary issues"
    ]
  },
  {
    title: "Financial Innovation, FinTech and Digital Economy",
    topics: [
      "Blockchain, cryptocurrency, and digital assets",
      "AI in risk assessment and fraud detection",
      "Green finance, ESG investing, and sustainable banking",
      "Financial inclusion through digital innovation",
      "Regulatory challenges in the FinTech landscape",
      "Related contemporary issues"
    ]
  },
  {
    title: "Smart Operations, Supply Chain and Industry 5.0",
    topics: [
      "IoT-driven logistics and smart manufacturing",
      "Predictive maintenance and operations analytics",
      "Resilience and agility in global supply chains",
      "Robotics, automation, and process optimization",
      "Sustainable operations and energy-efficient production",
      "Related contemporary issues"
    ]
  },
  {
    title: "Human Capital, Leadership and Future of Work",
    topics: [
      "AI in HR analytics and performance management",
      "Leadership styles for digital transformation",
      "Hybrid work models and employee well-being",
      "Skill development for the AI-driven workplace",
      "Organizational culture, agility, and innovation mindset",
      "Future of Work",
      "Related contemporary issues"
    ]
  },
  {
    title: "Entrepreneurship, Innovation and Start-up Ecosystems",
    topics: [
      "Tech-based entrepreneurship and venture incubation",
      "Sustainable business models and impact ventures",
      "AI-enabled innovation and start-up scaling strategies",
      "University–industry partnerships for innovation",
      "Venture capital, funding, and start-up valuation",
      "Related contemporary issues"
    ]
  },
  {
    title: "Governance, Policy and Digital Society",
    topics: [
      "AI policy frameworks and governance mechanisms",
      "E-Governance and public service innovation",
      "Digital inclusion and equity",
      "Cybersecurity, data privacy, and ethical AI regulation",
      "Smart city initiatives and digital public infrastructure",
      "Related contemporary issues"
    ]
  },
  {
    title: "Education, Learning and AI in Pedagogy",
    topics: [
      "AI-enabled personalized and adaptive learning",
      "Digital learning platforms and EdTech integration",
      "Skill-based curriculum for Industry 5.0",
      "Sustainable education and future-readiness",
      "Academic-industry collaboration in management education",
      "Related contemporary issues"
    ]
  },
  {
    title: "Data Analytics, Business Intelligence and Decision Science",
    topics: [
      "Big Data analytics for business strategy",
      "Predictive and prescriptive analytics in decision-making",
      "Visualization tools and dashboard design",
      "AI-based forecasting and optimization models",
      "Data governance and ethical data use",
      "Related contemporary issues"
    ]
  },
  {
    title: "Corporate Social Responsibility and Inclusive Business",
    topics: [
      "CSR for sustainable and inclusive growth",
      "Shared value creation and stakeholder capitalism",
      "Social entrepreneurship and community engagement",
      "Responsible business practices in emerging economies",
      "SDGs and impact assessment models",
      "Public–private partnerships for sustainable development",
      "Related contemporary issues"
    ]
  },
  {
    title: "Technology, Ethics and Responsible AI",
    topics: [
      "Ethical implications of AI deployment",
      "Transparency, accountability, and explainable AI",
      "Bias, fairness, and inclusivity in algorithms",
      "Digital ethics in business and governance",
      "International standards for responsible AI",
      "Related contemporary issues"
    ]
  },
  {
    title: "Global Business Strategy, Trade and Competitiveness",
    topics: [
      "AI and analytics in international business strategy",
      "Digital globalization and supply chain geopolitics",
      "Innovation and competitiveness in emerging markets",
      "Cross-border collaborations and sustainable trade",
      "Global leadership, culture, and strategic foresight",
      "Related contemporary issues"
    ]
  },
  {
    title: "Case Study Track",
    topics: [
      "Research Cases related to the above tracks 1 to 13",
      "Industry Cases related to the above tracks 1 to 13"
    ]
  }
];

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src={dtuLogo} alt="DTU Logo" className="h-10 w-10 object-contain" />
            <div className="h-10 w-10 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              ICBM
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-bold leading-none">ICBM 2026</div>
              <div className="text-xs text-muted-foreground">DSM, Delhi Technological University</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('tracks')} className="hover:text-primary transition-colors">Tracks</button>
            <button onClick={() => scrollToSection('dates')} className="hover:text-primary transition-colors">Important Dates</button>
            <button onClick={() => scrollToSection('fees')} className="hover:text-primary transition-colors">Registration</button>
            <button onClick={() => scrollToSection('committee')} className="hover:text-primary transition-colors">Committee</button>
          </div>

          <Button onClick={() => scrollToSection('fees')} size="sm">Register Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="ICBM Background" 
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge variant="outline" className="mb-6 text-emerald-300 border-emerald-300/30 bg-emerald-900/20 px-4 py-1.5 text-sm uppercase tracking-wider backdrop-blur-sm">
              April 17-18, 2026 • New Delhi, India
            </Badge>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl font-heading text-white">
              4th International Conference on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Business & Management
              </span>
            </h1>
            <p className="mb-8 text-xl text-slate-300 max-w-2xl font-serif italic">
              "Driving Sustainable Business Transformation through AI and Innovation"
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('tracks')} className="bg-emerald-500 hover:bg-emerald-600 text-white border-0">
                Explore Tracks
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm">
                About Conference
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 font-heading text-slate-900">About The Institution</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" /> Delhi Technological University (DTU)
                  </h3>
                  <p>
                    Formerly Delhi College of Engineering, DTU boasts a legacy of over 75 years. 
                    As a non-affiliating, teaching, and research university, it strives to foster close collaboration between academia and industry, 
                    emphasizing a strong culture of scientific inquiry.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Delhi School of Management (DSM)
                  </h3>
                  <p>
                    Established in 2009, DSM nurtures techno-managers skilled in identifying key business challenges 
                    and applying technical expertise to resolve them. It emphasizes the Triple E approach: Education, Experience, and Exposure.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-3xl font-bold mb-6 font-heading text-slate-900">About the Conference</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                In today’s rapidly evolving global landscape, businesses are under constant pressure to balance profitability with sustainability. The integration of Artificial Intelligence (AI) and innovation has emerged as a powerful catalyst for achieving this balance. AI enables organizations to optimize resource utilization, reduce waste, and enhance decision-making through predictive analytics and automation. From manufacturing and logistics to healthcare and finance, industries are leveraging AI-driven solutions to streamline operations, minimize environmental impact, and create long-term economic value.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At the heart of sustainable business transformation lies innovation i.e., the ability to rethink traditional models and adopt cutting-edge technologies that create value while addressing global challenges. Companies are increasingly turning to AI to design eco-friendly products, develop smart supply chains, and promote circular economy practices.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As industries embrace AI and innovation, the focus must also shift toward creating an ecosystem of continuous learning, collaboration, and ethical governance. The synergy between AI and sustainable innovation is shaping a new industrial paradigm—one that values not just profit, but also purpose and long-term resilience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInUp}>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Call for Papers</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 font-heading text-slate-900">Conference Tracks</h2>
            <p className="text-slate-600">
              We invite research papers, articles, and case studies on the following themes. 
              Submissions will be reviewed for publication in conference proceedings.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tracksData.map((track, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="h-full hover:shadow-lg transition-all border-slate-200 hover:border-primary/50 group cursor-pointer hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="flex items-start gap-3 text-lg">
                          <span className="text-muted-foreground font-mono text-sm mt-1">{(index + 1).toString().padStart(2, '0')}</span>
                          <span className="group-hover:text-primary transition-colors">{track.title}</span>
                          <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary mt-1" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Click to view suggested sub-themes and topics.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[85vh]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-heading text-primary mb-2">
                        Track {index + 1}: {track.title}
                      </DialogTitle>
                      <DialogDescription>
                        Suggested themes and topics for research papers and case studies.
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-full max-h-[50vh] pr-4 mt-4">
                      <ul className="space-y-3">
                        {track.topics.map((topic, i) => (
                          <li key={i} className="flex gap-3 text-slate-700">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>

          {/* Track Categories Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
               <h3 className="font-bold text-lg text-blue-900 mb-2">Research Track</h3>
               <p className="text-sm text-blue-800">Research papers will be reviewed and will be published in our conference proceedings.</p>
             </div>
             <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 text-center">
               <h3 className="font-bold text-lg text-emerald-900 mb-2">Case Study Track</h3>
               <p className="text-sm text-emerald-800">All case studies will be reviewed by faculty members and experts from industry.</p>
             </div>
             <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 text-center">
               <h3 className="font-bold text-lg text-amber-900 mb-2">Industry Track</h3>
               <p className="text-sm text-amber-800">Industry Delegates/ Practitioners can share their experiences in the form of monographs and working papers.</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Conference Highlights - Added before Important Dates */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
             <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 -mr-12 -mt-12 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
                
                <h2 className="text-3xl font-bold mb-8 font-heading text-amber-900 flex items-center gap-3 relative z-10">
                  <Award className="w-8 h-8 text-amber-600" />
                  Conference Highlights
                </h2>
                
                <ul className="space-y-4 relative z-10">
                  <li className="flex gap-4 items-start">
                    <div className="p-1 bg-amber-200 rounded-full mt-1 shrink-0">
                       <Award className="w-4 h-4 text-amber-800" />
                    </div>
                    <span className="text-amber-900 text-lg">The best papers of the conference shall be awarded with a <strong>cash prize</strong>.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="p-1 bg-amber-200 rounded-full mt-1 shrink-0">
                       <BookOpen className="w-4 h-4 text-amber-800" />
                    </div>
                    <span className="text-amber-900 text-lg"><strong>Best paper in each technical session</strong> shall be awarded a certificate for the best paper in that specific session.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="p-1 bg-amber-200 rounded-full mt-1 shrink-0">
                       <Users className="w-4 h-4 text-amber-800" />
                    </div>
                    <span className="text-amber-900 text-lg">All the Delegates registered and attending the Conference without any paper presentation will receive a <strong>‘Certificate of Participation’</strong>. Persons accompanying the paper presenters can also register as Delegates.</span>
                  </li>
                </ul>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="dates" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Important Dates</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Mark your calendars for these key deadlines. Late submissions will not be entertained.
              </p>
              <div className="space-y-6">
                {[
                  { date: "Feb 10, 2026", label: "Abstract Submission Deadline", icon: Calendar, highlight: true },
                  { date: "Feb 25, 2026", label: "Registration Deadline", icon: Users },
                  { date: "Apr 16, 2026", label: "Pre-Conference Workshop", icon: BookOpen },
                  { date: "Apr 17-18, 2026", label: "Conference Dates", icon: Globe, highlight: true },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${item.highlight ? 'bg-white/10 border-white/20' : 'bg-transparent border-white/5'}`}>
                    <div className={`p-3 rounded-lg ${item.highlight ? 'bg-primary text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className={`font-bold text-lg ${item.highlight ? 'text-white' : 'text-slate-200'}`}>{item.date}</div>
                      <div className="text-slate-400 text-sm">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-heading text-primary">Extended Abstract Submission Guidelines</h3>
              <div className="space-y-4 text-slate-600 mb-8 text-sm">
                <p><strong>Content:</strong> Structured abstract of 1000 words, should have the Purpose of the Study, Design/ Methodology/ Approach, Findings, Implications, and Scope for future work / Limitations. Include up to five keywords.</p>
                <p><strong>Formatting:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                   <li>Margins: 1.5 inches</li>
                   <li>Font: Times New Roman, 12-point</li>
                   <li>Spacing: 1.5</li>
                   <li>References: Any standard style</li>
                </ul>
                <p><strong>Cover Page:</strong> Must include title, author’s name and affiliation, complete address, telephone number, and email id.</p>
                <p><strong>File Type:</strong> Microsoft Word (.doc .docx) only.</p>
                <p><strong>Deadline:</strong> Latest by February 10, 2026.</p>
                
                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-xs border border-blue-100 mt-4">
                  <p className="font-semibold mb-1">Review Process:</p>
                  All submitted abstracts shall be reviewed and acceptance will be communicated within a week of receiving the extended abstract. After acceptance, authors must register by Feb 25, 2026.
                </div>
              </div>
              <div className="space-y-3">
                 <Button className="w-full bg-primary hover:bg-primary/90 text-lg h-12">
                   Abstract Submission Link
                 </Button>
                 <Button variant="outline" className="w-full h-12">
                   Conference Registration Link
                 </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Fees */}
      <section id="fees" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-slate-900">Registration Fees</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              All participants attending the conference are required to register for the conference by paying the registration fee as mentioned below on or before <strong>February 25, 2026</strong>.
              <br/><span className="text-red-500 font-semibold text-sm mt-2 block">(Fees are Non-Refundable)</span>
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="mb-8">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50 hover:bg-slate-50">
                    <TableHead className="w-[100px] font-bold">Category</TableHead>
                    <TableHead className="font-bold">Participant Type</TableHead>
                    <TableHead className="text-right font-bold">Fee (Inclusive of GST)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { cat: "1", type: "Academicians", fee: "INR 3500" },
                    { cat: "2", type: "Delegate from Non-Academic Institutions/Industry", fee: "INR 4000" },
                    { cat: "3", type: "Research Scholars & Students (India)", fee: "INR 2500" },
                    { cat: "4", type: "Foreign Participants", fee: "USD 60" },
                    { cat: "5", type: "Delegates/Participants (Attendees)", fee: "INR 2500" },
                  ].map((row) => (
                    <TableRow key={row.cat}>
                      <TableCell className="font-medium text-muted-foreground">{row.cat}</TableCell>
                      <TableCell className="font-medium">{row.type}</TableCell>
                      <TableCell className="text-right font-bold text-primary">{row.fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-slate-900">
                <Users className="w-5 h-5 text-primary" /> Important Registration Guidelines
              </h4>
              <ul className="space-y-3 ml-1">
                <li className="flex gap-3">
                   <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                   <span>A person who wishes to attend the conference without a paper presentation can also attend the event by paying the registration fee using the same payment information.</span>
                </li>
                <li className="flex gap-3">
                   <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                   <span>In case the paper has multiple authors, certificates will be issued to <strong>only those participants who have registered</strong> for the conference and paid the fee.</span>
                </li>
                <li className="flex gap-3">
                   <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                   <span>Author(s) submitting more than one paper need to pay registration fee for <strong>each paper separately</strong>.</span>
                </li>
                <li className="flex gap-3">
                   <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                   <span>Participants/ Attendees have to make their own arrangements for travel and stay.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
               <h4 className="font-bold mb-4 text-lg text-slate-900">Online Payment Details</h4>
               <Card>
                 <Table>
                   <TableBody>
                     <TableRow>
                       <TableCell className="font-bold w-1/3 bg-slate-50">Account Number</TableCell>
                       <TableCell></TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell className="font-bold bg-slate-50">Account Name</TableCell>
                       <TableCell></TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell className="font-bold bg-slate-50">Bank Name & Branch</TableCell>
                       <TableCell></TableCell>
                     </TableRow>
                     <TableRow>
                       <TableCell className="font-bold bg-slate-50">IFSC</TableCell>
                       <TableCell></TableCell>
                     </TableRow>
                   </TableBody>
                 </Table>
               </Card>
               <p className="text-slate-500 text-sm mt-4 italic">
                  * Please retain the fee payment proof (Screenshot and Payment ID) post payment since it would be required to upload on conference registration link.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Committee & Venue */}
      <section id="committee" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-slate-900">Conference Committee</h2>
            <p className="text-slate-600">The distinguished team behind ICBM 2026.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            {/* Left Column: Key Roles */}
            <div className="space-y-6 lg:col-span-1">
              <Card className="border-l-4 border-l-primary bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-bold">Chief Patron</div>
                  <div className="font-bold text-xl text-slate-900">Prof. Prateek Sharma</div>
                  <div className="text-primary text-sm">Hon'ble Vice Chancellor, DTU</div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500 bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-bold">Conference Chair</div>
                  <div className="font-bold text-xl text-slate-900">Dr. Saurabh Agarwal</div>
                  <div className="text-emerald-600 text-sm">Head of Department, DSM, DTU</div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500 bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-bold">Convenor</div>
                  <div className="font-bold text-xl text-slate-900">Dr. Shikha N. Khera</div>
                  <div className="text-amber-600 text-sm">Associate Professor, DSM, DTU</div>
                </CardContent>
              </Card>
              
               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-8">
                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-2">Co-Convenors</h3>
                <ul className="space-y-3">
                  {[
                    "Dr. Deepali Malhotra",
                    "Dr. Deep Shree",
                    "Dr. Yashdeep Singh",
                    "Dr. Chandan Sharma"
                  ].map((name, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="font-medium">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-6">
                <h3 className="font-bold text-lg mb-4 text-slate-900 border-b pb-2">Organizing Members</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Dr. Gaganmeet",
                    "Dr. Seema",
                    "Dr. Yogesh Sharma",
                    "Dr. Shelly Gupta",
                    "Dr. Meenakshi Alhawat",
                    "Dr. Apoorva Jain"
                  ].map((name, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Advisory Committee */}
            <div className="lg:col-span-2">
               <h3 className="text-2xl font-bold mb-6 font-heading text-slate-900 flex items-center gap-3">
                 <Users className="w-6 h-6 text-primary" />
                 Advisory Committee
               </h3>
               <div className="grid sm:grid-cols-2 gap-4">
                 {[
                    { name: "Prof. Anu Singh Lather", role: "VC, Ambedkar University" },
                    { name: "Prof. Yogesh Singh", role: "VC, University of Delhi" },
                    { name: "Prof. Samsher", role: "VC, HBTU, Kanpur" },
                    { name: "Dr. Vinay Thakur", role: "MD, NICSI (MeitY)" },
                    { name: "Prof. P. K. Suri", role: "Professor, DSM, DTU" },
                    { name: "Prof. Pankaj Sinha", role: "Professor, FMS, DU" },
                    { name: "Prof. Rajan Yadav", role: "Professor, DSM, DTU" },
                    { name: "Prof. G. C. Maheshwari", role: "Professor, DSM, DTU" },
                    { name: "Dr. Vibhash Kumar", role: "Assoc. Prof, O.P. Jindal Global Univ." },
                    { name: "Prof. Amit Mukherjee", role: "Head, Dept USME, DTU" },
                    { name: "Prof. Nand Kumar", role: "Head, Dept Humanities, DTU" },
                    { name: "Dr. Aviral Kumar Tiwari", role: "Assoc. Prof, IIM Bodh Gaya" },
                    { name: "Prof. Vinita Sahay", role: "Director, IIM Bodh Gaya" },
                    { name: "Prof. Pankaj Kumar Gupta", role: "Head, CMS, Jamia Millia Islamia" },
                    { name: "Dr. Mallika Kumar", role: "Assoc. Prof, SRCC, DU" },
                    { name: "Prof. Madhu Vij", role: "Professor (Retd), FMS, DU" },
                    { name: "Prof. Ajay Kumar Singh", role: "Dean, Commerce & Business, DU" },
                    { name: "Mr. Abhinav Gaur", role: "Assoc. Director, Risk Advisory Deloitte" },
                    { name: "Prof. Justin Paul", role: "Univ. of Puerto Rico, USA" },
                 ].map((member, i) => (
                   <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all">
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{member.name}</div>
                        <div className="text-xs text-slate-500 leading-tight">{member.role}</div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Venue Section moved to bottom */}
          <div className="border-t pt-16">
            <h2 className="text-3xl font-bold mb-8 font-heading text-slate-900 text-center">Conference Venue</h2>
             <div className="text-center mb-8">
               <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 text-sm py-1 px-3">
                 The conference will take place in HYBRID MODE only for International Participants.
               </Badge>
             </div>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
               <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Delhi School of Management</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Delhi Technological University,<br />
                        Bawana Road, Shahbad Daulatpur Village,<br />
                        Rohini, New Delhi, Delhi 110042
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="w-full gap-2">
                      <MapPin className="w-4 h-4" /> Get Directions
                    </Button>
                  </div>
               </div>
               <div className="aspect-video w-full bg-slate-100 rounded-xl overflow-hidden h-full min-h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893214057889!2d77.11699991508535!3d28.75260038237064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-white font-bold text-2xl mb-4">ICBM 2026</div>
              <p className="mb-4">
                4th International Conference on Business & Management.
                Driving Sustainable Business Transformation through AI and Innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>dtumitr@dtu.ac.in</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>011-27871018</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Organized By</h4>
              <p>
                Delhi School of Management,<br />
                Delhi Technological University,<br />
                New Delhi, India
              </p>
            </div>
          </div>
          <Separator className="my-8 bg-slate-800" />
          <div className="text-center text-sm">
            &copy; 2026 ICBM Conference. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
