import ProductCard from "./ProductCard";
import { useRecoilValue } from "recoil";
import { productIdsAtom } from "../recoil/atoms/productIdsAtom";
import { useEffect, useRef, useState } from "react";

const BATCH_SIZE = 6

function ProductList() {
  const productIds = useRecoilValue(productIdsAtom);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const observerRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => {
            const next = prev + BATCH_SIZE;
            return next > productIds.length ? productIds.length : next;
          })
        }
      },
      {threshold: 1}
    )
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => observer.disconnect()
  }, [productIds, observerRef]);

  const visibleIds = productIds.slice(0, visibleCount);
  
  return (
    <div className="flex justify-center p-6 480:py-6 480:px-2">
      <div className="grid grid-cols-2 gap-4 480:gap-2">
        {visibleIds.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
        <div ref={observerRef} className="h-6"/>
      </div>
    </div>
  )
}

export default ProductList;