/* ===== KONFIGURASI ADMIN ===== */
var ADMIN_NAME = 'Gilang Romadon';
var ADMIN_PHONE = '6281319934106'; // format internasional tanpa + dan tanpa 0 di depan

/* ===== DATA OPERATOR ===== */
var operators = [
  { name: 'Telkomsel', color: '#e60000', code: 'TSEL' },
  { name: 'Indosat Ooredoo', color: '#ffd700', code: 'ISAT' },
  { name: 'XL Axiata', color: '#0066cc', code: 'XL' },
  { name: 'Tri (3)', color: '#8b0000', code: 'TRI' },
  { name: 'Smartfren', color: '#e91e63', code: 'SF' },
  { name: 'by.U', color: '#00c853', code: 'BYU' },
  { name: 'Axis', color: '#9c27b0', code: 'AXIS' },
  { name: 'Ceria', color: '#ff9800', code: 'CR' }
];

/* ===== DATA PRODUK ===== */
var products = [
  { id: 1,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 5.000',       price: 9000,  oldPrice: 10000,  status: 'available' },
  { id: 2,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 10.000',       price: 14000,  oldPrice: 15000,  status: 'available' },
  { id: 3,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 15.000',       price: 19000,  oldPrice: 20000,  status: 'available' },
  { id: 4,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 20.000',       price: 24000,  oldPrice: 25000,  status: 'available' },
  { id: 5,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 25.000',       price: 29000,  oldPrice: 30000,  status: 'available' },
  { id: 6,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 30.000',       price: 34000,  oldPrice: 35000,  status: 'available' },
  { id: 7,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 35.000',       price: 39000,  oldPrice: 40000,  status: 'available' },
  { id: 8,  operator: 'Telkomsel',        type: 'pulsa', denom: 'Pulsa 40.000',        price: 44000,  oldPrice: 45000,  status: 'available' },
  { id: 9,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 45.000',       price: 49000,  oldPrice: 50000,  status: 'available' },
  { id: 10,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 50.000',       price: 54000,  oldPrice: 56000,  status: 'available' },
  { id: 11,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 55.000',       price: 59000,  oldPrice: 60000,  status: 'available' },
  { id: 12,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 60.000',       price: 64000,  oldPrice: 66000,  status: 'available' },
  { id: 12,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 65.000',       price: 69000,  oldPrice: 70000,  status: 'available' },
  { id: 13,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 70.000',       price: 74000,  oldPrice: 75000,  status: 'available' },
  { id: 14,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 75.000',       price: 79000,  oldPrice: 80000,  status: 'available' },
  { id: 15,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 80.000',       price: 84000,  oldPrice: 85000,  status: 'available' },
  { id: 16,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 85.000',       price: 89000,  oldPrice: 90000,  status: 'available' },
  { id: 17,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 90.000',       price: 94000,  oldPrice: 95000,  status: 'available' },
  { id: 18,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 95.000',       price: 99000,  oldPrice: 100000,  status: 'available' },
  { id: 19,  operator: 'Telkomsel',       type: 'pulsa', denom: 'Pulsa 100.000',       price: 104000,  oldPrice: 105000,  status: 'available' },
  { id: 20,  operator: 'Telkomsel',       type: 'data',  denom: 'Telkomsel(flash)Data 1GB / 14 Hari', price: 14000,  oldPrice: 16000,  status: 'available' },
  { id: 21,  operator: 'Telkomsel',       type: 'data',  denom: 'Telkomsel(flash)Data 2GB / 7 Hari',price: 20000,  oldPrice: 23000,  status: 'available' },
  { id: 22,  operator: 'Telkomsel',       type: 'data',  denom: 'Telkomsel(flash)Data 3GB / 28 Hari',price: 29000,  oldPrice: 31000,  status: 'available' },
  { id: 23,  operator: 'Telkomsel',       type: 'data',  denom: 'Telkomsel(flash)Data 9GB / 28 Hari',price: 50000,  oldPrice: 52000,  status: 'available' },
  { id: 24,  operator: 'Telkomsel',       type: 'data',  denom: 'Telkomsel(flash)Data 25GB / 28 Hari',price: 97000,  oldPrice: 101000,  status: 'available' },
   { id: 25,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 5.000',       price: 9000,  oldPrice: 10000,  status: 'available' },
  { id: 26,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 10.000',       price: 14000,  oldPrice: 15000,  status: 'available' },
  { id: 27,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 15.000',       price: 19000,  oldPrice: 20000,  status: 'available' },
  { id: 28,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 20.000',       price: 24000,  oldPrice: 25000,  status: 'available' },
  { id: 29,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 25.000',       price: 29000,  oldPrice: 30000,  status: 'available' },
  { id: 30,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 30.000',       price: 34000,  oldPrice: 35000,  status: 'available' },
  { id: 31,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 35.000',       price: 39000,  oldPrice: 40000,  status: 'available' },
  { id: 32,  operator: 'Indosat Ooredoo',        type: 'pulsa', denom: 'Pulsa 40.000',        price: 44000,  oldPrice: 45000,  status: 'available' },
  { id: 33,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 45.000',       price: 49000,  oldPrice: 50000,  status: 'available' },
  { id: 34,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 50.000',       price: 54000,  oldPrice: 56000,  status: 'available' },
  { id: 35,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 55.000',       price: 59000,  oldPrice: 60000,  status: 'available' },
  { id: 36,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 60.000',       price: 64000,  oldPrice: 66000,  status: 'available' },
  { id: 37,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 65.000',       price: 69000,  oldPrice: 70000,  status: 'available' },
  { id: 38,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 70.000',       price: 74000,  oldPrice: 75000,  status: 'available' },
  { id: 39,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 75.000',       price: 79000,  oldPrice: 80000,  status: 'available' },
  { id: 40,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 80.000',       price: 84000,  oldPrice: 85000,  status: 'available' },
  { id: 41,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 85.000',       price: 89000,  oldPrice: 90000,  status: 'available' },
  { id: 42,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 90.000',       price: 94000,  oldPrice: 95000,  status: 'available' },
  { id: 43,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 95.000',       price: 99000,  oldPrice: 100000,  status: 'available' },
  { id: 44,  operator: 'Indosat Ooredoo',       type: 'pulsa', denom: 'Pulsa 100.000',       price: 104000,  oldPrice: 105000,  status: 'available' },
  { id: 45,  operator: 'Indosat Ooredoo', type: 'data',  denom: 'Paket Yellow 5GB / 2 Hari', price: 13000,  oldPrice: 15000,  status: 'available' },
  { id: 46, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Paket Yellow 5GB / 5 Hari',price: 17000,  oldPrice: 20000, status: 'available' },
  { id: 47, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Freedom Unlimited 5.5GB (1GB + 4.5GB Apps), 30 Hari',price: 39000,  oldPrice: 42000, status: 'available' },
  { id: 48, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Freedom Unlimited 10GB (2GB + 8GB Apps), 30 Hari',price: 59000,  oldPrice: 62000, status: 'available' },
  { id: 49, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Freedom Internet 3GB, 28 Hari',price: 30000,  oldPrice: 32000, status: 'available' },
  { id: 50, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Freedom Internet 11GB, 28 Hari',price: 50000,  oldPrice: 51000, status: 'available' },
  { id: 51, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Freedom Internet 66GB, 28 Hari',price: 94000,  oldPrice: 97000, status: 'available' },
  { id: 52, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Freedom Internet 100GB, 28 Hari',price: 111000,  oldPrice: 115000, status: 'available' },
  { id: 53, operator: 'Indosat Ooredoo', type: 'data',  denom: 'Paket Yellow 50GB / 7 Hari',price: 15000,  oldPrice: 80000, status: 'empty' },
  { id: 54,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 5.000',        price: 9000,   oldPrice: 10000,  status: 'available' },
  { id: 55,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 10.000',       price: 14000,  oldPrice: 15000,  status: 'available' },
  { id: 56,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 15.000',       price: 19000,  oldPrice: 20000,  status: 'available' },
  { id: 57,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 20.000',       price: 24000,  oldPrice: 25000,  status: 'available' },
  { id: 58,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 25.000',       price: 29000,  oldPrice: 30000,  status: 'available' },
  { id: 59,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 30.000',       price: 34000,  oldPrice: 35000,  status: 'available' },
  { id: 60,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 35.000',       price: 39000,  oldPrice: 40000,  status: 'available' },
  { id: 61,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 40.000',       price: 44000,  oldPrice: 45000,  status: 'available' },
  { id: 62,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 45.000',       price: 49000,  oldPrice: 50000,  status: 'available' },
  { id: 63,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 50.000',       price: 54000,  oldPrice: 56000,  status: 'available' },
  { id: 64,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 55.000',       price: 59000,  oldPrice: 60000,  status: 'available' },
  { id: 65,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 60.000',       price: 64000,  oldPrice: 66000,  status: 'available' },
  { id: 66,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 65.000',       price: 69000,  oldPrice: 70000,  status: 'available' },
  { id: 67,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 70.000',       price: 74000,  oldPrice: 75000,  status: 'available' },
  { id: 68,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 75.000',       price: 79000,  oldPrice: 80000,  status: 'available' },
  { id: 69,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 80.000',       price: 84000,  oldPrice: 85000,  status: 'available' },
  { id: 70,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 85.000',       price: 89000,  oldPrice: 90000,  status: 'available' },
  { id: 71,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 90.000',       price: 94000,  oldPrice: 95000,  status: 'available' },
  { id: 72,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 95.000',       price: 99000,  oldPrice: 100000, status: 'available' },
  { id: 73,  operator: 'XL Axiata',       type: 'pulsa', denom: 'Pulsa 100.000',      price: 104000, oldPrice: 105000, status: 'available' },
  { id: 74, operator: 'XL Axiata',       type: 'data',  denom: 'XL (kuota hemat bulanan anjay) 2GB / 30 Hari', price: 17000,  oldPrice: 20000,  status: 'available' },
  { id: 75, operator: 'XL Axiata',       type: 'data',  denom: 'XL (kuota hemat bulanan anjay) 7GB / 30 Hari',price: 57000, oldPrice: 59000, status: 'available' },
  { id: 76, operator: 'XL Axiata',       type: 'data',  denom: 'XL (kuota hemat bulanan anjay) 7GB / 30 Hari',price: 57000, oldPrice: 59000, status: 'available' },
  { id: 77, operator: 'XL Axiata',       type: 'data',  denom: 'XL (Kuota JumbO) 76GB / 28 Hari',price: 92000, oldPrice: 95000, status: 'available' },
  { id: 78,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 5.000',        price: 9000,   oldPrice: 10000,  status: 'available' },
  { id: 79,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 10.000',       price: 14000,  oldPrice: 15000,  status: 'available' },
  { id: 80,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 15.000',       price: 19000,  oldPrice: 20000,  status: 'available' },
  { id: 81,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 20.000',       price: 24000,  oldPrice: 25000,  status: 'available' },
  { id: 82,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 25.000',       price: 29000,  oldPrice: 30000,  status: 'available' },
  { id: 83,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 30.000',       price: 34000,  oldPrice: 35000,  status: 'available' },
  { id: 84,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 35.000',       price: 39000,  oldPrice: 40000,  status: 'available' },
  { id: 85,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 40.000',       price: 44000,  oldPrice: 45000,  status: 'available' },
  { id: 86,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 45.000',       price: 49000,  oldPrice: 50000,  status: 'available' },
  { id: 87,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 50.000',       price: 54000,  oldPrice: 56000,  status: 'available' },
  { id: 88,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 55.000',       price: 59000,  oldPrice: 60000,  status: 'available' },
  { id: 89,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 60.000',       price: 64000,  oldPrice: 66000,  status: 'available' },
  { id: 90,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 65.000',       price: 69000,  oldPrice: 70000,  status: 'available' },
  { id: 91,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 70.000',       price: 74000,  oldPrice: 75000,  status: 'available' },
  { id: 92,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 75.000',       price: 79000,  oldPrice: 80000,  status: 'available' },
  { id: 93,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 80.000',       price: 84000,  oldPrice: 85000,  status: 'available' },
  { id: 94,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 85.000',       price: 89000,  oldPrice: 90000,  status: 'available' },
  { id: 95,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 90.000',       price: 94000,  oldPrice: 95000,  status: 'available' },
  { id: 96,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 95.000',       price: 99000,  oldPrice: 100000, status: 'available' },
  { id: 97,  operator: 'Tri (3)',       type: 'pulsa', denom: 'Pulsa 100.000',      price: 104000, oldPrice: 105000, status: 'available' },
  { id: 98, operator: 'Tri (3)',         type: 'data',  denom: 'Three 2GB Nasional, 7 Hari', price: 15000,  oldPrice: 16000,  status: 'available' },
  { id: 99, operator: 'Tri (3)',         type: 'data',  denom: 'Three 9GB Nasional, Mengikuti masa aktif kartu',price: 50000, oldPrice: 51000, status: 'available' },
  { id: 100, operator: 'Tri (3)',         type: 'data',  denom: 'Three 40GB Nasional, Mengikuti masa aktif kartu',price: 110000, oldPrice: 111000, status: 'available' },
  { id: 101,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 5.000',        price: 9000,   oldPrice: 10000,  status: 'available' },
  { id: 102,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 10.000',       price: 14000,  oldPrice: 15000,  status: 'available' },
  { id: 103,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 15.000',       price: 19000,  oldPrice: 20000,  status: 'available' },
  { id: 104,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 20.000',       price: 24000,  oldPrice: 25000,  status: 'available' },
  { id: 105,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 25.000',       price: 29000,  oldPrice: 30000,  status: 'available' },
  { id: 106,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 30.000',       price: 34000,  oldPrice: 35000,  status: 'available' },
  { id: 107,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 35.000',       price: 39000,  oldPrice: 40000,  status: 'available' },
  { id: 108,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 40.000',       price: 44000,  oldPrice: 45000,  status: 'available' },
  { id: 109,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 45.000',       price: 49000,  oldPrice: 50000,  status: 'available' },
  { id: 110,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 50.000',       price: 54000,  oldPrice: 56000,  status: 'available' },
  { id: 111,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 55.000',       price: 59000,  oldPrice: 60000,  status: 'available' },
  { id: 112,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 60.000',       price: 64000,  oldPrice: 66000,  status: 'available' },
  { id: 113,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 65.000',       price: 69000,  oldPrice: 70000,  status: 'available' },
  { id: 114,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 70.000',       price: 74000,  oldPrice: 75000,  status: 'available' },
  { id: 115,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 75.000',       price: 79000,  oldPrice: 80000,  status: 'available' },
  { id: 116,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 80.000',       price: 84000,  oldPrice: 85000,  status: 'available' },
  { id: 117,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 85.000',       price: 89000,  oldPrice: 90000,  status: 'available' },
  { id: 118,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 90.000',       price: 94000,  oldPrice: 95000,  status: 'available' },
  { id: 119,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 95.000',       price: 99000,  oldPrice: 100000, status: 'available' },
  { id: 120,  operator: 'Smartfren',       type: 'pulsa', denom: 'Pulsa 100.000',      price: 104000, oldPrice: 105000, status: 'available' },
  { id: 121, operator: 'Smartfren',       type: 'data',  denom: 'Smart Kuota 4GB, 3 Hari', price: 13000,  oldPrice: 15000,  status: 'available' },
  { id: 122, operator: 'Smartfren',       type: 'data',  denom: 'Smart Kuota 24GB, 28 Hari',price: 64000, oldPrice: 66000, status: 'available' },
  { id: 123, operator: 'Smartfren',       type: 'data',  denom: 'Smart Kuota 66GB, 28 Hari',price: 96000, oldPrice: 97000, status: 'available' },
  { id: 124,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 5.000',        price: 9000,   oldPrice: 10000,  status: 'available' },
  { id: 125,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 10.000',       price: 14000,  oldPrice: 15000,  status: 'available' },
  { id: 126,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 15.000',       price: 19000,  oldPrice: 20000,  status: 'available' },
  { id: 127,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 20.000',       price: 24000,  oldPrice: 25000,  status: 'available' },
  { id: 128,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 25.000',       price: 29000,  oldPrice: 30000,  status: 'available' },
  { id: 129,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 30.000',       price: 34000,  oldPrice: 35000,  status: 'available' },
  { id: 130,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 35.000',       price: 39000,  oldPrice: 40000,  status: 'available' },
  { id: 131,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 40.000',       price: 44000,  oldPrice: 45000,  status: 'available' },
  { id: 132,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 45.000',       price: 49000,  oldPrice: 50000,  status: 'available' },
  { id: 133,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 50.000',       price: 54000,  oldPrice: 56000,  status: 'available' },
  { id: 134,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 55.000',       price: 59000,  oldPrice: 60000,  status: 'available' },
  { id: 135,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 60.000',       price: 64000,  oldPrice: 66000,  status: 'available' },
  { id: 136,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 65.000',       price: 69000,  oldPrice: 70000,  status: 'available' },
  { id: 137,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 70.000',       price: 74000,  oldPrice: 75000,  status: 'available' },
  { id: 138,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 75.000',       price: 79000,  oldPrice: 80000,  status: 'available' },
  { id: 139,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 80.000',       price: 84000,  oldPrice: 85000,  status: 'available' },
  { id: 140,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 85.000',       price: 89000,  oldPrice: 90000,  status: 'available' },
  { id: 141,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 90.000',       price: 94000,  oldPrice: 95000,  status: 'available' },
  { id: 142,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 95.000',       price: 99000,  oldPrice: 100000, status: 'available' },
  { id: 143,  operator: 'by.U',       type: 'pulsa', denom: 'Pulsa 100.000',      price: 104000, oldPrice: 105000, status: 'available' },
  { id: 144, operator: 'by.U',            type: 'data',  denom: 'By.u (kuota Harian) 4GB, 7 Hari', price: 15000,  oldPrice: 17000,  status: 'available' },
  { id: 145, operator: 'by.U',            type: 'data',  denom: 'By.u (kuota Bulana) 9GB, 28 Hari',price: 48000,  oldPrice: 51000,  status: 'available' },
  { id: 146, operator: 'by.U',            type: 'data',  denom: 'By.u (kuota Bulana) 50GB, 28 Hari',price: 100000,  oldPrice: 105000,  status: 'available' },
  { id: 147,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 5.000',        price: 9000,   oldPrice: 10000,  status: 'available' },
  { id: 148,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 10.000',       price: 14000,  oldPrice: 15000,  status: 'available' },
  { id: 149,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 15.000',       price: 19000,  oldPrice: 20000,  status: 'available' },
  { id: 150,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 20.000',       price: 24000,  oldPrice: 25000,  status: 'available' },
  { id: 151,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 25.000',       price: 29000,  oldPrice: 30000,  status: 'available' },
  { id: 152,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 30.000',       price: 34000,  oldPrice: 35000,  status: 'available' },
  { id: 153,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 35.000',       price: 39000,  oldPrice: 40000,  status: 'available' },
  { id: 154,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 40.000',       price: 44000,  oldPrice: 45000,  status: 'available' },
  { id: 155,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 45.000',       price: 49000,  oldPrice: 50000,  status: 'available' },
  { id: 156,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 50.000',       price: 54000,  oldPrice: 56000,  status: 'available' },
  { id: 157,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 55.000',       price: 59000,  oldPrice: 60000,  status: 'available' },
  { id: 158,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 60.000',       price: 64000,  oldPrice: 66000,  status: 'available' },
  { id: 159,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 65.000',       price: 69000,  oldPrice: 70000,  status: 'available' },
  { id: 160,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 70.000',       price: 74000,  oldPrice: 75000,  status: 'available' },
  { id: 161,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 75.000',       price: 79000,  oldPrice: 80000,  status: 'available' },
  { id: 162,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 80.000',       price: 84000,  oldPrice: 85000,  status: 'available' },
  { id: 163,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 85.000',       price: 89000,  oldPrice: 90000,  status: 'available' },
  { id: 164,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 90.000',       price: 94000,  oldPrice: 95000,  status: 'available' },
  { id: 165,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 95.000',       price: 99000,  oldPrice: 100000, status: 'available' },
  { id: 166,  operator: 'Axis',       type: 'pulsa', denom: 'Pulsa 100.000',      price: 104000, oldPrice: 105000, status: 'available' },
  { id: 167, operator: 'Axis',            type: 'data',  denom: 'Axis( Paket Harian) 7GB, 2 Hari', price: 13000,  oldPrice: 15000,  status: 'available' },
  { id: 168, operator: 'Axis',            type: 'data',  denom: 'Axis( Bronet GO) 15GB, 28 Hari',price: 50000,  oldPrice: 52000, status: 'available' },
  { id: 169, operator: 'Axis',            type: 'data',  denom: 'Axis( Bronet GO) 65GB, 28 Hari',price: 100000,  oldPrice: 105000, status: 'available' },
  { id: 170, operator: 'Cooming soon',           type: 'pulsa', denom: 'Pulsa 00.000',       price: 100000,  oldPrice: 111500,  status: 'empty' },
 
];

/* ===== STATE ===== */
var state = {
  currentFilter: 'all',
  searchQuery: '',
  sortBy: 'default',
  operatorFilter: 'all',
  cart: [],
  favorites: [],
  selectedProduct: null,
  lastOrder: null
};

/* ===== SAFE localStorage ===== */
function safeGet(key) {
  try { return localStorage.getItem(key); } catch(e) { return null; }
}
function safeSet(key, val) {
  try { localStorage.setItem(key, val); } catch(e) {}
}

try {
  var savedCart = safeGet('cart');
  if (savedCart) state.cart = JSON.parse(savedCart);
  var savedFav = safeGet('favorites');
  if (savedFav) state.favorites = JSON.parse(savedFav);
} catch(e) {
  console.warn('localStorage tidak tersedia:', e);
}

/* ===== UTILS ===== */
function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function showToast(message, type) {
  try {
    var container = document.getElementById('toastContainer');
    var toast = document.createElement('div');
    toast.className = 'toast ' + (type || 'success');
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 2500);
  } catch(e) {}
}

function saveState() {
  safeSet('cart', JSON.stringify(state.cart));
  safeSet('favorites', JSON.stringify(state.favorites));
}

/* ===== 🔊 SUARA NOTIFIKASI (Text-to-Speech) ===== */
function speakNotification(text) {
  try {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech Synthesis tidak didukung browser ini');
      return false;
    }
    // Hentikan suara yang sedang berjalan
    window.speechSynthesis.cancel();

    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';      // Bahasa Indonesia
    utterance.rate = 0.95;          // Sedikit lebih lambat agar jelas
    utterance.pitch = 1;
    utterance.volume = 1;

    // Pilih suara Indonesia jika tersedia
    var voices = window.speechSynthesis.getVoices();
    var idVoice = null;
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang === 'id-ID' || voices[i].lang === 'id') {
        idVoice = voices[i];
        break;
      }
    }
    if (idVoice) utterance.voice = idVoice;

    window.speechSynthesis.speak(utterance);
    return true;
  } catch(e) {
    console.warn('TTS error:', e);
    return false;
  }
}

// Preload voices (Chrome load async)
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = function() {};
  window.speechSynthesis.getVoices();
}

/* ===== 📱 KIRIM PESANAN KE WHATSAPP ADMIN ===== */
function sendOrderToWhatsApp() {
  if (!state.lastOrder) {
    showToast('❌ Tidak ada pesanan', 'warning');
    return;
  }

  var order = state.lastOrder;
  var lines = [];

  lines.push('*🛒 PESANAN BARU*');
  lines.push('');
  lines.push('Halo Admin ' + ADMIN_NAME + ',');
  lines.push('Saya ingin konfirmasi pesanan berikut:');
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━');
  lines.push('*📋 Detail Pesanan:*');
  lines.push('');

  for (var i = 0; i < order.items.length; i++) {
    var item = order.items[i];
    lines.push('• ' + item.operator);
    lines.push('  ' + item.denom + ' × ' + item.qty);
    lines.push('  ' + formatRupiah(item.price * item.qty));
    lines.push('');
  }

  lines.push('━━━━━━━━━━━━━━━');
  lines.push('*💰 Total: ' + formatRupiah(order.total) + '*');
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━');
  lines.push('📅 ' + order.date);
  lines.push('🆔 Order ID: ' + order.orderId);
  lines.push('');
  lines.push('Mohon info pembayaran & proses selanjutnya. Terima kasih 🙏');

  var message = lines.join('\n');
  var waUrl = 'https://wa.me/' + ADMIN_PHONE + '?text=' + encodeURIComponent(message);

  // Buka WhatsApp
  try {
    window.open(waUrl, '_blank');
    showToast('📱 Membuka WhatsApp...', 'success');
  } catch(e) {
    // Fallback: redirect
    window.location.href = waUrl;
  }
}

/* ===== CART ===== */
function addToCart(productId) {
  var product = products.find(function(p) { return p.id === productId; });
  if (!product) return;
  var existing = state.cart.find(function(item) { return item.id === productId; });
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      operator: product.operator,
      denom: product.denom,
      price: product.price,
      qty: 1
    });
  }
  saveState();
  updateCartBadge();
  showToast('✅ ' + product.operator + ' - ' + product.denom + ' ditambahkan!', 'success');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(function(item) { return item.id !== productId; });
  saveState();
  updateCartBadge();
  renderCart();
  showToast('🗑️ Item dihapus', 'warning');
}

function updateCartBadge() {
  var total = state.cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
  var badge = document.getElementById('cartBadge');
  if (total > 0) {
    badge.textContent = total;
    badge.classList.add('show');
  } else {
    badge.classList.remove('show');
  }
}

function renderCart() {
  var container = document.getElementById('cartItems');
  var footer = document.getElementById('cartFooter');
  if (state.cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">🛒 Keranjang masih kosong</div>';
    footer.style.display = 'none';
    return;
  }
  var html = '';
  for (var i = 0; i < state.cart.length; i++) {
    var item = state.cart[i];
    html += '<div class="cart-item">' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-title">' + item.operator + '</div>' +
        '<div class="cart-item-sub">' + item.denom + ' × ' + item.qty + '</div>' +
      '</div>' +
      '<div class="cart-item-price">' + formatRupiah(item.price * item.qty) + '</div>' +
      '<button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')">×</button>' +
    '</div>';
  }
  container.innerHTML = html;
  var total = state.cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
  document.getElementById('cartTotal').textContent = formatRupiah(total);
  footer.style.display = 'block';
}

/* ===== FAVORITES ===== */
function toggleFavorite(productId) {
  var index = state.favorites.indexOf(productId);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('💔 Dihapus dari favorit', 'warning');
  } else {
    state.favorites.push(productId);
    showToast('❤️ Ditambahkan ke favorit', 'success');
  }
  saveState();
  renderTable();
}

/* ===== RENDER TABLE ===== */
function renderTable() {
  var tbody = document.getElementById('tableBody');
  var noResult = document.getElementById('noResult');

  var filtered = products.slice();

  if (state.currentFilter !== 'all') {
    filtered = filtered.filter(function(p) { return p.type === state.currentFilter; });
  }
  if (state.operatorFilter !== 'all') {
    filtered = filtered.filter(function(p) { return p.operator === state.operatorFilter; });
  }
  if (state.searchQuery) {
    var q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(function(p) {
      return p.operator.toLowerCase().indexOf(q) > -1 ||
             p.denom.toLowerCase().indexOf(q) > -1 ||
             p.type.indexOf(q) > -1;
    });
  }

  if (state.sortBy === 'price-asc') filtered.sort(function(a,b) { return a.price - b.price; });
  else if (state.sortBy === 'price-desc') filtered.sort(function(a,b) { return b.price - a.price; });
  else if (state.sortBy === 'name-asc') filtered.sort(function(a,b) { return a.operator.localeCompare(b.operator); });
  else if (state.sortBy === 'name-desc') filtered.sort(function(a,b) { return b.operator.localeCompare(a.operator); });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    noResult.style.display = 'block';
    updateStats([]);
    return;
  }
  noResult.style.display = 'none';

  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var p = filtered[i];
    var op = null;
    for (var j = 0; j < operators.length; j++) {
      if (operators[j].name === p.operator) { op = operators[j]; break; }
    }
    if (!op) op = { color: '#999', code: 'NA' };

    var typeLabel = p.type === 'pulsa' ? 'Pulsa' : 'Data';
    var typeClass = p.type === 'pulsa' ? 'type-pulsa' : 'type-data';
    var isAvailable = p.status === 'available';
    var isFav = state.favorites.indexOf(p.id) > -1;

    html += '<tr>' +
      '<td>' +
        '<div class="operator-cell">' +
          '<div class="operator-logo" style="background:' + op.color + ';">' + op.code.substring(0,2) + '</div>' +
          p.operator +
        '</div>' +
      '</td>' +
      '<td>' +
        '<span class="type-badge ' + typeClass + '">' + typeLabel + '</span> ' +
        '<button class="fav-btn" onclick="toggleFavorite(' + p.id + ')">' + (isFav ? '❤️' : '🤍') + '</button>' +
      '</td>' +
      '<td><span class="denom-badge">' + p.denom + '</span></td>' +
      '<td>' +
        '<span class="price-old">' + formatRupiah(p.oldPrice) + '</span>' +
        '<span class="price">' + formatRupiah(p.price) + '</span>' +
      '</td>' +
      '<td><span class="status ' + (isAvailable ? 'status-available' : 'status-empty') + '">' +
        (isAvailable ? 'Tersedia' : 'Habis') +
      '</span></td>' +
      '<td>' +
        '<button class="btn-buy" ' + (!isAvailable ? 'disabled' : '') + ' onclick="openBuyModal(' + p.id + ')">' +
          (isAvailable ? '🛒 Beli' : 'Habis') +
        '</button>' +
        '<button class="btn-share" onclick="shareProduct(' + p.id + ')">📤</button>' +
      '</td>' +
    '</tr>';
  }

  tbody.innerHTML = html;
  updateStats(filtered);
}

function updateStats(data) {
  document.getElementById('totalProducts').textContent = data.length;
  if (data.length > 0) {
    var prices = data.map(function(p) { return p.price; });
    document.getElementById('minPrice').textContent = formatRupiah(Math.min.apply(null, prices));
    document.getElementById('maxPrice').textContent = formatRupiah(Math.max.apply(null, prices));
  } else {
    document.getElementById('minPrice').textContent = '-';
    document.getElementById('maxPrice').textContent = '-';
  }
}

/* ===== SHARE ===== */
function shareProduct(productId) {
  var p = products.find(function(x) { return x.id === productId; });
  if (!p) return;
  var text = '📱 ' + p.operator + ' - ' + p.denom + '\n💰 Harga: ' + formatRupiah(p.price);
  if (navigator.share) {
    try {
      navigator.share({ title: p.operator + ' - ' + p.denom, text: text }).catch(function() {});
    } catch(e) { showToast('Share gagal', 'warning'); }
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast('📋 Link disalin!', 'success');
    }).catch(function() {
      showToast('❌ Gagal menyalin', 'warning');
    });
  } else {
    showToast('📋 ' + text, 'success');
  }
}

/* ===== MODALS ===== */
function openBuyModal(productId) {
  var p = products.find(function(x) { return x.id === productId; });
  if (!p) return;
  state.selectedProduct = p;
  document.getElementById('modalProduct').textContent = p.operator + ' — ' + p.denom;
  document.getElementById('modalPrice').textContent = formatRupiah(p.price);
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  state.selectedProduct = null;
}

function openCart() {
  renderCart();
  document.getElementById('cartModalOverlay').classList.add('active');
}

function closeCart() {
  document.getElementById('cartModalOverlay').classList.remove('active');
}

function closeSuccess() {
  document.getElementById('successModalOverlay').classList.remove('active');
}

/* ===== ✅ CHECKOUT - dengan suara + WA ===== */
function handleCheckout() {
  if (state.cart.length === 0) {
    showToast('⚠️ Keranjang masih kosong', 'warning');
    return;
  }

  var total = state.cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
  var orderId = 'ORD-' + Date.now().toString().slice(-8);
  var now = new Date();
  var dateStr = now.toLocaleDateString('id-ID', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  // Simpan order terakhir
  state.lastOrder = {
    orderId: orderId,
    items: state.cart.slice(),
    total: total,
    date: dateStr
  };

  // 1️⃣ Bunyikan notifikasi suara
  var spoken = speakNotification(
    'Pesanan Anda berhasil di proses. Silakan hubungi admin ' + ADMIN_NAME + '.'
  );

  // 2️⃣ Tampilkan ringkasan order di modal sukses
  var summaryHtml = '<div class="order-summary-title">📋 Ringkasan Pesanan</div>';
  for (var i = 0; i < state.cart.length; i++) {
    var item = state.cart[i];
    summaryHtml += '<div class="order-summary-item">' +
      '<span>' + item.operator + ' - ' + item.denom + ' × ' + item.qty + '</span>' +
      '<span>' + formatRupiah(item.price * item.qty) + '</span>' +
    '</div>';
  }
  summaryHtml += '<div class="order-summary-total"><span>Total</span><span>' + formatRupiah(total) + '</span></div>';
  summaryHtml += '<div style="margin-top:8px;font-size:0.72rem;color:var(--text-muted);text-align:center;">Order ID: ' + orderId + '</div>';
  document.getElementById('orderSummary').innerHTML = summaryHtml;

  // 3️⃣ Tampilkan modal sukses
  document.getElementById('successModalOverlay').classList.add('active');
  closeCart();

  // 4️⃣ Toast konfirmasi
  showToast('✅ Pesanan berhasil diproses!', 'success');

  // 5️⃣ Kosongkan keranjang
  state.cart = [];
  saveState();
  updateCartBadge();
  renderCart();

  // 6️⃣ Info fallback jika TTS tidak didukung
  if (!spoken) {
    console.warn('TTS tidak tersedia — gunakan notifikasi visual');
  }
}

/* ===== EVENT LISTENERS ===== */
document.getElementById('searchInput').addEventListener('input', function(e) {
  state.searchQuery = e.target.value.trim();
  renderTable();
});

var filterBtns = document.querySelectorAll('.filter-btn');
for (var i = 0; i < filterBtns.length; i++) {
  (function(btn) {
    btn.addEventListener('click', function() {
      for (var k = 0; k < filterBtns.length; k++) filterBtns[k].classList.remove('active');
      btn.classList.add('active');
      state.currentFilter = btn.dataset.filter;
      renderTable();
    });
  })(filterBtns[i]);
}

document.getElementById('sortSelect').addEventListener('change', function(e) {
  state.sortBy = e.target.value;
  renderTable();
});

document.getElementById('operatorSelect').addEventListener('change', function(e) {
  state.operatorFilter = e.target.value;
  renderTable();
});

document.getElementById('cartBtn').addEventListener('click', openCart);

document.getElementById('addToCartBtn').addEventListener('click', function() {
  if (state.selectedProduct) {
    addToCart(state.selectedProduct.id);
    closeModal();
  }
});

// ✅ Checkout dengan suara + WA
document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

// ✅ Tombol WA di modal sukses
document.getElementById('waAdminBtn').addEventListener('click', sendOrderToWhatsApp);

document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target.id === 'modalOverlay') closeModal();
});

document.getElementById('cartModalOverlay').addEventListener('click', function(e) {
  if (e.target.id === 'cartModalOverlay') closeCart();
});

document.getElementById('successModalOverlay').addEventListener('click', function(e) {
  if (e.target.id === 'successModalOverlay') closeSuccess();
});

/* ===== THEME ===== */
var themeToggle = document.getElementById('themeToggle');
var bodyEl = document.body;

function initTheme() {
  if (safeGet('theme') === 'dark') {
    bodyEl.classList.add('dark');
    themeToggle.textContent = '☀️';
  }
}

themeToggle.addEventListener('click', function() {
  bodyEl.classList.toggle('dark');
  var isDark = bodyEl.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  safeSet('theme', isDark ? 'dark' : 'light');
});

/* ===== INIT ===== */
initTheme();
updateCartBadge();
renderTable();