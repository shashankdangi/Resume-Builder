import { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Rirekisho from "./Rirekisho";

const RirekishoPrintWrapper = () => {
  // ✅ use the new API ref name
  const contentRef = useRef<HTMLDivElement>(null);

  // ✅ useReactToPrint with `contentRef` instead of `content`
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "履歴書",
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 10mm;
      }
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    `,
  });

  // ✅ handle Ctrl+P / Cmd+P manually
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        handlePrint?.();
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [handlePrint]);

  return (
    <div className="flex flex-col items-center">
      {/* ✅ Printable area */}
      <div ref={contentRef}>
        <Rirekisho />
      </div>

      {/* ✅ Print button (won’t show in print view) */}
      <button
        onClick={() => handlePrint?.()}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg no-print"
      >
        Print 履歴書
      </button>
    </div>
  );
};

export default RirekishoPrintWrapper;
