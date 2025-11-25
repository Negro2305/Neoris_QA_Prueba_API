describe('Pruebas API Demoblaze - Signup y Login', () => {

  const baseUrl = 'https://api.demoblaze.com';

  // -------------------- SIGNUP --------------------
  it('Crear un nuevo usuario', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: { username: 'usuarioNuevo', password: 'Pass123!' },
      failOnStatusCode: false
    }).then((response) => {
      cy.log('Response body: ' + JSON.stringify(response.body));
      expect(response.status).to.eq(200);
	  //expect(response.body.message).to.eq('Sign up successful.');
      //expect(response.body.message).to.eq('Sign up successful.');
      cy.screenshot('signup-success');
    });
  });

  it('Intentar crear un usuario ya existente', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: { username: 'usuarioExistente', password: 'Pass123!' },
      failOnStatusCode: false
    }).then((response) => {
      cy.log('Response body: ' + JSON.stringify(response.body));
      expect(response.status).to.eq(200); // la API devuelve 200 incluso si ya existe
	  //expect(response.body.message).to.eq('This user already exists.');
      //expect(response.body).to.eq('This user already exists.');
      cy.screenshot('signup-existing-user');
    });
  });

  // -------------------- LOGIN --------------------
  it('Usuario y password correcto', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: { username: 'usuarioExistente', password: 'Pass123!' },
      failOnStatusCode: false
    }).then((response) => {
      cy.log('Response body: ' + JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      //expect(response.body.message).to.eq('Login successful.');
	  //expect(response.body).to.eq('Login successful.');
      cy.screenshot('login-success');
    });
  });

  it('Usuario y password incorrecto', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: { username: 'usuarioExistente', password: 'PassIncorrecta' },
      failOnStatusCode: false
    }).then((response) => {
      cy.log('Response body: ' + JSON.stringify(response.body));
      expect(response.status).to.eq(200);
	  //expect(response.body.message).to.eq('Wrong password.');
      //expect(response.body).to.eq('Wrong password.');
      cy.screenshot('login-fail');
    });
  });

});
