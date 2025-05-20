import { Container } from '@/components/layout/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t bg-secondary/50">
      <Container>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Simon Styles Limited. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
