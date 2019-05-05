const PDFImage = require("pdf-image").PDFImage;

const originFolder1 = "/home/iperez/Desktop/lala/";
const originFolder2 = "/Users/pillippa/Downloads/archivos_pendientes/";
const prefixPreviewFolder = "preview/";

const files_1 = [
  "C1_Carnet_de_identidad_01.png",
  "C1_Contrato_de_trabajo_02.pdf",
  "C1_Carnet_de_identidad_02.png",
  "C1_Contrato_de_trabajo_03.pdf",
  "C1_Certificado_de_mantención_01.pdf",
  "C1_Factura_01.pdf",
  "C1_Certificado_de_mantención_02.pdf",
  "C1_Factura_02.pdf",
  "C1_Certificado_de_mantención_03.pdf",
  "C1_Factura_03.pdf",
  "C1_Certificado_emisiones_contaminantes_01.png",
  "C1_Factura_04.pdf",
  "C1_Certificado_estatuto_actualizado_01.jpeg",
  "C1_Liquidacion_de_sueldo_01.pdf",
  "C1_Certificado_estatuto_actualizado_02.png",
  "C1_Liquidacion_de_sueldo_02.pdf",
  "C1_Certificado_estatuto_actualizado_03.jpeg",
  "C1_Revision_tecnica_01.pdf",
  "C1_Contrato_de_trabajo_01.pdf",
  "C1_Revision_tecnica_02.pdf"
];

const files_2 = [
  // "C2_Carnet_de_Identidad_01.png",
  // "C2_Contrato_de_trabajo_02.pdf",
  // "C2_Carnet_de_Identidad_02.png",
  // "C2_Contrato_de_trabajo_03_SC.pdf",
  // "C2_Certificado_de_mantención_01.pdf",
  "C2_Liquidacion_de_sueldo_01.pdf"
  // "C2_Certificado_de_mantención_02.pdf",
  // "C2_Liquidacion_de_sueldo_02_SC.pdf",
  // "C2_Certificado_emisiones_contaminantes_01.png",
  // "C2_Revision_tecnica_01.pdf",
  // "C2_Contrato_de_Trabajo_01.pdf",
  // "C2_Revision_tecnica_02.pdf"
];

const getImage = (originFolder, fileName) => {
  const [name, extension] = fileName.split(".");
  if (!extension === "pdf") {
    console.log("is Image", fileName);
  }
  const pdfImage = new PDFImage(`${originFolder}${fileName}`, {
    convertOptions: {
      "--colorspace": "gray"
    }
  });

  pdfImage.convertPage(0).then(
    function(imagePath) {
      console.log(imagePath);
      fs.existsSync(`${originFolder}${prefixPreviewFolder}${name}.png`); // => true
    },
    err => {
      console.log(err);
      console.log(fileName, err);
    }
  );
};

files_1.map(elem => getImage(originFolder1, elem));
files_2.map(elem => getImage(originFolder2, elem));
