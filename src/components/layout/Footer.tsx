import { Container } from '@/components/layout/Container';
// Removed: import CommutesMapComponent from './CommutesMap'; 

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Removed CommutesMapComponent from here */}
      <footer className="py-8 border-t bg-secondary/50 mt-12 md:mt-20 lg:mt-24"> {/* Added margin-top to ensure space if map was removed */}
        <Container>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Simon Styles Limited. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
}
