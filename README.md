Bileşen Yapısı
State Yönetimi (Dark Mode)

useState hook'u ile koyu mod (dark mode) özelliği yönetiliyor. Bu, kullanıcı tarafından aktif hale getirilebilen bir özellik olup, sayfanın arka planını ve metin rengini değiştirir.
Kişisel Bilgiler

Kullanıcı adı, soyadı, e-posta ve telefon bilgileri doğrudan kisiselBilgiler adlı bir nesne içinde tanımlanır. Bu bilgiler, uygulamanın üst kısmında görünür.
Eğitim Bilgisi

egitim dizisi, kullanıcının eğitim geçmişini temsil eder. Her bir eğitim bilgisi, okul adı, bölüm ve mezuniyet yılı gibi temel bilgileri içerir.
Eğitim bölümü, iki sütunlu bir grid yapısında görüntülenir.
İş Deneyimi

isDeneyimi dizisi, kullanıcının iş deneyimlerini içerir. Bu deneyimler, çalışılan şirketin adı, pozisyon, süre ve açıklamalarla birlikte sunulur.
Yetenekler

Kullanıcı, sahip olduğu yetenekleri yetenekler dizisi içinde tanımlar. Her bir yetenek, küçük etiketler (tag) şeklinde görsel olarak sunulur.
Hobiler ve İlgi Alanları

hobiler dizisi, kullanıcının hobilerini temsil eder. Her hobi, ilgili ikonu ve açıklamalarıyla birlikte sunulur. Buradaki ikonlar, react-icons kütüphanesinden alınır.
Sosyal Medya Bağlantıları

Kullanıcı sosyal medya hesaplarına bağlantılar ekleyebilir. Bu bağlantılar LinkedIn, Twitter ve Instagram gibi popüler platformlara yönlendiren ikonlar içerir.
Koyu/Açık Mod Geçişi

Sağ üst köşede bulunan bir buton aracılığıyla koyu ve açık mod arasında geçiş yapılabilir. Bu özellik, kullanıcı deneyimini iyileştirmeyi hedefler.
Stil ve Tasarım
Uygulama, Tailwind CSS sınıflarıyla tasarlanmıştır. Bu, hızlı bir şekilde şık ve modern bir görünüm elde edilmesini sağlar. Ayrıca, her bölümde farklı renkler, gölgeler ve yuvarlak köşeler kullanılarak görsel olarak hoş bir deneyim sunulur. Koyu modda, arka plan ve metin renkleri daha koyu tonlara dönüştürülürken, açık modda daha hafif tonlar tercih edilir.
