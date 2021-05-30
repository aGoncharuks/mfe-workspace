import {log} from '@mfe/utils';

tryLogin({username: 'TestUser'}).then(result => {
	log(`Successfully logged in! User info: ${JSON.stringify(result)}`);
});

export async function tryLogin(userData) {
	log(`Trying to login with username: ${userData.username}`);
	
	return Promise.resolve({
		username: 'My Authenticated User',
		applications: ['mfe1']
	});
}
