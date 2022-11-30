// 0. BUKA HALAMAN
describe('0. Buka Test Page', () => {
    it('passes', () => {
      cy.visit('localhost/RestoUAS')
    })
})

// 1. LOGIN
// 1.0 LOGIN GAGAL - 
describe('1. LOGIN', () => {
    it('passes', () => {
      cy.get('#2login').click()
    })
})

describe('Login gagal - Username tidak diisi', () => {
    it('passes', () => {
        // cy.get('[type="text"]').type('administrator')
        cy.get('[type="Password"]').type('ony123')
        cy.get('[type="submit"]').click()
    })
})

describe('Login gagal - Password tidak diisi', () => {
    it('passes', () => {
        cy.get('[type="text"]').type('administrator')
        // cy.get('[type="Password"]').type('ony123')
        cy.get('[type="submit"]').click()
    })
})

describe('Login sukses', () => {
    it('passes', () => {
        cy.get('[type="text"]').type('administrator')
        cy.get('[type="Password"]').type('ony123')
        cy.get('[type="submit"]').click()
    })
})

// 2. Tambah Menu Pada Admin
describe('2. TAMBAH MENU - ADMIN', () => {
    it('passes', () => {
        cy.get(':nth-child(3) > .nav-link').click({force: true})
    })
  })

  describe('Tambah menu dengan mengisikan kategori', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('.text-center > button').click({force: true})
    })
  })

  describe('Tambah menu dengan mengisikan kategori dan nama', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('#nama_masakan').type('Nasi Goreng', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#nama_masakan').clear({force: true})
    })
  })

  describe('Tambah menu dengan mengisikan kategori, nama dan harga', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('#nama_masakan').type('Nasi Goreng', {force: true})
        cy.get('#harga').type('15000', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#nama_masakan').clear({force: true})
        cy.get('#harga').clear({force: true})
    })
})
  
  describe('Tambah menu dengan mengisikan kategori, nama, harga dan ketersediaan', () => {
    it('passes', () => {
        cy.get('#id_jenis').type('1', {force: true})
        cy.get('#nama_masakan').type('Nasi Goreng', {force: true})
        cy.get('#harga').type('15000', {force: true})
        cy.get('#status').type('1', {force: true})
        cy.get('.text-center > button').click({force: true})
    })
  })

