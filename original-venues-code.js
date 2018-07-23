const venues = [
  {
    name: "Xcel Energy Centre",
    city: "Saint Paul",
    genres: ["Rock", "Hip-Hop", "Country"],
    size: "large"
  },
  {
    name: "First Avenue - Mainroom",
    city: "Minneapolis",
    genres: ["Rock", "Hip-Hop", "Dance"],
    size: "medium"
  },
  {
    name: "Honey",
    city: "Minneapolis",
    genres: ["Hip-Hop", "Dance"],
    size: "small"
  }
]

const venueNames = venues.map(venue => venue.name)
  .sort();

const minneapolisVenueNames = venues.filter(venue => venue.city === "Minneapolis")
  .map(venue => venue.name)
  .sort();

const genres = venues.reduce((genres, venue) => {
    return genres.concat(venue.genres);
  }, [])
  .filter((value, index, self) => self.indexOf(value) === index);

console.log(venueNames);
console.log(minneapolisVenueNames);
console.log(genres);