import Container from "@/components/elements/container";
import ContactForm from "@/features/contact/contact-form";
import React from "react";

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
