import { Container } from '@/components/layout/Container';
import CommutesMapComponent from './CommutesMap'; // Import the new component

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Container className="py-8"> {/* Wrap map in container for consistent padding */}
        <CommutesMapComponent />
      </Container>
      <footer className="py-8 border-t bg-secondary/50">
        <Container>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Simon Styles Limited. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
}
