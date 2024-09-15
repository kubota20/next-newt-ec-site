// components
import Container from "@/components/ui/container";

// features
import ContactForm from "@/pages/contact/contact-form";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <div className="my-32">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
