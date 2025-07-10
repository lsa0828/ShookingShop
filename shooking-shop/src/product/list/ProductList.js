import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import ProductCard from "./ProductCard";
import { productIdsAtom } from "../../recoil/atoms/productIdsAtom";

const BATCH_SIZE = 10

function ProductList() {
  const productIds = useRecoilValue(productIdsAtom);
  const observerRef = useRef();
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const visibleIds = productIds.slice(0, visibleCount);

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
  
  return (
    <div className="flex justify-center p-6 480:py-6 480:px-2">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 480:gap-2">
        {visibleIds.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
        <div ref={observerRef} className="h-6"/>
      </div>
    </div>
  )
}

export default ProductList;