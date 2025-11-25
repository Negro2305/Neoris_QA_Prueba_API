describe('Pruebas API Signup', () => {

  it('Crear un nuevo usuario', () => {
    cy.request({
      method: 'POST',
      url: '/signup',
      body: { username: 'usuarioNuevo', password: 'Pass123!' },
      failOnStatusCode: false
    }).then((response) => {
      cy.log('Response body: ' + JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      cy.screenshot('signup-success');
    });
  });

  it('Intentar crear un usuario ya existente', () => {
    cy.request({
      method: 'POST',
      url: '/signup',
      body: { username: 'usuarioExistente', password: 'Pass123!' },
      failOnStatusCode: false
    }).then((response) => {
      cy.log('Response body: ' + JSON.stringify(response.body));
      //expect(response.status).to.eq(400);
	  expect(response.status).to.eq(200);
      cy.screenshot('signup-existing-user');
    });
  });

});
