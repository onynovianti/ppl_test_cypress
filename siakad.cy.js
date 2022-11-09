describe('0. Buka Test Page', () => {
  it('passes', () => {
    cy.visit('http://siakad.polinema.ac.id/')
  })
})

describe('1. Login', () => {
  it('passes', () => {
    // 1. LOGIN
    // Login - Username salah
    cy.get('#username').type("************")
    cy.get('#password').type("************")
    cy.get('.form-actions > .btn').click()
    cy.get('#username').clear()
    cy.get('#password').clear()

    // // Login - Password salah
    cy.get('#username').type("************")
    cy.get('#password').type("************")
    cy.get('.form-actions > .btn').click()
    cy.get('#username').clear()
    cy.get('#password').clear()

    // Login - Sukses
    cy.get('#username').type("************")
    cy.get('#password').type("************")
    cy.get('.form-actions > .btn').click()
  })
})

describe('2. Lihat Jadwal Kuliah', () => {
  it('passes', () => {
    // 2. Lihat Jadwal Kuliah
    cy.get('#gm_akademik > [href="javascript:;"]').click()
    cy.get('#gm_akademik > .sub-menu > :nth-child(3) > .ajaxify').click()
  })
})

describe('3. Buka LMS 4. Cetak KRS', () => {
  it('passes', () => {
    // 3. BUKA LMS
    cy.get('#gm_akademik > [href="javascript:;"]').click()
    cy.get(':nth-child(5) > .ajaxify').click()
    cy.get('#portlet-sub-page-body > .btn').click()

    // 4. Cetak KRS
    cy.get('#gm_akademik > [href="javascript:;"]').click()
    cy.get('#gm_akademik > .sub-menu > :nth-child(1) > .ajaxify').click()
    cy.wait(5000)
    cy.get('#portlet-sub-page-body > .btn').click()
  })
})

describe('5. Logout', () => {
  it('passes', () => {
    cy.get('.dropdown-user > .dropdown-toggle').trigger("mouseover")
    cy.get('.dropdown-menu > :nth-child(2) > a').click()
  })
})
