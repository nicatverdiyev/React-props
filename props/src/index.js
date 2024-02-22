import ReactDOM from "react-dom/client";
import "./index.css";
import FilmCard from "./components/FilmCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div
      className="head"
      style={{ display: "flex", justifyContent: "center", fontSize: 30 }}
    >
      FİLMLER
    </div>
    <div className="Common">
      <FilmCard
        name="Wonka"
        text="Roald Dahl'ın popüler çocuk kitabı Charlienin Çikolata Fabrikasına dayanan film, dünyaca ünlü bir çikolata fabrikasının sahibi olan Willy Wonkanın maceralarına ve fabrikada çalışan Umpa Lumpalarla nasıl tanıştığına odaklanıyor."
        image="https://i.haberglobal.com.tr/storage/files/images/2023/12/15/1-u7yg.jpg"
      />

      <FilmCard
        name="Mutlu Canavarlar Ailesi 2"
        text="Mutlu Canavar Ailesi 2, gündelik yaşamlarından krutulmalarını sağlayan yeni bir maceraya atılan mutlu canavar ailesinin hikayesini konu ediyor. Wishbone ailesi sıradan ailelerden oldukça farklıdır çünkü onlar, süper güçleri olan canavarlara dönüşebilir."
        image="https://cdn1.ntv.com.tr/gorsel/VAC5x_0bE0C2anJLjUam4Q.jpg?width=1000&mode=crop&scale=both"
      />
      <FilmCard
        name="Ben Kimim ?"
        text="Genç bir bilgisayar dehası olan Benjamin, sadece Almanya’da değil dünya çapında tanınan biri olmak istemektedir. Yer altı bir hacker grubu, Benjamin’i aralarına katılmaya çağırınca, Benjamin bu tehlikeli teklifi kabul eder ancak bu tehlikeli oyunlarda başına geleceklerden habersizdir."
        image="https://image.hurimg.com/i/hurriyet/75/615x0/5d78c5b545d2a023a0d347d5.jpg"
      />
      <FilmCard
        name="Venom"
        text="Eddie Brock hırslı bir muhabirdir. Sevgilisinin çalıştığı araştırma firmasının sahibi de peşinde olduğu hikayelerden biridir. Kötü niyetli ve kendi amaçları doğrultusunda hareket eden bu adamın hikayesinin peşinde koşarken, Eddie, sadece simbiyoz hâlinde yaşayabilen ve adrenalinle besleniyor."
        image="https://img.memurlar.net/galeri/21601/b9d35dbf-b969-ec11-8108-a0369f7d1484.jpg?width=800"
      />
      <FilmCard
        name="Hayvan Krallığı"
        text="Julia Cody on yedi yaşındaki oğlunu, yıllardır görmediği suç dolu ailesinden uzak tutmayı başarmıştır. Julia’nın aşırı doz eroin kullanıp ölmesi sonrasında evsiz kalan oğlu J (Joshua), büyükannesi Janine ‘Smurf’le iletişime geçip yaşayacak bir yere ihtiyacı olduğunu söyler."
        image="https://www.baskasinema.com/wp-content/uploads/2023/11/120x160_REGNE_INTER-300x444.jpg"
      />
    </div>
  </>
);
