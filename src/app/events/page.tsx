// src/app/events/page.tsx
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/components/data";
import { EventCard } from "@/components/event-card";

export default function EventsPage() {
  // Sort events by year in descending order (most recent first)
  const sortedEvents = [...events].sort((a, b) => b.year - a.year);

  return (
    <Container>
      <SectionTitle preTitle="Our College" title="Colloquy Events">
        A timeline of Colloquy events at our college.
      </SectionTitle>

      {/* Responsive Grid: 1 column on mobile, 2 on small & large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mb-16 animate-fadeIn">
        {sortedEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id} // Pass string id
            title={event.title}
            date={event.date}
            description={event.description}
            year={event.year}
            image={event.images?.[0]}
            conductedBy={event.colloquyDetails?.conductedBy}
          />
        ))}
      </div>
    </Container>
  );
}