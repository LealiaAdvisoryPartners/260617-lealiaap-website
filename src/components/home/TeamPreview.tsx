import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/lib/routing";
import teamMember1 from "@/assets/Ricardo_cut.jpeg";
import teamMember2 from "@/assets/Duarte_cut.jpeg";

const teamMembers = [
  {
    id: "ricardo-nascimento-ferreira",
    name: "Ricardo Nascimento Ferreira",
    role: "teampage.role",
    image: teamMember1,
    email: "ricardo.ferreira@lealiaap.com",
    linkedin: "https://www.linkedin.com/in/ricardo-a-n-ferreira/",
  },
  {
    id: "duarte-rocha-pereira",
    name: "Duarte Rocha Pereira",
    role: "teampage.role",
    image: teamMember2,
    email: "duarte.pereira@lealiaap.com",
    linkedin: "https://www.linkedin.com/in/duarte-rocha-pereira/",
  },
];

const TeamPreview = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="section-container bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">{t("team.title")}</h2>
        <p className="section-subtitle mx-auto">
          {t("team.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card-elegant p-6"
          >
            <Link to={`${buildPath(language, "/team")}#${member.id}`} className="block group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-body italic mb-4">{t(member.role)}</p>
            </Link>
            <div className="flex justify-center gap-4">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Meet Our Team Link at Bottom */}
      <div className="mt-12 flex justify-center">
        <Link
          to={buildPath(language, "/team")}
          className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/70 transition-colors"
        >
          {t("team.cta")} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default TeamPreview;
