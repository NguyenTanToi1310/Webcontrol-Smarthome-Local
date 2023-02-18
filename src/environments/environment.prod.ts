export const environment = {
  production: true,
  hmr: false,
  mqtt: {
		server: '192.168.137.8',
		protocol: "wss",
		port: 443,
    path: "/myws"
	},
  cognito: {
    region: 'ap-southeast-1',
    userPoolId: 'ap-southeast-1_J7vJimaTM',
    userPoolWebClientId: '2ahhouuiiu8eho8e041sifhtag',
    identityPoolId: 'ap-southeast-1:d908bfe4-825c-44f2-ab08-675e39bfadd1',
  }
};
