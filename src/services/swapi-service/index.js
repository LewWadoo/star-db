export default class SwapiService {
    constructor() {
        this._baseURL = "https://swapi.dev/api";
        
        this.getResource = async (url) => {
            const fullURL = `${this._baseURL}${url}`;
            const result = await fetch(fullURL);

            if (!result.ok) {
                throw new Error(`Could not fetch ${fullURL}, recieved ${result.status}`);
            }
            
            const body = await result.json();
            return body;
        };

        this.getAllPlanets = async () => {
            const planets = await this.getResource("/planets/");
            return planets.results.map(this.transformPlanet);
        };

        this.getAllPeople = async () => {
            const people = await this.getResource("/people/");
            return people.results.map(this.transformPerson);
        };

        this.getAllStarships = async () => {
            const starships = await this.getResource("/starships/");
            return starships.results.map(this.transformStarship);
        };

        this.getPerson = async (id) => {
            const person = await this.getResource(`/people/${id}/`);
            return this.transformPerson(person);
        };

        this.getPlanet = async (id) => {
            const planet = await this.getResource(`/planets/${id}/`);
            return this.transformPlanet(planet);
        };

        this.getStarship = async (id) => {
            const starship = await this.getResource(`/starships/${id}/`);
            return this.transformStarship(starship);
        };

        this.extractId = (item) => {
            const idRegExp = /\/([0-9]*)\/$/;
            return item.url.match(idRegExp)[1];
        };
        
        this.transformPlanet = (planet) => {
            return {
                id: this.extractId(planet),
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            };
        };

        this.transformStarship = (starship) => {
            return {
                id: this.extractId(starship),
                name: starship.name,
                model: starship.model,
                manufacturer: starship.manufacturer,
                costInCredits: starship.costInCredits,
                length: starship.length,
                crew: starship.crew,
                passengers: starship.passengers,
                cargoCapacity: starship.cargo_capacity
            };
        };

                this.transformPerson = (person) => {
            return {
                id: this.extractId(person),
                name: person.name,
                gender: person.gender,
                birthYear: person.birth_year,
                eyeColor: person.eye_color
            };
        };


    };
};
