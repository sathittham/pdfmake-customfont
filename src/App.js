import logo from './logo.svg';
import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew-Bold.ttf',
    italics: 'THSarabunNew-Italic.ttf',
    bolditalics: 'THSarabunNew-BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <p className="App-intro">
          ตัวอย่างการสร้าง PDF ด้วย React และ pdfmake <br/>
          Sample PDF report generator using React and pdfmake.
        </p>
        <p>
          <button onClick={printPDF}>
            Export PDF
          </button>
        </p>
    </div>
  );
}

function printPDF(){

  var docDefinition = {
    content: [
      { text: 'สร้าง PDF ภาษาไทยด้วย pdfmake ', fontSize: 15 },
    ],
    defaultStyle:{
      font:'THSarabunNew'
    }
  };
  pdfMake.createPdf(docDefinition).open()

}

export default App;
