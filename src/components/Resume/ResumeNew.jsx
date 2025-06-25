import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    // Dynamically import the PDF
    import("../../assets/Piyush_ResumeG.pdf")
      .then(module => {
        setPdfUrl(module.default);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load PDF:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your resume...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="bg-red-100 rounded-full p-4 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">Failed to load resume</h2>
        <p className="mb-6 text-gray-600 max-w-md">We couldn't load the PDF version of my resume. Please try downloading it instead.</p>
        <a
          href={pdfUrl}
          download="Piyush_Kashyap_Resume.pdf"
          className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl"
        >
          <AiOutlineDownload className="mr-3 text-xl" />
          <span className="font-semibold">Download Resume</span>
        </a>
        <p className="mt-8 text-gray-500 text-sm">If the download doesn't work, please contact me at piyushkashyap731@gmail.com</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-24 px-4 pb-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Professional Resume</h1>
          <p className="text-gray-600">Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        {/* Download button */}
        <div className="flex justify-center mb-10">
          <a
            href={pdfUrl}
            download="Piyush_Kashyap_Resume.pdf"
            className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <AiOutlineDownload className="mr-3 text-xl" />
            <span className="font-semibold">Download PDF Version</span>
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="h-80 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          {pdfUrl ? (
            <iframe
              src={`${pdfUrl}#view=fitH`}
              title="Resume PDF Viewer"
              className="w-full h-full"
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <p className="text-gray-500">Loading PDF viewer...</p>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Having trouble viewing?</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Make sure you have a PDF reader installed</li>
            <li>Try refreshing the page if it doesn't load immediately</li>
            <li>Download the PDF for the best experience</li>
            <li>Contact me if you need an alternative format</li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need more information? Feel free to reach out:</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:piyushkashyap731@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
              piyushkashyap731@gmail.com
            </a>
            <a href="https://linkedin.com/in/piyush-kashyap731" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;