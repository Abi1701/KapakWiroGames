import PdfViewerComponent from './pdfViewer';

export default function DocumentViewerComponent() {
	return (
		<div className="PDF-viewer">
			<PdfViewerComponent
				document={"document.pdf"}
			/>
		</div>
	);
}