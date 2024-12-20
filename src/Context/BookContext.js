import React from "react";

export const BookContext = React.createContext();

class BookContextProvider extends React.Component {
  state = {
    books: [
      {
        title: "Kırmızı Pazartesi",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "Şeker Portakalı",
        author: "Jose Muro de Vasconselos",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "En Uzun Yüzyıl",
        author: "İlber Ortaylı",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
      {
        title: "Dracula",
        author: "Bram Stoker",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "Karamazov Kardeşler",
        author: "Fyodor Mihayloviç Dostoyevski",
        pageNum: 200,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
        topic:
          "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor.",
      },
      {
        title: "Sultanın Korsanları",
        author: "Emrah Safa Gürkan",
        pageNum: 296,
        imageURL:
          "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
        topic:
          "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor.",
      },
    ],
  };
  render() {
    return (
      <BookContext.Provider value={this.state}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}
export default BookContextProvider;

// 1 -  Default Value ---> this.context
// Context Nesnesini oluşturduk
// Context nesnemize başlangıç değeri verdik ve Export ettik başka js dosyalarında kullanalım diye
// Kullanmak istediğimiz componente import ettik
// static contextType = BookContext; = context type yardımıyla contexti ilgili componente atadık
// const books = this.context; Yardımıyla ilgili veriye ulaştık
// 2 -  Provaider ---> Consumer
//- Class Comp oluşturduk ve veriyi istate içerisine koyduk
// - contexte ait provider ile state te bulunan veriyi aldık
// - Parrent child ilişkisi {this.props.children}
// - veriyi göndereceğimiz componenta context import ediyoruz
// -Render içerisinde consumer ile proriderdan gelen veriyi yakalıyoruz.
