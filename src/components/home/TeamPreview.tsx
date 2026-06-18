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
    <section className="section-container relative bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-16"
      >
        <span className="eyebrow mb-6">{t("team.title")}</span>
        <h2
          className="section-title max-w-3xl"
          dangerouslySetInnerHTML={{
            __html: t("home.team.heading").replace(/{a:([^}]+)}/g, '<span class="serif-accent text-accent">$1</span>')
          }}
        />
        <p className="section-subtitle mx-auto mt-4">{t("team.subtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <Link to={`${buildPath(language, "/team")}#${member.id}`} className="block">
              <div className="relative overflow-hidden rounded-[var(--radius)] mb-6 bg-secondary">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl text-primary-foreground font-heading mb-1" style={{ fontWeight: 400 }}>
                    {member.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm font-body italic" style={{ fontWeight: 300 }}>
                    {t(member.role)}
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex justify-center gap-3">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border hover:border-accent text-muted-foreground hover:text-accent transition-all duration-500 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border hover:border-accent text-muted-foreground hover:text-accent transition-all duration-500 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to={buildPath(language, "/team")}
          className="group inline-flex items-center gap-3 text-primary text-sm uppercase tracking-[0.2em] font-medium"
        >
          <span className="link-underline">{t("team.cta")}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default TeamPreview;
