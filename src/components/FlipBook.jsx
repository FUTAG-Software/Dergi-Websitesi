import HTMLFlipBook from "react-pageflip";

function MyBook(props) {
  return (
    <HTMLFlipBook width={500} height={500}>
      <div className="bookPage">Page 1</div>
      <div className="bookPage">Page 2</div>
      <div className="bookPage">Page 3</div>
      <div className="bookPage">Page 4</div>
    </HTMLFlipBook>
  );
}
export default MyBook;