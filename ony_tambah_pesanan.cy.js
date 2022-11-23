  describe('0.1 Buka Test Page', () => {
    it('passes', () => {
      cy.visit('localhost/RestoUAS')
    })
  })

  describe('0.2 Login Sebagai Admin untuk melakukan Aksi Update Pesanan', () => {
    it('passes', () => {
      cy.get('#2login').click()
    })
  })

  describe('0.3. Isi login', () => {
    it('passes', () => {
        cy.get('[type="text"]').type('administrator')
      cy.get('[type="Password"]').type('ony123')
      cy.get('[type="submit"]').click()
      // Login - Sukses
    //   cy.get('[href="login.html"]').click()
    //   cy.get('[type="text"]').type('administrator')
    //   cy.get('[type="Password"]').type('123')
    //   cy.get('[type="submit"]').click()
    })
  })

  describe('0.4. Buka menu pesanan', () => {
    it('passes', () => {
        cy.get(':nth-child(4) > .nav-link').click({force: true})
    })
  })

  describe('1. Tambah pesanan hanya memasukkan nomor meja', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
    })
  })

  describe('2. Tambah pesanan hanya memasukkan nomor meja dan tanggal pemesanan', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('#tanggal').type('2022-11-11', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
        cy.get('#tanggal').clear({force: true})
    })
  })

  describe('3. Tambah pesanan hanya memasukkan nomor meja, tanggal pemesanan, dan id user', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('#tanggal').type('2022-11-11', {force: true})
        cy.get('#id_user').type('23', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
        cy.get('#tanggal').clear({force: true})
        cy.get('#id_user').clear({force: true})
    })
  })
  
  describe('4. Tambah pesanan hanya memasukkan nomor meja, tanggal pemesanan, id user, dan keterangan', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('#tanggal').type('2022-11-11', {force: true})
        cy.get('#id_user').type('23', {force: true})
        cy.get('#keterangan').type('Tambah mangkuk kosong', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
        cy.get('#tanggal').clear({force: true})
        cy.get('#id_user').clear({force: true})
        cy.get('#keterangan').clear({force: true})
    })
  })

  describe('5. Semua kolom diisi tetapi id user tidak ada di tabel user', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('#tanggal').type('2022-11-11', {force: true})
        cy.get('#id_user').type('19', {force: true})
        cy.get('#keterangan').type('Tambah mangkuk kosong', {force: true})
        cy.get('#status_order').type('1', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
        cy.get('#tanggal').clear({force: true})
        cy.get('#id_user').clear({force: true})
        cy.get('#keterangan').clear({force: true})
        cy.get('#status_order').clear({force: true})
    })
  })

  describe('6. Semua kolom diisi dan id user ada di tabel user', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('#tanggal').type('2022-11-11', {force: true})
        cy.get('#id_user').type('23', {force: true})
        cy.get('#keterangan').type('Tambah mangkuk kosong', {force: true})
        cy.get('#status_order').type('1', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
        cy.get('#tanggal').clear({force: true})
        cy.get('#id_user').clear({force: true})
        cy.get('#keterangan').clear({force: true})
    })
  })
  