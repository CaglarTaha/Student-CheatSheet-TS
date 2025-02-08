/* **************************
   DETAYLI TYPESCRIPT CHEATSHEET
   Başlangıçtan İleri Seviyeye Türkçe/İngilizce Açıklamalı
************************** */

// ===== 1. TEMEL TİPLER (BASIC TYPES) =====

// A. Primitive Types (Temel Tipler) (5)
let isim: string = "Ahmet";       // String
let yas: number = 30;            // Number
let aktifMi: boolean = true;     // Bool (True or False)
let tanimsiz: undefined;         // Undefined
let bosDeger: null = null;       // NULL

// B. Type Inference (Tip Çıkarımı)
let sehir = "İstanbul";          // Otomatik string tipi
// sehir = 34;                   // HATA: Tip uyuşmazlığı

// C. Explicit Types 
let telefon: number;
telefon = 5551234567;
// telefon = "5551234567";       // HATA

// D. Union Types 
let id: string | number = "ABC123";
id = 123;                        // Geçerli
// id = true;                    // HATA

// ===== 2. DİZİLER (ARRAYS) =====

// A. Temel Kullanım
let meyveler: string[] = ["Elma", "Muz"];
let sayilar: number[] = [1, 2, 3];

// B. Çoklu Tip Diziler
let karisik: (string | number)[] = ["Elma", 5, 7];

// C. Tuple (Demet)
let kullaniciBilgisi: [string, number] = ["Ahmet", 30];
// kullaniciBilgisi = [30, "Ahmet"];  // HATA: Sıra önemli

// ===== 3. NESNELER (OBJECTS) =====

// A. Temel Obje
let kullanici: {
  ad: string;
  yas: number;
  eposta?: string;  // Optional (Opsiyonel)
} = {
  ad: "Ayşe",
  yas: 25
};

// B. Index Signature
let esnekObje: {
  [key: string]: number | string;
} = {
  yas: 30,
  meslek: "Mühendis"
};

// ===== 4. FONKSİYONLAR (FUNCTIONS) =====

// A. Temel Fonksiyon
function topla(a: number, b: number): number {
  return a + b;
}

// B. Opsiyonel Parametreler
function selamla(ad: string, soyad?: string): string {
  return soyad ? `Merhaba ${ad} ${soyad}` : `Merhaba ${ad}`;
}

// C. Arrow Function
const kareAl = (sayi: number): number => sayi * sayi;

// D. Generic Fonksiyon
function arrayDoldur<T>(value: T, count: number): T[] {
  return new Array(count).fill(value);
}
const sayiDizi = arrayDoldur<number>(5, 3);  // [5,5,5]
const metinDizi = arrayDoldur("Merhaba", 2); // ["Merhaba","Merhaba"]

// ===== 5. TYPE ALIAS & INTERFACE =====

// A. Type Alias 
type Kullanici = {
  id: number;
  ad: string;
  eposta: string;
};

// B. Interface
interface IUrun {
  id: number;
  ad: string;
  fiyat: number;
  stoktaVarMi: boolean;
  
  // Metot Tanımı
  fiyatGuncelle(yeniFiyat: number): void;
}

// C. Interface Extension
interface IDigitalUrun extends IUrun {
  dosyaBoyutu: string;
  indirmeLinki: string;
}

// ===== 6. GENERICS (JENERİKLER) =====

// A. Generic Interface
interface APIResponse<T> {
  status: number;
  data: T;
  hata?: string;
}

// Kullanım Örneği
const kullaniciYaniti: APIResponse<Kullanici> = {
  status: 200,
  data: {
    id: 1,
    ad: "Mehmet",
    eposta: "mehmet@ornek.com"
  }
};

// B. Generic Constraints (Kısıtlamalar)
interface Uzunluk {
  length: number;
}

function uzunlukYazdir<T extends Uzunluk>(item: T): void {
  console.log(`Uzunluk: ${item.length}`);
}
uzunlukYazdir("Merhaba");  // 7
uzunlukYazdir([1,2,3]);    // 3

// ===== 7. UTILITY TYPES (YARDIMCI TİPLER) =====

type KullaniciGereken = Required<Kullanici>;         // Tüm alanlar zorunlu
type KullaniciOpsiyonel = Partial<Kullanici>;        // Tüm alanlar opsiyonel
type KullaniciBasit = Pick<Kullanici, "id" | "ad">;  // Seçili alanlar
type KullaniciWithoutId = Omit<Kullanici, "id">;     // Hariç tutulan alanlar

// ===== 8. GELİŞMİŞ KONULAR =====

// A. Decorators (Dekoratörler)
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(`Metot Çağrıldı: ${key}`);
    return originalMethod.apply(this, args);
  };
  
  return descriptor;
}

class HesapMakinesi {
  @log
  topla(a: number, b: number): number {
    return a + b;
  }
}

// B. Conditional Types (Koşullu Tipler)
type CheckNumber<T> = T extends number ? "Evet" : "Hayır";
type Sonuc1 = CheckNumber<5>;      // "Evet"
type Sonuc2 = CheckNumber<"test">; // "Hayır"

// ===== 9. MODERN SYNTAX =====

// A. Optional Chaining (?.)
const kullanici2 = {
  adres: {
    sehir: "Ankara"
  }
};
console.log(kullanici2.adres?.postaKodu?.substring(0,2)); // Hata vermez

// B. Nullish Coalescing (??)
const config = {
  timeout: 0
};
const timeout = config.timeout ?? 3000; // 0

// C. Template Literal Types
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type APIEndpoint = `/api/${string}`;
const endpoint: APIEndpoint = "/api/users"; // Geçerli
// const endpoint2: APIEndpoint = "/users";  // HATA

// ===== 10. HATA YÖNETİMİ =====

// A. Custom Error Types
class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// B. Try-Catch with Type Guard
try {
  // Kodunuz
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Hata Alanı: ${error.field}`);
  }
}
