export function categorizePodcasts(uncategorizedPodcasts) {
  const allCategories = [
    ...new Set(
      uncategorizedPodcasts.map(
        group => group.category
      )
    )
  ]

  const categorizedPodcasts = allCategories.map(category => ({
    category,
    podcasts: uncategorizedPodcasts.filter(
      podcast => podcast.category === category
    )
  }))

  return categorizedPodcasts
}
