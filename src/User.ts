import { faker } from '@faker-js/faker';

export class User {
	name: string;
	location: {
		lng: number,
		lat: number
	};

	constructor () {
		this.name = faker.person.firstName();
		this.location = {
			lng: faker.location.longitude(),
			lat: faker.location.latitude()
		};
	}
}