import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  company,
  service,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>New Lead from Nexora Website</Preview>

      <Body
        style={{
          backgroundColor: "#050816",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          padding: "40px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#0b1220",
            borderRadius: "18px",
            padding: "40px",
          }}
        >
          <Heading
            style={{
              color: "#22d3ee",
              marginBottom: "25px",
            }}
          >
            🚀 New Nexora Lead
          </Heading>

          <Section>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Phone:</strong> {phone}</Text>
            <Text><strong>Company:</strong> {company}</Text>
            <Text><strong>Service:</strong> {service}</Text>
          </Section>

          <Section
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#111827",
              borderRadius: "12px",
            }}
          >
            <Text>{message}</Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}