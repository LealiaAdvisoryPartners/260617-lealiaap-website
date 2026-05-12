import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const formSchema = z.object({
    name: z.string().min(2, t("contact.name.error")),
    email: z.string().email(t("contact.email.error")),
    company: z.string().optional(),
    message: z.string().min(10, t("contact.message.error")),
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    try {
      const response = await fetch(window.location.pathname || '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any),
      });

      if (response.ok) {
        toast({
          title: t("contact.success.title"),
          description: t("contact.success.desc"),
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-container bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="section-title">{t("contact.title")}</h2>
        </div>

        <div className="text-center mb-4 text-muted-foreground text-sm sm:text-base">
          <a
            href="mailto:INFO@LEALIAAP.COM"
            className="font-medium hover:text-foreground transition-colors"
          >
            INFO@LEALIAAP.COM
          </a>
          <a
            href="tel:+351935882323"
            className="font-medium mt-1 block hover:text-foreground transition-colors"
          >
            +351 935 882 323
          </a>
        </div>

        <div className="card-elegant p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.name")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.name.placeholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.email")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.email.placeholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.company")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.company.placeholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.message")} *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.message.placeholder")}
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="btn-gold w-full">
                {t("contact.submit")}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
