# Kütüphaneler
1- json-server
2- axios
4- react-router-dom
3- react-toastify

1.AŞAMA
-------------
- Sayfalar arası geçiş için react routur dom yapısı kullanılacak
- axios ile baseURL olan temel adresi  http://localhost:3005 ile güncelledik
- Json-server ile eriştiğimiz apideki verileri axios ile tanımladığımız fonksiyondan çekme işlemi yapıldı.
-Ürün eklemek için sayfa addbook sayfası oluşturuldu
- Form Yapısı oluşturulacak
- Form için inputlara yazılacak değerler useState ile değişikliği takip etmek onChange yapısı değerler takip edilecek
- Formdan gelen bilgileri bir objede tutup json-server kısmına axios ile gönderme işlemi

2.Aşama
--------
- edit iconuna tılanınca edit sayfasına yönlendirme
- edit iconu için edit sayfasına tıklanan ürüne ait bilgiler gönderilecek
- düzenlenecek bulup o ürün üzerinde değişiklier yapıp ona göre devam edeceğiz ürün idsine göre bulmak için;
  useParams yapısı ile axiosla çağırdığımız tüm ürünlerin arasında find fonksiyonuyla id ye göre arayacağız 
- inputlara atanacak değerler bulunacak
- bulunan değerleri güncelleyebileceğiz
- güncelleme işleminden sonra react-toastfy yapısı ile booklist sayfamıza geri döneceğiz