export const globalSearchService = {
  async search(query) {
    return {
      events: [],
      teams: [],
      portfolios: [],
      resources: [],
      query,
    };
  },

  getTrendingSearches() {
    return [
      "AI Workshop",
      "Portfolio",
      "Hackathon",
      "Team Members",
    ];
  },
};