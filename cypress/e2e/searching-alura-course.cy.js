describe('Visiting alura', () => {
  beforeEach(() => {
    cy.visit('https://www.alura.com.br');
  })

  it('searching for java course', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('Java');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome')
      .should('contain', 'Formação Java e Orientação a Objetos');
  })
})