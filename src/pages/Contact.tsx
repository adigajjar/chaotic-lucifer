import { Mail, Linkedin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Aditya Gajjar",
    email: "adityanbg25@gmail.com",
    linkedin: "https://www.linkedin.com/in/aditya-gajjar-1a6048252/r",
  },
  {
    name: "Shubhankar Salunke",
    email: "shubhankar.salunke@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubhankar-salunke-b25231276/",
  },
  {
    name: "Amanjot Singh Saini",
    linkedin: "https://www.linkedin.com/in/amanjot-saini/",
  },
  {
    name: "Mahima Sharma",
    linkedin: "https://www.linkedin.com/in/mahima-sharma-57750925b/",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-32 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-5xl mb-6">
            Meet the <span className="text-primary">Team</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with the core team behind Lucifer. Connect with us on
            LinkedIn or send us an email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>

              <div className="flex flex-col gap-3 mt-4 w-full">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
