import Team from "./Team";
export default() => {
    return (
      <div className="about">
        <h2 className='title'>Hakkımızda</h2>
        <hr/>
        <h5>Elazığ Fırat Üniversitesi Teknoloji Ar-Ge ve Girişimcilik Öğrenci Topluluğu (FÜTAG), 2009 yılında Fırat Üniversitesi’nde öğrencilere mühendislik ve yönetim ilkelerini öğretmek ve uygulamak amacıyla kurulmuştur. Çeşitli projeler ve etkinliklerle öğrencileri iş hayatına hazırlamak ve kendi potansiyellerinin farkına varmalarını sağlamak için elinden geleni yapan topluluğumuz 6 yıl gibi kısa bir sürede Türkiye’nin en iyi öğrenci toplulukları listesinde yerini almış ve 2016 yılında Ulusal Gençlik Parlamentosu’nda “Yılın En İyi Öğrenci Topluluğu” ödülünü almıştır. Yine 2016 yılında Gençlik ve Spor Bakanlığı’nın Kocaeli’nde düzenlediği yarışmada “İnovasyon Ödülü” almıştır.
        <br/> Topluluğumuz, Fırat Üniversitesi'nde "Ar-Ge" üzerine kurulan ilk öğrenci topluluğudur.</h5>
        <h2 className='title'>Ekibimiz</h2>
        <hr/>
        <Team />
      </div>
    );
  }
  