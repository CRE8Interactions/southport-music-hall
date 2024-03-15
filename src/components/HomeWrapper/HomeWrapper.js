
import { UpcomingEvents } from "./UpcomingEvents"
import { Hero } from "./Hero"

export default function HomeWrapper({ events }) {
    return (
        <section className="spacer">
            <Hero />
            <UpcomingEvents events={events} />
        </section>
    )
}
