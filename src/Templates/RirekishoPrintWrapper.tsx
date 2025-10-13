import { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Rirekisho from "./Rirekisho";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col items-center py-10 ">
      {/* ✅ Printable area */}
      <div ref={contentRef}>
        <Rirekisho />
      </div>

      {/* ✅ Print button (won’t show in print view) */}

      <Button onClick={() => handlePrint?.()} className="mt-20">
        Print 履歴書
      </Button>
    </div>
  );
};

export default RirekishoPrintWrapper;
