export async function getVenue(slug) {
    // Call an external API endpoint to get venues - no cache - fetch each time
    const res = await fetch(`${process.env.API}/venues/${slug}/events`, {
        cache: "no-store",
    })
    const data = await res.json()
    return data
}