// 3. TAMBAH PESANAN - ADMIN
describe('3. Tambah Pesanan - ADMIN', () => {
    it('passes', () => {
        cy.get(':nth-child(4) > .nav-link').click({force: true})
    })
  })

  describe('Tambah pesanan hanya memasukkan nomor meja', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
    })
  })

  describe('Tambah pesanan hanya memasukkan nomor meja dan tanggal pemesanan', () => {
    it('passes', () => {
        cy.get('#no_meja').type('90', {force: true})
        cy.get('#tanggal').type('2022-11-11', {force: true})
        cy.get('.text-center > button').click({force: true})
        cy.get('#no_meja').clear({force: true})
        cy.get('#tanggal').clear({force: true})
    })
  })

  describe('Tambah pesanan hanya memasukkan nomor meja, tanggal pemesanan, dan id user', () => {
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
  
  describe('Tambah pesanan hanya memasukkan nomor meja, tanggal pemesanan, id user, dan keterangan', () => {
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

  describe('Semua kolom diisi tetapi id user tidak ada di tabel user', () => {
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

  describe('Semua kolom diisi dan id user ada di tabel user', () => {
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

  // 4. Edit Pesanan - Admin
  describe('4. Edit Pesanan - Admin', () => {
    it('passes', () => {
        cy.get(':nth-child(3) > .nav-link').click({force: true})
        cy.get(':nth-child(1) > :nth-child(6) > .btn-danger').click({force: true})
    })
  })

  describe('edit pesanan ', () => {
    it('passes', () => {
      cy.get('#nama_masakan').type("Padang", {force: true})
      cy.get('#harga').type("5000", {force: true})
      cy.get('.text-center > button').click({force: true})
      cy.get(':nth-child(1) > :nth-child(6) > .btn-success').click({force: true})
    })
  })

  describe('Logout ', () => {
    it('passes', () => {
      cy.get('.book-a-table-btn').click({force: true})
    })
  })

  // 5. Edit Profile - Pelanggan
  describe('0. Buka Test Page', () => {
    it('passes', () => {
      cy.visit('localhost/RestoUAS')
    })
  })

  describe('Login Sebagai Pelanggan untuk melakukan Aksi Update Profile', () => {
    it('passes', () => {
      cy.get('#2login').click({force: true})
    })
  })

  describe('Isi login Pelanggan', () => {
    it('passes', () => {
        cy.get('[type="text"]').type('pelanggan1', {force: true})
      cy.get('[type="Password"]').type('12345', {force: true})
      cy.get('[type="submit"]').click({force: true})
    })
  })

  describe('5. Edit Profile - Pelanggan', () => {
    it('passes', () => {
        cy.get(':nth-child(2) > .nav-link').click({force: true})
    })
  })

  describe('Case 1 : Data username, password dan nama lengkap', () => {
    it('passes', () => {
      cy.get('#username').click({force: true})
      cy.get('#username').clear({force: true})
      cy.get('#username').type('sunuraihan11', {force: true})
      cy.wait(1000)
      cy.get('#password').click({force: true})
      cy.get('#password').clear({force: true})
      cy.get('#password').type('12345678', {force: true})
      cy.wait(1000)
      cy.get('#nama_user').click({force: true})
      cy.get('#nama_user').clear({force: true})
      cy.get('#nama_user').type('R. Sunu Raihan', {force: true})
      cy.wait(1000)
      cy.get('#edit_user > .container > .php-email-form > .text-center > button').click({force: true})
      cy.wait(3000)
    })
  })
  
  describe('Case 2 : Data nama dikosongkan', () => {
    it('passes', () => {
      cy.get('#username').click({force: true})
      cy.get('#username').clear({force: true})
      cy.get('#username').type('sunuraihan11', {force: true})
      cy.wait(1000)
      cy.get('#password').click({force: true})
      cy.get('#password').clear({force: true})
      cy.get('#password').type('12345678', {force: true})
      cy.wait(1000)
      cy.get('#nama_user').click({force: true})
      cy.get('#nama_user').clear({force: true})
      cy.wait(1000)
      cy.get('#edit_user > .container > .php-email-form > .text-center > button').click({force: true})
      cy.wait(3000)
    })
  })
  
  describe('Case 3 : Data Password dikosongkan', () => {
    it('passes', () => {
      cy.get('#username').click({force: true})
      cy.get('#username').clear({force: true})
      cy.get('#username').type('sunuraihan11', {force: true})
      cy.wait(1000)
      cy.get('#password').click({force: true})
      cy.get('#password').clear({force: true})
      cy.wait(1000)
      cy.get('#nama_user').click({force: true})
      cy.get('#nama_user').clear({force: true})
      cy.get('#nama_user').type('R. Sunu Raihan', {force: true})
      cy.wait(1000)
      cy.get('#edit_user > .container > .php-email-form > .text-center > button').click({force: true})
      cy.wait(3000)
    })
  })
  
  describe('Case 4 : Data username dikosongkan', () => {
    it('passes', () => {
      cy.get('#username').click({force: true})
      cy.get('#username').clear({force: true})
      cy.wait(1000)
      cy.get('#password').click({force: true})
      cy.get('#password').clear({force: true})
      cy.get('#password').type('12345678', {force: true})
      cy.wait(1000)
      cy.get('#nama_user').click({force: true})
      cy.get('#nama_user').clear({force: true})
      cy.get('#nama_user').type('R. Sunu Raihan', {force: true})
      cy.wait(1000)
      cy.get('#edit_user > .container > .php-email-form > .text-center > button').click({force: true})
      cy.wait(3000)
    })
  })
  
  describe('Case 5 : Data dikosongkan', () => {
    it('passes', () => {
      cy.get('#username').click({force: true})
      cy.get('#username').clear({force: true})
      cy.wait(1000)
      cy.get('#password').click({force: true})
      cy.get('#password').clear({force: true})
      cy.wait(1000)
      cy.get('#nama_user').click({force: true})
      cy.get('#nama_user').clear({force: true})
      cy.wait(1000)
      cy.get('#edit_user > .container > .php-email-form > .text-center > button').click({force: true})
      cy.wait(3000)
    })
  })
  
