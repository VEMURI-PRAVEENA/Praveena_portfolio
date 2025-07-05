
import { Card, CardContent } from "@/components/ui/card";
import { QrCode } from "lucide-react";

const ResumeQR = () => {
  // QR Code data URL for the resume link
  const qrCodeData = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI1IiB5PSI1IiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjI1IiB5PSI1IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSIzNSIgeT0iNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjUiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjUwIiB5PSI1IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSI2MCIgeT0iNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iNzAiIHk9IjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjgwIiB5PSI1IiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iODUiIHk9IjEwIiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJ3aGl0ZSIvPgo8IS0tIFNpbXBsaWZpZWQgUVIgY29kZSBwYXR0ZXJuIC0tPgo8cmVjdCB4PSI1IiB5PSIyNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMTUiIHk9IjI1IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSIzNSIgeT0iMjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSI1NSIgeT0iMjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjcwIiB5PSIyNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iODAiIHk9IjI1IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSI5MCIgeT0iMjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjUiIHk9IjgwIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjgwIiB5PSI4MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBmaWxsPSJibGFjayIvPgo8cmVjdCB4PSIxMCIgeT0iODUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9Ijg1IiB5PSI4NSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";

  return (
    <div className="flex items-center gap-4">
      <Card className="bg-white p-2 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-2">
          <a
            href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative group">
              <img
                src={qrCodeData}
                alt="QR Code to Resume"
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex items-center justify-center">
                <QrCode size={20} className="text-white" />
              </div>
            </div>
          </a>
        </CardContent>
      </Card>
      
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-1">Scan to view</p>
        <p className="text-xs font-medium text-white">Resume</p>
      </div>
    </div>
  );
};

export default ResumeQR;
