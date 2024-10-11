
// Açıklama : 

// Basit İndirim Hesaplama:
// Bir ürünün fiyatını ve indirim yüzdesini kullanıcıdan alarak, indirimli fiyatı hesaplayan bir program yazın.
// Örn: 100 TL olan bir ürüne %20 indirim yapıldığında ne kadar ödenmesi gerektiğini hesaplayıp alert ile gösterin.

//  let fiyat = prompt('Fiyatı giriniz');
//  let indirimYüzdesi = prompt('Yüzdeyi giriniz');
// console.log('İndirimli Fiyat: ' + ((Number(fiyat)) - ( Number(fiyat) * (Number(indirimYüzdesi) / 100))) + ' TL');


// Vize ve Final Notu ile Ortalama:
// Kullanıcıdan vize ve final notunu alarak dönem ortalamasını hesaplayan bir program yazın (vize %40, final %60 etkili olsun).
// Eğer not 50’den büyükse "Geçtiniz", 50'den küçükse ve 40’tan büyükse "Şartlı geçtiniz", 40’tan küçükse "Kaldınız" mesajını verin.

// let vize = prompt('Vize notunu giriniz:')
// let final = prompt('Final notunu giriniz:')
// ortalama = (Number(vize) * 0.4 ) + (Number(final) * 0.6);
// if (ortalama >= 50 ) {
//   console.log('Ortalamanız: ' + ortalama  + ' Geçtiniz');
// } else if (ortalama <50  && ortalama >=40)  {
//   console.log('Ortalamanız: ' + ortalama + ' Şartlı Geçtiniz');
// } else if (ortalama <40 ) {
//   console.log('Ortalamanız: ' + ortalama + ' Kaldınız');
// }
  

// Haftanın Günü:
// ​​​​​​​​​​Kullanıcıdan bir sayı alın ve o sayıya karşılık gelen günü yazdırın (1 = Pazartesi, 7 = Pazar). Switch case araştırabilirsiniz.

// let gün = prompt('Sayı giriniz: ')
// let günAdı;

// switch (gün) {
//   case "1":
//   günAdı = "Pazartesi";
//   break;
//   case "2":
//   günAdı = "Salı";
//   break;
//   case "3":
//   günAdı = "Çarşamba";
//   break;
//   case "4":
//   günAdı = "Perşembe";
//   break;
//   case "5":
//   günAdı = "Cuma";
//   break;
//   case "6":
//   günAdı = "Cumartesi";
//   break;
//   case "7":
//   günAdı = "Pazar";
//   break;
//   default:
//   günAdı = "Geçersiz gün";
// }
// console.log(günAdı);

// Büyük Sayıyı Bulma:
// Kullanıcıdan üç sayı alarak, bu sayılardan en büyüğünü bulan bir program yazın.

// let sayi1 = prompt('1. Sayıyı giriniz: ')
// let sayi2 = prompt('2. Sayıyı giriniz: ')
// let sayi3 = prompt('3. Sayıyı giriniz: ')
//  if (sayi1 > sayi2 && sayi1 > sayi3) {
//   console.log('En büyük sayı : ' + sayi1)
//  } else if (sayi2 > sayi1 && sayi2 > sayi1) {
//   console.log('En büyük sayı :' + sayi2 );
//  } else {
//   console.log('En büyük sayı :' + sayi3);
//  }
 



// Saniyeyi Saate Çevirme:
// Kullanıcıdan bir saniye değeri alıp bunu saat, dakika ve saniye cinsine çevirin (Örn: 3661 saniye = 1 saat, 1 dakika, 1 saniye).​​​​​​

// let toplamSaniye = prompt('Saniyeyi giriniz')

//  saat = Math.floor(Number(toplamSaniye) / 3600) ;
//  kalanDakika = Number(toplamSaniye) % 3600;
//  dakika = Math.floor(Number(kalanDakika) / 60);
//  saniye = Number(kalanDakika) % 60;
//  console.log(saat + ' saat ' + dakika + ' dakika ' + saniye + ' saniye ');

// Güncel Yaş Hesaplama:
// Kullanıcıya önce yıl, sonra ay, sonra gün sorarak tam yaşını gün, ay ve yıl cinsinden hesaplayan bir program yazın.


// Saatlik Ücret Hesaplama:
// Kullanıcıdan çalıştığı saat sayısını ve saat başı ücretini alarak toplam kazancını hesaplayın.

// let yevmiye = prompt('Saatlik ücreti giriniz: ')
// let saat = prompt('Çalıştığınız saati giriniz: ')
// console.log('Aldığınız ücret : ' + Number(yevmiye) * Number(saat) + ' TL') 

// Aylık Taksit Hesaplama:
// Kullanıcıdan kredi miktarını ve taksit sayısını alarak aylık taksiti hesaplayın.
// v2 toplam faiz oranını da sorup aylık faizli taksiti hesaplayın.

// let kredi =prompt('Almak istediğiniz krediyi giriniz :');
// let taksit =prompt('Kredinizin taksit sayısını giriniz :');
// console.log('Aylık Taksit tutarınız: ' + (Number(kredi) / Number(taksit)) + ' TL');

// let kredi =prompt('Almak istediğiniz krediyi giriniz :');
// let taksit =prompt('Kredinizin taksit sayısını giriniz :');
// let faiz =prompt('Faiz oranını giriniz: ')
// console.log('Faiz oranlı aylık taksit tutarınız : ' + (Number(kredi) + (Number(kredi) * (Number(faiz) / 100))) / Number(taksit) + ' TL');


// Kullanıcı Adı ve Şifre Kontrolü:
// Kullanıcıdan hem kullanıcı adını hem de şifresini alın.
// Eğer kullanıcı adı "admin" ve şifre "1234" ise “Giriş başarılı” mesajı verin, aksi halde “Kullanıcı adı veya şifre hatalı” deyin.

// let ıd = prompt('Kullanıcı adını giriniz : ');
// let password = prompt('Lütfen şifrenizi giriniz: ');
// if (ıd === 'admin' && password === '1234') {
//   console.log('giriş başarılı');
// } else {
//   console.log('Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyiniz! ');
// }

// Net Kar Hesaplama:
// Satış bedelini ve maliyet (0 girilebilir) girerek; kdv dahil toplam ve net kar bilgilerini gösterin.
// kdv %20, gelir vergisi %25 olarak hesaplanmalıdır. Eğer 100 TL satış yaparsanız bu tutarın %25'i gelir vergisi olarak hesaplanır.
// 100 TL'lik satış bedelini toplam satış bedeli için kdv dahil 120 TL olarak hesaplarız. 

// let satis = prompt('Lütfen satış fiyatını giriniz.');
// let maliyet = prompt('Lütfen maliyeti giriniz');
// satis = Number(satis);
// maliyet = Number(maliyet);
// console.log('KDV dahil fiyat :  ' + ((satis * 0.2) + satis) + ' Net kar : ' + (satis - (satis * 0.25) - maliyet));

