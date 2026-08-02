import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { FileDown, RotateCcw } from 'lucide-react';

function AccionesResultado() {
  const navigate = useNavigate();
  const [exportando, setExportando] = useState(false);

  const volverAGenerar = () => navigate('/formulario');

  const exportarPDF = async () => {
    setExportando(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas-pro'),
        import('jspdf'),
      ]);

      const elemento = document.getElementById('contenido-resultado');
      if (!elemento) return;

      const canvas = await html2canvas(elemento, {
        scale: Math.min(2, Math.floor(32767 / elemento.offsetHeight) || 1),
        useCORS: true,
        backgroundColor: '#020617',
        onclone: (doc) => {
          const nav = doc.getElementById('nav-resultados');
          if (nav) nav.style.display = 'none';
        },
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('arquitectura-recomendada.pdf');
      toast.success('PDF descargado correctamente');
    } catch (error) {
      console.error('Error al exportar el PDF:', error);
      toast.error(`No pudimos exportar el PDF: ${error.message || 'intenta de nuevo'}`);
    } finally {
      setExportando(false);
    }
  };

  return (
    <div className="w-full mt-12 flex flex-col items-center gap-4">
      <Toaster position="top-right" />
      <h2 className="text-2xl text-(--color-blanco) font-bold text-center">
        ¿Qué deseas hacer ahora?
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={volverAGenerar}
          className="border border-(--color-amarillo) text-(--color-amarillo) hover:bg-(--color-amarillo)/10 font-bold py-2 px-6 rounded-lg transition-colors"
        >
          <RotateCcw className="inline w-4 h-4 mr-2" />
          Volver a generar
        </button>
        <button
          onClick={exportarPDF}
          disabled={exportando}
          className="bg-(--color-amarillo) text-(--color-azul-fondo) hover:bg-(--color-amarillo-hover) disabled:opacity-50 font-bold py-2 px-6 rounded-lg transition-colors"
        >
          <FileDown className="inline w-4 h-4 mr-2" />
          {exportando ? 'Generando...' : 'Exportar como PDF'}
        </button>
      </div>
    </div>
  );
}

export default AccionesResultado;
